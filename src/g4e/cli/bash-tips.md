---
lang: ko-KR
title: Bash > ๐กTips
description: Bash > ๐กTips
tags: ["bash", "linux", "macos", "terminal", "date"]
---

# {{ $frontmatter.description }} ๊ด๋ จ

[[toc]]

---
## H/W ์ ๋ณด

| ๋ช๋ น์ด | ์ค๋ช |
| :--- | :--- |
| `lscpu` | CPU ๊ธฐ๋ณธ ์ ๋ณด |
| `cat /proc/cpuinfo` | CPU ์ฝ์ด๋ณ ์ ๋ณด ์ถ๋ ฅ |
| `cat /proc/cpuinfo | egrep -i "processor" | wc -l` | CPU ์ฝ์ด ๊ฐ์ |
| `sar` | CPU ์ฌ์ฉ๋ฅ  ๋ฐ ์ํ |
| `ps -ef | wc -l | grep -iv uid` | ํ๋ก์ธ์ค ์ํ ๊ฐ์ |
| `cat /proc/meminfo` | ๋ฉ๋ชจ๋ฆฌ ์ ๋ณด |
| `free -h` | ๋ฉ๋ชจ๋ฆฌ ์ํ (`-g` ํ๋๊ทธ ์ถ๊ฐ ์, GB๋จ์) |
| `df -Th | egrep -v tmpfs | sort -k6 -r` | ๋์คํฌ ์ฌ์ฉ์ํ |
| `fdisk -l` | RAID ๊ตฌ์ฑ ์ฌ๋ถ ๋ฐ ์ํ |
| `cat /proc/mounts | egrep -i ro, | egrep -v "tmp|iso9660` | ๋์คํฌ ๋ด ํ์ผ ReadOnly ์ํ ํ์ธ |
| `cat /var/log/messages` | ์์คํ ์๋ฌ ๋ก๊ทธ (`erro`, `crit`, `warn` ์ด ๋์ค์ง ์์ผ๋ฉด ์ ์) |
| `dmesg` | ๋ถํ ๋ก๊ทธ (`erro`, `crit`, `warn` ์ด ๋์ค์ง ์์ผ๋ฉด ์ ์) |
| `ifconfig` | ๋คํธ์ํฌ ์ํ |
| `route` | ๋ผ์ฐํ ํ์ด๋ธ ์ํ |
| `systemctl status firewalld` | ๋ฐฉํ๋ฒฝ ์ค์  ์ํ |
| `systemctl is-enabled firewalld` | ๋ฐฉํ๋ฒฝ ํ์ฑํ ์ํ |
| `netstat -an` | ์ฌ์ฉ๊ฐ๋ฅ ํฌํธ ํ์ธ |
| `netstat -nr` | ์ฌ์ฉ๊ฐ๋ฅ ํฌํธ ํ์ธ |
| `netstat -an | grep SYN_RECV | wc -l` | SYN Flooding ๊ณต๊ฒฉ ๊ฐ๋ฅ์ฑ ์ ๊ฒ (1000๋ฏธ๋ง์ผ ๊ฒฝ์ฐ ์ ์) |
| `uptime` | ์ด์์๊ฐ |
| `hostname` | ํธ์คํธ๋ช |
| `cat /etc/redhat-release` | (Red Hat OS์๋ง ํด๋น) OS ๋ฒ์  |


---
## ๊ธฐํ

| ๋ช๋ น์ด | ์ค๋ช |
| :--- | :--- |

| `echo $(TZ=KST+15;date +%y%m%d)` | ์ด์  ๋ ์ง ์ถ๋ ฅ (`yyyyMMdc` ํฌ๋ฉง) |

<TagLinks />