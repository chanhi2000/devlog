---
lang: ko-KR
title: Basics
description: Powershell > Basics
icon: fas fa-egg
category:
  - Powershell 
  - Basics
tag: 
  - powershell
  - pwsh
  - windows
  - windows-terminal
  - multiline
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Timestamp 출력

```powershell
#Get the Timestamp
$TimeStamp = Get-Date -F yyyy-MM-dd_HH-mm
```

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

```powershell
$file = Get-Item C:\Path\TO\File.txt
$file.LastWriteTime = ('YYYY/MM/DD HH:MI:SS')
```

### Folder

```powershell
$file = Get-Item C:\Path\TO\File.txt
$file.LastWriteTime = ('YYYY/MM/DD HH:MI:SS')
```

---

## Rename File(s)

[링크참고](https://www.sharepointdiary.com/2020/05/powershell-to-rename-file.html)

### one

```powershell
Rename-Item -Path C:\Path\To\oldFile.txt -NewName C:\Path\To\oldFile.txt
```

### multiple

```powershell
Get-ChildItem -Path "C:\Path\To\oldFile" -Recurse -Include "*.txt" | Rename-Item -NewName { $_.Name -replace " ","-" }
```

### multiple w/ timestamp

```powershell
#Get the Timestamp
$TimeStamp = Get-Date -F yyyy-MM-dd_HH-mm
 
#Get all text files from a Folder and rename them by appending Timestamp
Get-ChildItem -Path "C:\Temp" -Recurse -Include "*.txt" | ForEach-Object { 
    Rename-Item -Path $_.FullName -NewName "$($_.DirectoryName)\$($_.BaseName)_$TimeStamp$($_.Extension)"
}
```

---

## Windows Update 확인

[링크참고](https://www.clien.net/service/board/lecture/18040549)

```powershell
&{start ms-settings:windowsupdate;sleep 3;$wshell=New-Object -ComObject wscript.shell;$wshell.SendKeys('{TAB}{TAB}{TAB}{ENTER}')}
```

<TagLinks />