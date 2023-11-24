---
lang: ko-KR
title: Journeyman > Boot the System
description: 🐧Linux Journey > Journeyman > Boot the System
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Journeyman > Boot the System
    content: Boot the System
  - property: og:title
    content: Boot the System
  - property: og:description
    content: 🐧Linux Journey > Journeyman > Boot the System
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02c-boot-the-system.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Boot the System
desc: Learn about the stages of the Linux boot process.
link: https://linuxjourney.com/lesson/boot-process-overview
logo: https://linuxjourney.com/assets/booting-32f576a824d0160350167ece5da8fb719edd1e814ecbfaec20f6da7d9f31bfa0.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. Boot Process Overview

Now that we've gotten a pretty good grasp at some of the important components of Linux, let's piece them altogether by learning about how the system boots. When you turn on your machine, it does some neat things like show you the logo screen, run through some different messages and then at the end you're prompted with a login window. Well there is actually a ton of stuff happening between when you push the power button to when you login and we'll discuss those in this course.

The Linux boot process can be broken down in 4 simple stages:

### 1. BIOS

The BIOS (stands for _"Basic Input/Output System"_) initializes the hardware and makes sure with a Power-on self test (POST) that all the hardware is good to go. The main job of the BIOS is to load up the bootloader.

### 2. Bootloader

The bootloader loads the kernel into memory and then starts the kernel with a set of kernel parameters. One of the most common bootloaders is GRUB, which is a universal Linux standard.

### 3. Kernel

When the kernel is loaded, it immediately initializes devices and memory. The main job of the kernel is to load up the init process.

### 4. Init

Remember the init process is the first process that gets started, init starts and stops essential service process on the system. There are three major implementations of init in Linux distributions. We will go over them briefly and then dive into them in another course.

There it is, the (very) simple explanation of the Linux boot process. We will go into more detail about these stages in the next lessons.

Reboot your system and see if you can spot each step as your machine boots up.

---

## 2. Boot Process: BIOS

### BIOS

The first step in the Linux boot process is the BIOS which performs system integrity checks. The BIOS is a firmware that comes most common in IBM PC compatible computers, the dominant type of computers out there today. You've probably used the BIOS firmware to change the boot order of your harddisks, check system time, your machine's mac address, etc. The BIOS's main goal is to find the system bootloader.

So once the BIOS boots up the hard drive, it searches for the boot block to figure out how to boot up the system. Depending on how you partition your disk, it will look to the master boot record (MBR) or GPT. The MBR is located in the first sector of the hard drive, the first 512 bytes. The MBR contains the code to load another program somewhere on the disk, this program in turn actually loads up our bootloader.

Now if you partitioned your disk with GPT, the location of the bootloader changes a bit.

### UEFI

There is another way to boot up your system instead of using BIOS and that is with UEFI (stands for _"Unified extensible firmware interface"_). UEFI was designed to be successor to BIOS, most hardware out there today comes with UEFI firmware built in. Macintosh machines have been using EFI booting for years now and Windows has mostly moved all of their stuff over to UEFI booting. The GPT format was intended for use with EFI. You don't necessarily need EFI if you are booting a GPT disk. The first sector of a GPT disk is reserved for a "protective MBR" to make it possible to boot a BIOS-based machine.

UEFI stores all the information about startup in an .efi file. This file is stored on a special partition called EFI system partition on the hardware. Inside this partition it will contain the bootloader. UEFI comes with many improvements from the traditional BIOS firmware. However, since we are using Linux, the majority of us are using BIOS. So all of these lessons will be going along with that pretense.

Go into your BIOS menu and see if you have UEFI booting enabled.

---

## 3. Boot Process: Bootloader

The bootloader's main responsibilities are:

- Booting into an operating system, it can also be used to boot to non-Linux operating systems
- Select a kernel to use
- Specify kernel parameters

The most common bootloader for Linux is GRUB, you are most likely using it on your system. There are many other bootloaders that you can use such as LILO, efilinux, coreboot, SYSLINUX and more. However, we will just be working with GRUB as our bootloader.

So we know that the bootloader's main goal is to load up the kernel, but where does it find the kernel? To find it, we will need to look at our kernel parameters. The parameters can be found by going into the GRUB menu on startup using the <kbd>e</kbd> key. If you don't have GRUB no worries, we'll go through the boot parameters that you will see:

- `initrd` - Specifies the location of initial RAM disk (we'll talk more about this in the next lesson).
- `BOOT_IMAGE` - This is where the kernel image is located
- `root` - The location of the root filesystem, the kernel searches inside this location to find init. It is often represented by it's UUID or the device name such as <FontIcon icon="iconfont icon-folder"/>`/dev/sda1`.
- `ro` - This parameter is pretty standard, it mounts the fileystem as read-only mode.
- `quiet` - This is added so that you don't see display messages that are going on in the background during boot.
- `splash` - This lets the splash screen be shown. 

If you have GRUB as your bootloader, go into the GRUB menu with <kbd>e</kbd> and take a look at the settings.

---

## 4. Boot Process: Kernel

So now that our bootloader has passed on the necessary parameters, let's see how it get's started:

### Initrd vs. Initramfs

There is a bit of a chicken and egg problem when we talk about the kernel bootup. The kernel manages our systems hardware, however not all drivers are available to the kernel during bootup. So we depend on a temporary root filesystem that contains just the essential modules that the kernel needs to get to the rest of the hardware. In older versions of Linux, this job was given to the <FontIcon icon="iconfont icon-file"/>`initrd` (initial ram disk). The kernel would mount the <FontIcon icon="iconfont icon-file"/>`initrd`, get the necessary bootup drivers, then when it was done loading everything it needed, it would replace the <FontIcon icon="iconfont icon-file"/>`initrd` with the actual root filesystem. These days, we have something called the `initramfs`, this is a temporary root filesystem that is built into the kernel itself to load all the necessary drivers for the real root filesystem, so no more locating the <FontIcon icon="iconfont icon-file"/>`initrd` file.

### Mounting the root filesystem

Now the kernel has all the modules it needs to create a root device and mount the root partition. Before you go any further though, the root partition is actually mounted in read-only mode first so that fsck can run safely and check for system integrity. Afterwards it remounts the root filesystem in read-write mode. Then the kernel locates the init program and executes it.

---

## 5. Boot Process: Init

We've discussed init in previous lessons and know that it is the first process that gets started and it starts all the other essential services on our system. But how?

There are actually three major implementations of init in Linux:

### System V init (sysv)

This is the traditional init system. It sequentially starts and stops processes, based on startup scripts. The state of the machine is denoted by runlevels, each runlevel starts or stops a machine in a different way.

### Upstart

This is the init you'll find on older Ubuntu installations. Upstart uses the idea of jobs and events and works by starting jobs that performs certain actions in response to events.

### Systemd

This is the new standard for init, it is goal oriented. Basically you have a goal that you want to achieve and systemd tries to satisfy the goal's dependencies to complete the goal.

We have an entire course on Init systems where we will dive into each of these systems in more detail.