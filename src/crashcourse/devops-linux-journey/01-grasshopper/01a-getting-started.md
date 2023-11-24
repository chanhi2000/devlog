---
lang: ko-KR
title: GrassHopper > Getting Started
description: 🐧Linux Journey > GrassHopper > Getting Started
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > GrassHopper > Getting Started
    content: Getting Started
  - property: og:title
    content: Getting Started
  - property: og:description
    content: 🐧Linux Journey > GrassHopper > Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/01-grasshopper/01a-getting-started
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Getting Started
desc: What is Linux? Get started with choosing a distribution and installation.
link: https://linuxjourney.com/lesson/linux-history
logo: https://linuxjourney.com/assets/getting-started-cd39013b87fac4b4b5d668752511f154a673adc94fad86c9be53f0016bf3bc35.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. History

Hey rookie! So you decided to dive into this wonderful world known as Linux? It’s gonna be a beautiful and enjoyable road ahead! My name is Penguin Pete and I’m here to guide you through this journey. Let’s get started with a little bit of backstory about Linux.

To learn about how Linux came to be, let’s go back to the beginning to 1969 where Ken Thompson and Dennis Ritchie of Bell Laboratories developed the UNIX operating system. It was later rewritten in C to make it more portable and eventually became a widely used operating system.

A decade or so later, Richard Stallman started working on the GNU (GNU is Not UNIX) project, the GNU kernel called Hurd, which unfortunately never came to completion. The GNU General Public License (GPL), a free software license, was also created as a result of this.

The kernel is the most important piece in the operating system. It allows the hardware to talk to the software. It also does a whole lot of other things, but we’ll dig into that in a different course. For now, just know that the kernel controls pretty much everything that happens on your system.

During this time other efforts such as BSD, MINIX, etc were developed to be UNIX like-systems. However, one thing that all these UNIX like-systems had in common was the lack of a unified kernel.

Then in 1991, a young fellow named Linus Torvalds started developing what we now know today as the Linux kernel.

### Additional reading:

- [GNU](https://www.gnu.org/home.en.html)
- [Ken Thompson](https://en.wikipedia.org/wiki/Ken_Thompson)
- [Richard Stallman](https://stallman.org/)
- [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)

---

## 2. Choosing a Linux Distribution

In the previous lesson, we learned about the Linux kernel which powers millions of devices a day. One thing before we move forward, the term Linux is actually quite a misnomer, since it actually refers to the Linux kernel. However, many distributions use the Linux kernel so therefore are commonly known as Linux operating systems.

A Linux system is divided into three main parts:

- Hardware - This includes all the hardware that your system runs on as well as memory, CPU, disks, etc.
- Linux Kernel - As we discussed above, the kernel is the core of the operating system. It manages the hardware and tells it how to interact with the system.
- User Space - This is where users like yourself will be directly interacting with the system.

So the first step we’ll need to take is to install Linux on your machine. You have many options to choose from and this course will help inform you and get you started on choosing a Linux distribution.

There are many Linux distributions to choose from, we’ll just go over the most popular options.

---

## 3. Debian

### Overview
Debian is an operating system composed entirely of free and open-source software. It’s widely known and has been in development for over 20 years. There are three branches that you can use, Stable, Testing and Unstable.

Stable is an overall good branch to be on. Testing and Unstable are rolling releases. This means that any incremental changes in those branches will eventually become Stable. For example, if you wanted to get to the next update from Windows XP to Windows 10, you’ll have to do a complete Windows 10 installation. However being on the Testing release, you’ll automatically get updates until it becomes the next operating system release without having to do a full installation.

### Package Management

Debian also uses Debian package management tools. Every Linux distribution installs and manages packages differently and they use different package management tools. We’ll get more into this in a later course.

### Configurability

Debian may not get the latest updates, but it's extremely stable. If you want a good "core" operating system, this is the one for you.

### Uses

Debian is an overall great operating system for any platform.

> If you're interested in having Debian as your operating system, head over to the installation section and give it a try: [https://www.debian.org/](https://www.debian.org/)

---

## 4. Red Hat Enterprise Linux

### Overview

Red Hat Enterprise Linux commonly referred to as RHEL is developed by Red Hat. RHEL has strict rules to restrict free re-distribution although it still provides source code for free.

### Package Management

RHEL uses a different package manager than Debian, RPM package manager, which we will eventually learn about as well.

### Configurability

RHEL-based operating systems will differ slightly from the Debian-based operating systems, most noticeably in package management. If you decide to go with RHEL it’s probably best if you know you’ll be working with it.

### Uses

As described by the name it's mostly used in enterprise, so if you need a solid server OS this would be a good one.

> If you're interested in having RHEL as your operating system, head over to the installation section and give it a try: [https://www.redhat.com/rhel/](https://www.redhat.com/rhel/)

---

## 5. Ubuntu

### Overview
One of the most popular Linux distributions for personal machines is Ubuntu. Ubuntu also releases its own desktop environment manager Unity by default.

### Package Management
Ubuntu is a Debian-based operating system developed by Canonical. So it uses a core Debian package management system.

### Configurability
Ubuntu is a great choice for a beginner who wants to get into Linux. Ubuntu offers ease of use and a great user interface experience that has led to its wide adoption. It’s widely used and supported and is most like other operating systems like OSX and Windows in terms of usability.

### Uses
Great for any platform, desktop, laptop and server.

> If you're interested in having Ubuntu as your operating system, head over to the installation section and give it a try: [http://www.ubuntu.com/](http://www.ubuntu.com/)

---

## 6. Fedora

### Overview

Backed by Red Hat, the Fedora Project is community driven containing open-source and free software. Red Hat Enterprise Linux branches off Fedora, so think of Fedora as an upstream RHEL operating system. Eventually RHEL will get updates from Fedora after thorough testing and quality assurance. Think of Fedora as an Ubuntu equivalent that uses a Red Hat backend instead of Debian.

### Package Management

Uses Red Hat package manager.

### Configurability

If you want to use a Red Hat based operating system, this is a user friendly version.

### Uses

Fedora is great if you want a Red Hat based operating system without the price tag. Recommended for desktop and laptop.

> If you're interested in having Fedora as your operating system, head over to the installation section and give it a try: [https://getfedora.org/](https://getfedora.org/)

---

## 7. Linux Mint

### Overview

Linux Mint is based off of Ubuntu. It uses Ubuntu’s software repositories so the same packages are available on both distributions. If you prefer a lighter distro than Ubuntu, you may be interested in Linux Mint.


### Package Management

Since Linux Mint is Ubuntu based, it uses the Debian package manager.


### Configurability

Great user interface, great for beginners and less bloated than Ubuntu. In this course, I’ll be using Linux Mint, but any other distribution can be used.


### Uses

Great for desktop and laptop.

> If you're interested in having Linux Mint as your operating system, head over to the installation section and give it a try: [http://linuxmint.com/](http://linuxmint.com/)

---

## 8. Gentoo

### Overview

Gentoo offers ridiculous flexibility with the operating system at a price. It’s made for advanced users who don’t mind getting their hands dirty with the system.


### Package Management

Gentoo uses its own package management, Portage. The Portage package management is very modular and easy to maintain, which plays a big part in the operating system as a whole being very flexible.


### Configurability

If you’re just getting started with Linux and want to take a more difficult path, I’d choose Gentoo or Arch Linux as your distribution.


### Uses

Great for desktop and laptop.

> If you're interested in having Gentoo as your operating system, head over to the installation section and give it a try: [https://www.gentoo.org/](https://www.gentoo.org/)

---

## 9. Arch Linux

### Overview

Arch is a lightweight and flexible Linux distribution driven 100% by the community. Similar to Debian, Arch uses a rolling release model so incremental updates eventually become the Stable release. You really need to get your hands dirty to understand the system and its functions, but in turn you get complete and total control of your system.


### Package Management

It uses its own package manager, Pacman, to install, update and manage packages.


### Configurability

If you want a lightweight operating system and really want to understand Linux use Arch! There’s a bit of a learning curve, but for the hardcore Linux users, this is a great choice.


### Uses

Great for desktop and laptop. If you also have a small device such as a Raspberry Pi and need to stick a lightweight OS on it, you can’t go wrong with Arch.

> If you're interested in having Arch as your operating system, head over to the installation section and give it a try: [https://www.archlinux.org/](https://www.archlinux.org/)

---

## 10. openSUSE

### Overview

openSUSE Linux is created by the openSUSE Project. A community that promotes the use of Linux everywhere, working together in an open, transparent and friendly manner as part of the worldwide Free and Open Source Software community. openSUSE is the second oldest still running Linux Distributions and shares the base system with SUSE's award-winning SUSE Linux Enterprise products.


### Package Management

Uses RPM package manager.


### Configurability

openSUSE is a great choice for a new Linux user. It offers an easy to use graphical installer/administration application (YaST) and a tiday base system, easy to tinker with. openSUSE includes everything you need to enjoy the Internet worry free of viruses/spy-ware and to live out your creativity, be it with your photos, videos, music or code.


### Uses

openSUSE Leap is fully capable of being used on a desktop PC and laptop.

> If you're interested in having openSUSE as your operating system, head over to the download page and give it a try: [software.opensuse.org](software.opensuse.org)