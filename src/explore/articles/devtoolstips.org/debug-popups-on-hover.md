---
lang: ko-KR
title: Debug popups that appear on hover
description: Article(s) > Debug popups that appear on hover
icon: fa-brands fa-chrome
category: 
  - Browser
  - Google
  - Google Chrome
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - browse
  - debug
  - tips
  - google
  - googlechrome
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Debug popups that appear on hover
    - property: og:description
      content: "Debug popups that appear on hover"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/debug-popups-on-hover.html
prev: /tool/chrome/articles/README.md
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

[[toc]]

---

```component VPCard
{
  "title": "Debug popups that appear on hover",
  "desc": "Devtools Tips > Debug popups that appear on hover",
  "link": "https://devtoolstips.org/tips/en/debug-popups-on-hover/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

> 2023.11.21

As described in [Debug popups that appear on hover using JS](https://devtoolstips.org/tips/en/debug-js-hover) and in [Debug popups that appear on hover using the debugger statement](https://devtoolstips.org/tips/en/debug-js-hover-2), there are ways to debug popups that appear on hover using JavaScript.

The main problem in debugging overlay elements, like popups, is that they disappear as soon as the page loses focus, for example after moving focus to the DevTools window. Use the techniques below to keep focus on the webpage while using DevTools.

::: tabs

@tab <FontIcon icon="fa-brands fa-chrome"/>Chrome or <FontIcon icon="fa-brands fa-edge"/>Edge

Chromium-based browsers, such as Chrome and Edge, provide a way to emulate a focused state on the webpage even if DevTools has focus.

To emulate a focused state on the webpage:

1. Open the **Command Menu** (<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).
2. Type **rendering** and select the **Show Rendering** command. The **Rendering** tool appears at the bottom of DevTools.
3. In the **Rendering** tool, scroll down and check the <FontIcon icon="iconfont icon-select"/>`[Emulate a focused page]` option. The webpage now has focus.
4. Use DevTools to inspect and debug elements that only appear when focus is in the webpage.

![The Rendering tool in DevTools, showing the Emulate a focused page option](https://devtoolstips.org/assets/img/debug-popups-on-hover.png)

@tab Polypane

Polypane provides a way to retain the focus state inside each pane. To retain the focus:

1. Right-click on the **Sync** icon in the toolbar.
2. Check the **Focus** option. The focus in now retained in all panes, and also kept in sync across all panes.

![Polypane with an opened context menu on the sync button, and the 'Focus' option checked and highlighted](https://devtoolstips.org/assets/img/debug-popups-on-hover-polypane.png)

:::

::: details See also

- [Debug popups that appear on hover using the debugger statement](https://devtoolstips.org/tips/en/debug-js-hover-2) <!-- TODO: add VPCard -->
- [Debug popups that appear on hover using JS](https://devtoolstips.org/tips/en/debug-js-hover) <!-- TODO: add VPCard -->
- [Hide or pin the information tooltip while inspecting page elements](https://devtoolstips.org/tips/en/hide-or-pin-inspect-info-tooltip) <!-- TODO: add VPCard -->

```component VPCard
{
  "title": "See the viewport size",
  "desc": "DevtoolsTips > See the viewport size",
  "link": "/explore/articles/devtoolstips.org/see-viewport-size.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```


:::

---

<TagLinks />