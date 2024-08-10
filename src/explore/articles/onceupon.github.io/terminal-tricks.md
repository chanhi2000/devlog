---
lang: ko-KR
title: Terminal Tricks
description: Article(s) > Terminal Tricks
icon: iconfont icon-shell
category: 
  - Shell
  - Article(s)
tag: 
  - blog
  - onceupon.github.io
  - system-design
head:
  - - meta:
    - property: og:title
      content: Article(s) > Terminal Tricks
    - property: og:description
      content: Terminal Tricks
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/onceupon.github.io/terminal-tricks.html
prev: /programming/sh/articles/README.md
date: 2023-08-11
isOriginal: false
cover: https://repository-images.githubusercontent.com/61099017/cde6c580-765d-11e9-9f0a-9d94f2bdf421
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Shell > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/sh/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Terminal Tricks | Bash-Oneliner"
  desc="A collection of handy Bash One-Liners and terminal tricks for data processing and Linux system maintenance."
  url="https://onceupon.github.io/Bash-Oneliner/#terminal-tricks"
  logo="https://avatars.githubusercontent.com/u/7253159?v=4"
  preview="https://repository-images.githubusercontent.com/61099017/cde6c580-765d-11e9-9f0a-9d94f2bdf421"/>

## Using Ctrl keys

- <kbd>Ctrl</kbd>+<kbd>a</kbd>: move to the beginning of line.
- <kbd>Ctrl</kbd>+<kbd>d</kbd>: if you've type something, Ctrl + d deletes the character under the cursor, else, it escapes the current shell.
- <kbd>Ctrl</kbd>+<kbd>e</kbd>: move to the end of line.
- <kbd>Ctrl</kbd>+<kbd>k</kbd>: delete all text from the cursor to the end of line.
- <kbd>Ctrl</kbd>+<kbd>l</kbd>: equivalent to clear.
- <kbd>Ctrl</kbd>+<kbd>n</kbd>: same as Down arrow.
- <kbd>Ctrl</kbd>+<kbd>p</kbd>: same as Up arrow.
- <kbd>Ctrl</kbd>+<kbd>q</kbd>: to resume output to terminal after Ctrl + s.
- <kbd>Ctrl</kbd>+<kbd>r</kbd>: begins a backward search through command history.(keep pressing Ctrl + r to move backward)
- <kbd>Ctrl</kbd>+<kbd>s</kbd>: to stop output to terminal.
- <kbd>Ctrl</kbd>+<kbd>t</kbd>: transpose the character before the cursor with the one under the cursor, press Esc + t to transposes the two words before the cursor.
- <kbd>Ctrl</kbd>+<kbd>u</kbd>: cut the line before the cursor; then Ctrl + y paste it
- <kbd>Ctrl</kbd>+<kbd>w</kbd>: cut the word before the cursor; then Ctrl + y paste it
- <kbd>Ctrl</kbd>+<kbd>x</kbd>+<kbd>backspace</kbd> : delete all text from the beginning of line to the cursor.
- <kbd>Ctrl</kbd>+<kbd>x</kbd>+<kbd>Ctrl</kbd>+<kbd>e</kbd> : launch editor defined by $EDITOR to input your command. Useful for multi-line commands.
- <kbd>Ctrl</kbd>+<kbd>z</kbd>: stop current running process and keep it in background. You can use `fg` to continue the process in the foreground, or `bg` to continue the process in the background.
- <kbd>Ctrl</kbd>+<kbd>_</kbd>: undo typing.

---

## Change case

- <kbd>Esc</kbd>+<kbd>u</kbd>: converts text from cursor to the end of the word to uppercase.
- <kbd>Esc</kbd>+<kbd>l</kbd>: converts text from cursor to the end of the word to lowercase.
- <kbd>Esc</kbd>+<kbd>c</kbd>: converts letter under the cursor to uppercase, rest of the word to lowercase.

<!-- https://raw.githubusercontent.com/onceupon/Bash-Oneliner/master/README.md -->

---

## Run history number

> *e.g.* `53`

```bash
!53
```

---

## Run last command

```bash
!!
# run the previous command using sudo
sudo !!
```

---

## Run last command and change some parameter using caret substitution

> *e.g.* last command: `echo 'aaa'` -> rerun as: `echo 'bbb'`

```bash
#last command: echo 'aaa'
^aaa^bbb

#echo 'bbb'
#bbb

#Notice that only the first aaa will be replaced, if you want to replace all 'aaa', use ':&' to repeat it:
^aaa^bbb^:&
#or
!!:gs/aaa/bbb/

```

---

## Run past command that began with

> *e.g.* `cat filename`

```bash
!cat
# or
!c
# run cat filename again
```

---

## Bash globbing

```bash
# '*' serves as a "wild card" for filename expansion.
/etc/pa*wd    #/etc/passwd

# '?' serves as a single-character "wild card" for filename expansion.
/b?n/?at      #/bin/cat

# '[]' serves to match the character from a range.
ls -l [a-z]*   #list all files with alphabet in its filename.

# '{}' can be used to match filenames with more than one patterns
ls *.{sh,py}   #list all .sh and .py files
```

---

## Some handy environment variables

```
$0   :name of shell or shell script.
$1, $2, $3, ... :positional parameters.
$#   :number of positional parameters.
$?   :most recent foreground pipeline exit status.
$-   :current options set for the shell.
$$   :pid of the current shell (not subshell).
$!   :is the PID of the most recent background command.
$_   :last argument of the previously executed command, or the path of the bash script.

$DESKTOP_SESSION     current display manager
$EDITOR   preferred text editor.
$LANG   current language.
$PATH   list of directories to search for executable files (i.e. ready-to-run programs)
$PWD    current directory
$SHELL  current shell
$USER   current username
$HOSTNAME   current hostname
```

---

## Using vi-mode in your shell

```bash
set -o vi
# change bash shell to vi mode
# then hit the Esc key to change to vi edit mode (when `set -o vi` is set)
k               # in vi edit mode - previous command
j               # in vi edit mode - next command
0               # in vi edit mode - beginning of the command
R               # in vi edit mode - replace current characters of command
2w              # in vi edit mode - next to 2nd word
b               # in vi edit mode - previous word
i               # in vi edit mode - go to insert mode
v               # in vi edit mode - edit current command in vi
man 3 readline  # man page for complete readline mapping
```

---

<TagLinks />