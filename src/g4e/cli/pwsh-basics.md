---
lang: ko-KR
title: Powershell > 🐣Basics
description: Powershell > 🐣Basics
tags: ["powershell", "windows", "windows-terminal", "multiline"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## Multiline 입력

'\`' 을 붙여 커맨드 입력

```batch
wsdl2java.bat -u -t -ss -sd -g -b `
    -o .\BmsSifDctToProcessMobService `
    -uri http://onnara.saas.gcloud.go.kr/bms/service/BmsSifDctToProcessMobService?wsdl
```

---

## Change Last Modified Date

[링크참고](https://superuser.com/questions/924365/changing-last-modified-date-or-time-via-powershell)

### File

```pwsh
$file = Get-Item C:\Path\TO\File.txt
$file.LastWriteTime = ('DD/MM/YYYY HH:MI:SS')
```

### Folder

```pwsh
$file = Get-Item C:\Path\TO\File.txt
$file.LastWriteTime = ('DD/MM/YYYY HH:MI:SS')
```

<TagLinks />