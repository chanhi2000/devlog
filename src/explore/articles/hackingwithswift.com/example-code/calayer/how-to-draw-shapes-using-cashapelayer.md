---
lang: ko-KR
title: "How to draw shapes using CAShapeLayer"
description: "Article(s) > How to draw shapes using CAShapeLayer"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw shapes using CAShapeLayer"
    - property: og:description
      content: "How to draw shapes using CAShapeLayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-draw-shapes-using-cashapelayer.html
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
  "title": "How to draw shapes using CAShapeLayer | Array - free Swift example code",
  "desc": "How to draw shapes using CAShapeLayer",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-draw-shapes-using-cashapelayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>There are lots of <code>CALayer</code> subclasses out there, but <code>CAShapeLayer</code> is one of my favorites: it provides hardware-accelerated drawing of all sorts of 2D shapes, and includes extra functionality such as fill and stroke colors, line caps, patterns and more.</p>
<p>To get you started, this uses <code>UIBezierPath</code> to create a rounded rectangle, which is then colored red using <code>CAShaperLayer</code>. Remember, <code>CALayer</code> sits underneath UIKit, so you need to use <code>CGColor</code> rather than <code>UIColor</code>.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token class-name">CAShapeLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
layer<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>roundedRect<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cornerRadius<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath
layer<span class="token punctuation">.</span>fillColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>cgColor
view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">addSublayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes">How to combine shapes to create new shapes</a></li><li><a href="/example-code/uikit/how-to-draw-shapes-using-uibezierpath">How to draw shapes using UIBezierPath</a></li><li><a href="/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time</a></li><li><a href="/example-code/calayer/how-to-make-a-shape-draw-itself-using-strokeend">How to make a shape draw itself using strokeEnd</a></li><li><a href="/quick-start/swiftui/swiftuis-built-in-shapes">SwiftUI’s built-in shapes</a></li></ul>
-->

:::

---

<TagLinks />