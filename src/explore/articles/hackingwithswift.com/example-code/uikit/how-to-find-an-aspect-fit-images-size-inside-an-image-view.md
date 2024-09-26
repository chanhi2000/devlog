---
lang: ko-KR
title: "How to find an aspect fit image’s size inside an image view"
description: "Article(s) > How to find an aspect fit image’s size inside an image view"
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
      content: "Article(s) > How to find an aspect fit image’s size inside an image view"
    - property: og:description
      content: "How to find an aspect fit image’s size inside an image view"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view.html
date: 2019-10-24
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
  "title": "How to find an aspect fit image’s size inside an image view | UIKit - free Swift example code",
  "desc": "How to find an aspect fit image’s size inside an image view",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>All images have a natural size, which is the number of pixels they are wide and high. All image views also have a size, which is whatever width and height they have once their Auto Layout constraints have been resolved. </p>
<p>Things get a little more complex when you place an image inside an image view and make it use <em>aspect fit</em> content mode –&nbsp;the image gets scaled down to fit inside the image view, so that all parts of the image are visible.</p>
<p>If you need to find the size of an aspect fit image inside its image view, I have just the extension for you:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIImageView</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> contentClippingRect<span class="token punctuation">:</span> <span class="token class-name">CGRect</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> image <span class="token operator">=</span> image <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> bounds <span class="token punctuation">}</span>
        <span class="token keyword">guard</span> contentMode <span class="token operator">==</span> <span class="token punctuation">.</span>scaleAspectFit <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> bounds <span class="token punctuation">}</span>
        <span class="token keyword">guard</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> bounds <span class="token punctuation">}</span>

        <span class="token keyword">let</span> scale<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span>
        <span class="token keyword">if</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token punctuation">{</span>
            scale <span class="token operator">=</span> bounds<span class="token punctuation">.</span>width <span class="token operator">/</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            scale <span class="token operator">=</span> bounds<span class="token punctuation">.</span>height <span class="token operator">/</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">*</span> scale<span class="token punctuation">,</span> height<span class="token punctuation">:</span> image<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token operator">*</span> scale<span class="token punctuation">)</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>bounds<span class="token punctuation">.</span>width <span class="token operator">-</span> size<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span>
        <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>bounds<span class="token punctuation">.</span>height <span class="token operator">-</span> size<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span>

        <span class="token keyword">return</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> y<span class="token punctuation">,</span> width<span class="token punctuation">:</span> size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You can now use <code>imageView.contentClippingRect</code> to read the position and size of the image inside.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard">How to adjust a UIScrollView to fit the keyboard</a></li><li><a href="/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image</a></li><li><a href="/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text</a></li></ul>
-->

:::

---

<TagLinks />