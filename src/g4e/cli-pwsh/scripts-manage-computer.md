---
lang: ko-KR
title: ⚙️Scripts to Manage Computers
description: 🧙‍♂️Powershell > ⚙️Scripts to Manage Computers
tags: ["powershell", "windows", "script", "useful-script"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## <FontIcon icon="iconfont icon-file"/>`add-firewall-rules.ps1`

```card
title: add-firewall-rules.ps1
desc: Adds firewall rules for executables, needs admin rights.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/add-firewall-rules.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-cpu.ps1`

```card
title: check-cpu.ps1
desc: Checks the CPU temperature
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-cpu.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-dns.ps1`

```card
title: check-cpu.ps1
desc: Checks the CPU temperature
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-cpu.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-drive-space.ps1`

```card
title: check-drive-space.ps1
desc: Checks a drive for free space left.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-drive-space.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-file-system.ps1`

```card
title: check-file-system.ps1
desc: Checks the file system of a drive (needs admin rights).
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-file-system.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-health.ps1`

```card
title: check-health.ps1
desc: Checks the system health.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-health.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-ping.ps1`

```card
title: check-ping.ps1
desc: Checks the ping latency to the internet. 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ping.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-swap-space.ps1`

```card
title: check-swap-space.ps1
desc: Checks the swap space for free space left.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-swap-space.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`check-windows-system-files.ps1`

```card
title: check-windows-system-files.ps1
desc: Checks the validity of the Windows system files (needs admin rights).
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-windows-system-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`enable-crash-dumps.ps1`

```card
title: enable-crash-dumps.ps1
desc: Enables the writing of crash dumps.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/enable-crash-dumps.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script enables the writing of crash dumps.

::: tabs

@tab Parameters

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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`hibernate.ps1`

```card
title: hibernate.ps1
desc: Hibernates the local computer immediately.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/hibernate.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`install-github-cli.ps1`	

```card
title: install-github-cli.ps1
desc: Installs GitHub CLI. 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`install-chrome-browser.ps1`

```card
title: install-chrome-browser.ps1
desc: Installs the Google Chrome browser
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
.LINK
	https://github.com/fleschutz/PowerShell
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

## <FontIcon icon="iconfont icon-file"/>`install-knot-resolver.ps1`

```card
title: install-knot-resolver.ps1
desc: Installs the Knot Resolver (needs admin rights). 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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



<TagLinks/>