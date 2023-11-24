---
lang: ko-KR
title: Journeyman > Process Utilization
description: 🐧Linux Journey > Journeyman > Process Utilization
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Journeyman > Process Utilization
    content: Process Utilization
  - property: og:title
    content: Process Utilization
  - property: og:description
    content: 🐧Linux Journey > Journeyman > Process Utilization
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02f-process-utilization.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Process Utilization
desc: Learn resource monitoring with top, load averages, iostat and more!
link: https://linuxjourney.com/lesson/tracking-processes-top
logo: https://linuxjourney.com/assets/process-utilization-7cbd9417e89126a2548cb7ce59555fe53682fe00aa9e509840c4f22fa25b4d16.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. Tracking processes: `top`

In this course, we'll go over how to read and analyze the resource utilization on your system, this lesson shows some great tools to use when you need to track what a process is doing.

### `top`

We've discussed top before, but we're going to dig into the specifics of what it's actually displaying. Remember top is the tool we used to get a real time view of the system utilization by our processes:

```sh
# top - 18:06:26 up 6 days,  4:07,  2 users,  load average: 0.92, 0.62, 0.59
# Tasks: 389 total,   1 running, 387 sleeping,   0 stopped,   1 zombie
# %Cpu(s):  1.8 us,  0.4 sy,  0.0 ni, 97.6 id,  0.1 wa,  0.0 hi,  0.0 si,  0.0 st
# KiB Mem:  32870888 total, 27467976 used,  5402912 free,   518808 buffers
# KiB Swap: 33480700 total,    39892 used, 33440808 free. 19454152 cached Mem
#
# PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND                             
# 6675 patty    20   0 1731472 520960  30876 S   8.3  1.6 160:24.79 chrome                             
#  6926 patty    20   0  935888 163456  25576 S   4.3  0.5   5:28.13 chrome 
```

Let's go over what this output means, you don't have to memorize this, but come back to this when you need a reference.

__1st line: This is the same information you would see if you ran the uptime command (more to come)__

The fields are from left to right:

1. Current time
2. How long the system has been running
3. How many users are currently logged on
4. System load average (more to come)

__2nd line: Tasks that are running, sleeping, stopped and zombied__

__3rd line: Cpu information__

1. `us`: user CPU time - Percentage of CPU time spent running users’ processes that aren’t niced.
2. `sy`: system CPU time - Percentage of CPU time spent running the kernel and kernel processes
3. `ni`: nice CPU time - Percentage of CPU time spent running niced processes
4. `id`: CPU idle time - Percentage of CPU time that is spent idle
5. `wa`: I/O wait - Percentage of CPU time that is spent waiting for I/O. If this value is low, the problem probably isn’t disk or network I/O
6. `hi`: hardware interrupts - Percentage of CPU time spent serving hardware interrupts
7. `si`: software interrupts - Percentage of CPU time spent serving software interrupts
8. `st`: steal time - If you are running virtual machines, this is the percentage of CPU time that was stolen from you for other tasks

__4th and 5th line: Memory Usage and Swap Usage__

Processes List that are Currently in Use

1. `PID`: Id of the process
2. `USER`: user that is the owner of the process
3. `PR`: Priority of process
4. `NI`: The nice value
5. `VIRT`: Virtual memory used by the process
6. `RES`: Physical memory used from the process
7. `SHR`: Shared memory of the process
8. `S`: Indicates the status of the process: S=sleep, R=running, Z=zombie,D=uninterruptible,T=stopped
9. `%CPU` - this is the percent of CPU used by this process
10. `%MEM` - percentage of RAM used by this process
11. `TIME+` - total time of activity of this process
12. `COMMAND` - name of the process

You can also specify a process ID if you just want to track certain processes:

```sh
top -p 1
```
Play around with the top command and see what processes are using the most resources.

---

## 2. `lsof` and `fuser`

Let's say you plugged in a USB drive and starting working on some files, once you were done, you go and unmount the USB device and you're getting an error "_Device or Resource Busy_". How would you find out which files in the USB drive are still in use? There are actually two tools you can use for this:

### `lsof`

Remember files aren't just text files, images, etc, they are everything on the system, disks, pipes, network sockets, devices, etc. To see what is in use by a process, you can use the lsof command (short for "list open files") this will show you a list of all the open files and their associated process.


```sh
lsof .
# COMMAND    PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
# lxsession 1491 pete  cwd    DIR    8,6     4096  131 .
# update-no 1796 pete  cwd    DIR    8,6     4096  131 .
# nm-applet 1804 pete  cwd    DIR    8,6     4096  131 .
# indicator 1809 pete  cwd    DIR    8,6     4096  131 .
# xterm     2205 pete  cwd    DIR    8,6     4096  131 .
# bash      2207 pete  cwd    DIR    8,6     4096  131 .
# lsof      5914 pete  cwd    DIR    8,6     4096  131 .
# lsof      5915 pete  cwd    DIR    8,6     4096  131 .
```

Now I can see what processes are currently holding the device/file open. In our USB example, you can also kill these processes so we can unmount this pesky drive.

### `fuser`

Another way to track a process is the `fuser` command (short for "_file user_"), this will show you information about the process that is using the file or the file user.

```sh
fuser -v .
# USER        PID ACCESS COMMAND
# /home/pete:         pete  1491 ..c.. lxsession
#                      pete  1796 ..c.. update-notifier
#                      pete  1804 ..c.. nm-applet
#                      pete  1809 ..c.. indicator-power
#                      pete  2205 ..c.. xterm
#                      pete  2207 ..c.. bash
```

We can see which processes are currently using our <FontIcon icon="iconfont icon-folder"/>`/home/pete` directory. The lsof and fuser tools are very similar, familiarize yourself with these tools and try using them next time you need to track a file or process down.

Read the manpages for lsof and fuser, there is a lot of information that we didn't cover that allows you to have greater flexibility with these tools.

---

## 3. Process Threads

You may have heard of the terms single-threaded and multi-threaded processes. Threads are very similar to processes, in that they are used to execute the same program, they are often referred to as lightweight processes. If a process has one thread it is single-threaded and if a process has more than one thread it is multi-threaded. However, all processes have at least one thread.

Processes operate with their own isolated system resources, however threads can share these resources among each other easily, making it easier for them to communicate among each other and at times it is more efficient to have a multi-threaded application than a multi-process application.

Basically, let's say you open up LibreOffice Writer and Chrome, each is it's own separate process. Now you go inside Writer and start editing text, when you edit the text it gets automatically saved. These two parallel "_lightweight processes_" of saving and editing are threads.

To view process threads, you can use:

```sh
ps m
#  PID TTY      STAT   TIME COMMAND
# 2207 pts/2    -      0:01 bash
#    - -        Ss     0:01 -
# 5252 pts/2    -      0:00 ps m
#    - -        R+     0:00 -
```

The processes are denoted with each PID and underneath the processes are their threads (denoted by a `--`). So you can see that the processes above are both single-threaded.

Run the `ps m` command and see what processes you have running are multi-threaded.

---

## 4. CPU Monitoring

Let's go over a useful command, uptime.

```sh
uptime
# 17:23:35 up 1 day,  5:59,  2 users,  load average: 0.00, 0.02, 0.05
```

We talked about uptime in the first lesson of this course, but we haven't gone over the load average field. Load averages are good way to see the CPU load on your system. These numbers represent the average CPU load in 1, 5, and 15 minute intervals. What do I mean by CPU load, the CPU load is the average number of processes that are waiting to be executed by the CPU.

Let's say you have a single-core CPU, think of this core as a single lane in traffic. If it's rush hour on the freeway, this lane is gonna be really busy and traffic is gonna be at 100% or a load of 1. Now the traffic has become so bad, it's backing up the freeway and getting the regular roads busy by twice the amount of cars, we can say that your load is 200% or a load of 2. Now let's say it clears up a bit and there are only half as many cars on the freeway lane, we can say the load of the lane is 0.5. When traffic is non-existent and we can get home quicker, the load should ideally be very low, like 2am traffic low. The cars in this case are processes and these processes are just waiting to get off the freeway and get home.

Now just because you have a load average of 1 doesn't mean your computer is slogging around. Most modern machines these days have multiple cores. If you had a quad core processor (4 cores) and your load average is 1, it's really just affecting 25% of your CPU. Think of each core as a lane in traffic. You can view the amount of cores you have on your system with `cat /proc/cpuinfo`.

When observing load average, you have to take the number of cores into account, if you find that your machine is always using an above average load, there could something wrong going on.

Check the load average of your system and see what it's doing.

---

## 5. I/O Monitoring

We can also monitor CPU usage as well as monitor disk usage with a handy tool known as iostat

```sh
iostat
# Linux 3.13.0-39-lowlatency (icebox)     01/28/2016      _i686_  (1 CPU)
# 
# avg-cpu:  %user   %nice %system %iowait  %steal   %idle
#            0.13    0.03    0.50    0.01    0.00   99.33
# Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
# sda               0.17         3.49         1.92     385106     212417
```

The first part is the CPU information:

- `%user`: Show the percentage of CPU utilization that occurred while executing at the user level (application)
- `%nice`: Show the percentage of CPU utilization that occurred while executing at the user level with nice priority.user CPU utilization with nice priorities
- `%system`: Show the percentage of CPU utilization that occurred while executing at the system level (kernel).
- `%iowait`: Show the percentage of time that the CPU or CPUs were idle during which the system had an outstanding disk I/O request.
- `%steal`: Show the percentage of time spent in involuntary wait by the virtual CPU or CPUs while the hypervisor was servicing another virtual processor.
- `%idle`: Show the percentage of time that the CPU or CPUs were idle and the system did not have an outstanding disk I/O request.

The second part is the disk utilization:

- `tps`: Indicate the number of transfers per second that were issued to the device. A transfer is an I/O request to the device. Multiple logical requests can be combined into a single I/O request to the device. A transfer is of indeterminate size.
- `kB_read/s`: Indicate the amount of data read from the device expressed in kilobytes per second.
- `kB_wrtn/s` Indicate the amount of data written to the device expressed in kilobytes per second.
- `kB_read`: The total number of kilobytes read.
- `kB_wrtn`: The total number of kilobytes written.

Use `iostat` to view your disk usage.

---

## 6. Memory Monitoring

In addition to CPU monitoring and I/O monitoring you can monitor your memory usage with vmstat

```sh
vmstat
# procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
#  r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
#  1  0      0 396528  38816 384036    0    0     4     2   38   79  0  0 99  0  0
```
The fields are as follows:

### procs

- `r`: Number of processes for run time
- `b`: Number of processes in uninterruptible sleep

### memory

- `swpd`: Amount of virtual memory used
- `free`: Amount of free memory
- `buff`: Amount of memory used as buffers
- `cache`: Amount of memory used as cache

### swap

- `si`: Amount of memory swapped in from disk
- `so`: Amount of memory swapped out to disk

### io

- `bi`: Amount of blocks received in from a block device
- `bo`: Amount of blocks sent out to a block device

### system

- `in`- Number of interrupts per second
- `cs`- Number of context switches per second

### cpu

- `us`: Time spent in user time
- `sy`: Time spent in kernel time
- `id`: Time spent idle
- `wa`: Time spent waiting for IO

Look at your memory usage with `vmstat`.

---

## 7. Continuous Monitoring

These monitoring tools are good to look at when your machine is having issues, but what about machines that are having issues when you aren't looking. For those, you'll need to use a continuous monitoring tool, something that will collect, report and save your system activity information. In this lesson we will go over a great tool to use `sar`.

### Installing `sar`

Sar is a tool that is used to do historical analysis on your system, first make sure you have it installed by installing the sysstat package sudo apt install sysstat.

### Setting up data collection

Usually once you install sysstat, your system will automatically start collecting data, if it doesn't you can enable it by modifying the ENABLED field in <FontIcon icon="iconfont icon-folder"/>`/etc/default/sysstat`.

### Using sar

```sh
sudo sar -q
```
This command will list the details from the start of the day.

```sh
sudo sar -r
```
This will list the details of memory usage from the start of the day.

```sh
sudo sar -P
```
This will list the details of CPU usage.

To see a view of a different day, you can go into <FontIcon icon="iconfont icon-folder"/>`/var/log/sysstat/saXX` where XX is the day you want to view.

```sh
sar -q /var/log/sysstat/sa02
```

Install `sar` on your system and start collecting and analyzing your system resource utilization.

---

## 8. Cron Jobs

Although we have been talking about resource utilization, I think this would be a good point to mention a neat tool in Linux that is used to schedule tasks using cron. There is a service that runs programs for you at whatever time you schedule. This is a really useful if you have a script you want to run once a day that needs to execute something for you.

For example, let's say I have a script located in <FontIcon icon="iconfont icon-folder"/>`/home/pete/scripts/change_wallpaper`. I use this script every morning to change the picture I use for my wallpaper, but each morning I have to manually execute this script. Instead what I can do is create a cron job that executes my script through cron. I can specify the time I want this cron job to run and execute my script.

```sh
# 30 08 * * * /home/pete/scripts/change_wallpaper
```
The fields are as follows from left to right:

- __Minute__: (0-59)
- __Hour__: (0-23)
- __Day of the month__: (1-31)
- __Month__: (1-12)
- __Day of the week__: (0-7). 0 and 7 are denoted as Sunday

The asterisk in the field means to match every value. So in my above example, I want this to run every day in every month at 8:30am.

To create a cronjob, just edit the crontab file:

```sh
crontab -e
```

Create a cronjob that you want to run at a scheduled time.

