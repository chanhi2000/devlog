---
lang: ko-KR
title: 1. Installation and Documentation
description: 🐚Text Processing with GNU awk > 1. Installation and Documentation
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 1. Installation and Documentation
    content: 1. Installation and Documentation
  - property: og:title
    content: 1. Installation and Documentation
  - property: og:description
    content: 🐚Text Processing with GNU awk > 1. Installation and Documentation
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/01-installation-and-documentation.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 1. Installation and Documentation
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/installation-and-documentation.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

The command name `awk` is derived from its developers — Alfred V. Aho, Peter J. Weinberger, and Brian W. Kernighan. Over the years, it has been adapted and modified by various other developers. [See gawk manual: History](https://www.gnu.org/software/gawk/manual/gawk.html#History) for more details.

This chapter will show how to install or upgrade awk followed by details related to documentation.

---
## Installation

If you are on a Unix-like system, you will most likely have some version of `awk` already installed. This book is primarily about `GNU awk`. As there are syntax and feature differences between various implementations, make sure to use `GNU awk` to follow along the examples presented in this book.

`GNU awk` is part of the [text creation and manipulation](https://www.gnu.org/manual/manual.html) commands and usually comes by default on GNU/Linux distributions. To install a particular version, visit [gnu: gawk software](https://www.gnu.org/software/gawk/). See also [release notes](https://lists.gnu.org/archive/cgi-bin/namazu.cgi?query=gawk+released&submit=Search%21&idxname=info-gnu&max=20&result=normal&sort=date%3Alate) for an overview of changes between versions.

```sh
wget https://ftp.gnu.org/gnu/gawk/gawk-5.2.2.tar.xz
tar -Jxf gawk-5.2.2.tar.xz
cd gawk-5.2.2/
# see https://askubuntu.com/q/237576 if you get compiler not found error
./configure
make
sudo make install

awk --version | head -n1
# GNU Awk 5.2.2, API 3.2, PMA Avon 8-g1
```

If you are not using a Linux distribution, you may be able to access `GNU awk` using an option below:

- [Git for Windows](https://git-scm.com/downloads) — provides a Bash emulation used to run Git from the command line
- [Windows Subsystem for Linux](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) — compatibility layer for running Linux binary executables natively on Windows
- [brew](https://brew.sh/) — Package Manager for macOS (or Linux)

::: info 

See also [gawk manual: Installation](https://www.gnu.org/software/gawk/manual/html_node/Installation.html) for advanced options and instructions to install awk on other platforms.

:::

---

## Documentation

It is always good to know where to find documentation. From the command line, you can use `man awk` for a short manual and `info awk` for the full documentation. I prefer using the [online gnu awk manual](https://www.gnu.org/software/gawk/manual/), which feels much easier to use and navigate.

Here's a snippet from `man awk`:

```sh
man awk
# GAWK(1)                        Utility Commands                        GAWK(1)  
#   
# NAME
#        gawk - pattern scanning and processing language
# 
# SYNOPSIS
#        gawk [ POSIX or GNU style options ] -f program-file [ -- ] file ...
#        gawk [ POSIX or GNU style options ] [ -- ] program-text file ...
# 
# DESCRIPTION
#        Gawk  is  the  GNU Project's implementation of the AWK programming lan‐
#        guage.  It conforms to the definition of  the  language  in  the  POSIX
#        1003.1  Standard.   This version in turn is based on the description in
#        The AWK Programming Language, by Aho, Kernighan, and Weinberger.   Gawk
#        provides  the additional features found in the current version of Brian
#        Kernighan's awk and numerous GNU-specific extensions.
```

---

## Options overview

For a quick overview of all the available options, use `awk --help` from the command line.

```sh
awk --help
# Usage: awk [POSIX or GNU style options] -f progfile [--] file ...
# Usage: awk [POSIX or GNU style options] [--] 'program' file ...
# POSIX options:                  GNU long options: (standard)
#     -f progfile                 --file=progfile
#     -F fs                       --field-separator=fs
#     -v var=val                  --assign=var=val
# Short options:                  GNU long options: (extensions)
#     -b                          --characters-as-bytes
#     -c                          --traditional
#     -C                          --copyright
#     -d[file]                    --dump-variables[=file]
#     -D[file]                    --debug[=file]
#     -e 'program-text'           --source='program-text'
#     -E file                     --exec=file
#     -g                          --gen-pot
#     -h                          --help
#     -i includefile              --include=includefile
#     -I                          --trace
#     -l library                  --load=library
#     -L[fatal|invalid|no-ext]    --lint[=fatal|invalid|no-ext]
#     -M                          --bignum
#     -N                          --use-lc-numeric
#     -n                          --non-decimal-data
#     -o[file]                    --pretty-print[=file]
#     -O                          --optimize
#     -p[file]                    --profile[=file]
#     -P                          --posix
#     -r                          --re-interval
#     -s                          --no-optimize
#     -S                          --sandbox
#     -t                          --lint-old
#     -V                          --version
```

---

<TagLinks/>