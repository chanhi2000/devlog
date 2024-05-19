---
lang: ko-KR
title: See the viewport size
description: Article(s) > See the viewport size
icon: fa-brands fa-css3-alt
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
  - testing
  - css
  - tips
  - google
  - googlechrome
  - google-chrome
  - firefox
  - safari
head:
  - - meta:
    - property: og:title
      content: Article(s) > See the viewport size
    - property: og:description
      content: See the viewport size
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/see-viewport-size.html
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
  "title": "See the viewport size",
  "desc": "Devtools Tips > See the viewport size",
  "link": "https://devtoolstips.org/tips/en/see-viewport-size/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

> 2023.10.05

The size of the viewport that's used to render a webpage in a browser can be very important at times, such as when creating or debugging [<FontIcon icon="fa-brands fa-firefox"/>media queries](https://developer.mozilla.org/docs/Web/CSS/CSS_media_queries/Using_media_queries).

You can easily know what the current size of the viewport is in DevTools. Here are two ways to do it.

---

## See the viewport size in the Console

To display the viewport size in the **Console** tool:

1. Open the **Console** tool in DevTools.
2. Enter `${document.documentElement.clientWidth} x ${document.documentElement.clientHeight}` in the prompt and press <kbd>Enter</kbd>.<br/>The size of the viewport, at the time you executed the expression, appears in the **Console**.

You can also use a *live expression* to see the size of the viewport in real-time, as you resize the browser window. To learn more, see [Cut down on console noise using live expressions](https://devtoolstips.org/tips/en/live-expressions).

---

## See the viewport size in the page

You can also see the size of the viewport[^1] in the page directly:

::: tabs

@tab <FontIcon icon="fa-brands fa-chrome"/>Chrome or <FontIcon icon="fa-brands fa-edge"/>Edge

1. Open DevTools.
2. Focus your attention in the top-right corner of the webpage, and then resize the browser window (or the DevTools panel).
The viewport size appears as a temporary overlay, in the top-right corner of the webpage:

![<FontIcon icon="fa-brands fa-chrome"/>Chrome, with DevTools opened, the viewport size overlay appears in the rendered webpage](https://devtoolstips.org/assets/img/see-viewport-size-chrome.png)

@tab <FontIcon icon="fa-brands fa-firefox-browser"/>Firefox

1. Open DevTools and go to the **Settings** panel (<kbd>F1</kbd>).
2. Under <FontIcon icon="iconfont icon-select"/>`[Available Toolbox]` Buttons, select the <FontIcon icon="iconfont icon-select"/>`[Toggle rulers for the page]` setting.<br/>The **Toggle rulers for the page** icon appears in the DevTools toolbar.
3. Click the ruler icon to display rulers in the webpage.<br/> In addition to the top and left rulers which now are visible in the webpage, the viewport size is displayed in an overlay, in the top-right corner of the webpage.

![<FontIcon icon="fa-brands fa-firefox-browser"/>Firefox, with DevTools opened, the viewport size overlay appears in the rendered webpage](https://devtoolstips.org/assets/img/see-viewport-size-firefox.png)

@tab <FontIcon icon="fa-brands fa-safari"/>Safari

1. Open Web Inspector and go to the **Elements** tool.
2. Hover over any node displayed in the DOM tree of the tool.
On hover, rulers and the viewport size appear in the page temporarily.

You can also click the <FontIcon icon="iconfont icon-select"/>`[Show rulers]` icon in the toolbar of the **Elements** tool to make the rulers and viewport size overlay permanent.

![<FontIcon icon="fa-brands fa-safari"/>Safari, with Inspector opened, the viewport size overlay appears in the rendered webpage](https://devtoolstips.org/assets/img/see-viewport-size-safari.png)

@tab Polypane

1. The dimensions of each viewport are always shown above it. Edit these values to update the viewport.

![Polypane, showing dimensions above each viewport](https://devtoolstips.org/assets/img/see-viewport-size-polypane.png)

:::

::: details See also

- [Quickly spot out-of-viewport elements](https://devtoolstips.org/tips/en/spot-out-of-viewport-elements) <!-- TODO: add VPCard -->

```component VPCard
{
  "title": "Debug popups that appear on hover",
  "desc": "Devtools Tips > Debug popups that appear on hover",
  "link": "/explore/articles/devtoolstips.org/debug-popups-on-hover.md",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

- [Hide or pin the information tooltip while inspecting page elements](https://devtoolstips.org/tips/en/hide-or-pin-inspect-info-tooltip) <!-- TODO: add VPCard -->
- [Simulate different devices and screen sizes](https://devtoolstips.org/tips/en/simulate-devices) <!-- TODO: add VPCard -->

:::

[^1]: In browsers with classic scrollbars, the number shown in the page by DevTools doesn't account for the scrollbar width, if there is one. The actual viewport width is about 15 to 17 pixels small than the number shown.

---

<TagLinks />
