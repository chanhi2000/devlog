---
lang: ko-KR
title: "How to read a single character from a string"
description: "Article(s) > How to read a single character from a string"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read a single character from a string"
    - property: og:description
      content: "How to read a single character from a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-read-a-single-character-from-a-string.html
date: 2018-03-28
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
  "title": "How to read a single character from a string | Strings - free Swift example code",
  "desc": "How to read a single character from a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-read-a-single-character-from-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s strings are stored in a specific way that stops you from indexing into then easily. In fact, reading one letter from part-way through the string means starting at the beginning of the string and counting through letters until you find the one you want, so if you try reading <em>all</em> the characters in the string this way you could accidentally create extremely slow code.</p>
<p>However, if you only need to read one or two letters, here’s a simple extension on <code>String</code> that will help:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">subscript</span><span class="token punctuation">(</span>i<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">[</span><span class="token function">index</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> offsetBy<span class="token punctuation">:</span> i<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that place in place, you can write <code>myString[15]</code> to read the 16th letter.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image">How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image</a></li><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value</a></li><li><a href="/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a></li><li><a href="/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view</a></li></ul>
-->

:::

---

<TagLinks />