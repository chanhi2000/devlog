---
lang: ko-KR
title: 👓Windows > Environment Setup
description: 👓Windows > Environment Setup
  - bat
  - pwsh
  - oh-my-pwsh
  - chocolatey
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## A. 설정


---
## B. Chocolatey

### B1. 🧰Prerequesite(s)

::: warning 📝WARNING
First, ensure that you are using an __administrative__ shell
:::

- `pwsh`
    - <kbd>win</kbd> + <kbd>r</kbd> 입력
    - 창에 `powershell`입력 후 <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd> 눌러 실행 


### B2. 👨‍🏫Guide
Copy and Paste the following to the Powershell Prompt 

```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### B3. 🛠️Configure

Copy and Paste the following to the Powershell Prompt

```ps1
choco install -y everything everythingtoolbar notion openssl powertoys qdir `
    sharex speccy sublimemerge sublimetext4 vlc vscode `
    dbeaver googlechrome fiddler windirstat 7zip `
    procexp scrcpy nvm docker-desktop temurin11 temurin8 `
    intellijidea revo-uninstaller glogg autoruns
```

or Windows Cmd

```bat
choco install -y everything everythingtoolbar notion openssl powertoys qdir ^
    sharex speccy sublimemerge sublimetext4 vlc vscode ^
    dbeaver googlechrome fiddler windirstat 7zip ^
    procexp scrcpy nvm docker-desktop temurin11 temurin8 ^
    intellijidea revo-uninstaller glogg autoruns
```


---
## C. Scoop.sh

### C1. 🧰Prerequesite(s)

::: warning 📝WARNING
First, ensure that you are using an __administrative__ shell
:::

- `pwsh` (`v5.1` or later)
    - <kbd>win</kbd> + <kbd>r</kbd> 입력
    - 창에 `powershell`입력 후 <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd> 눌러 실행 


### C2. 👨‍🏫Guide
Copy and Paste the following to the Powershell Prompt 

```ps1
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

### C3. 🛠️Configure

Copy and Paste the following to the Powershell Prompt

```ps1
scoop install 7zip neofetch oh-my-posh terminal-icons watchman `
    git
```

or Windows Cmd

```bat
scoop install 7zip neofetch oh-my-posh terminal-icons watchman ^
    git 
```


---
## Alias 지정 관련

### 🧰Prerequesite(s)
- `alias.cmd`파일을 만들어 관련 Alias 지정

::: tip NOTE
[🌐chanhi2000/chan-alias](https://github.com/chanhi2000/chan-alias) 참조
:::

### 👨‍🏫Guide

- <kbd>win</kbd> + <kbd>r</kbd> 누른 후 `regedit` 실행
- `HKEY_CURRENT_USER\Software\Microsoft\Command Processor` 경로로 이동
- 창에 마우스 우클릭 후, 메뉴에서 `새로만들기` > `문자열 값` 선택 후 아래 값 입력
    - Key: `AutoRun`
    - Value: `%USERPROFILE%\alias.cmd`
- 시스템 재시작