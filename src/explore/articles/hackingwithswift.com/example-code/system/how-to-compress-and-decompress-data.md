---
lang: ko-KR
title: "How to compress and decompress data"
description: "Article(s) > How to compress and decompress data"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to compress and decompress data"
    - property: og:description
      content: "How to compress and decompress data"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.html
date: 2019-10-13
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to compress and decompress data | System - free Swift example code",
  "desc": "How to compress and decompress data",
  "link": "https://hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple gives us dedicated API for compressing binary data, although annoyingly it exists on <code>NSData</code> without being bridged neatly to Swift’s native <code>Data</code> type. Fortunately, that conversion is trivial, so this functionality isn’t hard to use.</p>
<p>Here’s how to use it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> compressedData <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token punctuation">(</span>yourData <span class="token keyword">as</span> <span class="token class-name">NSData</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compressed</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token punctuation">.</span>lzfse<span class="token punctuation">)</span>
    <span class="token comment">// use your compressed data</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Although it’s common for folks to call compression and decompression <em>zipping</em> and <em>unzipping</em>, zip is one particular file format and the code above uses the LZFSE compression algorithm instead. This an Apple-design compression algorithm that is recommended unless you specifically need one of the others. The alternatives are:</p>
<ul>
<li><code>.lz4</code> compresses less effectively, but is significantly faster.</li>
<li><code>.zlib</code> is the recommended general purpose algorithm to use if you want cross compatibility with non-Apple devices.</li>
<li><code>.lzma</code> compresses the most effectively, but should only be used if memory usage and speed are not important. Apple specifically states that this might use a large amount of memory, and so it should be avoided if you’re trying to compress large amounts of data. This is about 10x slower than the alternatives.</li>
</ul>
<p>If you want to decompress some data, you should use the counterpart method, <code>decompressed(using:)</code>, which works in the same way.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li></ul>
-->

:::

---

<TagLinks />