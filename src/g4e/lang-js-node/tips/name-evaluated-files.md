---
lang: ko-KR
title: 💡Tips > Name evaluated files with the sourceURL pragma
description: 🧶Node.js > 💡Tips > Name evaluated files with the sourceURL pragma
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
  "title": "Name evaluated files with the sourceURL pragma",
  "desc": "Devtools Tips > Name evaluated files with the sourceURL pragma",
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

The above code snippet not only runs the evaluated code, but it also makes it appear in the __Sources__ (or __Debugger__) tool as if it came from a file named `hello-world.js`.


![Firefox DevTools, the `sourceURL` pragma was used when evaluating some code in the Console, and a new file now appears in the Debugger tool, named after the string provided in the sourceURL pragma](https://devtoolstips.org/assets/img/name-evaluated-files.png)

This can also be useful when using inline `<script>` tags:

```html
<script>
  console.log("Hello world!")
  //# sourceURL=hello-world.js
</script>
```

Using the `sourceURL` pragma is a great way to debug your code more easily in DevTools. __Console__ messages will be easier to identify, and source code will be easier to debug.

---

## See also

- https://devtoolstips.org/tips/en/debugger-statement
- https://devtoolstips.org/tips/en/unminify-javascript-code
- https://devtoolstips.org/tips/en/detect-unused-code
- https://devtoolstips.org/tips/en/ignore-scripts

---

<TagLinks />