---
lang: ko-KR
title: List all event listeners on the entire page
description: Article(s) > List all event listeners on the entire page
icon: fa-brands fa-js
category: 
  - JavaScript
  - Brwoser
  - Google
  - Google Chrome
  - Safari
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - js
  - debug
  - tips
  - console
  - google
  - googlechrome
  - google-chrome
  - safari
head:
  - - meta:
    - property: og:title
      content: Article(s) > List all event listeners on the entire page
    - property: og:description
      content: List all event listeners on the entire page
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/list-all-event-listeners.html
prev: /tool/chrome/articles/README.md
date: 2023-11-21
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
  "title": "List all event listeners on the entire page | Devtools Tips",
  "desc": "List all event listeners on the entire page",
  "link": "https://devtoolstips.org/tips/en/list-all-event-listeners/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

When you don't know a codebase, it might be hard to know where to get started, and what events are being listened to by which elements.

The **Console** tool, in Chromium-based browsers, comes with a nice utility function named `getEventListeners` which returns all of the listeners attached to a given element. If we combine this with the `$$` utility function, we can get a list of all elements on the page, and their listeners.

The following code snippet will return an array of objects, each containing an element and its listeners. It also filters out all of the elements that don't have any listeners attached to them.

```js
$$("*").map(el => {
  return { el, listeners: getEventListeners(el) };
}).filter(data => {
  return Object.keys(data.listeners).length;
});
```

So, to list all elements that have listeners on a page:

1. Open the **Console** tool, by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> on <FontIcon icon="fa-brands fa-windows"/>Windows or <FontIcon icon="fa-brands fa-linux"/>Linux, or <kbd>Cmd</kbd>+<kbd>Option</kbd>+<kbd>J</kbd> on <FontIcon icon="iconfont icon-macos"/>macOS.
2. Paste the code snippet above in the **Console**, and press <kbd>Enter</kbd>.
3. The list of all elements with listeners is displayed in the **Console**.

![<FontIcon icon="fa-brands fa-chrome"/>Chrome, with the `devtoolstips.org` website loaded, and the DevTools Console on the side, showing the result of the above script](https://devtoolstips.org/assets/img/list-all-event-listeners.png)

::: details See also

- [Find DOM elements from the console](https://devtoolstips.org/tips/en/query-dom-from-console) <!-- TODO: add VPCard -->
- [Copy an elements styles](https://devtoolstips.org/tips/en/copy-element-styles) <!-- TODO: add VPCard -->
- [Debug unwanted scrollbars](https://devtoolstips.org/tips/en/debug-unwanted-scrollbars) <!-- TODO: add VPCard -->
- [Edit CSS absolute and relative positions by dragging points in the page](https://devtoolstips.org/tips/en/edit-position) <!-- TODO: add VPCard -->

:::

---

<TagLinks />