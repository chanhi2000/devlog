---
lang: ko-KR
title: Fundamental
description: Fundamental
---

# Fundamental 관련

## aliases

엘리아스 지정

```sh
alias ls=’ls -l’
```

## Make tasks running in background

커멘드 뒤에 `&` 추가

```sh
tail -f /var/log/messages &
```
결과창에 `[1] 614`이 나온다면

```sh
fg 1
```
를 입력하여 다시 foreground로 복귀

## Quickly jump to frequently-used directories

```sh
CDPATH=’.:~:/usr/local/apache/htdocs:/disk1/backups’
export CDPATH
```

`cd` 입력 후 자주 찾는 디렉토리를 알려준다.

## Perform calculations

숫자계산

```sh
echo $((16/2))
```