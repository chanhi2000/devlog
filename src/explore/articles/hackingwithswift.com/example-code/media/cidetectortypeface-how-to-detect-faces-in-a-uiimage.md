---
lang: ko-KR
title: "CIDetectorTypeFace: How to detect faces in a UIImage"
description: "Article(s) > CIDetectorTypeFace: How to detect faces in a UIImage"
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
      content: "Article(s) > CIDetectorTypeFace: How to detect faces in a UIImage"
    - property: og:description
      content: "CIDetectorTypeFace: How to detect faces in a UIImage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage.html
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
  "title": "CIDetectorTypeFace: How to detect faces in a UIImage | Media - free Swift example code",
  "desc": "CIDetectorTypeFace: How to detect faces in a UIImage",
  "link": "https://hackingwithswift.com/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>Core Image has a number of feature detectors built right in, including the ability to detect faces, eyes, mouths, smiles and even blinking in pictures. When you ask it to look for faces in a picture, it will return you an array of all the faces it found, with each one containing face feature details such as eye position. Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> inputImage <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"taylor-swift"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ciImage <span class="token operator">=</span> <span class="token class-name">CIImage</span><span class="token punctuation">(</span>cgImage<span class="token punctuation">:</span> inputImage<span class="token punctuation">.</span>cgImage<span class="token operator">!</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">CIDetectorAccuracy</span><span class="token punctuation">:</span> <span class="token class-name">CIDetectorAccuracyHigh</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> faceDetector <span class="token operator">=</span> <span class="token class-name">CIDetector</span><span class="token punctuation">(</span>ofType<span class="token punctuation">:</span> <span class="token class-name">CIDetectorTypeFace</span><span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> options<span class="token punctuation">)</span><span class="token operator">!</span>

    <span class="token keyword">let</span> faces <span class="token operator">=</span> faceDetector<span class="token punctuation">.</span><span class="token function">features</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> ciImage<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> face <span class="token operator">=</span> faces<span class="token punctuation">.</span>first <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">CIFaceFeature</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found face at </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">face<span class="token punctuation">.</span>bounds</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> face<span class="token punctuation">.</span>hasLeftEyePosition <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found left eye at </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">face<span class="token punctuation">.</span>leftEyePosition</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> face<span class="token punctuation">.</span>hasRightEyePosition <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found right eye at </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">face<span class="token punctuation">.</span>rightEyePosition</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> face<span class="token punctuation">.</span>hasMouthPosition <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found mouth at </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">face<span class="token punctuation">.</span>mouthPosition</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData()</a></li><li><a href="/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage">How to read the average color of a UIImage using CIAreaAverage</a></li><li><a href="/example-code/media/how-to-pixellate-a-uiimage">How to pixellate a UIImage</a></li><li><a href="/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a></li></ul>
-->

:::

---

<TagLinks />