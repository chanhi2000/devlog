---
lang: ko-KR
title: "How to capitalize the first letter of a string"
description: "Article(s) > How to capitalize the first letter of a string"
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
      content: "Article(s) > How to capitalize the first letter of a string"
    - property: og:description
      content: "How to capitalize the first letter of a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-capitalize-the-first-letter-of-a-string.html
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
  "title": "How to capitalize the first letter of a string | Strings - free Swift example code",
  "desc": "How to capitalize the first letter of a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-capitalize-the-first-letter-of-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to capitalize the first letter of a string without touching the rest of the letters, add this simple extension of <code>String</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">capitalizingFirstLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">prefix</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>capitalized <span class="token operator">+</span> <span class="token function">dropFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">capitalizeFirstLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span> <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">capitalizingFirstLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Here’s an example to try it out:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"the rain in Spain"</span></span>
<span class="token function">print</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span><span class="token function">capitalizingFirstLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-to-capitalize-words-in-a-string-using-capitalized">How to capitalize words in a string using capitalized</a></li><li><a href="/quick-start/concurrency/what-calls-the-first-async-function">What calls the first async function?</a></li><li><a href="/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element</a></li><li><a href="/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array</a></li><li><a href="/example-code/system/what-is-the-first-responder">What is the first responder?</a></li></ul>
-->

:::

---

<TagLinks />