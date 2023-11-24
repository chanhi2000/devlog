---
lang: ko-KR
title: Journeyman > Devices
description: 🐧Linux Journey > Journeyman > Devices
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Journeyman > Devices
    content: Devices
  - property: og:title
    content: Devices
  - property: og:description
    content: 🐧Linux Journey > Journeyman > Devices
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02a-devices.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Devices
desc: Learn about Linux devices and how they interact with the kernel and user space.
link: https://linuxjourney.com/lesson/dev-directory
logo: https://linuxjourney.com/assets/devices-5088f49b6a0d4ce892e106ee1e837e401de62d8f1ee8648ac00bd9a0e9f576c2.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. <FontIcon icon="iconfont icon-folder"/>`/dev` directory

When you connect a device to your machine, it generally needs a device driver to function properly. You can interact with device drivers through device files or device nodes, these are special files that look like regular files. Since these device files are just like regular files, you can use programs such as `ls`, `cat`, `etc` to interact with them. These device files are generally stored in the `/dev` directory. Go ahead and `ls` the <FontIcon icon="iconfont icon-folder"/>`/dev` directory on your system, you'll see a large amount of devices files that are on your system.

```sh
ls /dev
```
Some of these devices you've already used and interacted with such as <FontIcon icon="iconfont icon-folder"/>`/dev/null`. Remember when we send output to <FontIcon icon="iconfont icon-folder"/>`/dev/null`, the kernel knows that this device takes all of our input and just discards it, so nothing gets returned.

In the old days, if you wanted to add a device to your system, you'd add the device file in <FontIcon icon="iconfont icon-folder"/>`/dev` and then probably forget about it. Well repeat that a couple of times and you can see where there was a problem. The <FontIcon icon="iconfont icon-folder"/>`/dev` directory would get cluttered with static device files of devices that you've long since upgraded, stopped using, etc. Devices are also assigned device files in the order that the kernel finds them. So if everytime you rebooted your system, the devices could have different device files depending on when they were discovered.

Thankfully we no longer use that method, now we have something that we use to dynamically add and remove devices that are currently being used on the system and we'll be discussing this in the coming lessons.

Check out the contents of the <FontIcon icon="iconfont icon-folder"/>`/dev` directory, do you recognize any familiar devices?

---

## 2. device types

Before we chat about how devices are managed, let's actually take a look at some devices.

```sh
ls -l /dev
# brw-rw----   1 root disk      8,   0 Dec 20 20:13 sda
# crw-rw-rw-   1 root root      1,   3 Dec 20 20:13 null
# srw-rw-rw-   1 root root           0 Dec 20 20:13 log
# prw-r--r--   1 root root           0 Dec 20 20:13 fdata
```

The columns are as follows from left to right:

- Permissions
- Owner
- Group
- Major Device Number
- Minor Device Number
- Timestamp
- Device Name

Remember in the ls command you can see the type of file with the first bit on each line. Device files are denoted as the following:

- `c` - character
- `b` - block
- `p` - pipe
- `s` - socket

### Character Device

These devices transfer data, but one a character at a time. You'll see a lot of pseudo devices (<FontIcon icon="iconfont icon-folder"/>`/dev/null`) as character devices, these devices aren't really physically connected to the machine, but they allow the operating system greater functionality.

### Block Device

These devices transfer data, but in large fixed-sized blocks. You'll most commonly see devices that utilize data blocks as block devices, such as harddrives, filesystems, etc.

### Pipe Device

Named pipes allow two or more processes to communicate with each other, these are similar to character devices, but instead of having output sent to a device, it's sent to another process.

### Socket Device

Socket devices facilitate communication between processes, similar to pipe devices but they can communicate with many processes at once.

### Device Characterization

Devices are characterized using two numbers, __major device number__ and __minor device number__. You can see these numbers in the above ls example, they are separated by a comma. For example, let's say a device had the device numbers: __8__, __0__:

The major device number represents the device driver that is used, in this case 8, which is often the major number for sd block devices. The minor number tells the kernel which unique device it is in this driver class, in this case 0 is used to represent the first device (a). 

Look at your <FontIcon icon="iconfont icon-folder"/>`/dev` directory and find out what types of devices you can see.

---

## 3. Device Names

Here are the most common device names that you will encounter:

### SCSI Devices

If you have any sort of mass storage on your machine, chances are it is using the SCSI (pronounced "scuzzy") protocol. SCSI stands for Small Computer System Interface, it is a protocol used for allow communication between disks, printers, scanners and other peripherals to your system. You may have heard of SCSI devices which aren't actually in use in modern systems, however our Linux systems correspond SCSI disks with hard disk drives in /dev. They are represented by a prefix of sd (SCSI disk):

Common SCSI device files:

- <FontIcon icon="iconfont icon-folder"/>`/dev/sda` - First hard disk
- <FontIcon icon="iconfont icon-folder"/>`/dev/sdb` - Second hard disk
- <FontIcon icon="iconfont icon-folder"/>`/dev/sda3` - Third partition on the first hard disk

### Pseudo Devices

As we discussed earlier, pseudo devices aren't really physically connected to your system, most common pseudo devices are character devices:

- <FontIcon icon="iconfont icon-folder"/>`/dev/zero` - accepts and discards all input, produces a continuous stream of NULL (zero value) bytes
- <FontIcon icon="iconfont icon-folder"/>`/dev/null` - accepts and discards all input, produces no output
- <FontIcon icon="iconfont icon-folder"/>`/dev/random` - produces random numbers

### PATA Devices

Sometimes in older systems you may see hard drives being referred to with an hd prefix:

- <FontIcon icon="iconfont icon-folder"/>`/dev/hda` - First hard disk
- <FontIcon icon="iconfont icon-folder"/>`/dev/hdd2` - Second partition on 4th hard disk

Write to the pseudo devices and see what happens, be careful not to write your disks to those devices!

---

## 4. <FontIcon icon="iconfont icon-folder"/>`sysfs`

Sysfs was created long ago to better manage devices on our system that the <FontIcon icon="iconfont icon-folder"/>`/dev` directory failed to do. Sysfs is a virtual filesystem, most often mounted to the /sys directory. It gives us more detailed information than what we would be able to see in the <FontIcon icon="iconfont icon-folder"/>`/dev` directory. Both directories <FontIcon icon="iconfont icon-folder"/>`/sys` and /dev seem to be very similar and they are in some regards, but they do have major differences. Basically, the <FontIcon icon="iconfont icon-folder"/>`/dev` directory is simple, it allows other programs to access devices themselves, while the <FontIcon icon="iconfont icon-folder"/>`/sys` filesystem is used to view information and manage the device.

The /sys filesystem basically contains all the information for all devices on your system, such as the manufacturer and model, where the device is plugged in, the state of the device, the hierarchy of devices and more. The files you see here aren't device nodes, so you don't really interact with devices from the <FontIcon icon="iconfont icon-folder"/>`/sys` directory, rather you are managing devices.

Take a look at the contents of the <FontIcon icon="iconfont icon-folder"/>`/sys` directory:

```sh
ls /sys/block/sda
# alignment_offset  discard_alignment  holders   removable  sda6       trace
# bdi               events             inflight  ro         size       uevent
# capability        events_async       power     sda1       slaves
# dev               events_poll_msecs  queue     sda2       stat
# device            ext_range          range     sda5       subsystem
```

Check out the contents of the <FontIcon icon="iconfont icon-folder"/>`/sys` directory and see what files are located in there.

---

## 5. `udev`

Back in the old days and actually today if you really wanted to, you would create device nodes using a command such as:

```sh
mknod /dev/sdb1 b 8 3
```

This command will make a device node <FontIcon icon="iconfont icon-folder"/>`/dev/sdb1` and it will make it a block device (b) with a major number of 8 and a minor number of 3.

To remove a device, you would simply `rm` the device file in the <FontIcon icon="iconfont icon-folder"/>`/dev` directory.

Luckily, we really don't need to do this anymore because of udev. The udev system dynamically creates and removes device files for us depending on whether or not they are connected. There is a udevd daemon that is running on the system and it listens for messages from the kernel about devices connected to the system. Udevd will parse that information and it will match the data with the rules that are specified in `/etc/udev/rules.d`, depending on those rules it will most likely create device nodes and symbolic links for the devices. You can write your own udev rules, but that is a little out of scope for this lesson. Fortunately, your system already comes with lots of udev rules so you may never need to write your own.

You can also view the udev database and sysfs using the `udevadm` command. This tool is very useful, but sometimes can get very convoluted, a simple command to view information for a device would be:

```sh
udevadm info --query=all --name=/dev/sda
```

Run the `udevadm` command given and check out the input.

---

## 6. `lsusb`, `lspci`, `lssci`

Just like we would use the ls command to list files and directories, we can use similar tools that list information about devices.

### Listing USB Devices

```sh
lsusb 
```

### Listing PCI Devices

```sh
lspci 
```

### Listing SCSI Devices

```sh
lsscsi 
```

Try out each of these commands and see the output you receive.

---

## 7. `dd`

The `dd` tool is super useful for converting and copying data. It reads input from a file or data stream and writes it to a file or data stream.

Consider the following command:

```sh
dd if=/home/pete/backup.img of=/dev/sdb bs=1024 
```

This command is copying the contents of backup.img to <FontIcon icon="iconfont icon-folder"/>`/dev/sdb`. It will copy the data in blocks of 1024 bytes until there is no more data to be copied.

- `if=file` - Input file, read from a file instead of standard input
- `of=file` - Output file, write to a file instead of standard output
- `bs=bytes` - Block size, it reads and writes this many bytes of data at a time. You can use different size metrics by denoting the size with a k for kilobyte, m for megabyte, etc, so 1024 bytes is 1k
- `count=number` - Number of blocks to copy.

You will see some `dd` commands that use the count option, usually with `dd` if you want to copy a file that is 1 megabyte, you'll usually want to see that file as 1 megabyte when it's done being copied. Let's say you run the following command:

```sh
dd if=/home/pete/backup.img of=/dev/sdb bs=1M count=2
```

Our `backup.img` file is 10M, however, we are saying in this command to copy over 1M 2 times, so only 2M is being copied, leaving our copied data incomplete. Count can come in handy in many situations, but if you are just copying over data, you can pretty much omit count and even bs for that matter. If you really want to optimize your data transfers, then you'll want to start using those options.

`dd` is extremely powerful, you can use it to make backups of anything, including whole disk drives, restoring disks images, and more. Be careful, that powerful tool can come at a price if you aren't sure what you are doing.


Use the `dd` command to make a backup of your drive and set the output to a `.img` file.
