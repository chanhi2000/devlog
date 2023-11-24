---
lang: ko-KR
title: Journeyman > Kernel
description: 🐧Linux Journey > Journeyman > Kernel
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Journeyman > Kernel
    content: Kernel
  - property: og:title
    content: Kernel
  - property: og:description
    content: 🐧Linux Journey > Journeyman > Kernel
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02d-kernel.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Kernel
desc: The most important part of the Linux system, learn about how it works and how to configure it.
link: https://linuxjourney.com/lesson/kernel-overview
logo: https://linuxjourney.com/assets/kernel-99533d3ebf83d9bb34e8971887d90acb259f72d0092aa1f628d6c7036bd62144.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. Overview of the Kernel

As you've learned up to this point, the kernel is the core of the operating system. We've talked about the other parts of the operating system but have yet to show how they all work together. The Linux operating system can be organized into three different levels of abstraction.

The most basic level is hardware, this includes our CPU, memory, hard disks, networking ports, etc. The physical layer that actually computes what our machine is doing.

The next level is the kernel, which handles process and memory management, device communication, system calls, sets up our filesystem, etc. The kernel's job is to talk to the hardware to make sure it does what we want our processes to do.

And the level that you are familiar with is the user space, the user space includes the shell, the programs that you run, the graphics, etc.

In this course, we'll be focusing on the kernel and learning its intricacies.

---

## 2. Privilege Levels

The next few lessons get pretty theoretical, so if you're looking for some practical stuff you can skip ahead and come back later.

Why do we have different abstraction layers for user space and kernel? Why can't you combine both powers into one layer? Well there is a very good reason why these two layers exist separately. They both operate in different modes, the kernel operates in kernel mode and the user space operates in user mode.

In kernel mode, the kernel has complete access to the hardware, it controls everything. In user space mode, there is a very small amount of safe memory and CPU that you are allowed to access. Basically, when we want to do anything that involves hardware, reading data from our disks, writing data to our disks, controlling our network, etc, it is all done in kernel mode. Why is this necessary? Imagine if your machine was infected with spyware, you wouldn't want it to be able to have direct access to your system's hardware. It can access all your data, your webcam, etc. and that's no good.

These different modes are called privilege levels (aptly named for the levels of privilege you get) and are often described as protection rings. To make this picture easier to paint, let's say you find out that Britney Spears is in town at your local klerb, she's protected by her groupies, then her personal bodyguards, then the bouncer outside the klerb. You want to get her autograph (because why not?), but you can't get to her because she is heavily protected. The rings work the same way, the innermost ring corresponds to the highest privilege level. There are two main levels or modes in an x86 computer architecture. Ring #3 is the privilege that user mode applications run in, Ring #0 is the privilege that the kernel runs in. Ring #0 can execute any system instruction and is given full trust. So now that we know how those privilege levels work, how are we able to write anything to our hardware? Won't we always be in a different mode than the kernel?

The answer is with system calls, system calls allow us to perform a privileged instruction in kernel mode and then switch back to user mode.

---

## 3. System Calls

Remember Britney in the previous lesson? Let's say we want to see her and get some drinks together, how do we get from standing outside in the crowds of people to inside her innermost circle? We would use system calls. System calls are like the VIP passes that get you to a secret side door that leads directly to Britney.

System calls (`syscall`) provide user space processes a way to request the kernel to do something for us. The kernel makes certain services available through the system call API. These services allow us to read or write to a file, modify memory usage, modify our network, etc. The amount of services are fixed, so you can't be adding system calls nilly willy, your system already has a table of what system calls exist and each system call has a unique ID.

I won't get into specifics of system calls, as that will require you to know a bit of C, but the basics is that when you call a program like ls, the code inside this program contains a system call wrapper (so not the actual system call yet). Inside this wrapper it invokes the system call which will execute a trap, this trap then gets caught by the system call handler and then references the system call in the system call table. Let's say we are trying to call the `stat()` system call, it's identified by a syscall ID and the purpose of the `stat()` system call is to query the status of a file. Now remember, you were running the ls program in non-privilege mode. So now it sees you're trying to make a `syscall`, it then switches you over to kernel mode, there it does lots of things but most importantly it looks up your syscall number, finds it in a table based on the syscall ID and then executes the function you wanted to run. Once it's done, it will return back to user mode and your process will receive a return status if it was successful or if it had an error. The inner workings of syscalls get really detailed, I would recommend looking at information online if you want to learn more.

You can actually view the system calls that a process makes with the strace command. The strace command is useful for debugging how a program executed.

```
strace ls
```

---

## 4. Kernel Installation

Ok, now that we've got all that boring stuff out of the way, let's talk about actually installing and modifying kernels. You can install multiple kernels on your system, remember in our lesson on the boot process? In our GRUB menu we can choose which kernel to boot to.

To see what kernel version you have on your system, use the following command:

```sh
uname -r
# 3.19.0-43-generic
```

The `uname` command prints system information, the `-r` command will print out all of the kernel release version.

You can install the Linux kernel in different ways, you can download the source package and compile from source or you can install it using package management tools.

```sh
sudo apt install linux-generic-lts-vivid
```

and then just reboot into the kernel you installed. Simple right? Kind of, you'll need to also install other linux packages such as the linux-headers, linux-image-generic, etc). You can also specify the version number, so the above command can look like, `sudo apt install 3.19.0-43-generic`

Alternatively, if you just want the updated kernel version, just use `dist-upgrade`, it performs upgrades to all package on your system:

```sh
sudo apt dist-upgrade
```

There are many different kernel versions, some are used as LTS (_long term support_), some are the latest and greatest, the compatibility may be very different between kernel versions so you may want to try out different kernels.

1. Find out what kernel version you have.
2. Research the different versions of kernels available

---

## 5. Kernel Location

What happens when you install a new kernel? Well it actually adds a couple of files to your system, these files are usually added to the <FontIcon icon="iconfont icon-folder"/>`/boot` directory.

You will see multiple files for different kernel versions:

- `vmlinuz` - this is the actual linux kernel
- `initrd` - as we've discussed before, the initrd is used as a temporary file system, used before loading the kernel
- `System.map` - symbolic lookup table
- `config` - kernel configuration settings, if you are compiling your own kernel, you can set which modules can be loaded

If your <FontIcon icon="iconfont icon-folder"/>`/boot` directory runs out of space, you can always delete old versions of these files or just use a package manager, but be careful when doing maintenance in this directory and don't accidentally delete the kernel you are using.

Go into your boot directory and see what files are in there.

---

## 6. Kernel Modules

Let's say I have a sweet ride, I invest a lot of time and money into it. I add a spoiler, hitch, bike rack and other random things. These components don't actually change the core functionality of the car and I can remove and add them very easily. The kernel uses the same concept with kernel modules.

The kernel in itself is a monolithic piece of software, when we want to add support for a new type of keyboard, we don't write this code directly into the kernel code. Just as we wouldn't meld a bike rack to our car (well maybe some people would do that). Kernel modules are pieces of code that can be loaded and unloaded into the kernel on demand. They allow us to extend the functionality of the kernel without actually adding to the core kernel code. We can also add modules and not have to reboot the system (in most cases).

### View a list of currently loaded modules

```sh
lsmod
```

### Load a module

```sh
sudo modprobe bluetooth
```

Modprobe loads tries the module from <FontIcon icon="iconfont icon-folder"/>`/lib/modules/(kernel version)/kernel/drivers`. Kernel modules may also have dependencies, modprobe loads our module dependencies if they are not already loaded.

### Remove a module

```sh
sudo modprobe -r bluetooth
```

### Load on bootup

You can also load modules during system boot, instead of temporarily loading them with modprobe (which will be unloaded when you reboot). Just modify the <FontIcon icon="iconfont icon-folder"/>`/etc/modprobe.d` directory and add a configuration file in it like so:

```sh
/etc/modprobe.d/peanutbutter.conf
# options peanut_butter type=almond
```

A bit of a outlandish example, but if you had a module named peanut_butter and you wanted to add a kernel parameter for type=almond, you can have it load on startup using this configuration file. Also note that kernel modules have their own kernel parameters so you'll want to read about the module specifically to find out more.

### Do not load on bootup

You can also make sure a module does not load on bootup by adding a configuration file like so:

```sh
/etc/modprobe.d/peanutbutter.conf
# blacklist peanut_butter
```

Unload your bluetooth module with modprobe and see what happens. How will you fix this?

