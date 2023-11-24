---
lang: ko-KR
title: Journeyman > The Filesystem
description: 🐧Linux Journey > Journeyman > The Filesystem
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
- name: 🐧Linux Journey > Journeyman > The Filesystem
  content: The Filesystem
- property: og:title
  content: The Filesystem
- property: og:description
  content: 🐧Linux Journey > Journeyman > The Filesystem
- property: og:url
  content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-journeyman/02b-the-filesystems.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: The Filesystem
desc: Learn about the Linux filesystem, the different types of filesystems, partitioning and more.
link: https://linuxjourney.com/lesson/filesystem-hierarchy
logo: https://linuxjourney.com/assets/filesystem-6bfae474a9f31492fcc960a1c49ed97ac7d64038ddbde2d69258e3e7cd79f241.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. Filesystem Hierarchy

At this point, you're probably well familiar with the directory structure of your system, if not you will be soon. Filesystems can vary with how they are structured, but for the most part they should conform to the Filesystem Hierarchy Standard.

Go ahead and do an `ls -l /` to see the directories listed under the root directory, yours may look different than mine, but the directories should for the most part look like the following:

- <FontIcon icon="iconfont icon-folder"/>`/`: The root directory of the entire filesystem hierarchy, everything is nestled under this directory.
- <FontIcon icon="iconfont icon-folder"/>`/bin`: Essential ready-to-run programs (binaries), includes the most basic commands such as ls and cp.
- <FontIcon icon="iconfont icon-folder"/>`/boot`: Contains kernel boot loader files.
- <FontIcon icon="iconfont icon-folder"/>`/dev`: Device files.
- <FontIcon icon="iconfont icon-folder"/>`/etc`: Core system configuration directory, should hold only configuration files and not any binaries.
- <FontIcon icon="iconfont icon-folder"/>`/home`: Personal directories for users, holds your documents, files, settings, etc.
- <FontIcon icon="iconfont icon-folder"/>`/lib`: Holds library files that binaries can use.
- <FontIcon icon="iconfont icon-folder"/>`/media`: Used as an attachment point for removable media like USB drives.
- <FontIcon icon="iconfont icon-folder"/>`/mnt`: Temporarily mounted filesystems.
- <FontIcon icon="iconfont icon-folder"/>`/opt`: Optional application software packages.
- <FontIcon icon="iconfont icon-folder"/>`/proc`: Information about currently running processes.
- <FontIcon icon="iconfont icon-folder"/>`/root`: The root user's home directory.
- <FontIcon icon="iconfont icon-folder"/>`/run`: Information about the running system since the last boot.
- <FontIcon icon="iconfont icon-folder"/>`/sbin`: Contains essential system binaries, usually can only be ran by root.
- <FontIcon icon="iconfont icon-folder"/>`/srv`: Site-specific data which are served by the system.
- <FontIcon icon="iconfont icon-folder"/>`/tmp`: Storage for temporary files
- <FontIcon icon="iconfont icon-folder"/>`/usr`: This is unfortunately named, most often it does not contain user files in the sense of a home folder. This is meant for user installed software and utilities, however that is not to say you can't add personal directories in there. Inside this directory are sub-directories for <FontIcon icon="iconfont icon-folder"/>`/usr/bin`, <FontIcon icon="iconfont icon-folder"/>`/usr/local`, etc.
- <FontIcon icon="iconfont icon-folder"/>`/var`: Variable directory, it's used for system logging, user tracking, caches, etc. Basically anything that is subject to change all the time.

Look inside your <FontIcon icon="iconfont icon-folder"/>`/usr` directory, what kind of information is located there?

---

## 2. Filesystem Types

There are many different filesystem implementations available. Some are faster than others, some support larger capacity storage and others only work on smaller capacity storage. Different filesystems have different ways of organizing their data and we'll go into detail about what types of filesystems there are. Since there are so many different implementations available, applications need a way to deal with the different operations. So there is something called the Virtual File System (VFS) abstraction layer. It is a layer between applications and the different filesystem types, so no matter what filesystem you have, your applications will be able to work with it.

You can have many filesystem on your disks, depending on how they are partitioned and we will go through that in a coming lesson.

### Journaling

Journaling comes by default on most filesystem types, but just in case it doesn't, you should know what it does. Let's say you're copying a large file and all of a sudden you lose power. Well if you are on a non-journaled filesystem, the file would end up corrupted and your filesystem would be inconsistent and then when you boot back up, your system would perform a filesystem check to make sure everything is ok. However, the repairs could take awhile depending on how large your filesystem was.

Now if you were on a journaled system, before your machine even begins to copy the file, it will write what you're going to be doing in a log file (journal). Now when you actually copy the file, once it completes, the journal marks that task as complete. The filesystem is always in a consistent state because of this, so it will know exactly where you left off if your machine shutdown suddenly. This also decreases the boot time because instead of checking the entire filesystem it just looks at your journal.

### Common Desktop Filesystem Types

- `ext4`: This is the most current version of the native Linux filesystems. It is compatible with the older ext2 and ext3 versions. It supports disk volumes up to 1 exabyte and file sizes up to 16 terabytes and much more. It is the standard choice for Linux filesystems.
- `Btrfs`: "Better or Butter FS" it is a new filesystem for Linux that comes with snapshots, incremental backups, performance increase and much more. It is widely available, but not quite stable and compatible yet.
- `XFS`: High performance journaling file system, great for a system with large files such as a media server.
- `NTFS` and `FAT`: Windows filesystems
- `HFS+`: Macintosh filesystem

Check out what filesystems are on your machine:

```sh
df -T
# Filesystem     Type     1K-blocks    Used Available Use% Mounted on
# /dev/sda1      ext4       6461592 2402708   3707604  40% /
# udev           devtmpfs    501356       4    501352   1% /dev
# tmpfs          tmpfs       102544    1068    101476   2% /run
# /dev/sda6      xfs       13752320  460112  13292208   4% /home
```

The `df` command reports file system disk space usage and other details about your disk, we will talk more about this tool later.

Do a little bit of research online on the other filesystem types: `ReiserFS`, `ZFS`, `JFS` and others you can find.

---

## 3. Anatomy of a Disk

Hard disks can be subdivided into partitions, essentially making multiple block devices. Recall such examples as, <FontIcon icon="iconfont icon-folder"/>`/dev/sda1` and <FontIcon icon="iconfont icon-folder"/>`/dev/sda2`, <FontIcon icon="iconfont icon-folder"/>`/dev/sda` is the whole disk, but <FontIcon icon="iconfont icon-folder"/>`/dev/sda1` is the first partition on that disk. Partitions are extremely useful for separating data and if you need a certain filesystem, you can easily create a partition instead of making the entire disk one filesystem type.

### Partition Table

Every disk will have a partition table, this table tells the system how the disk is partitioned. This table tells you where partitions begin and end, which partitions are bootable, what sectors of the disk are allocated to what partition, etc. There are two main partition table schemes used, Master Boot Record (MBR) and GUID Partition Table (GPT).

### Partition

Disks are comprised of partitions that help us organize our data. You can have multiple partitions on a disk and they can't overlap each other. If there is space that is not allocated to a partition, then it is known as free space. The types of partitions depend on your partition table. Inside a partition, you can have a filesystem or dedicate a partition to other things like swap (we'll get to that soon).

#### MBR
- Traditional partition table, was used as the standard
- Can have primary, extended, and logical partitions
- MBR has a limit of four primary partitions
- Additional partitions can be made by making a primary partition into an extended partition (there can only be one extended partition on a disk). Then inside the extended partition you add logical partitions. The logical partitions are used just like any other partition. Silly I know.
- Supports disks up to 2 terabytes

#### GPT

- GUID Partition Table (GPT) is becoming the new standard for disk partitioning
- Has only one type of partition and you can make many of them
- Each partition has a globally unique ID (GUID)
- Used mostly in conjunction with UEFI based booting (we'll get into details in another course)

### Filesystem Structure

We know from our previous lesson that a filesystem is an organized collection of files and directories. In its simplest form, it is comprised of a database to manage files and the actual files themselves, however we're going to go into a little more detail.

- __Boot block__: This is located in the first few sectors of the filesystem, and it's not really used the by the filesystem. Rather, it contains information used to boot the operating system. Only one boot block is needed by the operating system. If you have multiple partitions, they will have boot blocks, but many of them are unused.
- __Super block__: This is a single block that comes after the boot block, and it contains information about the filesystem, such as the size of the inode table, size of the logical blocks and the size of the filesystem.
- __Inode table__: Think of this as the database that manages our files (we have a whole lesson on inodes, so don't worry). Each file or directory has a unique entry in the inode table and it has various information about the file.
- __Data blocks__: This is the actual data for the files and directories.


Let's take a look at the different partition tables. Below is an example of a partition using the MBR partitioning table (`msdos`). You can see the primary, extended and logical partitions on the machine.

```sh
sudo parted -l
# Model: Seagate (scsi)
# Disk /dev/sda: 21.5GB
# Sector size (logical/physical): 512B/512B
# Partition Table: msdos
# 
# Number  Start   End     Size    Type      File system     Flags
#  1      1049kB  6860MB  6859MB  primary   ext4            boot
#  2      6861MB  21.5GB  14.6GB  extended
#  5      6861MB  7380MB  519MB   logical   linux-swap(v1)
#  6      7381MB  21.5GB  14.1GB  logical   xfs
```

This example is GPT, using just a unique ID for the partitions.

```sh
# Model: Thumb Drive (scsi)
# Disk /dev/sdb: 4041MB
# Sector size (logical/physical): 512B/512B
# Partition Table: gpt
# 
# Number  Start   End     Size     File system  Name        Flags
#  1      17.4kB  1000MB  1000MB                first
#  2      1000MB  4040MB  3040MB                second
```

Run `parted -l` on your machine and evaluate your results.

---

## 4. Disk Partitioning

Let's do some practical stuff with filesytems by working through the process on a USB drive. If you don't have one, no worries, you can still follow along these next couple of lessons.

First we'll need to partition our disk. There are many tools available to do this:

- `fdisk`: basic command-line partitioning tool, it does not support GPT
- `parted`: this is a command line tool that supports both MBR and GPT partitioning
- `gparted`: this is the GUI version of parted
- `gdisk`: fdisk, but it does not support MBR only GPT

Let's use parted to do our partitioning. Let's say I connect the USB device and we see the device name is /dev/sdb2.

### Launch `parted`

```sh
sudo parted
```

You'll be entered in the parted tool, here you can run commands to partition your device.

### Select the device

```sh
select /dev/sdb2
```

To select the device you'll be working with, select it by its device name.

### View current partition table

```sh
# (parted) print                                                            
# Model: Seagate (scsi)
# Disk /dev/sda: 21.5GB
# Sector size (logical/physical): 512B/512B
# Partition Table: msdos
# 
# Number  Start   End     Size    Type      File system     Flags
#  1      1049kB  6860MB  6859MB  primary   ext4            boot
#  2      6861MB  21.5GB  14.6GB  extended
#  5      6861MB  7380MB  519MB   logical   linux-swap(v1)
#  6      7381MB  21.5GB  14.1GB  logical   xfs
```

Here you will see the available partitions on the device. The __start__ and __end__ points are where the partitions take up space on the hard drive, you'll want to find a good start and end location for your partitions.

### Partition the device

```sh
mkpart primary 123 4567
```

Now just choose a start and end point and make the partition, you'll need to specify the type of partition depending on what table you used.

### Resize a partition

You can also resize a partition if you don't have any space.

```sh
resize 2 1245 3456
```

Select the partition number and then the start and end points of where you want to resize it to.

Parted is a very powerful tool and you should be careful when partitioning your disks.

Partition a USB drive with half of the drive as `ext4` and the other half as free space.

---

## 5. Creating Filesystems

Now that you've actually partitioned a disk, let's create a filesystem!

```sh
sudo mkfs -t ext4 /dev/sdb2
```

Simple as that! The `mkfs` (make filesystem) tool allows us to specify the type of filesystem we want and where we want it. You'll only want to create a filesystem on a newly partitioned disk or if you are repartitioning an old one. You'll most likely leave your filesystem in a corrupted state if you try to create one on top of an existing one.

Make an `ext4` filesystem on the USB drive.

---

## 6. `mount` and `umount`

Before you can view the contents of your filesystem, you will have to mount it. To do that I'll need the device location, the filesystem type and a mount point, the mount point is a directory on the system where the filesystem is going to be attached. So we basically want to mount our device to a mount point.

First create the mount point, in our case `mkdir /mydrive`

```sh
sudo mount -t ext4 /dev/sdb2 /mydrive
```

Simple as that! Now when we go to <FontIcon icon="iconfont icon-folder"/>`/mydrive` we can see our filesystem contents, the `-t` specifies the type of filesystem, then we have the device location, then the mount point.

To unmount a device from a mount point:

```sh
sudo umount /mydrive 
# or
sudo umount /dev/sdb2
```

Remember that the kernel names devices in the order it finds them. What if our device name changes for some reason after we mount it? Well fortunately, you can use a device's universally unique ID (UUID) instead of a name.

To view the UUIDS on your system for block devices:

```sh
sudo blkid
# /dev/sda1: UUID="130b882f-7d79-436d-a096-1e594c92bb76" TYPE="ext4" 
# /dev/sda5: UUID="22c3d34b-467e-467c-b44d-f03803c2c526" TYPE="swap" 
# /dev/sda6: UUID="78d203a0-7c18-49bd-9e07-54f44cdb5726" TYPE="xfs" 
```

We can see our device names, their corresponding filesystem types and their UUIDs. Now when we want to mount something, we can use:

```sh
sudo mount UUID=130b882f-7d79-436d-a096-1e594c92bb76 /mydrive
```

Most of the time you won't need to mount devices via their UUIDs, it's much easier to use the device name and often times the operating system will know to mount common devices like USB drives. If you need to automatically mount a filesystem at startup though like if you added a secondary hard drive, you'll want to use the UUID and we'll go over that in the next lesson.

Look at the manpage for `mount` and `umount` and see what other options you can use.

---

## 7. <FontIcon icon="iconfont icon-folder"/>`/etc/fstab`

When we want to automatically mount filesystems at startup we can add them to a file called <FontIcon icon="iconfont icon-folder"/>`/etc/fstab` (pronounced "eff es tab" not "eff stab") short for filesystem table. This file contains a permanent list of filesystems that are mounted.

```sh
cat /etc/fstab
# UUID=130b882f-7d79-436d-a096-1e594c92bb76 /               ext4    relatime,errors=remount-ro 0       1
# UUID=78d203a0-7c18-49bd-9e07-54f44cdb5726 /home           xfs     relatime        0       2
# UUID=22c3d34b-467e-467c-b44d-f03803c2c526 none            swap    sw              0       0
```

Each line represents one filesystem, the fields are:

- __UUID__: Device identifier
- __Mount point__: Directory the filesystem is mounted to
- Filesystem type
- __Options__: other mount options, see manpage for more details
- __Dump__: used by the dump utility to decide when to make a backup, you should just default to 0
- __Pass__: Used by fsck to decide what order filesystems should be checked, if the value is 0, it will not be checked

To add an entry, just directly modify the <FontIcon icon="iconfont icon-folder"/>`/etc/fstab` file using the entry syntax above. Be careful when modifying this file, you could potentially make your life a little harder if you mess up.

Add the USB drive we've been working on as a entry in <FontIcon icon="iconfont icon-folder"/>`/etc/fstab`, when you reboot you should still see it mounted.

---

## 8. `swap`

In our previous example, I showed you how to see your partition table, let's revisit that example, more specifically this line:

```sh
# Number  Start   End     Size    Type      File system     Flags
#  5      6861MB  7380MB  519MB   logical   linux-swap(v1)
```

What is this swap partition? Well swap is what we used to allocate virtual memory to our system. If you are low on memory, the system uses this partition to "swap" pieces of memory of idle processes to the disk, so you're not bogged for memory.

### Using a partition for swap space

Let's say we wanted to set our partition of /dev/sdb2 to be used for swap space.

1. First make sure we don't have anything on the partition
2. Run: `mkswap /dev/sdb2` to initialize swap areas
3. Run: `swapon /dev/sdb2` this will enable the swap device
4. If you want the swap partition to persist on bootup, you need to add an entry to the <FontIcon icon="iconfont icon-folder"/>`/etc/fstab` file. sw is the filesystem type that you'll use.
5. To remove swap: `swapoff /dev/sdb2`

Generally you should allocate about twice as much swap space as you have memory. But modern systems today are usually pretty powerful enough and have enough RAM as it is.

Partition the free space in the USB drive for swap space.

---

## 9. Disk Usage

There are a few tools you can used to see the utilization of your disks:

```sh
df -h
# Filesystem     1K-blocks    Used Available Use% Mounted on
# /dev/sda1       6.2G  2.3G  3.6G  40% /
```

The `df` command shows you the utilization of your currently mounted filesystems. The `-h` flag gives you a human readable format. You can see what the device is, and how much capacity is used and available.

Let's say your disk is getting full and you want to know what files or directories are taking up that space, for that you can use the du command.

```sh
du -h
```

This shows you the disk usage of the current directory you are in, you can take a peek at the root directory with `du -h /` but that can get a little cluttered.

Both of these commands are so similar in syntax it can be hard to remember which one to use, to check how much of your disk is free use `df`. To check disk usage, use `du`.

Look at your disk usage and free space with both `du` and `df`.

---

## 10. Filesystem Repair

Sometimes our filesystem isn't always in the best condition, if we have a sudden shutdown, our data can become corrupt. It's up to the system to try to get us back in a working state (although we sure can try ourselves).

The `fsck` (filesystem check) command is used to check the consistency of a filesystem and can even try to repair it for us. Usually when you boot up a disk, `fsck` will run before your disk is mounted to make sure everything is ok. Sometimes though, your disk is so bad that you'll need to manually do this. However, be sure to do this while you are in a rescue disk or somewhere where you can access your filesystem without it being mounted.

```sh
sudo fsck /dev/sda
```

Look at the manpage for `fsck` to see what else it can do.

---

## 11. Inodes

Remember how our filesystem is comprised of all our actual files and a database that manages these files? The database is known as the `inode` table.

### What is an inode?

An `inode` (index node) is an entry in this table and there is one for every file. It describes everything about the file, such as:

- File type: regular file, directory, character device, etc
- Owner
- Group
- Access permissions
- Timestamps 
  - `mtime` (time of last file modification)
  - `ctime` (time of last attribute change)
  - `atime` (time of last access)
- Number of hardlinks to the file
- Size of the file
- Number of blocks allocated to the file
- Pointers to the data blocks of the file - most important!

Basically inodes store everything about the file, except the filename and the file itself!

### When are inodes created?

When a filesystem is created, space for inodes is allocated as well. There are algorithms that take place to determine how much inode space you need depending on the volume of the disk and more. You've probably at some point in your life seen errors for out of disk space issues. Well the same can occur for inodes as well (although less common), you can run out of inodes and therefore be unable to create more files. Remember data storage depends on both the data and the database (inodes).

To see how many inodes are left on your system, use the command `df -i`

### Inode information

Inodes are identified by numbers, when a file gets created it is assigned an inode number, the number is assigned in sequential order. However, you may sometimes notice when you create a new file, it gets an inode number that is lower than others, this is because once inodes are deleted, they can be reused by other files. To view inode numbers run `ls -li`:

```sh
ls -li
# 140 drwxr-xr-x 2 pete pete 6 Jan 20 20:13 Desktop
# 141 drwxr-xr-x 2 pete pete 6 Jan 20 20:01 Documents
```

The first field in this command lists the inode number.

You can also see detailed information about a file with `stat`, it tells you information about the inode as well.

```sh
stat ~/Desktop/
#   File: ‘/home/pete/Desktop/’
#   Size: 6               Blocks: 0          IO Block: 4096   directory
# Device: 806h/2054d      Inode: 140         Links: 2
# Access: (0755/drwxr-xr-x)  Uid: ( 1000/   pete)   Gid: ( 1000/   pete)
# Access: 2016-01-20 20:13:50.647435982 -0800
# Modify: 2016-01-20 20:13:06.191675843 -0800
# Change: 2016-01-20 20:13:06.191675843 -0800
#  Birth: -
``` 

### How do inodes locate files?

We know our data is out there on the disk somewhere, unfortunately it probably wasn't stored sequentially, so we have to use inodes. Inodes point to the actual data blocks of your files. In a typical filesystem (not all work the same), each inode contains 15 pointers, the first 12 pointers point directly to the data blocks. The 13th pointer, points to a block containing pointers to more blocks, the 14th pointer points to another nested block of pointers, and the 15th pointer points yet again to another block of pointers! Confusing, I know! The reason this is done this way is to keep the inode structure the same for every inode, but be able to reference files of different sizes. If you had a small file, you could find it quicker with the first 12 direct pointers, larger files can be found with the nests of pointers. Either way the structure of the inode is the same.

Observe some inode numbers for different files, which ones are usually created first?

---

## 12. symlinks

Let's use a previous example of inode information:

```sh
ls -li
# 140 drwxr-xr-x 2 pete pete 6 Jan 20 20:13 Desktop
# 141 drwxr-xr-x 2 pete pete 6 Jan 20 20:01 Documents
```

You may have noticed that we've been glossing over the third field in the `ls` command, that field is the link count. The link count is the total number of hard links a file has, well that doesn't mean anything to you right now. So let's discuss links first.

### Symlinks

In the Windows operating system, there are things known as shortcuts, shortcuts are just aliases to other files. If you do something to the original file, you could potentially break the shortcut. In Linux, the equivalent of shortcuts are symbolic links (or soft links or symlinks). Symlinks allow us to link to another file by its filename. Another type of links found in Linux are hardlinks, these are actually another file with a link to an inode. Let's see what I mean in practice starting with symlinks.

```sh
echo 'myfile' > myfile
echo 'myfile2' > myfile2
echo 'myfile3' > myfile3
ln -s myfile myfilelink
ls -li
# total 12
#   151 -rw-rw-r-- 1 pete pete 7 Jan 21 21:36 myfile
# 93401 -rw-rw-r-- 1 pete pete 8 Jan 21 21:36 myfile2
# 93402 -rw-rw-r-- 1 pete pete 8 Jan 21 21:36 myfile3
# 93403 lrwxrwxrwx 1 pete pete 6 Jan 21 21:39 myfilelink -> myfile
```

You can see that I've made a symbolic link named `myfilelink` that points to `myfile`. Symbolic links are denoted by `->`. Notice how I got a new inode number though, symlinks are just files that point to `filenames`. When you modify a symlink, the file also gets modified. Inode numbers are unique to filesystems, you can't have two of the same inode number in a single filesystem, meaning you can't reference a file in a different filesystem by its inode number. However, if you use symlinks they do not use inode numbers, they use `filenames`, so they can be referenced across different filesystems.

### Hardlinks

Let's see an example of a hardlink:

```sh
ln myfile2 myhardlink
ls -li
# total 16
#   151 -rw-rw-r-- 1 pete pete 7 Jan 21 21:36 myfile
# 93401 -rw-rw-r-- 2 pete pete 8 Jan 21 21:36 myfile2
# 93402 -rw-rw-r-- 1 pete pete 8 Jan 21 21:36 myfile3
# 93403 lrwxrwxrwx 1 pete pete 6 Jan 21 21:39 myfilelink -> myfile
# 93401 -rw-rw-r-- 2 pete pete 8 Jan 21 21:36 myhardlink
```

A hardlink just creates another file with a link to the same inode. So if I modified the contents of `myfile2` or `myhardlink`, the change would be seen on both, but if I deleted `myfile2`, the file would still be accessible through `myhardlink`. Here is where our link count in the ls command comes into play. The link count is the number of hardlinks that an inode has, when you remove a file, it will decrease that link count. The inode only gets deleted when all hardlinks to the inode have been deleted. When you create a file, it's link count is 1 because it is the only file that is pointing to that inode. Unlike symlinks, hardlinks do not span filesystems because inodes are unique to the filesystem.

### Creating a symlink

```sh
ln -s myfile mylink
```

To create a symbolic link, you use the ln command with `-s` for symbolic and you specific a target file and then a link name.

### Creating a hardlink

```sh
ln somefile somelink
```

Similar to a symlink creation, except this time you leave out the `-s`.

Play around with making symlinks and hardlinks, delete a couple and see what happens.


