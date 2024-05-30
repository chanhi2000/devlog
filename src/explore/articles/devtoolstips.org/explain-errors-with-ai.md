---
lang: ko-KR
title: Explain console errors by using artificial intelligence
description: Article(s) > Explain console errors by using artificial intelligence
icon: fa-brands fa-edge
category: 
  - Browser
  - Edge
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - console
  - sourceURL
head:
  - - meta:
    - property: og:title
      content: Article(s) > Explain console errors by using artificial intelligence
    - property: og:description
      content: Explain console errors by using artificial intelligence
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/explain-errors-with-ai.html
prev: /tool/chrome/articles/README.md
date: 2024-01-05
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

[[toc]]

---

```component VPCard
{
  "title": "Explain console errors by using artificial intelligence | Devtools Tips",
  "desc": "Explain console errors by using artificial intelligence",
  "link": "https://devtoolstips.org/tips/en/explain-errors-with-ai/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

.<FontIcon icon="fa-brands fa-edge"/>Edge DevTools lets use the Microsoft Copilot AI assistant to explain errors and warnings in the **Console** tool.

Console errors can sometimes be hard to understand and fix. The large language models that power modern AI assistants such as Microsoft Copilot are trained on so much data that they are sometimes able to reason about errors and provide helpful explanations.

The Console in <FontIcon icon="fa-brands fa-edge"/>Edge DevTools is now linked to the Copilot AI assistant sidebar in <FontIcon icon="fa-brands fa-edge"/>Edge. To explain an error in <FontIcon icon="fa-brands fa-edge"/>Edge DevTools:

1. Make sure you have the Copilot icon displayed in the top-right corner of Microsoft Edge. If not, go to <FontIcon icon="iconfont icon-select"/>`[Settings and more (...)]` > `[Settings]` > `[Sidebar]` > `[Copilot]` to enable it.
2. Make sure you're sign-in to <FontIcon icon="fa-brands fa-edge"/>Microsoft Edge with your personal Microsoft account.
3. Find the error you're interested in in the **Console** tool.
4. Click the [<FontIcon icon="iconfont icon-select"/>`[ask Copilot: "Explain this error"]`] button next to the error message.

The Copilot sidebar appears, your message is sent to the AI assistant, and you get a response that, hopefully, helps you understand the error.

![<FontIcon icon="fa-brands fa-edge"/>Edge with DevTools opened, an error was clicked, and Copilot is in the <FontIcon icon="fa-brands fa-edge"/>Edge sidebar, showing the error message and the explanation](https://devtoolstips.org/assets/img/explain-errors-with-ai.png)

To learn more, see [<FontIcon icon="fa-brands fa-edge"/>Explain DevTools Console errors and source code using Copilot in Edge.](https://learn.microsoft.com/microsoft-edge/devtools-guide-chromium/experimental-features/copilot-explain)

::: See also

- [Quickly spot out-of-viewport elements](https://devtoolstips.org/tips/en/spot-out-of-viewport-elements) <!-- TODO: add VPCard -->

```component VPCard
{
  "title": "Block DevTools",
  "desc": "Devtools Tips > Block DevTools",
  "link": "/explore/articles/devtoolstips.org/block-devtools.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

- [Customize keyboard shortcuts](https://devtoolstips.org/tips/en/customize-keyboard-shortcuts) <!-- TODO: add VPCard -->
- [Install or create extensions to customize DevTools](https://devtoolstips.org/tips/en/extend-devtools) <!-- TODO: add VPCard -->

:::

---

<TagLinks />