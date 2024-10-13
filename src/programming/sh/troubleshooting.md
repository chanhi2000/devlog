---
lang: ko-KR
title: Troubleshooting
description: Shell > Troubleshooting
icon: fas fa-bug-slash
category:
  - Shell
  - Troubleshooting
tag: 
  - bash
  - linux
  - macos
  - terminal
  - sed
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## ssh 접속 오류

###

::: tabs

@tab <FontIcon icon="fas fa-skull"/>증상

```sh
ssh root@192.168.0.80 -p 22
#
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
# Someone could be eavesdropping on you right now (man-in-the-middle attack)!
# It is also possible that a host key has just been changed.
# The fingerprint for the ECDSA key sent by the remote host is
# SHA256:FN2idP7a1ZW7gC+K7WeRuwZSfUqt4aQIMr9eRTbmM44.
# Please contact your system administrator.
# Add correct host key in <홈>/.ssh/known_hosts to get rid of this message.
# Offending ECDSA key in <홈>/.ssh/known_hosts:3
# ECDSA host key for 192.168.0.80 has changed and you have requested strict checking.
# Host key verification failed.
```

@tab <FontIcon icon="fas fa-stethoscope"/>해결

- 커맨드 불량

```sh
# 불량
# 성공

```

- Secret 재등록 필요

- .<FontIcon icon="fas fa-folder-open"/>`<홈>/.ssh/`<FontIcon icon="fas fa-file-lines"/>`known_hosts` 경로 /파일 존재확인
  - (<FontIcon icon="fa-brands fa-windows"/> 윈도우 경우) `%UserProfile%\.ssh\`<FontIcon icon="fas fa-file-lines"/>`known_hosts`

> <FontIcon icon="fas fa-file-lines"/>`known_hosts`

```{3}
# 192.168.0.53 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHUE6W2QfyScJlHNodcrGQ+iwDNgTSJ5jy/7UJs8G+81JpXIvinLP33ZhJbKUHBTG7HjIq4EJwu+3jV9fJsuN7k=
# 192.168.0.50 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBH9mzi0fzuYaove5zhq+SlKBKtorAOlXLmwPSaToS45CoqV81vKaNH832BMJc5e9zOwUqNzF97kyJbd/01Bk5Nc=
# 192.168.0.80 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBNMpHF9y+QPRcYG0XFAzlSCrpf1muxMzGyRbwvgZuxjoQ5462b6TeVGJUHFTaUgv9dgbXow3myaFM8fNVu1FEEM=
```

`80`번에 대한 접근 Secret 제거

```sh
ssh root@192.168.0.80 -p 22
#
# root@192.168.0.80's password:
# Web console: https://ovirt.ititinfo.com:9090/ or https://192.168.0.80:9090/
#
# Last login: Fri May 24 09:56:18 2024 from 192.168.0.51
```

:::

---

## 스크립트 실행오류

### `/bin/sh^M`: bad interpreter: 그런 파일이나 디렉터리가 없습니다.

- 😥유닉스 개행문자와 윈도우 개행문자가 섞여있을 경우 발생
- 💊실행하려는 스크립트에 대하여 아래와 같이 실행

::: tabs

@tab:active 해결#1

```sh
sed -i -e 's/\r$//' <문제파일.sh>
```

@tab 해결#2

```sh
vi <문제파일.sh>
set fileformat=unix
```

:::

---

<TagLinks />