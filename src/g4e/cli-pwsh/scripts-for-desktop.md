---
lang: ko-KR
title: 💻 Scripts for the Desktop
description: 🧙‍♂️Powershell > 💻 Scripts for the Desktop
tags: ["powershell", "windows", "script", "useful-script"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## <FontIcon icon="iconfont icon-file"/>`close-calculator.ps1`

```card
title: close-calculator.ps1
desc: Closes the calculator application.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-cortana.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-cortana.ps1`

```card
title: close-cortana.ps1
desc: Closes Cortana.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-cortana.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-chrome.ps1`	

```card
title: close-chrome.ps1
desc: Closes the Chrome browser.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-chrome.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-program.ps1`

```card
title: close-program.ps1
desc: Closes the given program gracefully.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-program.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-edge.ps1`

```card
title: close-edge.ps1
desc: Closes the Edge browser.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-edge.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-file-explorer.ps1`

```card
title: close-file-explorer.ps1
desc: Closes Microsoft File Explorer.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-firefox.ps1`

```card
title: close-firefox.ps1
desc: Closes the Firefox browser.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-firefox.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-microsoft-store.ps1`

```card
title: close-microsoft-store.ps1
desc: Closes the Microsoft Store app.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-microsoft-store.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-netflix.ps1`

```card
title: close-netflix.ps1
desc: Closes the Netflix app.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## ❌<FontIcon icon="iconfont icon-file"/>`close-onedrive.ps1`

```card
title: close-onedrive.ps1
desc: Closes Microsoft OneDrive.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-onedrive.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-serenade.ps1`

```card
title: close-serenade.ps1
desc: Closes the Serenade application.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-serenade.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-snipping-tool.ps1`

```card
title: close-snipping-tool.ps1
desc: Closes the Snipping Tool application.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-snipping-tool.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-spotify.ps1`

```card
title: close-spotify.ps1
desc: Closes Spotify.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-spotify.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## ❌<FontIcon icon="iconfont icon-file"/>`close-system-settings.ps1`

```card
title: close-system-settings.ps1
desc: Closes the System Settings window.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-task-manager.ps1`

```card
title: close-task-manager.ps1
desc: Closes the Task Manager. 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-task-manager.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-thunderbird.ps1`

```card
title: close-thunderbird.ps1
desc: Closes Mozilla Thunderbird. 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-thunderbird.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-vlc.ps1`

```card
title: close-vlc.ps1
desc: Closes the VLC media player application. 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`close-windows-terminal.ps1`

```card
title: close-windows-terminal.ps1
desc: Closes the Windows Terminal application. 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`enable-god-mode.ps1`

```card
title: enable-god-mode.ps1
desc: Enables the god mode (adds a new icon to the desktop). 
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-clipboard.ps1`

```card
title: list-clipboard.ps1
desc: Lists the contents of the clipboard.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-clipboard.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`new-email.ps1`

```card
title: new-email.ps1
desc: Starts the default email client to write a new email.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-email.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## ❌<FontIcon icon="iconfont icon-file"/>`open-amazon-website.ps1`

```card
title: open-amazon-website.ps1
desc: Opens Amazon's website.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/close-netflix.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`open-default-browser.ps1`

```card
title: open-default-browser.ps1
desc: Launches the default Web browser.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/open-default-browser.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`open-calculator.ps1`

```card
title: open-calculator.ps1
desc: Starts the calculator program.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/open-calculator.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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


<TagLinks/>
