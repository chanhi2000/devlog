---
lang: ko-KR
title: "How to calculate the point where two lines intersect"
description: "Article(s) > How to calculate the point where two lines intersect"
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
      content: "Article(s) > How to calculate the point where two lines intersect"
    - property: og:description
      content: "How to calculate the point where two lines intersect"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect.html
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
  "title": "How to calculate the point where two lines intersect | Core Graphics - free Swift example code",
  "desc": "How to calculate the point where two lines intersect",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Finding where two lines cross can be done by calculating their cross product. The code below returns an optional tuple containing the X and Y intersection points, or nil if they don’t cross at all.</p>
<p><strong>Note:</strong> Core Graphics doesn’t give us a <code>CGLine</code> type, so you’ll need pass this four points: where the first line starts and ends, and where the second line starts and ends.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">linesCross</span><span class="token punctuation">(</span>start1<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">,</span> end1<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">,</span> start2<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">,</span> end2<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">)</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token comment">// calculate the differences between the start and end X/Y positions for each of our points</span>
    <span class="token keyword">let</span> delta1x <span class="token operator">=</span> end1<span class="token punctuation">.</span>x <span class="token operator">-</span> start1<span class="token punctuation">.</span>x
    <span class="token keyword">let</span> delta1y <span class="token operator">=</span> end1<span class="token punctuation">.</span>y <span class="token operator">-</span> start1<span class="token punctuation">.</span>y
    <span class="token keyword">let</span> delta2x <span class="token operator">=</span> end2<span class="token punctuation">.</span>x <span class="token operator">-</span> start2<span class="token punctuation">.</span>x
    <span class="token keyword">let</span> delta2y <span class="token operator">=</span> end2<span class="token punctuation">.</span>y <span class="token operator">-</span> start2<span class="token punctuation">.</span>y

    <span class="token comment">// create a 2D matrix from our vectors and calculate the determinant</span>
    <span class="token keyword">let</span> determinant <span class="token operator">=</span> delta1x <span class="token operator">*</span> delta2y <span class="token operator">-</span> delta2x <span class="token operator">*</span> delta1y

    <span class="token keyword">if</span> <span class="token function">abs</span><span class="token punctuation">(</span>determinant<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.0001</span> <span class="token punctuation">{</span>
        <span class="token comment">// if the determinant is effectively zero then the lines are parallel/colinear</span>
        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// if the coefficients both lie between 0 and 1 then we have an intersection</span>
    <span class="token keyword">let</span> ab <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>start1<span class="token punctuation">.</span>y <span class="token operator">-</span> start2<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">*</span> delta2x <span class="token operator">-</span> <span class="token punctuation">(</span>start1<span class="token punctuation">.</span>x <span class="token operator">-</span> start2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> delta2y<span class="token punctuation">)</span> <span class="token operator">/</span> determinant

    <span class="token keyword">if</span> ab <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ab <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> cd <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>start1<span class="token punctuation">.</span>y <span class="token operator">-</span> start2<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">*</span> delta1x <span class="token operator">-</span> <span class="token punctuation">(</span>start1<span class="token punctuation">.</span>x <span class="token operator">-</span> start2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> delta1y<span class="token punctuation">)</span> <span class="token operator">/</span> determinant

        <span class="token keyword">if</span> cd <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> cd <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            <span class="token comment">// lines cross – figure out exactly where and return it</span>
            <span class="token keyword">let</span> intersectX <span class="token operator">=</span> start1<span class="token punctuation">.</span>x <span class="token operator">+</span> ab <span class="token operator">*</span> delta1x
            <span class="token keyword">let</span> intersectY <span class="token operator">=</span> start1<span class="token punctuation">.</span>y <span class="token operator">+</span> ab <span class="token operator">*</span> delta1y
            <span class="token keyword">return</span> <span class="token punctuation">(</span>intersectX<span class="token punctuation">,</span> intersectY<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// lines don't cross</span>
    <span class="token keyword">return</span> <span class="token nil constant">nil</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: this code is adapted from “Intersection of Two Lines in Three-Space”, which is a one-page chapter by Ronald Goodman in the book Graphics Gems. For more on how cross products work, I can highly recomend the book “Essential Mathematics for Games and Interactive Applications” by James M. Van Verth and Lars M. Bishop.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints</a></li><li><a href="/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:)</a></li><li><a href="/example-code/strings/how-to-get-the-lines-in-a-string-as-an-array">How to get the lines in a string as an array</a></li><li><a href="/example-code/strings/how-to-specify-floating-point-precision-in-a-string">How to specify floating-point precision in a string</a></li></ul>
-->

:::

---

<TagLinks />