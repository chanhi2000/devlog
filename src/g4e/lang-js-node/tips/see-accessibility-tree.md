---
lang: ko-KR
title: 💡Tips > See the accessibility tree
description: 🧶Node.js > 💡Tips > See the accessibility tree
category:
  - 🧶Node.js
  - 💡Tips
tag: 
  - js
  - debug
  - tips
  - eval
  - sourceURL
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```component VPCard
{
  "title": "See the accessibility tree",
  "desc": "Devtools Tips > See the accessibility tree",
  "link": "https://devtoolstips.org/tips/en/see-accessibility-tree/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```
The accessibility tree is a representation of the structure of a web page that is used by assistive technologies such as screen readers. It is similar to the DOM tree, but it only includes the elements that are relevant for accessibility. For example, it includes text nodes, links, images, or form controls, but not generic elements such as `<div>` or `<span>`.

It's best to actually use a screen reader, or another assistive technology, to experience how your webpage is perceived by users with disabilities. But, it can sometimes be useful to see the accessibility tree in DevTools to understand how a page is structured.

---

::: tabs

@tab:active Firefox

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

@tab Chrome / Edge / Chrome-based Browers

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

---

## See also

- https://devtoolstips.org/tips/en/simulate-color-vision-deficiencies
- https://devtoolstips.org/tips/en/visualize-tabbing-order
- https://devtoolstips.org/tips/en/drag-drop-dom-nodes


```component VPCard
{
  "title": "Inspect the user-agent DOM",
  "desc": "Devtools Tips > Inspect the user-agent DOM",
  "link": "tips/inspect-user-agent-dom.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

---

<TagLinks />