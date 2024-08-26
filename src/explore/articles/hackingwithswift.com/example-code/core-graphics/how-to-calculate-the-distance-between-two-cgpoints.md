---
lang: ko-KR
title: "How to calculate the distance between two CGPoints"
description: "Article(s) > How to calculate the distance between two CGPoints"
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
      content: "Article(s) > How to calculate the distance between two CGPoints"
    - property: og:description
      content: "How to calculate the distance between two CGPoints"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints.html
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
  "title": "How to calculate the distance between two CGPoints | Core Graphics - free Swift example code",
  "desc": "How to calculate the distance between two CGPoints",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>You can calculate the distance between two <code>CGPoints</code> by using Pythagoras's theorem, but be warned: calculating square roots is not fast, so if possible you want to avoid it. More on that in a moment, but first here's the code you need:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">CGPointDistanceSquared</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">CGFloat</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>from<span class="token punctuation">.</span>x <span class="token operator">-</span> to<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>from<span class="token punctuation">.</span>x <span class="token operator">-</span> to<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>from<span class="token punctuation">.</span>y <span class="token operator">-</span> to<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>from<span class="token punctuation">.</span>y <span class="token operator">-</span> to<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">CGPointDistance</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">CGFloat</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token class-name">CGPointDistanceSquared</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> from<span class="token punctuation">,</span> to<span class="token punctuation">:</span> to<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that there are two functions: one for returning the distance between two points, and one for returning the distance squared between two points. The latter one doesn't use a square root, which makes it substantially faster. This means if you want to check "did the user tap within a 10-point radius of this position?" it's faster to square that 10 (to make 100) then use <code>CGPointDistanceSquared()</code> instead.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a></li><li><a href="/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance">How to calculate the SHA hash of a String or Data instance</a></li><li><a href="/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string</a></li><li><a href="/example-code/language/how-to-calculate-division-remainder-using-modulo">How to calculate division remainder using modulo</a></li></ul>  
-->

:::

---

<TagLinks />