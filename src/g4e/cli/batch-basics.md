---
lang: ko-KR
title: Batch > 🐣Basics
description: Batch > 🐣Basics
tags: ["batch", "bat", "windows", "windows-terminal", "multiline", "DOSKEY"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## Multiline 입력

`^`을 붙여 커맨드 입력

```batch
wsdl2java.bat -u -t -ss -sd -g -b ^
    -o .\BmsSifDctToProcessMobService ^
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

---
## Alias 지정

`DOSKEY <지정할 명령어>=<자주 입력하는 명령어>`

```batch
DOSKEY scrcpyDefault=scrcpy -m 1024 --always-on-top
```



<TagLinks />