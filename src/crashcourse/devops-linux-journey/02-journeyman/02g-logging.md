---
lang: ko-KR
title: Journeyman > Logging
description: 🐧Linux Journey > Journeyman > Logging
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Journeyman > Logging
    content: Logging
  - property: og:title
    content: Logging
  - property: og:description
    content: 🐧Linux Journey > Journeyman > Logging
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02g-logging.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Logging
desc: Learn about system logs and the /var/log directory.
link: https://linuxjourney.com/lesson/system-logging
logo: https://linuxjourney.com/assets/logging-6a62164e665c33b2f4d0fa4d1a002a934c291ce3fa9eebb8398612256ddb5241.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. System Logging

The services, kernel, daemons, etc on your system are constantly doing something, this data is actually sent to be saved on your system in the form of logs. This allows us to have a human readable journal of the events that are happening on our system. This data is usually kept in the /var directory, the /var directory is where we keep our variable data, such as logs!

How are these messages even getting received on your system? There is a service called `syslog` that sends this information to the system logger.

Syslog actually contains many components, one of the important ones is a daemon running called syslogd (newer Linux distributions use `rsyslogd`), that waits for event messages to occur and filter the ones it wants to know about, and depending on what it's supposed to do with that message, it will send it to a file, your console or do nothing with it.

You would think that this system logger is the centralized place to manage logs, but unfortunately it's not. You'll see many applications that write their own logging rules and generate different log files, however in general the format of logs should include a timestamp and the event details.

Here is an example of a line from `syslog`:

```sh
less /var/log/syslog
# Jan 27 07:41:32 icebox anacron[4650]: Job `cron.weekly' started
```

Here we can see that at Jan 27 07:41:32 our cron service ran the `cron.weekly` job. You can view all the event messages that syslog collects with in the <FontIcon icon="iconfont icon-file"/>`/var/log/syslog` file.

Look at your <FontIcon icon="iconfont icon-file"/>`/var/log/syslog` file and see what else is happening on your machine.

---

## 2. `syslog`

The `syslog` service manages and sends logs to the system logger. Rsyslog is an advanced version of syslog, most Linux distributions should be using this new version. The output of all the logs the `syslog` service collects can be found at <FontIcon icon="iconfont icon-file"/>`/var/log/syslog` (every message except auth messages).

To find out what files are maintained by our system logger, look at the configuration files in <FontIcon icon="iconfont icon-file"/>`/etc/rsyslog.d`:

```sh
less /etc/rsyslog.d/50-default.conf 
# First some standard log files.  Log by facility.
#
# auth,authpriv.*                 /var/log/auth.log
# *.*;auth,authpriv.none          -/var/log/syslog
# #cron.*                         /var/log/cron.log
# #daemon.*                       -/var/log/daemon.log
# kern.*                          -/var/log/kern.log
# #lpr.*                          -/var/log/lpr.log
# mail.*                          -/var/log/mail.log
# #user.*                         -/var/log/user.log
```

These rules to log files are denoted by the selector on the left column and the action on the right column. The action tells us where to send the log information, in a file, console, etc. Remember not every application and service uses `rsyslog` to manage their logs, so if you want to know specifically what is logged you'll have to look inside this directory.

Let's actually see logging in action, you can manually send a log with the logger command:

```sh
logger -s Hello
```

Now look inside your <FontIcon icon="iconfont icon-file"/>`/var/log/syslog` and you should see this entry in your logs!

Look at your <FontIcon icon="iconfont icon-file"/>`/etc/rsyslog.d` configuration file and see what else is being logged via the system logger.

---

## 3. General Logging

There are many log files you can view on your system, many important ones can be found under <FontIcon icon="iconfont icon-folder"/>`/var/log`. We won't go through them all, but we'll discuss a couple of the major ones.

There are two general log files you can view to get a glimpse of what your system is doing:

## <FontIcon icon="iconfont icon-file"/>`/var/log/messages`

This log contains all non-critical and non-debug messages, includes messages logged during bootup (dmesg), auth, cron, daemon, etc. Very useful to get a glimpse of how your machine is acting.

## <FontIcon icon="iconfont icon-file"/>`/var/log/syslog`

This logs everything except auth messages, it's extremely useful for debugging errors on your machine.

These two logs should be more than enough when troubleshooting issues with your system, However, if you just want to view a specific log component, there are also separate logs for those as well.

Look at your <FontIcon icon="iconfont icon-file"/>`/var/log/messages` and <FontIcon icon="iconfont icon-file"/>`/var/log/syslog` files and see what the differences are.

---

## 4. Kernel Logging

### <FontIcon icon="iconfont icon-file"/>`/var/log/dmesg`

On boot-time your system logs information about the kernel ring buffer. This shows us information about hardware drivers, kernel information and status during bootup and more. This log file can be found at <FontIcon icon="iconfont icon-file"/>`/var/log/dmesg` and gets reset on every boot, you may not actually see any use in it now, but if you were to ever have issues with something during bootup or a hardware issue, dmesg is the best place to look. You can also view this log using the `dmesg` command.

### <FontIcon icon="iconfont icon-file"/>`/var/log/kern.log`

Another log you can use to view kernel information is the <FontIcon icon="iconfont icon-file"/>`/var/log/kern.log` file, this logs the kernel information and events on your system, it also logs `dmesg` output.

Look at your `dmesg` and `kern` logs, what differences do you notice?

---

## 5. Authentication Logging

Authentication logging can be very useful to look at if you are having issues logging in.

### <FontIcon icon="iconfont icon-file"/>`/var/log/auth.log`

This contains system authorization logs, such as user login and the authentication method used.

Sample snippet:

```sh
# Jan 31 10:37:50 icebox pkexec: pam_unix(polkit-1:session): session opened for user root by (uid=1000)
```

Do some failed logins and then a successful one, look at your <FontIcon icon="iconfont icon-file"/>`/var/log/auth.log` and see what happened.

---

## 6. Managing Log Files

Log files generate lots of data and they store this data on your hard disks, however there are lots of issues with this, for the most part we just want to be able to see newer logs, we also want to manage our disk space efficiently, so how do we do all of this? The answer is with `logrotate`.

The `logrotate` utility does log management for us. It has a configuration file that allows us to specify how many and what logs to keep, how to compress our logs to save space and more. The `logrotate` tool is usually run out of cron once a day and the configuration files can be found in <FontIcon icon="iconfont icon-file"/>`/etc/logrotate.d`.

There are other logrotating tools you can use to manage your logs, but `logrotate` is the most common one.

Look at your `logrotate` configuration file and see how it manages some of your logs.

