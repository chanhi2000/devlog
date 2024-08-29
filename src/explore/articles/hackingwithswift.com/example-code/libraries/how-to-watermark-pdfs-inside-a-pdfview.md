---
lang: ko-KR
title: "How to watermark PDFs inside a PDFView"
description: "Article(s) > How to watermark PDFs inside a PDFView"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to watermark PDFs inside a PDFView"
    - property: og:description
      content: "How to watermark PDFs inside a PDFView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to watermark PDFs inside a PDFView | Libraries - free Swift example code",
  "desc": "How to watermark PDFs inside a PDFView",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>PDFKit makes it easy to watermark PDFs as they are rendered, for example to add “FREE SAMPLE” over pages. It takes six steps, five of which are trivial and one which involves a little Core Graphics heavy lifting.</p>
<p>Let’s get the easy stuff out of the way:</p>
<ol>
<li>Create a new Cocoa Touch Class called “SampleWatermark”, making it a subclass of <code>PDFPage</code>.</li>
<li>Add <code>import PDFKit</code> to the top of the new file.</li>
<li>Open whichever view controller owns your <code>PDFView</code> and make the <code>ViewController</code> class conform to the <code>PDFDocumentDelegate</code> protocol.</li>
<li>Find the code where you load your document (something like <code>pdfView.document = document</code>) then insert this directly before: <code>document.delegate = self</code>. That means the document will ask your view controller what class it should use to render pages.</li>
<li>Finally, we need to add a new method to the view controller to tell it to use the <code>SampleWatermark</code> class for its pages.</li>
</ol>
<p>Add this method to your view controller now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">classForPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">AnyClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">SampleWatermark</span><span class="token punctuation">.</span><span class="token keyword">self</span>
<span class="token punctuation">}</span></code></pre>
<p>What we’ve just done is create a new <code>PDFPage</code> subclass that will handle watermark rendering, then tell our <code>PDFDocument</code> to use it for all pages. We haven’t given the <code>SampleWatermark</code> class any code yet, which means it will look just like a regular page –&nbsp;we’re going to fix that now.</p>
<p>When doing custom PDF rendering there are a few things to know:</p>
<ol>
<li>If you draw your content before calling <code>super.draw()</code>, your content will appear behind the page content. That might be what you want, but we’ll be doing the opposite here.</li>
<li>You’re given a graphics context to draw into, but you should tread carefully: save the context and its state before you make any changes, then restore them afterwards.</li>
<li>PDFs have a variety of drawing boxes that determine how things are displayed. We don’t care which one is used, but we do need to ask PDFKit to tell us the page bounds for that box so we know how to position our text.</li>
<li>UIKit and PDFs draw in different directions, but you can correct that by moving the drawing position down by the height of the document then flipping its Y axis.</li>
</ol>
<p>We’re going to write the words “FREE SAMPLE” in red, centered near the top of each page using a bold font. Add this method to SampleWatermark.swift:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">draw</span><span class="token punctuation">(</span>with box<span class="token punctuation">:</span> <span class="token class-name">PDFDisplayBox</span><span class="token punctuation">,</span> to context<span class="token punctuation">:</span> <span class="token class-name">CGContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> box<span class="token punctuation">,</span> to<span class="token punctuation">:</span> context<span class="token punctuation">)</span>

    <span class="token keyword">let</span> string<span class="token punctuation">:</span> <span class="token class-name">NSString</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"FREE SAMPLE"</span></span>
    <span class="token keyword">let</span> attributes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>foregroundColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">boldSystemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> stringSize <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>withAttributes<span class="token punctuation">:</span> attributes<span class="token punctuation">)</span>

    <span class="token class-name">UIGraphicsPushContext</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    context<span class="token punctuation">.</span><span class="token function">saveGState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> pageBounds <span class="token operator">=</span> <span class="token function">bounds</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> box<span class="token punctuation">)</span>
    context<span class="token punctuation">.</span><span class="token function">translateBy</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token punctuation">(</span>pageBounds<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">-</span> stringSize<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> pageBounds<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    context<span class="token punctuation">.</span><span class="token function">scaleBy</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">)</span>

    string<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">,</span> withAttributes<span class="token punctuation">:</span> attributes<span class="token punctuation">)</span>

    context<span class="token punctuation">.</span><span class="token function">restoreGState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token class-name">UIGraphicsPopContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>If everything went well you should now see “FREE SAMPLE” emblazoned across every page of your PDF.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/libraries/how-to-display-pdfs-using-pdfview">How to display PDFs using PDFView</a></li><li><a href="/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer</a></li><li><a href="/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView</a></li><li><a href="/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view</a></li><li><a href="/quick-start/swiftui/how-to-draw-a-border-inside-a-view">How to draw a border inside a view</a></li></ul>
-->

:::

---

<TagLinks />