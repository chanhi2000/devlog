---
lang: ko-KR
title: Basics
description: Basics
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## Multiline 입력

`\` 을 붙여 커맨드 입력

```sh
wsdl2java.sh -u -t -ss -sd -g -b \
    -o ./BmsSifDctToProcessMobService \
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

---
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