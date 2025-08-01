---
lang: ko-KR
title: Scripts for the Desktop
description: Powershell > Scripts for the Desktop
icon: fas fa-desktop
category:
  - Powershell
tag: 
  - pwsh
  - powershell
  - windows
  - windows10
  - windows11
  - script
  - useful-script
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <FontIcon icon="iconfont icon-powershell"/>`close-calculator.ps1`

```component VPCard
{
  "title": "close-calculator.ps1",
  "desc": "Closes the calculator application.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-cortana.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the calculator application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-calculator.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-calculator.ps1
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the calculator application
.DESCRIPTION
	This PowerShell script closes the calculator application gracefully.
.EXAMPLE
	PS> ./close-calculator
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Stop-Process -name "CalculatorApp"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-cortana.ps1`

```component VPCard
{
  "title": "close-cortana.ps1",
  "desc": "Closes Cortana.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-cortana.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes Microsoft's Cortana application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-cortana.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-cortana.ps1
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes Microsoft's Cortana application
.DESCRIPTION
	This PowerShell script closes Microsoft's Cortana application gracefully.
.EXAMPLE
	PS> ./close-cortana
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Cortana" "Cortana" "Cortana"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-chrome.ps1`	

```component VPCard
{
  "title": "close-chrome.ps1",
  "desc": "Closes the Chrome browser.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-chrome.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Google Chrome Web browser gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-chrome.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-chrome
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Chrome browser
.DESCRIPTION
	This PowerShell script closes the Google Chrome Web browser gracefully.
.EXAMPLE
	PS> ./close-chrome
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Google Chrome" "chrome" "chrome"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-program.ps1`

```component VPCard
{
  "title": "close-program.ps1",
  "desc": "Closes the given program gracefully.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-program.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes a program's processes gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-program.ps1 [[-FullProgramName] <String>] [[-ProgramName] <String>] [[-ProgramAliasName] <String>] [<CommonParameters>]

-FullProgramName <String>
    Specifies the full program name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-ProgramName <String>
    Specifies the program name
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-ProgramAliasName <String>
    Specifies the program alias name
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-program.ps1 "Google Chrome" "chrome.exe"
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes a program's processes 
.DESCRIPTION
	This PowerShell script closes a program's processes gracefully.
.PARAMETER FullProgramName
	Specifies the full program name
.PARAMETER ProgramName
	Specifies the program name
.PARAMETER ProgramAliasName
	Specifies the program alias name
.EXAMPLE
	PS> ./close-program "Google Chrome" "chrome.exe"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$FullProgramName = "", [string]$ProgramName = "", [string]$ProgramAliasName = "")

try {
	if ($ProgramName -eq "") {
		get-process | where-object {$_.mainWindowTitle} | format-table Id, Name, mainWindowtitle -AutoSize
		$ProgramName = read-host "Enter program name"
	}
	if ($FullProgramName -eq "") {
		$FullProgramName = $ProgramName
	}

	$Processes = get-process -name $ProgramName -errorAction 'silentlycontinue'
	if ($Processes.Count -ne 0) {
		foreach ($Process in $Processes) {
			$Process.CloseMainWindow() | Out-Null
		} 
		Start-Sleep -milliseconds 100
		stop-process -name $ProgramName -force -errorAction 'silentlycontinue'
	} else {
		$Processes = get-process -name $ProgramAliasName -errorAction 'silentlycontinue'
		if ($Processes.Count -eq 0) {
			throw "$FullProgramName isn't running"
		}
		foreach ($Process in $Processes) {
			$_.CloseMainWindow() | Out-Null
		} 
		Start-Sleep -milliseconds 100
		stop-process -name $ProgramName -force -errorAction 'silentlycontinue'
	}
	if ($($Processes.Count) -eq 1) {
		"✔️ $FullProgramName closed, 1 process stopped"
	} else {
		"✔️ $FullProgramName closed, $($Processes.Count) processes stopped"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-edge.ps1`

```component VPCard
{
  "title": "close-edge.ps1",
  "desc": "Closes the Edge browser.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-edge.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Microsoft Edge Web browser gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-edge.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-edge.ps1
#
```


@tab Script Content
```powershell
<#
.SYNOPSIS
	Closes the Edge browser
.DESCRIPTION
	This PowerShell script closes the Microsoft Edge Web browser gracefully.
.EXAMPLE
	PS> ./close-edge
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

TaskKill /im msedge.exe /f /t
if ($lastExitCode -ne "0") {
	& "$PSScriptRoot/speak-english.ps1" "Sorry, Microsoft Edge isn't running."
	exit 1
}
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-file-explorer.ps1`

```component VPCard
{
  "title": "close-file-explorer.ps1",
  "desc": "Closes Microsoft File Explorer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Microsoft File Explorer application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-file-explorer.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-file-explorer.ps1
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the File Explorer 
.DESCRIPTION
	This PowerShell script closes the Microsoft File Explorer application gracefully.
.EXAMPLE
	PS> ./close-file-explorer
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

(New-Object -ComObject Shell.Application).Windows() | %{$_.quit()}
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-firefox.ps1`

```component VPCard
{
  "title": "close-firefox.ps1",
  "desc": "Closes the Firefox browser.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-firefox.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Mozilla Firefox Web browser gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-firefox.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-firefox.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Firefox browser 
.DESCRIPTION
	This PowerShell script closes the Mozilla Firefox Web browser gracefully.
.EXAMPLE
	PS> ./close-firefox
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Mozilla Firefox" "firefox" "firefox"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-microsoft-store.ps1`

```component VPCard
{
  "title": "close-microsoft-store.ps1",
  "desc": "Closes the Microsoft Store app.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-microsoft-store.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Microsoft Store application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-microsoft-store.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-microsoft-store.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Microsoft Store app
.DESCRIPTION
	This PowerShell script closes the Microsoft Store application gracefully.
.EXAMPLE
	PS> ./close-microsoft-store.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

TaskKill /im WinStore.App.exe /f /t
if ($lastExitCode -ne "0") {
	& "$PSScriptRoot/speak-english.ps1" "Sorry, Microsoft Store isn't running."
	exit 1
}
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-netflix.ps1`

```component VPCard
{
  "title": "close-netflix.ps1",
  "desc": "Closes the Netflix app.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Netflix application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-netflix.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-netflix.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Netflix app
.DESCRIPTION
	This PowerShell script closes the Netflix application gracefully.
.EXAMPLE
	PS> ./close-netflix.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Netflix" "ApplicationFrameHost" "RuntimeBroker"
exit 0 # success
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`close-onedrive.ps1`

```component VPCard
{
  "title": "close-onedrive.ps1",
  "desc": "Closes Microsoft OneDrive.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-onedrive.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script closes Microsoft's OneDrive folder gracefully.

::: tabs

@tab:active Parameters

```powershell
close-onedrive.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-onedrive
# 
```

@tab Script Content

```powershell

```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-serenade.ps1`

```component VPCard
{
  "title": "close-serenade.ps1",
  "desc": "Closes the Serenade application.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-serenade.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Serenade.ai application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-serenade.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-serenade.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Serenade.ai application
.DESCRIPTION
	This PowerShell script closes the Serenade.ai application gracefully.
.EXAMPLE
	PS> ./close-serenade.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Serenade.ai" "serenade" ""
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-snipping-tool.ps1`

```component VPCard
{
  "title": "close-snipping-tool.ps1",
  "desc": "Closes the Snipping Tool application.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-snipping-tool.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Snipping Tool application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-snipping-tool.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-snipping-tool.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Snipping Tool
.DESCRIPTION
	This PowerShell script closes the Snipping Tool application gracefully.
.EXAMPLE
	PS> ./close-snipping-tool.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Snipping Tool" "SnippingTool.exe" ""
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-spotify.ps1`

```component VPCard
{
  "title": "close-spotify.ps1",
  "desc": "Closes Spotify.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-spotify.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Spotify application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-spotify.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-spotify.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes Spotify
.DESCRIPTION
	This PowerShell script closes the Spotify application gracefully.
.EXAMPLE
	PS> ./close-spotify.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Spotify" "spotify" ""
exit 0 # success
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`close-system-settings.ps1`

```component VPCard
{
  "title": "close-system-settings.ps1",
  "desc": "Closes the System Settings window.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script closes the System Settings window gracefully.

::: tabs

@tab:active Parameters

```powershell
close-system-settings.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-system-settings
#
```

@tab Script Content

```powershell

```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-task-manager.ps1`

```component VPCard
{
  "title": "close-task-manager.ps1",
  "desc": "Closes the Task Manager. ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-task-manager.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Task Manager application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-task-manager.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-task-manager.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Task Manager
.DESCRIPTION
	This PowerShell script closes the Task Manager application gracefully.
.EXAMPLE
	PS> ./close-task-manager.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

tskill taskmgr
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-thunderbird.ps1`

```component VPCard
{
  "title": "close-thunderbird.ps1",
  "desc": "Closes Mozilla Thunderbird. ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-thunderbird.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Mozilla Thunderbird email application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-thunderbird.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-thunderbird.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Thunderbird app
.DESCRIPTION
	This PowerShell script closes the Mozilla Thunderbird email application gracefully.
.EXAMPLE
	PS> ./close-thunderbird.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

TaskKill /im thunderbird.exe
if ($lastExitCode -ne "0") {
	& "$PSScriptRoot/speak-english.ps1" "Sorry, Mozilla Thunderbird isn't running."
	exit 1
}
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-vlc.ps1`

```component VPCard
{
  "title": "close-vlc.ps1",
  "desc": "Closes the VLC media player application. ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the VLC media player application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-vlc.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-vlc.ps1
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the VLC media player application
.DESCRIPTION
	This PowerShell script closes the VLC media player application gracefully.
.EXAMPLE
	PS> ./close-vlc.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "VLC media player" "vlc" "vlc"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`close-windows-terminal.ps1`

```component VPCard
{
  "title": "close-windows-terminal.ps1",
  "desc": "Closes the Windows Terminal application. ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script closes the Windows Terminal application gracefully.

::: tabs

@tab:active Parameters

```powershell
PS> ./close-windows-terminal.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./close-windows-terminal.ps1
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Closes the Windows Terminal app
.DESCRIPTION
	This PowerShell script closes the Windows Terminal application gracefully.
.EXAMPLE
	PS> ./close-windows-terminal.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/close-program.ps1" "Windows Terminal" "WindowsTerminal" "WindowsTerminal"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`enable-god-mode.ps1`

```component VPCard
{
  "title": "enable-god-mode.ps1",
  "desc": "Enables the god mode (adds a new icon to the desktop). ",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script enables the god mode in Windows. It adds a new icon to the desktop.

::: tabs

@tab:active Parameters

```powershell
PS> ./enable-god-mode.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./enable-god-mode.ps1
✔ God mode enabled, please click the new desktop icon
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Enables the god mode
.DESCRIPTION
	This PowerShell script enables the god mode in Windows. It adds a new icon to the desktop.
.EXAMPLE
	PS> ./enable-god-mode.ps1
	✔ God mode enabled, please click the new desktop icon
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$GodModeSplat = @{
		Path = "$HOME\Desktop"
		Name = "GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"
		ItemType = 'Directory'
	}
	$null = New-Item @GodModeSplat
	"✔️ God mode enabled, please click the new desktop icon"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-clipboard.ps1`

```component VPCard
{
  "title": "list-clipboard.ps1",
  "desc": "Lists the contents of the clipboard.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-clipboard.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the contents of the clipboard.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-clipboard.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-clipboard.ps1
# 📋 test
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the contents of the clipboard
.DESCRIPTION
	This PowerShell script lists the contents of the clipboard.
.EXAMPLE
	PS> ./list-clipboard.ps1
	📋 test
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	"📋 $(get-clipboard)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`new-email.ps1`

```component VPCard
{
  "title": "new-email.ps1",
  "desc": "Starts the default email client to write a new email.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/new-email.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script opens the default email client to write a new email.

::: tabs

@tab:active Parameters

```powershell
PS> ./new-email.ps1 [[-EmailAddress] <String>] [<CommonParameters>]

-EmailAddress <String>
    Specifies the email address fill in
    
    Required?                    false
    Position?                    1
    Default value                markus@fleschutz.de
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./new-email.ps1
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the default email client to write a new email
.DESCRIPTION
	This PowerShell script opens the default email client to write a new email.
.PARAMETER EmailAddress
	Specifies the email address fill in
.EXAMPLE
	PS> ./new-email.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$EmailAddress = "markus@fleschutz.de")

try {
	$URL="mailto:$EmailAddress"
	Start-Process $URL
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-amazon-website.ps1`

```component VPCard
{
  "title": "open-amazon-website.ps1",
  "desc": "Opens Amazon's website.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Web browser with the Amazon website.

::: tabs

@tab:active  Parameters

```powershell
PS> open-amazon-website.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-amazon-website
# 
```

@tab Script Content

```powershell

```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-default-browser.ps1`

```component VPCard
{
  "title": "open-default-browser.ps1",
  "desc": "Launches the default Web browser.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-default-browser.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the default Web browser, optional with a given URL.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-default-browser.ps1 [[-URL] <String>] [<CommonParameters>]

-URL <String>
    Specifies the URL
    
    Required?                    false
    Position?                    1
    Default value                http://www.fleschutz.de
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-default-browser
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the default browser
.DESCRIPTION
	This PowerShell script launches the default Web browser, optional with a given URL.
.PARAMETER URL
	Specifies the URL
.EXAMPLE
	PS> ./open-default-browser
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$URL = "http://www.fleschutz.de")

try {
	Start-Process $URL
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-calculator.ps1`

```component VPCard
{
  "title": "open-calculator.ps1",
  "desc": "Starts the calculator program.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-calculator.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the calculator application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-calculator.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-calculator
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the calculator application
.DESCRIPTION
	This PowerShell script launches the calculator application.
.EXAMPLE
	PS> ./open-calculator
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Start-Process ms-calculator:
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-c-drive.ps1`

```component VPCard
{
  "title": "open-c-drive.ps1",
  "desc": "Opens the C drive folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-c-drive.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the File Explorer with the `C:` drive folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-c-drive.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-c-drive
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the C: drive folder
.DESCRIPTION
	This PowerShell script launches the File Explorer with the C: drive folder.
.EXAMPLE
	PS> ./open-c-drive
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-file-explorer.ps1" "C:"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-downloads-folders.ps1`

```component VPCard
{
  "title": "open-downloads-folders.ps1",
  "desc": "Opens the user's downloads folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-downloads-folders.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the File Explorer showing the user's downloads folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-downloads-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-downloads-folder

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the user's downloads folder
.DESCRIPTION
	This PowerShell script launches the File Explorer showing the user's downloads folder.
.EXAMPLE
	PS> ./open-downloads-folder
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "$HOME/Downloads"
	} else {
		$Path = (New-Object -ComObject Shell.Application).NameSpace('shell:Downloads').Self.Path
	}
	if (-not(Test-Path "$Path" -pathType container)) {
		throw "Downloads folder at 📂$Path doesn't exist (yet)"
	}
	& "$PSScriptRoot/open-file-explorer.ps1" $Path
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-dropbox-folder.ps1`

```component VPCard
{
  "title": "open-dropbox-folder.ps1",
  "desc": "Opens the user's Dropbox folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-dropbox-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the File Explorer with the user's Dropbox folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-dropbox-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tba Example

```powershell
PS> ./open-dropbox-folder
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the Dropbox folder
.DESCRIPTION
	This PowerShell script launches the File Explorer with the user's Dropbox folder.
.EXAMPLE
	PS> ./open-dropbox-folder
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$TargetDirs = resolve-path "$HOME/Dropbox*"
	foreach($TargetDir in $TargetDirs) {
		& "$PSScriptRoot/open-file-explorer.ps1" "$TargetDir"
		exit 0 # success
	}
	throw "No Dropbox folder at 📂$HOME/Dropbox"
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-edge.ps1`

```component VPCard
{
  "title": "open-edge.ps1",
  "desc": "Launches the Edge browser.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-edge.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Microsoft Edge Web browser.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-edge.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-edge
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the Edge browser
.DESCRIPTION
	This PowerShell script launches the Microsoft Edge Web browser.
.EXAMPLE
	PS> ./open-edge
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Start-Process microsoft-edge://
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-email-client.ps1`

```component VPCard
{
  "title": "open-email-client.ps1",
  "desc": "Starts the default email client.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-email-client.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the default email client.

::: tabs

@tab Parameters

```powershell
PS> ./open-email-client.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-email-client
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Starts the default email client
.DESCRIPTION
	This PowerShell script launches the default email client.
.EXAMPLE
	PS> ./open-email-client
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	start-process "mailto:markus@fleschutz.de"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-facebook-website.ps1`

```component VPCard
{
  "title": "open-facebook-website.ps1",
  "desc": "Opens Facebook's website.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-facebook-website.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Web browser with the Facebook website.


::: tabs

@tab:active Parameters

```powershell
open-facebook-website.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-facebook-website
#
```

@tab Script Content

```powershell

```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-file-explorer.ps1`	

```component VPCard
{
  "title": "open-file-explorer.ps1",
  "desc": "Opens the File Explorer.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-file-explorer.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```
This PowerShell script launches the File Explorer.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-file-explorer.ps1 [[-Path] <String>] [<CommonParameters>]

-Path <String>
    Specifies the path to the folder to display
    
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
PS> ./open-file-explorer
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the File Explorer
.DESCRIPTION
	This PowerShell script launches the File Explorer.
.EXAMPLE
	PS> ./open-file-explorer
.PARAMETER Path
	Specifies the path to the folder to display 
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Path = "")

try {
	if ("$Path" -ne "") {
		start-process explorer.exe "$Path"
	} else {
		start-process explorer.exe
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---



## <FontIcon icon="iconfont icon-powershell"/>`open-firefox.ps1`	

```component VPCard
{
  "title": "open-firefox.ps1",
  "desc": "Launches the Firefox browser.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-firefox.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Mozilla Firefox Web browser.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-firefox.ps1 [[-URL] <String>] [<CommonParameters>]

-URL <String>
    Specifies an URL
    
    Required?                    false
    Position?                    1
    Default value                http://www.fleschutz.de
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-firefox
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the Firefox browser
.DESCRIPTION
	This PowerShell script launches the Mozilla Firefox Web browser.
.EXAMPLE
	PS> ./open-firefox
.PARAMETER URL
	Specifies an URL
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$URL = "http://www.fleschutz.de")

try {
	$App = Get-AppxPackage -Name Mozilla.FireFox
	if ($App.Status -eq "Ok") {
		# starting Firefox UWP app:
		explorer.exe shell:appsFolder\$($App.PackageFamilyName)!FIREFOX
	} else {
		# starting Firefox program:
		start-process firefox.exe "$URL"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---


## ❌<FontIcon icon="iconfont powershell-file"/>`open-fritz-box.ps1`	

```component VPCard
{
  "title": "open-fritz-box.ps1",
  "desc": "Opens FRITZ!Box's web interface.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-fritz-box.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Web browser with FRITZ!Box's Web interface.

::: tabs

@tab:active Parameters

```powershell
/home/markus/Repos/PowerShell/Scripts/open-fritz-box.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-fritz-box
# 
```

@tab Script Content

```powershell
```

::: 

---


## ❌<FontIcon icon="iconfont powershell-file"/>`open-github.ps1`	

```component VPCard
{
  "title": "open-github.ps1",
  "desc": "Opens GitHub's website.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-github.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Web browser with the GitHub website.

::: tabs

@tab:active Parameters

```powershell
/home/markus/Repos/PowerShell/Scripts/open-github.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-github
#
```

@tab Script Content

```powershell
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-google-contacts.ps1`	

```component VPCard
{
  "title": "open-google-contacts.ps1",
  "desc": "Opens Google Contacts.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-contacts.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Contacts website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-google-contacts.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-contacts
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Contacts
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Contacts website.
.EXAMPLE
	PS> ./open-google-contacts
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://contacts.google.com"
exit 0 # success
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-google-earth.ps1`	

```component VPCard
{
  "title": "open-google-earth.ps1",
  "desc": "Opens Google Earth.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-earth.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Earth website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-google-earth.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-earth
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Earth
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Earth website.
.EXAMPLE
	PS> ./open-google-earth
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://earth.google.com/web/"
exit 0 # success
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-google-mail.ps1`	

```component VPCard
{
  "title": "open-google-mail.ps1",
  "desc": "Opens Google Mail.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-mail.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Mail website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-google-mail.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-mail
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Mail
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Mail website.
.EXAMPLE
	PS> ./open-google-mail
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://mail.google.com"
exit 0 # success
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-google-maps.ps1`	

```component VPCard
{
  "title": "open-google-maps.ps1",
  "desc": "Opens Google Maps.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-maps.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Maps website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-google-maps.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-maps
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Maps
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Maps website.
.EXAMPLE
	PS> ./open-google-maps
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://www.google.com/maps"
exit 0 # success
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-google-news.ps1`	

```component VPCard
{
  "title": "open-google-news.ps1",
  "desc": "Opens Google News.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-news.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google News website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-google-news.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-news
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google News
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google News website.
.EXAMPLE
	PS> ./open-google-news
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://news.google.com"
exit 0 # success
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-google-play.ps1`

```component VPCard
{
  "title": "open-google-play.ps1",
  "desc": "Opens Google Play. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-play.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Play website.

::: tabs 

@tab:active Parameters

```powershell
PS> ./open-google-play.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-play

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Play
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Play website.
.EXAMPLE
	PS> ./open-google-play
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://play.google.com/store"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-google-search.ps1`

```component VPCard
{
  "title": "open-google-search.ps1",
  "desc": "Opens Google Search. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-search.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Search website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-google-search.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-search
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Search
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Search website.
.EXAMPLE
	PS> ./open-google-search
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://google.com"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-google-translate.ps1`

```component VPCard
{
  "title": "open-google-translate.ps1",
  "desc": "Opens Google Translate. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-google-translate.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script launches the Web browser with the Google Translate website.

::: tabs

@tab:activeParameters

```powershell
PS> ./open-google-translate.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-google-translate
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Google Translate
.DESCRIPTION
	This PowerShell script launches the Web browser with the Google Translate website.
.EXAMPLE
	PS> ./open-google-translate
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://translate.google.com"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-home-folder.ps1`

```component VPCard
{
  "title": "open-home-folder.ps1",
  "desc": "Opens the user's home folder. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-home-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the File Explorer with the user's home folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-home-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-home-folder
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the home folder
.DESCRIPTION
	This script launches the File Explorer with the user's home folder.
.EXAMPLE
	PS> ./open-home-folder
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$TargetDir = resolve-path "$HOME"
	if (-not(test-path "$TargetDir" -pathType container)) {
		throw "Home folder at 📂$TargetDir doesn't exist (yet)"
	}
	& "$PSScriptRoot/open-file-explorer.ps1" "$TargetDir"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-music-folder.ps1`

```component VPCard
{
  "title": "open-music-folder.ps1",
  "desc": "Opens the user's music folder. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-music-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the File Explorer with the user's music folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-music-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-music-folder
#
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the music folder
.DESCRIPTION
	This script launches the File Explorer with the user's music folder.
.EXAMPLE
	PS> ./open-music-folder
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$TargetDir = resolve-path "$HOME/Music"
	if (-not(test-path "$TargetDir" -pathType container)) {
		throw "Music folder at 📂$TargetDir doesn't exist (yet)"
	}
	& "$PSScriptRoot/open-file-explorer.ps1" "$TargetDir"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-netflix.ps1`

```component VPCard
{
  "title": "open-netflix.ps1",
  "desc": "Starts the Netflix app. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-netflix.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Netflix application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-netflix.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-netflix
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the Netflix app
.DESCRIPTION
	This script launches the Netflix application.
.EXAMPLE
	PS> ./open-netflix
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Start-Process netflix:
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-microsoft-store.ps1`

```component VPCard
{
  "title": "open-microsoft-store.ps1",
  "desc": "Launches the Microsoft Store app. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-microsoft-store.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Microsoft Store application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-microsoft-store.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-microsoft-store
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Starts the Microsoft Store app
.DESCRIPTION
	This script launches the Microsoft Store application.
.EXAMPLE
	PS> ./open-microsoft-store
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Start-Process ms-windows-store:
exit 0 # success
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-notepad.ps1`

```component VPCard
{
  "title": "open-notepad.ps1",
  "desc": "Starts the Notepad app. Read more...",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-notepad.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)```"
}
```

This script launches the Notepad application.

::: tabs


@tab:active Parameters

```powershell
PS>./open-notepad.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-notepad
# 
```

@tab Script Content

```powershell
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-onedrive-folder.ps1`

```component VPCard
{
  "title": "open-onedrive-folder.ps1",
  "desc": "Opens the user's OneDrive folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-onedrive-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches Microsoft OneDrive with the user's OneDrive folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-onedrive-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-onedrive
#
```

@tab Script Content

```powershell
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-pictures-folder.ps1`

```component VPCard
{
  "title": "open-pictures-folder.ps1",
  "desc": "Opens the user's pictures folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-pictures-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the File Explorer with the user's pictures folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-pictures-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-pictures-folder
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the user's pictures folder
.DESCRIPTION
	This script launches the File Explorer with the user's pictures folder.
.EXAMPLE
	PS> ./open-pictures-folder
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$TargetDir = resolve-path "$HOME/Pictures"
	if (-not(test-path "$TargetDir" -pathType container)) {
		throw "Pictures folder at 📂$TargetDir doesn't exist (yet)"
	}
	& "$PSScriptRoot/open-file-explorer.ps1" "$TargetDir"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-recycle-bin.ps1`

```component VPCard
{
  "title": "open-recycle-bin.ps1",
  "desc": "Opens the user's recycle bin folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-recycle-bin.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the File Explorer with the user's recycle bin folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-recycle-bin.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-recycle-bin
#
```

@tab Script Content

```powershell
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-repos-folder.ps1`

```component VPCard
{
  "title": "open-repos-folder.ps1",
  "desc": "Opens the user's Git repositories folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-repos-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the File Explorer with the user's Git repositories folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-repos-folder.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-repos-folder
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens the Git repositories folder
.DESCRIPTION
	This script launches the File Explorer with the user's Git repositories folder.
.EXAMPLE
	PS> ./open-repos-folder
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$TargetDir = Resolve-Path "$HOME/Repos"
	if (-not(Test-Path "$TargetDir" -pathType container)) {
		throw "Repos folder at 📂$TargetDir doesn't exist (yet)"
	}
	& "$PSScriptRoot/open-file-explorer.ps1" "$TargetDir"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-snipping-tool.ps1`

```component VPCard
{
  "title": "open-snipping-tool.ps1",
  "desc": "Starts the Snipping Tool.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-snipping-tool.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Snipping Tool application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-snipping-tool.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-snipping-tool
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Starts the Snipping Tool
.DESCRIPTION
	This script launches the Snipping Tool application.
.EXAMPLE
	PS> ./open-snipping-tool
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Start-Process SnippingTool.exe
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-speed-test.ps1`

```component VPCard
{
  "title": "open-speed-test.ps1",
  "desc": "Opens Cloudflare's speed test.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-speed-test.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Web browser with Cloudflare's speed test website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-speed-test.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-speed-test
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens Cloudflare's Speed Test
.DESCRIPTION
	This script launches the Web browser with Cloudflare's speed test website.
.EXAMPLE
	PS> ./open-speed-test
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

& "$PSScriptRoot/open-default-browser.ps1" "https://speed.cloudflare.com"
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-spotify.ps1`

```component VPCard
{
  "title": "open-spotify.ps1",
  "desc": "Opens Spotify.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-spotify.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Spotify application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-spotify.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-spotify
#
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the Spotify app
.DESCRIPTION
	This script launches the Spotify application.
.EXAMPLE
	PS> ./open-spotify
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Start-Process spotify:
exit 0 # success
```

:::

---
## ❌<FontIcon icon="iconfont powershell-file"/> `open-system-settings.ps1`

```component VPCard
{
  "title": "open-system-settings.ps1",
  "desc": "Opens the system settings of Windows.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-system-settings.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Windows system settings application.

::: tabs

@tab:active Parameters

```powershell
PS> open-system-settings.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```


@tab Example

```powershell
PS> ./open-system-settings
#
```

@tab Script Content

```powershell
```

:::

---


## <FontIcon icon="iconfont icon-powershell"/>`open-task-manager.ps1`

```component VPCard
{
  "title": "open-task-manager.ps1",
  "desc": "Starts the Task Manager.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-task-manager.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Windows Task Manager application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-task-manager.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-task-manager
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Starts the Task Manager
.DESCRIPTION
	This script launches the Windows Task Manager application.
.EXAMPLE
	PS> ./open-task-manager
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Start-Process taskmgr.exe
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`open-videos-folder.ps1`

```component VPCard
{
  "title": "open-videos-folder.ps1",
  "desc": "Opens the user's videos folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-videos-folder.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Windows Terminal application.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-windows-terminal.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-windows-terminal
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Launches the Windows Terminal app
.DESCRIPTION
	This script launches the Windows Terminal application.
.EXAMPLE
	PS> ./open-windows-terminal
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

Start-Process wt.exe
exit 0 # success
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-windows-terminal.ps1`

```component VPCard
{
  "title": "open-windows-terminal.ps1",
  "desc": "Launches Windows Terminal.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-windows-terminal.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

## open-wikipedia-website.ps1 - Opens the Wikipedia website

This script launches the Web browser with the Wikipedia website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-wikipedia-website.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-wikipedia-website.ps1
# 
```

@tab Script Content

```powershell
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-wikipedia-website.ps1`

```component VPCard
{
  "title": "open-wikipedia-website.ps1",
  "desc": "Opens Wikipedia's website.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-wikipedia-website.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This script launches the Web browser with the YouTube website.

::: tabs

@tab:active Parameters

```powershell
PS> ./open-youtube-website.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./open-youtube-website

```

@tab Script Content

```powershell
```

:::

---

## ❌<FontIcon icon="iconfont powershell-file"/>`open-youtube-website.ps1`

```component VPCard
{
  "title": "open-youtube-website.ps1",
  "desc": "Opens YouTube's website.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/open-youtube-website.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

@tab Script Content

```powershell
```

:::

---

## `remind-me.ps1`

powershellcomponent VPCard
{
  "title": "remind-me.ps1",
  "desc": "Creates a scheduled task that will display a popup message.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/remind-me.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script creates a scheduled task that will display a popup message.

::: tabs

@tab:active Parameters

```powershell
PS> ./remind-me.ps1 [[-Message] <String>] [[-Time] <DateTime>] [<CommonParameters>]

-Message <String>    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Time <DateTime>
    
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
PS> ./remind-me "Dentist" "4/10/2021 12:00 PM"
# TaskPath                                       TaskName                          State
# --------                                       --------                          -----
# \                                              Reminder_451733811                Ready
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a scheduled task that will display a popup message
.DESCRIPTION
	This PowerShell script creates a scheduled task that will display a popup message.
.EXAMPLE
	PS> ./remind-me "Dentist" "4/10/2021 12:00 PM"

	TaskPath                                       TaskName                          State
	--------                                       --------                          -----
	\                                              Reminder_451733811                Ready
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

#requires -version 4

param([string]$Message = "", [datetime]$Time)

try {
	if ($Message -eq "") { $Message = read-host "Enter reminder message" }

	$Task = New-ScheduledTaskAction -Execute msg -Argument "* $Message"
	$Trigger = New-ScheduledTaskTrigger -Once -At $Time
	$Random = (Get-Random)
	Register-ScheduledTask -Action $Task -Trigger $Trigger -TaskName "Reminder_$Random" -Description "Reminder"
	exit 0
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`save-screenshot.ps1`

```component VPCard
{
  "title": "save-screenshot.ps1",
  "desc": "Saves a single screenshot.",
  "link": "https://github.com/fleschutz/PowerShell/master/Docs/save-screenshot.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script takes a single screenshot and saves it into a target folder (default is the user's screenshots folder).

::: tabs

@tab:active Parameters

```powershell
PS> ./save-screenshot.ps1 [[-TargetFolder] <String>] [<CommonParameters>]

-TargetFolder <String>
    Specifies the target folder (the user's screenshots folder by default)
    
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
PS> ./save-screenshot
#	✔️ screenshot saved to C:\Users\Markus\Pictures\Screenshots\2021-10-10T14-33-22.png
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Saves a single screenshot
.DESCRIPTION
	This PowerShell script takes a single screenshot and saves it into a target folder (default is the user's screenshots folder).
.PARAMETER TargetFolder
	Specifies the target folder (the user's screenshots folder by default)
.EXAMPLE
	PS> ./save-screenshot
 	✔️ screenshot saved to C:\Users\Markus\Pictures\Screenshots\2021-10-10T14-33-22.png
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$TargetFolder = "")

function GetScreenshotsFolder {
        if ($IsLinux) {
                $Path = "$HOME/Pictures"
                if (-not(Test-Path "$Path" -pathType container)) { throw "Pictures folder at $Path doesn't exist (yet)"}
                if (Test-Path "$Path/Screenshots" -pathType container) { $Path = "$Path/Screenshots" }
        } else {
                $Path = [Environment]::GetFolderPath('MyPictures')
                if (-not(Test-Path "$Path" -pathType container)) { throw "Pictures folder at $Path doesn't exist (yet)" }
                if (Test-Path "$Path\Screenshots" -pathType container) { $Path = "$Path\Screenshots" }
        }
        return $Path
}

function TakeScreenshot { param([string]$FilePath)
	Add-Type -Assembly System.Windows.Forms            
	$ScreenBounds = [Windows.Forms.SystemInformation]::VirtualScreen
	$ScreenshotObject = New-Object Drawing.Bitmap $ScreenBounds.Width, $ScreenBounds.Height
	$DrawingGraphics = [Drawing.Graphics]::FromImage($ScreenshotObject)
	$DrawingGraphics.CopyFromScreen( $ScreenBounds.Location, [Drawing.Point]::Empty, $ScreenBounds.Size)
	$DrawingGraphics.Dispose()
	$ScreenshotObject.Save($FilePath)
	$ScreenshotObject.Dispose()
}

try {
	if ("$TargetFolder" -eq "") { $TargetFolder = GetScreenshotsFolder }
	$Time = (Get-Date)
	$Filename = "$($Time.Year)-$($Time.Month)-$($Time.Day)T$($Time.Hour)-$($Time.Minute)-$($Time.Second).png"
	$FilePath = (Join-Path $TargetFolder $Filename)
	TakeScreenshot $FilePath

	"✔️ screenshot saved to $FilePath"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`set-wallpaper.ps1`

```component VPCard
{
  "title": "set-wallpaper.ps1",
  "desc": "Sets the given image as wallpaper.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/set-wallpaper.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script sets the given image file as desktop wallpaper (.JPG or .PNG supported)

::: tabs

@tab:active Parameters

```powershell
PS> ./set-wallpaper.ps1 [[-ImageFile] <String>] [[-Style] <String>] [<CommonParameters>]

-ImageFile <String>
    Specifies the path to the image file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Style <String>
    Specifies either Fill, Fit, Stretch, Tile, Center, or Span (default)
    
    Required?                    false
    Position?                    2
    Default value                Span
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./set-wallpaper C:\ocean.jpg
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the given image file as desktop wallpaper
.DESCRIPTION
	This PowerShell script sets the given image file as desktop wallpaper (.JPG or .PNG supported)
.PARAMETER ImageFile
	Specifies the path to the image file
.PARAMETER Style
        Specifies either Fill, Fit, Stretch, Tile, Center, or Span (default)
.EXAMPLE
	PS> ./set-wallpaper C:\ocean.jpg
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ImageFile = "", [string]$Style = "Span")

function SetWallPaper {
	param([string]$Image, [ValidateSet('Fill', 'Fit', 'Stretch', 'Tile', 'Center', 'Span')][string]$Style)
 
	$WallpaperStyle = switch($Style) {
	"Fill"    {"10"}
	"Fit"     {"6"}
	"Stretch" {"2"}
	"Tile"    {"0"}
	"Center"  {"0"}
	"Span"    {"22"}
	}
 
	if ($Style -eq "Tile") {
		New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name WallpaperStyle -PropertyType String -Value $WallpaperStyle -Force
		New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name TileWallpaper -PropertyType String -Value 1 -Force
	} else {
		New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name WallpaperStyle -PropertyType String -Value $WallpaperStyle -Force
		New-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name TileWallpaper -PropertyType String -Value 0 -Force
	}
	Add-Type -TypeDefinition @" 
	using System; 
	using System.Runtime.InteropServices;
  
	public class Params
	{ 
	    [DllImport("User32.dll",CharSet=CharSet.Unicode)] 
	    public static extern int SystemParametersInfo (Int32 uAction, 
							   Int32 uParam, 
							   String lpvParam, 
							   Int32 fuWinIni);
	}
"@ 
  
	$SPI_SETDESKWALLPAPER = 0x0014
	$UpdateIniFile = 0x01
	$SendChangeEvent = 0x02
  
	$fWinIni = $UpdateIniFile -bor $SendChangeEvent
  
	$ret = [Params]::SystemParametersInfo($SPI_SETDESKWALLPAPER, 0, $Image, $fWinIni)
}
 
try {
	if ($ImageFile -eq "" ) { $ImageFile = read-host "Enter path to image file" }

	SetWallPaper -Image $ImageFile -Style $Style
	"✔️  Done."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

<TagLinks/>
