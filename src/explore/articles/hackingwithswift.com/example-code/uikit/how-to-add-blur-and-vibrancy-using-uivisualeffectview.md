---
lang: ko-KR
title: "How to add blur and vibrancy using UIVisualEffectView"
description: "Article(s) > How to add blur and vibrancy using UIVisualEffectView"
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
      content: "Article(s) > How to add blur and vibrancy using UIVisualEffectView"
    - property: og:description
      content: "How to add blur and vibrancy using UIVisualEffectView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview.html
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
  "title": "How to add blur and vibrancy using UIVisualEffectView | UIKit - free Swift example code",
  "desc": "How to add blur and vibrancy using UIVisualEffectView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>As of iOS 8.0, visual effects such as blur and vibrancy are a cinch because Apple provides a built in <code>UIView</code> subclass that does all the hard work: <code>UIVisualEffectView</code>. For example, if you want to blur an image, you would use this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> imageView <span class="token operator">=</span> <span class="token class-name">UIImageView</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
imageView<span class="token punctuation">.</span>frame <span class="token operator">=</span> view<span class="token punctuation">.</span>bounds
imageView<span class="token punctuation">.</span>contentMode <span class="token operator">=</span> <span class="token punctuation">.</span>scaleToFill
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>imageView<span class="token punctuation">)</span>

<span class="token keyword">let</span> blurEffect <span class="token operator">=</span> <span class="token class-name">UIBlurEffect</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>dark<span class="token punctuation">)</span>
<span class="token keyword">let</span> blurredEffectView <span class="token operator">=</span> <span class="token class-name">UIVisualEffectView</span><span class="token punctuation">(</span>effect<span class="token punctuation">:</span> blurEffect<span class="token punctuation">)</span>
blurredEffectView<span class="token punctuation">.</span>frame <span class="token operator">=</span> imageView<span class="token punctuation">.</span>bounds
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>blurredEffectView<span class="token punctuation">)</span></code></pre>
<p>As well as blurring content, Apple also lets you add a "vibrancy" effect to your views – this is a translucency effect designed to ensure that text is readable when it's over any kind of blurred background, and it's used to create that soft glow effect you see in the notification center.</p>
<p>We could extend the previous example so that it adds a segmented control in the middle of the view, using a vibrancy effect. This is accomplished by created a second <code>UIVisualEffectView</code> inside the first one, this time using <code>UIVibrancyEffect</code> to create the glow. Note that you need to use the same blur type for both your visual effect views, otherwise the glow effect will be incorrect.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> segmentedControl <span class="token operator">=</span> <span class="token class-name">UISegmentedControl</span><span class="token punctuation">(</span>items<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"First Item"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Second Item"</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
segmentedControl<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
segmentedControl<span class="token punctuation">.</span>center <span class="token operator">=</span> view<span class="token punctuation">.</span>center

<span class="token keyword">let</span> vibrancyEffect <span class="token operator">=</span> <span class="token class-name">UIVibrancyEffect</span><span class="token punctuation">(</span>blurEffect<span class="token punctuation">:</span> blurEffect<span class="token punctuation">)</span>
<span class="token keyword">let</span> vibrancyEffectView <span class="token operator">=</span> <span class="token class-name">UIVisualEffectView</span><span class="token punctuation">(</span>effect<span class="token punctuation">:</span> vibrancyEffect<span class="token punctuation">)</span>
vibrancyEffectView<span class="token punctuation">.</span>frame <span class="token operator">=</span> imageView<span class="token punctuation">.</span>bounds

vibrancyEffectView<span class="token punctuation">.</span>contentView<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>segmentedControl<span class="token punctuation">)</span>
blurredEffectView<span class="token punctuation">.</span>contentView<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>vibrancyEffectView<span class="token punctuation">)</span></code></pre>
<p>Warning: you need to add child views to the <code>contentView</code> property of a <code>UIVisualEffectView</code> otherwise they will not be drawn correctly.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />