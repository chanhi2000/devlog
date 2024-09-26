---
lang: ko-KR
title: "How to recolor UIImages using template images and withRenderingMode()"
description: "Article(s) > How to recolor UIImages using template images and withRenderingMode()"
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
      content: "Article(s) > How to recolor UIImages using template images and withRenderingMode()"
    - property: og:description
      content: "How to recolor UIImages using template images and withRenderingMode()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-recolor-uiimages-using-template-images-and-withrenderingmode.html
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
  "title": "How to recolor UIImages using template images and withRenderingMode() | UIKit - free Swift example code",
  "desc": "How to recolor UIImages using template images and withRenderingMode()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-recolor-uiimages-using-template-images-and-withrenderingmode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>Template images are the iOS 7.0 way of tinting any kind of image when it's inside a <code>UIImageView</code>. This is usually used to mimic the tinting of button images (as seen in toolbars and tab bars) but it works anywhere you want to dynamically recolor an image.</p>
<p>To get started, load an image then call <code>withRenderingMode()</code> on it, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> myImage <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"myImage"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tintableImage <span class="token operator">=</span> myImage<span class="token punctuation">.</span><span class="token function">withRenderingMode</span><span class="token punctuation">(</span><span class="token punctuation">.</span>alwaysTemplate<span class="token punctuation">)</span>
    imageView<span class="token punctuation">.</span>image <span class="token operator">=</span> tintableImage
<span class="token punctuation">}</span></code></pre>
<p>The tint color of a <code>UIImageView</code> is the standard iOS 7 blue by default, but you can change it easily enough:</p>
<pre class=" language-swift"><code class=" language-swift">imageView<span class="token punctuation">.</span>tintColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/whats-in-the-basic-template">What’s in the basic template?</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />