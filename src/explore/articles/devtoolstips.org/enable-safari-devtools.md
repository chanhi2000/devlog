---
lang: ko-KR
title: Enable DevTools in Safari
description: Article(s) > Enable DevTools in Safari
icon: fa-brands fa-safari
category: 
  - Browser
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - js
  - debug
  - tips
  - eval
  - sourceURL
head:
  - - meta:
    - property: og:title
      content: Article(s) > Enable DevTools in Safari
    - property: og:description
      content: Enable DevTools in Safari
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/enable-safari-devtools.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

```component VPCard
{
  "title": "Enable DevTools in Safari",
  "desc": "Devtools Tips > Enable DevTools in Safari",
  "link": "https://devtoolstips.org/tips/en/enable-safari-devtools/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

Unlike other browsers, Safari hides its DevTools (and other developer-related features) by default. That's actually good because 99% of the people using the browser are probably not web developers.

If you are a web developer, though, and you want to use the DevTools in Safari, here's how to enable the option:

1. Go to Safari's **Settings** or press <kbd>Cmd</kbd>+<kbd>,</kbd>.
2. Go to the <FontIcon icon="iconfont icon-select"/>`[Advanced]` tab.
3. Check the <FontIcon icon="iconfont icon-select"/>`[Show features for web developers]` option.

This will add the **Develop** menu in the menu bar and the **Develop** tab in Settings. Use this menu to open DevTools and access other developer-related features.

The right-click > <FontIcon icon="iconfont icon-select"/>`[Inspect Element]` option will also now be available.

![Safari's Preferences, the Advanced tab shows the Show Developer menu in menu bar option](https://devtoolstips.org/assets/img/enable-safari-devtools.png)

::: details See also

- [Debug your Safari Web Apps on macOS](https://devtoolstips.org/tips/en/debug-safari-mac-webapps) <!-- TODO: add VPCard -->
- [Install or create extensions to customize DevTools](https://devtoolstips.org/tips/en/extend-devtools) <!-- TODO: add VPCard -->

```component VPCard
{
  "title": "Block DevTools",
  "desc": "Devtools Tips > Block DevTools",
  "link": "/explore/articles/devtoolstips.org/block-devtools.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

- [Debug your print CSS styles by simulating print media](https://devtoolstips.org/tips/en/debug-print-css-styles) <!-- TODO: add VPCard -->

:::

---

<TagLinks />