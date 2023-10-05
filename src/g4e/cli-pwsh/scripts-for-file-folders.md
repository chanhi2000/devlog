---
lang: ko-KR
title: 📁 Scripts for Files & Folders
description: 🧙‍♂️Powershell > 📁 Scripts for Files & Folders
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

---

## <FontIcon icon="iconfont icon-file"/> `cd-root.ps1`

```card
title: cd-root.ps1
desc: Set the working directory to the root directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-root.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-scripts.ps1`

```card
title: cd-scripts.ps1
desc: Set the working directory to the PowerShell Scripts folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-scripts.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-ssh.ps1`

```card
title: cd-ssh.ps1
desc: Set the working directory to the user's SSH folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-ssh.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-up.ps1`

```card
title: cd-up.ps1
desc: Set the working directory to one directory level up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-up2.ps1`

```card
title: cd-up2.ps1
desc: Set the working directory to two directory levels up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up2.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-up3.ps1`

```card
title: cd-up3.ps1
desc: Set the working directory to three directory levels up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up3.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-up4.ps1`

```card
title: cd-up4.ps1
desc: Set the working directory to four directory levels up.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up4.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `cd-videos.ps1`

```card
title: cd-videos.ps1
desc: Set the working directory to the user's videos folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-videos.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `check-symlinks.ps1`

```card
title: check-symlinks.ps1
desc: Checks every symlink in a directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-symlinks.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `check-xml-file.ps1`

```card
title: check-xml-file.ps1
desc: Checks the given XML file for validity.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-xml-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `clear-recycle-bin.ps1`

```card
title: clear-recycle-bin.ps1
desc: Removes the content of the recycle bin folder (can not be undo!).
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/clear-recycle-bin.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `copy-photos-sorted.ps1`

```card
title: copy-photos-sorted.ps1
desc: Copy image files sorted by year and month.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/copy-photos-sorted.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `decrypt-file.ps1`

```card
title: decrypt-file.ps1
desc: Decrypts the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/decrypt-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `download-dir.ps1`

```card
title: download-dir.ps1
desc: Downloads a directory tree from the given URL.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/download-dir.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `download-file.ps1`

```card
title: download-file.ps1
desc: Downloads a file from the given URL.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/download-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `edit.ps1`

```card
title: edit.ps1
desc: Edits the given file with the built-in text editor.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/edit.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `encrypt-file.ps1`

```card
title: encrypt-file.ps1
desc: Encrypts the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/encrypt-file.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `get-md5.ps1`

```card
title: get-md5.ps1
desc: Prints the MD5 checksum of the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/get-md5.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `get-sha1.ps1`

```card
title: get-sha1.ps1
desc: Prints the SHA1 checksum of the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/get-sha1.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `get-sha256.ps1`

```card
title: get-sha256.ps1
desc: Prints the SHA256 checksum of the given file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/get-sha256.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `inspect-exe.ps1`

```card
title: inspect-exe.ps1
desc: Prints basic information of the given executable file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/inspect-exe.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-dir-tree.ps1`

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

---

## <FontIcon icon="iconfont icon-file"/> `list-empty-files.ps1`

```card
title: list-empty-files.ps1
desc: Lists empty files within the given directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-empty-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-files.ps1`

```card
title: list-files.ps1
desc: Lists all files in the given folder and also in every subfolder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-folder.ps1`

```card
title: list-folder.ps1
desc: Lists the folder content.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-folder.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-hidden-files.ps1`

```card
title: list-hidden-files.ps1
desc: Lists hidden files within the given directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-hidden-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-recycle-bin.ps1`

```card
title: list-recycle-bin.ps1
desc: Lists the content of the recycle bin folder.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-recycle-bin.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-unused-files.ps1`

```card
title: list-unused-files.ps1
desc: Lists unused files in a directory tree.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-unused-files.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `list-workdir.ps1`

```card
title: list-workdir.ps1
desc: Lists the current working directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-workdir.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `make-install.ps1`

```card
title: make-install.ps1
desc: Installs built executables and libs to the installation directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/make-install.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `new-shortcut.ps1`

```card
title: new-shortcut.ps1
desc: Creates a new shortcut file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-shortcut.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `new-symlink.ps1`

```card
title: new-symlink.ps1
desc: Creates a new symbolic link file.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-symlink.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

---

## <FontIcon icon="iconfont icon-file"/> `new-zipfile.ps1`

```card
title: new-zipfile.ps1
desc: Creates a new .zip file from a directory.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/new-zipfile.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
```

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