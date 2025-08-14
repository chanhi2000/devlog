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
head:
  - - meta:
    - property: og:title
      content: Windows > Environment Setup
    - property: og:description
      content: Environment Setup
    - property: og:url
      content: https://chanhi2000.github.io/devops/win/env-setup.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A. 기본설정

### A1. `regedit` 설정

> 윈도우 작업표시줄 검색창이나 <kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>(실행) 열어서 `cmd`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

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

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `gpedit.msc`를 실행합니다.

- .<VPIcon icon="iconfont icon-select"/>`[컴퓨터 구성]` -> `[관리 템플릿]` -> `[윈도 구성요소]` -> `[데이터 수집 및 preview 빌드]` -> `[원격 분석 허용 클릭]` -> `[사용 안함]` 설정

### A3. `services.msc` 설정

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `services.msc`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

- .<VPIcon icon="iconfont icon-select"/>`[Connected User Experiences and Telemetry]` 시작유형 사용안함

---

## B. Winget

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `powershell`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

### B1. Configure

Copy and Paste the following to the Powershell Prompt

::: tabs

@tab:active <VPIcon icon="iconfont icon-powershell"/>powershell

```powershell
winget install -e --id TableClothProject.TableCloth;
get-appxpackage *feedback* | remove-appxpackage;
```

@tab <VPIcon icon="fas fa-gears"/>cmd

```batch
winget install -e --id TableClothProject.TableCloth
```

:::

---

## C. Chocolatey

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `powershell`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### C1. Configure

Copy and Paste the following to the Powershell Prompt

::: tabs

@tab:active <VPIcon icon="iconfont icon-powershell"/>powershell

```powershell
choco install -y everything everythingtoolbar exiftool notion openssl powertoys qdir `
    sharex speccy sublimemerge sublimetext4 vlc vscode flameshot `
    dbeaver googlechrome glazewm fiddler windirstat 7zip `
    procexp scrcpy fnm rancher-desktop temurin11 temurin11 `
    intellijidea-community revo-uninstaller glogg autoruns microsoft-windows-terminal `
    twinkle-tray warp wingetui wiztree rust nerd-fonts-jetbrainsmono wpd zebar
```

@tab <VPIcon icon="fas fa-gears"/>cmd

```batch
choco install -y everything everythingtoolbar exiftool notion openssl powertoys qdir ^
    sharex speccy sublimemerge sublimetext4 vlc vscode flameshot^
    dbeaver googlechrome glazewm fiddler windirstat 7zip ^
    procexp scrcpy fnm rancher-desktop temurin11 temurin11 ^
    intellijidea-community revo-uninstaller glogg autoruns microsoft-windows-terminal ^
    twinkle-tray warp wingetui wiztree rust nerd-fonts-jetbrainsmono wpd zebar
```

:::

---

## D. Scoop.sh

> 윈도우 작업표시줄 검색창이나 실행 (<kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>) 열어서 `powershell`를 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> 눌러 실행합니다.

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

@tab:active <VPIcon icon="iconfont icon-powershell"/>powershell

```powershell
scoop bucket add extras
scoop install 7zip cheat hyperfine fastfetch nu `
oh-my-posh terminal-icons tokei watchman git lazygit zoxide`
lazydocker
```

@tab <VPIcon icon="fas fa-gears"/>cmd

```batch
scoop install 7zip cheat hyperfine fastfetch nu ^
oh-my-posh terminal-icons tokei watchman git lazygit zoxide^
lazydocker
```

:::

---

## E. Alias 지정 관련

### E1. Prerequesite(s)

- `alias.cmd` 파일을 만들어 관련 Alias 지정

::: tip NOTE

[<VPIcon icon="iconfont icon-github"/>`chanhi2000/chan-alias`](https://github.com/chanhi2000/chan-alias) 참조

:::

### E2. Guide

- <kbd><VPIcon icon="fa-brands fa-windows"/></kbd> + <kbd>r</kbd> 누른 후 `regedit` 실행
- `HKEY_CURRENT_USER\Software\Microsoft\Command Processor` 경로로 이동
- 창에 마우스 우클릭 후, 메뉴에서 `새로만들기` > `문자열 값` 선택 후 아래 값 입력
  - Key: `AutoRun`
  - Value: `%USERPROFILE%\alias.cmd`

### E3. <VPIcon icon="fas fa-gears"/>`alias.cmd`

```batch :collapsed-liens title="%UserProfile%\alias.cmd"
@echo off
::
:: 사용방법
::
:: - Win+R 입력 후 regedit실행
:: - 레지스트리에서 \HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor경로 이동
:: - 키 생성 (문자열)
::   - 이름: AutoRun
::   - 값: alias.cmd를 저장한 절대경로 (이 경로가 PATH_ALIAS_HOME값과 같아야 함)
::
:: REG ADD "HKCU\SOFTWARE\Microsoft\Command Processor" /v AutoRun /t REG_SZ /d D:\alias.cmd
::

:: 사용자 설정 경로 (필수)
SET PATH_ALIAS_HOME=%USERPROFILE%
SET ALIAS_FNAME=alias.cmd

SET PATH_PUB=C:\Users\Public\Documents
SET PATH_DEV=C:\development
SET PATH_DEV_ITITCLOUD=%PATH_DEV%\ititcloud
SET PATH_DEV_RUTIL_VM=%PATH_DEV_ITITCLOUD%\rutil-vm
SET DOCKER_REGISTRY_HOME=ititinfo.synology.me:50951/ititcloud
SET DOCKER_TAG_RUTIL_VM=rutil-vm
SET DOCKER_TAG_RUTIL_VM_API=rutil-vm-api
SET DOCKER_TAG_RUTIL_VM_WSPROXY=rutil-vm-wsproxy
SET DOCKER_TAG_RUVIL_VM_API_VERSION=0.3.8
SET DOCKER_TAG_RUTIL_VM_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
SET DOCKER_TAG_RUTIL_VM_API_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
SET DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
:: alias 사용법 설명
ECHO.
ECHO.
ECHO ===================================================
ECHO                ENVIRONMENT VARIABLES
ECHO ===================================================
ECHO.
ECHO. [PATH_ALIAS_HOME]: %PATH_ALIAS_HOME%
ECHO. [PATH_DEV]: %PATH_DEV%
ECHO. [DOCKER_TAG_RUTIL_VM]: %DOCKER_TAG_RUTIL_VM%
ECHO. [DOCKER_TAG_RUTIL_VM_API_CURRENT]: %DOCKER_TAG_RUTIL_VM_API_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT]: %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT%
ECHO.
ECHO ===================================================
ECHO                      Aliases
ECHO ===================================================
ECHO.
ECHO [cdd] - go to development directory
ECHO [l] - list file(s) in the working directory
ECHO [ls] - list file(s) in the working directory (simple)
ECHO [rm] - delete file(s)
ECHO [pwd] - print working directory
ECHO [clear] - clear console screen
ECHO [open] - open directory in Windows Explorer
ECHO.
ECHO [gv] - git --version
ECHO [gs] - git status
ECHO [gss] - git status --short
ECHO [ga] - git add ...
ECHO [gc] - git commit  ...
ECHO [gb] - git branch -vv ...
ECHO [gbn] - git checkout -b ...
ECHO [gco] - git checkout ...
ECHO [gm] - git merge ...
ECHO [gf] - git fetch  ...
ECHO [glg] - git log  ...
ECHO [gt] - git tag ...
ECHO [gp] - git push  ...
ECHO [gl] - git pull  ...
ECHO. 
ECHO [cddc] - change directory to `%PATH_DEV%\chanhi200` ....
ECHO [cddi] - change directory to `%PATH_DEV%\ititcloud`...
ECHO.
ECHO [lg] - lazygit
ECHO [scrcpyDefault] - run scrcpy with default settings
ECHO [scrcpyRec] - run scrcpy showing touches
ECHO [killTestbed] - kill testbed agent using adb
ECHO.
ECHO [dl] - docker logs -f ...
ECHO [di] - docker images ...
ECHO [dx] - docker exec -it ...
ECHO [drmi] - docker rmi ...
ECHO [buildDk] - build rutil-vm-api
ECHO [saveDk] - save rutil-vm-api
ECHO.
ECHO [alias] - alias configure
ECHO.


:: Commands
@DOSKEY cdp=CD %PATH_PUB%
@DOSKEY cdd=CD %PATH_DEV%
@DOSKEY l=DIR /O $*
@DOSKEY ls=DIR /B $*
@DOSKEY rm=DEL /S $*
@DOSKEY pwd=ECHO %%cd%%
@DOSKEY clear=CLS
@DOSKEY open=EXPLORER $*

:: git
@DOSKEY gv=git --version $*
@DOSKEY gs=git status $*
@DOSKEY gss=git status --short $*
@DOSKEY ga=git add $*
@DOSKEY gc=git commit $*
@DOSKEY gb=git branch -vv $*
@DOSKEY gbn=git checkout -b $* 
@DOSKEY gco=git checkout $*
@DOSKEY gm=git merge $*
@DOSKEY gf=git fetch $*
@DOSKEY glg=git log --abbrev-commit --graph --pretty=format:"%%Cred%%h%%Creset %%C(yellow)%%d%%Crest %%s %%Cgreen(%%cr) %%C(bold blue) %%an %%Creset" $*
@DOSKEY gt=git tag $*
@DOSKEY gp=git push $*
@DOSKEY gl=git pull $*


:: 개발환경 구성
:: @DOSKEY cddc=CD %PATH_DEV%\chanhi2000 && EXPLORER . ^&^& $*
:: @DOSKEY cddi=CD %PATH_DEV%\ititcloud && EXPLORER . ^&^& $*
@DOSKEY cddc=CD %PATH_DEV%\chanhi2000
@DOSKEY cddi=CD %PATH_DEV_ITITCLOUD%
@DOSKEY lg=lazygit

@DOSKEY m3u8Get=ffmpeg -protocol_whitelist https,tls,tcp -allowed_extensions

:: ADB 및 안드로이드 관련
@DOSKEY scrcpyDefault=scrcpy -m 1024 --always-on-top
@DOSKEY scrcpyRec=scrcpy -m 1024 --always-on-top --show-touches
@DOSKEY KillTestbed=adb shell am force-stop kr.go.mobile.testbed.iff

:: RutilVM 프로젝트 관련
@DOSKEY dp=docker ps -a $*
@DOSKEY dl=docker logs -f $*
@DOSKEY di=docker images $*
@DOSKEY dx=docker exec -it $*
@DOSKEY drmi=docker rmi $*

@DOSKEY drmib=docker rmi %DOCKER_TAG_RUTIL_VM_API_CURRENT% $*
@DOSKEY buildDkb=docker build -t %DOCKER_TAG_RUTIL_VM_API_CURRENT% %PATH_DEV_RUTIL_VM%\back
@DOSKEY tagDkb=docker tag %DOCKER_TAG_RUTIL_VM_API_CURRENT% %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_API_VERSION% 
@DOSKEY toLatestDkb=docker tag %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_API_VERSION% %DOCKER_TAG_RUTIL_VM_API%:latest
@DOSKEY saveDkb=docker save -o api.tar %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
@DOSKEY saveDkbl=docker save -o api-latest.tar %DOCKER_TAG_RUTIL_VM_API%:latest
@DOSKEY saveLatestDkb=docker save -o api.tar %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_API_VERSION%

@DOSKEY drmif=docker rmi %DOCKER_TAG_RUTIL_VM_CURRENT% $*
@DOSKEY buildDkf=docker build -t %DOCKER_TAG_RUTIL_VM_CURRENT% %PATH_DEV_RUTIL_VM%\front
@DOSKEY tagDkf=docker tag %DOCKER_TAG_RUTIL_VM_CURRENT% %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
@DOSKEY toLatestDkf=docker tag %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_API_VERSION% %DOCKER_TAG_RUTIL_VM%:latest
@DOSKEY saveDkf=docker save -o web.tar %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
@DOSKEY saveDkfl=docker save -o web-latest.tar %DOCKER_TAG_RUTIL_VM%:latest
@DOSKEY saveLatestDkf=docker save -o web.tar %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_API_VERSION%

@DOSKEY drmiw=docker rmi %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT% $*
@DOSKEY buildDkw=docker build -t %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT% %PATH_DEV_RUTIL_VM%\wsproxy
@DOSKEY tagDkw=docker tag %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT% %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
@DOSKEY toLatestDkw=docker tag %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_API_VERSION% %DOCKER_TAG_RUTIL_VM_WSPROXY%:latest
@DOSKEY saveDkw=docker save -o wsproxy.tar %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_API_VERSION%
@DOSKEY saveDkwl=docker save -o wsproxy-latest.tar %DOCKER_TAG_RUTIL_VM_WSPROXY%:latest
@DOSKEY saveLatestDkw=docker save -o wsproxy.tar %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_API_VERSION%

@DOSKEY alias=subl %PATH_ALIAS_HOME%\%ALIAS_FNAME%
```

### E4. <VPIcon icon="iconfont icon-powershell"/>`Microsoft.PowerShell_profile.ps1`

> `$profile` 파일 내용

```powershell :collapsed-lines title="%UserProfile%\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"
<#
.SYNOPSIS
    Chan Powershell Profile
.DESCRIPTION
    Aliases 및 중요 파일경로 관리
.LINK
    https://github.com/chanhi2000/chan-alias
.NOTES
    Author: chanhi2000 | License: CC0
#>

# 사용자 설정 경로
$env:PATH_ALAIS_HOME = $profile

$env:PATH_PUB = "C:\Users\Public\Documents"
$env:PATH_DEV = "C:\development"
$env:PATH_DEV_ITITCLOUD = "$env:PATH_DEV/ititcloud"
$env:PATH_DEV_RUTIL_VM = "$env:PATH_DEV_ITITCLOUD/rutil-vm"
$env:DOCKER_REGISTRY_HOME = "ititinfo.synology.me:50951/ititcloud"
$env:DOCKER_TAG_RUTIL_VM = "rutil-vm"
$env:DOCKER_TAG_RUTIL_VM_API = "rutil-vm-api"
$env:DOCKER_TAG_RUTIL_VM_WSPROXY = "rutil-vm-wsproxy"
$env:DOCKER_TAG_RUVIL_VM_API_VERSION = "0.3.8"
$env:DOCKER_TAG_RUTIL_VM_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM}:${env:DOCKER_TAG_RUVIL_VM_API_VERSION}"
$env:DOCKER_TAG_RUTIL_VM_API_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_API}:${env:DOCKER_TAG_RUVIL_VM_API_VERSION}"
$env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_WSPROXY}:${env:DOCKER_TAG_RUVIL_VM_API_VERSION}"

$env:GIT_LOG_FORMAT_DEFAULT = "%Cred%h%Creset %C(yellow)%d%Crest %s %Cgreen(%cr) %C(bold blue) %an %Creset"

Write-Host @"
===================================================
               ENVIRONMENT VARIABLES
===================================================

[PATH_ALAIS_HOME]: $profile
[PATH_DEV]: $env:PATH_DEV
[DOCKER_TAG_RUTIL_VM_API]: $env:DOCKER_TAG_RUTIL_VM_API
[DOCKER_TAG_RUTIL_VM_API_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_API_CURRENT
[DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT


===================================================
                     Aliases
=================================================== 

[cdd] - go to development directory
[open] - open directory in Windows Explorer

[gv] - git --verion
[gs] - git status
[gss] - git status --short
[ga] - git add ...
[gc] - git commit  ...
[gb] - git branch -vv ...
[gbn] - git checkout -b ...
[gco] - git checkout ...
[gm] - git merge ...
[gf] - git fetch  ...
[glg] - git log  ...
[gp] - git push  ...
[gl] - git pull  ...

[cddc] - change directory to $env:PATH_DEV\chanhi200 ....
[cddi] - change directory to $env:PATH_DEV\ititcloud ...

[lg] - lazygit
[m3u8Get <SOURCE> <OUTPUT>] - convert m3u8 to media output (*.avi, *.mp4, ...)

[chcl] - choco list
[chci] - choco install -y <PACKAGE_NAME>
[chcu] - choco upgrade -y <PACKAGE_NAME>

[scl] - scoop list
[sci] - scoop install -y <PACKAGE_NAME>
[scu] - scoop update <PACKAGE_NAME>

[scrcpyDefault] - run scrcpy with default settings
[scrcpyRec] - run scrcpy showing touches
[killTestbed] - kill testbed agent using adb

[dp] - docker ps -a ... 
[dl] - docker logs -f ...
[di] - docker images ...
[dx] - docker exec -it <CONTAINER> <EXECUTABLE>
[drmi] - docker rmi ...
[dx] - docker exec -it ...
[buildDkb] - build rutil-vm-api
[saveDkb] - save rutil-vm-api ...
[buildDkf] - build rutil-vm
[saveDkf] - save rutil-vm ...

[alias] - alias configure
"@

# Dracula readline configuration. Requires version 2.0, if you have 1.2 convert to `Set-PSReadlineOption -TokenType`
Set-PSReadlineOption -Color @{
    "Command" = [ConsoleColor]::Green
    "Parameter" = [ConsoleColor]::Gray
    "Operator" = [ConsoleColor]::Magenta
    "Variable" = [ConsoleColor]::White
    "String" = [ConsoleColor]::Yellow
    "Number" = [ConsoleColor]::Blue
    "Type" = [ConsoleColor]::Cyan
    "Comment" = [ConsoleColor]::DarkCyan
}
# Dracula Prompt Configuration
Import-Module posh-git
$GitPromptSettings.DefaultPromptPrefix.Text = "$([char]0x2192) " # arrow unicode symbol
$GitPromptSettings.DefaultPromptPrefix.ForegroundColor = [ConsoleColor]::Green
$GitPromptSettings.DefaultPromptPath.ForegroundColor =[ConsoleColor]::Cyan
$GitPromptSettings.DefaultPromptSuffix.Text = "$([char]0x203A) " # chevron unicode symbol
$GitPromptSettings.DefaultPromptSuffix.ForegroundColor = [ConsoleColor]::Magenta
# Dracula Git Status Configuration
$GitPromptSettings.BeforeStatus.ForegroundColor = [ConsoleColor]::Blue
$GitPromptSettings.BranchColor.ForegroundColor = [ConsoleColor]::Blue
$GitPromptSettings.AfterStatus.ForegroundColor = [ConsoleColor]::Blue


# git
function gv() { git --version }
function g()
{
    $Null = (git --version)
    if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }
}
function gs() { git status }
function gss() { git status --short }
function ga() 
{ 
    param([string] $target2Add="*")
    git add $target2Add
}
function gc() 
{ 
    param([string] $flags)
    git commit $flags
}
function gb() { git branch -vv }
function gbn() {
    param(
        [string] $targetBranch="main"
    )
    git checkout -b $targetBranch
}
function gco() {
    param(
        [string] $targetBranch="main"
    )
    git checkout $targetBranch
}
function gm() {
    param([string] $targetBranch="main")
    git merge $targetBranch
}

function gf()
{ 
    param([string] $targetRepo="origin")
    git fetch $targetRepo
}
function glg() 
{ 
    git log --abbrev-commit --graph --pretty=format:$env:GIT_LOG_FORMAT_DEFAULT
}
function gp() 
{ 
    param(
        [string] $targetRepo="origin", 
        [string] $targetBranch="main"
    )
    git push $targetRepo $targetBranch
}
function gl() 
{ 
     param(
        [string] $targetRepo="origin", 
        [string] $targetBranch="main"
    )
    git pull $targetRepo $targetBranch
}


# 개발환경 구성
function cdp() { cd $env:PATH_PUB }
function cdd() { cd $env:PATH_DEV }
function open() { 
    param([string] $location=".")
    explorer $param
}
function cddc() { cd "$env:PATH_DEV\chanhi2000"; }
function cddi() { cd "$env:PATH_DEV_ITITCLOUD"; }
function lg() { lazygit }

function m3u8Get() {
    param(
        [string] $source=".",
        [string] $output="."
    )
    ffmpeg -protocol_whitelist https,tls,tcp -allowed_extensions ALL -i $source -bsf:a aac_adtstoasc -c copy $output
}
#
# choco 관련 aliases
#
function chcl() { choco list }
function chci() { 
    param(
        [string] $p=""
    )
    choco install -y $p
}
function chcu {
    param(
        [string] $p=""
    )
    choco upgrade -y $p
}
#
# scoop 관련 aliases
#
function scl() { scoop list }
function sci() {
    param(
        [string] $p=""
    )
    scoop install -y $p
}
function scu {
    param(
        [string] $p=""
    )
    scoop update $p
}
# ADB 및 안드로이드 관련
function scrcpyDefault() { scrcpy -m 1024 --always-on-top }
function scrcpyRec() { scrcpy -m 1024 --always-on-top --show-touches }
function killTestbed() { adb shell am force-stop kr.go.mobile.testbed.iff }

# RutilVM 프로젝트 관련
function dp() { docker ps -a }
function di() { docker images }
function dl() { 
    param(
        [string] $c=""
    )
    docker logs -f $c
}
function dx() { 
    param(
        [string] $c="",
        [string] $x=""
    )
    docker exec -it $c $x
}
function drmi() { 
    param(
        [string] $image=""
    )
    docker rmi $image
}
function drmib { docker rmi $env:DOCKER_TAG_RUTIL_VM_API_CURRENT }
function buildDkb { 
    docker build -t $env:DOCKER_TAG_RUTIL_VM_API_CURRENT $env:PATH_DEV_RUTIL_VM\back;
    docker tag $env:DOCKER_TAG_RUTIL_VM_API_CURRENT ${env:DOCKER_TAG_RUTIL_VM_API}:${env:DOCKER_TAG_RUVIL_VM_API_VERSION};
}
function saveDkb { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_API_CURRENT }
function saveLatestDkb { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_API_CURRENT }

function drmif { docker rmi $env:DOCKER_TAG_RUTIL_VM_CURRENT }
function buildDkf { 
    docker build -t $env:DOCKER_TAG_RUTIL_VM_CURRENT $env:PATH_DEV_RUTIL_VM\front;
    docker tag $env:DOCKER_TAG_RUTIL_VM_CURRENT ${env:DOCKER_TAG_RUTIL_VM}:${env:DOCKER_TAG_RUVIL_VM_API_VERSION};
}
function saveDkf { docker save -o web.tar $env:DOCKER_TAG_RUTIL_VM_CURRENT }
function saveLatestDkf { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_CURRENT }

function drmiw { docker rmi $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT }
function buildDkw {
    docker build -t $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT $env:PATH_DEV_RUTIL_VM\wsproxy;
    docker tag $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT ${env:DOCKER_TAG_RUTIL_VM_WSPROXY}:${env:DOCKER_TAG_RUVIL_VM_API_VERSION};
}
function saveDkw { docker save -o wsproxy.tar $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT }
function saveLatestDkw { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT }

function alias() { subl $profile }

# 후처리
$env:PATH += ";$env:UserProfile\scoop\apps\oh-my-posh\current\bin"
oh-my-posh --init --shell pwsh --config "$env:UserProfile\scoop\apps\oh-my-posh\current\themes\agnoster.omp.json" | Invoke-Expression
fnm env --use-on-cd | Out-String | Invoke-Expression
Import-Module Terminal-Icons
fastfetch
```

---

### F. oh-my-posh's <VPIcon icon="iconfont icon-json"/>`schema.json`

> <VPIcon icon="fas fa-folder-open"/>저장위치: 왠만하면 `%USERPROFILE%\.oh-my-posh` 폴더에 위치해 두도록

```json :collapsed-lines title="schema.json"
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
  name="builtbybel/CrapFixer: Cr*ap Fixer"
  desc="Cr*ap Fixer. Contribute to builtbybel/CrapFixer development by creating an account on GitHub."
  url="https://github.com/builtbybel/CrapFixer/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://repository-images.githubusercontent.com/972589719/32bd1dd0-758b-46a0-9c96-758a305fe368"/>

<SiteInfo
  name="Cyber Scarecrow"
  desc="An app for scaring away malware"
  url="https://www.cyberscarecrow.com/"
  logo="https://www.cyberscarecrow.com/favicon.ico"
  preview="https://www.cyberscarecrow.com/_next/image?url=%2Fscarecrow_128.ico&w=96&q=75"/>

---

<TagLinks />