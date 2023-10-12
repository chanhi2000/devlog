---
lang: ko-KR
title: 📁Scripts for Files & Folders
description: 🧙‍♂️Powershell > 📁Scripts for Files & Folders
tags: ["powershell", "windows", "script", "useful-script"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## <FontIcon icon="iconfont icon-file"/> `cd-autostart.ps1`

```card
title: cd-autostart.ps1
desc: Set the working directory to the user's autostart folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-autostart.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's autostart folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-autostart.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-autostart.ps1
# 📂C:\Users\Markus\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's autostart folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's autostart folder.
.EXAMPLE
	PS> ./cd-autostart.ps1
	📂C:\Users\Markus\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "$HOME/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup"
	if (-not(Test-Path "$Path" -pathType container)) {
		throw "Autostart folder at 📂$Path doesn't exist (yet)"
	}
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-desktop.ps1`

```card
title: cd-desktop.ps1
desc: Set the working directory to the user's desktop folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-desktop.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's desktop folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-desktop.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-desktop
# 📂/home/Markus/Desktop
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's desktop folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's desktop folder.
.EXAMPLE
	PS> ./cd-desktop
	📂/home/Markus/Desktop
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "~/Desktop"
	} else {
		$Path = [Environment]::GetFolderPath('DesktopDirectory')
	}
	if (Test-Path "$Path" -pathType container) {
		Set-Location "$Path"
		"📂$Path"
		exit 0 # success
	}
	throw "User's desktop folder at 📂$Path doesn't exist (yet)"
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-docs.ps1`

```card
title: cd-docs.ps1
desc: Set the working directory to the user's documents folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-docs.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the documents folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-docs.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-docs
# 📂C:\Users\Markus\Documents
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the documents folder
.DESCRIPTION
	This PowerShell script changes the working directory to the documents folder.
.EXAMPLE
	PS> ./cd-docs
	📂C:\Users\Markus\Documents
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "$HOME/Documents"
	} else {
		$Path = [Environment]::GetFolderPath('MyDocuments')
	}
	if (-not(Test-Path "$Path" -pathType container)) {
		throw "Documents folder at 📂$Path doesn't exist (yet)"
	}
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-downloads.ps1`

```card
title: cd-downloads.ps1
desc: Set the working directory to the user's downloads folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-downloads.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's downloads folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-downloads.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-downloads
# 📂C:\Users\Markus\Downloads
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's downloads folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's downloads folder.
.EXAMPLE
	PS> ./cd-downloads
	📂C:\Users\Markus\Downloads
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "~/Downloads"
	} else {
		$Path = (New-Object -ComObject Shell.Application).NameSpace('shell:Downloads').Self.Path
	}
	if (Test-Path "$Path" -pathType container) {
		Set-Location "$Path"
		"📂$Path"
		exit 0 # success
	}
	throw "User's downloads folder at 📂$Path doesn't exist (yet)"
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-dropbox.ps1`

```card
title: cd-dropbox.ps1
desc: Set the working directory to the user's Dropbox folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-dropbox.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's Dropbox folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-dropbox.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-dropbox
# 📂C:\Users\Markus\Dropbox
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's Dropbox folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's Dropbox folder.
.EXAMPLE
	PS> ./cd-dropbox
	📂C:\Users\Markus\Dropbox
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "$HOME/Dropbox"
	if (-not(Test-Path "$Path" -pathType container)) {
		throw "Dropbox folder at 📂$Path doesn't exist (yet)"
	}
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-home.ps1`

```card
title: cd-home.ps1
desc: Set the working directory to the user's home folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-home.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's home directory.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-home.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-home
# 📂C:\Users\Markus
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's home folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's home directory.
.EXAMPLE
	PS> ./cd-home
	📂C:\Users\Markus
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path -Path "~"
	if (Test-Path "$Path" -pathType container) {
		Set-Location "$Path"
		"📂$Path"
		exit 0 # success
	}
	throw "User's home folder at 📂$Path doesn't exist (yet)"
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-music.ps1`

```card
title: cd-music.ps1
desc: Set the working directory to the user's music folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-music.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's music folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-music.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-music
# 📂C:\Users\Markus\Music

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's music folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's music folder.
.EXAMPLE
	PS> ./cd-music
	📂C:\Users\Markus\Music
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "~/Music"
	} else {
		$Path = [Environment]::GetFolderPath('MyMusic')
	}
	if (Test-Path "$Path" -pathType container) {
		Set-Location "$Path"
		"📂$Path"
		exit 0 # success
	}
	throw "User's music folder at 📂$Path doesn't exist (yet)"
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-onedrive.ps1`

```card
title: cd-onedrive.ps1
desc: Set the working directory to the user's OneDrive folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-onedrive.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's OneDrive folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-onedrive.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-onedrive
# 📂C:\Users\Markus\OneDrive
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's OneDrive folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's OneDrive folder.
.EXAMPLE
	PS> ./cd-onedrive
	📂C:\Users\Markus\OneDrive
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "$HOME/OneDrive"
	if (-not(Test-Path "$Path" -pathType container)) {
		throw "OneDrive folder at 📂$Path doesn't exist (yet)"
	}
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-pics.ps1`

```card
title: cd-pics.ps1
desc: Set the working directory to the user's pictures folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-pics.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's pictures folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-pics.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-pics
# 📂C:\Users\Markus\Pictures
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's pictures folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's pictures folder.
.EXAMPLE
	PS> ./cd-pics
	📂C:\Users\Markus\Pictures
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "$HOME/Pictures"
	} else {
		$Path = [Environment]::GetFolderPath('MyPictures')
	}
	if (-not(Test-Path "$Path" -pathType container)) { throw "Pictures folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-recycle-bin.ps1`

```card
title: cd-recycle-bin.ps1
desc: Set the working directory to the user's recycle bin folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-recycle-bin.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-recycle-bin.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-recycle-bin.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's recycle bin folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's recycle bin folder.
.EXAMPLE
	PS> ./cd-recycle-bin
	📂C:\$Recycle.Bin\S-1-5-21-123404-23309-294260-1001
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

function GetCurrentUserSID { [CmdletBinding()] param()
	Add-Type -AssemblyName System.DirectoryServices.AccountManagement
	return ([System.DirectoryServices.AccountManagement.UserPrincipal]::Current).SID.Value
}


try {
	if ($IsLinux) {
		$Path = "$HOME/.local/share/Trash/"
	} else {
		$Path = "C:\$Recycle.Bin\" + "$(GetCurrentUserSID)"
	}
	if (-not(Test-Path "$Path" -pathType container)) { throw "Recycle bin folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-repos.ps1`

```card
title: cd-repos.ps1
desc: Change the working directory to the user's Git repositories folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-repos.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's Git repositories folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-repos.ps1 [[-Subpath] <String>] [<CommonParameters>]

-Subpath <String>
    Specifies an additional relative subpath (optional)
    
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
PS> ./cd-repos
# 📂C:\Users\Markus\source\Repos
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's repos folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's Git repositories folder.
.PARAMETER Subpath
	Specifies an additional relative subpath (optional)
.EXAMPLE
	PS> ./cd-repos
	📂C:\Users\Markus\source\Repos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Subpath = "")

try {
	if (Test-Path "$HOME/Repos" -pathType Container) {		# try short name
		$Path = "$HOME/Repos/$Subpath"
	} elseif (Test-Path "$HOME/Repositories" -pathType Container) {	# try long name
		$Path = "$HOME/Repositories/$Subpath"
	} elseif (Test-Path "$HOME/source/repos" -pathType Container) { # try Visual Studio default
		$Path = "$HOME/source/repos/$Subpath"
	} else {
		throw "The folder for Git repositories in your home directory doesn't exist (yet)."
	}
	if (-not(Test-Path "$Path" -pathType Container)) { throw "The path to 📂$Path doesn't exist (yet)." }
	$Path = Resolve-Path "$Path"
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error: $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-root.ps1`

```card
title: cd-root.ps1
desc: Set the working directory to the root directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-root.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the current working directory to the root directory (<FontIcon icon="iconfont icon-folder"/>`C:\` on Windows).

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-root.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-root
# 📂C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the root directory 
.DESCRIPTION
	This PowerShell script changes the current working directory to the root directory (C:\ on Windows).
.EXAMPLE
	PS> ./cd-root
	📂C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {	$Path = "/" } else { $Path = "C:\" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-scripts.ps1`

```card
title: cd-scripts.ps1
desc: Set the working directory to the PowerShell Scripts folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-scripts.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the PowerShell scripts folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-scripts.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-scripts
# 📂C:\Users\Markus\source\repos\PowerShell\Scripts
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the PowerShell scripts folder
.DESCRIPTION
	This PowerShell script changes the working directory to the PowerShell scripts folder.
.EXAMPLE
	PS> ./cd-scripts
	📂C:\Users\Markus\source\repos\PowerShell\Scripts
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "$PSScriptRoot"
	if (-not(Test-Path "$Path" -pathType container)) { throw "PowerShell scripts folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-ssh.ps1`

```card
title: cd-ssh.ps1
desc: Set the working directory to the user's SSH folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-ssh.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's SSH folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-ssh.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-ssh
# 📂C:\Users\Markus\.ssh
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's SSH folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's SSH folder.
.EXAMPLE
	PS> ./cd-ssh
	📂C:\Users\Markus\.ssh
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "~/.ssh"
	if (-not(Test-Path "$Path" -pathType container)) { throw "User's SSH folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-up.ps1`

```card
title: cd-up.ps1
desc: Set the working directory to one directory level up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to one directory level up.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-up.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-up
# 📂C:\Users
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to one level up
.DESCRIPTION
	This PowerShell script changes the working directory to one directory level up.
.EXAMPLE
	PS> .\cd-up
	📂C:\Users
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path ".."
	if (-not(Test-Path "$Path" -pathType container)) { throw "Folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-up2.ps1`

```card
title: cd-up2.ps1
desc: Set the working directory to two directory levels up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up2.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to two directory level up.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-up2.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-up2
# 📂C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to two directory levels up
.DESCRIPTION
	This PowerShell script changes the working directory to two directory level up.
.EXAMPLE
	PS> ./cd-up2
	📂C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "../.."
	if (-not(Test-Path "$Path" -pathType container)) { throw "Folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-up3.ps1`

```card
title: cd-up3.ps1
desc: Set the working directory to three directory levels up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up3.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to three directory levels up.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-up3.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-up3
📂C:\

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to three directory levels up
.DESCRIPTION
	This PowerShell script changes the working directory to three directory levels up.
.EXAMPLE
	PS> ./cd-up3
	📂C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "../../.."
	if (-not(Test-Path "$Path" -pathType container)) { throw "Folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-up4.ps1`

```card
title: cd-up4.ps1
desc: Set the working directory to four directory levels up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up4.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to four directory levels up.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-up4.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-up4
# 📂C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to four directory levels up
.DESCRIPTION
	This PowerShell script changes the working directory to four directory levels up.
.EXAMPLE
	PS> ./cd-up4
	📂C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path "../../../.."
	if (-not(Test-Path "$Path" -pathType container)) { throw "Folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `cd-videos.ps1`

```card
title: cd-videos.ps1
desc: Set the working directory to the user's videos folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-videos.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script changes the working directory to the user's videos folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./cd-videos.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./cd-videos
# 📂C:\Users\Markus\Videos
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets the working directory to the user's videos folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's videos folder.
.EXAMPLE
	PS> ./cd-videos
	📂C:\Users\Markus\Videos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	if ($IsLinux) {
		$Path = Resolve-Path "$HOME/Videos"
	} else {
		$Path = [Environment]::GetFolderPath('MyVideos')
	}
	if (-not(Test-Path "$Path" -pathType container)) { throw "Videos folder at 📂$Path doesn't exist (yet)" }
	Set-Location "$Path"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `check-symlinks.ps1`

```card
title: check-symlinks.ps1
desc: Checks every symlink in a directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-symlinks.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script checks every symbolic link in a folder (including subfolders).
It returns the number of broken symlinks as exit value.

::: tabs

@tab Parameters

```powershell
PS> ./check-symlinks.ps1 [[-Folder] <String>] [<CommonParameters>]

-Folder <String>
    Specifies the path to the folder
    
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
PS> ./check-symlinks C:\Users
# ⏳ Checking symlinks at 📂C:\Users including subfolders...
# ✔️ Found 0 broken symlinks at 📂C:\Users in 60 sec
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks symlinks in a folder
.DESCRIPTION
	This PowerShell script checks every symbolic link in a folder (including subfolders).
	It returns the number of broken symlinks as exit value.
.PARAMETER folder
	Specifies the path to the folder
.EXAMPLE
	PS> ./check-symlinks C:\Users
	⏳ Checking symlinks at 📂C:\Users including subfolders...
	✔️ Found 0 broken symlinks at 📂C:\Users in 60 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Folder = "")

try {
	if ($Folder -eq "" ) { $Folder = read-host "Enter the path to the folder" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()
	$FullPath = Resolve-Path "$Folder"
	"⏳ Checking symlinks at 📂$FullPath including subfolders..."

	[int]$NumTotal = [int]$NumBroken = 0
	Get-ChildItem $FullPath -recurse  | Where { $_.Attributes -match "ReparsePoint" } | ForEach-Object {
		$Symlink = $_.FullName
		$Target = ($_ | Select-Object -ExpandProperty Target -ErrorAction Ignore)
		if ($Target) {
			$path = $_.FullName + "\..\" + ($_ | Select-Object -ExpandProperty Target)
			$item = Get-Item $path -ErrorAction Ignore
			if (!$item) {
				$NumBroken++
				"Symlink $Symlink to: $Target seems broken (#$NumBroken)"
			}
		}
		$NumTotal++
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	if ($NumTotal -eq 0) {
		"✔️ No symlink found at 📂$FullPath in $Elapsed sec" 
	} elseif ($NumBroken -eq 1) {
		"✔️ Found $NumBroken broken symlink at 📂$FullPath in $Elapsed sec"
	} else {
		"✔️ Found $NumBroken broken symlinks at 📂$FullPath in $Elapsed sec"
	}
	exit $NumBroken
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `check-xml-file.ps1`

```card
title: check-xml-file.ps1
desc: Checks the given XML file for validity.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-xml-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script checks the given XML file for validity.

::: tabs

@tab Parameters

```powershell
PS> ./check-xml-file.ps1 [[-file] <String>] [<CommonParameters>]

-file <String>
    Specifies the path to the XML file to check
    
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
PS> ./check-xml-file myfile.xml
# ✔️ XML file is valid
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the given XML file for validity
.DESCRIPTION
	This PowerShell script checks the given XML file for validity.
.PARAMETER file
	Specifies the path to the XML file to check
.EXAMPLE
	PS> ./check-xml-file myfile.xml
	✔️ XML file is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$file = "")

try {
	if ($file -eq "" ) { $file = read-host "Enter path to XML file" }

	$XmlFile = Get-Item $file
	
	$script:ErrorCount = 0
	
	# Perform the XSD Validation
	$ReaderSettings = New-Object -TypeName System.Xml.XmlReaderSettings
	$ReaderSettings.ValidationType = [System.Xml.ValidationType]::Schema
	$ReaderSettings.ValidationFlags = [System.Xml.Schema.XmlSchemaValidationFlags]::ProcessInlineSchema -bor [System.Xml.Schema.XmlSchemaValidationFlags]::ProcessSchemaLocation
	$ReaderSettings.add_ValidationEventHandler({ $script:ErrorCount++ })
	$Reader = [System.Xml.XmlReader]::Create($XmlFile.FullName, $ReaderSettings)
	while ($Reader.Read()) { }
	$Reader.Close()
	
	if ($script:ErrorCount -gt 0) {
		write-warning "Invalid XML file"
		exit 1
	} 

	"✔️ XML file is valid"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `clear-recycle-bin.ps1`

```card
title: clear-recycle-bin.ps1
desc: Removes the content of the recycle bin folder (can not be undo!).
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/clear-recycle-bin.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script removes the content of the recycle bin folder permanently.
IMPORTANT NOTE: this cannot be undo!

::: tabs

@tab Parameters

```powershell
PS> ./clear-recycle-bin.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./clear-recycle-bin.ps1
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Clears the recycle bin folder
.DESCRIPTION
	This PowerShell script removes the content of the recycle bin folder permanently.
	IMPORTANT NOTE: this cannot be undo!
.EXAMPLE
	PS> ./clear-recycle-bin
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Clear-RecycleBin -Confirm:$false
	if ($lastExitCode -ne "0") { throw "'Clear-RecycleBin' failed" }

	& "$PSScriptRoot/speak-english.ps1" "It's clean now."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `copy-photos-sorted.ps1`

```card
title: copy-photos-sorted.ps1
desc: Copy image files sorted by year and month.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/copy-photos-sorted.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

::: tabs

@tab Parameters

```powershell
PS> ./copy-photos-sorted.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./copy-photos-sorted.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Copy photos sorted by year and month
.DESCRIPTION
	This PowerShell script copies image files from sourceDir to targetDir sorted by year and month.
.PARAMETER sourceDir
	Specifies the path to the source folder
.PARAMTER targetDir
	Specifies the path to the target folder
.EXAMPLE
	PS> ./copy-photos-sorted.ps1 D:\iPhone\DCIM C:\MyPhotos
	⏳ Copying IMG_20230903_134445.jpg to C:\MyPhotos\2023\09 SEP\...
	✔️ Copied 1 photo to 📂C:\MyPhotos in 41 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$sourceDir = "", [string]$targetDir = "")

function CopyFile { param([string]$sourcePath, [string]$targetDir, [int]$date, [string]$filename)
	[int]$year = $date / 10000
	[int]$month = ($date / 100) % 100
	$monthDir = switch($month) {
	1  {"01 JAN"}
	2  {"02 FEB"}
	3  {"03 MAR"}
	4  {"04 APR"}
	5  {"05 MAY"}
	6  {"06 JUN"}
	7  {"07 JUL"}
	8  {"08 AUG"}
	9  {"09 SEP"}
	10 {"10 OCT"}
	11 {"11 NOV"}
	12 {"12 DEC"}
	}
	$TargetPath = "$targetDir/$year/$monthDir/$filename"
	if (Test-Path "$TargetPath" -pathType leaf) {
		Write-Host "⏳ Skipping existing $targetDir\$year\$monthDir\$filename..."
	} else {
		Write-Host "⏳ Copying $filename to $targetDir\$year\$monthDir\..."
		New-Item -path "$targetDir" -name "$year" -itemType "directory" -force | out-null
		New-Item -path "$targetDir/$year" -name "$monthDir" -itemType "directory" -force | out-null
		Copy-Item "$sourcePath" "$TargetPath" -force
	}
}

try {
	if ($sourceDir -eq "") { $sourceDir = Read-Host "Enter file path to the source directory" }
	if ($targetDir -eq "") { $targetDir = Read-Host "Enter file path to the target directory" }
	$stopWatch = [system.diagnostics.stopWatch]::startNew()

	Write-Host "⏳ Checking source directory 📂$($sourceDir)..."
	if (-not(Test-Path "$sourceDir" -pathType container)) { throw "Can't access source directory: $sourceDir" }
	$files = (Get-ChildItem "$sourceDir\*.jpg" -attributes !Directory)

	Write-Host "⏳ Checking target directory 📂$($targetDir)..."
	if (-not(Test-Path "$targetDir" -pathType container)) { throw "Can't access target directory: $targetDir" }

	foreach($file in $files) {
		$filename = (Get-Item "$file").Name
		if ("$filename" -like "IMG_*_*.jpg") {
			$Array = $filename.split("_")
			CopyFile "$file" "$targetDir" $Array[1] "$filename"
		} elseif ("$filename" -like "IMG-*-*.jpg") {
			$Array = $filename.split("-")
			CopyFile "$file" "$targetDir" $Array[1] "$filename"
		} elseif ("$filename" -like "PANO_*_*.jpg") {
			$Array = $filename.split("_")
			CopyFile "$file"  "$targetDir" $Array[1] "$filename"
		} elseif ("$filename" -like "PANO-*-*.jpg") {
			$Array = $filename.split("-")
			CopyFile "$file" "$targetDir" $Array[1] "$filename"
		} elseif ("$filename" -like "SAVE_*_*.jpg") {
			$Array = $filename.split("_")
			CopyFile "$file" "$targetDir" $Array[1] "$filename"
		} else {
			Write-Host "⏳ Skipping $filename with unknown filename format..."
		}
	}
	[int]$elapsed = $stopWatch.Elapsed.TotalSeconds
	"✔️ Copied $($files.Count) photos to 📂$targetDir in $elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `decrypt-file.ps1`

```card
title: decrypt-file.ps1
desc: Decrypts the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/decrypt-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script decrypts a file using the given password and AES encryption.

::: tabs

@tab Parameters

```powershell
PS> ./decrypt-file.ps1 [[-Path] <String>] [[-Password] <String>] [<CommonParameters>]

-Path <String>
    Specifies the path to the file to decrypt
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Password <String>
    Specifies the password
    
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
PS> ./decrypt-file.ps1 C:\MyFile.txt "123"
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Decrypts a file
.DESCRIPTION
	This PowerShell script decrypts a file using the given password and AES encryption.
.PARAMETER Path
	Specifies the path to the file to decrypt
.PARAMETER Password
	Specifies the password 
.EXAMPLE
	PS> ./decrypt-file.ps1 C:\MyFile.txt "123"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Path = "", [string]$Password = "")


function DecryptFile {
[CmdletBinding(DefaultParameterSetName='SecureString')]
[OutputType([System.IO.FileInfo[]])]
Param(
    [Parameter(Mandatory=$true, Position=1, ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]
    [Alias('PSPath','LiteralPath')]
    [string[]]$FileName,
    [Parameter(Mandatory=$false, Position=2, ValueFromPipelineByPropertyName=$true)]
    [ValidateSet('AES','DES','RC2','Rijndael','TripleDES')]
    [String]$Algorithm = 'AES',
    [Parameter(Mandatory=$true, Position=3, ValueFromPipelineByPropertyName=$true, ParameterSetName='SecureString')]
    [System.Security.SecureString]$Key,
    [Parameter(Mandatory=$true, Position=3, ParameterSetName='PlainText')]
    [String]$KeyAsPlainText,
    [Parameter(Mandatory=$false, Position=4, ValueFromPipelineByPropertyName=$true)]
    [System.Security.Cryptography.CipherMode]$CipherMode = 'CBC',
    [Parameter(Mandatory=$false, Position=5, ValueFromPipelineByPropertyName=$true)]
    [System.Security.Cryptography.PaddingMode]$PaddingMode = 'PKCS7',
    [Parameter(Mandatory=$false, Position=6)]
    [String]$Suffix,
    [Parameter()]
    [Switch]$RemoveSource
)
    Process
    {
        try
        {
            if($PSCmdlet.ParameterSetName -eq 'PlainText')
            {
                $Key = $KeyAsPlainText | ConvertTo-SecureString -AsPlainText -Force
            }

            $BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($Key)
            $EncryptionKey = [System.Convert]::FromBase64String([System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR))

            $Crypto = [System.Security.Cryptography.SymmetricAlgorithm]::Create($Algorithm)
            $Crypto.Mode = $CipherMode
            $Crypto.Padding = $PaddingMode
            $Crypto.KeySize = $EncryptionKey.Length*8
            $Crypto.Key = $EncryptionKey
        }
        Catch
        {
            Write-Error $_ -ErrorAction Stop
        }

        if(-not $PSBoundParameters.ContainsKey('Suffix'))
        {
            $Suffix = ".$Algorithm"
        }

        $Files = Get-Item -LiteralPath $FileName

        ForEach($File in $Files)
        {
            If(-not $File.Name.EndsWith($Suffix))
            {
                Write-Error "$($File.FullName) does not have an extension of '$Suffix'."
                Continue
            }

            $DestinationFile = $File.FullName -replace "$Suffix$"

            Try
            {
                $FileStreamReader = New-Object System.IO.FileStream($File.FullName, [System.IO.FileMode]::Open)
                $FileStreamWriter = New-Object System.IO.FileStream($DestinationFile, [System.IO.FileMode]::Create)

                [Byte[]]$LenIV = New-Object Byte[] 4
                $FileStreamReader.Seek(0, [System.IO.SeekOrigin]::Begin) | Out-Null
                $FileStreamReader.Read($LenIV,  0, 3) | Out-Null
                [Int]$LIV = [System.BitConverter]::ToInt32($LenIV,  0)
                [Byte[]]$IV = New-Object Byte[] $LIV
                $FileStreamReader.Seek(4, [System.IO.SeekOrigin]::Begin) | Out-Null
                $FileStreamReader.Read($IV, 0, $LIV) | Out-Null
                $Crypto.IV = $IV

                $Transform = $Crypto.CreateDecryptor()
                $CryptoStream = New-Object System.Security.Cryptography.CryptoStream($FileStreamWriter, $Transform, [System.Security.Cryptography.CryptoStreamMode]::Write)
                $FileStreamReader.CopyTo($CryptoStream)

                $CryptoStream.FlushFinalBlock()
                $CryptoStream.Close()
                $FileStreamReader.Close()
                $FileStreamWriter.Close()

                if($RemoveSource){Remove-Item $File.FullName}

                Get-Item $DestinationFile | Add-Member –MemberType NoteProperty –Name SourceFile –Value $File.FullName -PassThru
            }
            Catch
            {
                Write-Error $_
                If($FileStreamWriter)
                {
                    $FileStreamWriter.Close()
                    Remove-Item -LiteralPath $DestinationFile -Force
                }
                Continue
            }
            Finally
            {
                if($CryptoStream){$CryptoStream.Close()}
                if($FileStreamReader){$FileStreamReader.Close()}
                if($FileStreamWriter){$FileStreamWriter.Close()}
            }
        }
    }
}


try {
	if ($Path -eq "" ) { $Path = read-host "Enter path to file" }
	if ($Password -eq "" ) { $Password = read-host "Enter password" }
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	$PasswordBase64 = [System.Convert]::ToBase64String($Password)
	DecryptFile "$Path" -Algorithm AES -KeyAsPlainText $PasswordBase64 -RemoveSource

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️  file decrypted in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `download-dir.ps1`

```card
title: download-dir.ps1
desc: Downloads a directory tree from the given URL.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/download-dir.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script downloads a folder (including subfolders) from the given URL.

::: tabs

@tab Parameters

```powershell
PS> ./download-dir.ps1 [[-URL] <String>] [<CommonParameters>]

-URL <String>
    Specifies the URL where to download from
    
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
PS> ./download-dir.ps1 https://www.cnn.com
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Downloads a folder (including subfolders) from an URL
.DESCRIPTION
	This PowerShell script downloads a folder (including subfolders) from the given URL.
.PARAMETER URL
	Specifies the URL where to download from
.EXAMPLE
	PS> ./download-dir.ps1 https://www.cnn.com
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$URL = "")

try {
	if ($URL -eq "") { $URL = Read-Host "Enter directory URL to download" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	& wget --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'wget' - make sure wget is installed and available" }

	& wget --mirror --convert-links --adjust-extension --page-requisites --no-parent $URL --directory-prefix . --no-verbose
	if ($lastExitCode -ne "0") { throw "Can't execute 'wget --mirror $URL'" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ downloaded directory from $URL in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `download-file.ps1`

```card
title: download-file.ps1
desc: Downloads a file from the given URL.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/download-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script downloads a file from the given URL

::: tabs

@tab Parameters

```powershell
PS> ./download-file.ps1 [[-URL] <String>] [<CommonParameters>]

-URL <String>
    Specifies the URL where to download from
    
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
PS> ./download-file.ps1 https://www.cnn.com/index.html
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Downloads a file from an URL
.DESCRIPTION
	This PowerShell script downloads a file from the given URL
.PARAMETER URL
	Specifies the URL where to download from
.EXAMPLE
	PS> ./download-file.ps1 https://www.cnn.com/index.html
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$URL = "")

try {
	if ($URL -eq "") { $URL = read-host "Enter file URL to download" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	& wget --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'wget' - make sure wget is installed and available" }

	& wget --mirror --convert-links --adjust-extension --page-requisites --no-parent $URL --directory-prefix . --no-verbose
	if ($lastExitCode -ne "0") { throw "Can't execute 'wget --mirror $URL'" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ downloaded file from $URL in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `edit.ps1`

```card
title: edit.ps1
desc: Edits the given file with the built-in text editor.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/edit.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script opens a text editor to edit the given file.

::: tabs

@tab Parameters

```powershell
PS> ./edit.ps1 [[-Filename] <String>] [<CommonParameters>]

-Filename <String>
    Specifies the path to the filename
    
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
PS> ./edit.ps1 C:\MyFile.txt
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Opens an editor to edit a file
.DESCRIPTION
	This PowerShell script opens a text editor to edit the given file.
.PARAMETER Filename
	Specifies the path to the filename
.EXAMPLE
	PS> ./edit.ps1 C:\MyFile.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Filename = "")

try {
	if ($IsLinux) {
		& vi "$Filename"
		if ($lastExitCode -ne "0") { throw "Can't execute 'vi' - make sure vi is installed and available" }
	} else {
		& notepad.exe "$Filename"
		if ($lastExitCode -ne "0") { throw "Can't execute 'notepad.exe' - make sure notepad.exe is installed and available" }
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `encrypt-file.ps1`

```card
title: encrypt-file.ps1
desc: Encrypts the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/encrypt-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script encrypts a file using the given password and AES encryption.

::: tabs

@tab Parameters

```powershell
PS> ./encrypt-file.ps1 [[-Path] <String>] [[-Password] <String>] [<CommonParameters>]

-Path <String>
    Specifies the path to the file to encrypt
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Password <String>
    Specifies the password to use
    
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
PS> ./encrypt-file.ps1 C:\MyFile.txt "123"
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Encrypts a file
.DESCRIPTION
	This PowerShell script encrypts a file using the given password and AES encryption.
.PARAMETER Path
	Specifies the path to the file to encrypt
.PARAMETER Password
	Specifies the password to use
.EXAMPLE
	PS> ./encrypt-file.ps1 C:\MyFile.txt "123"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Path = "", [string]$Password = "")

function EncryptFile {
[CmdletBinding(DefaultParameterSetName='SecureString')]
[OutputType([System.IO.FileInfo[]])]
Param(
    [Parameter(Mandatory=$true, Position=1, ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]
    [Alias('PSPath','LiteralPath')]
    [string[]]$FileName,
    [Parameter(Mandatory=$false, Position=2)]
    [ValidateSet('AES','DES','RC2','Rijndael','TripleDES')]
    [String]$Algorithm = 'AES',
    [Parameter(Mandatory=$false, Position=3, ParameterSetName='SecureString')]
    [System.Security.SecureString]$Key = (New-CryptographyKey -Algorithm $Algorithm),
    [Parameter(Mandatory=$true, Position=3, ParameterSetName='PlainText')]
    [String]$KeyAsPlainText,
    [Parameter(Mandatory=$false, Position=4)]
    [System.Security.Cryptography.CipherMode]$CipherMode,
    [Parameter(Mandatory=$false, Position=5)]
    [System.Security.Cryptography.PaddingMode]$PaddingMode,
    [Parameter(Mandatory=$false, Position=6)]
    [String]$Suffix = ".$Algorithm",
    [Parameter()]
    [Switch]$RemoveSource
)
    begin {
        try {
            if ($PSCmdlet.ParameterSetName -eq 'PlainText') {
                $Key = $KeyAsPlainText | ConvertTo-SecureString -AsPlainText -Force
            }

            $BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($Key)
            $EncryptionKey = [System.Convert]::FromBase64String([System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR))

            $Crypto = [System.Security.Cryptography.SymmetricAlgorithm]::Create($Algorithm)
            if ($PSBoundParameters.ContainsKey('CipherMode')) {
                $Crypto.Mode = $CipherMode
            }
            if ($PSBoundParameters.ContainsKey('PaddingMode')) {
                $Crypto.Padding = $PaddingMode
            }
            $Crypto.KeySize = $EncryptionKey.Length*8
            $Crypto.Key = $EncryptionKey
        } catch {
            Write-Error $_ -ErrorAction Stop
        }
    }
    process {
        $Files = Get-Item -LiteralPath $FileName
    
        foreach($File in $Files) {
            $DestinationFile = $File.FullName + $Suffix

            try {
                $FileStreamReader = New-Object System.IO.FileStream($File.FullName, [System.IO.FileMode]::Open)
                $FileStreamWriter = New-Object System.IO.FileStream($DestinationFile, [System.IO.FileMode]::Create)

                $Crypto.GenerateIV()
                $FileStreamWriter.Write([System.BitConverter]::GetBytes($Crypto.IV.Length), 0, 4)
                $FileStreamWriter.Write($Crypto.IV, 0, $Crypto.IV.Length)

                $Transform = $Crypto.CreateEncryptor()
                $CryptoStream = New-Object System.Security.Cryptography.CryptoStream($FileStreamWriter, $Transform, [System.Security.Cryptography.CryptoStreamMode]::Write)
                $FileStreamReader.CopyTo($CryptoStream)
    
                $CryptoStream.FlushFinalBlock()
                $CryptoStream.Close()
                $FileStreamReader.Close()
                $FileStreamWriter.Close()

                if ($RemoveSource) {
			Remove-Item -LiteralPath $File.FullName
		}

                $result = Get-Item $DestinationFile
                $result | Add-Member –MemberType NoteProperty –Name SourceFile –Value $File.FullName
                $result | Add-Member –MemberType NoteProperty –Name Algorithm –Value $Algorithm
                $result | Add-Member –MemberType NoteProperty –Name Key –Value $Key
                $result | Add-Member –MemberType NoteProperty –Name CipherMode –Value $Crypto.Mode
                $result | Add-Member –MemberType NoteProperty –Name PaddingMode –Value $Crypto.Padding
                $result
            } catch {
                Write-Error $_
                if ($FileStreamWriter) {
                    $FileStreamWriter.Close()
                    Remove-Item -LiteralPath $DestinationFile -Force
                }
                continue
            } finally {
                if($CryptoStream){$CryptoStream.Close()}
                if($FileStreamReader){$FileStreamReader.Close()}
                if($FileStreamWriter){$FileStreamWriter.Close()}
            }
        }
    }
}


try {
	if ($Path -eq "" ) { $Path = read-host "Enter path to file" }
	if ($Password -eq "" ) { $Password = read-host "Enter password"	}
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	[char[]]$PasswordAsArray = $Password
	$PasswordAsBase64 = [System.Convert]::ToBase64String($PasswordAsArray)
	EncryptFile "$Path" -Algorithm AES -KeyAsPlainText $PasswordAsBase64 -RemoveSource

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️  file encrypted in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `get-md5.ps1`

```card
title: get-md5.ps1
desc: Prints the MD5 checksum of the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/get-md5.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script calculates and prints the MD5 checksum of the given file.

::: tabs

@tab Parameters

```powershell
PS> ./get-md5.ps1 [[-file] <String>] [<CommonParameters>]

-file <String>
    Specifies the path to the file
    
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
PS> ./get-md5 C:\MyFile.txt
# ✔️ MD5 hash is 041E16F16E60AD250EB794AF0681BD4A
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints the MD5 checksum of a file
.DESCRIPTION
	This PowerShell script calculates and prints the MD5 checksum of the given file.
.PARAMETER file
	Specifies the path to the file
.EXAMPLE
	PS> ./get-md5 C:\MyFile.txt
	✔️ MD5 hash is 041E16F16E60AD250EB794AF0681BD4A
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$file = "")

try {
	if ($file -eq "" ) { $file = Read-Host "Enter path to file" }

	$Result = Get-Filehash $file -algorithm MD5

	"✔️ MD5 hash is $($Result.Hash)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `get-sha1.ps1`

```card
title: get-sha1.ps1
desc: Prints the SHA1 checksum of the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/get-sha1.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script calculates and prints the SHA1 checksum of the given file.

::: tabs

@tab Parameters

```powershell
PS> ./get-sha1.ps1 [[-file] <String>] [<CommonParameters>]

-file <String>
    Specifies the path to the file
    
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
PS> ./get-sha1 C:\MyFile.txt
# ✔️ SHA1 hash is 8105D424D350E308AED92BD9DDEB74A1B53C5D7C
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints the SHA1 checksum of a file
.DESCRIPTION
	This PowerShell script calculates and prints the SHA1 checksum of the given file.
.PARAMETER file
	Specifies the path to the file
.EXAMPLE
	PS> ./get-sha1 C:\MyFile.txt
	✔️ SHA1 hash is 8105D424D350E308AED92BD9DDEB74A1B53C5D7C
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$file = "")

try {
	if ($file -eq "" ) { $file = Read-Host "Enter the filename" }

	$Result = get-filehash $file -algorithm SHA1

	"✔️ SHA1 hash is $($Result.Hash)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `get-sha256.ps1`

```card
title: get-sha256.ps1
desc: Prints the SHA256 checksum of the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/get-sha256.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script calculates and prints the SHA256 checksum of the given file.

::: tabs

@tab Parameters

```powershell
PS> ./get-sha256.ps1 [[-file] <String>] [<CommonParameters>]

-file <String>
    Specifies the path to the file
    
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
PS> ./get-sha256 C:\MyFile.txt
# ✔️ SHA256 hash is: CEB4AD71524996EB8AA3ADCE04F1E45636A4B58B8BF4462E6971CF2E56B4293E
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints the SHA256 checksum of a file
.DESCRIPTION
	This PowerShell script calculates and prints the SHA256 checksum of the given file.
.PARAMETER file
	Specifies the path to the file
.EXAMPLE
	PS> ./get-sha256 C:\MyFile.txt
	✔️ SHA256 hash is: CEB4AD71524996EB8AA3ADCE04F1E45636A4B58B8BF4462E6971CF2E56B4293E
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$file = "")

try {
	if ($file -eq "" ) { $file = Read-Host "Enter the filename" }

	$Result = get-filehash $file -algorithm SHA256

	"✔️ SHA256 hash is: $($Result.Hash)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `inspect-exe.ps1`

```card
title: inspect-exe.ps1
desc: Prints basic information of the given executable file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/inspect-exe.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script prints basic information of an executable file.

::: tabs

@tab:active Parameters

```powershell
PS> ./inspect-exe.ps1 [[-PathToExe] <String>] [<CommonParameters>]

-PathToExe <String>
    Specifies the path to the executable file
    
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
PS> ./inspect-exe C:\MyApp.exe
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints basic information of an executable file
.DESCRIPTION
	This PowerShell script prints basic information of an executable file.
.PARAMETER PathToExe
	Specifies the path to the executable file
.EXAMPLE
	PS> ./inspect-exe C:\MyApp.exe
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$PathToExe = "")

try {
	if ($PathToExe -eq "" ) { $PathToExe = read-host "Enter path to executable file" }

	Get-ChildItem $PathToExe | % {$_.VersionInfo} | Select *
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::



---

## ❌<FontIcon icon="iconfont icon-file"/> `list-dir-tree.ps1`

```card
title: list-dir-tree.ps1
desc: Lists the directory tree content.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-dir-tree.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-empty-dirs.ps1`

```card
title: list-empty-dirs.ps1
desc: Lists empty subfolders within the given directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-empty-dirs.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script scans and lists all empty subfolders within the given directory tree.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-empty-dirs.ps1 [[-DirTree] <String>] [<CommonParameters>]

-DirTree <String>
    Specifies the path to the directory tree (current working directory by default)
    
    Required?                    false
    Position?                    1
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-empty-dirs.ps1 C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists empty subfolders
.DESCRIPTION
	This PowerShell script scans and lists all empty subfolders within the given directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree (current working directory by default)
.EXAMPLE
	PS> ./list-empty-dirs.ps1 C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$DirTree = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	$DirTree = Resolve-Path "$DirTree"
	Write-Progress "Listing empty subfolders in $DirTree..."
	[int]$Count = 0
	Get-ChildItem "$DirTree" -attributes Directory -recurse | Where {$_.GetFileSystemInfos().Count -eq 0} | ForEach-Object {
		"📂$($_.FullName)"
		$Count++
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ found $Count empty subfolders within directory tree $DirTree in $Elapsed sec." 
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `list-empty-files.ps1`

```card
title: list-empty-files.ps1
desc: Lists empty files within the given directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-empty-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script scans and lists all empty files within the given directory tree.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-empty-files.ps1 [[-DirTree] <String>] [<CommonParameters>]

-DirTree <String>
    Specifies the path to the directory tree
    
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
PS> ./list-empty-files.ps1 C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists empty files within a directory tree
.DESCRIPTION
	This PowerShell script scans and lists all empty files within the given directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./list-empty-files.ps1 C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$DirTree = "")

try {
	if ($DirTree -eq "" ) { $DirTree = read-host "Enter the path to the directory tree" }

	[int]$Count = 0
	write-progress "Listing empty files in $DirTree ..."
	get-childItem $DirTree -attributes !Directory -recurse | where {$_.Length -eq 0} | foreach-object {
		write-output $_.FullName
		$Count++
	}

	"✔️ found $Count empty file(s)" 
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `list-files.ps1`

```card
title: list-files.ps1
desc: Lists all files in the given folder and also in every subfolder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script lists all files within the given directory tree.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-files.ps1 [[-DirTree] <String>] [<CommonParameters>]

-DirTree <String>
    Specifies the path to the directory tree
    
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
PS> ./list-files.ps1 C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all files in a directory tree
.DESCRIPTION
	This PowerShell script lists all files within the given directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./list-files.ps1 C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$DirTree = "")

try {
	if ($DirTree -eq "" ) { $DirTree = read-host "Enter path to directory tree" }

	Get-ChildItem -path $DirTree -recurse | select FullName
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `list-folder.ps1`

```card
title: list-folder.ps1
desc: Lists the folder content.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-folder.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script lists the content of a directory (alphabetically formatted in columns).

::: tabs

@tab:active Parameters

```powershell
PS> ./list-folder.ps1 [[-searchPattern] <String>] [<CommonParameters>]

-searchPattern <String>
    Specifies the search pattern ("*" by default which means anything)
    
    Required?                    false
    Position?                    1
    Default value                *
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-folder.ps1 C:\*
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists a folder
.DESCRIPTION
	This PowerShell script lists the content of a directory (alphabetically formatted in columns).
.PARAMETER SearchPattern
	Specifies the search pattern ("*" by default which means anything)
.EXAMPLE
	PS> ./list-folder.ps1 C:\*
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$searchPattern = "*")

function GetFileIcon { param([string]$suffix)
	switch ($suffix) {
	".csv"	{return "📊"}
	".epub"	{return "📓"}
	".exe"  {return "⚙️"}
	".gif"	{return "📸"}
	".iso"	{return "📀"}
	".jpg"	{return "📸"}
	".mp3"	{return "🎵"}
	".mkv"	{return "🎬"}
	".zip"  {return "🎁"}
	default {return "📄"}
	}
}

function ListFolder { param([string]$searchPattern)
	$items = Get-ChildItem -path "$searchPattern"
	foreach ($item in $items) {
		$name = $item.Name
		if ($name[0] -eq '.') { continue } # hidden file/dir
		if ($item.Mode -like "d*") { $icon = "📂" } else { $icon = GetFileIcon $item.Extension }
		New-Object PSObject -property @{ Name = "$icon$name" }
	}
}

try {
	ListFolder $searchPattern | Format-Wide -autoSize
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `list-hidden-files.ps1`

```card
title: list-hidden-files.ps1
desc: Lists hidden files within the given directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-hidden-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script scans and lists all hidden files in a directory tree.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-hidden-files.ps1 [[-DirTree] <String>] [<CommonParameters>]

-DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-hidden-files.ps1 C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists hidden files in a directory tree
.DESCRIPTION
	This PowerShell script scans and lists all hidden files in a directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./list-hidden-files.ps1 C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$DirTree = "$PWD")

try {
	$DirTree = resolve-path "$DirTree"
	write-progress "Listing hidden files in $DirTree ..."

	[int]$Count = 0
	get-childItem "$DirTree" -attributes Hidden -recurse | foreach-object {
		"📄 $($_.FullName)"
		$Count++
	}
	"✔️ directory tree $DirTree has $Count hidden file(s)" 
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `list-recycle-bin.ps1`

```card
title: list-recycle-bin.ps1
desc: Lists the content of the recycle bin folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-recycle-bin.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script lists the content of the recycle bin folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-recycle-bin.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-recycle-bin.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the content of the recycle bin folder
.DESCRIPTION
	This PowerShell script lists the content of the recycle bin folder.
.EXAMPLE
	PS> ./list-recycle-bin.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	(New-Object -ComObject Shell.Application).NameSpace(0x0a).Items() | Select-Object Name,Size,Path
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::


---

## <FontIcon icon="iconfont icon-file"/> `list-unused-files.ps1`

```card
title: list-unused-files.ps1
desc: Lists unused files in a directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-unused-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script scans and lists files in a folder with last access time older than number of days.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-unused-files.ps1 [[-DirTree] <String>] [[-Days] <Int32>] [<CommonParameters>]

-DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Days <Int32>
    Specifies the number of days
    
    Required?                    false
    Position?                    2
    Default value                100
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-unused-files.ps1 C:\ 100
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists unused files in a directory tree
.DESCRIPTION
	This PowerShell script scans and lists files in a folder with last access time older than number of days.
.PARAMETER DirTree
	Specifies the path to the directory tree
.PARAMETER Days
	Specifies the number of days
.EXAMPLE
	PS> ./list-unused-files.ps1 C:\ 100
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$DirTree = "", [int]$Days = 100)

write-host "Listing files in $DirTree with last access time older than $Days days"

try {
	$cutOffDate = (Get-Date).AddDays(-$Days)

	Get-ChildItem -path $DirTree -recurse | Where-Object {$_.LastAccessTime -le $cutOffDate} | select fullname

	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `list-workdir.ps1`

```card
title: list-workdir.ps1
desc: Lists the current working directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-workdir.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script lists the path to current working directory (but not the content itself).

::: tabs

@tab:active Parameters

```powershell
PS> ./list-workdir.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-workdir.ps1
# 📂C:\Users\Markus
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the current working directory
.DESCRIPTION
	This PowerShell script lists the path to current working directory (but not the content itself).
.EXAMPLE
	PS> ./list-workdir.ps1
	📂C:\Users\Markus
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$Path = Resolve-Path -Path "$PWD"
	"📂$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `make-install.ps1`

```card
title: make-install.ps1
desc: Installs built executables and libs to the installation directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/make-install.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script copies newer EXE's + DLL's from the build directory to the installation directory.

::: tabs

@tab:active Parameters

```powershell
PS> ./make-install.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./make-install.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Copies newer EXE's + DLL's from the build directory to the installation directory
.DESCRIPTION
	This PowerShell script copies newer EXE's + DLL's from the build directory to the installation directory.
.EXAMPLE
	PS> ./make-install.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

set SRC_DIR=%1
set "DST_DIR=C:\Program Files\MyApp\bin"
set FILTER=*.exe *.dll
set OPTIONS=/E /njh /np

try {
	title Syncing to %DST_DIR% ...
	robocopy %SRC_DIR% %DST_DIR% %FILTER% %OPTIONS%

	echo ------------------------------------------------------------------------------
	echo.

	"✔️ synced to %DST_DIR%"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `new-shortcut.ps1`

```card
title: new-shortcut.ps1
desc: Creates a new shortcut file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-shortcut.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script creates a new shortcut file.

::: tabs

@tab:active Parameters

```powershell
PS> ./new-shortcut.ps1 [[-shortcut] <String>] [[-target] <String>] [[-description] <String>] [<CommonParameters>]

-shortcut <String>
    Specifies the shortcut filename
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-target <String>
    Specifies the path to the target
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-description <String>
    Specifies a description
    
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
PS> ./new-shortcut C:\Temp\HDD C:\

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a new shortcut file
.DESCRIPTION
	This PowerShell script creates a new shortcut file.
.PARAMETER shortcut
	Specifies the shortcut filename
.PARAMETER target
	Specifies the path to the target
.PARAMETER description
	Specifies a description
.EXAMPLE
	PS> ./new-shortcut C:\Temp\HDD C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$shortcut = "", [string]$target = "", [string]$description)

try {
	if ($shortcut -eq "" ) { $shortcut = read-host "Enter new shortcut filename" }
	if ($target -eq "" ) { $target = read-host "Enter path to target" }
	if ($description -eq "" ) { $description = read-host "Enter description" }

	$sh = new-object -ComObject WScript.Shell
	$sc = $sh.CreateShortcut("$shortcut.lnk")
	$sc.TargetPath = "$target"
	$sc.WindowStyle = "1"
	$sc.IconLocation = "C:\Windows\System32\SHELL32.dll, 3"
	$sc.Description = "$description"
	$sc.save()

	"✔️ created new shortcut $shortcut ⭢ $target"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `new-symlink.ps1`

```card
title: new-symlink.ps1
desc: Creates a new symbolic link file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-symlink.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script creates a new symbolic link file.

::: tabs

@tab:active Parameters

```powershell
PS> ./new-symlink.ps1 [[-symlink] <String>] [[-target] <String>] [<CommonParameters>]

-symlink <String>
    Specifies the new symlink filename
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-target <String>
    Specifies the path to target
    
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
PS> ./new-symlink.ps1 C:\Temp\HDD C:\
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a new symbolic link file
.DESCRIPTION
	This PowerShell script creates a new symbolic link file.
.PARAMETER symlink
	Specifies the new symlink filename
.PARAMETER target
	Specifies the path to target
.EXAMPLE
	PS> ./new-symlink.ps1 C:\Temp\HDD C:\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$symlink = "", [string]$target = "")

try {
	if ($symlink -eq "" ) { $symlink = read-host "Enter new symlink filename" }
	if ($target -eq "" ) { $target = read-host "Enter path to target" }

	new-item -path "$symlink" -itemType SymbolicLink -Value "$target"

	"✔️ created new symlink $symlink ⭢ $target"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `new-zipfile.ps1`

```card
title: new-zipfile.ps1
desc: Creates a new .zip file from a directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-zipfile.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

This PowerShell script creates a new .ZIP file from a folder (including subfolders).

::: tabs

@tab:active Parameters

```powershell
PS> ./new-zipfile.ps1 [[-folder] <String>] [<CommonParameters>]

-folder <String>
    Specifies the path to the folder
    
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
PS> ./new-zipfile.ps1 C:\Windows
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a new .ZIP file from a folder (including subfolders)
.DESCRIPTION
	This PowerShell script creates a new .ZIP file from a folder (including subfolders).
.PARAMETER folder
	Specifies the path to the folder
.EXAMPLE
	PS> ./new-zipfile.ps1 C:\Windows
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$folder = "")

try {
	if ($folder -eq "" ) { $folder = read-host "Enter the path to the folder to zip" }
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	$folder = resolve-path $folder
	compress-archive -path $folder -destinationPath $folder.zip

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ created zip file $($folder).zip in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-file"/> `publish-to-ipfs.ps1`

```card
title: publish-to-ipfs.ps1
desc: Publishes the given files or directory to IPFS.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/publish-to-ipfs.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `remove-empty-dirs.ps1`

```card
title: remove-empty-dirs.ps1
desc: Removes empty subfolders within the given directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/remove-empty-dirs.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `replace-in-files.ps1`

```card
title: replace-in-files.ps1
desc: Search and replace a pattern in the given files by the replacement.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/replace-in-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `search-filename.ps1`

```card
title: search-filename.ps1
desc: Searches the directory tree for filenames by given pattern.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/search-filename.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `search-files.ps1`

```card
title: search-files.ps1
desc: Searches the given pattern in the given files.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/search-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `upload-file.ps1`

```card
title: upload-file.ps1
desc: Uploads the local file to the given FTP server.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/upload-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

<TagLinks />