---
lang: ko-KR
title: "How to detect documents using VNDocumentCameraViewController"
description: "Article(s) > How to detect documents using VNDocumentCameraViewController"
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
      content: "Article(s) > How to detect documents using VNDocumentCameraViewController"
    - property: og:description
      content: "How to detect documents using VNDocumentCameraViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/vision/how-to-convert-a-hex-color-to-a-uicolor.html
date: 2019-06-03
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vision - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/vision/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to detect documents using VNDocumentCameraViewController | Vision - free Swift example code",
  "desc": "How to detect documents using VNDocumentCameraViewController",
  "link": "https://hackingwithswift.com/example-code/vision/how-to-convert-a-hex-color-to-a-uicolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS 13.0 introduced a new micro-framework called VisionKit, which is specifically designed to make it possible to scan documents like Notes does. </p>
<p>You can then Vision OCR to scan the text if you want, but by default <code>VNDocumentCameraViewController</code> just gives you images of each page.</p>
<p>To get started:</p>
<ol>
<li>Import VisionKit.</li>
<li>Make some type (such as your view controller) conform to the <code>VNDocumentCameraViewControllerDelegate</code> protocol so you can handle delegate callbacks.</li>
<li>Create and present an instance of <code>VNDocumentCameraViewController</code>, setting its delegate property to whatever should be notified when a scan completes.</li>
<li>Present the document scanner as normal, then wait for feedback.</li>
</ol>
<p>So, something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">VNDocumentCameraViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
vc<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
<span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>Once the scan completes your delegate will get called with the document, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">documentCameraViewController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> controller<span class="token punctuation">:</span> <span class="token class-name">VNDocumentCameraViewController</span><span class="token punctuation">,</span> didFinishWith scan<span class="token punctuation">:</span> <span class="token class-name">VNDocumentCameraScan</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">scan<span class="token punctuation">.</span>pageCount</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> scan<span class="token punctuation">.</span>pageCount <span class="token punctuation">{</span>
        <span class="token keyword">let</span> img <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">imageOfPage</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> i<span class="token punctuation">)</span>
        <span class="token comment">// ... your code here</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>The result of <code>imageOfPage(at:)</code> is a <code>UIImage</code>, so you’ll need to replace “your code here” with whatever you want to do with your images.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-find-the-users-documents-directory">How to find the user's documents directory</a></li><li><a href="/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image">How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/location/how-to-detect-ibeacons">How to detect iBeacons</a></li><li><a href="/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a></li></ul>
-->

:::

---

<TagLinks />