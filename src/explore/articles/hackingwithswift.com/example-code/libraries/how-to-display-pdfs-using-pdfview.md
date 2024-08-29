---
lang: ko-KR
title: "How to display PDFs using PDFView"
description: "Article(s) > How to display PDFs using PDFView"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to display PDFs using PDFView"
    - property: og:description
      content: "How to display PDFs using PDFView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-display-pdfs-using-pdfview.html
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
  "title": "How to display PDFs using PDFView | Libraries - free Swift example code",
  "desc": "How to display PDFs using PDFView",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-display-pdfs-using-pdfview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple’s PDFKit framework provides a huge range of code to help us work with PDFs, and one of the most useful is <code>PDFView</code> – it renders PDFs to the screen and lets users interact with them.</p>
<p>To try it out, start by importing the PDFKit framework:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">PDFKit</span></code></pre>
<p>Next, add this code to your <code>viewDidLoad()</code> method to create a <code>PDFView</code> and make it fill all available space:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> pdfView <span class="token operator">=</span> <span class="token class-name">PDFView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

pdfView<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>pdfView<span class="token punctuation">)</span>

pdfView<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
pdfView<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
pdfView<span class="token punctuation">.</span>topAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>topAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
pdfView<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>Finally, create a <code>URL</code> pointing to a PDF you have in your bundle somewhere (or one in your documents directory), then create a <code>PDFDocument</code> object from that and pass it to the PDF view:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">guard</span> <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example"</span></span><span class="token punctuation">,</span> withExtension<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"pdf"</span></span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> document <span class="token operator">=</span> <span class="token class-name">PDFDocument</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pdfView<span class="token punctuation">.</span>document <span class="token operator">=</span> document
<span class="token punctuation">}</span></code></pre>
<p>Done!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview">How to watermark PDFs inside a PDFView</a></li><li><a href="/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer</a></li><li><a href="/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView</a></li><li><a href="/quick-start/swiftui/how-to-customize-the-display-mode-of-navigationsplitview">How to customize the display mode of NavigationSplitView</a></li><li><a href="/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a></li></ul>
-->

:::

---

<TagLinks />