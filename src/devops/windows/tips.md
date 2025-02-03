---
lang: ko-KR
title: Tips
description: Windows > Tips
icon: fas fa-lightbulb
category:
  - Microsoft
  - Windows
  - Tips
tag: 
  - bat 
  - pwsh
  - regedit
head:
  - - meta:
    - property: og:title
      content: Windows > Tips
    - property: og:description
      content: Tips
    - property: og:url
      content: https://chanhi2000.github.io/devops/windows/tips.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## God Mode 활성화

폴더명을 다음과 같이 변경

```
God Mode.{ED7BA470-8E54-465E-825C-99712043E01C}
```

---

## 윈도우 업데이트 오류 수정

```batch
net stop wuauserv
net stop cryptSvc
net stop bits
net stop msiserver
Ren C:\Windows\SoftwareDistribution SoftwareDistribution.old
Ren C:\Windows\System32\catroot2 Catroot2.old
net start wuauserv
net start cryptSvc
net start bits
net start msiserver
```

---

## 윈도우 사용자 비밀번호 변경

> 어드민 권한으로 Command Prompt실행

```batch
net user <사용자ID> <변경 비밀번호>
```

---

## 윈도우 이미지를 복구

```batch
dism /online /cleanup-image /restorehealth
dism /online /cleanup-image /startcomponentcleanup
```

---

## auto-tuning network 기능 해제

```batch
netsh interface tcp set global autotuninglevel=disabled
netsh interface tcp set global autotuninglevel=normal 
```

::: info auto-tuning level flag(s) 


| flag | description |
| :---: | :--- | 
| `disabled` | 수신 창을 기본값으로 설정합니다. |
| `highlyrestricted` | 수신 창이 적절한 수준에서 기본값보다 커지도록 합니다. |
| `restricted` | 수신 창이 기본값보다 커지도록 하지만 일부 시나리오에서는 커지는 것을 제한합니다. |
| `normal` | 대부분의 시나리오에 적합하게 수신 창이 커지도록 합니다. |
| `experimental` | 극히 일부 시나리오에만 적합하게 수신 창이 커지도록 합니다. |

:::

---

## `powercfg.cpl`


::: info 전원옵션 > 최대성능 활성화

어드민 권한으로 Command Prompt 실행

```batch
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
--

```

아래와 같은 결과 출력

```

```

:::

---

## `gpedit.msc`

### Windows 간 공유폴더 네트워크 속도 향상 시키기

1. 컴퓨터 구성 > 관리 템플릿 > 네트워크 > QoS 패킷 스케줄러
2. 우측 "예약 대역폭 제한" 클릭
3. "사용" 으로 설정하고 대역폭 제한을 0 으로 설정
4. 적용 하고 리부팅

### 윈도우 디펜더 끄기

1. 컴퓨터 구성 > 관리 템플릿 > Windows 구성 요소 > Windows Defender 바이러스 백신 > Windows
2. Defender 바이러스 백신 사용 안함 -> 사용 변경

---

## Kill Process

```batch
taskkill /f /im Battle.net.exe
taskkill /f /PID 1234
```

---

## `regedit`

| location | `key`=`value` | description |
| :--- | :---: | :--- |
| `\HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\IEDevTools` | `Disabled=0` |  IE에서 개발자 도구 메뉴가 활성화 |
| `\HKEY_CURRENT_USER\Control Panel\Desktop` | `AutoEndTasks=1` | '이 앱 때문에 종료할 수 없습니다' 비활성화 |
| `\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont` | `949=*굴림체` | `cmd.exe` 창에서 사용할 폰트를 추가하는 방법 |
| `\HKEY_USERS\.DEFAULT\Control Panel\Keyboard` | `InitialKeyboardIndicators=2147483650` | 넘버락 켜기 |
| `\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters` | <ul><li>`BasicAuthLevel=2`</li><li>`FileSizeLimitInBytes=ffffffff`</li></ul> | 
| `\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System` | `EnableSmartScreen=0` | SmartScreen 비활성화 |

```batch
:: '이 앱 때문에 종료할 수 없습니다' 비활성화
REG add "HKEY_CURRENT_USER\Control Panel\Desktop" /v "AutoEndTasks" /d "1" /f 
:: IE에서 개발자 도구 메뉴가 활성화
REG add "HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\IEDevTools" /v "Disabled" /d "0" /f 
```

---

## How to Change a Windows 10 User Name

- <kbd><FontIcon icon="fa-brands fa-windows"/></kbd>+<kbd>r</kbd> 입력 후 실행 창 생성
- 입력란에 `control userpasswords2` 입력
- _'이 컴퓨터 사용자'_ 목록에서 사용자명 변경 할 사용자 선택 후 `[속성]` 버튼 선택

---

## 유저 폴더 명 변경

### SID 값 조회

어드민 권한으로 Command Prompt실행

```batch
wmic useraccount list full
::
:: S-1-5-21-366331386-1496529093-1967116536-1002
```

### 폴더명 변경

```batch
CD C:\Users && REM 유저폴더 이동 
RENAME <구 이름> <바꿀 이름> && REM 폴더명 변경
```

### 레지스트리 값 변경

- `regedit` 실행 후 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\<찾은 SID값>` 경로이동
- `ProfileImagePath` 값을 바꾼 이름으로 지정

---

 <TagLinks />