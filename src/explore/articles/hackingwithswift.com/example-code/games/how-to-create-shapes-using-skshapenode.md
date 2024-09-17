---
lang: ko-KR
title: "How to create shapes using SKShapeNode"
description: "Article(s) > How to create shapes using SKShapeNode"
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
      content: "Article(s) > How to create shapes using SKShapeNode"
    - property: og:description
      content: "How to create shapes using SKShapeNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-create-shapes-using-skshapenode.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create shapes using SKShapeNode | Games - free Swift example code",
  "desc": "How to create shapes using SKShapeNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-create-shapes-using-skshapenode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>SpriteKit's <code>SKShapeNode</code> class is a fast and convenient way to draw arbitrary shapes in your games, including circles, lines, rounded rectangles and more. You can assign a fill color, a stroke color and width, plus other drawing options such as whether it should glow –&nbsp;yes, really.</p>
<p>The example code below draws a rounded rectangle smack in the middle of the game scene, giving it a red fill color and a 10-point blue border:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> shape <span class="token operator">=</span> <span class="token class-name">SKShapeNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
shape<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>roundedRect<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cornerRadius<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath
shape<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> frame<span class="token punctuation">.</span>midX<span class="token punctuation">,</span> y<span class="token punctuation">:</span> frame<span class="token punctuation">.</span>midY<span class="token punctuation">)</span>
shape<span class="token punctuation">.</span>fillColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
shape<span class="token punctuation">.</span>strokeColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue
shape<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">addChild</span><span class="token punctuation">(</span>shape<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes">How to combine shapes to create new shapes</a></li><li><a href="/example-code/uikit/how-to-draw-shapes-using-uibezierpath">How to draw shapes using UIBezierPath</a></li><li><a href="/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time</a></li><li><a href="/example-code/calayer/how-to-draw-shapes-using-cashapelayer">How to draw shapes using CAShapeLayer</a></li><li><a href="/quick-start/swiftui/swiftuis-built-in-shapes">SwiftUI’s built-in shapes</a></li></ul>
-->

---

<TagLinks />