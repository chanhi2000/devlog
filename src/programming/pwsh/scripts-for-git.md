---
lang: ko-KR
title: Scripts for Git
description: Powershell > Scripts for Git
icon: iconfont icon-git
category:
  - Powershell
  - Git
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

## <VPIcon icon="iconfont icon-powershell"/>`build-repo.ps1`

```component VPCard
{
  "title": "build-repo.ps1",
  "desc": "Builds a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/build-repo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script builds a repository by supporting: cmake, configure, autogen, Imakefile, and Makefile.

::: tabs 

@tab:active Parameters

```powershell
PS> ./build-repo.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the Git repository
    
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
PS> ./build-repo.ps1 C:\MyRepo
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Builds a repository 
.DESCRIPTION
	This PowerShell script builds a repository by supporting: cmake, configure, autogen, Imakefile, and Makefile.
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./build-repo.ps1 C:\MyRepo
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

function BuildInDir { param($Path)
	$DirName = (Get-Item "$Path").Name
	if (Test-Path "$Path/CMakeLists.txt" -pathType leaf) {
		"⏳ Building repo 📂$DirName using CMakeLists.txt into subfolder _My_Build ..."
		if (-not(Test-Path "$Path/_My_Build/" -pathType container)) { 
			& mkdir "$Path/_My_Build/"
		}
		Set-Location "$Path/_My_Build/"

		& cmake ..
		if ($lastExitCode -ne "0") { throw "Executing 'cmake ..' has failed" }

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

		& make test
		if ($lastExitCode -ne "0") { throw "Executing 'make test' has failed" }

	} elseif (Test-Path "$Path/configure" -pathType leaf) { 
		"⏳ Building repo 📂$DirName using 'configure'..."
		Set-Location "$Path/"

		& ./configure
		#if ($lastExitCode -ne "0") { throw "Script 'configure' exited with error code $lastExitCode" }

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

		& make test
		if ($lastExitCode -ne "0") { throw "Executing 'make test' has failed" }

	} elseif (Test-Path "$Path/autogen.sh" -pathType leaf) { 
		"⏳ Building repo 📂$DirName using 'autogen.sh'..."
		Set-Location "$Path/"

		& ./autogen.sh
		if ($lastExitCode -ne "0") { throw "Script 'autogen.sh' exited with error code $lastExitCode" }

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

	} elseif (Test-Path "$Path/build.gradle" -pathType leaf) {
		"⏳ Building repo 📂$DirName using build.gradle..."
		Set-Location "$Path"

		& gradle build
		if ($lastExitCode -ne "0") { throw "'gradle build' has failed" }

		& gradle test
		if ($lastExitCode -ne "0") { throw "'gradle test' has failed" }

	} elseif (Test-Path "$Path/Imakefile" -pathType leaf) {
		"⏳ Building repo 📂$DirName using Imakefile..."
		Set-Location "$RepoDir/"

		& xmkmf 
		if ($lastExitCode -ne "0") { throw "Executing 'xmkmf' has failed" }

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

	} elseif (Test-Path "$Path/Makefile" -pathType leaf) {
		"⏳ Building repo 📂$DirName using Makefile..."
		Set-Location "$Path"

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

	} elseif (Test-Path "$Path/makefile" -pathType leaf) {
		"⏳ Building repo 📂$DirName using makefile..."
		Set-Location "$Path"

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

	} elseif (Test-Path "$Path/compile.sh" -pathType leaf) { 
		"⏳ Building repo 📂$DirName using 'compile.sh'..."
		Set-Location "$Path/"

		& ./compile.sh
		if ($lastExitCode -ne "0") { throw "Script 'compile.sh' exited with error code $lastExitCode" }

		& make -j4
		if ($lastExitCode -ne "0") { throw "Executing 'make -j4' has failed" }

	} elseif (Test-Path "$Path/attower/src/build/DevBuild/build.bat" -pathType leaf) {
		"⏳ Building repo 📂$DirName using build.bat ..."
		Set-Location "$Path/attower/src/build/DevBuild/"

		& ./build.bat build-all-release
		if ($lastExitCode -ne "0") { throw "Script 'build.bat' exited with error code $lastExitCode" }

	} elseif (Test-Path "$Path/$DirName" -pathType container) {
		"⏳ No make rule found, trying subfolder 📂$($DirName)..."
		BuildInDir "$Path/$DirName"
	} else {
		Write-Warning "Sorry, no make rule applies to: 📂$DirName"
		exit 0 # success
	}
}

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }
	$RepoDirName = (Get-Item "$RepoDir").Name

	$PreviousPath = Get-Location
	BuildInDir "$RepoDir"
	Set-Location "$PreviousPath"

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ built repo 📂$RepoDirName in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---


## <VPIcon icon="iconfont icon-powershell"/>`build-repos.ps1`

```component VPCard
{
  "title": "build-repos.ps1",
  "desc": "Builds all Git repositories in a folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/build-repos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script builds all Git repositories in a folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./build-repos.ps1 [[-ParentDir] <String>] [<CommonParameters>]

-ParentDir <String>
    Specifies the path to the parent folder
    
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
PS> ./build-repos.ps1 C:\MyRepos
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Builds Git repositories
.DESCRIPTION
	This PowerShell script builds all Git repositories in a folder.
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./build-repos.ps1 C:\MyRepos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ParentDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	$ParentDirName = (Get-Item "$ParentDir").Name
	"⏳ Step 1 - Checking parent folder 📂$ParentDirName..."
	if (-not(Test-Path "$ParentDir" -pathType container)) { throw "Can't access folder: $ParentDir" }
	$Folders = (Get-ChildItem "$ParentDir" -attributes Directory)
	$FolderCount = $Folders.Count
	"Found $FolderCount subfolders."

	[int]$Step = 1
	foreach ($Folder in $Folders) {
		& "$PSScriptRoot/build-repo.ps1" "$Folder"
		$Step++
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ built $FolderCount Git repositories at 📂$ParentDirName in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`check-repo.ps1`

```component VPCard
{
  "title": "check-repo.ps1",
  "desc": "Checks a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-repo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script verifies the integrity of a local Git repository.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-repo.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the Git repository (current working directory by default)
    
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
PS> ./check-repo.ps1 C:\MyRepo
# ⏳ (1/10) Searching for Git executable...  git version 2.41.0.windows.3
# ⏳ (2/10) Checking local folder...         📂C:\MyRepo
# ⏳ (3/10) Querying remote URL...           git@github.com:fleschutz/PowerShell.git
# ⏳ (4/10) Querying current branch...       main
# ⏳ (5/10) Fetching remote updates...
# ⏳ (6/10) Querying latest tag...           v0.8 (commit 02171a401d83b01a0cda0af426840b605e617f08)
# ⏳ (7/10) Verifying data integrity...
# ...
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks a repo
.DESCRIPTION
	This PowerShell script verifies the integrity of a local Git repository.
.PARAMETER RepoDir
	Specifies the path to the Git repository (current working directory by default)
.EXAMPLE
	PS> ./check-repo.ps1 C:\MyRepo
	⏳ (1/10) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2/10) Checking local folder...         📂C:\MyRepo
	⏳ (3/10) Querying remote URL...           git@github.com:fleschutz/PowerShell.git
	⏳ (4/10) Querying current branch...       main
	⏳ (5/10) Fetching remote updates...
	⏳ (6/10) Querying latest tag...           v0.8 (commit 02171a401d83b01a0cda0af426840b605e617f08)
	⏳ (7/10) Verifying data integrity...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/10) Searching for Git executable...  " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2/10) Checking local folder...         " -noNewline
	$FullPath = Resolve-Path "$RepoDir"
	if (!(Test-Path "$FullPath" -pathType Container)) { throw "Can't access folder: $FullPath" }
	"📂$FullPath"

	Write-Host "⏳ (3/10) Querying remote URL...           " -noNewline
	& git -C "$FullPath" remote get-url origin
	if ($lastExitCode -ne "0") { throw "'git remote get-url origin' failed with exit code $lastExitCode" }

	Write-Host "⏳ (4/10) Querying current branch...       " -noNewline
	& git -C "$FullPath" branch --show-current
	if ($lastExitCode -ne "0") { throw "'git branch --show-current' failed with exit code $lastExitCode" }

	Write-Host "⏳ (5/10) Fetching remote updates..."
	& git -C "$FullPath" fetch
	if ($lastExitCode -ne "0") { throw "'git fetch' failed with exit code $lastExitCode" }

	Write-Host "⏳ (6/10) Querying latest tag...           " -noNewline
        $LatestTagCommitID = (git -C "$FullPath" rev-list --tags --max-count=1)
        $LatestTagName = (git -C "$FullPath" describe --tags $LatestTagCommitID)
        Write-Host "$LatestTagName (commit $LatestTagCommitID)"

	Write-Host "⏳ (7/10) Verifying data integrity..."
	& git -C "$FullPath" fsck 
	if ($lastExitCode -ne "0") { throw "'git fsck' failed with exit code $lastExitCode" }

	Write-Host "⏳ (8/10) Running maintenance tasks..."
	& git -C "$FullPath" maintenance run
	if ($lastExitCode -ne "0") { throw "'git maintenance run' failed with exit code $lastExitCode" }

	Write-Host "⏳ (9/10) Checking submodule status..."
	& git -C "$FullPath" submodule status
	if ($lastExitCode -ne "0") { throw "'git submodule status' failed with exit code $lastExitCode" }

	Write-Host "⏳ (10/10) Checking repo status...         " -noNewline
	& git -C "$FullPath" status 
	if ($lastExitCode -ne "0") { throw "'git status --short' failed with exit code $lastExitCode" }

	$RepoDirName = (Get-Item "$FullPath").Name
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Checked repo 📂$RepoDirName in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`clean-repo.ps1`

```component VPCard
{
  "title": "clean-repo.ps1",
  "desc": "Cleans a Git repository from untracked files.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/clean-repo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script deletes all untracked files and folders in a local Git repository (including submodules).

::: warning NOTE 

To be used with care! This cannot be undone!

:::

::: tabs

@tab:active Parameters

```powershell
PS> ./clean-repo.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the file path to the local Git repository
    
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
PS> ./clean-repo.ps1 C:\rust
# ⏳ (1/4) Searching for Git executable...          git version 2.41.0.windows.3
# ⏳ (2/4) Checking local repository...        	  📂C:\rust
# ⏳ (3/4) Removing untracked files in repository...
# ⏳ (4/4) Removing untracked files in submodules...
# ✔️ Cleaned repo 📂rust in 1 sec
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Cleans a repo
.DESCRIPTION
	This PowerShell script deletes all untracked files and folders in a local Git repository (including submodules).
	NOTE: To be used with care! This cannot be undone!
.PARAMETER RepoDir
	Specifies the file path to the local Git repository
.EXAMPLE
	PS> ./clean-repo.ps1 C:\rust
	⏳ (1/4) Searching for Git executable...          git version 2.41.0.windows.3
	⏳ (2/4) Checking local repository...        	  📂C:\rust
	⏳ (3/4) Removing untracked files in repository...
	⏳ (4/4) Removing untracked files in submodules...
	✔️ Cleaned repo 📂rust in 1 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/4) Searching for Git executable...          " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	"⏳ (2/4) Checking local repository...             📂$RepoDir"
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access folder '$RepoDir' - maybe a typo or missing folder permissions?" }
	$RepoDirName = (Get-Item "$RepoDir").Name

	"⏳ (3/4) Removing untracked files in repository..."
	& git -C "$RepoDir" clean -xfd -f # to delete all untracked files in the main repo
	if ($lastExitCode -ne "0") {
		Write-Warning "'git clean' failed with exit code $lastExitCode, retrying once..."
		& git -C "$RepoDir" clean -xfd -f 
		if ($lastExitCode -ne "0") { throw "'git clean' failed with exit code $lastExitCode" }
	}

	"⏳ (4/4) Removing untracked files in submodules..."
	& git -C "$RepoDir" submodule foreach --recursive git clean -xfd -f # to delete all untracked files in the submodules
	if ($lastExitCode -ne "0") { throw "'git clean' in the submodules failed with exit code $lastExitCode" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Cleaned repo 📂$RepoDirName in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`clean-repos.ps1`

```component VPCard
{
  "title": "clean-repos.ps1",
  "desc": "Cleans all Git repositories in a folder from untracked files.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/clean-repos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script cleans all Git repositories in a folder from untracked files (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./clean-repos.ps1 [[-ParentDir] <String>] [<CommonParameters>]

-ParentDir <String>
    Specifies the path to the parent folder
    
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
PS> ./clean-repos C:\MyRepos
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Cleans all Git repositories in a folder from untracked files 
.DESCRIPTION
	This PowerShell script cleans all Git repositories in a folder from untracked files (including submodules).
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./clean-repos C:\MyRepos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ParentDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1) Searching for Git executable...  " -noNewline
        & git --version
        if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

        $ParentDirName = (Get-Item "$ParentDir").Name
        Write-Host "⏳ (2) Checking parent folder 📂$ParentDirName...  " -noNewline
        if (-not(Test-Path "$ParentDir" -pathType container)) { throw "Can't access folder: $ParentDir" }
        $Folders = (Get-ChildItem "$ParentDir" -attributes Directory)
        $NumFolders = $Folders.Count
        Write-Host "$NumFolders subfolders found"

	[int]$Step = 2
	foreach ($Folder in $Folders) {
		$FolderName = (Get-Item "$Folder").Name
		$Step++
		"⏳ ($Step/$($NumFolders + 2)) Cleaning 📂$FolderName..."

		& git -C "$Folder" clean -xfd -f # force + recurse into dirs + don't use the standard ignore rules
		if ($lastExitCode -ne "0") { throw "'git clean -xfd -f' failed with exit code $lastExitCode" }

		& git -C "$Folder" submodule foreach --recursive git clean -xfd -f 
		if ($lastExitCode -ne "0") { throw "'git clean -xfd -f' in submodules failed with exit code $lastExitCode" }
	}
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ cleaned $NumFolders Git repositories at 📂$ParentDirName in $Elapsed sec."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`clone-repos.ps1`

```component VPCard
{
  "title": "clone-repos.ps1",
  "desc": "Clones well-known Git repositories.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/clone-repos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script clones popular Git repositories into a target directory.

::: tabs

@tab:active Parameters

```powershell
PS> ./clone-repos.ps1 [[-TargetDir] <String>] [<CommonParameters>]

-TargetDir <String>
    Specifies the file path to the target directory (current working directory by default)
    
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
PS> ./clone-repos C:\Repos
# ⏳ (1) Searching for Git executable...          git version 2.41.0.windows.3
# ⏳ (2) Reading Data/popular-repositories.csv... 28 repos
# ⏳ (3) Checking target folder...                📂repos
# ⏳ (4/32) Cloning into 📂base256unicode (dev tool)...
# ...
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Clones Git repos
.DESCRIPTION
	This PowerShell script clones popular Git repositories into a target directory.
.PARAMETER targetDir
	Specifies the file path to the target directory (current working directory by default)
.EXAMPLE
	PS> ./clone-repos C:\Repos
	⏳ (1) Searching for Git executable...          git version 2.41.0.windows.3
	⏳ (2) Reading Data/popular-repositories.csv... 28 repos
	⏳ (3) Checking target folder...                📂repos
	⏳ (4/32) Cloning into 📂base256unicode (dev tool)...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$TargetDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1) Searching for Git executable...          " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2) Reading Data/popular-repositories.csv... " -noNewline
	$Table = Import-CSV "$PSScriptRoot/../Data/popular-repositories.csv"
	$NumEntries = $Table.count
	Write-Host "$NumEntries repos"

	$TargetDirName = (Get-Item "$TargetDir").Name
	Write-Host "⏳ (3) Checking target folder...                📂$TargetDirName"
	if (-not(Test-Path "$TargetDir" -pathType container)) { throw "Can't access directory: $TargetDir" }
	
	[int]$Step = 3
	[int]$Cloned = 0
	[int]$Skipped = 0
	foreach($Row in $Table) {
		[string]$FolderName = $Row.FOLDERNAME
		[string]$Category = $Row.CATEGORY
		[string]$Branch = $Row.BRANCH
		[string]$Shallow = $Row.SHALLOW
		[string]$URL = $Row.URL
		$Step++

		if (Test-Path "$TargetDir/$FolderName" -pathType container) {
			"⏳ ($Step/$($NumEntries + 4)) Skipping existing 📂$FolderName ($Category)..."
			$Skipped++
			continue
		}
		if ($Shallow -eq "yes") {
			"⏳ ($Step/$($NumEntries + 4)) Cloning into 📂$FolderName ($Category) - $Branch branch only..."
			& git clone --branch "$Branch" --single-branch --recurse-submodules "$URL" "$TargetDir/$FolderName"
			if ($lastExitCode -ne "0") { throw "'git clone --branch $Branch $URL' failed with exit code $lastExitCode" }
		} else {
			"⏳ ($Step/$($NumEntries + 4)) Cloning into 📂$FolderName ($Category) - $Branch branch with full history..."
			& git clone --branch "$Branch" --recurse-submodules "$URL" "$TargetDir/$FolderName"
			if ($lastExitCode -ne "0") { throw "'git clone --branch $Branch $URL' failed with exit code $lastExitCode" }
		}
		$Cloned++
	}
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Cloning $Cloned of $NumEntries Git repos into folder 📂$TargetDirName took $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`configure-git.ps1`

```component VPCard
{
  "title": "configure-git.ps1",
  "desc": "Sets up the Git user configuration.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/configure-git.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script configures the user settings for Git.

::: tabs

@tab:active Parameters

```powershell
PS> ./configure-git.ps1 [[-FullName] <String>] [[-EmailAddress] <String>] [[-FavoriteEditor] <String>] [<CommonParameters>]

-FullName <String>
    Specifies the user's full name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-EmailAddress <String>
    Specifies the user's email address
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-FavoriteEditor <String>
    Specifies the user's favorite text editor
    
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
PS> ./configure-git.ps1

```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Configures Git 
.DESCRIPTION
	This PowerShell script configures the user settings for Git.
.PARAMETER FullName
	Specifies the user's full name
.PARAMETER EmailAddress
	Specifies the user's email address
.PARAMETER FavoriteEditor
	Specifies the user's favorite text editor
.EXAMPLE
	PS> ./configure-git.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$FullName = "", [string]$EmailAddress = "", [string]$FavoriteEditor = "")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()
		
	Write-Host "⏳ (1/6) Searching for Git executable...  " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	"⏳ (2/6) Asking for details..."
	if ($FullName -eq "") { $FullName = read-host "Enter your full name" }
	if ($EmailAddress -eq "") { $EmailAddress = read-host "Enter your e-mail address"}
	if ($FavoriteEditor -eq "") { $FavoriteEditor = read-host "Enter your favorite text editor (atom,emacs,nano,subl,vi,vim,...)" }

	"⏳ (3/6) Saving basic settings (autocrlf,symlinks,longpaths,etc.)..."
	& git config --global core.autocrlf false          # don't change newlines
	& git config --global core.symlinks true           # enable support for symbolic link files
	& git config --global core.longpaths true          # enable support for long file paths
	& git config --global init.defaultBranch main      # set the default branch name to 'main'
	& git config --global merge.renamelimit 99999
	& git config --global pull.rebase false
	& git config --global fetch.parallel 0             # enable parallel fetching to improve the speed
	if ($lastExitCode -ne "0") { throw "'git config' failed with exit code $lastExitCode" }

	"⏳ (4/6) Saving personal settings (name,email,editor)..."
	& git config --global user.name $FullName
	& git config --global user.email $EmailAddress
	& git config --global core.editor $FavoriteEditor
	if ($lastExitCode -ne "0") { throw "'git config' failed with exit code $lastExitCode" }

	"⏳ (5/6) Saving personal shortcuts (git co, git br, etc.)..."
	& git config --global alias.co "checkout"
	& git config --global alias.br "branch"
	& git config --global alias.ci "commit"
	& git config --global alias.st "status"
	& git config --global alias.pl "pull --recurse-submodules"
	& git config --global alias.ps "push"
	& git config --global alias.mrg "merge --no-commit --no-ff"
	& git config --global alias.chp "cherry-pick --no-commit"
	& git config --global alias.ls "log -n20 --pretty=format:'%Cred%h%Creset%C(yellow)%d%Creset %s %C(bold blue)by %an%Creset %C(green)%cr%Creset' --abbrev-commit"
	& git config --global alias.smu "submodule update --init"
	if ($lastExitCode -ne "0") { throw "'git config' failed" }

	"⏳ (6/6) Listing your current settings..."
	& git config --list
	if ($lastExitCode -ne "0") { throw "'git config --list' failed with exit code $lastExitCode" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ configured Git in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber)): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`fetch-repo.ps1`

```component VPCard
{
  "title": "fetch-repo.ps1",
  "desc": "Fetches updates for a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/fetch-repo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script fetches the latest updates into a local Git repository (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./fetch-repo.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the file path to the local Git repository (default is working directory).
    
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
PS> ./fetch-repo.ps1 C:\MyRepo
# ⏳ (1/3) Searching for Git executable...  git version 2.41.0.windows.3
# ⏳ (2/3) Checking local repository...
# ⏳ (3/3) Fetching updates...
# ✔️ Fetched updates into repo 📂MyRepo (took 2 sec)
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Fetches Git repository updates
.DESCRIPTION
	This PowerShell script fetches the latest updates into a local Git repository (including submodules).
.PARAMETER RepoDir
	Specifies the file path to the local Git repository (default is working directory).
.EXAMPLE
	PS> ./fetch-repo.ps1 C:\MyRepo
	⏳ (1/3) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2/3) Checking local repository...
	⏳ (3/3) Fetching updates...
	✔️ Fetched updates into repo 📂MyRepo (took 2 sec)
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/3) Searching for Git executable...  " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2/3) Checking local repository..."
	if (!(Test-Path "$RepoDir" -pathType container)) { throw "Can't access folder: $RepoDir" }
	$RepoDirName = (Get-Item "$RepoDir").Name

	Write-Host "⏳ (3/3) Fetching updates..."
	& git -C "$RepoDir" fetch --all --recurse-submodules --tags --prune --prune-tags --force --quiet
	if ($lastExitCode -ne "0") { throw "'git fetch --all' failed with exit code $lastExitCode" }
	
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Fetched updates into repo 📂$RepoDirName (took $Elapsed sec)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`fetch-repos.ps1`

```component VPCard
{
  "title": "fetch-repos.ps1",
  "desc": "Fetches updates for all Git repositories in a folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/fetch-repos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script fetches updates into all Git repositories in a folder (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./fetch-repos.ps1 [[-ParentDir] <String>] [<CommonParameters>]

-ParentDir <String>
    Specifies the path to the parent folder
    
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
PS> ./fetch-repos.ps1 C:\MyRepos
# ⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3
# ⏳ (2) Checking parent folder...        33 subfolders
# ⏳ (3/35) Fetching into 📂base256unicode...
# ...
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Fetches updates into Git repos
.DESCRIPTION
	This PowerShell script fetches updates into all Git repositories in a folder (including submodules).
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./fetch-repos.ps1 C:\MyRepos
	⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2) Checking parent folder...        33 subfolders
	⏳ (3/35) Fetching into 📂base256unicode...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ParentDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1) Searching for Git executable...  " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2) Checking parent folder...        " -noNewline
	if (-not(Test-Path "$ParentDir" -pathType container)) { throw "Can't access folder: $ParentDir" }
	$Folders = (Get-ChildItem "$ParentDir" -attributes Directory)
	$NumFolders = $Folders.Count
	$ParentDirName = (Get-Item "$ParentDir").Name
	Write-Host "$NumFolders subfolders"

	[int]$Step = 2
	foreach ($Folder in $Folders) {
		$FolderName = (Get-Item "$Folder").Name
		$Step++
		Write-Host "⏳ ($Step/$($NumFolders + 2)) Fetching into 📂$FolderName...  "

		& git -C "$Folder" fetch --all --recurse-submodules --prune --prune-tags --force
		if ($lastExitCode -ne "0") { throw "'git fetch' in $Folder failed with exit code $lastExitCode" }
	}
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Fetching updates into $NumFolders repositories under 📂$ParentDirName took $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-branches.ps1`

```component VPCard
{
  "title": "list-branches.ps1",
  "desc": "Lists all branches in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-branches.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all branches in a Git repository.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-branches.ps1 [[-RepoDir] <String>] [[-SearchPattern] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the Git repository (current working directory by default)
    
    Required?                    false
    Position?                    1
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

-SearchPattern <String>
    Specifies the search patter (anything by default)
    
    Required?                    false
    Position?                    2
    Default value                *
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-branches.ps1
# 
# 
# 
# List of Git Branches
# --------------------
# main
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists Git branches
.DESCRIPTION
	This PowerShell script lists all branches in a Git repository.
.PARAMETER RepoDir
	Specifies the path to the Git repository (current working directory by default)
.PARAMETER SearchPattern
	Specifies the search patter (anything by default)
.EXAMPLE
	PS> ./list-branches.ps1

	List of Git Branches
	--------------------
	main
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD", [string]$SearchPattern = "*")

try {
	if (-not(test-path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	& git -C "$RepoDir" fetch 
	if ($lastExitCode -ne "0") { throw "'git fetch' failed" }

	$Branches = $(git -C "$RepoDir" branch --list --remotes --no-color --no-column)
	if ($lastExitCode -ne "0") { throw "'git branch --list' failed" }

	""
	"List of Git Branches"
	"--------------------"
	foreach($Branch in $Branches) {
		if ("$Branch" -match "origin/HEAD") { continue }
		$BranchName = $Branch.substring(9)
		if ("$BranchName" -notlike "$SearchPattern") { continue }
		"$BranchName"
	}
	""
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-commits.ps1`

```component VPCard
{
  "title": "list-commits.ps1",
  "desc": "Lists all commits in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-commits.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```


This PowerShell script lists all commits in a Git repository. Supported output formats are: pretty, list, compact, normal or JSON.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-commits.ps1 [[-RepoDir] <String>] [[-Format] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the Git repository.
    
    Required?                    false
    Position?                    1
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Format <String>
    Specifies the output format: pretty|list|compact|normal|JSON (pretty by default)
    
    Required?                    false
    Position?                    2
    Default value                pretty
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-commits
# 
# 
# 
# ID      Date                            Committer               Description
# --      ----                            ---------               -----------
# ccd0d3e Wed Sep 29 08:28:20 2021 +0200  Markus Fleschutz        Fix typo
# ...
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists Git commits
.DESCRIPTION
	This PowerShell script lists all commits in a Git repository. Supported output formats are: pretty, list, compact, normal or JSON.
.PARAMETER RepoDir
	Specifies the path to the Git repository.
.PARAMETER Format
	Specifies the output format: pretty|list|compact|normal|JSON (pretty by default)
.EXAMPLE
	PS> ./list-commits

	ID      Date                            Committer               Description
	--      ----                            ---------               -----------
	ccd0d3e Wed Sep 29 08:28:20 2021 +0200  Markus Fleschutz        Fix typo
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD", [string]$Format = "pretty")

try {
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Progress "⏳ Fetching latest updates..."
	& git -C "$RepoDir" fetch --all --quiet
	if ($lastExitCode -ne "0") { throw "'git fetch' failed" }
	Write-Progress -Completed " "

	if ($Format -eq "pretty") {
		""
		& git -C "$RepoDir" log --graph --format=format:'%C(bold yellow)%s%C(reset)%d by %an 🕘%cs 🔗%h' --all
	} elseif ($Format -eq "list") {
		""
		"Hash            Date            Author                  Description"
		"----            ----            ------                  -----------"
		& git log --pretty=format:"%h%x09%cs%x09%an%x09%s"
	} elseif ($Format -eq "compact") {
		""
		"List of Git Commits"
		"-------------------"
		& git -C "$RepoDir" log --graph --pretty=format:'%Cred%h%Creset%C(yellow)%d%Creset %s %C(bold blue)by %an %cr%Creset' --abbrev-commit
		if ($lastExitCode -ne "0") { throw "'git log' failed" }
	} elseif ($Format -eq "JSON") {
		& git -C "$RepoDir" log --pretty=format:'{%n  "commit": "%H",%n  "abbreviated_commit": "%h",%n  "tree": "%T",%n  "abbreviated_tree": "%t",%n  "parent": "%P",%n  "abbreviated_parent": "%p",%n  "refs": "%D",%n  "encoding": "%e",%n  "subject": "%s",%n  "sanitized_subject_line": "%f",%n  "body": "%b",%n  "commit_notes": "%N",%n  "verification_flag": "%G?",%n  "signer": "%GS",%n  "signer_key": "%GK",%n  "author": {%n    "name": "%aN",%n    "email": "%aE",%n    "date": "%aD"%n  },%n  "commiter": {%n    "name": "%cN",%n    "email": "%cE",%n    "date": "%cD"%n  }%n},'
	} else {
		""
		"List of Git Commits"
		"-------------------"
		& git -C "$RepoDir" log
		if ($lastExitCode -ne "0") { throw "'git log' failed" }
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-latest-tag.ps1`

```component VPCard
{
  "title": "list-latest-tag.ps1",
  "desc": "Lists the latest tag on the current branch in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-latest.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the latest tag on the current branch in a Git repository.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-latest-tag.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the repository
    
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
PS> ./list-latest-tag.ps1 C:\MyRepo
# 🔖v0.8 at commit 02171a401d83b01a0cda0af426840b605e617f08
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the latest tag on the current branch in a Git repository
.DESCRIPTION
	This PowerShell script lists the latest tag on the current branch in a Git repository.
.PARAMETER RepoDir
	Specifies the path to the repository
.EXAMPLE
	PS> ./list-latest-tag.ps1 C:\MyRepo
	🔖v0.8 at commit 02171a401d83b01a0cda0af426840b605e617f08
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

try {
	if (-not(test-path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	$LatestTagCommitID = (git -C "$RepoDir" rev-list --tags --max-count=1)
	$LatestTag = (git -C "$RepoDir" describe --tags $LatestTagCommitID)
	"🔖$LatestTag at commit $LatestTagCommitID"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-latest-tags.ps1`

```component VPCard
{
  "title": "list-latest-tags.ps1",
  "desc": "Lists the latests tags in all Git repositories under a directory.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-latest.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the latest tags in all Git repositories in the specified folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-latest-tags.ps1 [[-ParentDir] <String>] [<CommonParameters>]

-ParentDir <String>
    Specifies the path to the parent folder
    
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
PS> ./list-latest-tags C:\MyRepos
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the latests tags in all Git repositories in a folder
.DESCRIPTION
	This PowerShell script lists the latest tags in all Git repositories in the specified folder.
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./list-latest-tags C:\MyRepos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ParentDir = "$PWD")

try {
	if (-not(test-path "$ParentDir" -pathType container)) { throw "Can't access directory: $ParentDir" }

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	$Folders = (get-childItem "$ParentDir" -attributes Directory)
	$FolderCount = $Folders.Count
	$ParentDirName = (get-item "$ParentDir").Name
	"Found $FolderCount subfolders in 📂$ParentDirName..."

	foreach ($Folder in $Folders) {
		$FolderName = (get-item "$Folder").Name

#		& git -C "$Folder" fetch --tags
#		if ($lastExitCode -ne "0") { throw "'git fetch --tags' failed" }

		$LatestTagCommitID = (git -C "$Folder" rev-list --tags --max-count=1)
		$LatestTag = (git -C "$Folder" describe --tags $LatestTagCommitID)
		"* $FolderName $LatestTag ($LatestTagCommitID)"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-repos.ps1`

```component VPCard
{
  "title": "list-repos.ps1",
  "desc": "Lists the Git repositories in a folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-repos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists details of all Git repositories in a folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-repos.ps1 [[-ParentDir] <String>] [<CommonParameters>]

-ParentDir <String>
    Specifies the path to the parent directory.
    
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
PS> ./list-repos C:\MyRepos
# 
# 
# 
# Repository   Latest Tag   Branch    Status    Remote
# ----------   ----------   ------    ------    ------
# 📂cmake      v3.23.0      main      ✔️clean    git@github.com:Kitware/CMake ↓0
# ...

```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists Git repos
.DESCRIPTION
	This PowerShell script lists details of all Git repositories in a folder.
.PARAMETER ParentDir
	Specifies the path to the parent directory.
.EXAMPLE
	PS> ./list-repos C:\MyRepos
	
	Repository   Latest Tag   Branch    Status    Remote
	----------   ----------   ------    ------    ------
	📂cmake      v3.23.0      main      ✔️clean    git@github.com:Kitware/CMake ↓0
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ParentDir = "$PWD")

function ListRepos { 
	$Folders = (Get-ChildItem "$ParentDir" -attributes Directory)
	foreach($Folder in $Folders) {
		$Repository = (Get-Item "$Folder").Name
		$LatestTagCommitID = (git -C "$Folder" rev-list --tags --max-count=1)
		if ($LatestTagCommitID -ne "") {
	        	$LatestTag = (git -C "$Folder" describe --tags $LatestTagCommitID)
		} else {
			$LatestTag = ""
		}
		$Branch = (git -C "$Folder" branch --show-current)
		$RemoteURL = (git -C "$Folder" remote get-url origin)
		$NumCommits = (git -C "$Folder" rev-list HEAD...origin/$Branch --count)
		$Status = (git -C "$Folder" status --short)
		if ("$Status" -eq "") { $Status = "✔️clean" }
		elseif ("$Status" -like " M *") { $Status = "⚠️modified" }
		New-Object PSObject -property @{'Repository'="📂$Repository";'Latest Tag'="$LatestTag";'Branch'="$Branch";'Status'="$Status";'Remote'="$RemoteURL ↓$NumCommits";}
	}
}

try {
	if (-not(Test-Path "$ParentDir" -pathType container)) { throw "Can't access directory: $ParentDir" }

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	ListRepos | Format-Table -property @{e='Repository';width=20},@{e='Latest Tag';width=18},@{e='Branch';width=20},@{e='Status';width=10},Remote
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-submodules.ps1`

```component VPCard
{
  "title": "list-submodules.ps1",
  "desc": "Lists the submodules in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-submodules.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the submodules in the given Git repository.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-submodules.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the repository (current working directory by default)
    
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
PS> ./list-submodules.ps1 C:\MyRepo
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the submodules in a Git repository
.DESCRIPTION
	This PowerShell script lists the submodules in the given Git repository.
.PARAMETER RepoDir
	Specifies the path to the repository (current working directory by default)
.EXAMPLE
	PS> ./list-submodules.ps1 C:\MyRepo
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

try {
	Write-Host "⏳ (1/4) Searching for Git executable...   " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	$RepoDirName = (Get-Item "$RepoDir").Name
	Write-Host "⏳ (2/4) Checking Git repository...        📂$RepoDirName"
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access folder: $RepoDir" }

	Write-Host "⏳ (3/4) Fetching latest updates... "
	& git -C "$RepoDir" fetch
	if ($lastExitCode -ne "0") { throw "'git fetch' failed" }

	Write-Host "⏳ (4/4) Listing submodules... "
	& git -C "$RepoDir" submodule
	if ($lastExitCode -ne "0") { throw "'git submodule' failed" }

	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`list-tags.ps1`

```component VPCard
{
  "title": "list-tags.ps1",
  "desc": "Lists all tags in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-tags.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script fetches all tags of a Git repository and lists it.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-tags.ps1 [[-RepoDir] <String>] [[-SearchPattern] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the path to the Git repository (current working directory by default)
    
    Required?                    false
    Position?                    1
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

-SearchPattern <String>
    Specifies the search pattern (anything by default)
    
    Required?                    false
    Position?                    2
    Default value                *
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-tags.ps1 C:\MyRepo
# 
# Tag             Description
# ---             -----------
# v0.1            Update README.md
# ...
# 
```


@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all tags in a repository
.DESCRIPTION
	This PowerShell script fetches all tags of a Git repository and lists it.
.PARAMETER RepoDir
	Specifies the path to the Git repository (current working directory by default)
.PARAMETER SearchPattern
	Specifies the search pattern (anything by default)
.EXAMPLE
	PS> ./list-tags.ps1 C:\MyRepo

	Tag             Description
	---             -----------
	v0.1            Update README.md
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD", [string]$SearchPattern="*")

try {
	Write-Progress "⏳ (1/4) Searching for Git executable... "
	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Progress "⏳ (2/4) Checking local repository... "
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }

	Write-Progress "⏳ (3/4) Fetching newer tags from remote..."
	& git -C "$RepoDir" fetch --all --tags
	if ($lastExitCode -ne "0") { throw "'git fetch --all --tags' failed" }

	Write-Progress "⏳ (4/4) Removing obsolete local tags..."
	& git -C "$RepoDir" fetch --prune --prune-tags
	if ($lastExitCode -ne "0") { throw "'git fetch --prune --prune-tags' failed" }

	Write-Progress -completed "Done."
 	""
	"Tag             Description"
	"---             -----------"
	& git -C "$RepoDir" tag --list "$SearchPattern" -n
	if ($lastExitCode -ne "0") { throw "'git tag --list' failed" }
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`new-branch.ps1`

```component VPCard
{
  "title": "new-branch.ps1",
  "desc": "Creates a new branch in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/new-branch.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script creates a new branch in a local Git repository and switches to it.

::: tabs

@tab:active Parameters

```powershell
PS> ./new-branch.ps1 [[-newBranch] <String>] [[-repoPath] <String>] [<CommonParameters>]

-newBranch <String>
    Specifies the new branch name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-repoPath <String>
    Specifies the path to the Git repository (current working directory per default)
    
    Required?                    false
    Position?                    2
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./new-branch.ps1 test123 C:\MyRepo
# ⏳ (1/6) Searching for Git executable...  git version 2.42.0.windows.2
# ⏳ (2/6) Checking local repository...
# ⏳ (3/6) Fetching latest updates...
# ⏳ (4/6) Creating new branch...
# ⏳ (5/6) Pushing updates...
# ⏳ (6/6) Updating submodules...
# ✔️ Created branch 'test123' in repo 📂MyRepo (based on 'main' in 18 sec)
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a new Git branch 
.DESCRIPTION
	This PowerShell script creates a new branch in a local Git repository and switches to it.
.PARAMETER newBranch
	Specifies the new branch name
.PARAMETER repoPath
	Specifies the path to the Git repository (current working directory per default)
.EXAMPLE
	PS> ./new-branch.ps1 test123 C:\MyRepo
	⏳ (1/6) Searching for Git executable...  git version 2.42.0.windows.2
	⏳ (2/6) Checking local repository...
	⏳ (3/6) Fetching latest updates...
	⏳ (4/6) Creating new branch...
	⏳ (5/6) Pushing updates...
	⏳ (6/6) Updating submodules...
	✔️ Created branch 'test123' in repo 📂MyRepo (based on 'main' in 18 sec)
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$newBranch = "", [string]$repoPath = "$PWD")

try {
	if ($newBranch -eq "") { $newBranch = Read-Host "Enter the new branch name" }

	$stopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/6) Searching for Git executable...  " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2/6) Checking local repository..."
	if (-not(Test-Path "$repoPath" -pathType container)) { throw "Can't access directory: $repoPath" }
	$repoPathName = (Get-Item "$repoPath").Name

	"⏳ (3/6) Fetching latest updates..."
	& git -C "$repoPath" fetch --all --recurse-submodules --prune --prune-tags --force
	if ($lastExitCode -ne "0") { throw "'git fetch' failed with exit code $lastExitCode" }

	$currentBranch = (git -C "$repoPath" rev-parse --abbrev-ref HEAD)
	if ($lastExitCode -ne "0") { throw "'git rev-parse' failed with exit code $lastExitCode" }

	"⏳ (4/6) Creating new branch..."
	& git -C "$repoPath" checkout -b "$newBranch"
	if ($lastExitCode -ne "0") { throw "'git checkout -b $newBranch' failed with exit code $lastExitCode" }

	"⏳ (5/6) Pushing updates..."
	& git -C "$repoPath" push origin "$newBranch"
	if ($lastExitCode -ne "0") { throw "'git push origin $newBranch' failed with exit code $lastExitCode" }

	"⏳ (6/6) Updating submodules..."
	& git -C "$repoPath" submodule update --init --recursive
	if ($lastExitCode -ne "0") { throw "'git submodule update' failed with exit code $lastExitCode" }

	[int]$elapsed = $stopWatch.Elapsed.TotalSeconds
	"✔️ Created branch '$newBranch' in repo 📂$repoPathName (based on '$currentBranch' in $elapsed sec)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`new-tag.ps1`

```component VPCard
{
  "title": "new-tag.ps1",
  "desc": "Creates a new tag in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/new-tag.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script creates a new tag in a Git repository.

::: tabs

@tab:active Parameters

```powershell
PS> ./new-tag.ps1 [[-TagName] <String>] [[-RepoDir] <String>] [<CommonParameters>]

-TagName <String>
    Specifies the new tag name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    2
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./new-tag.ps1 v1.7
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Creates a new tag in a Git repository
.DESCRIPTION
	This PowerShell script creates a new tag in a Git repository.
.PARAMETER TagName
	Specifies the new tag name
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./new-tag.ps1 v1.7
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$TagName = "", [string]$RepoDir = "$PWD")

try {
	if ($TagName -eq "") { $TagName = read-host "Enter new tag name" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if (-not(test-path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }
	set-location "$RepoDir"

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	$Result = (git status)
	if ($lastExitCode -ne "0") { throw "'git status' failed in $RepoDir" }
	if ("$Result" -notmatch "nothing to commit, working tree clean") { throw "Repository is NOT clean: $Result" }

	& "$PSScriptRoot/fetch-repo.ps1"
	if ($lastExitCode -ne "0") { throw "Script 'fetch-repo.ps1' failed" }

	& git tag "$TagName"
	if ($lastExitCode -ne "0") { throw "Error: 'git tag $TagName' failed!" }

	& git push origin "$TagName"
	if ($lastExitCode -ne "0") { throw "Error: 'git push origin $TagName' failed!" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ created new tag '$TagName' in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`pick-commit.ps1`

```component VPCard
{
  "title": "pick-commit.ps1",
  "desc": "Cherry-picks a Git commit into multiple branches.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/pick-commit.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

Cherry-picks a Git commit into one or more branches (branch names need to be separated by spaces)

::: warning NOTE 

in case of merge conflicts the script stops immediately!

:::

::: tabs

@tab:active Parameters

```powershell
PS> ./pick-commit.ps1 [[-CommitID] <String>] [[-CommitMessage] <String>] [[-Branches] <String>] [[-RepoDir] <String>] [<CommonParameters>]

-CommitID <String>
    Specifies the commit ID
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-CommitMessage <String>
    Specifies the commit message to use
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Branches <String>
    Specifies the list of branches, separated by spaces
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    4
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./pick-commit 93849f889 "Fix typo" "v1 v2 v3"
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Cherry-picks a Git commit into one or more branches
.DESCRIPTION
	Cherry-picks a Git commit into one or more branches (branch names need to be separated by spaces)
	NOTE: in case of merge conflicts the script stops immediately! 
.PARAMETER CommitID
	Specifies the commit ID
.PARAMETER CommitMessage
	Specifies the commit message to use
.PARAMETER Branches
	Specifies the list of branches, separated by spaces
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./pick-commit 93849f889 "Fix typo" "v1 v2 v3"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$CommitID = "", [string]$CommitMessage = "", [string]$Branches = "", [string]$RepoDir = "$PWD")

try {
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }
	Set-Location "$RepoDir"

	if ($CommitID -eq "") { $CommitID = read-host "Enter the Git commit id to cherry-pick" }
	if ($CommitMessage -eq "") { $CommitMessage = read-host "Enter the commit message to use" }
	if ($Branches -eq "") { $Branches = read-host "Enter the branches (separated by spaces)" }
	
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	$BranchArray = $Branches.Split(" ")
	$NumBranches = $BranchArray.Count
	foreach($Branch in $BranchArray) {

		"🍒 Switching to branch $Branch ..."
		& git checkout --recurse-submodules --force $Branch
		if ($lastExitCode -ne "0") { throw "'git checkout $Branch' failed" }

		"🍒 Updating submodules..."
		& git submodule update --init --recursive
		if ($lastExitCode -ne "0") { throw "'git submodule update' failed" }

		"🍒 Cleaning the repository from untracked files..."
		& git clean -fdx -f
		if ($lastExitCode -ne "0") { throw "'git clean -fdx -f' failed" }
			
		& git submodule foreach --recursive git clean -fdx -f
		if ($lastExitCode -ne "0") { throw "'git clean -fdx -f' in submodules failed" }

		"🍒 Pulling latest updates..."
		& git pull --recurse-submodules 
		if ($lastExitCode -ne "0") { throw "'git pull' failed" }

		"🍒 Checking the status..."
		$Result = (git status)
		if ($lastExitCode -ne "0") { throw "'git status' failed" }
		if ("$Result" -notmatch "nothing to commit, working tree clean") { throw "Branch is NOT clean: $Result" }

		"🍒 Cherry picking..."
		& git cherry-pick --no-commit "$CommitID"
		if ($lastExitCode -ne "0") { throw "'git cherry-pick $CommitID' failed" }

		"🍒 Committing..."
		& git commit -m "$CommitMessage"
		if ($lastExitCode -ne "0") { throw "'git commit' failed" }

		"🍒 Pushing..."
		& git push
		if ($lastExitCode -ne "0") { throw "'git push' failed" }
	}
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ cherry picked $CommitID into $NumBranches branches in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`pull-repo.ps1`

```component VPCard
{
  "title": "pull-repo.ps1",
  "desc": "Pulls updates for a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/pull-repo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script pulls the latest updates into a local Git repository (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./pull-repo.ps1 [[-RepoDir] <String>] [<CommonParameters>]

-RepoDir <String>
    Specifies the file path to the local Git repository (default is working directory)
    
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
PS> ./pull-repo.ps1 C:\MyRepo
# ⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1
# ⏳ (2/4) Checking local repository...
# ⏳ (3/4) Pulling updates...
# ⏳ (4/4) Updating submodules...
# ✔️ Pulled updates into repo 📂MyRepo in 14 sec
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Pulls updates into a Git repository
.DESCRIPTION
	This PowerShell script pulls the latest updates into a local Git repository (including submodules).
.PARAMETER RepoDir
	Specifies the file path to the local Git repository (default is working directory)
.EXAMPLE
	PS> ./pull-repo.ps1 C:\MyRepo
	⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1
	⏳ (2/4) Checking local repository...
	⏳ (3/4) Pulling updates...
	⏳ (4/4) Updating submodules...
	✔️ Pulled updates into repo 📂MyRepo in 14 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RepoDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/4) Searching for Git executable...  " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2/4) Checking local repository..."
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access folder: $RepoDir" }
	$Result = (git -C "$RepoDir" status)
	if ("$Result" -match "HEAD detached at ") { throw "Currently in detached HEAD state (not on a branch!), so nothing to pull" }
	$RepoDirName = (Get-Item "$RepoDir").Name

	Write-Host "⏳ (3/4) Pulling updates..."
	& git -C "$RepoDir" pull --recurse-submodules=yes
	if ($lastExitCode -ne "0") { throw "'git pull' failed with exit code $lastExitCode" }

	Write-Host "⏳ (4/4) Updating submodules... "
	& git -C "$RepoDir" submodule update --init --recursive
	if ($lastExitCode -ne "0") { throw "'git submodule update' failed with exit code $lastExitCode" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Pulled updates into repo 📂$RepoDirName in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`pull-repos.ps1`

```component VPCard
{
  "title": "pull-repos.ps1",
  "desc": "Pulls updates for all Git repositories in a folder.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/pull-repos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script pulls updates into all Git repositories in a folder (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./pull-repos.ps1 [[-ParentDir] <String>] [<CommonParameters>]

-ParentDir <String>
    Specifies the path to the parent folder
    
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
PS> ./pull-repos C:\MyRepos
# ⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3
# ⏳ (2) Checking parent folder...        33 subfolders
# ⏳ (3/35) Pulling into 📂base256unicode...
# ...
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Pulls updates into Git repos
.DESCRIPTION
	This PowerShell script pulls updates into all Git repositories in a folder (including submodules).
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./pull-repos C:\MyRepos
	⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2) Checking parent folder...        33 subfolders
	⏳ (3/35) Pulling into 📂base256unicode...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$ParentDir = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1) Searching for Git executable...     " -NoNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2) Checking parent folder...           " -NoNewline
	if (-not(Test-Path "$ParentDir" -pathType container)) { throw "Can't access folder: $ParentDir" }
	$Folders = (Get-ChildItem "$ParentDir" -attributes Directory)
	$NumFolders = $Folders.Count
	$ParentDirName = (Get-Item "$ParentDir").Name
	Write-Host "$NumFolders subfolders"

	[int]$Step = 3
	[int]$Failed = 0
	foreach ($Folder in $Folders) {
		$FolderName = (Get-Item "$Folder").Name
		Write-Host "⏳ ($Step/$($NumFolders + 2)) Pulling into 📂$FolderName...    " -NoNewline

		& git -C "$Folder" pull --recurse-submodules --jobs=4
		if ($lastExitCode -ne "0") { $Failed++; write-warning "'git pull' in 📂$FolderName failed" }

		& git -C "$Folder" submodule update --init --recursive
		if ($lastExitCode -ne "0") { throw "'git submodule update' in 📂$Folder failed with exit code $lastExitCode" }
		$Step++
	}
	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Pulled updates into $NumFolders repos under 📂$ParentDirName ($Failed failed, took $Elapsed sec)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`remove-tag.ps1`

```component VPCard
{
  "title": "remove-tag.ps1",
  "desc": "Removes a tag in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/remove-tag.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script removes a Git tag, either locally, remote, or both.

::: tabs

@tab:active Parameters

```powershell
PS> ./remove-tag.ps1 [[-TagName] <String>] [[-Mode] <String>] [[-RepoDir] <String>] [<CommonParameters>]

-TagName <String>
    Specifies the Git tag name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Mode <String>
    Specifies either locally, remote, or both
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    3
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./remove-tag v1.7 locally
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Removes a Git tag (locally, remote, or both)
.DESCRIPTION
	This PowerShell script removes a Git tag, either locally, remote, or both.
.PARAMETER TagName
	Specifies the Git tag name
.PARAMETER Mode
	Specifies either locally, remote, or both
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./remove-tag v1.7 locally
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$TagName = "", [string]$Mode = "", [string]$RepoDir = "$PWD")

try {
	if ($TagName -eq "") { $TagName = read-host "Enter new tag name" }
	if ($Mode -eq "") { $Mode = read-host "Remove the tag locally, remote, or both" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	if (-not(test-path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }

	$Null = (git --version)
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	if (($Mode -eq "locally") -or ($Mode -eq "both")) {
		"Removing local tag..."
		& git -C "$RepoDir" tag --delete $TagName
		if ($lastExitCode -ne "0") { throw "'git tag --delete' failed with exit code $lastExitCode" }
	}

	if (($Mode -eq "remote") -or ($Mode -eq "both")) {
		"Removing remote tag..."
		& git -C "$RepoDir" push origin :refs/tags/$TagName
		if ($lastExitCode -ne "0") { throw "'git push origin' failed with exit code $lastExitCode" }
	}

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ removed tag '$TagName' in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`switch-branch.ps1`

```component VPCard
{
  "title": "switch-branch.ps1",
  "desc": "Switches the branch in a Git repository.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/switch-branch.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script switches to another branch in a Git repository (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./switch-branch.ps1 [[-BranchName] <String>] [[-RepoDir] <String>] [<CommonParameters>]

-BranchName <String>
    Specifies the branch name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-RepoDir <String>
    Specifies the path to the local Git repository
    
    Required?                    false
    Position?                    2
    Default value                "$PWD"
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./switch-branch main C:\MyRepo
# ⏳ (1/6) Searching for Git executable...   git version 2.42.0.windows.1
# ⏳ (2/6) Checking local repository...
# ⏳ (3/6) Fetching updates...
# ⏳ (4/6) Switching to branch 'main'...
# ⏳ (5/6) Pulling updates...
# ⏳ (6/6) Updating submodules...
# ✔️ Switched repo 📂MyRepo to branch 'main' (took 22 sec)
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Switches the Git branch
.DESCRIPTION
	This PowerShell script switches to another branch in a Git repository (including submodules).
.PARAMETER BranchName
	Specifies the branch name
.PARAMETER RepoDir
	Specifies the path to the local Git repository
.EXAMPLE
	PS> ./switch-branch main C:\MyRepo
	⏳ (1/6) Searching for Git executable...   git version 2.42.0.windows.1
	⏳ (2/6) Checking local repository...
	⏳ (3/6) Fetching updates...
	⏳ (4/6) Switching to branch 'main'...
	⏳ (5/6) Pulling updates...
	⏳ (6/6) Updating submodules...
	✔️ Switched repo 📂MyRepo to branch 'main' (took 22 sec)
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$BranchName = "", [string]$RepoDir = "$PWD")

try {
	if ($BranchName -eq "") { $BranchName = read-host "Enter name of branch to switch to" }
	if ($RepoDir -eq "") { $RepoDir = read-host "Enter path to the local Git repository" }

	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/6) Searching for Git executable...   " -noNewline
	& git --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2/6) Checking local repository..."
	$RepoDir = Resolve-Path "$RepoDir"
	if (-not(Test-Path "$RepoDir" -pathType container)) { throw "Can't access directory: $RepoDir" }
	$Result = (git status)
	if ($lastExitCode -ne "0") { throw "'git status' in $RepoDir failed with exit code $lastExitCode" }
	if ("$Result" -notmatch "nothing to commit, working tree clean") { throw "Git repository is NOT clean: $Result" }
	$RepoDirName = (Get-Item "$RepoDir").Name

	"⏳ (3/6) Fetching updates..."
	& git -C "$RepoDir" fetch --all --prune --prune-tags --force
	if ($lastExitCode -ne "0") { throw "'git fetch' failed with exit code $lastExitCode" }

	"⏳ (4/6) Switching to branch '$BranchName'..."
	& git -C "$RepoDir" checkout --recurse-submodules "$BranchName"
	if ($lastExitCode -ne "0") { throw "'git checkout $BranchName' failed with exit code $lastExitCode" }

	"⏳ (5/6) Pulling updates..."
	& git -C "$RepoDir" pull --recurse-submodules
	if ($lastExitCode -ne "0") { throw "'git pull' failed with exit code $lastExitCode" }

	"⏳ (6/6) Updating submodules..."	
	& git -C "$RepoDir" submodule update --init --recursive
	if ($lastExitCode -ne "0") { throw "'git submodule update' failed with exit code $lastExitCode" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Switched repo 📂$RepoDirName to branch '$BranchName' (took $Elapsed sec)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <VPIcon icon="iconfont icon-powershell"/>`sync-repo.ps1`

```component VPCard
{
  "title": "sync-repo.ps1",
  "desc": "Synchronizes a Git repository by pull & push.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/sync-repo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script synchronizes a local Git repository by pull and push (including submodules).

::: tabs

@tab:active Parameters

```powershell
PS> ./sync-repo.ps1 [[-path] <String>] [<CommonParameters>]

-path <String>
    Specifies the path to the Git repository
    
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
PS> ./sync-repo.ps1 C:\MyRepo
# ⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1
# ⏳ (2/4) Checking local repository...     📂C:\MyRepo
# ⏳ (3/4) Pulling remote updates...        Already up to date.
# ⏳ (4/4) Pushing local updates...         Everything up-to-date
# ✔️ Synced repo 📂MyRepo in 5 sec
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Synchronizes a repo 
.DESCRIPTION
	This PowerShell script synchronizes a local Git repository by pull and push (including submodules).
.PARAMETER path
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./sync-repo.ps1 C:\MyRepo
	⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1
	⏳ (2/4) Checking local repository...     📂C:\MyRepo
	⏳ (3/4) Pulling remote updates...        Already up to date.
	⏳ (4/4) Pushing local updates...         Everything up-to-date
	✔️ Synced repo 📂MyRepo in 5 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$path = "$PWD")

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/4) Searching for Git executable...  " -noNewline
 	& git --version
 	if ($lastExitCode -ne "0") { throw "Can't execute 'git' - make sure Git is installed and available" }

	Write-Host "⏳ (2/4) Checking local repository...     📂$path"
	if (!(Test-Path "$path" -pathType container)) { throw "Can't access folder: $path" }
	$pathName = (Get-Item "$path").Name

	Write-Host "⏳ (3/4) Pulling remote updates...        " -noNewline
	& git -C "$Path" pull --all --recurse-submodules
	if ($lastExitCode -ne "0") { throw "'git pull --all --recurse-submodes' failed" }

	Write-Host "⏳ (4/4) Pushing local updates...         " -noNewline
	& git -C "$Path" push
	if ($lastExitCode -ne "0") { throw "'git push' failed" }

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️ Synced repo 📂$pathName in $Elapsed sec"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

<TagLinks />
