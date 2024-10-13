---
lang: ko-KR
title: Scripts to Manage Computers
description: Powershell > Scripts to Manage Computers
icon: fas fa-gear
category:
  - Powershell
  - Scripts to Manage Computers
tag: 
  - powershell
  - pwsh
  - windows
  - script
  - useful-script
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <FontIcon icon="iconfont icon-powershell"/>`add-firewall-rules.ps1`

```component VPCard
{
  "title": "add-firewall-rules.ps1",
  "desc": "Adds firewall rules for executables, needs admin rights.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/add-firewall-rules.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script adds firewall rules for the given executable. Administrator rights are required.


::: tabs 

@tab:active Parameters

```powershell
PS> ./add-firewall-rules.ps1 [[-PathToExecutables] <String>] [<CommonParameters>]

-PathToExecutables <String>
    Specifies the path to the executables
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./add-firewall-rules C:\MyApp\bin
# Adding firewall rule for C:\MyApp\bin\app1.exe
# Adding firewall rule for C:\MyApp\bin\app2.exe
...
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Adds firewall rules for executables (needs admin rights)
.DESCRIPTION
	This PowerShell script adds firewall rules for the given executable. Administrator rights are required.
.PARAMETER PathToExecutables
	Specifies the path to the executables
.EXAMPLE
	PS> ./add-firewall-rules C:\MyApp\bin
	Adding firewall rule for C:\MyApp\bin\app1.exe
	Adding firewall rule for C:\MyApp\bin\app2.exe
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

param([string]$PathToExecutables = "")

$command = '
$output = ''Firewall rules for path '' + $args[0]
write-output $output
for($i = 1; $i -lt $args.count; $i++){
	$path = $args[0]
	$path += ''\''
	$path += $args[$i]

	$null = $args[$i] -match ''[^\\]*\.exe$''
	$name = $matches[0]
    $output = ''Adding firewall rule for '' + $name
	write-output $output
	$null = New-NetFirewallRule -DisplayName $name -Direction Inbound -Program $path -Profile Domain, Private -Action Allow
}
write-host -foregroundColor green -noNewline ''Done - press any key to continue...'';
[void]$Host.UI.RawUI.ReadKey(''NoEcho,IncludeKeyDown'');
'


try {
	if ($PathToExecutables -eq "" ) {
		$PathToExecutables = read-host "Enter path to executables"
	}

	$PathToExecutables = Convert-Path -Path $PathToExecutables

	$Apps = Get-ChildItem "$PathToExecutables\*.exe" -Name

	if($Apps.count -eq 0){
		write-warning "No executables found. No Firewall rules have been created."
		Write-Host -NoNewhLine 'Press any key to continue...';
		[void]$Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');
		exit 1
	}

	$arg = "PathToExecutables $Apps"
	Start-Process powershell -Verb runAs -ArgumentList "-command & {$command}  $arg"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-cpu.ps1`

```component VPCard
{
  "title": "check-cpu.ps1",
  "desc": "Checks the CPU temperature",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-cpu.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

Checks the CPU temperature

::: tabs

@tab:active Parameters

```powershell
[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the CPU status
.DESCRIPTION
	This PowerShell script queries the CPU status and prints it (name, type, speed, temperature, etc).
.EXAMPLE
	PS> ./check-cpu
	✅ AMD Ryzen 5 5500U with Radeon Graphics (CPU0, 2100MHz, 31.3°C)
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function GetCPUTemperatureInCelsius {
	$Temp = 99999.9 # unsupported
	if ($IsLinux) {
		if (Test-Path "/sys/class/thermal/thermal_zone0/temp" -pathType leaf) {
			[int]$IntTemp = Get-Content "/sys/class/thermal/thermal_zone0/temp"
			$Temp = [math]::round($IntTemp / 1000.0, 1)
		}
	} else {
		$Objects = Get-WmiObject -Query "SELECT * FROM Win32_PerfFormattedData_Counters_ThermalZoneInformation" -Namespace "root/CIMV2"
		foreach ($Obj in $Objects) {
			$HiPrec = $Obj.HighPrecisionTemperature
			$Temp = [math]::round($HiPrec / 100.0, 1)
		}
	}
	return $Temp;
}

function GetProcessorArchitecture {
	if ("$env:PROCESSOR_ARCHITECTURE" -ne "") { return "$env:PROCESSOR_ARCHITECTURE" }
	if ($IsLinux) {
		$Name = $PSVersionTable.OS
		if ($Name -like "*-generic *") {
			if ([System.Environment]::Is64BitOperatingSystem) { return "x64" } else { return "x86" }
		} elseif ($Name -like "*-raspi *") {
			if ([System.Environment]::Is64BitOperatingSystem) { return "ARM64" } else { return "ARM32" }
		} else {
			return ""
		}
	}
}

try {
	Write-Progress "⏳ Querying CPU details..."
	$Status = "✅"
	$Celsius = GetCPUTemperatureInCelsius
	if ($Celsius -eq 99999.9) {
		$Temp = "no temp"
	} elseif ($Celsius -gt 50) {
		$Temp = "$($Celsius)°C"
		$Status = "⚠️"
	} elseif ($Celsius -lt 0) {
		$Temp = "$($Celsius)°C"
		$Status = "⚠️"
	} else {
		$Temp = "$($Celsius)°C"
	} 

	$Arch = GetProcessorArchitecture
	if ($IsLinux) {
		$CPUName = "$Arch CPU"
		$Arch = ""
		$DeviceID = ""
		$Speed = ""
		$Socket = ""
	} else {
		$Details = Get-WmiObject -Class Win32_Processor
		$CPUName = $Details.Name.trim()
		$Arch = "$Arch, "
		$DeviceID = "$($Details.DeviceID), "
		$Speed = "$($Details.MaxClockSpeed)MHz, "
		$Socket = "$($Details.SocketDesignation) socket, "
	}
	$Cores = [System.Environment]::ProcessorCount
	Write-Progress -completed "done."
	Write-Host "$Status $CPUName ($($Arch)$Cores cores, $($DeviceID)$($Speed)$($Socket)$Temp)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-dns.ps1`

```component VPCard
{
  "title": "check-cpu.ps1",
  "desc": "Checks the CPU temperature",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-cpu.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10,10,10,0.2)"
}
```

This PowerShell script measures and prints the DNS resolution speed by using 200 popular domains.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-dns.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-dns
# ✅ DNS resolves 156.5 domains per second
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Check DNS resolution 
.DESCRIPTION
	This PowerShell script measures and prints the DNS resolution speed by using 200 popular domains.
.EXAMPLE
	PS> ./check-dns
	✅ DNS resolves 156.5 domains per second
.NOTES
	Author: Markus Fleschutz | License: CC0
#>
 
try {
	Write-Progress "⏳ Resolving 200 popular domain names..."
	$table = Import-CSV "$PSScriptRoot/../Data/popular-domains.csv"
	$numRows = $table.Length

	$stopWatch = [system.diagnostics.stopwatch]::startNew()
	if ($IsLinux) {
		foreach($row in $table){$nop=dig $row.Domain +short}
	} else {
		foreach($row in $table){$nop=Resolve-DNSName $row.Domain}
	}
	[float]$elapsed = $stopWatch.Elapsed.TotalSeconds

	
	$average = [math]::round($numRows / $elapsed, 1)
	if ($average -lt 10.0) {
		"⚠️ DNS resolves $average domains per second only!"
	} else {  
		"✅ DNS resolves $average domains per second"
	}
	Write-Progress -completed "."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-drive-space.ps1`

```component VPCard
{
  "title": "check-drive-space.ps1",
  "desc": "Checks a drive for free space left.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-drive-space.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script checks a drive for free space left (20 GB by default).

::: tabs

@tab:active Parameters

```powershell
PS> ./check-drive-space.ps1 [[-Drive] <String>] [[-MinLevel] <Int32>] [<CommonParameters>]

-Drive <String>
    Specifies the drive to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-MinLevel <Int32>
    Specifies the minimum level in Gigabyte
    
    Required?                    false
    Position?                    2
    Default value                20
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-drive-space C
# ✔️ 172 GB left on drive C (61 of 233 GB used)
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks a drive for free space left 
.DESCRIPTION
	This PowerShell script checks a drive for free space left (20 GB by default).
.PARAMETER Drive
	Specifies the drive to check
.PARAMETER MinLevel
	Specifies the minimum level in Gigabyte
.EXAMPLE
	PS> ./check-drive-space C
	✔️ 172 GB left on drive C (61 of 233 GB used)
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Drive = "", [int]$MinLevel = 20) # minimum level in GB

try {
	if ($Drive -eq "" ) { $Drive = read-host "Enter drive to check" }

	$DriveDetails = (get-psdrive $Drive)
	[int]$Free = (($DriveDetails.Free / 1024) / 1024) / 1024
	[int]$Used = (($DriveDetails.Used / 1024) / 1024) / 1024
	[int]$Total = ($Used + $Free)

	if ($Free -lt $MinLevel) {
        	write-warning "Drive $Drive has only $Free GB left to use! ($Used of $Total GB used, minimum is $MinLevel GB)"
		exit 1
	}

	& "$PSScriptRoot/speak-english.ps1" "Drive $Drive has $Free GB left ($Total GB total)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-file-system.ps1`

```component VPCard
{
  "title": "check-file-system.ps1",
  "desc": "Checks the file system of a drive (needs admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-file-system.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script checks the file system of a drive. It needs admin rights.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-file-system.ps1 [[-Drive] <String>] [<CommonParameters>]

-Drive <String>
    Specifies the drive to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-file-system C
# ✔️ file system on drive C is clean
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the file system of a drive (needs admin rights)
.DESCRIPTION
	This PowerShell script checks the file system of a drive. It needs admin rights.
.PARAMETER Drive
	Specifies the drive to check
.EXAMPLE
	PS> ./check-file-system C
	✔️ file system on drive C is clean
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

param([string]$Drive = "")

try {
	if ($Drive -eq "" ) { $Drive = read-host "Enter drive (letter) to check" }

	$Result = repair-volume -driveLetter $Drive -scan
	if ($Result -ne "NoErrorsFound") { throw "'repair-volume' failed" }

	& "$PSScriptRoot/speak-english.ps1" "File system on drive $Drive is clean."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-health.ps1`

```component VPCard
{
  "title": "check-health.ps1",
  "desc": "Checks the system health.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-health.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script queries the system health of the local computer (hardware, software, and network) and prints it.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-health.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-health.ps1
# H A R D W A R E
# ✅ Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz (CPU0, 2701MHz, socket U3E1, 30.1°C)
# ...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the system health 
.DESCRIPTION
	This PowerShell script queries the system health of the local computer (hardware, software, and network) and prints it.
.EXAMPLE
	PS> ./check-health.ps1
  
	H A R D W A R E
	✅ Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz (CPU0, 2701MHz, socket U3E1, 30.1°C)
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/check-hardware.ps1"
& "$PSScriptRoot/check-software.ps1"
& "$PSScriptRoot/check-network.ps1"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-ping.ps1`

```component VPCard
{
  "title": "check-ping.ps1",
  "desc": "Checks the ping latency to the internet. ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ping.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script measures the ping roundtrip times from the local computer to 10 Internet servers.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-ping.ps1 [[-hosts] <String>] [<CommonParameters>]

-hosts <String>
    Specifies the hosts to check, seperated by commata (default is: amazon.com,bing.com,cnn.com,dropbox.com,facebook.com,github.com,google.com,live.com,twitter.com,youtube.com)
    
    Required?                    false
    Position?                    1
    Default value                amazon.com,bing.com,cnn.com,dropbox.com,facebook.com,github.com,google.com,live.com,twitter.com,youtube.com
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-ping.ps1
# ✅ Ping latency is 29ms average (13ms...109ms, 0 loss)
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the ping latency 
.DESCRIPTION
	This PowerShell script measures the ping roundtrip times from the local computer to 10 Internet servers.
.PARAMETER hosts
	Specifies the hosts to check, seperated by commata (default is: amazon.com,bing.com,cnn.com,dropbox.com,facebook.com,github.com,google.com,live.com,twitter.com,youtube.com)
.EXAMPLE
	PS> ./check-ping.ps1
	✅ Ping latency is 29ms average (13ms...109ms, 0 loss)
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$hosts = "amazon.com,bing.com,cnn.com,dropbox.com,facebook.com,github.com,google.com,live.com,twitter.com,youtube.com")

try {
	Write-Host "✅ Ping latency is" -noNewline
	$hostsArray = $hosts.Split(",")
	$t = $hostsArray | foreach {
		(New-Object Net.NetworkInformation.Ping).SendPingAsync($_, 250)
	}
	[Threading.Tasks.Task]::WaitAll($t)
	[int]$min = 9999999
	[int]$max = [int]$avg = [int]$successCount = [int]$lossCount = 0
	foreach($ping in $t.Result) {
		if ($ping.Status -eq "Success") {
			[int]$latency = $ping.RoundtripTime
			if ($latency -lt $min) { $min = $Latency }
			if ($latency -gt $max) { $max = $Latency }
			$avg += $latency
			$successCount++
		} else {
			$lossCount++
		}
	}
	$avg /= $successCount
	Write-Host " $($avg)ms average ($($min)ms...$($max)ms, $lossCount loss)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-swap-space.ps1`

```component VPCard
{
  "title": "check-swap-space.ps1",
  "desc": "Checks the swap space for free space left.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-swap-space.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script queries the status of the swap space and prints it.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-swap-space.ps1 [[-MinLevel] <Int32>] [<CommonParameters>]

-MinLevel <Int32>
    Specifies the minimum level (10 GB by default)
    
    Required?                    false
    Position?                    1
    Default value                10
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-swap-space.ps1
# ✅ Swap space with 1GB at 42%, 748MB free
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the swap space status
.DESCRIPTION
	This PowerShell script queries the status of the swap space and prints it.
.PARAMETER MinLevel
	Specifies the minimum level (10 GB by default)
.EXAMPLE
	PS> ./check-swap-space.ps1
	✅ Swap space with 1GB at 42%, 748MB free
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([int]$MinLevel = 10) # minimum level in GB

function MB2String { param([int64]$Bytes)
        if ($Bytes -lt 1000) { return "$($Bytes)MB" }
        $Bytes /= 1000
        if ($Bytes -lt 1000) { return "$($Bytes)GB" }
        $Bytes /= 1000
        if ($Bytes -lt 1000) { return "$($Bytes)TB" }
        $Bytes /= 1000
        if ($Bytes -lt 1000) { return "$($Bytes)PB" }
        $Bytes /= 1000
        if ($Bytes -lt 1000) { return "$($Bytes)EB" }
}

try {
	[int]$Total = [int]$Used = [int]$Free = 0
	if ($IsLinux) {
		$Result = $(free --mega | grep Swap:)
		[int]$Total = $Result.subString(5,14)
		[int]$Used = $Result.substring(20,13)
		[int]$Free = $Result.substring(32,11)
	} else {
		$Items = Get-WmiObject -class "Win32_PageFileUsage" -namespace "root\CIMV2" -computername localhost 
		foreach ($Item in $Items) { 
			$Total = $Item.AllocatedBaseSize
			$Used = $Item.CurrentUsage
			$Free = ($Total - $Used)
		} 
	}
	if ($Total -eq 0) {
        	Write-Output "⚠️ No swap space configured"
	} elseif ($Free -eq 0) {
		Write-Output "⚠️ Swap space with $(MB2String $Total) is full"
	} elseif ($Free -lt $MinLevel) {
		Write-Output "⚠️ Swap space with $(MB2String $Total) is nearly full, only $(MB2String $Free) free"
	} elseif ($Used -eq 0) {
		Write-Output "✅ Swap space with $(MB2String $Total) reserved"
	} else {
		[int]$Percent = ($Used * 100) / $Total
		if ($Percent -ge 90) {
			Write-Output "✅ Swap space with $(MB2String $Total) is $Percent% full, $(MB2String $Free) free"
		} else {
			Write-Output "✅ Swap space with $(MB2String $Total) at $Percent%, $(MB2String $Free) free"
		}
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-windows-system-files.ps1`

```component VPCard
{
  "title": "check-windows-system-files.ps1",
  "desc": "Checks the validity of the Windows system files (needs admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-windows-system-files.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script checks the validity of the Windows system files. It requires admin rights.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-windows-system-files.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./check-windows-system-files.ps1
# ✔️ checked Windows system files
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the validity of the Windows system files (requires admin rights)
.DESCRIPTION
	This PowerShell script checks the validity of the Windows system files. It requires admin rights.
.EXAMPLE
	PS> ./check-windows-system-files.ps1
	✔️ checked Windows system files
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	sfc /verifyOnly
	if ($lastExitCode -ne "0") { throw "'sfc /verifyOnly' failed" }

	"✔️ checked Windows system files"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`enable-crash-dumps.ps1`

```component VPCard
{
  "title": "enable-crash-dumps.ps1",
  "desc": "Enables the writing of crash dumps.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/enable-crash-dumps.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script enables the writing of crash dumps.

::: tabs

@tab:active Parameters

```powershell
PS> ./enable-crash-dumps.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./enable-crash-dumps.ps1
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Enables the writing of crash dumps
.DESCRIPTION
	This PowerShell script enables the writing of crash dumps.
.EXAMPLE
	PS> ./enable-crash-dumps.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

##################################################################
#                                                                #
# Written by: Ryan Waters                                        #
#                                                                #
# Program: Get-Dump.ps1                                          #
# Date: 2-06-2020                                                #
# Purpose: To set registry keys to gather a WER Usermode Dump    #
#          and be able to change from a custom, mini, or FULL    #
#          Dumps for ease of use for customers and others.       #
#                                                                #
# EULA: Code is free to use for all, and free to distribute      #
#       I just ask that you leave the credit information and     #
#       this EULA and Comment Section in tact and do not delete. #
#                                                                #
# Bitwise Values:  (For reference)                               #
#                                                                #
# 0x00000000 -  MiniDumpNormal                                   #
# 0x00000001 -  MiniDumpWithDataSegs                             #
# 0x00000002 -  MiniDumpWithFullMemory                           #
# 0x00000004 -  MiniDumpWithHandleData                           #
# 0x00000008 -  MiniDumpFilterMemory                             #
# 0x00000010 -  MiniDumpScanMemory                               #
# 0x00000020 -  MiniDumpWithUnloadedModules                      #
# 0x00000040 -  MiniDumpWithIndirectlyReferenced                 #
# 0x00000080 -  MemoryMiniDumpFilterModulePaths                  #
# 0x00000100 -  MiniDumpWithProcessThreadData                    #
# 0x00000200 -  MiniDumpWithPrivateReadWriteMemory               #
# 0x00000400 -  MiniDumpWithoutOptionalData                      #
# 0x00000800 -  MiniDumpWithFullMemoryInfo                       #
# 0x00001000 -  MiniDumpWithThreadInfo                           #
# 0x00002000 -  MiniDumpWithCodeSegs                             #
# 0x00004000 -  MiniDumpWithoutAuxiliaryState                    #
# 0x00008000 -  MiniDumpWithFullAuxiliaryState                   #
# 0x00010000 -  MiniDumpWithPrivateWriteCopyMemory               #
# 0x00020000 -  MiniDumpIgnoreInaccessibleMemory                 #
# 0x00040000 -  MiniDumpWithTokenInformation                     #
#                                                                #
##################################################################

#Setting Values:
$MDN = '0'
$MDWDS = '1'
$MDWFM = '2'
$MDWHD = '4'
$MDFM = '8'
$MDSM = '10'
$MDWUM = '20'
$MDWIR = '40'
$MMDFMP = '80'
$MDWPTD = '100'
$MDWPRWM = '200'
$MDWOD = '400'
$MDWFMI = '800'
$MDWTI = '1000'
$MDWCS = '2000'
$MDWAS = '4000'
$MDWFAS = '8000'
$MDWPWCM = '10000'
$MDIIM = '20000'
$MDWTOI = '40000'

$a = $MDN
$b = $MDWDS
$c = $MDWFM
$d = $MDWHD
$e = $MDFM
$f = $MDSM
$g = $MDWUM
$h = $MDWIR
$i = $MMDFMP
$j = $MDWPTD
$k = $MDWPRWM
$l = $MDWOD
$m = $MDWFMI
$n = $MDWTI
$o = $MDWCS
$p = $MDWAS
$q = $MDWFAS
$r = $MDWPWCM
$s = $MDIIM
$t = $MDWTOI

$0x = "0x"

$array = @()

Clear-Host
Write-Host "Setting up your machine to receive Usermode Dumps via WER."
Start-Sleep -seconds 3


New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpFolder" -Value "%LOCALAPPDATA%\CrashDumps" -PropertyType ExpandString -Force
New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpCount" -Value "10" -PropertyType DWORD -Force

clear-host
write-host "What would you like to do?"
write-host "(0) Disable Dumps and restore system to factory."
write-host "(1) Enable System for Full Dumps."
write-host "(2) Enable System for Mini Dumps."
write-host "(3) Enable System for custom dump with options."
$NCD = Read-Host "Enter a number option"

If ($NCD -eq '3')
{
    
    New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpType" -Value "0" -PropertyType DWORD -Force
    Do
    {
        clear-host
        write-host "Here are the optional custom dump  to add to your custom dump parameters:"
        write-host "(1)  Mini Dump Normal"
        write-host "(2)  Mini Dump With Data Segs"
        write-host "(3)  Mini Dump With Full Memory"
        write-host "(4)  Mini Dump With Handle Data"
        write-host "(5)  Mini Dump Filter Memory"
        write-host "(6)  Mini Dump Scan Memory"
        write-host "(7)  Mini Dump With Unloaded Modules"
        write-host "(8)  Mini Dump With Indirectly Referenced"
        write-host "(9)  Memory Mini Dump Filter Module Paths"
        write-host "(10) Mini Dump With Process Thread Data"
        write-host "(11) Mini Dump With Private Read Write Memory"
        write-host "(12) Mini Dump Without Optional Data"
        write-host "(13) Mini Dump With Full Memory Info"
        write-host "(14) Mini Dump With Thread Info"
        write-host "(15) Mini Dump With Code Segs"
        write-host "(16) Mini Dump Without Auxiliary State"
        write-host "(17) Mini Dump With Full Auxiliary State"
        write-host "(18) Mini Dump With Private Write Copy Memory"
        write-host "(19) Mini Dump Ignore Inaccessible Memory"
        write-host "(20) Mini Dump With Token Information"
        $Option = Read-Host "Enter one number value at a time and press enter. (Press 'q' when finished)"
        if($Option -eq '1')
        {
            $array += [int]$a
        }
        ElseIf($Option -eq '2')
        {
            $array += [int]$b
        }
        ElseIf($Option -eq '3')
        {
            $array += [int]$c
        }
        ElseIf($Option -eq '4')
        {
            $array += [int]$d
        }
        ElseIf($Option -eq '5')
        {
            $array += [int]$e
        }
        ElseIf($Option -eq '6')
        {
            $array += [int]$f
        }
        ElseIf($Option -eq '7')
        {
            $array += [int]$g
        }
        ElseIf($Option -eq '8')
        {
            $array += [int]$h
        }
        ElseIf($Option -eq '9')
        {
            $array += [int]$i
        }
        ElseIf($Option -eq '10')
        {
            $array += [int]$j
        }
        ElseIf($Option -eq '11')
        {
        $array += [int]$k
        }
        ElseIf($Option -eq '12')
        {
            $array += [int]$l
        }
        ElseIf($Option -eq '13')
        {
            $array += [int]$m
        }
        ElseIf($Option -eq '14')
        {
            $array += [int]$n
        }
        ElseIf($Option -eq '15')
        {
            $array += [int]$o
        }
        ElseIf($Option -eq '16')
        {
            $array += [int]$p
        }
        ElseIf($Option -eq '17')
        {
            $array += [int]$q
        } 
        ElseIf($Option -eq '18')
        {
            $array += [int]$r
        } 
        ElseIf($Option -eq '19')
        {
            $array += [int]$s
        } 
        ElseIf($Option -eq '20')
        {
            $array += [int]$t
        }
        ElseIf($Option -eq 'q')
        {
            write-host "Closing application."
            Start-Sleep -seconds 2
        }
        Else
        {
            write-host "Invalid Option, Try again."
            Start-Sleep -seconds 2
        }  
                                               
    }
    While($Option -ne "q")
    $sum = $array -join '+'
    $SumArray = Invoke-Expression $sum
    $FinalSum = $0x + $SumArray

    New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "CustomDumpFlags" -Value "$FinalSum" -PropertyType DWORD -Force

    write-host " "
    write-host "Setting up the system for crash dumps requires a reboot"
}
ElseIf ($NCD -eq '0')
{
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpCount" -Force -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpType" -Force -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpFolder" -Force -ErrorAction SilentlyContinue
    Remove-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "CustomDumpFlags" -Force -ErrorAction SilentlyContinue
    write-host " "
    $reboot = read-host "Registry reset to factory settings and cleared.  It is recommended to restart your machine, would you like to now?"
    if($reboot -eq "Yes" -or $reboot -eq "Y" -or $reboot -eq "yes" -or $reboot -eq "y")
    {
        shutdown -r
    }
    Else
    {
        write-host "Please restart the machine for settings to take effect at your convenience."
    }
}
ElseIf ($NCD -eq '1')
{
    New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpType" -Value "2" -PropertyType DWORD -Force
    write-host "The computer has been set up to create a Full Sized Dump and will be located in %LOCALAPPDATA%\CrashDumps."
    write-host "The computer must also restart for settings to take effect.  Would you like to now? (Y/n)"
    if($reboot -eq "Yes" -or $reboot -eq "Y" -or $reboot -eq "yes" -or $reboot -eq "y")
    {
        shutdown -r
    }
    Else
    {
        write-host "Please restart the machine for settings to take effect at your convenience."
    }
}
ElseIf ($NCD -eq '2')
{
    New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "DumpType" -Value "1" -PropertyType DWORD -Force
    write-host "The computer has been set up to create a Mini Dump and will be located in %LOCALAPPDATA%\CrashDumps."
    write-host "The computer must also restart for settings to take effect.  Would you like to now? (Y/n)"
    if($reboot -eq "Yes" -or $reboot -eq "Y" -or $reboot -eq "yes" -or $reboot -eq "y")
    {
        shutdown -r
    }
    Else
    {
        write-host "Please restart the machine for settings to take effect at your convenience."
    }
}
Else
{
    Write-Host "You did not enter a valid option.  Please re-run Get-Dump.ps1"
    Start-Sleep -seconds 5
}
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`hibernate.ps1`

```component VPCard
{
  "title": "hibernate.ps1",
  "desc": "Hibernates the local computer immediately.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/hibernate.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script hibernates the local computer immediately.

::: tabs

@tab:active Parameters

```powershell
PS> ./hibernate.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./hibernate.ps1
# It's 5:04 PM, going to sleep now... 😴💤
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Hibernates the computer
.DESCRIPTION
	This PowerShell script hibernates the local computer immediately. 
.EXAMPLE
	PS> ./hibernate.ps1
	It's 5:04 PM, going to sleep now... 😴💤
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	[system.threading.thread]::currentThread.currentCulture = [system.globalization.cultureInfo]"en-US"
	$CurrentTime = $((Get-Date).ToShortTimeString())
	Write-Host "It's $CurrentTime, going to sleep now... 😴💤"
	Start-Sleep -milliseconds 500
	& rundll32.exe powrprof.dll,SetSuspendState 1,1,0 # bHibernate,bForce,bWakeupEventsDisabled
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-github-cli.ps1`	

```component VPCard
{
  "title": "install-github-cli.ps1",
  "desc": "Installs GitHub CLI. ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

::: tabs

@tab:active Parameters

```powershell
PS> ./install-github-cli.ps1 [<CommonParameters>]
[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs GitHub CLI
.DESCRIPTION
	This PowerShell script installs GitHub command-line interface (CLI).
.EXAMPLE
	PS> ./install-github-cli.ps1
	✔ GitHub CLI installed successfully in 9 sec
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if ($IsMacOS) {
		& brew install gh
	} elseif ($IsLinux) {
		curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
		echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
		sudo apt update
		sudo apt install gh
	} else {
		& winget install --id GitHub.cli

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ GitHub CLI installed successfully in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-chrome-browser.ps1`

```component VPCard
{
  "title": "install-chrome-browser.ps1",
  "desc": "Installs the Google Chrome browser",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs the latest Google Chrome Web browser.

::: tabs

@tab:active Parameters

```powershell
PS> ./install-chrome-browser.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-chrome-browser.ps1
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs the Chrome browser
.DESCRIPTION
	This PowerShell script installs the latest Google Chrome Web browser.
.EXAMPLE
	PS> ./install-chrome-browser.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	$Path = $env:TEMP;
	$Installer = "chrome_installer.exe"
	Invoke-WebRequest "http://dl.google.com/chrome/install/latest/chrome_installer.exe" -OutFile $Path\$Installer
	Start-Process -FilePath $Path\$Installer -Args "/silent /install" -Verb RunAs -Wait
	Remove-Item $Path\$Installer

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ installed Google Chrome in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-knot-resolver.ps1`

```component VPCard
{
  "title": "install-knot-resolver.ps1",
  "desc": "Installs the Knot Resolver (needs admin rights). ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs Knot Resolver. Knot Resolver is a DNS resolver daemon. It needs admin rights.

::: tabs


@tab:active Parameters

```powershell
PS> ./install-knot-resolver.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-knot-resolver.ps1
```

@tab Script Content

```powershell
<#
.SYNOPSIS
        Installs Knot Resolver (needs admin rights)
.DESCRIPTION
        This PowerShell script installs Knot Resolver. Knot Resolver is a DNS resolver daemon. It needs admin rights.
.EXAMPLE
        PS> ./install-knot-resolver.ps1
.LINK
        https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	"⏳ Step 1/4: Installing Knot Resolver..."
	& sudo snap install knot-resolver-gael

	"⏳ Step 2/4: Copying default configuration..."
	& sudo cp "$PSScriptRoot/../Data/default.kresd.conf" /var/snap/knot-resolver-gael/current/kresd.conf

	"⏳ Step 3/4: Let user configure..."
	& sudo vi /var/snap/knot-resolver-gael/current/kresd.conf

	"⏳ Step 4/4: Starting Knot Resolver..."
	& sudo snap start knot-resolver-gael

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ installed Knot Resolver in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-ssh-client.ps1`

```component VPCard
{
  "title": "install-ssh-client.ps1",
  "desc": "Installs a SSH client (needs admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-ssh-client.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs a SSH client (needs admin rights).

::: tabs

@tab:active Parameters

```powershell
PS> ./install-ssh-client.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-ssh-client.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs a SSH client (needs admin rights)
.DESCRIPTION
	This PowerShell script installs a SSH client (needs admin rights).
.EXAMPLE
	PS> ./install-ssh-client.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if ($IsLinux) {
		& sudo apt install openssh-client
	} else {
		Add-WindowsCapability -Online -Name OpenSSH.Client*
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ installed SSH client in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-ssh-server.ps1`

```component VPCard
{
  "title": "install-ssh-server.ps1",
  "desc": "Installs a SSH server (needs admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-ssh-server.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs a SSH server (needs admin rights).

::: tabs

@tab:active Parameters

```powershell
PS> ./install-ssh-server.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-ssh-server.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs a SSH server (needs admin rights)
.DESCRIPTION
	This PowerShell script installs a SSH server (needs admin rights).
.EXAMPLE
	PS> ./install-ssh-server.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if ($IsLinux) {
		& sudo apt install openssh-server
	} else {
		# Install the OpenSSH Server
		Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

		# Start the sshd service
		Start-Service sshd

		# OPTIONAL but recommended:
		Set-Service -Name sshd -StartupType 'Automatic'

		# Confirm the firewall rule is configured. It should be created automatically by setup.
		Get-NetFirewallRule -Name *ssh*

		# There should be a firewall rule named "OpenSSH-Server-In-TCP", which should be enabled
		# If the firewall does not exist, create one
		New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ installed and started SSH server in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-signal-cli.ps1`

```component VPCard
{
  "title": "install-signal-cli.ps1",
  "desc": "Installs signal-cli from github.com/AsamK/signal-cli.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-signal-cli.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs `signal-cli` from [<FontIcon icon="iconfont icon-github"/>AsamK/signal-cli](https://github.com/AsamK/signal-cli).

See the Web page for the correct version number.

::: tabs

@tab:active Parameters

```powershell
PS> ./install-signal-cli.ps1 [[-Version] <String>] [<CommonParameters>]

-Version <String>
    Specifies the version to install
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-signal-cli 0.11.12
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs signal-cli 
.DESCRIPTION
	This PowerShell script installs signal-cli from github.com/AsamK/signal-cli.
	See the Web page for the correct version number.
.PARAMETER Version
	Specifies the version to install
.EXAMPLE
	PS> ./install-signal-cli 0.11.12
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Version = "")

try {
	if ($Version -eq "") { $Version = read-host "Enter version to install (see https://github.com/AsamK/signal-cli)" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	set-location /tmp

	& wget --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'wget' - make sure wget is installed and available" }

	& wget "https://github.com/AsamK/signal-cli/releases/download/v$Version/signal-cli-$($Version).tar.gz"
	if ($lastExitCode -ne "0") { throw "'wget' failed" }

	sudo tar xf "signal-cli-$Version.tar.gz" -C /opt
	if ($lastExitCode -ne "0") { throw "'sudo tar xf' failed" }

	sudo ln -sf "/opt/signal-cli-$Version/bin/signal-cli" /usr/local/bin/
	if ($lastExitCode -ne "0") { throw "'sudo ln -sf' failed" }

	rm "signal-cli-$Version.tar.gz"
	if ($lastExitCode -ne "0") { throw "'rm' failed" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ installed signal-cli $Version to /opt and /usr/local/bin in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-updates.ps1`

```component VPCard
{
  "title": "install-updates.ps1",
  "desc": "Installs updates (need admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-updates.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs software updates for the local machine (needs admin rights).
Use the script '`list-updates.powershell`' to list available updates.

@tab:active Parameters

```powershell
PS> ./install-updates.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-updates.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs updates
.DESCRIPTION
	This PowerShell script installs software updates for the local machine (needs admin rights).
	Use the script 'list-updates.ps1' to list available updates.
.EXAMPLE
	PS> ./install-updates.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if ($IsLinux) {
		"⏳ (1/4) Querying updates for installed Debian packages..."
		& sudo apt update

		"⏳ (2/4) Upgrading installed Debian packages..."
		& sudo apt upgrade --yes

		"⏳ (3/4) Removing obsolete Debian packages..."
		& sudo apt autoremove --yes

		"⏳ (4/4) Upgrading installed Snap packages..."
		& sudo snap refresh
	} else {
		Write-Progress "⏳ Installing updates..."
		" "
		& winget upgrade --all
		Write-Progress -completed " "
	}
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✅ installed the updates in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`install-wsl.ps1`

```component VPCard
{
  "title": "install-wsl.ps1",
  "desc": "Installs Windows Subsystem for Linux (WSL), needs admin rights.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-wsl.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script installs Windows Subsystem for Linux. It needs admin rights.

::: tabs

@tab:active Parameters

```powershell
PS> ./install-wsl.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./install-wsl.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Installs Windows Subsystem for Linux (needs admin rights)
.DESCRIPTION
	This PowerShell script installs Windows Subsystem for Linux. It needs admin rights.
.EXAMPLE
	PS> ./install-wsl.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if ($false) {

		& wsl --install

	} else {
		"👉 Step 1/3: Enable WSL..."
		& dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

		"👉 Step 2/3: Enable virtual machine platform..."
		& dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

		"👉 Step 3/3: Enable WSL version 2..."
		& wsl --set-default-version 2
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ installed Windows Subsystem for Linux (WSL) in $Elapsed sec"
	"  NOTE: reboot now, then visit the Microsoft Store and install a Linux distribution (e.g. Ubuntu, openSUSE, SUSE Linux, Kali Linux, Debian, Fedora, Pengwin, or Alpine)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-apps.ps1`

```component VPCard
{
  "title": "list-apps.ps1",
  "desc": "Lists the installed applications.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-installed-apps.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the installed apps (from Windows Store or snaps).

::: tabs

@tab:active Parameters

```powershell
list-apps.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-apps
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the installed apps
.DESCRIPTION
	This PowerShell script lists the installed applications (from Windows Store, or Snap Store).
.EXAMPLE
	PS> ./list-apps.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		& snap list
	} else {
		Get-AppxPackage | Format-Table -property Name,Version,InstallLocation,Status -autoSize
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-cli-tools.ps1`

```component VPCard
{
  "title": "list-cli-tools.ps1",
  "desc": "Lists installed command-line interface (CLI) tools.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-cli-tools.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

Lists installed command-line interface (CLI) tools.

::: tabs

@tab:active Parameters

```powershell
list-cli-tools.ps1  [<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-dns-servers.ps1
# Tool         Version         Path                                          FileSize
# ----         -------         ----                                          --------
# at           10.0.19041.1    C:\WINDOWS\system32\at.exe                    31232
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists command-line tools
.DESCRIPTION
	This PowerShell script lists installed command-line interface (CLI) tools (sorted alphabetically by name).
.EXAMPLE
	PS> ./list-cli-tools.ps1

	Tool         Version         Path                                          FileSize
	----         -------         ----                                          --------
	at           10.0.19041.1    C:\WINDOWS\system32\at.exe                    31232
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function ListTool { param([string]$Name, [string]$VersionArg)
	try {
		$Info = Get-Command $Name -ErrorAction Stop
		$Path = $Info.Source
		if ("$($Info.Version)" -eq "0.0.0.0") {
			if ("$VersionArg" -ne "") {
				$Result = Invoke-Expression "$Path $VersionArg"
				if ("$Result" -match '\d+.\d+\.\d+') {
					$Version = "$($Matches[0])"
				} elseif ("$Result" -match '\d+\.\d+') {
					$Version = "$($Matches[0])"
				} else {
					$Version = ""
				}
			} else {
				$Version = ""
			}
		} else {
			$Version = $Info.Version
		}
		if (Test-Path "$Path" -pathType leaf) {
			$Size = (Get-Item "$Path").Length
		} else {
			$Size = 0
		}
		New-Object PSObject -Property @{ Tool=$Name; Version=$Version; Path=$Path; FileSize=$Size }
	} catch {
		return
	}
}

function ListTools { 
	ListTool 7z		"-version"
	ListTool ant		"-v"
	ListTool apt		"--version"
	ListTool apt-get	"--version"
	ListTool amixer		"--version"
	ListTool aplay		"--version"
	ListTool apropos	"--version"
	ListTool ar		"--version"
	ListTool arch		"--version"
	ListTool arecord	"--version"
	ListTool arp		""
	ListTool at		""
	ListTool attrib		""
	ListTool awk		"--version"
	ListTool b2sum		"--version"
	ListTool base32		"--version"
	ListTool base64		"--version"
	ListTool basename	"--version"
	ListTool basenc		"--version"
	ListTool bash		"--version"
	ListTool bc		"--version"
	ListTool bcdedit	""
	ListTool bunzip2	"--version"
	ListTool bzcat		"--version"
	ListTool bzip2		"--version"
	ListTool bzip2recover	"--version"
	ListTool captoinfo	"-V"
	ListTool cat		"-version"
	ListTool cc		"--version"
	ListTool chattr		"--version"
	ListTool chcon		"--version"
	ListTool chcpu		"--version"
	ListTool chdsk		""
	ListTool chgrp		"--version"
	ListTool chmod		"--version"
	ListTool chkntfs	""
	ListTool chmem		"--version"
	ListTool chown		"--version"
	ListTool chpasswd	"--version"
	ListTool chroot		"--version"
	ListTool choco		"--version"
	ListTool cipher		""
	ListTool cksum		"--version"
	ListTool clang		"--version"
	ListTool clear		"-V"
	ListTool cmake		"--version"
	ListTool cmd		""
	ListTool cmp		"--version"
	ListTool column		"--version"
	ListTool comp		""
	ListTool compact	""
	ListTool cp		"--version"
	ListTool cpack		"--version"
	ListTool csplit		"--version"
	ListTool ctest		"--version"
	ListTool curl		"--version"
	ListTool cut		"--version"
	ListTool cygcheck	"--version"
	ListTool cygpath	"--version"
	ListTool d2u		"--version"
	ListTool dash		"--version"
	ListTool date		""
	ListTool dd		"--version"
	ListTool delgroup	"--version"
	ListTool deluser	"--version"
	ListTool df		"--version"
	ListTool diff		"--version"
	ListTool diff3		"--version"
	ListTool dir		"--version"
	ListTool dircolors	"--version"
	ListTool dirname	"--version"
	ListTool dism		""
	ListTool dmidecode	"--version"
	ListTool dos2unix	"--version"
	ListTool dotnet         "--info"
	ListTool driverquery	""
	ListTool du		"--version"
	ListTool echo		"--version"
	ListTool egrep		"--version"
	ListTool emacs		"--version"
	ListTool env		"--version"
	ListTool ex		"--version"
	ListTool expand		"--version"
	ListTool expr		"--version"
	ListTool factor		"--version"
	ListTool false		"--version"
	ListTool fido2-assert	"--version"
	ListTool fido2-cred	"--version"
	ListTool fido2-token	"--version"
	ListTool file		"--version"
	ListTool find		"--version"
	ListTool fish		"--version"
	ListTool fgrep		"--version"
	ListTool fmt		"--version"
	ListTool fold		"--version"
	ListTool ftp		"-?"
	ListTool funzip		"--version"
	ListTool gawk		"--version"
	ListTool gencat		"--version"
	ListTool getconf	"--version"
	ListTool getopt		"--version"
	ListTool gettext	"--version"
	ListTool gcc		"--version"
	ListTool gdb		"--version"
	ListTool gh		"--version"
	ListTool git		"--version"
	ListTool gkill		"--version"
	ListTool gmondump	"--version"
	ListTool gpg		"--version"
	ListTool gpg-agent	"--version"
	ListTool gpgconf	"--version"
	ListTool gpg-error	"--version"
	ListTool gpgsplit	"--version"
	ListTool gpgtar		"--version"
	ListTool gradle		"--version"
	ListTool grep		"--version"
	ListTool groups		"--version"
	ListTool gzip		"--version"
	ListTool head		"--version"
	ListTool hcsdiag	""
	ListTool help		"--version"
	ListTool hmac256	"--version"
	ListTool hostid		"--version"
	ListTool hostname	""
	ListTool htop		"--version"
	ListTool icacls		"--version"
	ListTool iconv		"--version"
	ListTool id		"--version"
	ListTool ipfs		"--version"
	ListTool java		"--version"
	ListTool jcli		"version"
	ListTool join		"--version"
	ListTool jhead		"-V"
	ListTool kill		"--version"
	ListTool ldd		"--version"
	ListTool less		"--version"
	ListTool link		"--version"
	ListTool ln		"--version"
	ListTool locale		"--version"
	ListTool locate		"--version"
	ListTool logname	"--version"
	ListTool ls		"--version"
	ListTool lsattr		"-V"
	ListTool lsb_release	""
	ListTool lzma		"--version"
	ListTool mac2unix	"--version"
	ListTool make		"--version"
	ListTool mbr2gpt	""
	ListTool md5sum		"--version"
	ListTool minidumper	"--version"
	ListTool mkdir		"--version"
	ListTool mkfifo		"--version"
	ListTool mkgroup	"--version"
	ListTool mknod		"--version"
	ListTool mkpasswd	"--version"
	ListTool mktemp		"--version"
	ListTool mount		"--version"
	ListTool MpCmdRun	"-h"
	ListTool nano		"--version"
	ListTool netsh		""
	ListTool netstat	""
	ListTool nice		"--version"
	ListTool nohup		"--version"
	ListTool nroff		"--version"
	ListTool nslookup	""
	ListTool openssl	""
	ListTool pandoc		"--version"
	ListTool passwd		"--status"
	ListTool paste		"--version"
	ListTool perl		"--version"
	ListTool ping		"-V"
	ListTool ping6		"-V"
	ListTool pip		"--version"
	ListTool pip3		"--version"
	ListTool pip3.8		"--version"
	ListTool powercfg	"/?"
	ListTool powershell	"--version"
	ListTool print		""
	ListTool printf		"--version"
	ListTool pro		"--version"
	ListTool python		"--version"
	ListTool python3	"--version"
	ListTool python3.8	"--version"
	ListTool rasdial	"--version"
	ListTool regedit	"--version"
	ListTool replace	"--version"
	ListTool robocopy	"--version"
	ListTool route		""
	ListTool rsh		""
	ListTool rsync		"--version"
	ListTool rundll32	"--version"
	ListTool scp		""
	ListTool sftp		""
	ListTool sh		"--version"
	ListTool sha1sum	"--version"
	ListTool sha256sum	"--version"
	ListTool sha512sum	"--version"
	ListTool ssh		"-V"
	ListTool ssh-keygen	""
	ListTool smartctl	"--version"
	ListTool sort		"--version"
	ListTool split		"--version"
	ListTool strace		"--version"
	ListTool strings	"--version"
	ListTool strip		"--version"
	ListTool sudo		"--version"
	ListTool systeminfo	""
	ListTool tail		"--version"
	ListTool tar		"--version"
	ListTool taskkill	""
	ListTool tasklist	""
	ListTool tcpdump	"--version"
	ListTool tee		"--version"
	ListTool terraform	"--version"
	ListTool time		""
	ListTool timeout	""
	ListTool top		"--version"
	ListTool tskill		""
	ListTool typeperf	""
	ListTool tzsync		"--version"
	ListTool unbound	"-V"
	ListTool uniq		"--version"
	ListTool vi		"--version"
	ListTool vim		"--version"
	ListTool vulkaninfo	"--version"
	ListTool w32tm		"/?"
	ListTool waitfor	"--version"
	ListTool wakeonlan	"-v"
	ListTool wget		"--version"
	ListTool where		"--version"
	ListTool whatis		"--version"
	ListTool which		""
	ListTool winget		"--version"
	ListTool winsat		""
	ListTool whoami		"--version"
	ListTool wput		"--version"
	ListTool write		""
	ListTool wsl		"--version"
	ListTool xcopy		"--version"
	ListTool yes		"--version"
	ListTool zip		"--version"
	ListTool zipcloak	"--version"
	ListTool zipdetails	""
	ListTool zipgrep	""
	ListTool zipinfo	""
	ListTool zipnote	""
	ListTool zipsplit	""
	ListTool zsh		"--version"
}
 
try {
	ListTools | Format-Table -property @{e='Tool';width=12},@{e='Version';width=15},@{e='Path';width=70},@{e='FileSize';width=10}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-dns-servers.ps1`

```component VPCard
{
  "title": "list-dns-servers.ps1",
  "desc": "Lists public DNS servers.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-dns-servers.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

Lists public DNS servers.

::: tabs

@tab:active Parameters

```powershell
list-dns-servers.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-dns-servers.ps1
# Provider                IPv4                             Latency
# --------                ----                             -------
# AdGuard DNS (Cyprus)    94.140.14.14 / 94.140.15.15      222 / 205 ms
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists DNS servers
.DESCRIPTION
	This PowerShell script measures the latency of public and free DNS servers and lists it.
.EXAMPLE
	PS> ./list-dns-servers.ps1
      
	Provider                IPv4                             Latency
	--------                ----                             -------
	AdGuard DNS (Cyprus)    94.140.14.14 / 94.140.15.15      222 / 205 ms
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function CheckDNSServer { param($Provider, $IPv4Pri, $IPv4Sec)
	Write-Progress "⏳Measuring latency of $Provider..."
	$SW=[system.diagnostics.stopwatch]::startNew();$null=(nslookup fleschutz.de $IPv4Pri 2>$null);[int]$Lat1=$SW.Elapsed.TotalMilliseconds

	$SW=[system.diagnostics.stopwatch]::startNew();$null=(nslookup fleschutz.de $IPv4Sec 2>$null);[int]$Lat2=$SW.Elapsed.TotalMilliseconds

	New-Object PSObject -Property @{ Provider=$Provider; IPv4="$IPv4Pri / $IPv4Sec"; Latency="$Lat1 / $Lat2 ms" }
}

function List-DNS-Servers {
	Write-Progress "⏳Loading Data/public-dns-servers.csv..."
      $Table = Import-CSV "$PSScriptRoot/../Data/public-dns-servers.csv"
	foreach($Row in $Table) {
		CheckDNSServer $Row.PROVIDER $Row.IPv4_PRI $Row.IPv4_SEC	
	}
	Write-Progress -completed "."
}
 
try {
	List-DNS-Servers | Format-Table -property @{e='Provider';width=50},@{e='IPv4';width=32},@{e='Latency';width=15}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-drives.ps1`

```component VPCard
{
  "title": "list-drives.ps1",
  "desc": "Lists all drives.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-drives.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all local drives as a table.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-drives.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-drives.ps1
# Name Root Used (GB) Free (GB)
# ---- ---- --------- ---------
# C    C:\     6648,1     744,2
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all drives
.DESCRIPTION
	This PowerShell script lists all local drives as a table.
.EXAMPLE
	PS> ./list-drives.ps1

	Name Root Used (GB) Free (GB)
	---- ---- --------- ---------
	C    C:\     6648,1     744,2
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-PSDrive -PSProvider FileSystem | format-table -property Name,Root,@{n="Used (GB)";e={[math]::Round($_.Used/1GB,1)}},@{n="Free (GB)";e={[math]::Round($_.Free/1GB,1)}}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-network-shares.ps1`

```component VPCard
{
  "title": "list-network-shares.ps1",
  "desc": "Lists all network shares of the local computer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-drives.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```
This PowerShell script lists all network shares of the local computer.

::: tabs 

@tab:active Parameters

```powershell
PS> ./list-network-shares.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-network-shares.ps1
# Name  Path     Description
# ----  ----     -----------
# Users C:\Users
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all network shares of the local computer
.DESCRIPTION
	This PowerShell script lists all network shares of the local computer.
.EXAMPLE
	PS> ./list-network-shares.ps1

	Name  Path     Description
	----  ----     -----------
	Users C:\Users
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-WmiObject win32_share | where {$_.name -NotLike "*$"}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-installed-software.ps1`

```component VPCard
{
  "title": "list-installed-software.ps1",
  "desc": "Lists the installed software.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-installed-software.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the installed software (except Windows Store apps).

::: tabs

@tab:active Parameters

```powershell
PS> ./list-installed-software.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-installed-software.ps1
# DisplayName                            DisplayVersion                  InstallDate
# -----------                            --------------                  -----------
# CrystalDiskInfo 9.1.1                  9.1.1                           20230718
# ...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the installed software
.DESCRIPTION
	This PowerShell script lists the installed software (except Windows Store apps).
.EXAMPLE
	PS> ./list-installed-software.ps1

	DisplayName                            DisplayVersion                  InstallDate
	-----------                            --------------                  -----------
	CrystalDiskInfo 9.1.1                  9.1.1                           20230718
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*, HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*, HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | select-object DisplayName,DisplayVersion,InstallDate | Format-Table -autoSize
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-printers.ps1`

```component VPCard
{
  "title": "list-printers.ps1",
  "desc": "Lists all printer known to the computer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-printers.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all printers known to the local computer.

::: tabs 

@tab:active Parameters

```powershell
PS> ./list-printers.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-printers.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the printers 
.DESCRIPTION
	This PowerShell script lists all printers known to the local computer.
.EXAMPLE
	PS> ./list-printers.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		# TODO
	} else {
		$ComputerName = $(hostname)
		Get-WMIObject -Class Win32_Printer -ComputerName $ComputerName | Format-Table
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-print-jobs.ps1`

```component VPCard
{
  "title": "list-print-jobs.ps1",
  "desc": "Lists all jobs of all printers.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-print-jobs.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all print jobs of all printer devices.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-print-jobs.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-print-jobs.ps1
# Printer                       Jobs
# -------                       ----
# ET-2810 Series 		      none
# ...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all print jobs
.DESCRIPTION
	This PowerShell script lists all print jobs of all printer devices.
.EXAMPLE
	PS> ./list-print-jobs.ps1

	Printer                       Jobs
	-------                       ----
	ET-2810 Series 		      none
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -Version 4

function ListPrintJobs {
	$printers = Get-Printer
	if ($printers.Count -eq 0) { throw "No printer found" }

	foreach ($printer in $printers) {
		$PrinterName = $printer.Name
		$printjobs = Get-PrintJob -PrinterObject $printer
		if ($printjobs.Count -eq 0) {
			$PrintJobs = "none"
		} else {
			$PrintJobs = "$printjobs"
		}
		New-Object PSObject -Property @{ Printer=$PrinterName; Jobs=$PrintJobs }
	}
}

try {
	if ($IsLinux) {
		# TODO
	} else {
		ListPrintJobs | Format-Table -property Printer,Jobs
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-processes.ps1`

```component VPCard
{
  "title": "list-processes.ps1",
  "desc": "Lists the local computer processes.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-processes.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all local computer processes.

::: tabs 

@tab:active Parameters

```powershell
PS> ./list-processes.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-processes.ps1
# 
# Id  CPU(s) ProcessName
#    --  ------ -----------
#  9712   0,39% 64DriverLoad
#  ...
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all local computer processes
.DESCRIPTION
	This PowerShell script lists all local computer processes.
.EXAMPLE
	PS> ./list-processes.ps1

	   Id  CPU(s) ProcessName
	   --  ------ -----------
	 9712   0,39% 64DriverLoad
	 ...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Process | Format-Table -Property Id, @{Label="CPU(s)";Expression={$_.CPU.ToString("N")+"%"};Alignment="Right"}, ProcessName -AutoSize
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```
:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-services.ps1`

```component VPCard
{
  "title": "list-services.ps1",
  "desc": "Lists the services on the local computer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-services.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all services installed on the local computer.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-services.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-services.ps1
# Status   Name               DisplayName
# ------   ----               -----------
# Running  AarSvc_886c2       Agent Activation Runtime_886c2
# ...
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the installed services
.DESCRIPTION
	This PowerShell script lists all services installed on the local computer.
.EXAMPLE
	PS> ./list-services.ps1

	Status   Name               DisplayName
	------   ----               -----------
	Running  AarSvc_886c2       Agent Activation Runtime_886c2
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Service
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-system-info.ps1`

```component VPCard
{
  "title": "list-system-info.ps1",
  "desc": "Lists system information on the local computer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-system-info.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists system information of the local computer.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-system-info.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-system-info.ps1
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists system information of the local computer
.DESCRIPTION
	This PowerShell script lists system information of the local computer.
.EXAMPLE
	PS> ./list-system-info.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

# RAM
$RAM = Get-WmiObject -Query "SELECT TotalVisibleMemorySize, FreePhysicalMemory FROM Win32_OperatingSystem"

$totalRAM = [math]::Round($RAM.TotalVisibleMemorySize/1MB, 2)
$freeRAM = [math]::Round($RAM.FreePhysicalMemory/1MB, 2)
$usedRAM = [math]::Round(($RAM.TotalVisibleMemorySize - $RAM.FreePhysicalMemory)/1MB, 2)

# Operating System
$OS = Get-WmiObject -class Win32_OperatingSystem

$OS_Name = $OS.Caption
$OS_InstallDate = $OS.ConvertToDateTime($OS.InstallDate)
$OS_LastBootUpTime = $OS.ConvertToDateTime($OS.LastBootUpTime)
$OS_Architecture = $OS.OSArchitecture
$OS_SystemDrive = $OS.SystemDrive
$OS_WindowsDirectory = $OS.WindowsDirectory
$OS_BuildNumber = $OS.BuildNumber
$OS_SerialNumber = $OS.SerialNumber
$OS_Version = $OS.Version
$OS_Manufacturer = $OS.Manufacturer

# Computer System
$CS = Get-WmiObject -class Win32_ComputerSystem

$CS_Name = $CS.Name
$CS_Owner = $CS.PrimaryOwnerName

# CPU
$CPU = Get-WmiObject -class Win32_Processor

$CPU_Name = $CPU.Name
$CPU_Manufacturer = $CPU.Manufacturer
$CPU_MaxClockSpeed = $CPU.MaxClockSpeed / 1000
$CPU_Used = (Get-WmiObject win32_processor).LoadPercentage
$CPU_Free = 100 - $CPU_Used

# Disk
$Disk = Get-WmiObject -class Win32_LogicalDisk -Filter "DeviceID='C:'"
$Disk_ID = $Disk.DeviceID
$Disk_TotalSpace = [math]::Round($Disk.Size/1GB, 2)
$Disk_FreeSpace = [math]::Round($Disk.FreeSpace/1GB, 2)
$Disk_UsedSpace = [math]::Round(($Disk.Size - $Disk.FreeSpace)/1GB, 2)

# System Info
$systeminfo = systeminfo

# IP Config
$ipconfig = ipconfig

# Driver Query
$driverquery = driverquery

# Running Services
$netstart = net start

# Create info object
$infoprop = @{
    'RAM_total'= $totalRAM;
    'RAM_free'= $freeRAM;
    'RAM_used'= $usedRAM;
    'OS_Name'= $OS_Name;
    'OS_InstallDate'= $OS_InstallDate;
    'OS_LastBootUpTime'= $OS_LastBootUpTime;
    'OS_Architecture'= $OS_Architecture;
    'OS_SystemDrive'= $OS_SystemDrive;
    'OS_WindowsDirectory'= $OS_WindowsDirectory;
    'OS_BuildNumber'= $OS_BuildNumber;
    'OS_SerialNumber'= $OS_SerialNumber;
    'OS_Version'= $OS_Version;
    'OS_Manufacturer'= $OS_Manufacturer;
    'CS_Name'= $CS_Name;
    'CS_Owner'= $CS_Owner;
    'CPU_Name'= $CPU_Name;
    'CPU_Manufacturer'= $CPU_Manufacturer;
    'CPU_MaxClockSpeed'= $CPU_MaxClockSpeed;
    'CPU_Used'= $CPU_Used;
    'CPU_Free'= $CPU_Free;
    'Disk_ID'= $Disk_ID;
    'Disk_TotalSpace'= $Disk_TotalSpace;
    'Disk_FreeSpace'= $Disk_FreeSpace;
    'Disk_UsedSpace'= $Disk_UsedSpace;
    'systeminfo'= $systeminfo;
    'ipconfig'= $ipconfig;
    'driverquery'= $driverquery;
    'netstart'= $netstart;
}

$info = New-Object -TypeName PSObject -Prop $infoprop

# Convert info to JSON
$info = $info | ConvertTo-JSON

# Output 
$info
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-tasks.ps1`

```component VPCard
{
  "title": "list-tasks.ps1",
  "desc": "Lists all Windows scheduler tasks.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-tasks.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

::: tabs

@tab:active Parameters

```powershell
PS> ./list-system-info.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-tasks.ps1
# TaskName                            State  TaskPath                                       
# --------                            -----  --------
# .NET Framework NGEN v4.0.30319      Ready  \Microsoft\Windows\.NET Framework\        
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all scheduled tasks
.DESCRIPTION
	This PowerShell script lists all scheduled tasks.
.EXAMPLE
	PS> ./list-tasks.ps1

	TaskName                            State  TaskPath                                       
	--------                            -----  --------
	.NET Framework NGEN v4.0.30319      Ready  \Microsoft\Windows\.NET Framework\             
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-ScheduledTask | Format-Table -property TaskName,State,TaskPath
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-timezone.ps1`

```component VPCard
{
  "title": "list-timezone.ps1",
  "desc": "Lists the current time zone details.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-timezone.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the details of the current time zone.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-timezone.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-timezone
# Id                         : Europe/Berlin
# DisplayName                : (UTC+01:00) Central European Standard Time
# ...
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists time zone details
.DESCRIPTION
	This PowerShell script lists the details of the current time zone.
.EXAMPLE
	PS> ./list-timezone

	Id                         : Europe/Berlin
	DisplayName                : (UTC+01:00) Central European Standard Time
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	[system.threading.thread]::currentThread.currentCulture = [system.globalization.cultureInfo]"en-US"
	Get-Timezone 
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-timezones.ps1`

```component VPCard
{
  "title": "list-timezones.ps1",
  "desc": "Lists all time zones available.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-processes.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all available time zones.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-timezones.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-timezones
# Id                              DisplayName                            SupportsDaylight
#                                                                               SavingTime
# --                              -----------                            ----------------
# Hawaiian Standard Time          (UTC-10:00) Hawaii                     False
# ...
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all available time zones
.DESCRIPTION
	This PowerShell script lists all available time zones.
.EXAMPLE
	PS> ./list-timezones

	Id                              DisplayName                            SupportsDaylight
                                                                               SavingTime
	--                              -----------                            ----------------
	Hawaiian Standard Time          (UTC-10:00) Hawaii                     False
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Timezone -listavailable | Format-Table -property Id,DisplayName,SupportsDaylightSavingTime
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-user-groups.ps1`

```component VPCard
{
  "title": "list-user-groups.ps1",
  "desc": "Lists the user groups on the local computer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-user-groups.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the user groups of the local computer.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-user-groups.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-user-groups.ps1

# Name                 Description
# ----                 -----------
# Administrators       Administrators have complete and unrestricted access to the computer/domain
# ...
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the user groups
.DESCRIPTION
	This PowerShell script lists the user groups of the local computer.
.EXAMPLE
	PS> ./list-user-groups.ps1

	Name                 Description
	----                 -----------
	Administrators       Administrators have complete and unrestricted access to the computer/domain
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-LocalGroup
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`poweroff.ps1`

```component VPCard
{
  "title": "poweroff.ps1",
  "desc": "Halts the local computer (needs admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/poweroff.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script halts the local computer immediately (needs admin rights).

::: tabs

@tab:active Parameters

```powershell
PS> ./poweroff.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./poweroff
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Halts the computer (needs admin rights)
.DESCRIPTION
	This script halts the local computer immediately (needs admin rights).
.EXAMPLE
	PS> ./poweroff
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	if ($IsLinux) {
		sudo shutdown
	} else {
		Stop-Computer
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`query-smart-data.ps1`

```component VPCard
{
  "title": "query-smart-data.ps1",
  "desc": "Queries the S.M.A.R.T. data of your HDD/SSD's.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/query-smart-data.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

Queries the S.M.A.R.T. data of your HDD/SSD's and saves it to the current/given directory.

(use `smart-data2csv.ps1` to powershell a CSV table for analysis).

Requires `smartctl` (smartmontools) and admin rights. For automation copy this script to `/etc/cron.daily`

::: tabs

@tab:active Parameters

```powershell
PS> ./query-smart-data.ps1 [[-Directory] <String>] [<CommonParameters>]

-Directory <String>
    Specifies the path to the target directory
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./query-smart-data

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Queries and saves the S.M.A.R.T. data of your HDD's/SSD's
.DESCRIPTION
	Queries the S.M.A.R.T. data of your HDD/SSD's and saves it to the current/given directory.
	(use smart-data2csv.ps1 to generate a CSV table for analysis).
        Requires smartctl (smartmontools) and admin rights. For automation copy this script to /etc/cron.daily 
.PARAMETER Directory
	Specifies the path to the target directory
.EXAMPLE
	PS> ./query-smart-data
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

param([string]$Directory = "")


function CheckIfInstalled {
	try {
		$null = $(smartctl --version)
	} catch {
		write-error "smartctl is not installed - make sure smartmontools are installed"
		exit 1
	}
}

try {
	if ($Directory -eq "") {
		$Directory = "$PWD"
	}

	write-output "(1) Checking for 'smartctl'..."
	CheckIfInstalled

	write-output "(2) Scanning for S.M.A.R.T. devices..."
	$Devices = $(smartctl --scan-open)

	[int]$DevNo = 1
	foreach($Device in $Devices) {
		write-output "(3) Querying data from S.M.A.R.T. device $Device..."

		$Time = (Get-Date)
		$Filename = "$Directory/SMART-dev$($DevNo)-$($Time.Year)-$($Time.Month)-$($Time.Day).json"
		write-output "(4) Saving data to $Filename..."

		$Cmd = "smartctl --all --json " + $Device 

		Invoke-Expression $Cmd > $Filename
		$DevNo++
	}

	"✔️  Done."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`reboot.ps1`

```component VPCard
{
  "title": "reboot.ps1",
  "desc": "Reboots the local computer (needs admin rights).",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/reboot.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script reboots the local computer immediately (needs admin rights).

::: tabs

@tab:active Parameters

```powershell
PS> ./reboot.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./reboot

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Reboots the computer (needs admin rights)
.DESCRIPTION
	This PowerShell script reboots the local computer immediately (needs admin rights).
.EXAMPLE
	PS> ./reboot
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	if ($IsLinux) {
		& sudo reboot
	} else {
		Restart-Computer
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`remove-print-jobs.ps1`

```component VPCard
{
  "title": "remove-print-jobs.ps1",
  "desc": "Removes all jobs from all printers.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/remove-print-jobs.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script removes all print jobs from all printer devices.

::: tabs

@tab:active Parameters

```powershell
PS> ./remove-print-jobs.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./remove-print-jobs
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Removes all jobs from all printers
.DESCRIPTION
	This PowerShell script removes all print jobs from all printer devices.
.EXAMPLE
	PS> ./remove-print-jobs
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -Version 4

try {
	$printers = Get-Printer
	if ($printers.Count -eq 0) { throw "No printer found" }
		
	foreach ($printer in $printers) {
		$printjobs = Get-PrintJob -PrinterObject $printer
		foreach ($printjob in $printjobs) {
			Remove-PrintJob -InputObject $printjob
		}
	}

	"✔️ all print jobs removed"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`restart-network-adapters.ps1`

```component VPCard
{
  "title": "restart-network-adapters.ps1",
  "desc": "Restarts all local network adapters.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/restart-network-adapters.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script restarts all local network adapters (needs admin rights).

::: tabs

@tab:active Parameters

```powershell
PS> ./restart-network-adapters.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./restart-network-adapters
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Restarts the network adapters (needs admin rights)
.DESCRIPTION
	This PowerShell script restarts all local network adapters (needs admin rights).
.EXAMPLE
	PS> ./restart-network-adapters
.LINK
	htts://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#Requires -RunAsAdministrator

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Get-NetAdapter | Restart-NetAdapter 

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ restarted all local network adapters in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`upgrade-ubuntu.ps1`

```component VPCard
{
  "title": "upgrade-ubuntu.ps1",
  "desc": "Upgrades Ubuntu Linux to the latest (LTS) release.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/upgrade-ubuntu.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script upgrades Ubuntu Linux to the latest (LTS) release.

::: tabs

@tab:active Parameters

```powershell
PS> ./upgrade-ubuntu.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> .\upgrade-ubuntu.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Upgrades Ubuntu Linux 
.DESCRIPTION
	This PowerShell script upgrades Ubuntu Linux to the latest (LTS) release.
.EXAMPLE
	PS> .\upgrade-ubuntu.ps1 
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	""
	"⏳ (1/4) Perform a backup!"
	"It's strongly recommended to backup your data BEFORE the upgrade!"
	$Confirm = Read-Host "Press <Return> to continue..."

	""
	"⏳ (2/4) Install update-manager-core, Upgrade Packages & Reboot"
	$Confirm = Read-Host "Enter <yes> to perform this step (otherwise it will be skipped)"
	if ($Confirm -eq "yes") {
		sudo apt install update-manager-core
		sudo apt update
		sudo apt list --upgradable
		sudo apt upgrade
		sudo reboot 
	}

	""
	"⏳ (3/4) Remove obsolete kernel modules"
	$Confirm = Read-Host "Enter <yes> to perform this step (otherwise it will be skipped)"
	if ($Confirm -eq "yes") {
		sudo apt --purge autoremove
	}

	""
	"⏳ (4/4) Upgrade Ubuntu & reboot"
	$Confirm = Read-Host "Enter <LTS> to upgrade to latest LTS release, <latest> to upgrade to latest Ubuntu release (otherwise this step will be skipped)"
	if ($Confirm -eq "LTS") {
		sudo do-release-upgrade
		sudo reboot
	} elseif ($Confirm -eq "latest") {
		sudo do-release-upgrade -d
		sudo reboot
	}

	"✔️  Done."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`wakeup.ps1`

```component VPCard
{
  "title": "wakeup.ps1",
  "desc": "Wakes up a computer using Wake-on-LAN.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/wakeup.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script sends a magic UDP packet twice to a computer to wake him up (requires Wake-On-LAN).

::: tabs

@tab:active Parameters

```powershell
PS> ./wakeup.ps1 [[-MACaddress] <String>] [[-IPaddress] <String>] [[-Port] <Int32>] [<CommonParameters>]

-MACaddress <String>
    Specifies the host's MAC address (e.g. 11:22:33:44:55:66)
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-IPaddress <String>
    Specifies the host's IP address or subnet address (e.g. 255.255.255.255)
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Port <Int32>
    Specifies the UDP port (9 by default)
    
    Required?                    false
    Position?                    3
    Default value                9
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./wakeup 11:22:33:44:55:66 192.168.100.100
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Sends a magic packet to a computer to wake him up
.DESCRIPTION
	This PowerShell script sends a magic UDP packet twice to a computer to wake him up (requires Wake-On-LAN).
.PARAMETER MACaddress
	Specifies the host's MAC address (e.g. 11:22:33:44:55:66)
.PARAMETER IPaddress
	Specifies the host's IP address or subnet address (e.g. 255.255.255.255)
.PARAMETER Port
	Specifies the UDP port (9 by default)
.EXAMPLE
	PS> ./wakeup 11:22:33:44:55:66 192.168.100.100
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$MACaddress = "", [string]$IPaddress = "", [int]$Port=9)
	
function Send-WOL { param([string]$mac, [string]$ip, [int]$port) 
	$broadcast = [Net.IPAddress]::Parse($ip) 
  
	$mac=(($mac.replace(":","")).replace("-","")).replace(".","") 
	$target=0,2,4,6,8,10 | % {[convert]::ToByte($mac.substring($_,2),16)} 
	$packet = (,[byte]255 * 6) + ($target * 16) 
  
	$UDPclient = new-Object System.Net.Sockets.UdpClient 
	$UDPclient.Connect($broadcast,$port) 
	[void]$UDPclient.Send($packet, 102)  
} 

try {
	if ($MACaddress -eq "" ) { $MACaddress = read-host "Enter the host's MAC address (e.g. 00:11:22:33:44:55)"	}
	if ($IPaddress -eq "" ) { $IPaddress = read-host "Enter the host's IP address or subnet address (e.g. 255.255.255.255)" }

	Send-WOL $MACaddress $IPaddress $Port
	start-sleep -milliseconds 100
	Send-WOL $MACaddress $IPaddress $Port

	"✔️ sent magic packet $MACaddress to IP $IPaddress port $Port (twice)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

<TagLinks/>