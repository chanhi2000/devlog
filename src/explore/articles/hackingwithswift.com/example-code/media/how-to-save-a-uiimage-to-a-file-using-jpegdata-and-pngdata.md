---
lang: ko-KR
title: "How to save a UIImage to a file using jpegData() and pngData()"
description: "Article(s) > How to save a UIImage to a file using jpegData() and pngData()"
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
      content: "Article(s) > How to save a UIImage to a file using jpegData() and pngData()"
    - property: og:description
      content: "How to save a UIImage to a file using jpegData() and pngData()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata.html
date: 2020-04-18
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
  "title": "How to save a UIImage to a file using jpegData() and pngData() | Media - free Swift example code",
  "desc": "How to save a UIImage to a file using jpegData() and pngData()",
  "link": "https://hackingwithswift.com/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>If you've generated an image using Core Graphics, or perhaps rendered part of your layout, you might want to save that out as either a PNG or a JPEG. Both are easy thanks to two methods: <code>pngData()</code> and <code>jpegData()</code>, both of which convert a <code>UIImage</code> into a <code>Data</code> instance you can write out.</p>
<p>Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example.png"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> data <span class="token operator">=</span> image<span class="token punctuation">.</span><span class="token function">pngData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> filename <span class="token operator">=</span> <span class="token function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendingPathComponent</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"copy.png"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token operator">?</span> data<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> filename<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That call to <code>getDocumentsDirectory()</code> is a little helper function I include in most of my projects, because it makes it easy to locate the user's documents directory where you can save app files. Here it is:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span>
    <span class="token keyword">return</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to save your image as a JPEG rather than a PNG, use this code instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example.jpg"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> data <span class="token operator">=</span> image<span class="token punctuation">.</span><span class="token function">jpegData</span><span class="token punctuation">(</span>compressionQuality<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> filename <span class="token operator">=</span> <span class="token function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendingPathComponent</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"copy.png"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token operator">?</span> data<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> filename<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>The parameter to <code>jpegData()</code> is a float that represents JPEG quality, where 1.0 is highest and 0.0 is lowest.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a></li></ul>
-->

:::

---

<TagLinks />