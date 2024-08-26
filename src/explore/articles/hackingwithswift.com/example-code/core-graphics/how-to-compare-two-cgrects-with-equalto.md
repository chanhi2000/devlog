---
lang: ko-KR
title: "How to compare two CGRects with equalTo()"
description: "Article(s) > How to compare two CGRects with equalTo()"
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
      content: "Article(s) > How to compare two CGRects with equalTo()"
    - property: og:description
      content: "How to compare two CGRects with equalTo()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to compare two CGRects with equalTo() | Core Graphics - free Swift example code",
  "desc": "How to compare two CGRects with equalTo()",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>You could compare two <code>CGRect</code> values by evaluating their X, Y, width and height values, but there's a much faster way: <code>equalTo()</code>. This takes two rects as its only two parameters and returns true if they are the same, or false otherwise.</p>
<p>Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> rect1 <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> rect2 <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> rect1<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span>rect2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// rects equal!</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// rects not equal</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-compare-two-tuples-for-equality">How to compare two tuples for equality</a></li><li><a href="/example-code/language/how-to-compare-dates">How to compare dates</a></li><li><a href="/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI</a></li><li><a href="/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a></li></ul>
-->

:::

---

<TagLinks />