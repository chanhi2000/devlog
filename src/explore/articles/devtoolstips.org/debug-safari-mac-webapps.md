---
lang: ko-KR
title: Debug your Safari Web Apps on macOS
description: Article(s) > Debug your Safari Web Apps on macOS
icon: fa-brands fa-safari
category: 
  - Safari
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - safari
  - macos
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Debug your Safari Web Apps on macOS
    - property: og:description
      content: Debug your Safari Web Apps on macOS
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/debug-safari-mac-webapps.html
prev: /tool/safari/articles/README.md
---

# {{ $frontmatter.title }} 관련

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
  "title": "Debug your Safari Web Apps on macOS",
  "desc": "Devtools Tips > Debug your Safari Web Apps on macOS",
  "link": "https://devtoolstips.org/tips/en/debug-safari-mac-webapps/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

> 2023.09.23

Starting with Safari 17 (announced at WWDC 2023) any website you use in Safari can be installed as a Web App on macOS. Once installed, the Web App shows up like any other app on macOS, in all of the same places, like in the Dock. It also has its own standalone window.

Once installed, you can debug your Web Apps using the Web Inspector in Safari, here is how:

1. If you haven't done this already, enable the developer features in Safari. This only needs to be done once:
  a. In Safari, go to <FontIcon icon="iconfont icon-select"/>`[Safari]` > `[Settings]`.
  b. Select the <FontIcon icon="iconfont icon-select"/>`[Advanced]` tab.
  c. Click <FontIcon icon="iconfont icon-select"/>`[Show features for web developers]`.
2. Open your Web App.
3. In Safari, go to the **Develop** menu.
4. Select the device your Web App is running on. This will be your Mac's machine name.
5. In the submenu, select the Web App you want to debug.

To learn more, see [<FontIcon icon="fa-brands fa-apple"/>Safari's Develop menu documentation](https://developer.apple.com/documentation/safari-developer-tools/develop-menu).

![The Develop menu in the Safari menu bar, showing different devices and debugging targets](https://devtoolstips.org/assets/img/debug-safari-mac-webapps.png)

::: details See Also

```component VPCard
{
  "title": "Enable DevTools in Safari",
  "desc": "Devtools Tips > Enable DevTools in Safari",
  "link": "/explore/articles/devtoolstips.org/enable-safari-devtools.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

[Install or create extensions to customize DevTools](https://devtoolstips.org/tips/en/extend-devtools) <!-- TODO: add VPCard -->

:::

---

<TagLinks />