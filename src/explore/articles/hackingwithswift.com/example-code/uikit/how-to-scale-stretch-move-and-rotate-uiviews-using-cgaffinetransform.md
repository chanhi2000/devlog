---
lang: ko-KR
title: "How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
description: "Article(s) > How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
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
      content: "Article(s) > How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
    - property: og:description
      content: "How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-scale-stretch-move-and-rotate-uiviews-using-cgaffinetransform.html
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
  "title": "How to scale, stretch, move, and rotate UIViews using CGAffineTransform | UIKit - free Swift example code",
  "desc": "How to scale, stretch, move, and rotate UIViews using CGAffineTransform",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-scale-stretch-move-and-rotate-uiviews-using-cgaffinetransform",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<VidStack src="youtube/psRBotODPQc" />

<!-- TODO: 작성 -->

<!--
<p>Every <code>UIView</code> subclass has a <code>transform</code> property that lets you manipulate its size, position and rotation using something called an affine transform. This property is animatable, which means you can make a view smoothly double in size, or make it spin around, just by changing one value.</p>
<p>Here are some examples to get you started:</p>
<pre class=" language-swift"><code class=" language-swift">imageView<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>scaleX<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span>
imageView<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>translationX<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">256</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">256</span><span class="token punctuation">)</span>
imageView<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>rotationAngle<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">.</span>pi<span class="token punctuation">)</span>
imageView<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">.</span>identity</code></pre>
<p>The first one makes an image view double in size, the second one makes it move up and left 256 points, the third one makes it spin around 180 degrees (the values are expressed in radians), and the fourth one sets the image view's transform back to "identity" – this means "reset."</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-find-the-scale-from-a-cgaffinetransform">How to find the scale from a CGAffineTransform</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />