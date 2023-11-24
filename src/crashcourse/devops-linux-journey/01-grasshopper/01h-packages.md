---
lang: ko-KR
title: GrassHopper > Packages
description: 🐧Linux Journey > GrassHopper > Packages
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > GrassHopper > Packages
    content: Packages
  - property: og:title
    content: Packages
  - property: og:description
    content: 🐧Linux Journey > GrassHopper > Packages
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/01-grasshopper
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Packages
desc: Learn all about the dpkg, apt-get, rpm and yum package management tools.
link: https://linuxjourney.com/lesson/software-distribution
logo: https://linuxjourney.com/assets/package-management-9a40f89dde6d2e2d861722093b97eadc3b852446125df64ea2ce344dc47ef00d.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. Software Distribution

Your system is comprised of many packages such as internet browsers, text editors, media players, etc. These packages are managed via package managers, which install and maintain the software on your system. Not all packages are installed through package managers though, you can commonly install packages directly from their source code (we'll get to that soon). However the majority of the time you will use a package manager to install software, the most common variety of packages are Debian (`.deb`) and Red Hat (`.rpm`). Debian style packages are used in distributions such as Debian, Ubuntu, LinuxMint, etc. Red Hat style packages are seen in Red Hat Enterprise Linux, Fedora, CentOS, etc.

What are packages? You may know them as Chrome, Photoshop, etc and they are, but what they really are just lots and lots of files that have been compiled into one. The people (or sometimes a single person) that write this software are known as __upstream providers__, they compile their code and write up how to get it installed. These upstream providers work on getting out new software and update existing software. When they are ready to release it to the world, they send their package to __package maintainers__, who handle getting this piece of software in the hands of the users. These package maintainers review, manage and distribute this software in the form of packages.

---

## 2. Package Repositories

How do packages that get uploaded to the internet somehow end up on our computers? Do you go to the download page of each package you want and click download and install? Well, actually you can do that, but there is something better called package repositories. Repositories are just a central storage location for packages. There are tons of repositories that hold lots of packages and best of all they are all found on the internet, no silly installation disks. Your machine doesn't know where to look for these repositories unless you explicitly tell it where to look.

For example, let's say I want WackyWidgets Software on my machine. Well WackyWidgets manages their own repositories for their widget packages, inside this repository are 10 packages, the CoolWidget package, the SuperWidget package, etc. WackyWidgets hosts this repository at a source link called: [http://download.widgets/linux/deb/](http://download.widgets/linux/deb/)

Now instead of going to their website to download the package directly, you can tell your machine to find WackyWidgets software from the source link.

Your distribution already comes with pre-approved sources to get packages from and this is how it installs all the base packages you see on your system. On a Debian system, this sources file is the <FontIcon icon="iconfont icon-file"/>`/etc/apt/sources.list` file. Your machine will know to look there and check for any source repositories you added.

---

##  3. `tar` and `gzip`

Before we get into package installation and the different managers, we need to discuss archiving and compressing files, because you will most likely encounter these when you hunt for software on the internet.

You probably already know what a file archive is, you've most likely encountered file types such as `.rar` and `.zip`. These are an archive of files, they contain many files inside of them, but they come in this very neat single file known as an archive.

### Compressing files with `gzip`

gzip is program used to compress files in Linux, they end in a `.gz` extension.

To compress a file down:

```sh
gzip mycoolfile
```
To decompress the file:

```sh
gunzip mycoolfile.gz
```

### Creating archives with `tar`

Unfortunately, gzip can't add multiple files into one archive for us. Luckily we have the tar program which does. When you create an archive using tar, it will have a `.tar` extension.

```sh
tar cvf mytarfile.tar mycoolfile1 mycoolfile2
```

- `c` - create
- `v` - tell the program to be verbose and let us see what it's doing
- `f` - the filename of the tar file has to come after this option, if you are creating a tar file you'll have to come up with a name

### Unpacking archives with `tar`

To extract the contents of a tar file, use:

```sh
tar xvf mytarfile.tar
```

- `x` - extract
- `v` - tell the program to be verbose and let us see what it's doing
- `f` - the file you want to extract

### Compressing/uncompressing archives with `tar` and `gzip`

Many times you'll see a tar file that has been compressed such as: `mycompressedarchive.tar.gz`, all you need to do is work outside in, so first remove the compression with gunzip and then you can unpack the tar file. Or you can alternatively use the `z` option with `tar`, which just tells it to use the `gzip` or gunzip utility.

Create a compressed tar file:

```sh
tar czf myfile.tar.gz
```

Uncompress and unpack:

```sh
tar xzf file.tar
```

If you need help remember this: e __X__ tract all __Z__ ee __F__ iles!

`tar` is one of those commands that is so important and yet you never really remember it, relevant xkcd: [https://xkcd.com/1168/](https://xkcd.com/1168)

### Other Utilities

Throughout your journey of Linux, you'll encounter other archive and compression types such as: `bzip2`, `compress`, `zip`, `unzip`, etc. They are a little less common, but just keep in mind that different utilities will call for different commands.

Familiarize yourself with the tar documentation and look at the other options available in the manpage.

---

## 4. Package Dependencies

Packages very rarely work by themselves, they are most often accompanied by dependencies to help them run. For example, let's say we have a group of restaurants, these restaurants all make different cuisine, however they all get their ingredients from the same farm. Their food is dependent on the farm's supplies, if the farm were to suddenly stop supplying food, well then the restaurants would be in a pretty bad state.

In Linux, these dependencies are often other packages or shared libraries. Shared libraries are libraries of code that other programs want to use and don't want to have to rewrite for themselves. Think of the restaurant again, how much work would it be if every restaurant also farmed their own food? Too much.

We will dig more into shared libraries in the filesystem course, so for now just remember that packages have dependencies to help them run, whether those dependencies are other packages or libraries, if the dependencies aren't there the package will end up in a broken state and most of the time not even install.

---

## 5. `rpm` and `dpkg`

Although most of this course is about package management systems (the Batmans of package management), we mustn't forget about the Robins. Although very useful and reliable, they don't come with that sweet batmobile and utility belt.

Just like .exe is a single executable file, so is `.deb` and `.rpm`. You normally wouldn't see these if you use package repositories, but if you directly download packages, you will most likely get them in these popular format. Obviously, they are exclusive to their distributions, `.deb` for Debian based and .rpm for Red Hat based.

To install these direct packages, you can use the package management commands: rpm and dpkg. These tools are used to install package files, however they will not install the package dependencies, so if your package had 10 dependencies, you would have to install those packages separately and then their dependencies and so on and so forth. As you can see, that was one of the reasons that brought forth the full blown management systems that we will discuss this later.

Keep in mind that there will be countless times when you need to install, query or verify a package with one of these tools, so remember these commands.

### Install a package

```sh
dpkg -i some_deb_package.deb # Debian
rpm -i some_rpm_package.rpm # RPM
```

The `i` stands for install. You can also use the longer format of `--install`.

### Remove a package

```sh
dpkg -r some_deb_package.deb # Debian
rpm -e some_rpm_package.rpm # RPM
```

Debian: __r__ for remove
RPM: __e__ for erase

### List installed packages

```sh
dpkg -l # Debian
rpm -qa # RPM
```

Debian: __l__ for list
RPM: __q__ for query and __a__ for all

Find a program that you want to install on your system like Google Chrome and install it using one of these commands.

---

## 6. `yum` and `apt`

Ah, the Batmans of package management, these systems come with all the fixins to make package installation, removal and changes easier, including installing package dependencies. Two of the most popular management systems is `yum` and `apt`. Yum is exclusive to the Red Hat family and apt is exclusively to the Debian family.

### Install a package from a repository


```sh
apt install <package_name> #Debian
yum install <package_name> #RPM
```

### Remove a package


```sh
apt remove <package_name> #Debian
yum erase <package_name> #RPM
```

### Updating packages for a repository

It's always best practice to update your package repositories so they are up to date before you install and update a package.

```sh
apt update; apt upgrade #Debian
yum update #RPM
```

### Get information about an installed package

```sh
t show <package_name> #Debian
m info <package_name> #RPM
```

Run through each of these package commands and see the output you receive.

---

## 7. Compile Source Code

Often times you will encounter an obscure package that only comes in the form of pure source code. You'll need to use a few commands to get that source code package compiled and installed on your system.

First thing is first, you'll need to have software to install the tools that will allow you to compile source code.

```sh
$ sudo apt install build-essential
```

Once you do that, extract the contents of the package file, most likely a .tar.gz file.

```sh
$ tar -xzvf package.tar.gz
```

Before you do anything, take a look at the `README` or `INSTALL` file inside the package. Sometimes there will be specific installation instructions.

Depending on what compile method that the developer used, you'll have to use different commands, such as cmake or something else.

However, most commonly you'll see basic make compilation, so we'll discuss that:

Inside the package contents will be a configure script, this script checks for dependencies on your system and if you are missing anything, you'll see an error and you'll need to fix those dependencies.

```sh
$ ./configure
```

The `./` allows you to execute a script in the current directory.

```sh
$ make
```

Inside of the package contents, there is a file called Makefile that contains rules to building the software. When you run the make command, it looks at this file to build the software.

```sh
$ sudo make install
```

This command actually installs the package, it will copy the correct files to the correct locations on your computer.

If you want to uninstall the package, use:

```sh
$ sudo make uninstall
```

Be wary when using make install, you may not realize how much is actually going on in the background. If you decide to remove this package, you may not actually remove everything because you didn't realize what was added to your system. Instead forget everything about make install that I just explained to you and use the `checkinstall` command. This command will make a .deb file for you that you can easily install and uninstall.

```sh
$ sudo checkinstall
```

This command will essentially "make install" and build a `.deb` package and install it. This makes it easier to remove the package later on.

Find a source code program (from a trusted site) and install from source.
