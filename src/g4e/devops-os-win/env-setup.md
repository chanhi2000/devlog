---
lang: ko-KR
title: 🧰Environment Setup
description: 👓Windows > 🧰Environment Setup
tags: ["bat", "pwsh", "win-run", "oh-my-pwsh", "chocolatey", "windows-terminal", "cmd", "powershell", "ps1", "scoop", "pacman", "jdk", "jdk7", "temurin", "temurin11", "docker", "neofetch"]
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 설정


---

## B. Chocolatey

### B1. Prerequesite(s)

::: warning 📝WARNING

First, ensure that you are using an __administrative__ shell

:::

### B2. Guide

- <kbd>win</kbd> + <kbd>r</kbd> 입력
- 창에 `powershell`입력 후 <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd> 눌러 실행
- Copy and Paste the following to the Powershell Prompt

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### B3. Configure

Copy and Paste the following to the Powershell Prompt

```powershell
choco install -y everything everythingtoolbar notion openssl powertoys qdir `
    sharex speccy sublimemerge sublimetext4 vlc vscode `
    dbeaver googlechrome fiddler windirstat 7zip `
    procexp scrcpy nvm docker-desktop temurin11 temurin11 `
    intellijidea revo-uninstaller glogg autoruns microsoft-windows-terminal `
    twinkle-tray wiztree rust
```

or Windows Cmd

```batch
choco install -y everything everythingtoolbar notion openssl powertoys qdir ^
    sharex speccy sublimemerge sublimetext4 vlc vscode ^
    dbeaver googlechrome fiddler windirstat 7zip ^
    procexp scrcpy nvm docker-desktop temurin11 temurin11 ^
    intellijidea revo-uninstaller glogg autoruns microsoft-windows-terminal ^
    twinkle-tray wiztree rust
```

---

## C. Scoop.sh

### C1. Prerequesite(s)

::: warning 📝WARNING

First, ensure that you are using an __administrative__ shell

:::

### C2. 👨‍🏫Guide

- <kbd>win</kbd> + <kbd>r</kbd> 입력
- 창에 `powershell`입력 후 <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd> 눌러 실행
- Copy and Paste the following to the Powershell Prompt

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

### C3. Configure

Copy and Paste the following to the Powershell Prompt

```powershell
scoop install 7zip neofetch oh-my-posh terminal-icons watchman `
    git
```

or Windows Cmd

```batch
scoop install 7zip neofetch oh-my-posh terminal-icons watchman ^
    git 
```

---

## D. Alias 지정 관련

### D1. Prerequesite(s)

- `alias.cmd` 파일을 만들어 관련 Alias 지정

::: tip NOTE
[🌐chanhi2000/chan-alias](https://github.com/chanhi2000/chan-alias) 참조
:::

### D2. Guide

- <kbd>win</kbd> + <kbd>r</kbd> 누른 후 `regedit` 실행
- `HKEY_CURRENT_USER\Software\Microsoft\Command Processor` 경로로 이동
- 창에 마우스 우클릭 후, 메뉴에서 `새로만들기` > `문자열 값` 선택 후 아래 값 입력
  - Key: `AutoRun`
  - Value: `%USERPROFILE%\alias.cmd`
- 시스템 재시작


### D2-i. `schema.json`

> 📁저장위치: 왠만하면 `%USERPROFILE%\.oh-my-posh` 폴더에 위치해 두도록

```json
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "alignment": "left",
      "segments": [
        {
          "type": "session",
          "style": "diamond",
          "background": "#6272a4",
          "foreground": "#ffffff",
          "leading_diamond": "\ue0b6",    
          "template": "{{ .UserName }} "
        }, {
          "type": "path",
          "style": "powerline",
          "background": "#bd93f9",
          "foreground": "#ffffff",
          "powerline_symbol": "\ue0b0",
          "properties": {
            "style": "folder"
          },
          "template": " {{ .Path }} "
        }, {
          "type": "git",
          "style": "powerline",
          "powerline_symbol": "\ue0b0",
          "foreground": "#ffffff",
          "background": "#ffb86c",
          "properties": {
            "branch_icon": "",
            "fetch_stash_count": true,
            "fetch_status": false,
            "fetch_upstream_icon": true
          },
          "template": " \u279c ({{ .UpstreamIcon }}{{ .HEAD }}{{ if gt .StashCount 0 }} \uf692 {{ .StashCount }}{{ end }}) "
        }, {
          "type": "node",
          "style": "powerline",
          "background": "#8be9fd",
          "foreground": "#ffffff",
          "powerline_symbol": "\ue0b0",
          "template": " \ue718 {{ if .PackageManagerIcon }}{{ .PackageManagerIcon }} {{ end }}{{ .Full }} "
        }, {
          "type": "time",
          "style": "diamond",
          "background": "#ff79c6",
          "foreground": "#ffffff",
          "properties": {
            "time_format": "15:04"
          },
          "template": " \u2665 {{ .CurrentDate | date .Format }} ",
          "trailing_diamond": "\ue0b0"
        }
      ],
      "type": "prompt"
    }
  ],
  "final_space": true,
  "version": 2
}
```

### D2-ii. `Microsoft.PowerShell_profile.ps1`

`$profile` 파일 내용

```powershell
# Commands
Set-Alias sublime sublime_text
function alias()
{
    notepad $profile
}

# ADB 및 안드로이드 관련
function scrcpyDefault()
{
    scrcpy -m 1024 --always-on-top
}
function scrcpyRec() 
{
    scrcpy -m 1024 --always-on-top --show-touches
}
function killTestbed() 
{
    adb shell am force-stop kr.go.mobile.testbed.iff
}

# 개발환경 구성
function openWspHomeAndroidWeb1()
{
    code $env:WspHomeAndroidWeb1
}
function openWspHomeAndroidWeb2() 
{
    code $env:WspHomeAndroidWeb2
}

$env:PATH += ";$env:UserProfile\scoop\apps\oh-my-posh\current\bin"
oh-my-posh --init --shell pwsh --config "$env:UserProfile\.oh-my-posh\schema.json" | Invoke-Expression
Import-Module Terminal-Icons
neofetch
```

<TagLinks />