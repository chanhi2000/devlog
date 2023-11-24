---
lang: ko-KR
title: GrassHopper > Permissions
description: 🐧Linux Journey > GrassHopper > Permissions
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > GrassHopper > Permissions
    content: Permissions
  - property: og:title
    content: Permissions
  - property: og:description
    content: 🐧Linux Journey > GrassHopper > Permissions
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/01-grasshopper
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Permissions
desc: Learn about permission levels and modifying permissions.
link: https://linuxjourney.com/lesson/file-permissions
logo: https://linuxjourney.com/assets/access-6157a84d9ecc01b59ff9ed57040090948fc8851e60647033087af0f58d4236f4.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. File Permissions

As we learned previously, files have different permissions or file modes. Let's look at an example:

```sh
ls -l Desktop/
# drwxr-xr-x 2 pete penguins 4096 Dec 1 11:45 .
```
There are four parts to a file's permissions. The first part is the filetype, which is denoted by the first character in the permissions, in our case since we are looking at a directory it shows __d__ for the filetype. Most commonly you will see a __-__ for a regular file.

The next three parts of the file mode are the actual permissions. The permissions are grouped into 3 bits each. The first 3 bits are user permissions, then group permissions and then other permissions. I've added the pipe to make it easier to differentiate.

```sh
# d | rwx | r-x | r-x 
```

Each character represent a different permission:

- `r`: readable
- `w`: writable
- `x`: executable (basically an executable program)
- `-`: empty

So in the above example, we see that the user pete has read, write and execute permissions on the file. The group penguins has read and execute permissions. And finally, the other users (everyone else) has read and execute permissions.

Use the `ls -l` command on multiple files and recite their permissions, user and group.

---

## 2. Modifying Permissions

Changing permissions can easily be done with the chmod command.

First, pick which permission set you want to change, user, group or other. You can add or remove permissions with a `+` or `-`, let's look at some examples.

### Adding permission bit on a file

```sh
chmod u+x myfile
```

The above command reads like this: change permission on myfile by adding executable permission bit on the user set. So now the user has executable permission on this file!

### Removing permission bit on a file

```sh
chmod u-x myfile
```

### Adding multiple permission bits on a file

```sh
chmod ug+w
```

There is another way to change permissions using numerical format. This method allows you to change permissions all at once. Instead of using `r`, `w`, or `x` to represent permissions, you'll use a numerical representation for a single permission set. So no need to specify the group with `g` or the user with `u`.

The numerical representations are seen below:

- `4`: read permission
- `2`: write permission
- `1`: execute permission

Let's look at an example:

```sh
chmod 755 myfile
```

Can you guess what permissions we are giving this file? Let's break this down, so now `755` covers the permissions for all sets. The first number (`7`) represents user permissions, the second number (`5`) represents group permissions and the last `5` represents other permissions.

Wait a minute, `7` and `5` weren't listed above, where are we getting these numbers? Remember we are combining all the permissions into one number now, so you'll have to get some math involved.

- $7=4+2+1$, so 7 is the user permissions and it has read, write and execute permissions
- $5=4+1$, the group has read and execute permissions
- $5=4+1$, and all other users have read and execute permissions

One thing to note: it's not a great idea to be changing permissions nilly willy, you could potentially expose a sensitive file for everyone to modify, however many times you legitimately want to change permissions, just take precaution when using the chmod command.

Change some basic text file permissions and see the bits changing as you do an `ls -l`.

---

## 3. Ownership Permissions

In addition to modifying permissions on files, you can also modify the group and user ownership of the file as well.

### Modify user ownership

```sh
sudo chown patty myfile
```

This command will set the owner of myfile to patty.

### Modify group ownership

```sh
sudo chgrp whales myfile
```

This command will set the group of myfile to whales.

Modify both user and group ownership at the same time
If you add a colon and groupname after the user you can set both the user and group at the same time.

```sh
sudo chown patty:whales myfile
```

Modify the group and user of some test files. Afterwards take a look at the permissions with `ls -l`.

---

## 4. Umask

Every file that gets created comes with a default set of permissions. If you ever wanted to change that default set of permissions, you can do so with the `umask` command. This command takes the 3 bit permission set we see in numerical permissions.

Instead of adding these permissions though, `umask` takes away these permissions.

```sh
umask 021
```

In the above example, we are stating that we want the default permissions of new files to allow users access to everything, but for groups we want to take away their write permission and for others we want to take away their executable permission. The default umask on most distributions is `022`, meaning all user access, but no write access for group and other users.

When you run the umask command it will give that default set of permissions on any new file you make. However, if you want it to persist you'll have to modify your startup file (`.profile`), but we'll discuss that in a later lesson.

1. Create a new file, then note it's permissions.
2. Modify the `umask` and then create another new file.
3. Check the permissions once more on the new file, what do you expect to see?

---

## 5. Setuid

There are many cases in which normal users need elevated access to do stuff. The system administrator can't always be there to enter in a root password every time a user needed access to a protected file, so there are special file permission bits to allow this behavior. The Set User ID (SUID) allows a user to run a program as the owner of the program file rather than as themselves.

Let's look at an example:

Let's say I want to change my password, simple right? I just use the `passwd` command:

```sh
passwd
```

What is the password command doing? It's modifying a couple of files, but most importantly it's modifying the <FontIcon icon="iconfont icon-file"/>`/etc/shadow` file. Let's look at that file for a second:

```sh
ls -l /etc/shadow
# -rw-r----- 1 root shadow 1134 Dec 1 11:45 /etc/shadow
```

Oh wait a minute here, this file is owned by root? How is it possible that we are able to modify a file owned by root?

Let's look at another permission set, this time of the command we ran:

```sh
ls -l /usr/bin/passwd
# -rwsr-xr-x 1 root root 47032 Dec 1 11:45 /usr/bin/passwd
```

You'll notice a new permission bit here `s`. This permission bit is the SUID, when a file has this permission set, it allows the users who launched the program to get the file owner's permission as well as execution permission, in this case root. So essentially while a user is running the password command, they are running as root.

That's why we are able to access a protected file like <FontIcon icon="iconfont icon-file"/>`/etc/shadow` when we run the passwd command. Now if you removed that bit, you would see that you will not be able to modify <FontIcon icon="iconfont icon-file"/>`/etc/shadow` and therefore change your password.

### Modifying SUID

Just like regular permissions there are two ways to modify SUID permissions.

_Symbolic_ way:

```sh
sudo chmod u+s myfile
```

_Numerical_ way:

```sh
sudo chmod 4755 myfile
```
As you can see the SUID is denoted by a 4 and pre-pended to the permission set. You may see the SUID denoted as a capital __S__ this means that it still does the same thing, but it does not have execute permissions.

Look at the permission for <FontIcon icon="iconfont icon-file"/>`/etc/passwd` in detail, do you notice anything else? Files with SUID enabled are also easily distinguishable.

---

## 6. Setgid

Similar to the set user ID permission bit, there is a set group ID (SGID) permission bit. This bit allows a program to run as if it was a member of that group.

Let's look at one example:

```sh
ls -l /usr/bin/wall
# -rwxr-sr-x 1 root tty 19024 Dec 14 11:45 /usr/bin/wall
```

We can see now that the permission bit is in the group permission set.

### Modifying SGID

```sh
sudo chmod g+s myfile
sudo chmod 2555 myfile
```

The numerical representation for SGID is 2.

---

## 7. Process Permissions

Let's segue into process permissions for a bit, remember how I told you that when you run the passwd command with the SUID permission bit enabled you will run the program as root? That is true, however does that mean since you are temporarily root you can modify other user's passwords? Nope fortunately not!

This is because of the many UIDs that Linux implements. There are three UIDS associated with every process:

When you launch a process, it runs with the same permissions as the user or group that ran it, this is known as an __effective user ID__. This UID is used to grant access rights to a process. So naturally if Bob ran the touch command, the process would run as him and any files he created would be under his ownership.

There is another UID, called the __real user ID__ this is the ID of the user that launched the process. These are used to track down who the user who launched the process is.

One last UID is the __saved user ID__, this allows a process to switch between the effective UID and real UID, vice versa. This is useful because we don't want our process to run with elevated privileges all the time, it's just good practice to use special privileges at specific times.

Now let's piece these all together by looking at the passwd command once more.

When running the passwd command, your effective UID is your user ID, let's say its 500 for now. Oh but wait, remember the passwd command has the SUID permission enabled. So when you run it, your effective UID is now 0 (0 is the UID of root). Now this program can access files as root.

Let's say you get a little taste of power and you want to modify Sally's password, Sally has a UID of 600. Well you'll be out of luck, fortunately the process also has your real UID in this case 500. It knows that your UID is 500 and therefore you can't modify the password of UID of 600. (This of course is always bypassed if you are a superuser on a machine and can control and change everything).

Since you ran passwd, it will start the process off using your real UID, and it will save the UID of the owner of the file (effective UID), so you can switch between the two. No need to modify all files with root access if it's not required.

Most of the time the real UID and the effective UID are the same, but in such cases as the passwd command they will change.

We haven't discussed processes yet, we can still take a look at this change happening in real time:

1. Open one terminal window, and run the command: `watch -n 1 "ps aux | grep passwd"`. This will watch for the passwd process.
2. Open a second terminal window and run: `passwd`
3. Look at the first terminal window, you'll see a process come up for passwd. The first column in the process table is the effective user ID, lo and behold it's the root user!

---

## 8. The Sticky Bit

One last special permission bit I want to talk about is the sticky bit.

This permission bit, "sticks a file/directory" this means that only the owner or the root user can delete or modify the file. This is very useful for shared directories. Take a look at the example below:

```sh
$ ls -ld /tmp
# drwxrwxrwxt 6 root root 4096 Dec 15 11:45 /tmp
```

You'll see a special permission bit at the end here t, this means everyone can add files, write files, modify files in the <FontIcon icon="iconfont icon-folder"/>`/tmp` directory, but only root can delete the <FontIcon icon="iconfont icon-folder"/>`/tmp` directory.

Modify sticky bit

```sh
$ sudo chmod +t mydir
$ sudo chmod 1755 mydir
```

The numerical representation for the sticky bit is 1

