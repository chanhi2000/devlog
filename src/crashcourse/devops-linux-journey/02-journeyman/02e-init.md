---
lang: ko-KR
title: Journeyman > Init
description: 🐧Linux Journey > Journeyman > Init
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Journeyman > Init
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Journeyman > Init
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02e-init.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Init
desc: Learn about the different init systems, SysV, Upstart and systemd.
link: https://linuxjourney.com/lesson/sysv-overview
logo: https://linuxjourney.com/assets/init-36c89d8f5958b7a10251e5958735345be7997426ab3d6db3f84c4dc04a99f9af.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. System V Overview

The main purpose of init is to start and stop essential processes on the system. There are three major implementations of init in Linux, System V, Upstart and systemd. In this lesson, we're going to go over the most traditional version of init, System V init or Sys V (pronounced as 'System Five').

To find out if you are using the Sys V init implementation, if you have an <FontIcon icon="iconfont icon-folder"/>`/etc/inittab` file you are most likely running Sys V.

Sys V starts and stops processes sequentially, so let's say if you wanted to start up a service named foo-a, well before foo-b can work, you have to make sure foo-a is already running. Sys V does that with scripts, these scripts start and stop services for us, we can write our own scripts or most of the time use the ones that are already built in the operating system and are used to load essential services.

The pros of using this implementation of init, is that it's relatively easy to solve dependencies, since you know foo-a comes before foo-b, however performance isn't great because usually one thing is starting or stopping at a time.

When using Sys V, the state of the machine is defined by runlevels which are set from 0 to 6. These different modes will vary depending on the distribution, but most of the time will look like the following:

- 0: Shutdown
- 1: Single User Mode
- 2: Multiuser mode without networking
- 3: Multiuser mode with networking
- 4: Unused
- 5: Multiuser mode with networking and GUI
- 6: Reboot

When your system starts up, it looks to see what runlevel you are in and executes scripts located inside that runlevel configuration. The scripts are located in <FontIcon icon="iconfont icon-folder"/>`/etc/rc.d/rc[runlevel number].d/` or <FontIcon icon="iconfont icon-folder"/>`/etc/init.d`. Scripts that start with S(start) or K(kill) will run on startup and shutdown, respectively. The numbers next to these characters are the sequence they run in.

For example:

```sh
cd /etc/rc.d/rc0.d
ls
# K10updates  K80openvpn
```

We see when we switch to `runlevel` 0 or shutdown mode, our machine will try to run a script to kill the updates services and then openvpn. To find out what runlevel your machine is booting into, you can see the default `runlevel` in the <FontIcon icon="iconfont icon-folder"/>`/etc/inittab` file. You can also change your default runlevel in this file as well.

One thing to note, System V is slowly getting replaced, maybe not today, or even years from now. However, you may see runlevels come up in other init implementations, this is primarily to support those services that are only started or stopped using System V init scripts.

If you are running System V, change the default runlevel of your machine to something else and see what happens.

---

## 2. System V Service

There are many command line tools you can use to manage Sys V services.

### List services

```sh
service --status-all
```

### Start a service

```sh
sudo service networking start
```

### Stop a service

```sh
sudo service networking stop
```

### Restart a service

```sh
sudo service networking restart
```

These commands aren't specific to Sys V init systems, you can use these commands to manage Upstart services as well. Since Linux is trying to move away from the more traditional Sys V init scripts, there are still things in place to help that transition.

Manage a couple of services and change their states, what do you observe?

---

## 3. Upstart Overview

Upstart was developed by Canonical, so it was the init implementation on Ubuntu for a while, however on modern Ubuntu installations `systemd` is now used. Upstart was created to improve upon the issues with Sys V, such as the strict startup processes, blocking of tasks, etc. Upstart's event and job driven model allow it to respond to events as they happen.

To find out if you are using Upstart, if you have a <FontIcon icon="iconfont icon-folder"/>`/usr/share/upstart` directory that's a pretty good indicator.

Jobs are the actions that Upstart performs and events are messages that are received from other processes to trigger jobs. To see a list of jobs and their configuration:

```sh
ls /etc/init
# acpid.conf                   mountnfs.sh.conf
# alsa-restore.conf            mtab.sh.conf
# alsa-state.conf              networking.conf
# alsa-store.conf              network-interface.conf
# anacron.conf                 network-interface-container.conf
```

Inside these job configurations, it'll include information on how to start jobs and when to start jobs.

For example, in the <FontIcon icon="iconfont icon-file"/>`networking.conf` file, it could say something as simple as:

```
start on runlevel [235]
stop on runlevel [0]
```

This means that it will start setting up networking on runlevel 2, 3 or 5 and will stop networking on runlevel 0. There are many ways to write the configuration file and you'll discover that when you look at the different job configurations available.

The way that Upstart works is that:

1. First, it loads up the job configurations from <FontIcon icon="iconfont icon-folder"/>`/etc/init`
2. Once a startup event occurs, it will run jobs triggered by that event.
3. These jobs will make new events and then those events will trigger more jobs
4. Upstart continues to do this until it completes all the necessary jobs

If you are running Upstart, see if you can make sense of the job configurations in <FontIcon icon="iconfont icon-folder"/>`/etc/init`.

---

## 4. Upstart Jobs

Upstart can trigger a lot of events and jobs to run, unfortunately there is no easy way to see where an event or job originated, so you'll have to poke around the job configurations in <FontIcon icon="iconfont icon-folder"/>`/etc/init`. Most of the time, you won't ever need to look at the Upstart job configuration files, but you will want to control some specific jobs more easily. There are a lot of useful commands you can use in an Upstart system.

### View jobs

```sh
initctl list
# shutdown stop/waiting
# console stop/waiting
# ...
```

You'll see a list of Upstart jobs with different statuses applied to them. In each line, the job name is the first value and the second field (before the `/`) is actually the goal of the job, the third value (after the `/`) is the current status. So we see that our shutdown job eventually wants to stop, but it is currently in a state of waiting. The job status and goals will change as you start or stop jobs.

### View specific job

```sh
initctl status networking
# networking start/running
```

We won't get into the details of how to write an Upstart job configuration, however we already know that jobs are stopped, started and restarted in these configurations. These jobs also emit events, so they can start other jobs. We'll go through the manual commands of the Upstart operation, but if you are curious, you should dig into the `.conf` files in more depth.

Manually start a job

```sh
sudo initctl start networking
```

Manually stop a job

```sh
sudo initctl stop networking
```

Manually restart a job

```sh
sudo initctl restart networking
```

Manually emit an event

```sh
sudo initctl emit some_event
```

Observe your list of Upstart jobs, now change the job state with one of the commands we learned today. What do you notice afterwards?

---

## 5. Systemd Overview

Systemd is slowly becoming the emerging standard for init. If you have a <FontIcon icon="iconfont icon-folder"/>`/usr/lib/systemd` directory, you're most likely using systemd.

Systemd uses goals to get your system up and running. Basically you have a target that you want to achieve and this target also has dependencies that we need to achieve. Systemd is extremely flexible and robust, it does not follow a strict sequence to get processes started. Here's what happens during the typical `systemd` boot:

1. First, systemd loads its configuration files, usually located in <FontIcon icon="iconfont icon-folder"/>`/etc/systemd/system` or <FontIcon icon="iconfont icon-folder"/>`/usr/lib/systemd/system`
2. Then it determines its boot goal, which is usually default.target
3. Systemd figures out the dependencies of the boot target and activates them

Similar to Sys V runlevels, systemd boots into different targets:

- `poweroff.target` - shutdown system
- `rescue.target` - single user mode
- `multi-user`.target - multiuser with networking
- `graphical.target` - multiuser with networking and GUI
- `reboot.target` - restart

The default boot goal of `default.target` usually points to the `graphical.target`.

The main object that systemd works with are known as units. Systemd doesn't just stop and start services, it can mount filesystems, monitor your network sockets, etc and because of that robustness it has different types of units it operates. The most common units are:

- __Service units__: these are the services we've been starting and stopping, these unit files end in `.service`
- __Mount units__: These mount filesystems, these unit files end in `.mount`
- __Target units__: These group together other units, the files end in `.target`

For example, let's say we boot into our `default.target`, well this target groups together the `networking.service` unit, `crond.service` unit, etc, so once we activate a single unit, everything below that unit gets activated as well.

---

## 6. Systemd Goals

We won't get into the details of writing systemd unit files. We will however go over a brief overview of a unit file and how to manually control units.

Here is a basic service unit file: <FontIcon icon="iconfont icon-file"/>`foobar.service`

```
[Unit]
Description=My Foobar
Before=bar.target

[Service]
ExecStart=/usr/bin/foobar

[Install]
WantedBy=multi-user.target
```

This is a simple service target, at the beginning of the file we see a section for `[Unit]`, this allows us to give our unit file a description as well as control the ordering of when to activate the unit. The next portion is the `[Service]` section, under here we can start, stop or reload a service. And the `[Install]` section is used for dependency. This is only the tip of the iceberg for writing systemd files, so I implore you to read up on the subject if you want to know more.

Now, let's get into some commands you can use with systemd units:

### List units

```sh
systemctl list-units
```

### View status of unit

```sh
systemctl status networking.service
```

### Start a service

```sh
sudo systemctl start networking.service
```

### Stop a service

```sh
sudo systemctl stop networking.service
```

### Restart a service

```sh
sudo systemctl restart networking.service
```

### Enable a unit

```sh
sudo systemctl enable networking.service
```

### Disable a unit

```sh
sudo systemctl disable networking.service
```

Again, you have yet to see how much depth systemd gets into, so read up on it if you want to learn more.

View the unit statuses and start and stop a few services. What do you observe?

---

## 7. Power States

Hard to believe we haven't actually discussed ways to control your system state through the command line, but when talking about init, we not only talk about the modes that get us starting our system, but also the ones that stop our system.

To shutdown your system:

```sh
sudo shutdown -h now
```

This will halt the system (power it off), you must also specify a time when you want this to take place. You can add a time in minutes that will shutdown the system in that amount of time.

```sh
sudo shutdown -h +2
```

This will shutdown your system in two minutes. You can also restart with the shutdown command:

```sh
sudo shutdown -r now
```

Or just use the reboot command:

```sh
sudo reboot
```

What do you think is happening with `init` when you shutdown your machine?
