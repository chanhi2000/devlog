---
lang: ko-KR
title: "How to draw shapes using UIBezierPath"
description: "Article(s) > How to draw shapes using UIBezierPath"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw shapes using UIBezierPath"
    - property: og:description
      content: "How to draw shapes using UIBezierPath"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-draw-shapes-using-uibezierpath.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to draw shapes using UIBezierPath | UIKit - free Swift example code",
  "desc": "How to draw shapes using UIBezierPath",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-draw-shapes-using-uibezierpath",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p><code>UIBezierPath</code> is a simple and efficient class for drawing shapes using Swift, which you can then put into <code>CAShapeLayer</code>, <code>SKShapeNode</code>, or other places. It comes with various shapes built in, so you can write code like this to create a rounded rectangle or a circle:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> roundedRect <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>roundedRect<span class="token punctuation">:</span> rect<span class="token punctuation">,</span> cornerRadius<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> circle <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>ovalIn<span class="token punctuation">:</span> rect<span class="token punctuation">)</span></code></pre>
<p>You can also create custom shapes by moving a pen to a starting position then adding lines:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> freeform <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
freeform<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">)</span>
freeform<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
freeform<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
freeform<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
freeform<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">)</span></code></pre>
<p>If your end result needs a <code>CGPath</code>, you can get one by accessing the <code>cgPath</code> property of your <code>UIBezierPath</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui">How to use UIBezierPath and CGPath in SwiftUI</a></li><li><a href="/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes">How to combine shapes to create new shapes</a></li><li><a href="/example-code/calayer/how-to-draw-shapes-using-cashapelayer">How to draw shapes using CAShapeLayer</a></li><li><a href="/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time</a></li><li><a href="/quick-start/swiftui/swiftuis-built-in-shapes">SwiftUI’s built-in shapes</a></li></ul>
-->

:::

---

<TagLinks />