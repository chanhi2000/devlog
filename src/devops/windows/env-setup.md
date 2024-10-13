---
lang: ko-KR
title: Environment Setup
description: Windows > Environment Setup
icon: fas fa-toolbox
category:
  - Microsoft
  - Windows
  - Environment Setup
tag: 
  - bat
  - pwsh
  - win-run
  - oh-my-pwsh
  - chocolatey
  - windows-terminal
  - cmd
  - powershell
  - ps1
  - scoop
  - pacman
  - jdk
  - jdk7
  - temurin
  - temurin11
  - docker
  - fastfetch
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 기본설정

### A1. `regedit` 설정

> 윈도우 작업표시줄 검색창이나 <kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>(실행) 열어서 `cmd`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

```batch
:: '이 앱 때문에 종료할 수 없습니다' 비활성화
REG add "HKEY_CURRENT_USER\Control Panel\Desktop" /v "AutoEndTasks" /d "1" /f 
:: IE에서 개발자 도구 메뉴가 활성화
REG add "HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\IEDevTools" /v "Disabled" /d "0" /f 
:: SmartScreen 비활성화
REG add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System" /v "EnableSmartScreen" /d "0"
:: Telemetry 비활성화
REG add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection" /v "AllowTelemetry" /d "0"
:: cmd에 사용할 폰트를 추가
REG add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont" /v "000" /d "JetBrainsMono Nerd Font Mono" /f
:: 넘버락 켜기
:: REG add "HKEY_USERS\.DEFAULT\Control Panel\Keyboard" /v "InitialKeyboardIndicators" /d "2147483650" /f
:: 
REG add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters" /v "BasicAuthLevel" /d "2" /f
::
REG add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters" /v "FileSizeLimitInBytes" /d "ffffffff" /f
```

### A2. `gedit.msc` 설정

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `gpedit.msc`를 실행합니다.

- .<FontIcon icon="iconfont icon-select"/>`[컴퓨터 구성]` -> `[관리 템플릿]` -> `[윈도 구성요소]` -> `[데이터 수집 및 preview 빌드]` -> `[원격 분석 허용 클릭]` -> `[사용 안함]` 설정

### A3. `services.msc` 설정

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `services.msc`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

- .<FontIcon icon="iconfont icon-select"/>`[Connected User Experiences and Telemetry]` 시작유형 사용안함

---

## B. Winget

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `powershell`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

### B1. Configure

Copy and Paste the following to the Powershell Prompt

::: tabs

@tab:active <FontIcon icon="iconfont icon-powershell"/>powershell

```powershell
winget install -e --id TableClothProject.TableCloth;
get-appxpackage *feedback* | remove-appxpackage;
```

@tab <FontIcon icon="fas fa-gears"/>cmd

```batch
winget install -e --id TableClothProject.TableCloth
```

:::

---

## C. Chocolatey

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `powershell`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### C1. Configure

Copy and Paste the following to the Powershell Prompt

::: tabs

@tab:active <FontIcon icon="iconfont icon-powershell"/>powershell

```powershell
choco install -y everything everythingtoolbar exiftool notion openssl powertoys qdir `
    sharex speccy sublimemerge sublimetext4 vlc vscode flameshot `
    dbeaver googlechrome fiddler windirstat 7zip `
    procexp scrcpy fnm rancher-desktop temurin11 temurin11 `
    intellijidea revo-uninstaller glogg autoruns microsoft-windows-terminal `
    twinkle-tray wingetui wiztree rust
```

@tab <FontIcon icon="fas fa-gears"/>cmd

```batch
choco install -y everything everythingtoolbar exiftool notion openssl powertoys qdir ^
    sharex speccy sublimemerge sublimetext4 vlc vscode flameshot^
    dbeaver googlechrome fiddler windirstat 7zip ^
    procexp scrcpy fnm rancher-desktop temurin11 temurin11 ^
    intellijidea revo-uninstaller glogg autoruns microsoft-windows-terminal ^
    twinkle-tray wingetui wiztree rust
```

:::

---

## D. Scoop.sh

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `powershell`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

### D1. Configure

Copy and Paste the following to the Powershell Prompt

::: tabs

@tab:active <FontIcon icon="iconfont icon-powershell"/>powershell

```powershell
scoop install 7zip cheat hyperfine fastfetch nu`
  oh-my-posh terminal-icons tokei watchman git
```

@tab <FontIcon icon="fas fa-gears"/>cmd

```batch
scoop install 7zip cheat hyperfine fastfetch nu^
  oh-my-posh terminal-icons tokei watchman git
```

:::

---

## E. Alias 지정 관련

### E1. Prerequesite(s)

- `alias.cmd` 파일을 만들어 관련 Alias 지정

::: tip NOTE

[<FontIcon icon="iconfont icon-github"/>`chanhi2000/chan-alias`](https://github.com/chanhi2000/chan-alias) 참조

:::

### E2. Guide

- <kbd><FontIcon icon="fa-brands fa-windows"/></kbd> + <kbd>r</kbd> 누른 후 `regedit` 실행
- `HKEY_CURRENT_USER\Software\Microsoft\Command Processor` 경로로 이동
- 창에 마우스 우클릭 후, 메뉴에서 `새로만들기` > `문자열 값` 선택 후 아래 값 입력
  - Key: `AutoRun`
  - Value: `%USERPROFILE%\alias.cmd`

### E2-i. <FontIcon icon="iconfont icon-json"/>`schema.json`

> <FontIcon icon="fas fa-folder-open"/>저장위치: 왠만하면 `%USERPROFILE%\.oh-my-posh` 폴더에 위치해 두도록

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

### E2-ii. `Microsoft.PowerShell_profile.ps1`

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
$env:PATH += ";$env:UserProfile\scoop\shims"
oh-my-posh init pwsh --config "$env:UserProfile\.oh-my-posh\schema.json" | Invoke-Expression
Import-Module Terminal-Icons
fastfetch
```

---

## 기타 툴

```component VPCard
{
  "title": "윈도우클리너",
  "desc": "기본 프로세서만 남겨두고 깨끗이 종료해드립니다.",
  "link": "https://kcleaner.kilho.net/",
  "logo": "https://kilho.net/favicon.png",
  "background": "rgba(0,136,204,0.2)"
}
```

<SiteInfo
  name="메모리클리너"
  desc="메모리 정리를 클릭 한번에 할 수 있습니다."
  url="https://memorycleaner.kilho.net/"
  logo="https://kilho.net/favicon.png"
  preview="https://memorycleaner.kilho.net/memorycleaner.png?v1.0.5.0"/>

<SiteInfo
  name="시크릿DNS"
  desc="DNS 암호화 및 SNI 파편화를 합니다."
  url="https://secretdns.kilho.net/"
  logo="https://kilho.net/favicon.png"
  preview="https://secretdns.kilho.net/SecretDNS.png"/>

<SiteInfo
  name="부스트핑"
  desc="온라인 게임의 반응 속도를 향상시킵니다."
  url="https://boostping.kilho.net/"
  logo="https://kilho.net/favicon.png"
  preview="https://boostping.kilho.net/boostping.png"/>

<SiteInfo
  name="이미지컨버터"
  desc="이미지 포맷 변경을 클릭 한번에 할 수 있습니다."
  url="https://imageconverter.kilho.net/"
  logo="https://kilho.net/favicon.png"
  preview="https://imageconverter.kilho.net/imageconverter.png"/>

<SiteInfo
  name="오토클릭"
  desc="마우스를 자동으로 클릭합니다."
  url="https://autoclick.kilho.net/"
  logo="https://kilho.net/favicon.png"
  preview="https://autoclick.kilho.net/AutoClick.png"/>

<SiteInfo
  name="Cyber Scarecrow"
  desc="An app for scaring away malware"
  url="https://www.cyberscarecrow.com/"
  logo="https://www.cyberscarecrow.com/favicon.ico"
  preview="https://www.cyberscarecrow.com/_next/image?url=%2Fscarecrow_128.ico&w=96&q=75"/>

---

<TagLinks />