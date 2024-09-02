---
lang: ko-KR
title: "How to read the average color of a UIImage using CIAreaAverage"
description: "Article(s) > How to read the average color of a UIImage using CIAreaAverage"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read the average color of a UIImage using CIAreaAverage"
    - property: og:description
      content: "How to read the average color of a UIImage using CIAreaAverage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage.html
date: 2020-07-07
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
  "title": "How to read the average color of a UIImage using CIAreaAverage | Media - free Swift example code",
  "desc": "How to read the average color of a UIImage using CIAreaAverage",
  "link": "https://hackingwithswift.com/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>Core Image has a filter that resamples an image down to 1x1 pixels so you can read the most dominant color in an image, although it’s weirdly hard to use. </p>
<p>To simplify things, here’s an extension on <code>UIImage</code> that returns an optional <code>UIColor</code> –&nbsp;it will be nil only if something went wrong while reading your image, but otherwise it will contain the average color for the entire image:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIImage</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> averageColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> inputImage <span class="token operator">=</span> <span class="token class-name">CIImage</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>
        <span class="token keyword">let</span> extentVector <span class="token operator">=</span> <span class="token class-name">CIVector</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> inputImage<span class="token punctuation">.</span>extent<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> inputImage<span class="token punctuation">.</span>extent<span class="token punctuation">.</span>origin<span class="token punctuation">.</span>y<span class="token punctuation">,</span> z<span class="token punctuation">:</span> inputImage<span class="token punctuation">.</span>extent<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> w<span class="token punctuation">:</span> inputImage<span class="token punctuation">.</span>extent<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

        <span class="token keyword">guard</span> <span class="token keyword">let</span> filter <span class="token operator">=</span> <span class="token class-name">CIFilter</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CIAreaAverage"</span></span><span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token constant">kCIInputImageKey</span><span class="token punctuation">:</span> inputImage<span class="token punctuation">,</span> <span class="token constant">kCIInputExtentKey</span><span class="token punctuation">:</span> extentVector<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> outputImage <span class="token operator">=</span> filter<span class="token punctuation">.</span>outputImage <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>

        <span class="token keyword">var</span> bitmap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">UInt8</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token class-name">CIContext</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>workingColorSpace<span class="token punctuation">:</span> <span class="token constant">kCFNull</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        context<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>outputImage<span class="token punctuation">,</span> toBitmap<span class="token punctuation">:</span> <span class="token operator">&amp;</span>bitmap<span class="token punctuation">,</span> rowBytes<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> bounds<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> format<span class="token punctuation">:</span> <span class="token punctuation">.</span>RGBA8<span class="token punctuation">,</span> colorSpace<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>bitmap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>bitmap<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>bitmap<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>bitmap<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">255</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, that reads in the source image and creates an extent for the full image. It then uses the “CIAreaAverage” filter to do the actual work, then renders the average color to a 1x1 image. Finally, it reads each of the color values into a <code>UIColor</code>, and sends it back.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData()</a></li><li><a href="/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a></li><li><a href="/example-code/media/how-to-pixellate-a-uiimage">How to pixellate a UIImage</a></li><li><a href="/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a></li></ul>
-->

:::

---

<TagLinks />