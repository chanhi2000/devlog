---
lang: ko-KR
title: Block DevTools
description: Article(s) > Block DevTools
icon: iconfont icon-template
category: 
  - Browser
  - Google
  - Google Chrome
  - Firefox
  - Safari
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - js
  - debug
  - tips
  - devtools
  - google
  - googlechrome
  - firefox
  - safari
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Block DevTools
    - property: og:description
      content: Block DevTools
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/block-devtools.html
prev: /tool/chrome/articles/README.md
date: 2023-12-22
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Google Chrome > Article(s)",
  "desc": "Article(s)",
  "link": "/tool/chrome/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Firefox > Article(s)",
  "desc": "Article(s)",
  "link": "/tool/firefox/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Safari > Article(s)",
  "desc": "Article(s)",
  "link": "/tool/safari/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Block DevTools",
  "desc": "Devtools Tips > Block DevTools",
  "link": "https://devtoolstips.org/tips/en/block-devtools/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

There are two levels to consider when talking about blocking (or disabling) DevTools in a browser:

1. Disabling DevTools at the browser level. For example, if you have a browser for web development, and another one for personal browsing, you may want to disable DevTools in the latter. Maybe because you don't want <kbd>F12</kbd> to open DevTools. Or maybe it's your mum's browser and she always gets confused when she accidentally opens DevTools.
2. Disabling DevTools for an entire organization. For example, you're a teacher and you don't want your students to be able to use DevTools. Or your an IT admin and you want to disable DevTools for all the computers in your company.

All browsers have different ways to disable DevTools. Here are the ones we currently know about. If you know of others, please [<FontIcon icon="iconfont icon-github"/>let us know on the DevTools Tips GitHub repo](https://github.com/captainbrosset/devtools-tips).

::: tabs

@tab:active <FontIcon icon="fa-brands fa-firefox-browser"/>Firefox

- You can disable the <kbd>F12</kbd> keyboard shortcut by going to `about:config`, searching for the `devtools.f12_enabled` setting, and setting it to `false`. Other DevTools shortcuts are still enabled by default though.
- You can disable DevTools for your organization by using the [<FontIcon icon="fa-brands fa-firefox"/>`DisableDeveloperTools` policy](https://mozilla.github.io/policy-templates/#disabledevelopertools). Learn more about [<FontIcon icon="fa-brands fa-firefox"/>policies in Firefox](https://support.mozilla.org/products/firefox-enterprise/policies-customization-enterprise/policies-overview-enterprise).

![Disabling <kbd>F12</kbd> in Firefox's `about:config` page](https://devtoolstips.org/assets/img/block-devtools.png)

@tab <FontIcon icon="fa-brands fa-edge"/>Edge

In Edge, the <kbd>F12</kbd> keyboard is already disabled by default. The first time you press it, a confirmation dialog appears, and you can choose to either open DevTools, or continue blocking the shortcut. You can also ask Edge to remember your decision so you never have to see the dialog again. Other DevTools shortcuts are still enabled by default though.
You can disable DevTools for your organization by using the [<FontIcon icon="fa-brands fa-edge"/>`DeveloperToolsAvailability` policy](https://learn.microsoft.com/deployedge/microsoft-edge-policies#developertoolsavailability). Learn more about [<FontIcon icon="fa-brands fa-edge"/>policies in Edge](https://learn.microsoft.com/deployedge/microsoft-edge-policies).

@tab <FontIcon icon="fa-brands fa-chrome"/>Chrome

You can disable DevTools for your organization by using the [<FontIcon icon="fa-brands fa-chrome"/>`DeveloperToolsAvailability` policy](https://chromeenterprise.google/policies/#DeveloperToolsAvailability). Learn more about [<FontIcon icon="fa-brands fa-chrome"/>policies in Chrome](https://chromeenterprise.google/policies/).

@tab <FontIcon icon="fa-brands fa-safari"/>Safari

In Safari, DevTools (or *Web Inspector* as it's called there) is disabled by default. You can enable it in the Advanced tab of the Preferences.

```component VPCard
{
  "title": "Enable DevTools in Safari",
  "desc": "Devtools Tips > Enable DevTools in Safari",
  "link": "/explore/articles/devtoolstips.org/enable-safari-devtools.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

:::

::: details See also

- [Use DevTools in another language](https://devtoolstips.org/tips/en/use-another-language) <!-- TODO: add VPCard -->
- [Use document.designMode to spell check your webpage](https://devtoolstips.org/tips/en/use-designmode-to-spell-check) <!-- TODO: add VPCard -->
- [Customize keyboard shortcuts](https://devtoolstips.org/tips/en/customize-keyboard-shortcuts) <!-- TODO: add VPCard -->
- [Empty the cache and hard refresh](https://devtoolstips.org/tips/en/empty-cache-refresh) <!-- TODO: add VPCard -->


:::

---

<TagLinks />