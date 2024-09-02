---
lang: ko-KR
title: "How to create a barcode"
description: "Article(s) > How to create a barcode"
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
      content: "Article(s) > How to create a barcode"
    - property: og:description
      content: "How to create a barcode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-barcode.html
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
  "title": "How to create a barcode | Media - free Swift example code",
  "desc": "How to create a barcode",
  "link": "https://hackingwithswift.com/example-code/media/how-to-create-a-barcode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>You can generate a string into a traditional barcode using iOS using Core Image, but you should make sure and convert your input string to a <code>Data</code> using <code>String.Encoding.ascii</code> to ensure compatibility. Here's a function you can use that wraps it all up neatly, including scaling up the barcode so it's a bit bigger:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">generateBarcode</span><span class="token punctuation">(</span>from string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIImage</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token class-name">Encoding</span><span class="token punctuation">.</span>ascii<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> filter <span class="token operator">=</span> <span class="token class-name">CIFilter</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CICode128BarcodeGenerator"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        filter<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"inputMessage"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>scaleX<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">let</span> output <span class="token operator">=</span> filter<span class="token punctuation">.</span>outputImage<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">transformed</span><span class="token punctuation">(</span>by<span class="token punctuation">:</span> transform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>ciImage<span class="token punctuation">:</span> output<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token nil constant">nil</span>
<span class="token punctuation">}</span></code></pre>
<p>With that method in place, you can now write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token function">generateBarcode</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hacking with Swift"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-create-a-pdf417-barcode">How to create a PDF417 barcode</a></li><li><a href="/example-code/media/how-to-scan-a-barcode">How to scan a barcode</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />