---
lang: ko-KR
title: Tips
description: Batchfile > Tips
icon: fas fa-lightbulb
category:
  - Batchfile 
  - Tips
tag: 
  - cli
  - bat
  - batchfile
  - win
  - windows
  - windows-terminal
  - net
  - slmgr
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

::: code-tabs#batch

@tab:active NET

```batch
:: Windows 사용자 조회
NET USER
:: Windows 사용자 비밀번호 변경
NET USER <LOGINID> <NEW_PASSWORD>
:: 관리자계정 비활성화 (`no`) / 활성화 (`yes`)
NET USER administrator /active:no
```

@tab SLMGR

```batch
:: 윈도우 인증키 레지스트리 제거
SLMGR /cpky
:: 윈도우 인증키 제품키 제거
SLMGR /upk
:: 윈도우 제품키 시리얼 인증
SLMGR /ipk <제품번호>
:: 윈도우 제품키 인증상태 확인
SLMGR /dlv
```

@tab POWERCFG

```batch
:: 최대 절전 모드 해제
POWERCFG /hibernate off
:: 전원설정 - 최고의 성능
POWERCFG -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
```

@tab BCDEDIT

```batch
:: 프리징 현상 해결
BCDEDIT /set disabledynamictick yes
:: 안전모드 F8 사용
BCDEDIT /set {default} bootmenupolicy legacy
:: 안전모드 F8 해지
BCDEDIT /set {default} bootmenupolicy standard
```

@tab REG

```batch
:: 윈도우 시리얼번호 확인
REG query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /v BackupProductKeyDefault`
:: 윈도우11 탐색기 버벅임 제거 
REG add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /v {e2bf9676-5f8f-435c-97eb-11607a5bedf7} /f
:: 윈도우10 바탕화면 이미지 품질저하 문제 해결
REG add "HKEY_CURRENT_USER\Control Panel\Desktop" /v "JPEGImportQuality" /t REG_DWORD /d "100" /f
```

@tab SFC

```batch
:: 시스템 파일 검사기 도구
SFC /scannow
```

@tab Others

```batch
:: DNS 캐시 삭제 (관리자 권한)
IPCONFIG /flushdns
:: C:\Windows\Installer\$PatchCache$` 폴더 삭제
RMDIR /q /s %WINDIR%\Installer\$PatchCache$
:: 하드 디스크 정보 제거s
CIPHER /w:d:
:: 윈도우 업데이트 제거 (관리자 권한)
WUSA /uninstall /KB:4535996 /norestart
```

:::

| 명령어 | 설명 |
| :--- | :--- |
| `WSReset.exe` | 윈도우 스토어 캐쉬 삭제 |

::: info Window Environment Setup

```component VPCard
{
  "title": "Windows > Environment Setup",
  "desc": "Environment Setup",
  "link": "/devops/windows/env-setup.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

:::

---

<TagLinks />