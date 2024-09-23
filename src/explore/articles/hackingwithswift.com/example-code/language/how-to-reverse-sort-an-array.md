---
lang: ko-KR
title: "How to reverse sort an array"
description: "Article(s) > How to reverse sort an array"
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
      content: "Article(s) > How to reverse sort an array"
    - property: og:description
      content: "How to reverse sort an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array.html
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
  "title": "How to reverse sort an array | Language - free Swift example code",
  "desc": "How to reverse sort an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Regular sorting on comparable data is as easy as calling the <code>sort()</code> method, but if you want a <em>reverse</em> sort –&nbsp;e.g. highest to lowest numbers, or Z-A alphabetically –&nbsp;there are two options.</p>
<p>The first is to run a regular sort, reverse that sort, then convert the result to an array. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> reversed1 <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>The second option is to provide a custom closure to the <code>sorted()</code> method that sorts the opposite way to the default, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> reversed2 <span class="token operator">=</span> numbers<span class="token punctuation">.</span>sorted <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">&gt;</span> <span class="token short-argument">$1</span> <span class="token punctuation">}</span></code></pre>
<p>Both of those will result in the array 100, 98, 53, 29, 5.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-sort-an-array-using-sort">How to sort an array using sort()</a></li><li><a href="/example-code/arrays/how-to-loop-through-an-array-in-reverse">How to loop through an array in reverse</a></li><li><a href="/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable</a></li><li><a href="/example-code/strings/how-to-reverse-a-string-using-reversed">How to reverse a string using reversed()</a></li><li><a href="/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a></li></ul>
-->

:::

---

<TagLinks />