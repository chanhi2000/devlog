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
PS> ./close-calculator
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
PS> ./close-cortana
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

<TagLinks/>
