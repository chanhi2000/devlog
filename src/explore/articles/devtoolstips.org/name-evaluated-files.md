---
lang: ko-KR
title: Name evaluated files with the sourceURL pragma
description: Article(s) > Name evaluated files with the sourceURL pragma
icon: fa-brands fa-js
category: 
  - JavaScript
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
      content: Article(s) > Name evaluated files with the sourceURL pragma
    - property: og:description
      content: Name evaluated files with the sourceURL pragma
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/devtoolstips.org/name-evaluated-files.html
prev: /programming/js/articles/README.md
date: 2024-01-29
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "JavaScript > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Name evaluated files with the sourceURL pragma | Devtools Tips",
  "desc": "Name evaluated files with the sourceURL pragma",
  "link": "https://devtoolstips.org/tips/en/name-evaluated-files/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

If you insert JavaScript code in a webpage by using the `eval()` function, or inline `<script>` tags, you can use the `sourceURL` pragma to give them a name in DevTools.

For example, when using `eval()`:

```js
eval('console.log("Hello world!")\n//# sourceURL=hello-world.js');
```

The above code snippet not only runs the evaluated code, but it also makes it appear in the **Sources** (or **Debugger**) tool as if it came from a file named <FontIcon icon="fa-brands fa-js"/>`hello-world.js`.


![<FontIcon icon="fa-brands fa-firefox-browser"/>Firefox DevTools, the `sourceURL` pragma was used when evaluating some code in the Console, and a new file now appears in the Debugger tool, named after the string provided in the sourceURL pragma](https://devtoolstips.org/assets/img/name-evaluated-files.png)

This can also be useful when using inline `<script>` tags:

```html
<script>
  console.log("Hello world!")
  //# sourceURL=hello-world.js
</script>
```

Using the `sourceURL` pragma is a great way to debug your code more easily in DevTools. **Console** messages will be easier to identify, and source code will be easier to debug.

::: details See also

- [Use the debugger statement to pause script execution](https://devtoolstips.org/tips/en/debugger-statement) <!-- TODO: add VPCard -->
- [Unminify JavaScript code to easily read and debug it](https://devtoolstips.org/tips/en/unminify-javascript-code) <!-- TODO: add VPCard -->
- [Detect unused CSS and JavaScript code](https://devtoolstips.org/tips/en/detect-unused-code) <!-- TODO: add VPCard -->
- [Ignore JavaScript code to ease debugging](https://devtoolstips.org/tips/en/ignore-scripts) <!-- TODO: add VPCard -->

:::

---

<TagLinks />