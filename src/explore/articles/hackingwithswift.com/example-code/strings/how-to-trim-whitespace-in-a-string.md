---
lang: ko-KR
title: "How to trim whitespace in a string"
description: "Article(s) > How to trim whitespace in a string"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to trim whitespace in a string"
    - property: og:description
      content: "How to trim whitespace in a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-trim-whitespace-in-a-string.html
date: 2019-06-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to trim whitespace in a string | Strings - free Swift example code",
  "desc": "How to trim whitespace in a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-trim-whitespace-in-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<VidStack src="youtube/4WzqzwJztkg" />

<!-- TODO: 작성 -->

<!-- 
<p>It's not hard to trim whitespace from a string in Swift, but the syntax is a little wordy –&nbsp;or "self-descriptive" if you're feeling optimistic. You need to use the <code>trimmingCharacters(in:)</code> method and provide a list of the characters you want to trim. If you're just using whitespace (tabs, spaces and new lines) you can use the predefined <code>whitespacesAndNewlines</code> list of characters, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"  Taylor Swift  "</span></span>
<span class="token keyword">let</span> trimmed <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">trimmingCharacters</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>whitespacesAndNewlines<span class="token punctuation">)</span></code></pre>
<p>That will set <code>trimmed</code> to be "Taylor Swift”.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim">How to draw part of a solid shape using trim()</a></li><li><a href="/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a></li><li><a href="/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string</a></li><li><a href="/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference?</a></li><li><a href="/example-code/uikit/how-to-add-drag-and-drop-to-your-app">How to add drag and drop to your app</a></li></ul>
-->

:::

---

<TagLinks />