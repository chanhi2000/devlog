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

@tab Parameters

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


<TagLinks/>
