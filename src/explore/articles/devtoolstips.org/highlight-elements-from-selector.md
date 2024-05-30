---
lang: ko-KR
title: Highlight all elements on the page that match a given CSS selector
description: Article(s) > Highlight all elements on the page that match a given CSS selector
icon: fa-brands fa-css3-alt
category: 
  - CSS
  - Browser
  - Google
  - Google Chrome
  - Firefox
  - Safari
  - Article(s)
tag: 
  - blog
  - devtoolstips.org
  - css
  - highlighter
  - google
  - googlechrome
  - google-chrome
  - firefox
  - safari
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Highlight all elements on the page that match a given CSS selector
    - property: og:description
      content: Highlight all elements on the page that match a given CSS selector
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/highlight-elements-from-selector.html
prev: /tool/chrome/articles/README.md
date: 2023-09-08
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
  "title": "Highlight all elements on the page that match a given CSS selector | Devtools Tips",
  "desc": "Highlight all elements on the page that match a given CSS selector",
  "link": "https://devtoolstips.org/tips/en/highlight-elements-from-selector/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

When you select an element in DevTools (in the **Elements** or **Inspector** tool), you see the CSS rules that apply to it. But, these rules can also apply to other elements in the page than the currently selected one.

To see all the elements that match a given CSS rule selector, and therefore know which elements will be impacted if you change that rule:

::: tabs

@tab <FontIcon icon="fa-brands fa-firefox-browser"/>Firefox

Select an element in the **Inspector** tool, then click the <FontIcon icon="iconfont icon-select"/>`[Highlight all elements matching this selector]` button next to a CSS rule in the Styles pane:

![<FontIcon icon="fa-brands fa-firefox-browser"/>Firefox, with a webpage showing 3 highlighted elements, and the button enabled in the **Styles** pane](https://devtoolstips.org/assets/img/highlight-elements-from-selector-firefox.png)

@tab <FontIcon icon="fa-brands fa-chrome"/>Chrome, <FontIcon icon="fa-brands fa-edge"/>Edge, or <FontIcon icon="fa-brands fa-safari"/>Safari

Select an element in the **Elements** tool, then hover over a CSS selector in the **Styles** pane:

![<FontIcon icon="fa-brands fa-edge"/>Edge, with a webpage showing 3 highlighted elements, and a CSS selector hovered in the **Styles** pane](https://devtoolstips.org/assets/img/highlight-elements-from-selector-edge.png)

@tab Polypane

Select an element in the **Elements** panel, then click the <FontIcon icon="iconfont icon-select"/>`[Highlight all elements matching this selector]` button next to a CSS rule in the **Styles** tab:

![Polypane, with three panes showing a website. in each pane there is a highlighted element. There is a button enabled in the Styles tab](https://devtoolstips.org/assets/img/highlight-elements-from-selector-polypane.png)

:::

::: details See also

- [Highlight the effect of individual CSS properties on hover](https://devtoolstips.org/tips/en/highlight-css-properties-on-hover) <!-- TODO: add VPCard -->
- [Copy an elements styles](https://devtoolstips.org/tips/en/copy-element-styles) <!-- TODO: add VPCard -->
- [Highlight all the elements that a CSS rule matches](https://devtoolstips.org/tips/en/highlight-matching-elements) <!-- TODO: add VPCard -->
- [Tweak css grid and flexbox alignment properties](https://devtoolstips.org/tips/en/tweak-grid-flex-alignment) <!-- TODO: add VPCard -->

:::


---

<TagLinks />