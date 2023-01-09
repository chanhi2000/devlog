---
lang: ko-KR
title: 👓Windows > Useful Tips
description: 👓Windows > Useful Tips
tags: ["bat" ,"pwsh", "regedit"]
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## 기본 명령어

| 명령어 | 설명 |
| :--- | :--- |
| `slmgr /cpky` | 윈도우 인증키 레지스트리 제거 | 
| `slmgr /upk` | 윈도우 인증키 제품키 제거 |
| `slmgr /ipk <제품번호>` | 윈도우 제품키 시리얼 인증 |
| `slmgr /dlv` | 윈도우 제품키 인증상태 확인 |
| `bcdedit /set disabledynamictick yes` | 프리징 현상 해결 |
| `sfc /scannow` | 시스템 파일 검사기 도구 |
| `net user administrator /active:no` | 관리자계정 비활성화 (`no`) / 활성화 (`yes`) |
| `WSReset.exe` | 윈도우 스토어 캐쉬 삭제 |
| `ipconfig /flushdns` | DNS 캐시 삭제 (관리자 권한) |
| `rmdir /q /s %WINDIR%\Installer\$PatchCache$` | `C:\Windows\Installer\$PatchCache$` 폴더 삭제 |
|||
| `reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /v BackupProductKeyDefault` | 윈도우 시리얼번호 확인 |
| `reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /v {e2bf9676-5f8f-435c-97eb-11607a5bedf7} /f` | 윈도우11 탐색기 버벅임 제거 |
| `reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v "JPEGImportQuality" /t REG_DWORD /d "100" /f` | 윈도우10 바탕화면 이미지 품질저하 문제 해결 |
|||
| `powercfg /hibernate off` | 최대 절전 모드 해제 | 
| `powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61` | 전원설정 - 최고의 성능 |
|||
| `bcdedit /set {default} bootmenupolicy legacy` | 안전모드 F8 사용 |
| `bcdedit /set {default} bootmenupolicy standard` | 안전모드 F8 해지 |
||| 
| `cipher /w:d:` | 하드 디스크 정보 제거 |
|||
| `wusa /uninstall /KB:4535996 /norestart` | 윈도우 업데이트 제거 (관리자 권한) |

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

### auto-tuning level flag(s)

| flag | description |
| :---: | :--- | 
| `disabled` | 수신 창을 기본값으로 설정합니다. |
| `highlyrestricted` | 수신 창이 적절한 수준에서 기본값보다 커지도록 합니다. |
| `restricted` | 수신 창이 기본값보다 커지도록 하지만 일부 시나리오에서는 커지는 것을 제한합니다. |
| `normal` | 대부분의 시나리오에 적합하게 수신 창이 커지도록 합니다. |
| `experimental` | 극히 일부 시나리오에만 적합하게 수신 창이 커지도록 합니다. |

--
## `powercfg.cpl`

### 전원옵션 > 최대성능 활성화

어드민 권한으로 Command Prompt실행

```batch
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
```

#### 결과

```
전원 구성표 GUID: 15fc3227-d628-4ea6-8cbc-9e9fbdf1469b  (최고의 성능)
```

---
## `gpedit.msc`

###  Windows 간 공유폴더 네트워크 속도 향상 시키기
1. 컴퓨터 구성 > 관리 템플릿 > 네트워크 > QoS 패킷 스케줄러
2. 우측 "예약 대역폭 제한" 클릭
3. "사용" 으로 설정하고 대역폭 제한을 0 으로 설정
4. 적용 하고 리부팅
 
### 윈도우 디펜더 끄기
1. 컴퓨터 구성 > 관리 템플릿 > Windows 구성 요소 > Windows Defender 바이러스 백신 > Windows 
2. Defender 바이러스 백신 사용 안함 -> 사용 변경

---
## 프로세스 종료

```batch
taskkill /f /im Battle.net.exe
taskkill /f /PID 1234
```


---
## `regedit`

| location | `key`=`value` | description |
| :--- | :---: | :--- |
| `HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\IEDevTools` | `Disabled=0` |  IE에서 개발자 도구 메뉴가 비활성화 돼 있을 때 |
| `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont` | `949=*굴림체` | `cmd.exe` 창에서 사용할 폰트를 추가하는 방법 |
| `\HKEY_USERS\.DEFAULT\Control Panel\Keyboard` | `InitialKeyboardIndicators=2147483650` | 넘버락 켜기 |
| `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters` | 
<ul><li>`BasicAuthLevel=2`</li><li>`FileSizeLimitInBytes=ffffffff`</li></ul> | WebDAV 연결 |

- https://www.clien.net/service/board/lecture/17815116


---
## How to Change a Windows 10 User Name

- <kbd>Win</kbd> + <kbd>r</kbd> 입력 후 실행 창 생성
- 입력란에 `control userpasswords2` 입력
- _'이 컴퓨터 사용자'_ 목록에서 사용자명 변경 할 사용자 선택 후 `[속성]` 버튼 선택

## 유저 폴더 명 변경

### SID 값 조회

어드민 권한으로 Command Prompt실행

```batch
wmic useraccount list full
```

S-1-5-21-366331386-1496529093-1967116536-1002

### 폴더명 변경

```batch
CD C:\Users && REM 유저폴더 이동 
RENAME <구 이름> <바꿀 이름> && REM 폴더명 변경
```

### 레지스트리 값 변경

- `regedit` 실행 후 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\<찾은 SID값>` 경로이동
- `ProfileImagePath` 값을 바꾼 이름으로 지정


 <TagLinks />