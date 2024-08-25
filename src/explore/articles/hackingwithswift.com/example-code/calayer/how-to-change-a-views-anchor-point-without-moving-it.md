---
lang: ko-KR
title: "How to change a view’s anchor point without moving it"
description: "Article(s) > How to change a view’s anchor point without moving it"
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
      content: "Article(s) > How to change a view’s anchor point without moving it"
    - property: og:description
      content: "How to change a view’s anchor point without moving it"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to change a view’s anchor point without moving it | Array - free Swift example code",
  "desc": "How to change a view’s anchor point without moving it",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>Every <code>UIView</code> has an anchor point, which is the point around which animations take place. Usually this is the center of the view –&nbsp;X:0.5 Y:0.5 –&nbsp;which means if you rotate a view it will spin around its center.</p>
<p>If you wanted the view to rotate around its top corner, as if someone had driven a nail into that point and you were spinning the view around that corner rather than the center, you can change the anchor point using the <code>layer.anchorPoint</code> property.</p>
<p>However, there’s a problem: changing the anchor point also changes the point where the view’s position is calculated, which means changing the anchor point also moves the view’s position.</p>
<p>So, if you want to change a view’s anchor point <em>without</em> moving it, here’s a little extension to do just that:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">setAnchorPoint</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> point<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> newPoint <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> bounds<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">*</span> point<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> bounds<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token operator">*</span> point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
        <span class="token keyword">var</span> oldPoint <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> bounds<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">*</span> layer<span class="token punctuation">.</span>anchorPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> bounds<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token operator">*</span> layer<span class="token punctuation">.</span>anchorPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

        newPoint <span class="token operator">=</span> newPoint<span class="token punctuation">.</span><span class="token function">applying</span><span class="token punctuation">(</span>transform<span class="token punctuation">)</span>
        oldPoint <span class="token operator">=</span> oldPoint<span class="token punctuation">.</span><span class="token function">applying</span><span class="token punctuation">(</span>transform<span class="token punctuation">)</span>

        <span class="token keyword">var</span> position <span class="token operator">=</span> layer<span class="token punctuation">.</span>position

        position<span class="token punctuation">.</span>x <span class="token operator">-=</span> oldPoint<span class="token punctuation">.</span>x
        position<span class="token punctuation">.</span>x <span class="token operator">+=</span> newPoint<span class="token punctuation">.</span>x

        position<span class="token punctuation">.</span>y <span class="token operator">-=</span> oldPoint<span class="token punctuation">.</span>y
        position<span class="token punctuation">.</span>y <span class="token operator">+=</span> newPoint<span class="token punctuation">.</span>y

        layer<span class="token punctuation">.</span>position <span class="token operator">=</span> position
        layer<span class="token punctuation">.</span>anchorPoint <span class="token operator">=</span> point
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to see that in action, here’s some code to create a blue <code>UIView</code> then animate it rotating around its top-left corner:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> box <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
box<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>blue
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span>

box<span class="token punctuation">.</span><span class="token function">setAnchorPoint</span><span class="token punctuation">(</span><span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    box<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>rotationAngle<span class="token punctuation">:</span> <span class="token punctuation">.</span>pi<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle">How to detect whether a scrollview is currently moving or is idle</a></li><li><a href="/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer">How to add a custom initializer to a struct without losing its memberwise initializer</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/strings/how-to-specify-floating-point-precision-in-a-string">How to specify floating-point precision in a string</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a></li></ul>
-->

:::

---

<TagLinks />