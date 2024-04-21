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

## 목록

| 명령어 | 설명 |
| :--- | :--- |
| `net user` | Windows 사용자 조회 |
| `net user <LOGINID> <NEW_PASSWORD>` | Windows 사용자 비밀번호 변경 |
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

<TagLinks />