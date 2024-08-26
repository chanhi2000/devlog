---
lang: ko-KR
title: "How to render a PDF to an image"
description: "Article(s) > How to render a PDF to an image"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render a PDF to an image"
    - property: og:description
      content: "How to render a PDF to an image"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render a PDF to an image | Core Graphics - free Swift example code",
  "desc": "How to render a PDF to an image",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has built-in APIs for drawing PDFs, which means it's relatively straight forward to render a PDF to an image. I say "relatively" because there's still some boilerplate you need to worry about: figuring out the document size, filling the background in a solid color to avoid transparency, and flipping the rendering so that the PDF draws the right way up.</p>
<p>To make things easy for you, here's a pre-made method you can use that takes a URL to a PDF and returns either a rendered image or nil if it failed. To call it you should pull out the URL to a resource in your bundle or another local PDF file.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">drawPDFfromURL</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIImage</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> document <span class="token operator">=</span> <span class="token class-name">CGPDFDocument</span><span class="token punctuation">(</span>url <span class="token keyword">as</span> <span class="token constant">CFURL</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> page <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> pageRect <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getBoxRect</span><span class="token punctuation">(</span><span class="token punctuation">.</span>mediaBox<span class="token punctuation">)</span>
    <span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> pageRect<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
    <span class="token keyword">let</span> img <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
        <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>pageRect<span class="token punctuation">)</span>

        ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">translateBy</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> pageRect<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">scaleBy</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">)</span>

        ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">drawPDFPage</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> img
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a></li><li><a href="/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF</a></li><li><a href="/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView</a></li><li><a href="/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit</a></li><li><a href="/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer</a></li></ul>
-->

:::

---

<TagLinks />