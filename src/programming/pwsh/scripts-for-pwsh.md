---
lang: ko-KR
title: Scripts for Powershell
description: Powershell > Scripts for Powershell
icon: fas fa-magnifying-glass
category:
  - Powershell
tag: 
  - powershell
  - windows
  - script
  - useful-script
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <FontIcon icon="iconfont icon-powershell"/>`introduce-powershell.ps1`

```component VPCard
{
  "title": "introduce-powershell.ps1",
  "desc": "Introduces PowerShell to new users.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/introduce-powershell.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script introduces PowerShell to new users.

::: tabs

@tab:active Parameters

```powershell
PS> ./introduce-powershell.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./introduce-powershell.ps1

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Introduces PowerShell to new users
.DESCRIPTION
	This PowerShell script introduces PowerShell to new users.
.EXAMPLE
	PS> ./introduce-powershell.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Clear-Host
	""
	& "$PSScriptRoot/write-typewriter.ps1" " There is one shell to rule them all:" 200
	""
	Write-Host "  _____                       _____ _          _ _ " -foregroundColor blue
	Write-Host " |  __ \                     / ____| |        | | |" -foregroundColor blue
	Write-Host " | |__) |____      _____ _ _| (___ | |__   ___| | |" -foregroundColor blue
	Write-Host " |  ___/ _ \ \ /\ / / _ \ '__\___ \| '_ \ / _ \ | |" -foregroundColor blue
	Write-Host " | |  | (_) \ V  V /  __/ |  ____) | | | |  __/ | |" -foregroundColor blue
	Write-Host " |_|   \___/ \_/\_/ \___|_| |_____/|_| |_|\___|_|_|" -foregroundColor blue
	""
	""
	$Version = $PSVersionTable.PSVersion
	$Edition = $PSVersionTable.PSEdition
	$NumModules = (Get-Module).Count
	$NumAliases = (Get-Alias).Count
	$Details = "PowerShell $Version ($Edition edition) with $NumModules modules and $NumAliases aliases."
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Welcome to $Details" 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "PowerShell is open-source and free! It's available for Linux, Mac OS and Windows." 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Curious? Take a look under the hood at: https://github.com/PowerShell/PowerShell" 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Want to learn PowerShell? See the tutorials at: https://www.guru99.com/powershell-tutorial.html" 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Need docs? See the official documentation at: https://docs.microsoft.com/en-us/powershell" 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Want sample scripts? See the Mega Collection of PowerShell scripts at: https://github.com/fleschutz/PowerShell" 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Want to donate? Great, just follow this link: https://www.paypal.com/paypalme/Fleschutz" 25
	""
	Write-Host " 🔷 " -noNewline
	& "$PSScriptRoot/write-typewriter.ps1" "Any questions? See the PowerShell FAQ at: https://github.com/fleschutz/PowerShell/blob/master/Docs/FAQ.md" 25
	""
	& "$PSScriptRoot/write-typewriter.ps1" "    (use <Ctrl> + <Click> to open the links above in your browser)" 100
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-aliases.ps1`

```component VPCard
{
  "title": "list-aliases.ps1",
  "desc": "Lists all PowerShell aliases.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-aliases.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell scripts lists all PowerShell aliases.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-aliases.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-aliases.ps1
# 
# 
# 
# CommandType     Name                                               Version    Source
# -----------     ----                                               -------    ------
# Alias           CFS -> ConvertFrom-String                          3.1.0.0    Microsoft.PowerShell.Utility
# ...
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all PowerShell aliases
.DESCRIPTION
	This PowerShell scripts lists all PowerShell aliases.
.EXAMPLE
	PS> ./list-aliases.ps1

	CommandType     Name                                               Version    Source
	-----------     ----                                               -------    ------
	Alias           CFS -> ConvertFrom-String                          3.1.0.0    Microsoft.PowerShell.Utility
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Alias
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-automatic-variables.ps1`

```component VPCard
{
  "title": "list-automatic-variables.ps1",
  "desc": "Lists the automatic variables of PowerShell.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-automatic-variables.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

::: tabs

@tab:active Parameters

```powershell
PS> ./list-automatic-variables.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all automatic variables of PowerShell
.DESCRIPTION
	This PowerShell script lists all automatic variables of PowerShell.
.EXAMPLE
	PS> ./list-automatic-variables.ps1

	Variable                  Content
	--------                  -------
	$HOME                     C:\Users\Markus
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function AddItem { param([string]$Variable, [string]$Content)
	new-object PSObject -property @{ 'Variable' = "$Variable"; 'Content' = "$Content" }
}

function ListAutomaticVariables {
	AddItem "`$args"			"$args"
	AddItem "`$ConsoleFileName"		"$ConsoleFileName"
	AddItem "`$Error[0]"			"$($Error[0])"
	AddItem "`$Event"			"$Event"
	AddItem "`$EventArgs"			"$EventArgs"
	AddItem "`$EventSubscriber"		"$EventSubscriber"
	AddItem "`$ExecutionContext"		"$ExecutionContext"
	AddItem "`$false"			"$false"
	AddItem "`$foreach"			"$foreach"
	AddItem "`$HOME"			"$HOME"
	AddItem "`$input"			"$input"
	AddItem "`$IsCoreCLR"			"$IsCoreCLR"
	AddItem "`$IsLinux"			"$IsLinux"
	AddItem "`$IsMacOS"			"$IsMacOS"
	AddItem "`$IsWindows"			"$IsWindows"
	AddItem "`$LastExitCode"		"$LastExitCode"
	AddItem "`$Matches"			"$Matches"
	AddItem "`$MyInvocation.PSScriptRoot" "$($MyInvocation.PSScriptRoot)"
	AddItem "`$MyInvocation.PSCommandPath" "$($MyInvocation.PSCommandPath)"
	AddItem "`$NestedPromptLevel"		"$NestedPromptLevel"
	AddItem "`$null"			"$null"
	AddItem "`$PID"				"$PID"
	AddItem "`$PROFILE"			"$PROFILE"
	AddItem "`$PSBoundParameters"		"$PSBoundParameters"
	AddItem "`$PSCmdlet"			"$PSCmdlet"
	AddItem "`$PSCommandPath"		"$PSCommandPath"
	AddItem "`$PSCulture"			"$PSCulture"
	AddItem "`$PSDebugContext"		"$PSDebugContext"
	AddItem "`$PSHOME"			"$PSHOME"
	AddItem "`$PSItem"			"$PSItem"
	AddItem "`$PSScriptRoot"		"$PSScriptRoot"
	AddItem "`$PSSenderInfo"		"$PSSenderInfo"
	AddItem "`$PSUICulture"			"$PSUICulture"
	AddItem "`$PSVersionTable.PSVersion"	"$($PSVersionTable.PSVersion)"
	AddItem "`$PSVersionTable.PSEdition"	"$($PSVersionTable.PSEdition)"
	AddItem "`$PSVersionTable.GitCommitId"	"$($PSVersionTable.GitCommitId)"
	AddItem "`$PSVersionTable.OS"		"$($PSVersionTable.OS)"
	AddItem "`$PSVersionTable.Platform"	"$($PSVersionTable.Platform)"
	AddItem "`$PSVersionTable.PSCompatibleVersions" "$($PSVersionTable.PSCompatibleVersions)"
	AddItem "`$PSVersionTable.PSRemotingProtocolVersion" "$($PSVersionTable.PSRemotingProtocolVersion)"
	AddItem "`$PSVersionTable.SerializationVersion" "$($PSVersionTable.SerializationVersion)"
	AddItem "`$PSVersionTable.WSManStackVersion" "$($PSVersionTable.WSManStackVersion)"
	AddItem "`$PWD"				"$PWD"
	AddItem "`$Sender"			"$Sender"
	AddItem "`$ShellId"			"$ShellId"
	AddItem "`$StackTrace"			"$StackTrace"
	AddItem "`$switch"			"$switch"
	AddItem "`$this"			"$this"
	AddItem "`$true"			"$true"
}

try {
	ListAutomaticVariables | format-table -property Variable,Content
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-cheat-sheet.ps1`

```component VPCard
{
  "title": "list-cheat-sheet.ps1",
  "desc": "Lists the PowerShell cheat sheet.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-cheat-sheet.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the PowerShell cheat sheet.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-cheat-sheet.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-cheat-sheet.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the PowerShell cheat sheet
.DESCRIPTION
	This PowerShell script lists the PowerShell cheat sheet.
.EXAMPLE
	PS> ./list-cheat-sheet.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

"PowerShell Cheat Sheet"
"======================"
""
"Basic Commands"
"
"         Cmdlet : Commands built into shell written in .NET"
"      Functions : Commands written in PowerShell language"
"      Parameter : Argument to a Cmdlet/Function/Script"
"          Alias : Shortcut for a Cmdlet or Function"
"        Scripts : Text files with .ps1 extension"
"   Applications : Existing windows programs"
"      Pipelines : Pass objects Get-process word | Stop-Process"
"         Ctrl+c : Interrupt current command"
"     Left/right : Navigate editing cursor"
"Ctrl+left/right : Navigate a word at a time"
"     Home / End : End Move to start / end of line"
"      Up / down : Move up and down through history"
"         Insert : Toggles between insert/overwrite mode"
"             F7 : Command history in a window"
"Tab / Shift-Tab : Command line completion"
""
"Variables"
"---------"
"             `$var = `"string`" : Assign variable"
"`$a,`$b = 0 or `$a,`$b = 'a','b' : Assign multiple variables"
"               `$a,`$b = `$b,`$a : Flip variables"
"                 `$var=[int]5 : Strongly typed variable"
""
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-cmdlets.ps1`

```component VPCard
{
  "title": "list-cmdlets.ps1",
  "desc": "Lists the PowerShell cmdlets.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-cmdlets.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all PowerShell cmdlets.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-cmdlets.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-cmdlets.ps1



CommandType     Name                                  Version    Source
-----------     ----                                  -------    ------
Function        Add-BCDataCacheExtension              1.0.0.0    BranchCache
Function        Add-BitLockerKeyProtector             1.0.0.0    BitLocker
...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all PowerShell cmdlets
.DESCRIPTION
	This PowerShell script lists all PowerShell cmdlets.
.EXAMPLE
	PS> ./list-cmdlets.ps1

	CommandType     Name                                  Version    Source
	-----------     ----                                  -------    ------
	Function        Add-BCDataCacheExtension              1.0.0.0    BranchCache
	Function        Add-BitLockerKeyProtector             1.0.0.0    BitLocker
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Command -Command-Type cmdlet
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-console-colors.ps1`

```component VPCard
{
  "title": "list-console-colors.ps1",
  "desc": "Lists all console colors.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-console-colors.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all available console colors.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-console-colors.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-console-colors.ps1



Color     As Foreground     As Background
-----     -------------     -------------
...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all console colors
.DESCRIPTION
	This PowerShell script lists all available console colors.
.EXAMPLE
	PS> ./list-console-colors.ps1

	Color     As Foreground     As Background
	-----     -------------     -------------
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Colors = [Enum]::GetValues([ConsoleColor])
	""
	"Color          As Foreground  As Background"
	"-----          -------------  -------------"
	foreach($Color in $Colors) {
		$Color = "$Color              "
		$Color = $Color.substring(0, 15)
		write-host -noNewline "$Color"
		write-host -noNewline -foregroundcolor $Color "$Color"
		write-host -noNewline -backgroundcolor $Color "$Color"
		write-host ""
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-modules.ps1`

```component VPCard
{
  "title": "list-modules.ps1",
  "desc": "Lists the PowerShell modules.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-modules.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the installed PowerShell modules.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-modules.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-modules.ps1



@tab Name                             Version  ModuleType  ExportedCommands
--
Microsoft.PowerShell.Management  3.1.0.0  Manifest    {Add-Computer, Add-Content, Checkpoint-Computer...}
...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists PowerShell modules
.DESCRIPTION
	This PowerShell script lists the installed PowerShell modules.
.EXAMPLE
	PS> ./list-modules.ps1

	@tab Name                             Version  ModuleType  ExportedCommands
	--
	Microsoft.PowerShell.Management  3.1.0.0  Manifest    {Add-Computer, Add-Content, Checkpoint-Computer...}
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Module | Format-Table -property Name,Version,ModuleType,ExportedCommands
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-profiles.ps1`

```component VPCard
{
  "title": "list-profiles.ps1",
  "desc": "Lists your PowerShell profiles.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-profiles.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

::: tabs

@tab:active Parameters

```powershell
PS> ./list-profiles.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the user's PowerShell profiles
.DESCRIPTION
	This PowerShell script lists the user's PowerShell profiles.
.EXAMPLE
	PS> ./list-profiles.ps1
	
	Level Profile                Location                                                         Existent
	----- -------                --------                                                         --------
	1     AllUsersAllHosts       /opt/PowerShell/profile.ps1                                      no
	2     AllUsersCurrentHost    /opt/PowerShell/Microsoft.PowerShell_profile.ps1                 no
	3     CurrentUserAllHosts    /home/markus/.config/powershell/profile.ps1                      no
	4     CurrentUserCurrentHost /home/markus/.config/powershell/Microsoft.PowerShell_profile.ps1 yes
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function ListProfile { param([int]$Level, [string]$Profile, [string]$Location)
	if (test-path "$Location") { $Existent = "yes" } else { $Existent = "no" }
	New-Object PSObject -Property @{ 'Level'="$Level"; 'Profile'="$Profile"; 'Location'="$Location"; 'Existent'="$Existent"	}
}

function ListProfiles { 
	ListProfile 1 "AllUsersAllHosts"       $PROFILE.AllUsersAllHosts
	ListProfile 2 "AllUsersCurrentHost"    $PROFILE.AllUsersCurrentHost
	ListProfile 3 "CurrentUserAllHosts"    $PROFILE.CurrentUserAllHosts
	ListProfile 4 "CurrentUserCurrentHost" $PROFILE.CurrentUserCurrentHost
}

try {
	ListProfiles | format-table -property Level,Profile,Location,Existent
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-scripts.ps1`

```component VPCard
{
  "title": "list-scripts.ps1",
  "desc": "Lists all PowerShell scripts in this repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-scripts.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

::: tabs

@tab:active Parameters

```powershell
PS> ./list-scripts.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all PowerShell scripts
.DESCRIPTION
	This PowerShell script lists all PowerShell scripts in the repository (sorted alphabetically).
.EXAMPLE
	PS> ./list-scripts.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function ListScripts { param([string]$FilePath)
	Write-Progress "⏳Reading $FilePath..."
	$table = Import-CSV "$FilePath"
	[int]$No = 1
	foreach($row in $table) {
		New-Object PSObject -Property @{
			'No' = $No++
			'Script' = $row.SCRIPT
			'Description' = $row.DESCRIPTION
		}
	}
	$global:NumScripts = $Table.Count
	Write-Progress -completed "."
}

try {
	ListScripts "$PSScriptRoot/../Data/scripts.csv" | Format-Table -property No,Script,Description
#	$files = Get-ChildItem -path "./*.ps1" -attributes !Directory
#	foreach ($file in $files) {
#		$help = Get-Help $file -full
#		Write-Output "$($file.Name),$($help.Synopsis),"
#	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`new-script.ps1`

```component VPCard
{
  "title": "new-script.ps1",
  "desc": "Creates a new PowerShell script.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/new-script.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script creates a new powershell script file (by using template file <FontIcon icon="iconfont icon-powershell"/> `../Data/template.ps1`).

::: tabs

@tab:active Parameters

```powershell
PS> ./new-script.ps1 [[-filename] <String>] [<CommonParameters>]

-filename <String>
    Specifies the path to the resulting file
    
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
PS> ./new-script myscript.ps1
✔️ created new PowerShell script: myscript.ps1

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a new PowerShell script file
.DESCRIPTION
	This PowerShell script creates a new PowerShell script file (by using template file ../Data/template.ps1).
.PARAMETER filename
	Specifies the path to the resulting file
.EXAMPLE
	PS> ./new-script myscript.ps1
	✔️ created new PowerShell script: myscript.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$filename = "")

try {
	if ($filename -eq "" ) { $filename = Read-Host "Enter the new filename" }

	Copy-Item "$PSScriptRoot/../Data/template.ps1" "$filename"

	"✔️ created new PowerShell script: $filename"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`set-profile.ps1`

```component VPCard
{
  "title": "set-profile.ps1",
  "desc": "Updates your PowerShell user profile.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/set-profile.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script sets the PowerShell profile for the current user.

::: tabs

@tab:active Parameters

```powershell
PS> ./set-profile.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./set-profile

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the user's PowerShell profile
.DESCRIPTION
	This PowerShell script sets the PowerShell profile for the current user.
.EXAMPLE
	PS> ./set-profile
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	"⏳ (1/3) Querying path to PowerShell profile 'CurrentUserCurrentHost'..."
	$PathToProfile = $PROFILE.CurrentUserCurrentHost
	"$PathToProfile"

	"⏳ (2/3) Creating the profile (if non-existent)..."
	$Null = New-Item -Path $profile -ItemType "file" -Force

	"⏳ (3/3) Copying my-profile.ps1..."
	$PathToRepo = "$PSScriptRoot/.."
	Copy-Item "$PathToRepo/Scripts/my-profile.ps1" "$PathToProfile" -force

	"✔️ updated your PowerShell profile by my-profile.ps1 - it gets active on next login"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

<TagLinks />