---
lang: ko-KR
title: Environment Setup
description: Windows > Environment Setup
icon: fas fa-toolbox
category:
  - DevOps
  - Microsoft
  - Windows
  - Environment Setup
tag: 
  - devops
  - ms
  - microsoft
  - win
  - win11
  - windows
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
winget install -e --id Debba.Tabularis;
winget install -e --id Microsoft.WindowsApp;
```

@tab <VPIcon icon="fas fa-gears"/>cmd

```batch
winget install -e --id TableClothProject.TableCloth;
winget install -e --id Debba.Tabularis;
winget install -e --id Microsoft.WindowsApp;
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
    procexp scrcpy fnm rancher-desktop temurin11 `
    intellijidea-community revo-uninstaller glogg autoruns microsoft-windows-terminal `
    twinkle-tray warp wingetui wiztree rust nerd-fonts-jetbrainsmono wpd zebar
```

@tab <VPIcon icon="fas fa-gears"/>cmd

```batch
choco install -y everything everythingtoolbar exiftool notion openssl powertoys qdir ^
    sharex speccy sublimemerge sublimetext4 vlc vscode flameshot ^
    dbeaver googlechrome glazewm fiddler windirstat 7zip ^
    procexp scrcpy fnm rancher-desktop temurin11 ^
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
scoop install 7zip cheat hyperfine fastfetch mise nu `
oh-my-posh terminal-icons tokei watchman git lazygit zoxide`
lazydocker
```

@tab <VPIcon icon="fas fa-gears"/>cmd

```batch
scoop install 7zip cheat hyperfine fastfetch mise nu ^
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
SET DOCKER_TAG_RUTIL_VM_NOTIFY=rutil-vm-notify
SET DOCKER_TAG_RUTIL_VM_WSPROXY=rutil-vm-wsproxy
SET DOCKER_TAG_RUTIL_VM_DOCS=rutil-vm-docs
SET DOCKER_TAG_RUTIL_VM_LANDING=rutil-vm-landing
SET DOCKER_TAG_RUTIL_VM_FILEREAD=rutil-vm-fileread
SET DOCKER_TAG_RUTIL_VM_INSTALL_ENC=rutil-vm-install-enc
SET DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH=rutil-vm-install-enc-sh
SET DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY=rutil-vm-install-enc-py
SET DOCKER_TAG_RUTIL_VM_PKG=rutil-vm-pkg
SET DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY=rutil-vm-ansible-deploy
SET DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO=rutil-vm-concept-demo
SET DOCKER_TAG_RUTIL_VM_GRAFANA_OSS=rutil-vm-grafana-oss
SET DOCKER_TAG_RUVIL_VM_VERSION=4.0.0
SET DOCKER_TAG_RUVIL_VM_BUILD_NO=39
SET DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION=9.2.10
SET DOCKER_TAG_RUTIL_VM_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_API_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_NOTIFY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_DOCS_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_DOCS%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_LANDING_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_LANDING%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_FILEREAD%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_PKG_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_PKG%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
SET DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT=%DOCKER_REGISTRY_HOME%/%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%:%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION%
SET INSTALL_ENC_FILES_2_EXPORT=version.txt;test.sh;rutilvm-engine-setup.sh

:: alias 사용법 설명
ECHO.
ECHO.
ECHO ===================================================
ECHO                ENVIRONMENT VARIABLES
ECHO ===================================================
ECHO.
ECHO. [PATH_ALIAS_HOME]: %PATH_ALIAS_HOME%
ECHO. [PATH_DEV]: %PATH_DEV%
ECHO. [DOCKER_TAG_RUTIL_VM]: %DOCKER_TAG_RUTIL_VM_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_API_CURRENT]: %DOCKER_TAG_RUTIL_VM_API_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT]: %DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT]: %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_DOCS_CURRENT]: %DOCKER_TAG_RUTIL_VM_DOCS_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_LANDING_CURRENT]: %DOCKER_TAG_RUTIL_VM_LANDING_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT]: %DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT]: %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT]: %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT]: %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_PKG_CURRENT]: %DOCKER_TAG_RUTIL_VM_PKG_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT]: %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT]: %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT%
ECHO. [DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT]: %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT%
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
ECHO [gchp] - git cherry-pick ...
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

IF NOT EXIST %PATH_DEV_RUTIL_VM%\install-enc\out MKDIR %PATH_DEV_RUTIL_VM%\install-enc\out
IF NOT EXIST %PATH_DEV_RUTIL_VM%\install-enc\out\sh MKDIR %PATH_DEV_RUTIL_VM%\install-enc\out\sh
IF NOT EXIST %PATH_DEV_RUTIL_VM%\install-enc\out\py MKDIR %PATH_DEV_RUTIL_VM%\install-enc\out\py

:: docker cp %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:/%%~a %PATH_DEV_RUTIL_VM%\install-enc\out\sh
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
@DOSKEY gchp=git cherry-pick $*
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
@DOSKEY cdr=CD %PATH_DEV_RUTIL_VM%
@DOSKEY lg=lazygit

@DOSKEY m3u8Get=ffmpeg -protocol_whitelist https,tls,tcp -allowed_extensions

:: ADB 및 안드로이드 관련
@DOSKEY scrcpyDefault=scrcpy -m 1024 --always-on-top
@DOSKEY scrcpyRec=scrcpy -m 1024 --always-on-top --show-touches
@DOSKEY KillTestbed=adb shell am force-stop kr.go.mobile.testbed.iff

@DOSKEY sftp10=sftp root@10.10.20.10:/opt/rutilvm
@DOSKEY sftp20=sftp root@10.10.20.20:/opt/rutilvm
@DOSKEY sftp60=sftp root@192.168.0.60:/opt/rutilvm
@DOSKEY up20=sftp    -b "%PATH_DEV_RUTIL_VM%\sftp-upload.txt" root@192.168.0.20:/opt/rutilvm
@DOSKEY up23=sftp    -b "%PATH_DEV_RUTIL_VM%\sftp-upload.txt" root@192.168.0.23:/opt/rutilvm
@DOSKEY up60=sftp    -b "%PATH_DEV_RUTIL_VM%\sftp-upload.txt" root@192.168.0.60:/opt/rutilvm
@DOSKEY upall20=sftp -b "%PATH_DEV_RUTIL_VM%\sftp-upload-all.txt" root@192.168.0.20:/opt/rutilvm
@DOSKEY upall23=sftp -b "%PATH_DEV_RUTIL_VM%\sftp-upload-all.txt" root@192.168.0.23:/opt/rutilvm
@DOSKEY upall60=sftp -b "%PATH_DEV_RUTIL_VM%\sftp-upload-all.txt" root@192.168.0.60:/opt/rutilvm

:: RutilVM 프로젝트 관련
@DOSKEY dp=docker ps -a $*
@DOSKEY dl=docker logs -f $*
@DOSKEY di=docker images $*
@DOSKEY dx=docker exec -it $*
@DOSKEY drm=docker rm -f $*
@DOSKEY drmi=docker rmi $*

@DOSKEY drmib=docker rmi %DOCKER_TAG_RUTIL_VM_API_CURRENT% $*
@DOSKEY buildDkb=docker build -t %DOCKER_TAG_RUTIL_VM_API_CURRENT% %PATH_DEV_RUTIL_VM%\back
@DOSKEY tagDkb=docker tag %DOCKER_TAG_RUTIL_VM_API_CURRENT% %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkb=docker tag %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_API%:latest
@DOSKEY saveDkb=docker save -o api.tar %DOCKER_TAG_RUTIL_VM_API%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkbl=docker save -o api-latest.tar %DOCKER_TAG_RUTIL_VM_API%:latest

@DOSKEY drmin=docker rmi %DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT% $*
@DOSKEY buildDkn=docker build -t %DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT% -f %PATH_DEV_RUTIL_VM%\back\Dockerfile-notify %PATH_DEV_RUTIL_VM%\back
@DOSKEY tagDkn=docker tag %DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT% %DOCKER_TAG_RUTIL_VM_NOTIFY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkn=docker tag %DOCKER_TAG_RUTIL_VM_NOTIFY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_NOTIFY%:latest
@DOSKEY saveDkn=docker save -o notify.tar %DOCKER_TAG_RUTIL_VM_NOTIFY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDknl=docker save -o notify-latest.tar %DOCKER_TAG_RUTIL_VM_NOTIFY%:latest

@DOSKEY drmif=docker rmi %DOCKER_TAG_RUTIL_VM_CURRENT% $*
@DOSKEY buildDkf=docker build -t %DOCKER_TAG_RUTIL_VM_CURRENT% %PATH_DEV_RUTIL_VM%\front
@DOSKEY tagDkf=docker tag %DOCKER_TAG_RUTIL_VM_CURRENT% %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkf=docker tag %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM%:latest
@DOSKEY saveDkf=docker save -o web.tar %DOCKER_TAG_RUTIL_VM%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkfl=docker save -o web-latest.tar %DOCKER_TAG_RUTIL_VM%:latest

@DOSKEY drmiw=docker rmi %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT% $*
@DOSKEY buildDkw=docker build -t %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT% %PATH_DEV_RUTIL_VM%\wsproxy
@DOSKEY tagDkw=docker tag %DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT% %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkw=docker tag %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_WSPROXY%:latest
@DOSKEY saveDkw=docker save -o wsproxy.tar %DOCKER_TAG_RUTIL_VM_WSPROXY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkwl=docker save -o wsproxy-latest.tar %DOCKER_TAG_RUTIL_VM_WSPROXY%:latest

@DOSKEY drmid=docker rmi %DOCKER_TAG_RUTIL_VM_DOCS_CURRENT% $*
@DOSKEY buildDkd=docker build -t %DOCKER_TAG_RUTIL_VM_DOCS_CURRENT% %PATH_DEV_RUTIL_VM%\docs
@DOSKEY tagDkd=docker tag %DOCKER_TAG_RUTIL_VM_DOCS_CURRENT% %DOCKER_TAG_RUTIL_VM_DOCS%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkd=docker tag %DOCKER_TAG_RUTIL_VM_DOCS%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_DOCS%:latest
@DOSKEY saveDkd=docker save -o docs.tar %DOCKER_TAG_RUTIL_VM_DOCS%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkdl=docker save -o docs-latest.tar %DOCKER_TAG_RUTIL_VM_DOCS%:latest

@DOSKEY drmil=docker rmi %DOCKER_TAG_RUTIL_VM_LANDING_CURRENT% $*
@DOSKEY buildDkl=docker build -t %DOCKER_TAG_RUTIL_VM_LANDING_CURRENT% %PATH_DEV_RUTIL_VM%\landing
@DOSKEY tagDkl=docker tag %DOCKER_TAG_RUTIL_VM_LANDING_CURRENT% %DOCKER_TAG_RUTIL_VM_LANDING%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkl=docker tag %DOCKER_TAG_RUTIL_VM_LANDING%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_LANDING%:latest
@DOSKEY saveDkl=docker save -o landing.tar %DOCKER_TAG_RUTIL_VM_LANDING%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkll=docker save -o landing-latest.tar %DOCKER_TAG_RUTIL_VM_LANDING%:latest

@DOSKEY drmir=docker rmi %DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT% $*
@DOSKEY buildDkr=docker build -t %DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT% %PATH_DEV_RUTIL_VM%\fileread
@DOSKEY tagDkr=docker tag %DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT% %DOCKER_TAG_RUTIL_VM_FILEREAD%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkr=docker tag %DOCKER_TAG_RUTIL_VM_FILEREAD%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_FILEREAD%:latest
@DOSKEY saveDkr=docker save -o fileread.tar %DOCKER_TAG_RUTIL_VM_FILEREAD%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkrl=docker save -o fileread-latest.tar %DOCKER_TAG_RUTIL_VM_FILEREAD%:latest

@DOSKEY drmiie=docker rmi %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT% $*
@DOSKEY buildDkie=docker build -t %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT% %PATH_DEV_RUTIL_VM%\install-enc
@DOSKEY createDkie=docker create --name %DOCKER_TAG_RUTIL_VM_INSTALL_ENC% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT%
@DOSKEY rmDkie=docker rm -f %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%
@DOSKEY exportDkie=docker cp %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:/out %PATH_DEV_RUTIL_VM%\install-enc
@DOSKEY tagDkie=docker tag %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkie=docker tag %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:latest
@DOSKEY saveDkie=docker save -o install-enc.tar %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkiel=docker save -o install-enc-latest.tar %DOCKER_TAG_RUTIL_VM_INSTALL_ENC%:latest

@DOSKEY drmiies=docker rmi %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT% $*
@DOSKEY buildDkies=docker build -t %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT% %PATH_DEV_RUTIL_VM%\install-enc\sh
@DOSKEY createDkies=docker create --name %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT%
@DOSKEY rmDkies=docker rm -f %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%
@DOSKEY exportDkies=docker cp %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:/out %PATH_DEV_RUTIL_VM%\install-enc
@DOSKEY tagDkies=docker tag %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkies=docker tag %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:latest
@DOSKEY saveDkies=docker save -o install-enc-sh.tar %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkiesl=docker save -o install-enc-sh-latest.tar %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH%:latest

@DOSKEY drmiiep=docker rmi %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT% $*
@DOSKEY buildDkiep=docker build -t %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT% %PATH_DEV_RUTIL_VM%\install-enc\py
@DOSKEY createDkiep=docker create --name %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT%
@DOSKEY rmDkiep=docker rm -f %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%
@DOSKEY exportDkiep=docker cp %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:/out %PATH_DEV_RUTIL_VM%\install-enc
@DOSKEY tagDkiep=docker tag %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkiep=docker tag %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:latest
@DOSKEY saveDkiep=docker save -o install-enc-py.tar %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkiepl=docker save -o install-enc-py-latest.tar %DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY%:latest

@DOSKEY drmip=docker rmi %DOCKER_TAG_RUTIL_VM_PKG_CURRENT% $*
@DOSKEY buildDkp=docker build -t %DOCKER_TAG_RUTIL_VM_PKG_CURRENT% %PATH_DEV_RUTIL_VM%\pkg
@DOSKEY runDkp=docker run -it --name %DOCKER_TAG_RUTIL_VM_PKG% --env-file %PATH_DEV_RUTIL_VM%\pkg\.env.production -v C:/_tmp/rutilvm-iso:/tmp:rw %DOCKER_TAG_RUTIL_VM_PKG%:latest
@DOSKEY rmDkp=docker rm -f %DOCKER_TAG_RUTIL_VM_PKG%
@DOSKEY tagDkp=docker tag %DOCKER_TAG_RUTIL_VM_PKG_CURRENT% %DOCKER_TAG_RUTIL_VM_PKG%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkp=docker tag %DOCKER_TAG_RUTIL_VM_PKG%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_PKG%:latest
@DOSKEY saveDkp=docker save -o pkg.tar %DOCKER_TAG_RUTIL_VM_PKG%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkpl=docker save -o pkg-latest.tar %DOCKER_TAG_RUTIL_VM_PKG%:latest

@DOSKEY drmiad=docker rmi %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT% $*
@DOSKEY buildDkad=docker build -t %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT% %PATH_DEV_RUTIL_VM%\ansible-deploy
@DOSKEY runDkad20=docker run --rm --name %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY% -e TAR_PATH="%PATH_DEV_RUTIL_VM%\ansible-deploy" -e REMOTE_HOST="192.168.0.20" -e REMOTE_USER="rutilvm" -v %PATH_DEV_RUTIL_VM%\wsproxy\engine_id_rsa20:/root/.ssh/id_rsa:ro -v %PATH_DEV_RUTIL_VM%\api-latest.tar:/tmp/api-latest.tar:ro -v %PATH_DEV_RUTIL_VM%\web-latest.tar:/tmp/web-latest.tar:ro %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT%
@DOSKEY runDkad60=docker run --rm --name %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY% -e TAR_PATH="%PATH_DEV_RUTIL_VM%\ansible-deploy" -e REMOTE_HOST="192.168.0.60" -e REMOTE_USER="rutilvm" -v %PATH_DEV_RUTIL_VM%\wsproxy\engine_id_rsa60:/root/.ssh/id_rsa:ro -v %PATH_DEV_RUTIL_VM%\api-latest.tar:/tmp/api-latest.tar:ro -v %PATH_DEV_RUTIL_VM%\web-latest.tar:/tmp/web-latest.tar:ro %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT%
@DOSKEY runDkad70=docker run --rm --name %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY% -e TAR_PATH="%PATH_DEV_RUTIL_VM%\ansible-deploy" -e REMOTE_HOST="192.168.0.70" -e REMOTE_USER="rutilvm" -v %PATH_DEV_RUTIL_VM%\wsproxy\engine_id_rsa70:/root/.ssh/id_rsa:ro -v %PATH_DEV_RUTIL_VM%\api-latest.tar:/tmp/api-latest.tar:ro -v %PATH_DEV_RUTIL_VM%\web-latest.tar:/tmp/web-latest.tar:ro %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT%
@DOSKEY runDkad90=docker run --rm --name %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY% -e TAR_PATH="%PATH_DEV_RUTIL_VM%\ansible-deploy" -e REMOTE_HOST="192.168.0.90" -e REMOTE_USER="rutilvm" -v %PATH_DEV_RUTIL_VM%\wsproxy\engine_id_rsa90:/root/.ssh/id_rsa:ro -v %PATH_DEV_RUTIL_VM%\api-latest.tar:/tmp/api-latest.tar:ro -v %PATH_DEV_RUTIL_VM%\web-latest.tar:/tmp/web-latest.tar:ro %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT%
@DOSKEY tagDkad=docker tag %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT% %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkad=docker tag %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY%:latest
@DOSKEY saveDkad=docker save -o ansible-deploy.tar %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkadl=docker save -o ansible-deploy-latest.tar %DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY%:latest

@DOSKEY drmicd=docker rmi %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT% $*
@DOSKEY buildDkcd=docker build -t %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT% %PATH_DEV_RUTIL_VM%\concept-demo
@DOSKEY tagDkcd=docker tag %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT% %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY toLatestDkcd=docker tag %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO% %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%:latest
@DOSKEY saveDkcd=docker save -o concept-demo.tar %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%:%DOCKER_TAG_RUVIL_VM_VERSION%-%DOCKER_TAG_RUVIL_VM_BUILD_NO%
@DOSKEY saveDkcdl=docker save -o concept-demo-latest.tar %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%:latest
@DOSKEY startDkcd=docker run -d -it --name %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO% -p 8080:8000 %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT%
@DOSKEY startDkcdd=docker run --rm --name %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO% -p 8080:8000 %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT%
@DOSKEY logDkcd=docker logs -500f %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO% 
@DOSKEY rmDkcd=docker rm -f %DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO%

@DOSKEY drmigo=docker rmi %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT% $*
@DOSKEY pullDkgo=docker pull grafana/grafana-oss:%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION%
@DOSKEY tagDkgo=docker grafana/grafana-oss:%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION% %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%:%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION% 
@DOSKEY toLatestDkgo=docker tag %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%:%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION% %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%:latest
@DOSKEY saveDkgo=docker save -o grafana.tar %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%:%DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION%
@DOSKEY saveDkgol=docker save -o grafana-latest.tar %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%:latest
@DOSKEY logDkgo=docker logs -500f %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS% 
@DOSKEY rmDkgo=docker rm -f %DOCKER_TAG_RUTIL_VM_GRAFANA_OSS%

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
$env:DOCKER_TAG_RUTIL_VM_DOCS = "rutil-vm-docs"
$env:DOCKER_TAG_RUTIL_VM_LANDING = "rutil-vm-landing"
$env:DOCKER_TAG_RUTIL_VM_FILEREAD = "rutil-vm-fileread"
$env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC = "rutil-vm-install-enc"
$env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH = "rutil-vm-install-enc-sh" 
$env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY = "rutil-vm-install-enc-py"
$env:DOCKER_TAG_RUTIL_VM_PKG = "rutil-vm-pkg"
$env:DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY = "rutil-vm-ansible-deploy"
$env:DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO = "rutil-vm-concept-demo"
$env:DOCKER_TAG_RUTIL_VM_GRAFANA_OSS = "rutil-vm-grafana-oss"
$env:DOCKER_TAG_RUVIL_VM_VERSION = "4.0.0"
$env:DOCKER_TAG_RUVIL_VM_BUILD_NO = "39"
$env:DOCKER_TAG_RUTIL_VM_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_API_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_API}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_NOTIFY}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_WSPROXY}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_DOCS_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_DOCS}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_LANDING_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_LANDING}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_FILEREAD}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_PKG_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_PKG}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO}:${env:DOCKER_TAG_RUVIL_VM_VERSION}-${env:DOCKER_TAG_RUVIL_VM_BUILD_NO}"
$env:DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT = "${env:DOCKER_REGISTRY_HOME}/${env:DOCKER_TAG_RUTIL_VM_GRAFANA_OSS}:${env:DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_VERSION}"
 $env:GIT_LOG_FORMAT_DEFAULT = "%Cred%h%Creset %C(yellow)%d%Crest %s %Cgreen(%cr) %C(bold blue) %an %Creset"

Write-Host @"
===================================================
               ENVIRONMENT VARIABLES
===================================================

[PATH_ALAIS_HOME]: $profile
[PATH_DEV]: $env:PATH_DEV
[DOCKER_TAG_RUTIL_VM_API]: $env:DOCKER_TAG_RUTIL_VM_API
[DOCKER_TAG_RUTIL_VM_API_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_API_CURRENT
[DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_NOTIFY_CURRENT
[DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT
[DOCKER_TAG_RUTIL_VM_LANDING_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_LANDING_CURRENT
[DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_FILEREAD_CURRENT
[DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_CURRENT
[DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_SH_CURRENT
[DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_INSTALL_ENC_PY_CURRENT
[DOCKER_TAG_RUTIL_VM_PKG_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_PKG_CURRENT
[DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_ANSIBLE_DEPLOY_CURRENT
[DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_CONCEPT_DEMO_CURRENT
[DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT]: $env:DOCKER_TAG_RUTIL_VM_GRAFANA_OSS_CURRENT


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
function cdr() { cd "$env:PATH_DEV_RUTIL_VM"; }
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
    docker tag $env:DOCKER_TAG_RUTIL_VM_API_CURRENT ${env:DOCKER_TAG_RUTIL_VM_API}:${env:DOCKER_TAG_RUVIL_VM_VERSION};
}
function saveDkb { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_API_CURRENT }
function saveLatestDkb { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_API_CURRENT }

function drmif { docker rmi $env:DOCKER_TAG_RUTIL_VM_CURRENT }
function buildDkf { 
    docker build -t $env:DOCKER_TAG_RUTIL_VM_CURRENT $env:PATH_DEV_RUTIL_VM\front;
    docker tag $env:DOCKER_TAG_RUTIL_VM_CURRENT ${env:DOCKER_TAG_RUTIL_VM}:${env:DOCKER_TAG_RUVIL_VM_VERSION};
}
function saveDkf { docker save -o web.tar $env:DOCKER_TAG_RUTIL_VM_CURRENT }
function saveLatestDkf { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_CURRENT }

function drmiw { docker rmi $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT }
function buildDkw {
    docker build -t $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT $env:PATH_DEV_RUTIL_VM\wsproxy;
    docker tag $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT ${env:DOCKER_TAG_RUTIL_VM_WSPROXY}:${env:DOCKER_TAG_RUVIL_VM_VERSION};
}
function saveDkw { docker save -o wsproxy.tar $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT }
function saveLatestDkw { docker save -o api.tar $env:DOCKER_TAG_RUTIL_VM_WSPROXY_CURRENT }

function alias() { subl $profile }

# 후처리
$env:PATH += ";$env:UserProfile\scoop\apps\oh-my-posh\current\bin"
oh-my-posh --init --shell pwsh --config "$env:UserProfile\scoop\apps\oh-my-posh\current\themes\agnoster.omp.json" | Invoke-Expression
Invoke-Expression (& { (zoxide init powershell | Out-String) })
(&mise activate pwsh) | Out-String | Invoke-Expression
Import-Module Terminal-Icons
fastfetch

# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.
$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"
if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}
```

### F. <VPIcon icon="fas fa-gears"/>`gpedit-enable.cmd`

Windows 10/11 Home에서 *로컬 그룹 정책 편집기* 생성

::: note

Pro 일 경우, 실행 필수 아님

:::

> 윈도우 작업표시줄 검색창이나 <kbd><VPIcon icon="fa-brands fa-windows"/></kbd>+<kbd>R</kbd>(실행) 열어서 `cmd`를 <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>enter</kbd> 눌러 실행합니다.

::: warning Prerequesite(s)

First, ensure that you open prompt in **ADMINISTRATIVE** mode

:::

```batch :collapsed-liens title="gpedit-enable.cmd"
::
:: 사용방법
::
:: 관리자 권한으로 아래 스크립트를 실행

@echo off

pushd "%~dp0" 
 
dir /b %SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt 
dir /b %SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt 
 
for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i" 
PAUSE
```

#### F1. 로컬 그룹 정책

- 비활성화
  - `[컴퓨터 구성]` -> `[관리 템플릿]` -> `[시스템]` -> `[OS 정책]`:
    [ ]`[장치 간 클립보드 동기화 허용]`
    [ ] `[작업 피드 사용 설정]`
- 활성화
  - `[컴퓨터 구성]` -> `[관리 템플릿]` -> `[시스템]` -> `[사용자 프로필]`:
    [ ] `광고 ID 끄기`

<!-- TODO: `auditpol`, `secpol` 으로 활용 가능한 부분확인 -->
<!-- TODO: https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/identity/ad-ds/plan/security-best-practices/advanced-audit-policy-configuration.md -->

---

### G. oh-my-posh's <VPIcon icon="iconfont icon-json"/>`schema.json`

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
  name="Raphire/Win11Debloat"
  desc="A simple, lightweight PowerShell script to remove pre-installed apps, disable telemetry, as well as perform various other changes to customize, declutter and improve your Windows experience. Win11D..."
  url="https://github.com/Raphire/Win11Debloat/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://repository-images.githubusercontent.com/307843105/73d2a8af-40d3-4fce-b9a3-3cfd1a24112a"/>

<SiteInfo
  name="builtbybel/CrapFixer: Cr*ap Fixer"
  desc="Cr*ap Fixer."
  url="https://github.com/builtbybel/CrapFixer/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://repository-images.githubusercontent.com/972589719/32bd1dd0-758b-46a0-9c96-758a305fe368"/>

<SiteInfo
  name="builtbybel/Winslop"
  desc="De-slop Windows."
  url="https://github.com/builtbybel/Winslop/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://repository-images.githubusercontent.com/1130260802/694d53a9-a0b2-4248-ba90-759d64b86257"/>

<SiteInfo
  name="Cyber Scarecrow"
  desc="An app for scaring away malware"
  url="https://cyberscarecrow.com/"
  logo="https://cyberscarecrow.com/favicon.ico"
  preview="https://cyberscarecrow.com/_next/image?url=%2Fscarecrow_128.ico&w=96&q=75"/>

<SiteInfo
  name="HOP is Open HWP"
  desc="HWP/HWPX 문서를 보고 편집할 수 있는 오픈소스 데스크톱 앱"
  url="https://golbin.github.io/hop/"
  logo="https://golbin.github.io/assets/logo/favicon.ico"
  preview="https://golbin.github.io/assets/screenshots/hop-editor.webp"/>

```component VPCard
{
  "title": "Download optimizerDuck - optimizerDuck",
  "desc": "Free, open-source Windows optimization tool for performance, privacy, and simplicity.",
  "link": "https://optimizerduck.vercel.app/docs/download.html/",
  "logo": "https://optimizerduck.vercel.app/favicon.ico",
  "background": "rgba(255,224,138,0.2)"
}
```

::: info <VPIcon icon="iconfont icon-github"/><code>memstechtips/Winhance</code>

```powershell
irm "https://get.winhance.net" | iex
```

<SiteInfo
  name="memstechtips/Winhance"
  desc="Application designed to optimize, customize and enhance your Windows experience."
  url="https://github.com/memstechtips/Winhance/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://repository-images.githubusercontent.com/916105685/2f929ffe-5433-4d0c-b28c-c1890bc88b5e"/>

:::

::: info <VPIcon icon="iconfont icon-github"/><code>zoicware/RemoveWindowsAI</code>

```powershell
& ([scriptblock]::Create((irm "https://raw.githubusercontent.com/zoicware/RemoveWindowsAI/main/RemoveWindowsAi.ps1")))
```

<SiteInfo
  name="zoicware/RemoveWindowsAI"
  desc="Force Remove Copilot, Recall and More in Windows 11"
  url="https://github.com/zoicware/RemoveWindowsAI/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/d99580802dc5f7a41ed913934035d13d11e094d19f9cb83c44c8c2b5377a2aa6/zoicware/RemoveWindowsAI"/>

<VidStack src="youtube/j5_eEBWGHFw" />

:::

---

<TagLinks />