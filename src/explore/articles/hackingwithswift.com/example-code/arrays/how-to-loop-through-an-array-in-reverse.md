---
lang: ko-KR
title: "How to loop through an array in reverse"
description: "Article(s) > How to loop through an array in reverse"
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
      content: "Article(s) > How to loop through an array in reverse"
    - property: og:description
      content: "How to loop through an array in reverse"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arrays/how-to-loop-through-an-array-in-reverse.html
date: 2019-03-29
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Array - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/arrays/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to loop through an array in reverse | Array - free Swift example code",
  "desc": "How to loop through an array in reverse",
  "link": "https://www.hackingwithswift.com/example-code/arrays/how-to-loop-through-an-array-in-reverse",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to read through an array in reverse, you should use the <code>reversed()</code> method. You can use this as part of the regular fast enumeration technique if you want, which would give you code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Apples"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Peaches"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Plums"</span></span><span class="token punctuation">]</span>

<span class="token keyword">for</span> item <span class="token keyword">in</span> array<span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">item</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>You can also reverse an enumerated array just by appending the method call, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> <span class="token punctuation">(</span>index<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token keyword">in</span> array<span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enumerated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">item</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> at position </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">index</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that whether you call <code>reversed()</code> then <code>enumerated()</code> or vice versa matters! In the above code, enumerate will count upwards, but if you use <code>array.enumerated().reversed()</code> it will count backwards.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-loop-through-items-in-an-array">How to loop through items in an array</a></li><li><a href="/example-code/strings/how-to-loop-through-letters-in-a-string">How to loop through letters in a string</a></li><li><a href="/example-code/language/how-to-reverse-sort-an-array">How to reverse sort an array</a></li><li><a href="/example-code/strings/how-to-reverse-a-string-using-reversed">How to reverse a string using reversed()</a></li><li><a href="/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array">How to use the forEach method to loop over an array</a></li></ul>
-->

:::

---

<TagLinks />