---
lang: ko-KR
title: "Using stride() to loop over a range of numbers"
description: "Article(s) > Using stride() to loop over a range of numbers"
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
      content: "Article(s) > Using stride() to loop over a range of numbers"
    - property: og:description
      content: "Using stride() to loop over a range of numbers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/using-stride-to-loop-over-a-range-of-numbers.html
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
  "title": "Using stride() to loop over a range of numbers | Language - free Swift example code",
  "desc": "Using stride() to loop over a range of numbers",
  "link": "https://hackingwithswift.com/example-code/language/using-stride-to-loop-over-a-range-of-numbers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift has a helpful <code>stride()</code>, which lets you move from one value to another using any increment – and even lets you specify whether the upper bound is exclusive or inclusive.</p>
<p>First, some examples. This first example counts from 0 to 10 in 2s:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> by<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>This second example counts from 0 up to to 0.5, exclusive:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> by<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Both those examples use <code>stride(from:to:by:)</code>, which counts from the start point up to by excluding the <code>to</code> parameter. If you want to count up and <em>including</em> the <code>to</code> parameter, you should use <code>stride(from:through:by:)</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> through<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> by<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-loop-over-an-asyncsequence-using-for-await">How to loop over an AsyncSequence using for await</a></li><li><a href="/example-code/language/how-to-loop-over-non-nil-items-in-an-array">How to loop over non-nil items in an array</a></li><li><a href="/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array">How to use the forEach method to loop over an array</a></li><li><a href="/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range</a></li><li><a href="/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a></li></ul>
-->

:::

---

<TagLinks />