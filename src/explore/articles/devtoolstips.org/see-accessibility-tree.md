---
lang: ko-KR
title: See the accessibility tree
description: Article(s) > See the accessibility tree
icon: iconfont icon-template
category: 
  - Browser
  - Google
  - Google Chrome
  - Firefox
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - js
  - debug
  - google
  - googlechrome
  - google-chrome
  - firefox
head:
  - - meta:
    - property: og:title
      content: Article(s) > See the accessibility tree
    - property: og:description
      content: See the accessibility tree
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/see-accessibility-tree.html
prev: /tool/chrome/articles/README.md
date: 2024-03-05
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

[[toc]]

---

```component VPCard
{
  "title": "See the accessibility tree | Devtools Tips",
  "desc": "See the accessibility tree",
  "link": "https://devtoolstips.org/tips/en/see-accessibility-tree/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

The accessibility tree is a representation of the structure of a web page that is used by assistive technologies such as screen readers. It is similar to the DOM tree, but it only includes the elements that are relevant for accessibility. For example, it includes text nodes, links, images, or form controls, but not generic elements such as `<div>` or `<span>`.

It's best to actually use a screen reader, or another assistive technology, to experience how your webpage is perceived by users with disabilities. But, it can sometimes be useful to see the accessibility tree in DevTools to understand how a page is structured.

---

::: tabs

@tab:active <FontIcon icon="fa-brands fa-firefox"/>Firefox

Firefox has a dedicated Accessibility tool. To open it:

1. Press <kbd>F12</kbd> to open DevTools.
2. In the main toolbar, click the <FontIcon icon="iconfont icon-select"/>`[Accessibility]` tab.
3. Expand the <FontIcon icon="iconfont icon-select"/>`[document]` node that's displayed in the tool to reveal the accessibility tree.

Supported features include:

- Hovering over nodes in the tree highlights the corresponding DOM elements in the page.
- Selecting nodes reveals their accessibility properties in the sidebar.
- Accessibility issues are displayed next to the corresponding nodes in the tree.
- Checking for more issues, tabbing order, or simulating color vision deficiencies from the toolbar.

![The Accessibility tool in Firefox, showing the accessibility tree](https://devtoolstips.org/assets/img/see-accessibility-tree-firefox.png)

@tab <FontIcon icon="fa-brands fa-chrome"/>Chrome / <FontIcon icon="fa-brands fa-edge"/>Edge / Chrome-based Browers

Chrome and Edge have an option to display the accessibility tree in the <FontIcon icon="iconfont icon-select"/>`[Elements]` tool, instead of the DOM tree. To enable it:

1. Press <kbd>F12</kbd> to open DevTools.
2. Go to the <FontIcon icon="iconfont icon-select"/>`[Settings]` panel by pressing <kbd>F1</kbd>.
3. In the sidebar, click <FontIcon icon="iconfont icon-select"/>`[Experiments]`.
4. Find the <FontIcon icon="iconfont icon-select"/>`[Enable full accessibility tree view in the Elements panel]` checkbox and select it.
5. Restart DevTools.

To see the accessibility tree in the <FontIcon icon="iconfont icon-select"/>`[Elements]` tool:

1. Open the <FontIcon icon="iconfont icon-select"/>`[Elements]` tool.
2. Click <FontIcon icon="iconfont icon-select"/>`[Switch to Accessibility Tree View]` in the top-right corner of the DOM tree.

Supported features include:

- Hovering over nodes in the tree highlights the corresponding DOM elements in the page.
- Selecting nodes reveals the matching CSS styles in the Styles pane and lets you update them.

![The Elements tool in Edge, showing the accessibility tree where the DOM tree normally is](https://devtoolstips.org/assets/img/see-accessibility-tree-edge.png)

:::

::: details See also

- [Simulate color vision deficiencies](https://devtoolstips.org/tips/en/simulate-color-vision-deficiencies) <!-- TODO: add VPCard -->
- [Visualize the tabbing order on the page](https://devtoolstips.org/tips/en/visualize-tabbing-order) <!-- TODO: add VPCard -->
- [Drag and drop nodes in the DOM tree](https://devtoolstips.org/tips/en/drag-drop-dom-nodes) <!-- TODO: add VPCard -->

```component VPCard
{
  "title": "Inspect the user-agent DOM",
  "desc": "Devtools Tips > Inspect the user-agent DOM",
  "link": "/explore/articles/devtoolstips.org/inspect-user-agent-dom.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

:::

---

<TagLinks />