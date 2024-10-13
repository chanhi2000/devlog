---
lang: ko-KR
title: Various Powershell Scripts
description: Powershell > Various Powershell Scripts
icon: fas fa-cart-shopping
category:
  - Powershell
  - Various Powershell Scripts
tag: 
  - powershell
  - pwsh
  - windows
  - script
  - useful-script
  - mysql
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <FontIcon icon="iconfont icon-powershell"/>`add-memo.ps1`

```component VPCard
{
  "title": "add-memo.ps1",
  "desc": "Adds the given memo text to $HOME/Memos.csv.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/add-memo.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script saves the given memo text to Memos.csv in your home folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./add-memo.ps1 [[-text] <String>] [<CommonParameters>]

-text <String>
    Specifies the text to memorize
    
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
PS> ./add-memo.ps1 "Buy apples"
✔️ saved to 📄/home/markus/Memos.csv

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Adds a memo text 
.DESCRIPTION
	This PowerShell script saves the given memo text to Memos.csv in your home folder.
.PARAMETER text
	Specifies the text to memorize
.EXAMPLE
	PS> ./add-memo.ps1 "Buy apples"
	✔️ saved to 📄/home/markus/Memos.csv
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$text = "")

try {
	if ($text -eq "" ) { $text = Read-Host "Enter the text to memorize" }

	$Path = "~/Memos.csv"
	$Time = Get-Date -format FileDateTimeUniversal
	$Line = "$Time,$text"

	if (-not(Test-Path "$Path" -pathType leaf)) {
		Write-Output "TIME,TEXT" > "$Path"
	}
	Write-Output $Line >> "$Path"

	"✔️ saved to 📄$Path"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-ipv4-address.ps1`

```component VPCard
{
  "title": "check-ipv4-address.ps1",
  "desc": "Checks the given IPv4 address for validity.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ipv4-address.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script checks the given IPv4 address for validity.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-ipv4-address.ps1 [[-Address] <String>] [<CommonParameters>]

-Address <String>
    Specifies the IPv4 address to check
    
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
PS> ./check-ipv4-address 192.168.11.22
✔️ IPv4 192.168.11.22 is valid

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks an IPv4 address for validity
.DESCRIPTION
	This PowerShell script checks the given IPv4 address for validity.
.PARAMETER Address
	Specifies the IPv4 address to check
.EXAMPLE
	PS> ./check-ipv4-address 192.168.11.22
	✔️ IPv4 192.168.11.22 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Address = "")

function IsIPv4AddressValid { param([string]$IP)
	$RegEx = "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
	if ($IP -match $RegEx) {
		return $true
	} else {
		return $false
	}
}

try {
	if ($Address -eq "" ) { $Address = read-host "Enter IPv4 address to validate" }

	if (IsIPv4AddressValid $Address) {
		"✔️ IPv4 $Address is valid"
		exit 0 # success
	} else {
		write-warning "Invalid IPv4 address: $Address"
		exit 1
	}
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-ipv6-address.ps1`

```component VPCard
{
  "title": "check-ipv6-address.ps1",
  "desc": "Checks the given IPv6 address for validity.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ipv6-address.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script checks the given IPv6 address for validity

::: tabs

@tab:active Parameters

```powershell
PS> ./check-ipv6-address.ps1 [[-Address] <String>] [<CommonParameters>]

-Address <String>
    Specifies the IPv6 address to check
    
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
PS> ./check-ipv6-address fe80::200:5aee:feaa:20a2
✔️ IPv6 fe80::200:5aee:feaa:20a2 is valid

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks an IPv6 address for validity
.DESCRIPTION
	This PowerShell script checks the given IPv6 address for validity
.PARAMETER Address
	Specifies the IPv6 address to check
.EXAMPLE
	PS> ./check-ipv6-address fe80::200:5aee:feaa:20a2
	✔️ IPv6 fe80::200:5aee:feaa:20a2 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Address = "")

function IsIPv6AddressValid { param([string]$IP)
    $IPv4Regex = '(((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))'
    $G = '[a-f\d]{1,4}'
    $Tail = @(":",
    "(:($G)?|$IPv4Regex)",
    ":($IPv4Regex|$G(:$G)?|)",
    "(:$IPv4Regex|:$G(:$IPv4Regex|(:$G){0,2})|:)",
    "((:$G){0,2}(:$IPv4Regex|(:$G){1,2})|:)",
    "((:$G){0,3}(:$IPv4Regex|(:$G){1,2})|:)",
    "((:$G){0,4}(:$IPv4Regex|(:$G){1,2})|:)")
    [string] $IPv6RegexString = $G
    $Tail | foreach { $IPv6RegexString = "${G}:($IPv6RegexString|$_)" }
    $IPv6RegexString = ":(:$G){0,5}((:$G){1,2}|:$IPv4Regex)|$IPv6RegexString"
    $IPv6RegexString = $IPv6RegexString -replace '\(' , '(?:' # make all groups non-capturing
    [regex] $IPv6Regex = $IPv6RegexString
    if ($IP -imatch "^$IPv6Regex$") {
    	return $true
    } else {
    	return $false
    }
}

try {
	if ($Address -eq "" ) {
		$Address = read-host "Enter IPv6 address to validate"
	}
	if (IsIPv6AddressValid $Address) {
		"✔️  IPv6 $Address is valid"
		exit 0 # success
	} else {
		write-warning "Invalid IPv6 address: $Address"
		exit 1
	}
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-mac-address.ps1`

```component VPCard
{
  "title": "check-mac-address.ps1",
  "desc": "Checks the given MAC address for validity.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-mac-address.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```


This PowerShell script checks the given MAC address for validity
Supported MAC address formats are: 

- `00:00:00:00:00:00` or 
- `00-00-00-00-00-00` or
- `000000000000`

::: tabs

@tab:active Parameters

```powershell
PS> ./check-mac-address.ps1 [[-MAC] <String>] [<CommonParameters>]

-MAC <String>
    Specifies the MAC address to check
    
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
PS> ./check-mac-address 11:22:33:44:55:66
✔️ MAC address 11:22:33:44:55:66 is valid

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the given MAC address for validity
.DESCRIPTION
	This PowerShell script checks the given MAC address for validity
	Supported MAC address formats are: 00:00:00:00:00:00 or 00-00-00-00-00-00 or 000000000000.
.PARAMETER MAC
	Specifies the MAC address to check
.EXAMPLE
	PS> ./check-mac-address 11:22:33:44:55:66
	✔️ MAC address 11:22:33:44:55:66 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$MAC = "")

function IsMACAddressValid { param([string]$mac)
	$RegEx = "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9A-Fa-f]{2}){6}$"
	if ($mac -match $RegEx) {
		return $true
	} else {
		return $false
	}
}

try {
	if ($MAC -eq "" ) {
		$MAC = read-host "Enter MAC address to validate"
	}
	if (IsMACAddressValid $MAC) {
		"✔️ MAC address $MAC is valid"
		exit 0 # success
	} else {
		write-warning "Invalid MAC address: $MAC"
		exit 1
	}
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`check-subnet-mask.ps1`

```component VPCard
{
  "title": "check-subnet-mask.ps1",
  "desc": "Checks the given subnet mask for validity.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/check-subnet-mask.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script checks the given subnet mask for validity.

::: tabs

@tab:active Parameters

```powershell
PS> ./check-subnet-mask.ps1 [[-address] <String>] [<CommonParameters>]

-address <String>
    Specifies the subnet mask to check
    
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
PS> ./check-subnet-mask.ps1 255.255.255.0
✔️ subnet mask 255.255.255.0 is valid

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Checks the given subnet mask for validity
.DESCRIPTION
	This PowerShell script checks the given subnet mask for validity.
.PARAMETER address
	Specifies the subnet mask to check
.EXAMPLE
	PS> ./check-subnet-mask.ps1 255.255.255.0
	✔️ subnet mask 255.255.255.0 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$address = "")

function IsSubNetMaskValid { param([string]$IP)
	$RegEx = "^(254|252|248|240|224|192|128).0.0.0$|^255.(254|252|248|240|224|192|128|0).0.0$|^255.255.(254|252|248|240|224|192|128|0).0$|^255.255.255.(255|254|252|248|240|224|192|128|0)$"
	if ($IP -match $RegEx) {
		return $true
	} else {
		return $false
	}
}

try {
	if ($address -eq "" ) { $address = read-host "Enter subnet mask to validate" }

	if (IsSubNetMaskValid $address) {
		"✔️ subnet mask $Address is valid"
		exit 0 # success
	} else {
		write-warning "Invalid subnet mask: $address"
		exit 1
	}
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`display-time.ps1`

```component VPCard
{
  "title": "display-time.ps1",
  "desc": "Displays the current time for 10 seconds by default.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/display-time.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script displays the current time (for 10 seconds by default)

::: tabs

@tab:active Parameters

```powershell
PS> ./display-time.ps1 [[-Seconds] <Int32>] [<CommonParameters>]

-Seconds <Int32>
    Specifies the number of seconds to display the time
    
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
PS> ./display-time
# 
``

@tab Script Content

```powershell
<#
.SYNOPSIS
	Displays the current time
.DESCRIPTION
	This PowerShell script displays the current time (for 10 seconds by default)
.PARAMETER Seconds
	Specifies the number of seconds to display the time
.EXAMPLE
	PS> ./display-time
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([int]$Seconds = 10)

try {
	for ([int]$i = 0; $i -lt $Seconds; $i++) {
		Clear-Host
		Write-Output ""
		$CurrentTime = Get-Date -format "yyyy-MM-dd HH:mm:ss" 
		./write-big $CurrentTime
		Write-Output ""
		Start-Sleep -seconds 1
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-environment-variables.ps1`

```component VPCard
{
  "title": "list-environment-variables.ps1",
  "desc": "Lists all environment variables.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-environment-variables.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all environment variables.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-environment-variables.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-environment-variables.ps1
# 
# 
# 
# Name                           Value
# ----                           -----
# ALLUSERSPROFILE                C:\ProgramData
# ...
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all environment variables
.DESCRIPTION
	This PowerShell script lists all environment variables.
.EXAMPLE
	PS> ./list-environment-variables.ps1

	Name                           Value
	----                           -----
	ALLUSERSPROFILE                C:\ProgramData
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-ChildItem env:
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-emojis.ps1`

```component VPCard
{
  "title": "list-emojis.ps1",
  "desc": "Lists the emojis of Unicode 13.0.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-emojis.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the emojis of Unicode 13.0 sorted by category.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-emojis.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-emojis.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists available Emojis 
.DESCRIPTION
	This PowerShell script lists the emojis of Unicode 13.0 sorted by category.
.EXAMPLE
	PS> ./list-emojis.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

"Emojis of Unicode 13.0 sorted by Category"
"========================================="
""
"Smileys: 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾"
""
"People: 👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 👲 👳‍♀️ 👳‍♂️ 🧕 🧔 👱‍♂️ 👱‍♀️ 👨‍🦰 👩‍🦰 👨‍🦱 👩‍🦱 👨‍🦲 👩‍🦲 👨‍🦳 👩‍🦳 🦸‍♀️ 🦸‍♂️ 🦹‍♀️ 🦹‍♂️ 👮‍♀️ 👮‍♂️ 👷‍♀️ 👷‍♂️ 💂‍♀️ 💂‍♂️ 🕵️‍♀️ 🕵️‍♂️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅 🧙‍♀️ 🧙‍♂️ 🧝‍♀️ 🧝‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧞‍♀️ 🧞‍♂️ 🧜‍♀️ 🧜‍♂️ 🧚‍♀️ 🧚‍♂️ 👼 🤰 🤱 🙇‍♀️ 🙇‍♂️ 💁‍♀️ 💁‍♂️ 🙅‍♀️ 🙅‍♂️ 🙆‍♀️ 🙆‍♂️ 🙋‍♀️ 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎‍♀️ 🙎‍♂️ 🙍‍♀️ 🙍‍♂️ 💇‍♀️ 💇‍♂️ 💆‍♀️ 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯‍♂️ 🕴 🚶‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃‍♂️ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🦵 🦶 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🧠 🦴 🦷 🗣 👤 👥"
""
"Clothings & Accessoires: 🧥 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🥾 🥿 🧦 🧤 🧣 🎩 🧢 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🥽 🥼 🌂 🧵 🧶"
""
"Animals & Nature: 🐶 🐱 🐭 🐹 🐰 🦊 🦝 🐻 🐼 🦘 🦡 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦢 🦅 🦉 🦚 🦜 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🕷 🕸 🦂 🦟 🦠 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🦛 🐪 🐫 🦙 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫"
""
"Foods & Drinks: 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢"
""
"Sport & Hobbby: ⚽️ 🏀 🏈 ⚾️ 🥎 🏐 🏉 🎾 🥏 🎱 🏓 🏸 🥅 🏒 🏑 🥍 🏏 ⛳️ 🏹 🎣 🥊 🥋 🎽 ⛸ 🥌 🛷 🛹 🎿 ⛷ 🏂 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ 🤺 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏾‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏇 🏇🏻 🏇🏼 🏇🏽 🏇🏾 🏇🏿 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🧩 ♟ 🎯 🎳 🎮 🎰"
""
"Travel & Locations: 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁"
""
"Objects: ⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 🧾 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ ⚱️ 🏺 🧭 🧱 🔮 🧿 🧸 📿 💈 ⚗️ 🔭 🧰 🧲 🧪 🧫 🧬 🧯 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🧴 🧵 🧶 🧷 🧹 🧺 🧻 🧼 🧽 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🧳 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🧨 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓"
""
"Symbols: ❤️ 🧡 💛 💚 💙 💜 🖤 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧"
""
"Flags: 🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏴‍☠️ 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼"
""
"Arrows: ← → ↑ ↓ ↔ ↕ ↖ ↗ ↘ ↙ ⤡ ⤢ ↚ ↛ ↮ ⟵ ⟶ ⟷ ⇦ ⇨ ⇧ ⇩ ⬄ ⇳ ⬁ ⬀ ⬂ ⬃ ⬅ ( ⮕ ➡ ) ⬆ ⬇ ⬉ ⬈ ⬊ ⬋ ⬌ ⬍ 🡐 🡒 🡑 🡓 🡔 🡕 🡖 🡗 🡘 🡙 🠹 🠸 🠻 🠺 🡄 🡆 🡅 🡇 🠼 🠾 🠽 🠿 🡀 🡂 🡁 🡃 🠐 🠒 🠑 🠓 🠔 🠖 🠕 🠗 🠘 🠚 🠙 🠛 🠜 🠞 🠝 🠟 ⭠ ⭢ ⭡ ⭣ ⭤ ⭥ ⭦ ⭧ ⭨ ⭩ 🠀 🠂 🠁 🠃 🠄 🠆 🠅 🠇 🠈 🠊 🠉 🠋 🠠 🠢 🠡 🠣 🠤 🠦 🠥 🠧 🠨 🠪 🠩 🠫 🠬 🠮 🠭 🠯 🠰 🠲 🠱 🠳 🡠 🡢 🡡 🡣 🡤 🡥 🡦 🡧 🡨 🡪 🡩 🡫 🡬 🡭 🡮 🡯 🡰 🡲 🡱 🡳 🡴 🡵 🡶 🡷 🡸 🡺 🡹 🡻 🡼 🡽 🡾 🡿 🢀 🢂 🢁 🢃 🢄 🢅 🢆 🢇 ⮈ ⮊ ⮉ ⮋ ➲ ⮜ ⮞ ⮝ ⮟ ⮘ ⮚ ⮙ ⮛ ➢ ➣ ➤"

exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-exchange-rates.ps1`

```component VPCard
{
  "title": "list-exchange-rates.ps1",
  "desc": "Lists the current exchange rates for the given currency.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-exchange-rates.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the current exchange rates for the given currency (USD per default).

::: tabs

@tab:active Parameters

```powershell
PS> ./list-exchange-rates.ps1 [[-currency] <String>] [<CommonParameters>]

-currency <String>
    Specifies the base currency
    
    Required?                    false
    Position?                    1
    Default value                USD
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-exchange-rates.ps1 EUR
# 
# 
# 
# Current Exchange Rates for 1 EUR (source: http://www.floatrates.com)
# ================================
# 
# Rate           Currency                        Inverse    Date
# ----           --------                        -------    ----
# 1.09489154     USD - U.S. Dollar               0.91333248 Sun, 6 Aug 2023 11:55:02 GMT
# ...
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the exchange rates for a currency
.DESCRIPTION
	This PowerShell script lists the current exchange rates for the given currency (USD per default).
.PARAMETER currency
	Specifies the base currency
.EXAMPLE
	PS> ./list-exchange-rates.ps1 EUR

	Current Exchange Rates for 1 EUR (source: http://www.floatrates.com)
	================================

	Rate           Currency                        Inverse    Date
	----           --------                        -------    ----
	1.09489154     USD - U.S. Dollar               0.91333248 Sun, 6 Aug 2023 11:55:02 GMT
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$currency = "USD")

function ListExchangeRates { param([string]$currency)
	[xml]$ExchangeRates = (invoke-webRequest -uri "http://www.floatrates.com/daily/$($currency).xml" -userAgent "curl" -useBasicParsing).Content 
	foreach($Row in $ExchangeRates.channel.item) {
		new-object PSObject -property @{ 'Rate' = "$($Row.exchangeRate)"; 'Currency' = "$($Row.targetCurrency) - $($Row.targetName)"; 'Inverse' = "$($Row.inverseRate)"; 'Date' = "$($Row.pubDate)" }
	}
}

try {
	""
	"Current Exchange Rates for 1 $currency (source: http://www.floatrates.com)"
	"================================"

	ListExchangeRates $currency | format-table -property Rate,Currency,Inverse,Date
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-memos.ps1`

```component VPCard
{
  "title": "list-memos.ps1",
  "desc": "Lists the memos at $HOME/Memos.csv.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-memos.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all memo entries in Memos.csv in your home folder.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-memos.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-memos.ps1

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists your memo entries
.DESCRIPTION
	This PowerShell script lists all memo entries in Memos.csv in your home folder.
.EXAMPLE
	PS> ./list-memos.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>


try {
	$Path = "~/Memos.csv"
	if (Test-Path "$Path" -pathType leaf) {
		Write-Progress "⏳Reading $Path ..."
		$Table = Import-CSV "$Path"
		write-progress -completed "Reading $Path"

		""
		"Time                  Text"
		"----                  ----"
		foreach($Row in $Table) {
			$Time = $Row.Time
			$Text = $Row.Text
			"$Time  $Text"
		}
	} else {
		"Sorry, no memos saved yet"
		exit 1
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-mysql-tables.ps1`

```component VPCard
{
  "title": "list-mysql-tables.ps1",
  "desc": "Lists the MySQL server tables.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-mysql-tables.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all tables of the given MySQL database.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-mysql-tables.ps1 [-server] <Object> [-database] <Object> [-dbuser] <Object> [-dbpass] <Object> [<CommonParameters>]

-server <Object>
    
    Required?                    true
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-database <Object>
    
    Required?                    true
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-dbuser <Object>
    
    Required?                    true
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-dbpass <Object>
    
    Required?                    true
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-mysql-tables.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all tables of a MySQL database 
.DESCRIPTION
	This PowerShell script lists all tables of the given MySQL database.
.EXAMPLE
	PS> ./list-mysql-tables.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

# This script lists all of the tables in a MySQL database and exports the list as a CSV
# Install-Module InvokeQuery
# Run the above command if you do not have this module
param(
[Parameter(Mandatory=$true)]$server,
[Parameter(Mandatory=$true)]$database,
[Parameter(Mandatory=$true)]$dbuser,
[Parameter(Mandatory=$true)]$dbpass
)
$csvfilepath = "$PSScriptRoot\mysql_tables.csv"
$result = Invoke-MySqlQuery  -ConnectionString "server=$server; database=$database; user=$dbuser; password=$dbpass; pooling = false; convert zero datetime=True" -Sql "SHOW TABLES" -CommandTimeout 10000
$result | Export-Csv $csvfilepath -NoTypeInformation
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-news.ps1`

```component VPCard
{
  "title": "list-news.ps1",
  "desc": "Lists the latest news.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-news.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the latest news by using RSS (Really Simple Syndication) feeds.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-news.ps1 [[-RSS_URL] <String>] [[-maxLines] <Int32>] [[-speed] <Int32>] [<CommonParameters>]

-RSS_URL <String>
    Specifies the URL to the RSS feed (Yahoo News by default)
    
    Required?                    false
    Position?                    1
    Default value                https://yahoo.com/news/rss/world
    Accept pipeline input?       false
    Accept wildcard characters?  false

-maxLines <Int32>
    Specifies the maximum number of lines to list (24 by default)
    
    Required?                    false
    Position?                    2
    Default value                24
    Accept pipeline input?       false
    Accept wildcard characters?  false

-speed <Int32>
    Specifies the speed to write the text (10 ms by default)
    
    Required?                    false
    Position?                    3
    Default value                10
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-news.ps1
❇️ Deadly Mediterranean wildfires kill more than 40
...

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	List the latest news
.DESCRIPTION
	This PowerShell script lists the latest news by using RSS (Really Simple Syndication) feeds.
.PARAMETER RSS_URL
	Specifies the URL to the RSS feed (Yahoo News by default)
.PARAMETER maxLines
	Specifies the maximum number of lines to list (24 by default)
.PARAMETER speed
        Specifies the speed to write the text (10 ms by default)
.EXAMPLE
	PS> ./list-news.ps1
	❇️ Deadly Mediterranean wildfires kill more than 40
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RSS_URL = "https://yahoo.com/news/rss/world", [int]$maxLines = 24, [int]$speed = 10)

try {
	[xml]$content = (Invoke-WebRequest -URI $RSS_URL -useBasicParsing).Content
	[int]$count = 1
	foreach ($item in $content.rss.channel.item) {
		& "$PSScriptRoot/write-typewriter.ps1" "❇️ $($item.title)" $speed
		if ($count++ -eq $maxLines) { break }
	}
	$source = $Content.rss.channel.title
	$date = $Content.rss.channel.pubDate
	"   (by $source as of $date)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-os-releases.ps1`

```component VPCard
{
  "title": "list-os-releases.ps1",
  "desc": "Lists operating system releases and download URL.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-os-releases.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists OS releases and download URL.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-os-releases.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-os-releases.ps1

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists OS releases and download URL
.DESCRIPTION
	This PowerShell script lists OS releases and download URL.
.EXAMPLE
	PS> ./list-os-releases.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Write-Progress "⏳Reading OS_IPFS_hashes.csv ..."

	$PathToRepo = "$PSScriptRoot/.."
	$PathToCsvFile = "$PathToRepo/Data/os-release.csv"
	invoke-webRequest -URI "https://fleschutz.droppages.com/downloads/OS_IPFS_hashes.csv" -outFile "$PathToCsvFile"

	$Table = import-csv "$PathToCsvFile"
	remove-item -path "$PathToCsvFile"

	write-output "Operating System Releases"
	write-output "========================="
	foreach ($Row in $Table) {
		write-output "* $($Row.Path.substring(3)) -> ipfs://$($Row.IPFS)"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-os-updates.ps1`

```component VPCard
{
  "title": "list-os-updates.ps1",
  "desc": "Lists operating system updates.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-os-updates.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the latest updates for operating systems.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-os-updates.ps1 [[-RSS_URL] <String>] [[-MaxCount] <Int32>] [<CommonParameters>]

-RSS_URL <String>
    Specifies the URL to the RSS feed
    
    Required?                    false
    Position?                    1
    Default value                https://distrowatch.com/news/dwd.xml
    Accept pipeline input?       false
    Accept wildcard characters?  false

-MaxCount <Int32>
    Specifies the number of news to list
    
    Required?                    false
    Position?                    2
    Default value                30
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-os-updates.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists OS updates
.DESCRIPTION
	This PowerShell script lists the latest updates for operating systems.
.PARAMETER RSS_URL
	Specifies the URL to the RSS feed
.PARAMETER MaxCount
	Specifies the number of news to list
.EXAMPLE
	PS> ./list-os-updates.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$RSS_URL = "https://distrowatch.com/news/dwd.xml", [int]$MaxCount = 30)

try {
	" "
	"Date  OS Update"
	"----  ---------"
	[xml]$Content = (Invoke-WebRequest -URI $RSS_URL -userAgent "curl" -useBasicParsing).Content


	[int]$Count = 0
	foreach ($item in $Content.rss.channel.item) {
		"$($item.title)"
		$Count++
		if ($Count -eq $MaxCount) { break }
	}
	"      (source: DistroWatch.com)"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-passwords.ps1`

```component VPCard
{
  "title": "list-passwords.ps1",
  "desc": "Prints a list of random passwords.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-passwords.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists random passwords.

:: tabs

@tab:active Parameters

```powershell
PS> ./list-passwords.ps1 [[-PasswordLength] <Int32>] [[-Columns] <Int32>] [[-Rows] <Int32>] [<CommonParameters>]

-PasswordLength <Int32>
    Specifies the length of the password
    
    Required?                    false
    Position?                    1
    Default value                15
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Columns <Int32>
    Specifies the number of columns
    
    Required?                    false
    Position?                    2
    Default value                6
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Rows <Int32>
    Specifies the number of rows
    
    Required?                    false
    Position?                    3
    Default value                30
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-passwords.ps1
# 
# 
# 
# "4yE=[mu"Az|IE@   PZ}E9Q"&?.!%49`   zU3[E7`xA)(6W_3   :wd'a(O@fr}.Z8=
# ...
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists random passwords
.DESCRIPTION
	This PowerShell script lists random passwords.
.PARAMETER PasswordLength
	Specifies the length of the password
.PARAMETER Columns
	Specifies the number of columns
.PARAMETER Rows
	Specifies the number of rows
.EXAMPLE
	PS> ./list-passwords.ps1

	"4yE=[mu"Az|IE@   PZ}E9Q"&?.!%49`   zU3[E7`xA)(6W_3   :wd'a(O@fr}.Z8=
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([int]$PasswordLength = 15, [int]$Columns = 6, [int]$Rows = 30)

$MinCharCode = 33
$MaxCharCode = 126

try {
	write-output ""
	$Generator = New-Object System.Random
	for ($j = 0; $j -lt $Rows; $j++) {
		$Line = ""
		for ($k = 0; $k -lt $Columns; $k++) {
			for ($i = 0; $i -lt $PasswordLength; $i++) {
				$Line += [char]$Generator.next($MinCharCode,$MaxCharCode)
			}
			$Line += "   "
		}
		write-output "$Line"
	}
	write-output ""
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-pins.ps1`

```component VPCard
{
  "title": "list-pins.ps1",
  "desc": "Prints a list of random PIN's.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-pins.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists random PIN's.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-pins.ps1 [[-PinLength] <Int32>] [[-Columns] <Int32>] [[-Rows] <Int32>] [<CommonParameters>]

-PinLength <Int32>
    Specifies the PIN length
    
    Required?                    false
    Position?                    1
    Default value                5
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Columns <Int32>
    Specifies the number of columns
    
    Required?                    false
    Position?                    2
    Default value                12
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Rows <Int32>
    Specifies the number of rows
    
    Required?                    false
    Position?                    3
    Default value                30
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-pins.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists random PIN's
.DESCRIPTION
	This PowerShell script lists random PIN's.
.PARAMETER PinLength
	Specifies the PIN length
.PARAMETER Columns
	Specifies the number of columns
.PARAMETER Rows
	Specifies the number of rows
.EXAMPLE
	PS> ./list-pins.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([int]$PinLength = 5, [int]$Columns = 12, [int]$Rows = 30)

try {
	write-output ""
	$Generator = New-Object System.Random
	for ($j = 0; $j -lt $Rows; $j++) {
		$Line = ""
		for ($k = 0; $k -lt $Columns; $k++) {
			for ($i = 0; $i -lt $PinLength; $i++) {
				$Line += [char]$Generator.next(48,57)
			}
			$Line += "   "
		}
		write-output $Line
	}
	write-output ""
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-sql-tables.ps1`

```component VPCard
{
  "title": "list-sql-tables.ps1",
  "desc": "Lists the SQL server tables.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-sql-tables.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists all tables in a SQL server database and exports the list as CSV.

```powershell
Install-Module InvokeQuery
```

Run the above command if you do not have this module.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-sql-tables.ps1 [-server] <Object> [-database] <Object> [-username] <Object> [-password] <Object> [<CommonParameters>]

-server <Object>
    
    Required?                    true
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-database <Object>
    
    Required?                    true
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-username <Object>
    
    Required?                    true
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-password <Object>
    
    Required?                    true
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./list-sql-tables.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists all tables of a SQL server database 
.DESCRIPTION
	This PowerShell script lists all tables in a SQL server database and exports the list as CSV.
	Install-Module InvokeQuery
	Run the above command if you do not have this module.
.EXAMPLE
	PS> ./list-sql-tables.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param(
[Parameter(Mandatory=$true)]$server,
[Parameter(Mandatory=$true)]$database,
[Parameter(Mandatory=$true)]$username,
[Parameter(Mandatory=$true)]$password
)
$secpasswd = ConvertTo-SecureString $password -AsPlainText -Force
$creds = New-Object System.Management.Automation.PSCredential ($username, $secpasswd)
$csvfilepath = "$PSScriptRoot\sqlserver_tables.csv"
$result = Invoke-SqlServerQuery -Credential $creds -ConnectionTimeout 10000 -Database $database -Server $server -Sql "SELECT TABLE_NAME FROM $database.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'" -CommandTimeout 10000
$result | Export-Csv $csvfilepath -NoTypeInformation
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`list-weather.ps1`

```component VPCard
{
  "title": "list-weather.ps1",
  "desc": "Lists the hourly weather.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/list-weather.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the hourly weather report in a nice table.

::: tabs

@tab:active Parameters

```powershell
PS> ./list-weather.ps1 [[-Location] <String>] [<CommonParameters>]

-Location <String>
    Specifies the location to use (determined automatically per default)
    
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
PS> ./list-weather.ps1
# TODAY   🌡°C  ☂️mm  💧  💨km/h ☀️UV  ☁️  👁km  at Munich (Bayern, Germany)
#  0°°   -2°   0.0   93%   ↗ 6   1    21%  10  🌙 clear
# ...
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the weather report
.DESCRIPTION
	This PowerShell script lists the hourly weather report in a nice table.
.PARAMETER Location
	Specifies the location to use (determined automatically per default)
.EXAMPLE
	PS> ./list-weather.ps1
	TODAY   🌡°C  ☂️mm  💧  💨km/h ☀️UV  ☁️  👁km  at Munich (Bayern, Germany)
	 0°°   -2°   0.0   93%   ↗ 6   1    21%  10  🌙 clear
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Location = "") # empty means determine automatically

function GetDescription { param([string]$Text)
	switch($Text) {
	"Blizzard"			{ return "❄️ blizzard ⚠️" }
	"Blowing snow"			{ return "❄️ blowing snow ⚠️" }
	"Clear"				{ return "🌙 clear" }
	"Cloudy"			{ return "☁️ cloudy" }
	"Fog"				{ return "🌫  fog" }
	"Freezing fog"			{ return "🌫  freezing fog" }
	"Heavy snow"			{ return "❄️ heavy snow ⚠️" }
	"Light drizzle"			{ return "💧 light drizzle" }
	"Light freezing rain"		{ return "💧 light freezing rain ⚠️" }
	"Light rain"			{ return "💧 light rain" }
	"Light rain shower"		{ return "💧 light rain shower" }
	"Light sleet"			{ return "❄️ light sleet" }
	"Light sleet showers"		{ return "❄️ light sleet showers" }
	"Light snow"			{ return "❄️ light snow" }
	"Light snow showers"		{ return "❄️ light snow showers" }
	"Moderate or heavy freezing rain"{return "💧 moderate or heavy freezing rain ⚠️" }
	"Moderate or heavy rain shower" { return "💧 moderate or heavy rain shower ⚠️" }
	"Moderate or heavy snow showers"{ return "❄️ moderate or heavy snow showers ⚠️" }
	"Moderate rain"			{ return "💧 moderate rain" }
	"Moderate rain at times"	{ return "💧 moderate rain at times" }
	"Moderate snow"			{ return "❄️ moderate snow" }
	"Mist"				{ return "🌫  misty" }
	"Overcast"			{ return "☁️ overcast" }
	"Partly cloudy"			{ return "⛅️partly cloudy" }
	"Patchy heavy snow"		{ return "❄️ patchy heavy snow ⚠️" }
	"Patchy light drizzle"     	{ return "💧 patchy light drizzle" }
	"Patchy light rain"     	{ return "💧 patchy light rain" }
	"Patchy light rain with thunder" { return "💧 patchy light rain with thunder" }
	"Patchy light snow"		{ return "❄️ patchy light snow" }
	"Patchy moderate snow"		{ return "❄️ patchy moderate snow" }
	"Patchy rain possible"  	{ return "💧 patchy rain possible" }
	"Patchy snow possible"  	{ return "❄️ patchy snow possible" }
	"Sunny"				{ return "☀️ sunny" }
	"Thundery outbreaks possible"	{ return "⚡️thundery outbreaks possible" }
	default				{ return "$Text" }
	}
}

function GetWindDir { param([string]$Text)
	switch($Text) {
	"NW"	{ return "↘" }
	"NNW"	{ return "↓" }
	"N"	{ return "↓" }
	"NNE"	{ return "↓" }
	"NE"	{ return "↙" }
	"ENE"	{ return "←" }
	"E"	{ return "←" }
	"ESE"	{ return "←" }
	"SE"	{ return "↖" }
	"SSE"	{ return "↑" }
	"S"	{ return "↑" }
	"SSW"	{ return "↑" }
	"SW"	{ return "↗" }
	"WSW"	{ return "→" }
	"W"	{ return "→" }
	"WNW"	{ return "→" }
	default { return "$Text" }
	}
}

try {
	Write-Progress "⏳ Loading weather data from http://wttr.in ..."
	$Weather = (Invoke-WebRequest -URI http://wttr.in/${Location}?format=j1 -userAgent "curl" -useBasicParsing).Content | ConvertFrom-Json
	Write-Progress -completed "."
	$Area = $Weather.nearest_area.areaName.value
	$Region = $Weather.nearest_area.region.value
	$Country = $Weather.nearest_area.country.value	
	[int]$Day = 0
	foreach($Hourly in $Weather.weather.hourly) {
		$Hour = $Hourly.time / 100
		$Temp = $(($Hourly.tempC.toString()).PadLeft(3))
		$Precip = $Hourly.precipMM
		$Humidity = $(($Hourly.humidity.toString()).PadLeft(3))
		$Pressure = $Hourly.pressure
		$WindSpeed = $(($Hourly.windspeedKmph.toString()).PadLeft(2))
		$WindDir = GetWindDir $Hourly.winddir16Point
		$UV = $Hourly.uvIndex
		$Clouds = $(($Hourly.cloudcover.toString()).PadLeft(3))
		$Visib = $(($Hourly.visibility.toString()).PadLeft(2))
		$Desc = GetDescription $Hourly.weatherDesc.value
		if ($Hour -eq 0) {
			if ($Day -eq 0) {
				Write-Host -foregroundColor green "TODAY   🌡°C  ☂️mm  💧  💨km/h  ☀️UV  ☁️   👁km   at $Area ($Region, $Country)"
			} elseif ($Day -eq 1) {
				$Date = (Get-Date).AddDays(1)
				[string]$Weekday = $Date.DayOfWeek
				Write-Host -foregroundColor green "$($Weekday.toUpper())"
			} else {
				$Date = (Get-Date).AddDays(2)
				[string]$Weekday = $Date.DayOfWeek
				Write-Host -foregroundColor green "$($Weekday.toUpper())"
			}
			$Day++
		}
		"$(($Hour.toString()).PadLeft(2))°°  $Temp°   $Precip  $Humidity%   $($WindDir)$WindSpeed    $UV   $Clouds%   $Visib   $Desc"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`locate-city.ps1`

```component VPCard
{
  "title": "locate-city.ps1",
  "desc": "Prints the geographic location of the given city.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/locate-city.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script prints the geographic location of the given city.

::: tabs

@tab:active Parameters

```powershell
PS> ./locate-city.ps1 [[-City] <String>] [<CommonParameters>]

-City <String>
    Specifies the city to look for
    
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
PS> ./locate-city.ps1 Paris
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints the geographic location of a city
.DESCRIPTION
	This PowerShell script prints the geographic location of the given city.
.PARAMETER City
	Specifies the city to look for
.EXAMPLE
	PS> ./locate-city.ps1 Paris
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$City = "")

try {
	if ($City -eq "" ) { $City = Read-Host "Enter the city name" }

	Write-Progress "⏳Reading worldcities.csv..."
	$Table = import-csv "$PSScriptRoot/../Data/worldcities.csv"

	$FoundOne = 0
	foreach($Row in $Table) {
		if ($Row.city -eq $City) {
			$FoundOne = 1
			$Country = $Row.country
			$Region = $Row.admin_name
			$Lat = $Row.lat
			$Long = $Row.lng
			$Population = $Row.population
			write-host "* $City ($Country, $Region, population $Population) is at $Lat°N, $Long°W"
		}
	}

	if ($FoundOne) {
		exit 0 # success
	}
	write-error "City $City not found"
	exit 1
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`locate-ipaddress.ps1`

```component VPCard
{
  "title": "locate-ipaddress.ps1",
  "desc": "Prints the geographic location of the given IP address.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/locate-ipaddress.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

::: tabs

@tab:active Parameters

```powershell
PS> ./locate-ipaddress.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints the geo location of the given IP address
.DESCRIPTION
	This PowerShell script prints the geographic location of the given IP address.
.PARAMTER IPaddress
	Specifies the IP address
.EXAMPLE
	PS> ./locate-ipaddress.ps1 177.144.67.98
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$IPaddress= "")

try {
	if ($IPaddress -eq "" ) { $IPaddress = read-host "Enter IP address to locate" }

	$result = Invoke-RestMethod -Method Get -Uri "http://ip-api.com/json/$IPaddress"
	write-output $result
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`moon.ps1`

```component VPCard
{
  "title": "moon.ps1",
  "desc": "Prints the current moon phase.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/moon.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script prints the current moon phase.

::: tabs

@tab:active Parameters

```powershell
PS> ./moon.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./moon.ps1
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Prints the current moon phase
.DESCRIPTION
	This PowerShell script prints the current moon phase.
.EXAMPLE
	PS> ./moon.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	(Invoke-WebRequest http://wttr.in/Moon -userAgent "curl" -useBasicParsing).Content
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`scan-ports.ps1`

```component VPCard
{
  "title": "scan-ports.ps1",
  "desc": "Scans the network for open/closed ports.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/scan-ports.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script scans the network for open or closed ports.

::: tabs

@tab:active Parameters

```powershell
PS> ./scan-ports.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./scan-ports
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Scans the network for open/closed ports
.DESCRIPTION
	This PowerShell script scans the network for open or closed ports.
.EXAMPLE
	PS> ./scan-ports
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

$network = "192.168.178"
$port = 8080
$range = 1..254
$ErrorActionPreference= "silentlycontinue"

foreach($add in $range) {
	$ip = "{0}.{1}" -F $network,$add
	Write-Progress "⏳Scanning IP $ip" -PercentComplete (($add/$range.Count)*100)
	if (Test-Connection -BufferSize 32 -Count 1 -quiet -ComputerName $ip) {
		$socket = new-object System.Net.Sockets.TcpClient($ip, $port)
		if ($socket.Connected) {
			write-output "TCP port $port at $ip is open"
			$socket.Close()
		} else {
			write-output "TCP port $port at $ip is not open"
		}
	}
}
exit 0 # success
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`send-tcp.ps1`

```component VPCard
{
  "title": "send-tcp.ps1",
  "desc": "Sends a TCP message to the given IP address and port.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/send-tcp.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script sends a TCP message to the given IP address and port.

::: tabs

@tab:active Parameters

```powershell
PS> ./send-tcp.ps1 [[-TargetIP] <String>] [[-TargetPort] <Int32>] [[-Message] <String>] [<CommonParameters>]

-TargetIP <String>
    Specifies the target IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-TargetPort <Int32>
    Specifies the target port number
    
    Required?                    false
    Position?                    2
    Default value                0
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Message <String>
    Specifies the message to send
    
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
PS> ./send-tcp 192.168.100.100 8080 "TEST"
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sends a TCP message to an IP address and port
.DESCRIPTION
	This PowerShell script sends a TCP message to the given IP address and port.
.PARAMETER TargetIP
	Specifies the target IP address
.PARAMETER TargetPort
	Specifies the target port number
.PARAMETER Message
	Specifies the message to send
.EXAMPLE
	PS> ./send-tcp 192.168.100.100 8080 "TEST"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$TargetIP = "", [int]$TargetPort = 0, [string]$Message = "")

try {
	if ($TargetIP -eq "" ) { $TargetIP = read-host "Enter target IP address" }
	if ($TargetPort -eq 0 ) { $TargetPort = read-host "Enter target port" }
	if ($Message -eq "" ) { $Message = read-host "Enter message to send" }

        $IP = [System.Net.Dns]::GetHostAddresses($TargetIP) 
        $Address = [System.Net.IPAddress]::Parse($IP) 
        $Socket = New-Object System.Net.Sockets.TCPClient($Address,$TargetPort) 
        $Stream = $Socket.GetStream() 
        $Writer = New-Object System.IO.StreamWriter($Stream)
        $Message | % {
        	$Writer.WriteLine($_)
        	$Writer.Flush()
        }
        $Stream.Close()
        $Socket.Close()

	"✔️  Done."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`send-udp.ps1`

```component VPCard
{
  "title": "send-udp.ps1",
  "desc": "Sends a UDP datagram message to the given IP address and port.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/send-udp.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script sends a UDP datagram message to an IP address and port.

::: tabs

@tab:active Parameters

```powershell
PS> ./send-udp.ps1 [[-TargetIP] <String>] [[-TargetPort] <Int32>] [[-Message] <String>] [<CommonParameters>]

-TargetIP <String>
    Specifies the target IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-TargetPort <Int32>
    Specifies the target port number
    
    Required?                    false
    Position?                    2
    Default value                0
    Accept pipeline input?       false
    Accept wildcard characters?  false

-Message <String>
    Specifies the message text to send
    
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
PS> ./send-udp 192.168.100.100 8080 "TEST"
# ✔️  Done.
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sends a UDP datagram message to an IP address and port
.DESCRIPTION
	This PowerShell script sends a UDP datagram message to an IP address and port.
.PARAMETER TargetIP
	Specifies the target IP address
.PARAMETER TargetPort
	Specifies the target port number
.PARAMETER Message
	Specifies the message text to send
.EXAMPLE
	PS> ./send-udp 192.168.100.100 8080 "TEST"
	✔️  Done.
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$TargetIP = "", [int]$TargetPort = 0, [string]$Message = "")

try {
	if ($TargetIP -eq "" ) { $TargetIP = read-host "Enter target IP address" }
	if ($TargetPort -eq 0 ) { $TargetPort = read-host "Enter target port" }
	if ($Message -eq "" ) { $Message = read-host "Enter message to send" }

	$IP = [System.Net.Dns]::GetHostAddresses($TargetIP) 
	$Address = [System.Net.IPAddress]::Parse($IP) 
	$EndPoints = New-Object System.Net.IPEndPoint($Address, $TargetPort) 
	$Socket = New-Object System.Net.Sockets.UDPClient 
	$EncodedText = [Text.Encoding]::ASCII.GetBytes($Message) 
	$SendMessage = $Socket.Send($EncodedText, $EncodedText.Length, $EndPoints) 
	$Socket.Close() 

	"✔️  Done."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`set-timer.ps1`

```component VPCard
{
  "title": "set-timer.ps1",
  "desc": "Sets a timer for a countdown.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/set-timer.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script sets a timer for a countdown.

::: tabs

@tab:active Parameters

```powershell
PS> ./set-timer.ps1 [[-Seconds] <Int32>] [<CommonParameters>]

-Seconds <Int32>
    Specifies the number of seconds
    
    Required?                    false
    Position?                    1
    Default value                0
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./set-timer 60
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Sets a timer for a countdown
.DESCRIPTION
	This PowerShell script sets a timer for a countdown.
.PARAMETER Seconds
	Specifies the number of seconds
.EXAMPLE
	PS> ./set-timer 60
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([int]$Seconds = 0)

try {
	if ($Seconds -eq 0 ) { [int]$Seconds = read-host "Enter number of seconds" }

	for ($i = $Seconds; $i -gt 0; $i--) {
		Clear-Host
		./write-big "T-$i seconds"
		Start-Sleep -seconds 1
	}

	"✔️ $Seconds seconds countdown finished"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`simulate-presence.ps1`

```component VPCard
{
  "title": "simulate-presence.ps1",
  "desc": "Simulates the human presence against burglars.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/simulate-presence.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script simulates the human presence against burglars. It switches a Shelly1 device on and off.

::: tabs

@tab:active Parameters

```powershell
PS> ./simulate-presence.ps1 [[-IPaddress] <String>] [<CommonParameters>]

-IPaddress <String>
    Specifies the IP address of the Shelly1 device
    
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
PS> ./simulate-presence 192.168.100.100
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Simulate a human against burglars
.DESCRIPTION
	This PowerShell script simulates the human presence against burglars. It switches a Shelly1 device on and off.
.PARAMETER IPaddress
	Specifies the IP address of the Shelly1 device
.EXAMPLE
	PS> ./simulate-presence 192.168.100.100
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$IPaddress = "")

try {
	if ($IPaddress -eq "" ) { $IPaddress = Read-Host "Enter IP address of the Shelly1 device" }

	for ([int]$i = 0; $i -lt 1000; $i++) {
		& "$PSScriptRoot/switch-shelly1.ps1" $IPaddress on 0
		Start-Sleep -seconds 10 # on for 10 seconds
		& "$PSScriptRoot/switch-shelly1.ps1" $IPaddress off 0
		Start-Sleep -seconds 60 # off for 60 seconds
	}
	"✔️ Done."
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`start-ipfs-server.ps1`

```component VPCard
{
  "title": "start-ipfs-server.ps1",
  "desc": "Starts a local IPFS server.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/start-ipfs-server.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script starts a local IPFS server as a daemon process.

::: tabs

@tab:active Parameters

```powershell
PS> ./start-ipfs-server.ps1 [<CommonParameters>]

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./start-ipfs-server
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Start an IPFS server 
.DESCRIPTION
	This PowerShell script starts a local IPFS server as a daemon process.
.EXAMPLE
	PS> ./start-ipfs-server
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	$StopWatch = [system.diagnostics.stopwatch]::startNew()

	Write-Host "⏳ (1/5) Searching for IPFS executable...  " -noNewline
	& ipfs --version
	if ($lastExitCode -ne "0") { throw "Can't execute 'ipfs' - make sure IPFS is installed and available" }
	"⏳ (2/5) Init IPFS with profile 'lowpower'..."
	& ipfs init --profile lowpower

	"⏳ (3/5) Configuring IPFS..."
	& ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
	if ($lastExitCode -ne "0") { throw "'ipfs config Addresses.API' failed with exit code $lastExitCode" }

	& ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8765
	if ($lastExitCode -ne "0") { throw "'ipfs config Addresses.Gateway' failed with exit code $lastExitCode" }

	$Hostname = $(hostname)
	& ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[\"http://miami:5001\", \"http://localhost:3000\", \"http://127.0.0.1:5001\", \"https://webui.ipfs.io\"]'
	if ($lastExitCode -ne "0") { throw "'ipfs config Access-Control-Allow-Origin' failed with exit code $lastExitCode" }

	& ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '[\"PUT\", \"POST\"]'
	if ($lastExitCode -ne "0") { throw "'ipfs config Access-Control-Allow-Methods' failed with exit code $lastExitCode" }

	& ipfs config --json AutoNAT.Throttle.GlobalLimit 1 # (30 by default)
	if ($lastExitCode -ne "0") { throw "'ipfs config AutoNAT.Throttle.GlobalLimit 1' failed with exit code $lastExitCode" }

	& ipfs config --json AutoNAT.Throttle.PeerLimit 1 # (3 by default)
	if ($lastExitCode -ne "0") { throw "'ipfs config AutoNAT.Throttle.PeerLimit 1' failed with exit code $lastExitCode" }
	""
	Write-Host "⏳ (4/5) Increasing UDP receive buffer size..." -noNewline
	& sudo sysctl -w net.core.rmem_max=2500000
	if ($lastExitCode -ne "0") { throw "'sysctl' failed with exit code $lastExitCode" }
	"⏳ (5/5) Starting IPFS daemon..."
#	Start-Process nohup 'ipfs daemon'
	Start-Process nohup -ArgumentList 'ipfs','daemon' -RedirectStandardOutput "$HOME/console.out" -RedirectStandardError "$HOME/console.err"

	[int]$Elapsed = $StopWatch.Elapsed.TotalSeconds
	"✔️  started IPFS server in $Elapsed sec"
	"⚠️ NOTE: make sure your router does not block TCP/UDP port 4001 for IPv4 and IPv6"
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`translate-file.ps1`

```component VPCard
{
  "title": "translate-file.ps1",
  "desc": "Translates the given text file into other languages.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/translate-file.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script translates the given text file into another language and writes the output on the console.

::: tabs

@tab:active Parameters

```powershell
PS> ./translate-file.ps1 [[-File] <String>] [[-SourceLang] <String>] [[-TargetLang] <String>] [<CommonParameters>]

-File <String>
    Specifies the path to the file to be translated
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-SourceLang <String>
    Specifies the source language
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-TargetLang <String>
    Specifies the target language
    
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
PS> ./translate-file C:\Memo.txt en de
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Translates a text file into another language 
.DESCRIPTION
	This PowerShell script translates the given text file into another language and writes the output on the console.
.PARAMETER File
	Specifies the path to the file to be translated
.PARAMETER SourceLang
	Specifies the source language
.PARAMETER TargetLang
	Specifies the target language
.EXAMPLE
	PS> ./translate-file C:\Memo.txt en de
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$File = "", [string]$SourceLang = "", [string]$TargetLang = "")

function UseLibreTranslate { param([string]$Text, [string]$SourceLang, [string]$TargetLang)
	$Parameters = @{"q"="$Text"; "source"="$SourceLang"; "target"="$TargetLang"; }
	$Result = (Invoke-WebRequest -Uri https://libretranslate.de/translate -Method POST -Body ($Parameters|ConvertTo-Json) -ContentType "application/json" -useBasicParsing).content | ConvertFrom-Json
	Start-Sleep -seconds 6 # 10 requests per minute maximum
	return $Result.translatedText
}

try {
	if ($File -eq "" ) { $File = Read-Host "Enter the file path" }
	if ($SourceLang -eq "" ) { $SourceLang = Read-Host "Enter the source language" }
	if ($TargetLang -eq "" ) { $TargetLang = Read-Host "Enter the target language" }

	$Lines = Get-Content -path $File
	foreach($Line in $Lines) {
		if ("$Line" -eq "") { Write-Output "$Line"; continue }
		if ("$Line" -eq " ") { Write-Output "$Line"; continue }
		if ("$Line" -like "===*") { Write-Output "$Line"; continue }
		if ("$Line" -like "---*") { Write-Output "$Line"; continue }
		if ("$Line" -like "!*(/*)") { Write-Output "$Line"; continue }
		$Result = UseLibreTranslate $Line $SourceLang $TargetLang
		Write-Output $Result
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`translate-files.ps1`

```component VPCard
{
  "title": "translate-files.ps1",
  "desc": "Translates the given text files into any supported language.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/translate-files.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script translates text files into multiple languages.

::: tabs

@tab:active Parameters

```powershell
PS> ./translate-files.ps1 [[-filePattern] <String>] [<CommonParameters>]

-filePattern <String>
    Specifies the file pattern of the text file(s) to be translated
    
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
PS> ./translate-files C:\Temp\*.txt
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Translates text files
.DESCRIPTION
	This PowerShell script translates text files into multiple languages.
.PARAMETER filePattern
	Specifies the file pattern of the text file(s) to be translated
.EXAMPLE
	PS> ./translate-files C:\Temp\*.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$filePattern = "")

function DetectSourceLang { param([string]$Filename)
	if ("$Filename" -like "*-Deutsch*")  { return "de" }
	if ("$Filename" -like "*-English*")  { return "en" }
	if ("$Filename" -like "*-Español*")  { return "es" }
	if ("$Filename" -like "*-Français*") { return "fr" }
	if ("$Filename" -like "*-Portuguese*") { return "pt" }
	return "unknown"
}

function TranslateFilename { param([string]$Filename, [string]$SourceLang, [string]$TargetLang)
	[string]$SourceLanguage = ""
	if ($SourceLang -eq "de") { $SourceLanguage = "-Deutsch" }
	if ($SourceLang -eq "en") { $SourceLanguage = "-English" }
	if ($SourceLang -eq "es") { $SourceLanguage = "-Español" }
	if ($SourceLang -eq "fr") { $SourceLanguage = "-Français" }
	if ($SourceLang -eq "pt") { $SourceLanguage = "-Portuguese" }
	[string]$TargetLanguage = "-Unknown"
	if ($TargetLang -eq "ar") { $TargetLanguage = "-Arabic" }
	if ($TargetLang -eq "de") { $TargetLanguage = "-Deutsch" }
	if ($TargetLang -eq "en") { $TargetLanguage = "-English" }
	if ($TargetLang -eq "es") { $TargetLanguage = "-Español" }
	if ($TargetLang -eq "fr") { $TargetLanguage = "-Français" }
	if ($TargetLang -eq "pt") { $TargetLanguage = "-Portuguese" }
	return $Filename.replace($SourceLanguage, $TargetLanguage)
}

try {
	if ($filePattern -eq "" ) { $filePattern = Read-Host "Enter the file pattern of the text file(s) to be translated" }

	$TargetLanguages = "ar","zh","fr","de","hi","ga","it","ja","ko","pt","ru","es"
	$SourceFiles = Get-ChildItem -path "$filePattern"
	foreach($SourceFile in $SourceFiles) {
		$SourceLang = DetectSourceLang $SourceFile
		foreach($TargetLang in $TargetLanguages) {
			if ($SourceLang -eq $TargetLang) { continue }
			Write-Host "Translating $SourceFile from $SourceLang to $TargetLang ..."
			$TargetFile = TranslateFilename $SourceFile $SourceLang $TargetLang
			Write-Host "$TargetFile"
			& "$PSScriptRoot/translate-file.ps1" $SourceFile $SourceLang $TargetLang > $TargetFile
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

## <FontIcon icon="iconfont icon-powershell"/>`translate-text.ps1`

```component VPCard
{
  "title": "translate-text.ps1",
  "desc": "Translates the given text in English into other languages.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/translate-text.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script translates text into other languages.

::: tabs

@tab:active Parameters

```powershell
PS> ./translate-text.ps1 [[-Text] <String>] [[-SourceLangCode] <String>] [[-TargetLangCode] <String>] [<CommonParameters>]

-Text <String>
    Specifies the text to translate
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-SourceLangCode <String>
    
    Required?                    false
    Position?                    2
    Default value                en
    Accept pipeline input?       false
    Accept wildcard characters?  false

-TargetLangCode <String>
    
    Required?                    false
    Position?                    3
    Default value                all
    Accept pipeline input?       false
    Accept wildcard characters?  false

[<CommonParameters>]
    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, 
    WarningVariable, OutBuffer, PipelineVariable, and OutVariable.
```

@tab Example

```powershell
PS> ./translate-text "Hello World" en all

```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Translates text into other languages
.DESCRIPTION
	This PowerShell script translates text into other languages.
.PARAMETER Text
	Specifies the text to translate
.PARAMETER SourceLang
	Specifies the source language (English by default)
.PARAMETER TargetLang
	Specifies the target language (all by default)
.EXAMPLE
	PS> ./translate-text "Hello World" en all
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$Text = "", [string]$SourceLangCode = "en", [string]$TargetLangCode = "all")

function UseLibreTranslate { param([string]$Text, [string]$SourceLangCode, [string]$TargetLangCode)
	$Parameters = @{"q"="$Text"; "source"="$SourceLangCode"; "target"="$TargetLangCode"; }
	$Result = (Invoke-WebRequest -Uri https://libretranslate.de/translate -Method POST -Body ($Parameters|ConvertTo-Json) -ContentType "application/json" -useBasicParsing).content | ConvertFrom-Json
	return $Result.translatedText
}

try {
	if ($Text -eq "" ) { $Text = Read-Host "Enter the text to translate" }

	if ($TargetLangCode -eq "all") {
		$TargetLangCodes = "ar","de","es","fr","ga","hi","it","ja","ko","pt","ru","zh"
		foreach($TargetLangCode in $TargetLangCodes) {
			$Translation = UseLibreTranslate $Text $SourceLangCode $TargetLangCode
			Write-Output "$($TargetLangCode): $Translation"
			Start-Sleep -seconds 6 # 10 requests maximum per minute
		}
	} else {
		$Translation = UseLibreTranslate $Text $SourceLangCode $TargetLangCode
		Write-Output "$Translation"
	}
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`weather.ps1`

```component VPCard
{
  "title": "weather.ps1",
  "desc": "Prints the current weather forecast.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/weather.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the current weather forecast.

::: tabs

@tab:active Parameters

```powershell
PS> ./weather.ps1 [[-GeoLocation] <String>] [<CommonParameters>]

-GeoLocation <String>
    Specifies the geographic location to use
    
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
PS> ./weather Paris
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the current weather forecast
.DESCRIPTION
	This PowerShell script lists the current weather forecast.
.PARAMETER GeoLocation
	Specifies the geographic location to use
.EXAMPLE
	PS> ./weather Paris
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$GeoLocation = "") # empty means determine automatically

try {
	(Invoke-WebRequest http://wttr.in/$GeoLocation -userAgent "curl" -useBasicParsing).Content
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---

## <FontIcon icon="iconfont icon-powershell"/>`weather-report.ps1`

```component VPCard
{
  "title": "weather-report.ps1",
  "desc": "Prints the local weather report.",
  "link": "https://github.com/fleschutz/PowerShell/blob/master/Docs/weather-report.md",
  "logo": "https://avatars.githubusercontent.com/u/16557787?v=4",
  "background": "rgba(10, 10, 10, 0.2)"
}
```

This PowerShell script lists the local weather report.

::: tabs

@tab:active Parameters

```powershell
PS> ./weather-report.ps1 [[-GeoLocation] <String>] [<CommonParameters>]

-GeoLocation <String>
    Specifies the geographic location to use (determine automatically by default)
    
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
PS> ./weather-report Paris
# 
```

@tab Script Content

```powershell
<#
.SYNOPSIS
	Lists the local weather report
.DESCRIPTION
	This PowerShell script lists the local weather report.
.PARAMETER GeoLocation
	Specifies the geographic location to use (determine automatically by default)
.EXAMPLE
	PS> ./weather-report Paris
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

param([string]$GeoLocation = "") # empty means determine automatically

try {
	(Invoke-WebRequest http://v2d.wttr.in/$GeoLocation -userAgent "curl" -useBasicParsing).Content
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
```

:::

---


<TagLinks/>
