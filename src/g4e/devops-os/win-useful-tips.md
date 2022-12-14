---
lang: ko-KR
title: πWindows > Useful Tips
description: πWindows > Useful Tips
tags: ["bat" ,"pwsh", "regedit"]
---

# {{ $frontmatter.title }} κ΄λ ¨

[[toc]]

---
## κΈ°λ³Έ λͺλ Ήμ΄

| λͺλ Ήμ΄ | μ€λͺ |
| :--- | :--- |
| `slmgr /cpky` | μλμ° μΈμ¦ν€ λ μ§μ€νΈλ¦¬ μ κ±° | 
| `slmgr /upk` | μλμ° μΈμ¦ν€ μ νν€ μ κ±° |
| `slmgr /ipk <μ νλ²νΈ>` | μλμ° μ νν€ μλ¦¬μΌ μΈμ¦ |
| `slmgr /dlv` | μλμ° μ νν€ μΈμ¦μν νμΈ |
| `bcdedit /set disabledynamictick yes` | νλ¦¬μ§ νμ ν΄κ²° |
| `sfc /scannow` | μμ€ν νμΌ κ²μ¬κΈ° λκ΅¬ |
| `net user administrator /active:no` | κ΄λ¦¬μκ³μ  λΉνμ±ν (`no`) / νμ±ν (`yes`) |
| `WSReset.exe` | μλμ° μ€ν μ΄ μΊμ¬ μ­μ  |
| `ipconfig /flushdns` | DNS μΊμ μ­μ  (κ΄λ¦¬μ κΆν) |
| `rmdir /q /s %WINDIR%\Installer\$PatchCache$` | `C:\Windows\Installer\$PatchCache$` ν΄λ μ­μ  |
|||
| `reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /v BackupProductKeyDefault` | μλμ° μλ¦¬μΌλ²νΈ νμΈ |
| `reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /v {e2bf9676-5f8f-435c-97eb-11607a5bedf7} /f` | μλμ°11 νμκΈ° λ²λ²μ μ κ±° |
| `reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v "JPEGImportQuality" /t REG_DWORD /d "100" /f` | μλμ°10 λ°ννλ©΄ μ΄λ―Έμ§ νμ§μ ν λ¬Έμ  ν΄κ²° |
|||
| `powercfg /hibernate off` | μ΅λ μ μ  λͺ¨λ ν΄μ  | 
| `powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61` | μ μμ€μ  - μ΅κ³ μ μ±λ₯ |
|||
| `bcdedit /set {default} bootmenupolicy legacy` | μμ λͺ¨λ F8 μ¬μ© |
| `bcdedit /set {default} bootmenupolicy standard` | μμ λͺ¨λ F8 ν΄μ§ |
||| 
| `cipher /w:d:` | νλ λμ€ν¬ μ λ³΄ μ κ±° |
|||
| `wusa /uninstall /KB:4535996 /norestart` | μλμ° μλ°μ΄νΈ μ κ±° (κ΄λ¦¬μ κΆν) |

---
## μλμ° μλ°μ΄νΈ μ€λ₯ μμ 

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
## μλμ° μ΄λ―Έμ§λ₯Ό λ³΅κ΅¬

```batch
dism /online /cleanup-image /restorehealth
dism /online /cleanup-image /startcomponentcleanup
``` 

---
## auto-tuning network κΈ°λ₯ ν΄μ 

```batch
netsh interface tcp set global autotuninglevel=disabled
netsh interface tcp set global autotuninglevel=normal 
```

### auto-tuning level flag(s)

| flag | description |
| :---: | :--- | 
| `disabled` | μμ  μ°½μ κΈ°λ³Έκ°μΌλ‘ μ€μ ν©λλ€. |
| `highlyrestricted` | μμ  μ°½μ΄ μ μ ν μμ€μμ κΈ°λ³Έκ°λ³΄λ€ μ»€μ§λλ‘ ν©λλ€. |
| `restricted` | μμ  μ°½μ΄ κΈ°λ³Έκ°λ³΄λ€ μ»€μ§λλ‘ νμ§λ§ μΌλΆ μλλ¦¬μ€μμλ μ»€μ§λ κ²μ μ νν©λλ€. |
| `normal` | λλΆλΆμ μλλ¦¬μ€μ μ ν©νκ² μμ  μ°½μ΄ μ»€μ§λλ‘ ν©λλ€. |
| `experimental` | κ·Ήν μΌλΆ μλλ¦¬μ€μλ§ μ ν©νκ² μμ  μ°½μ΄ μ»€μ§λλ‘ ν©λλ€. |


---
## `gpedit.msc`

###  Windows κ° κ³΅μ ν΄λ λ€νΈμν¬ μλ ν₯μ μν€κΈ°
1. μ»΄ν¨ν° κ΅¬μ± > κ΄λ¦¬ ννλ¦Ώ > λ€νΈμν¬ > QoS ν¨ν· μ€μΌμ€λ¬
2. μ°μΈ‘ "μμ½ λμ­ν­ μ ν" ν΄λ¦­
3. "μ¬μ©" μΌλ‘ μ€μ νκ³  λμ­ν­ μ νμ 0 μΌλ‘ μ€μ 
4. μ μ© νκ³  λ¦¬λΆν
 
### μλμ° λνλ λκΈ°
1. μ»΄ν¨ν° κ΅¬μ± > κ΄λ¦¬ ννλ¦Ώ > Windows κ΅¬μ± μμ > Windows Defender λ°μ΄λ¬μ€ λ°±μ  > Windows 
2. Defender λ°μ΄λ¬μ€ λ°±μ  μ¬μ© μν¨ -> μ¬μ© λ³κ²½

---
## νλ‘μΈμ€ μ’λ£

```batch
taskkill /f /im Battle.net.exe
taskkill /f /PID 1234
```


---
## `regedit`

| location | `key`=`value` | description |
| :--- | :---: | :--- |
| `HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\IEDevTools` | `Disabled=0` |  IEμμ κ°λ°μ λκ΅¬ λ©λ΄κ° λΉνμ±ν λΌ μμ λ |
| `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont` | `949=*κ΅΄λ¦Όμ²΄` | `cmd.exe` μ°½μμ μ¬μ©ν  ν°νΈλ₯Ό μΆκ°νλ λ°©λ² |
| `\HKEY_USERS\.DEFAULT\Control Panel\Keyboard` | `InitialKeyboardIndicators=2147483650` | λλ²λ½ μΌκΈ° |
| `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters` | 
<ul><li>`BasicAuthLevel=2`</li><li>`FileSizeLimitInBytes=ffffffff`</li></ul> | WebDAV μ°κ²° |

- https://www.clien.net/service/board/lecture/17815116


---
## How to Change a Windows 10 User Name

- <kbd>Win</kbd> + <kbd>r</kbd> μλ ₯ ν μ€ν μ°½ μμ±
- μλ ₯λμ `control userpasswords2` μλ ₯
- _'μ΄ μ»΄ν¨ν° μ¬μ©μ'_ λͺ©λ‘μμ μ¬μ©μλͺ λ³κ²½ ν  μ¬μ©μ μ ν ν `[μμ±]` λ²νΌ μ ν

## μ μ  ν΄λ λͺ λ³κ²½

### SID κ° μ‘°ν

μ΄λλ―Ό κΆνμΌλ‘ Command Promptμ€ν

```batch
wmic useraccount list full
```

S-1-5-21-366331386-1496529093-1967116536-1002

### ν΄λλͺ λ³κ²½

```batch
CD C:\Users && REM μ μ ν΄λ μ΄λ 
RENAME <κ΅¬ μ΄λ¦> <λ°κΏ μ΄λ¦> && REM ν΄λλͺ λ³κ²½
```

### λ μ§μ€νΈλ¦¬ κ° λ³κ²½

- `regedit` μ€ν ν `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\<μ°Ύμ SIDκ°>` κ²½λ‘μ΄λ
- `ProfileImagePath` κ°μ λ°κΎΌ μ΄λ¦μΌλ‘ μ§μ 




 <TagLinks />