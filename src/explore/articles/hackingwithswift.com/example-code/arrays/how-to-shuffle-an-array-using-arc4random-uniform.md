---
lang: ko-KR
title: "How to shuffle an array using arc4random_uniform()"
description: "Article(s) > How to shuffle an array using arc4random_uniform()"
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
      content: "Article(s) > How to shuffle an array using arc4random_uniform()"
    - property: og:description
      content: "How to shuffle an array using arc4random_uniform()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arrays/how-to-shuffle-an-array-using-arc4random-uniform.html
date: 2019-03-28
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
  "title": "How to shuffle an array using arc4random_uniform() | Array - free Swift example code",
  "desc": "How to shuffle an array using arc4random_uniform()",
  "link": "https://www.hackingwithswift.com/example-code/arrays/how-to-shuffle-an-array-using-arc4random-uniform",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Modern Swift code will use Swift’s own <code>shuffle()</code> and <code>shuffled()</code> methods, but sometimes you might find code that does it by hand using <code>arc4random_uniform()</code> or similar.</p>
<p>Nate Cook wrote a simple <code>shuffle()</code> extension to arrays that implements the Fisher-Yates shuffle algorithm in Swift. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">customShuffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> <span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token function">arc4random_uniform</span><span class="token punctuation">(</span><span class="token class-name">UInt32</span><span class="token punctuation">(</span>count <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> i
            <span class="token function">swapAt</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arrays/how-to-randomize-the-order-of-an-array-shuffle-and-shuffled">How to randomize the order of an array: shuffle() and shuffled()</a></li><li><a href="/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li></ul>
-->

:::

---

<TagLinks />