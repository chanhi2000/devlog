---
lang: ko-KR
title: "What is copy on write?"
description: "Article(s) > What is copy on write?"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is copy on write?"
    - property: og:description
      content: "What is copy on write?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-copy-on-write.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is copy on write? | Language - free Swift example code",
  "desc": "What is copy on write?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-copy-on-write",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Copy on write is a common computing technique that helps boost performance when copying structures. To give you an example, imagine an array with 1000 things inside it: if you copied that array into another variable, Swift would have to copy all 1000 elements even if the two arrays ended up being the same.</p>
<p>This problem is solved using copy on write: when you point two variables at the same array they both point to the same underlying data. Swift promises that structs like arrays and dictionaries are copied as values, like numbers, so having two variables point to the same data might seem to contradict that. The solution is simple but clever: if you modify the second variable, Swift takes a full copy at that point so that only the second variable is modified - the first isn't changed.</p>
<p>So, by delaying the copy operation until it's actually needed, Swift can ensure that no wasted work is done.</p>
<p>Warning: copy on write is a feature specifically added to Swift arrays and dictionaries; you don't get it for free in your own data types.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-copy-objects-in-swift-using-copy">How to copy objects in Swift using copy()</a></li><li><a href="/example-code/system/how-to-copy-text-to-the-clipboard-using-uipasteboard">How to copy text to the clipboard using UIPasteboard</a></li><li><a href="/example-code/uikit/how-to-disable-undo-redo-copy-and-paste-gestures-using-editinginteractionconfiguration">How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration</a></li><li><a href="/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a></li><li><a href="/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a></li></ul>
-->

:::

---

<TagLinks />