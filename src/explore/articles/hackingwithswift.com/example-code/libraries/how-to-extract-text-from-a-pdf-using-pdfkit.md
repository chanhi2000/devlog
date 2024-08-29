---
lang: ko-KR
title: "How to extract text from a PDF using PDFKit"
description: "Article(s) > How to extract text from a PDF using PDFKit"
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
      content: "Article(s) > How to extract text from a PDF using PDFKit"
    - property: og:description
      content: "How to extract text from a PDF using PDFKit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit.html
date: 2021-06-21
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
  "title": "How to extract text from a PDF using PDFKit | Libraries - free Swift example code",
  "desc": "How to extract text from a PDF using PDFKit",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>PDFKit comes with a built-in class called <code>PDFDocument</code>, which allows us to load and parse PDF documents. It’s used when you want to put your PDF into a <code>PDFView</code>, but it’s also useful when you just want to read text from the PDF: you can loop over each page in the PDF, read its <code>attributedString</code> property, then append it to an attributed string containing all the text from the PDF.</p>
<p>First, add <code>import PDFKit</code> in the Swift file you’re using, then add the following example code to read out the text contents of a file:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> pdf <span class="token operator">=</span> <span class="token class-name">PDFDocument</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> yourDocumentURL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pageCount <span class="token operator">=</span> pdf<span class="token punctuation">.</span>pageCount
    <span class="token keyword">let</span> documentContent <span class="token operator">=</span> <span class="token class-name">NSMutableAttributedString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> pageCount <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> page <span class="token operator">=</span> pdf<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> i<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> pageContent <span class="token operator">=</span> page<span class="token punctuation">.</span>attributedString <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span>
        documentContent<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>pageContent<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>It’s an <em>attributed</em> string, so it will retain formatting from the PDF as best as it can.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a></li><li><a href="/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView</a></li><li><a href="/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image</a></li><li><a href="/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />