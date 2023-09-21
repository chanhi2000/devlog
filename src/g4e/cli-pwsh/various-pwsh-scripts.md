---
lang: ko-KR
title: 🛒Various Powershell Scripts
description: 🧙‍♂️Powershell > 🛒Various Powershell Scripts
tags: ["powershell", "windows", "script", "useful-script", "mysql"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## <FontIcon icon="iconfont icon-file"/>`add-memo.ps1`

```card
title: add-memo.ps1
desc: Adds the given memo text to $HOME/Memos.csv.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/add-memo.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`check-ipv4-address.ps1`

```card
title: check-ipv4-address.ps1
desc: Checks the given IPv4 address for validity.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ipv4-address.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`check-ipv6-address.ps1`

```card
title: check-ipv6-address.ps1
desc: Checks the given IPv6 address for validity.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ipv6-address.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`check-mac-address.ps1`

```card
title: check-mac-address.ps1
desc: Checks the given MAC address for validity.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-mac-address.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`check-subnet-mask.ps1`

```card
title: check-subnet-mask.ps1
desc: Checks the given subnet mask for validity.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/check-subnet-mask.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`display-time.ps1`

```card
title: display-time.ps1
desc: Displays the current time for 10 seconds by default.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/display-time.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-environment-variables.ps1`

```card
title: list-environment-variables.ps1
desc: Lists all environment variables.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-environment-variables.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-emojis.ps1`

```card
title: list-emojis.ps1
desc: Lists the emojis of Unicode 13.0.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-emojis.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-exchange-rates.ps1`

```card
title: list-exchange-rates.ps1
desc: Lists the current exchange rates for the given currency.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-exchange-rates.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-memos.ps1`

```card
title: list-memos.ps1
desc: Lists the memos at $HOME/Memos.csv.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-memos.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
		write-progress "Reading $Path ..."
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

## <FontIcon icon="iconfont icon-file"/>`list-mysql-tables.ps1`

```card
title: list-mysql-tables.ps1
desc: Lists the MySQL server tables.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-mysql-tables.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-news.ps1`

```card
title: list-news.ps1
desc: Lists the latest news.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-news.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

## <FontIcon icon="iconfont icon-file"/>`list-os-releases.ps1`

```card
title: list-os-releases.ps1
desc: Lists operating system releases and download URL.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-os-releases.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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
	write-progress "Reading OS_IPFS_hashes.csv ..."

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

## <FontIcon icon="iconfont icon-file"/>`list-os-updates.ps1`

```card
title: list-os-updates.ps1
desc: Lists operating system updates.
link: https://github.com/fleschutz/PowerShell/blob/master/Docs/list-os-updates.md
logo: https://avatars.githubusercontent.com/u/16557787?v=4
color: rgba(10, 10, 10, 0.2)
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

<TagLinks/>
