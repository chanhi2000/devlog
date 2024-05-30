---
lang: ko-KR
title: Disable all CSS styles on the page
description: Article(s) > Disable all CSS styles on the page
icon: fa-brands fa-css3-alt
category: 
  - CSS
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - css
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Disable all CSS styles on the page
    - property: og:description
      content: Disable all CSS styles on the page
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/disable-all-css.html
prev: /programming/css/articles/README.md
date: 2024-04-09
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/css/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Disable all CSS styles on the page | Devtools Tips",
  "desc": "Disable all CSS styles on the page",
  "link": "https://devtoolstips.org/tips/en/disable-all-css/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

To remove all CSS styles on a webpage, for example to test the accessibility of a page when styles are disabled, or to verify the order in which content is displayed, you can use the techniques below. Don't worry, the styles will be re-enabled when you refresh the page.

---

## By running JavaScript in the console

Open the **Console** tool in your browser DevTools.

Enter the following JavaScript expression:

```js
document.querySelectorAll('style, link[rel="stylesheet"]').forEach(e => e.remove());
```

The expression above finds all `<style>` elements and `<link rel="stylesheet">` elements on the page, and removes them.

Press <kbd>Enter</kbd> to run the expression. The page is now displayed without any CSS styles:

![Edge showing a website with no CSS styles. The **Console** tool is opened on the side, and shows that the expression to remove all stylesheets was run](https://devtoolstips.org/assets/img/disable-all-css.png)

---

## By using Firefox's Style Editor tool

.<FontIcon icon="fa-brands fa-firefox-browser"/>Firefox has a tool named **Style Editor**, which lists all the stylesheets used on the page. To disable the styles on the page:

1. Open the **Style Editor** tool in <FontIcon icon="fa-brands fa-firefox-browser"/>Firefox DevTools.
2. Click the <FontIcon icon="iconfont icon-select"/>`[Toggle style sheet visibility]` buttons (the eye icons) next to each stylesheet to disable it.

---

## By using the Sources tool in other browsers

1. Open the **Sources** tool in Chrome or Edge DevTools.
2. Find the CSS files that you want to disable, for example by pressing <kbd>Ctrl</kbd>+<kbd>P</kbd> (or <kbd>Command</kbd>+<kbd>P</kbd> on macOS) to open the **Command Menu** and by typing `.css` to filter the CSS files.
3. Select the entire text in the CSS file and delete it.
4. Repeat with the other CSS files you want to disable.

---

## By using Polypane's Disable CSS option

In Polypane, you can disable all CSS styles by using the **Disable CSS** option:

1. In the pane where you want to disable CSS styles, open the **Debug tools** menu.
2. Click <FontIcon icon="iconfont icon-select"/>`[Disable CSS]` in the menu.

![Polypane showing two panes. One has CSS applied and the other has CSS disabled. The pane with disabled CSS has an opened menu with the Disable CSS option highlighted](https://devtoolstips.org/assets/img/disable-all-css-polypane.png)

::: details See also

- [Highlight the effect of individual CSS properties on hover](https://devtoolstips.org/tips/en/highlight-css-properties-on-hover) <!-- TODO: add VPCard -->
- [Apply CSS styles to console messages](https://devtoolstips.org/tips/en/style-console-messages) <!-- TODO: add VPCard -->
- [Copy an elements styles](https://devtoolstips.org/tips/en/copy-element-styles) <!-- TODO: add VPCard -->
- [Copy a CSS rule as CSS-in-JS format](https://devtoolstips.org/tips/en/copy-rule-as-css-in-js) <!-- TODO: add VPCard -->

:::

---

<TagLinks />