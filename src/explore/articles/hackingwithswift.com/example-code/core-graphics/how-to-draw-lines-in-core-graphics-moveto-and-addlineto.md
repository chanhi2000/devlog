---
lang: ko-KR
title: "How to draw lines in Core Graphics: move(to:) and addLine(to:)"
description: "Article(s) > How to draw lines in Core Graphics: move(to:) and addLine(to:)"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw lines in Core Graphics: move(to:) and addLine(to:)"
    - property: og:description
      content: "How to draw lines in Core Graphics: move(to:) and addLine(to:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto.html
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
  "title": "How to draw lines in Core Graphics: move(to:) and addLine(to:) | Core Graphics - free Swift example code",
  "desc": "How to draw lines in Core Graphics: move(to:) and addLine(to:)",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>You can draw lines in Core Graphics using <code>move(to:)</code> and <code>addLine(to:)</code>. The first function moves the Core Graphics path to a <code>CGPoint</code> of your choosing, and the second function moves the path to a new point while also adding a line. Once you add in the required code to set up a context and choose a color, you can draw a triangle with this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer1 <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> img1 <span class="token operator">=</span> renderer1<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setStrokeColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setLineWidth</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">450</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">450</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">450</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">450</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> rectangle <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addRect</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">drawPath</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token punctuation">.</span>fillStroke<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Once you've mastered drawing basic lines, you can create neat effects by rotating the context as you draw, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer2 <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> img2 <span class="token operator">=</span> renderer2<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setStrokeColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span>

    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">translateBy</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> first <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> length<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span> <span class="token operator">=</span> <span class="token number">256</span>

    <span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> <span class="token number">256</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>by<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> first <span class="token punctuation">{</span>
            ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> length<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            first <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> length<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        length <span class="token operator">*=</span> <span class="token number">0.99</span>
    <span class="token punctuation">}</span>

    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">strokePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a></li><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li></ul>
-->

:::

---

<TagLinks />