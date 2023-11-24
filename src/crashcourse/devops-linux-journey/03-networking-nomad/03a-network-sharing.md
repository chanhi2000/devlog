---
lang: ko-KR
title: Networking Nomad > Network Sharing
description: 🐧Linux Journey > Networking Nomad > Network Sharing
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Networking Nomad > Network Sharing
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Networking Nomad > Network Sharing
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-networking-nomad
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Network Sharing
desc: Learn about network sharing with rsync, scp, nfs and more.
link: https://linuxjourney.com/lesson/network-file-sharing
logo: https://linuxjourney.com/assets/network-sharing-160c16689bb42ee68a9047bb8e3741a00934d9e70cf5c9feb8caef9b62a0b8e8.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. File Sharing Overview

You usually are not the only computer on your network, this is especially the case if you're working in a commercial environment. When we want to transfer data from one machine to another, sometimes it maybe easier to connect a USB drive and manually copy them. But for the most part, if you're working with machines on the same network, the way to transfer data is through network file sharing.

In this course we'll go over a couple of different methods to copy data to and from different machines on your network. We'll discuss some simple file copies, then we'll talk about mounting entire directories on your machine that act as a separate drive.

One simple file sharing tool is the `scp` command. The `scp` command stands for secure copy, it works exactly the way the `cp` command does, but allows you to copy from one host over to another host on the same network. It works via ssh so all your actions are using the same authentication and security as ssh.

### To copy a file over from local host to a remote host

```sh
scp myfile.txt username@remotehost.com:/remote/directory
```

### To copy a file from a remote host to your local host

```sh
scp username@remotehost.com:/remote/directory/myfile.txt /local/directory
```

### To copy over a directory from your local host to a remote host

```sh
scp -r mydir username@remotehost.com:/remote/directory
```

Try to copy a file over with `scp` from one machine to another.

---

## 2. `rsync`

Another tool used to copy data from different hosts is `rsync` (short for _remote synchronization_). Rsync is very similar to `scp`, but it does have a major difference. Rsync uses a special algorithm that checks in advanced if there is already data that you are copying to and will only copy over the differences. For example, let's say that you were copying over a file and your network got interrupted, therefore your copy stopped midway. Instead of re-copying everything from the beginning, rsync will only copy over the parts that didn't get copied.

It also verifies the integrity of a file you are copying over with checksums. These small optimizations allow greater file transfer flexibility and makes rsync ideal for directory synchronization remotely and locally, data backups, large data transfers and more.

Some commonly-used rsync options:

- `v`: verbose output
- `r`: recursive into directories
- `h`: human readable output
- `z`: compressed for easier transfer, great for slow connections

### Copy/sync files on the same host

```sh
rsync -zvr /my/local/directory/one /my/local/directory/two
```

### Copy/sync files to local host from a remote host

```sh
rsync /local/directory username@remotehost.com:/remote/directory
```

### Copy/sync files to a remote host from a local host

```sh
rsync username@remotehost.com:/remote/directory /local/directory
```

Use `rsync` to sync a directory to another directory, be sure not to overwrite an important directory!

---

## 3. Simple HTTP Server

Python has a super useful tool for serving files over HTTP. This is great if you just want to create a quick network share that other machines on your network can access. To do that just go to the directory you want to share and run:

```sh
python -m SimpleHTTPServer
```

This sets up a basic webserver that you can access via the localhost address. So grab the IP address of the machine you ran this on and then on another machine access it in the browser with: 🌐http://IP_ADDRESS:8000. On your own machine, you can view the files available by typing: 🌐http://localhost:8000 in your web browser.

You can also do this with node or if you are running Python 3, the syntax will be a little bit different.

Try setting up a SimpleHTTPServer!

---

## 4. NFS

The most standard network file share for Linux is NFS (Network File System), NFS allows a server to share directories and files with one or more clients over the network.

We won't get into the details of how to create an NFS server as it can get complex, however we will discuss setting up NFS clients.

### Setting up NFS client

```sh
sudo service nfsclient start
sudo mount server:/directory /mount_directory
```

### Automounting

Let's say you use the NFS server quite often and you want to keep it permanently mounted, normally you think you'd edit the <FontIcon icon="iconfont icon-file"/>`/etc/fstab` file, but you may not always get a connection to the server and that can cause issues on bootup. Instead what you want to do is setup automounting so that you can connect to the NFS server when you need to. This is done with the `automount` tool or in recent versions of Linux `amd`. When a file is accessed in a specified directory, automount will look up the remote server and automatically mount it.

Read the manpage for NFS to learn more.

---

## 5. Samba

In the early days of computing, it became necessary for Windows machines to share files with Linux machines, thus the Server Message Block (SMB) protocol was born. SMB was used for sharing files between Windows operating systems (Mac also has file sharing with SMB) and then it was later cleaned up and optimized in the form of the Common Internet File System (CIFS) protocol.

Samba is what we call the Linux utilities to work with CIFS on Linux. In addition to file sharing, you can also share resources like printers.

### Create a network share with Samba

Let's go through the basic steps to create a network share that a Windows machine can access:

### Install Samba

```sh
sudo apt update
sudo apt install samba
```

### Setup <FontIcon icon="iconfont icon-file"/>`smb.conf`

The configuration file for Samba is found at <FontIcon icon="iconfont icon-file"/>`/etc/samba/smb.conf`, this file should tell the system what directories should be shared, their access permissions, and more options. The default smb.conf comes with lots of commented code already and you can use those as an example to write your own configurations.

```sh
sudo vi /etc/samba/smb.conf
```

### Setup up a password for Samba

```sh
sudo smbpasswd -a [username]
```

### Create a shared directory

```sh
mkdir /my/directory/to/share
```

### Restart the Samba service

```sh
sudo service smbd restart
```

### Accessing a Samba share via Windows

In Windows, just type in the network connection in the run prompt: `\\HOST\sharename`.

### Accessing a Samba/Windows share via Linux

```sh
smbclient //HOST/directory -U user
```

The Samba package includes a command line tool called `smbclient` that you can use to access any Windows or Samba server. Once you're connected to the share you can navigate and transfer files.

### Attach a Samba share to your system

Instead of transferring files one by one, you can just mount the network share on your system.

```sh
sudo mount -t cifs servername:directory mountpount -o user=username,pass=password
```

Setup a Samba share, if you don't have one, open up <FontIcon icon="iconfont icon-file"/>`smb.conf` and familiarize yourself with the options in the config file.

