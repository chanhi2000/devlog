---
lang: ko-KR
title: GrassHopper > Processes
description: 🐧Linux Journey > GrassHopper > Processes
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > GrassHopper > Processes
    content: Processes
  - property: og:title
    content: Processes
  - property: og:description
    content: 🐧Linux Journey > GrassHopper > Processes
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/01-grasshopper
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Processes
desc: Learn about the running processes on the system.
link: https://linuxjourney.com/lesson/monitor-processes-ps-command
logo: https://linuxjourney.com/assets/processes-bf5fd64c3ace61821e8378b9911ef0606de5721e178d319abdc443fb82c9547a.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. `ps` (Processes)

Processes are the programs that are running on your machine. They are managed by the kernel and each process has an ID associated with it called the __process ID (PID)__. This PID is assigned in the order that processes are created.

Go ahead and run the ps command to see a list of running processes:

```sh
$ ps
# PID        TTY     STAT   TIME          CMD
# 41230    pts/4    Ss        00:00:00     bash
# 51224    pts/4    R+        00:00:00     ps
```

This shows you a quick snapshot of the current processes:

- `PID`: Process ID
- `TTY`: Controlling terminal associated with the process (we'll go in detail about this later)
- `STAT`: Process status code
- `TIME`: Total CPU usage time
- `CMD`: Name of executable/command

If you look at the man page for ps you'll see that there are lots of command options you can pass, they will vary depending on what options you want to use - BSD, GNU or Unix. In my opinion the BSD style is more popular to use, so we're gonna go with that. If you are curious the difference between the styles is the amount of dashes you use and the flags.

```sh
ps aux
```

The __a__ displays all processes running, including the ones being ran by other users. The __u__ shows more details about the processes. And finally the __x__ lists all processes that don't have a TTY associated with it, these programs will show a ? in the TTY field, they are most common in daemon processes that launch as part of the system startup.

You'll notice you're seeing a lot more fields now, no need to memorize them all, in a later course on advanced processes, we'll go over some of these again:

- `USER`: The effective user (the one whose access we are using)
- `PID`: Process ID
- `%CPU`: CPU time used divided by the time the process has been running
- `%MEM`: Ratio of the process's resident set size to the physical memory on the machine
- `VSZ`: Virtual memory usage of the entire process
- `RSS`: Resident set size, the non-swapped physical memory that a task has used
- `TTY`: Controlling terminal associated with the process
- `STAT`: Process status code
- `START`: Start time of the process
- `TIME`: Total CPU usage time
- `COMMAND`: Name of executable/command

The ps command can get a little messy to look at, for now the fields we will look at the most are PID, STAT and COMMAND.

Another very useful command is the top command, `top` gives you real time information about the processes running on your system instead of a snapshot. By default you'll get a refresh every 10 seconds. Top is an extremely useful tool to see what processes are taking up a lot of your resources.

```sh
top
```

Use the `ps` command with different flags and see how the output changes.

---

## 2. Controlling Terminal

We discussed how there is a TTY field in the ps output. The TTY is the terminal that executed the command.

There are two types of terminals, regular __terminal devices__ and __pseudoterminal devices__. A regular terminal device is a native terminal device that you can type into and send output to your system, this sounds like the terminal application you've been launching to get to your shell, but it's not.

We're gonna segue so you can see this action, go ahead and type <kbd>Ctrl</kbd>-<kbd>Alt</kbd>-<kbd>F1</kbd> to get into TTY1 (the first virtual console), you'll notice how you don't have anything except the terminal, no graphics, etc. This is considered a regular terminal device, you can exit this with <kbd>Ctrl</kbd>-<kbd>Alt</kbd>-<kbd>F7</kbd>.

A pseudoterminal is what you've been used to working in, they emulate terminals with the shell terminal window and are denoted by PTS . If you look at ps again, you'll see your shell process under <FontIcon icon="iconfont icon-folder"/>`pts/*`.

Ok, now circling back to the controlling terminal, processes are usually bound to a controlling terminal. For example, if you were running a program on your shell window such as find and you closed the window, your process would also go with it.

There are processes such as daemon processes, which are special processes that are essentially keeping the system running. They often start at system boot and usually get terminated when the system is shutdown. They run in the background and since we don't want these special processes to get terminated they are not bound to a controlling terminal. In the ps output, the TTY is listed as a `?` meaning it does not have a controlling terminal.

Look at your `ps` output and list all the unique TTY values.

---

## 3. Process Details

Before we get into more practical applications of processes, we have to first understand what they are and how they work. This part can get confusing since we are diving into the nitty gritty, so feel free to come back to this lesson if you don't want to learn about it now.

A process like we said before is a running program on the system, more precisely it's the system allocating memory, CPU, I/O to make the program run. A process is an instance of a running program, go ahead and open 3 terminal windows, in two windows, run the `cat` command without passing any options (the cat process will stay open as a process because it expects stdin). Now in the third window run: `ps aux | grep cat`. You'll see that there are two processes for `cat`, even though they are calling the same program.

The kernel is in charge of processes, when we run a program the kernel loads up the code of the program in memory, determines and allocates resources and then keeps tabs on each process, it knows:

- The status of the process
- The resources the process is using and receives
- The process owner
- Signal handling (more on that later)
- And basically everything else

All processes are trying to get a taste of that sweet resource pie, it's the kernel's job to make sure that processes get the right amount of resources depending on process demands. When a process ends, the resources it used are now freed up for other processes.

---

## 4. Process Creation

Again this lesson and the next are purely information to let you see what's under the hood, feel free to circle back to this once you've worked with processes a bit more.

When a new process is created, an existing process basically clones itself using something called the fork system call (system calls will be discussed very far into the future). The fork system call creates a mostly identical child process, this child process takes on a new process ID (PID) and the original process becomes its parent process and has something called a parent process ID __PPID__. Afterwards, the child process can either continue to use the same program its parent was using before or more often use the execve system call to launch up a new program. This system call destroys the memory management that the kernel put into place for that process and sets up new ones for the new program.

We can see this in action:

```sh
ps l
```

The `l` option gives us a "long format" or even more detailed view of our running processes. You'll see a column labelled __PPID__, this is the parent ID. Now look at your terminal, you'll see a process running that is your shell, so on my system I have a process running bash. Now remember when you ran the ps l command, you were running it from the process that was running bash. Now you'll see that the __PID__ of the bash shell is the __PPID__ of the `ps l` command.

So if every process has to have a parent and they are just forks of each other, there must be a mother of all processes right? You are correct, when the system boots up, the kernels creates a process called `init`, it has a PID of 1. The init process can't be terminated unless the system shuts down. It runs with root privileges and runs many processes that keep the system running. We will take a closer look at init in the system bootup course, for now just know it is the process that spawns all other processes.

---

## 5. Process Termination

Now that we know what goes on when a process gets created, what is happening when we don't need it anymore? Be forewarned, sometimes Linux can get a little dark...

A process can exit using the `_exit` system call, this will free up the resources that process was using for reallocation. So when a process is ready to terminate, it lets the kernel know why it's terminating with something called a termination status. Most commonly a status of 0 means that the process succeeded. However, that's not enough to completely terminate a process. The parent process has to acknowledge the termination of the child process by using the wait system call and what this does is it checks the termination status of the child process. I know it's gruesome to think about, but the wait call is a necessity, after all what parent wouldn't want to know how their child died?

There is another way to terminate a process and that involves using signals, which we will discuss soon.

### Orphan Processes

When a parent process dies before a child process, the kernel knows that it's not going to get a wait call, so instead it makes these processes "orphans" and puts them under the care of init (remember mother of all processes). Init will eventually perform the wait system call for these orphans so they can die.

### Zombie Processes

What happens when a child terminates and the parent process hasn't called wait yet? We still want to be able to see how a child process terminated, so even though the child process finished, the kernel turns the child process into a zombie process. The resources the child process used are still freed up for other processes, however there is still an entry in the process table for this zombie. Zombie processes also cannot be killed, since they are technically "dead", so you can't use signals to kill them. Eventually if the parent process calls the wait system call, the zombie will disappear, this is known as "reaping". If the parent doesn't perform a wait call, init will adopt the zombie and automatically perform wait and remove the zombie. It can be a bad thing to have too many zombie processes, since they take up space on the process table, if it fills up it will prevent other processes from running.

---

## 6. Signals

A signal is a notification to a process that something has happened.

### Why we have signals

They are software interrupts and they have lots of uses:

- A user can type one of the special terminal characters (<kbd>Ctrl</kbd>-<kbd>C</kbd>) or (<kbd>Ctrl</kbd>-<kbd>Z</kbd>) to kill, interrupt or suspend processes
- Hardware issues can occur and the kernel wants to notify the process
- Software issues can occur and the kernel wants to notify the process
- They are basically ways processes can communicate

### Signal process

When a signal is generated by some event, it's then delivered to a process, it's considered in a pending state until it's delivered. When the process is ran, the signal will be delivered. However, processes have signal masks and they can set signal delivery to be blocked if specified. When a signal is delivered, a process can do a multitude of things:

- Ignore the signal
- "Catch" the signal and perform a specific handler routine
- Process can be terminated, as opposed to the normal exit system call
- Block the signal, depending on the signal mask

### Common signals

Each signal is defined by integers with symbolic names that are in the form of SIGxxx. Some of the most common signals are:

- `SIGHUP` or `HUP` or `1`: Hangup
- `SIGINT` or `INT` or `2`: Interrupt
- `SIGKILL` or `KILL` or `9`: Kill
- `SIGSEGV` or `SEGV` or `11`: Segmentation fault
- `SIGTERM` or `TERM` or `15`: Software termination
- `SIGSTOP` or `STOP`: Stop

Numbers can vary with signals so they are usually referred by their names.

Some signals are unblockable, one example is the SIGKILL signal. The KILL signal destroys the process.

---

## 7. kill (Terminate)

You can send signals that terminate processes, such a command is aptly named the kill command.

```sh
kill 12445
```

The `12445` is the PID of the process you want to kill. By default it sends a TERM signal. The SIGTERM signal is sent to a process to request its termination by allowing it to cleanly release its resources and saving its state.

You can also specify a signal with the kill command:

```sh
kill -9 12445
```

This will run the SIGKILL signal and kill the process.

__Differences between SIGHUP, SIGINT, SIGTERM, SIGKILL, SIGSTOP?__

These signals all sound reasonably similar, but they do have their differences.

- `SIGHUP` - Hangup, sent to a process when the controlling terminal is closed. For example, if you closed a terminal window that had a process running in it, you would get a SIGHUP signal. So basically you've been hung up on
- `SIGINT` - Is an interrupt signal, so you can use Ctrl-C and the system will try to gracefully kill the process
- `SIGTERM` - Kill the process, but allow it to do some cleanup first
- `SIGKILL` - Kill the process, kill it with fire, doesn't do any cleanup
- `SIGSTOP` - Stop/suspend a process

Kill some processes using different signals.

---

## 8. niceness

When you run multiple things on your computer, like perhaps Chrome, Microsoft Word or Photoshop at the same time, it may seem like these processes are running at the same time, but that isn't quite true.

Processes use the CPU for a small amount of time called a time slice. Then they pause for milliseconds and another process gets a little time slice. By default, process scheduling happens in this round-robin fashion. Every process gets enough time slices until it's finished processing. The kernel handles all of these switching of processes and it does a pretty good job at it most of the time.

Processes aren't able to decide when and how long they get CPU time, if all processes behaved normally they would each (roughly) get an equal amount of CPU time. However, there is a way to influence the kernel's process scheduling algorithm with a nice value. Niceness is a pretty weird name, but what it means is that processes have a number to determine their priority for the CPU. A high number means the process is nice and has a lower priority for the CPU and a low or negative number means the process is not very nice and it wants to get as much of the CPU as possible.

```sh
top
```

You can see a column for `NI` right now, that is the niceness level of a process.

To change the niceness level you can use the `nice` and `renice` commands:

```sh
nice -n 5 apt upgrade
```

The `nice` command is used to set priority for a new process. The `renice` command is used to set priority on an existing process.

```sh
renice 10 -p 3245
```

What processes aren't very nice and why?

---

## 9. Process States

Let's take a look at the ps aux command again:

```sh
ps aux
```

In the `STAT` column, you'll see lots of values. A linux process can be in a number of different states. The most common state codes you'll see are described below:

- `R`: running or runnable, it is just waiting for the CPU to process it
- `S`: Interruptible sleep, waiting for an event to complete, such as input from the terminal
- `D`: Uninterruptible sleep, processes that cannot be killed or interrupted with a signal, usually to make them go away you have to reboot or fix the issue
- `Z`: Zombie, we discussed in a previous lesson that zombies are terminated processes that are waiting to have their statuses collected
- `T`: Stopped, a process that has been suspended/stopped

---

## 10. <FontIcon icon="iconfont icon-folder"/>`/proc` filesystem

Remember everything in Linux is a file, even processes. Process information is stored in a special filesystem known as the <FontIcon icon="iconfont icon-folder"/>`/proc` filesystem.

```sh
ls /proc
```

You should see multiple values in here, there are sub-directories for every PID. If you looked at a PID in the ps output, you would be able to find it in the <FontIcon icon="iconfont icon-folder"/>`/proc` directory.

Go ahead and enter one of the processes and look at that file:

```sh
cat /proc/12345/status
```

You should see process state information and well as more detailed information. The <FontIcon icon="iconfont icon-folder"/>`/proc` directory is how the kernel is views the system, so there is a lot more information here than what you would see in `ps`.

---

## 11. Job Control

Let's say you're working on a single terminal window and you're running a command that is taking forever. You can't interact with the shell until it is complete, however we want to keep working on our machines, so we need that shell open. Fortunately we can control how our processes run with jobs:

### Sending a job to the background

Appending an ampersand (`&`) to the command will run it in the background so you can still use your shell. Let's see an example:

```sh
sleep 1000 &
sleep 1001 &
sleep 1002 &
```

### View all background jobs

Now you can view the jobs you just sent to the background.

```sh
jobs
# [1]    Running     sleep 1000 &
# [2]-   Running     sleep 1001 &
# [3]+   Running     sleep 1002 &
```

This will show you the job id in the first column, then the status and the command that was run. The `+` next to the job ID means that it is the most recent background job that started. The job with the `-` is the second most recent command.

### Sending a job to the background on existing job

If you already ran a job and want to send it to the background, you don't have to terminate it and start over again. First suspend the job with <kbd>Ctrl</kbd>-<kbd>Z</kbd>, then run the `bg` command to send it to the background.

```sh
sleep 1003
^Z
# [4]+    Stopped     sleep 1003

bg
# [4]+    sleep 1003 &

jobs
# [1]    Running     sleep 1000 &
# [2]    Running     sleep 1001 &
# [3]-   Running     sleep 1002 &
# [4]+   Running     sleep 1003 &
```

### Moving a job from the background to the foreground

To move a job out of the background just specify the job ID you want. If you run `fg` without any options, it will bring back the most recent background job (the job with the `+` sign next to it)

```sh
$ fg %1
```

### Kill background jobs

Similar to moving jobs out of the background, you can use the same form to kill the processes by using their Job ID.

```sh
kill %1
```
