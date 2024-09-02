---
lang: ko-KR
title: "How to pixellate a UIImage"
description: "Article(s) > How to pixellate a UIImage"
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
      content: "Article(s) > How to pixellate a UIImage"
    - property: og:description
      content: "How to pixellate a UIImage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-pixellate-a-uiimage.html
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
  "title": "How to pixellate a UIImage | Media - free Swift example code",
  "desc": "How to pixellate a UIImage",
  "link": "https://hackingwithswift.com/example-code/media/how-to-pixellate-a-uiimage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Core Image has a number of interesting filters baked in, and an easy one to use is <code>CIPixellate</code> –&nbsp;it pixellates images, making them appear blocky. You have control over how big each pixel block should be, so it’s suitable for a range of tasks.</p>
<p>Below is some sample code to get you started. To use it you should:</p>
<ol>
<li>Change <code>yourUIImage</code> to be whatever input <code>UIImage</code> you want to use.</li>
<li>Change the value of 12 for however strong your pixellation effect should be.</li>
<li>Change the <code>print(processedImage.size)</code> line at the end for something more interesting –&nbsp;maybe you want to display the pixellated image somewhere?</li>
</ol>
<p>Here’s the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">guard</span> <span class="token keyword">let</span> currentCGImage <span class="token operator">=</span> yourUIImage<span class="token punctuation">.</span>cgImage <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> currentCIImage <span class="token operator">=</span> <span class="token class-name">CIImage</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> currentCGImage<span class="token punctuation">)</span>

<span class="token keyword">let</span> filter <span class="token operator">=</span> <span class="token class-name">CIFilter</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CIPixellate"</span></span><span class="token punctuation">)</span>
filter<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>currentCIImage<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token constant">kCIInputImageKey</span><span class="token punctuation">)</span>
filter<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token constant">kCIInputScaleKey</span><span class="token punctuation">)</span>
<span class="token keyword">guard</span> <span class="token keyword">let</span> outputImage <span class="token operator">=</span> filter<span class="token operator">?</span><span class="token punctuation">.</span>outputImage <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token class-name">CIContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> cgimg <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createCGImage</span><span class="token punctuation">(</span>outputImage<span class="token punctuation">,</span> from<span class="token punctuation">:</span> outputImage<span class="token punctuation">.</span>extent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> processedImage <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> cgimg<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>processedImage<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: if you intend to run pixellation several times you’ll find it more efficient to save your <code>CIContext</code> rather than keep recreating it.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData()</a></li><li><a href="/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage">How to read the average color of a UIImage using CIAreaAverage</a></li><li><a href="/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a></li><li><a href="/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a></li></ul>
-->

:::

---

<TagLinks />