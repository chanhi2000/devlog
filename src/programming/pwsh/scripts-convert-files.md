---
lang: ko-KR
title: Scripts to Convert Files
description: Powershell > Scripts to Convert Files
icon: fas fa-recycle
category:
  - Powershell
  - Scripts to Convert Files
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

## <VPIcon icon="iconfont icon-powershell"/>`convert-csv2txt.ps1`

```component VPCard
{
  "title": "convert-csv2txt.ps1",
  "desc": "Converts a .CSV file to a text file.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-csv2txt.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script converts a `.CSV` file into a text file and prints it.

::: tabs

@tab:active Parameters

```powershell
PS> ./convert-csv2txt.ps1 [[-Path] <String>] [<CommonParameters>]

-Path <String>
    Specifies the path to the .CSV file
    
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
PS> ./convert-csv2txt salaries.csv

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Converts a .CSV file into a text file
.DESCRIPTION
	This PowerShell script converts a .CSV file into a text file and prints it.
.PARAMETER Path
	Specifies the path to the .CSV file
.EXAMPLE
	PS> ./convert-csv2txt salaries.csv
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Path = "")

try {
	if ($Path -eq "" ) { $Path = read-host "Enter path to CSV file" }

	$Table = Import-CSV -path "$Path" -header A,B,C,D,E,F,G,H

	foreach($Row in $Table) {
		write-output "* $($Row.A) $($Row.B) $($Row.C) $($Row.D) $($Row.E) $($Row.F) $($Row.G) $($Row.H)"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`convert-mysql2csv.ps1`

```component VPCard
{
  "title": "convert-mysql2csv.ps1",
  "desc": "Converts a MySQL database table to a .CSV file.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-mysql2csv.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10,10,10,0.2)"
}
```

This PowerShell script converts a MySQL database table to a `.CSV` file.

::: tabs

@tab:active Parameters

```powershell
PS> ./convert-mysql2csv.ps1 [[-server] <String>] [[-database] <String>] [[-username] <String>] [[-password] <String>] [[-query] <String>] [<CommonParameters>]

-server <String>
    Specifies the server's hostname or IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-database <String>
    Specifies the database name
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-username <String>
    Specifies the user name
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-password <String>
    Specifies the password
    
    Required?                    false
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-query <String>
    Specifies the SQL query
    
    Required?                    false
    Position?                    5
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./convert-mysql2csv.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Convert a MySQL database table to a .CSV file
.DESCRIPTION
	This PowerShell script converts a MySQL database table to a .CSV file.
.PARAMETER server
	Specifies the server's hostname or IP address
.PARAMETER database
	Specifies the database name
.PARAMETER username
	Specifies the user name
.PARAMETER password
	Specifies the password
.PARAMETER query
	Specifies the SQL query
.EXAMPLE
	PS> ./convert-mysql2csv.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>


param([string]$server = "", [string]$database = "", [string]$username = "", [string]$password = "", [string]$query = "")

try {
	if ($server -eq "") { $server = read-host "Enter the hostname/IP address of the MySQL server" }
	if ($database -eq "") { $database = read-host "Enter the database name" }
	if ($username -eq "") { $username = read-host "Enter the database username" }
	if ($password -eq "") { $password = read-host "Enter the database user password" }
	if ($query -eq "") { $query = read-host "Enter the database query" }

	$csvfilepath = "$PSScriptRoot\mysql_table.csv"
	$result = Invoke-MySqlQuery  -ConnectionString "server=$server; database=$database; user=$username; password=$password; pooling = false; convert zero datetime=True" -Sql $query -CommandTimeout 10000
	$result | Export-Csv $csvfilepath -NoTypeInformation
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`convert-ps2bat.ps1`

```component VPCard
{
  "title": "convert-ps2bat.ps1",
  "desc": "Converts a PowerShell script to a Batch script.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-ps2bat.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10,10,0.2)"
}
```

This PowerShell script converts one or more PowerShell scripts to .bat batch files.

::: tabs

@tab:active Parameters

```powershell
PS> ./convert-ps2bat.ps1 [[-Filepattern] <String>] [<CommonParameters>]

-Filepattern <String>
    Specifies the file pattern
    
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
PS> ./convert-ps2bat.ps1 *.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Converts PowerShell scripts to batch files
.DESCRIPTION
	This PowerShell script converts one or more PowerShell scripts to .bat batch files.
.PARAMETER Filepattern
	Specifies the file pattern
.EXAMPLE
	PS> ./convert-ps2bat.ps1 *.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Filepattern = "")

function Convert-PowerShellToBatch
{
    param
    (
        [Parameter(Mandatory,ValueFromPipeline,ValueFromPipelineByPropertyName)]
        [string]
        [Alias("FullName")]
        $Path
    )
 
    process
    {
        $encoded = [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes((Get-Content -Path $Path -Raw -Encoding UTF8)))
        $newPath = [Io.Path]::ChangeExtension($Path, ".bat")
        "@echo off`npowershell.exe -NoExit -encodedCommand $encoded" | Set-Content -Path $newPath -Encoding Ascii
    }
}
 
try {
	if ($Filepattern -eq "") { $Filepattern = Read-Host "Enter path to the PowerShell script(s)" }

	$Files = Get-ChildItem -path "$Filepattern"
	foreach ($File in $Files) {
		Convert-PowerShellToBatch "$File"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`convert-ps2md.ps1`

```component VPCard
{
  "title": "convert-ps2md.ps1",
  "desc": "Converts the comment-based help of a PowerShell script to Markdown.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-ps2md.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script converts the comment-based help of a PowerShell script to Markdown.

::: tabs

@tab:active Parameters

```powershell
PS> ./convert-ps2md.ps1 [[-filename] <String>] [<CommonParameters>]

-filename <String>
    Specifies the path to the PowerShell script
    
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
PS> ./convert-ps2md.ps1 myscript.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Converts a PowerShell script to Markdown
.DESCRIPTION
	This PowerShell script converts the comment-based help of a PowerShell script to Markdown.
.PARAMETER filename
	Specifies the path to the PowerShell script
.EXAMPLE
	PS> ./convert-ps2md.ps1 myscript.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$filename = "")

function EncodePartOfHtml { param([string]$Value)
    ($Value -replace '<', '&lt;') -replace '>', '>'
}

function GetCode { param($Example)
    $codeAndRemarks = (($Example | Out-String) -replace ($Example.title), '').Trim() -split "`r`n"

    $code = New-Object "System.Collections.Generic.List[string]"
    for ($i = 0; $i -lt $codeAndRemarks.Length; $i++) {
        if ($codeAndRemarks[$i] -eq 'DESCRIPTION' -and $codeAndRemarks[$i + 1] -eq '-----------') { break }
        if ($codeAndRemarks[$i] -eq '' -and $codeAndRemarks[$i + 1] -eq '') { continue }
        if (1 -le $i -and $i -le 2) { continue }
    	$codeAndRemarks[$i] = ($codeAndRemarks[$i] | Out-String) -replace "PS>","PS> "
        $code.Add($codeAndRemarks[$i])
    }

    $code -join "`r`n"
}

function GetRemark { param($Example)
    $codeAndRemarks = (($Example | Out-String) -replace ($Example.title), '').Trim() -split "`r`n"

    $isSkipped = $false
    $remark = New-Object "System.Collections.Generic.List[string]"
    for ($i = 0; $i -lt $codeAndRemarks.Length; $i++) {
        if (!$isSkipped -and $codeAndRemarks[$i - 2] -ne 'DESCRIPTION' -and $codeAndRemarks[$i - 1] -ne '-----------') {
            continue
        }
        $isSkipped = $true
        $remark.Add($codeAndRemarks[$i])
    }

    $remark -join "`r`n"
}

try {
	if ($filename -eq "") { $filename = Read-Host "Enter path to PowerShell script" }
	$ScriptName = (Get-Item "$filename").Name

	$full = Get-Help $filename -Full 

	"*$($ScriptName)*"
	"================"

	$Description = ($full.description | Out-String).Trim()
	if ($Description -ne "") {
		""
		"$Description"
	} else {
		""
		"$($full.Synopsis)"
	}
	""
	"Parameters"
	"----------"
	"``````powershell"
	$Syntax = (($full.syntax | Out-String) -replace "`r`n", "`r`n").Trim()
	$Syntax = (($Syntax | Out-String) -replace "/home/mf/Repos/PowerShell/Scripts/", "PS> ./")
	if ($Syntax -ne "") {
		"$Syntax"
	}

	foreach($parameter in $full.parameters.parameter) {
		"$(((($parameter | Out-String).Trim() -split "`r`n")[-5..-1] | % { $_.Trim() }) -join "`r`n")"
		""
	}
	"[<CommonParameters>]"
	"    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, "
	"    WarningVariable, OutBuffer, PipelineVariable, and OutVariable."
	"``````"

	foreach($input in $full.inputTypes.inputType) {
		""
		"Inputs"
		"------"
		"$($input.type.name)"
	}

	foreach($output in $full.outputTypes.outputType) {
		""
		"Outputs"
		"-------"
		"$($output.type.name)"
	}

	foreach($example in $full.examples.example) {
		""
		"Example"
		"-------"
		"``````powershell"
		"$(GetCode $example)"
		"``````"
	}

	$Notes = ($full.alertSet.alert | Out-String).Trim()
	if ($Notes -ne "") {
		""
		"Notes"
		"-----"
		"$Notes"
	}

	$Links = ($full.relatedlinks | Out-String).Trim()
	if ($Links -ne "") {
		""
		"Related Links"
		"-------------"
		"$Links"
	}

	""
	"Script Content"
	"--------------"
	"``````powershell"
	$Lines = Get-Content -path "$filename"
        foreach($Line in $Lines) {
		"$Line"
	}
	"``````"
	""
	$now = [datetime]::Now
	"*(generated by convert-ps2md.ps1 using the comment-based help of $ScriptName as of $now)*"
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
        exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`convert-sql2csv.ps1`

```component VPCard
{
  "title": "convert-sql2csv.ps1",
  "desc": "Converts a SQL database table to a .CSV file.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-sql2csv.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script converts a SQL database table to a `.CSV` file.

::: tabs

@tab:active Parameters

```powershell
PS> ./convert-sql2csv.ps1 [[-server] <String>] [[-database] <String>] [[-username] <String>] [[-password] <String>] [[-query] <String>] [<CommonParameters>]

-server <String>
    Specifies the server's hostname or IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-database <String>
    Specifies the database name
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-username <String>
    Specifies the user name
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-password <String>
    Specifies the password
    
    Required?                    false
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-query <String>
    Specifies the SQL query
    
    Required?                    false
    Position?                    5
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./convert-sql2csv.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Converts a SQL database table to a .CSV file
.DESCRIPTION
	This PowerShell script converts a SQL database table to a .CSV file.
.PARAMETER server
	Specifies the server's hostname or IP address
.PARAMETER database
	Specifies the database name
.PARAMETER username
	Specifies the user name
.PARAMETER password
	Specifies the password
.PARAMETER query
	Specifies the SQL query
.EXAMPLE
	PS> ./convert-sql2csv.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$server = "", [string]$database = "", [string]$username = "", [string]$password = "", [string]$query = "")

try {
	if ($server -eq "") { $server = read-host "Enter the hostname/IP address of the SQL server" }
	if ($database -eq "") { $database = read-host "Enter the database name" }
	if ($username -eq "") { $username = read-host "Enter the database username" }
	if ($password -eq "") { $password = read-host "Enter the database user password" }
	if ($query -eq "") { $query = read-host "Enter the database query" }

	$secpasswd = ConvertTo-SecureString $password -AsPlainText -Force
	$creds = New-Object System.Management.Automation.PSCredential ($username, $secpasswd)
	$csvfilepath = "$PSScriptRoot\sqlserver_table.csv"
	$result = Invoke-SqlServerQuery -Credential $creds -ConnectionTimeout 10000 -Database $database -Server $server -Sql $query -CommandTimeout 10000
	$result | Export-Csv $csvfilepath -NoTypeInformation
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`convert-txt2wav.ps1`

```component VPCard
{
  "title": "convert-txt2wav.ps1",
  "desc": "Converts text to a .WAV audio file.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-txt2wav.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script converts text to a `.WAV` audio file.

::: tabs

@tab:active Parameters

```powershell
PS> ./convert-txt2wav.ps1 [[-Text] <String>] [[-WavFile] <String>] [<CommonParameters>]

-Text <String>
    Specifies the text to use
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-WavFile <String>
    Specifies the path to the resulting WAV file
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./convert-txt2wav.ps1 "Hello World" spoken.wav
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Converts text to a .WAV audio file
.DESCRIPTION
	This PowerShell script converts text to a .WAV audio file.
.PARAMETER text
	Specifies the text to use
.PARAMETER WavFile
	Specifies the path to the resulting WAV file
.EXAMPLE
	PS> ./convert-txt2wav.ps1 "Hello World" spoken.wav
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Text = "", [string]$WavFile = "")

try {
	if ($Text -eq "") { $Text = read-host "Enter text to speak" }
	if ($WavFile -eq "") { $WavFile = read-host "Enter .WAV file to save to" }

	Add-Type -AssemblyName System.Speech
	$SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
	$SpeechSynthesizer.SetOutputToWaveFile($WavFile)
	$SpeechSynthesizer.Speak($Text)
	$SpeechSynthesizer.Dispose()
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`export-to-manuals.ps1`

```component VPCard
{
  "title": "export-to-manuals.ps1",
  "desc": "Exports all scripts as manuals.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/export-to-manuals.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script exports the comment based help of all PowerShell scripts as manuals.

::: tabs

@tab:active Parameters

```powershell
PS> ./export-to-manuals.ps1 [[-FilePattern] <String>] [[-TargetDir] <String>] [<CommonParameters>]

-FilePattern <String>
    
    Required?                    false
    Position?                    1
    Default value                "$PSScriptRoot/*.ps1"
    Accept pipeline input?       false
    Accept wildcard characters?  false

-TargetDir <String>
    
    Required?                    false
    Position?                    2
    Default value                "$PSScriptRoot/../Docs"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./export-to-manuals.ps1
# ⏳ (1/2) Reading PowerShell scripts from /home/mf/PowerShell/Scripts/*.ps1 ... 
# ⏳ (2/2) Exporting Markdown manuals to /home/mf/PowerShell/Scripts/../Docs ...
# ✔️ Exported 518 Markdown manuals in 28 sec
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Exports all scripts as manuals
.DESCRIPTION
	This PowerShell script exports the comment based help of all PowerShell scripts as manuals.
.EXAMPLE
	PS> ./export-to-manuals.ps1
	⏳ (1/2) Reading PowerShell scripts from /home/mf/PowerShell/Scripts/*.ps1 ... 
	⏳ (2/2) Exporting Markdown manuals to /home/mf/PowerShell/Scripts/../Docs ...
	✔️ Exported 518 Markdown manuals in 28 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#requires -version 2

param([string]$FilePattern = "$PSScriptRoot/*.ps1", [string]$TargetDir = "$PSScriptRoot/../Docs")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	"⏳ (1/2) Reading PowerShell scripts from $FilePattern ..." 
	$Scripts = Get-ChildItem "$FilePattern"

	"⏳ (2/2) Exporting Markdown manuals to $TargetDir ..."
	foreach ($Script in $Scripts) {
		& "$PSScriptRoot/convert-ps2md.ps1" "$Script" > "$TargetDir/$($Script.BaseName).md"
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Exported $($Scripts.Count) Markdown manuals in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---
