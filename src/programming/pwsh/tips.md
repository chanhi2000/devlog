---
lang: ko-KR
title: Tips
description: Powershell > Tips
icon: fas fa-lightbulb
category:
  - Powershell
  - Tips
tag: 
  - powershell
  - pwsh
  - ps1
  - windows-terminal
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Get Fully Qualified Domain Name

::: tabs

@tab:active powershell 

```powershell
([System.Net.Dns]::GetHostByName(($env:computerName))).Hostname
```

@tab result

```powershell
# URP-PC
```

:::

---

## Get just domain name

::: tabs 

@tab:active powershell

```powershell
(Get-WmiObject -Class win32_computersystem).domain
```

@tab result

```powershell
# WORKGROUP
```

:::

---

## Get OS and Pwsh info

::: tabs

@tab:active powershell

```powershell
$Bit = (get-wmiobject Win32_OperatingSystem).OSArchitecture ; 
$V = $host | select-object -property "Version" ; 
$Build = (Get-WmiObject -class Win32_OperatingSystem).Caption ; 
write-host "$env:computername is a $Bit $Build with Pwsh $V"
```

@tab result

```powershell
# URP-PC is a 64비트 Microsoft Windows 10 Pro with Pwsh @{Version=5.1.19041.2673}
```

:::

---

## Hardware info

```powershell
#Get BIOS Info
gcim -ClassName Win32_BIOS | fl Manufacturer, Name, SerialNumber, Version;
#Get processor info
gcim -ClassName Win32_Processor | fl caption, Name, SocketDesignation;
#Computer Model
gcim -ClassName Win32_ComputerSystem | fl Manufacturer, Systemfamily, Model, SystemType
#Disk space in Gigs, as who wants bytes?
gcim  -ClassName Win32_LogicalDisk |
Select -Property DeviceID, DriveType, @{L='FreeSpaceGB';E={"{0:N2}" -f ($_.FreeSpace /1GB)}}, @{L="Capacity";E={"{0:N2}" -f ($_.Size/1GB)}} | fl

## Let's calculate an individual directory, C:\Sysmon, and compare with disk memory stats
$size = (gci c:\sysmon | measure Length -s).sum / 1Gb;
write-host " Sysmon Directory in Gigs: $size";
$free = gcim  -ClassName Win32_LogicalDisk | select @{L='FreeSpaceGB';E={"{0:N2}" -f ($_.FreeSpace /1GB)}};
echo "$free";
$cap = gcim  -ClassName Win32_LogicalDisk | select @{L="Capacity";E={"{0:N2}" -f ($_.Size/1GB)}} 
echo "$cap"
```

--- 

## Time Info

::: details Human Readable

```powershell
Get-Date -UFormat "%a %Y-%b-%d %T UTC:%Z" 
# 수 2023-5-31 19:14:30 UTC:+09
```

:::

::: details Machine comparable

```powershell
[Xml.XmlConvert]::ToString((Get-Date).ToUniversalTime(), [System.Xml.XmlDateTimeSerializationMode]::Utc)
# 2023-05-31T10:14:50.7607949Z
```

:::

::: details Compare UTC time from Local time

```powershell
$Local = get-date;$UTC = (get-date).ToUniversalTime();
write-host "LocalTime is: $Local";write-host "UTC is: $UTC"
# LocalTime is: 05/31/2023 19:15:14
# UTC is: 05/31/2023 10:15:14
```

:::

---

## Update Info

### Get Patches

```powershell
get-hotfix|
select-object HotFixID,InstalledOn|
Sort-Object  -Descending -property InstalledOn|
format-table -autosize
# HotFixID  InstalledOn
# --------  -----------
# KB5015684 2023-05-22 오전 12:00:00
# KB5026361 2023-05-10 오전 12:00:00
# KB5025315 2023-05-10 오전 12:00:00
# KB5023794 2023-04-12 오전 12:00:00
# KB5022924 2023-03-16 오전 12:00:00
# KB5022502 2023-02-17 오전 12:00:00
# KB5020372 2022-12-13 오전 12:00:00
# KB5018506 2022-11-10 오전 12:00:00
# KB5016705 2022-09-15 오전 12:00:00
# KB5015895 2022-08-11 오전 12:00:00
# KB5012170 2022-08-11 오전 12:00:00
# KB5014671 2022-07-18 오전 12:00:00
# KB5014035 2022-06-15 오전 12:00:00
# KB5014032 2022-05-19 오전 12:00:00
# KB4562830 2022-05-03 오전 12:00:00
# KB5007401 2022-05-03 오전 12:00:00
# KB5011651 2022-05-03 오전 12:00:00
# KB5005699 2021-10-06 오전 12:00:00
# KB5003791 2021-10-06 오전 12:00:00
```

### What Causes the Update Failec

```powershell
$Failures = gwmi -Class Win32_ReliabilityRecords;
$Failures | ? message -match 'failure'  | Select -ExpandProperty message 
```

---

<TagLinks />