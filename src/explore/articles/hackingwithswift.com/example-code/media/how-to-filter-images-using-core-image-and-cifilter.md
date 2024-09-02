---
lang: ko-KR
title: "How to filter images using Core Image and CIFilter"
description: "Article(s) > How to filter images using Core Image and CIFilter"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to filter images using Core Image and CIFilter"
    - property: og:description
      content: "How to filter images using Core Image and CIFilter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-filter-images-using-core-image-and-cifilter.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to filter images using Core Image and CIFilter | Media - free Swift example code",
  "desc": "How to filter images using Core Image and CIFilter",
  "link": "https://hackingwithswift.com/example-code/media/how-to-filter-images-using-core-image-and-cifilter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>Core Image is the one of the most powerful frameworks available to iOS developers: it makes hardware-accelerated image manipulation ridiculously easy, which means you get to add powerful graphical effects to your apps and games with very little work.</p>
<p>Most of the work is done by choosing the right <code>CIFilter</code>. Apple's official documentation goes into great detail about the various filters you can use, and you can also read <a href="/read/13/overview">Hacking with Swift project 13</a> for a hands-on tutorial showing off various effects. The code below applies a 50% sepia tone effect to an image:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> inputImage <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"taylor-swift"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token class-name">CIContext</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> currentFilter <span class="token operator">=</span> <span class="token class-name">CIFilter</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CISepiaTone"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> beginImage <span class="token operator">=</span> <span class="token class-name">CIImage</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> inputImage<span class="token punctuation">)</span>
    currentFilter<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>beginImage<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token constant">kCIInputImageKey</span><span class="token punctuation">)</span>
    currentFilter<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token constant">kCIInputIntensityKey</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> output <span class="token operator">=</span> currentFilter<span class="token punctuation">.</span>outputImage <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> cgimg <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createCGImage</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> from<span class="token punctuation">:</span> output<span class="token punctuation">.</span>extent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> processedImage <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> cgimg<span class="token punctuation">)</span>
            <span class="token comment">// do something interesting with the processed image</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more</a></li></ul>
-->

:::

---

<TagLinks />