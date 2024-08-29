---
lang: ko-KR
title: "How to show PDF thumbnails using PDFThumbnailView"
description: "Article(s) > How to show PDF thumbnails using PDFThumbnailView"
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
      content: "Article(s) > How to show PDF thumbnails using PDFThumbnailView"
    - property: og:description
      content: "How to show PDF thumbnails using PDFThumbnailView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview.html
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
  "title": "How to show PDF thumbnails using PDFThumbnailView | Libraries - free Swift example code",
  "desc": "How to show PDF thumbnails using PDFThumbnailView",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple’s PDFKit framework provides a huge range of code to help us work with PDFs, including a dedicated view for rendering thumbnails of PDF pages: <code>PDFThumbnailView</code>. However, using it takes a little extra work because it doesn’t read PDF directly –&nbsp;you first load the PDF into a <code>PDFView</code>, then connect <em>that</em> to the thumbnail view.</p>
<p>To try it out, start by importing the PDFKit framework:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">PDFKit</span></code></pre>
<p>Next, add this code to your <code>viewDidLoad()</code> method to create a <code>PDFView</code> and make it pin to the top, left, and right edges of your view:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> pdfView <span class="token operator">=</span> <span class="token class-name">PDFView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

pdfView<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>pdfView<span class="token punctuation">)</span>

pdfView<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
pdfView<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
pdfView<span class="token punctuation">.</span>topAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>topAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>Third, create a <code>PDFThumbnailView</code> and pin to the bottom, left, and right edges of your view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> thumbnailView <span class="token operator">=</span> <span class="token class-name">PDFThumbnailView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
thumbnailView<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>thumbnailView<span class="token punctuation">)</span>

thumbnailView<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
thumbnailView<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
thumbnailView<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>We need the PDF view and PDF thumbnail view to share the space, so we’re going to make the limit the thumbnail to 120 points of height, with the PDF view taking up the rest of the space:</p>
<pre class=" language-swift"><code class=" language-swift">pdfView<span class="token punctuation">.</span>bottomAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> thumbnailView<span class="token punctuation">.</span>topAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
thumbnailView<span class="token punctuation">.</span>heightAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalToConstant<span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p><code>PDFThumbnailView</code> has a few interesting properties to set, of which the most important are the size of the thumbnails and the direction they should be born:</p>
<pre class=" language-swift"><code class=" language-swift">thumbnailView<span class="token punctuation">.</span>thumbnailSize <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span>
thumbnailView<span class="token punctuation">.</span>layoutMode <span class="token operator">=</span> <span class="token punctuation">.</span>horizontal</code></pre>
<p>Now we just need to connect the two views together so that changing one also changes the other:</p>
<pre class=" language-swift"><code class=" language-swift">thumbnailView<span class="token punctuation">.</span>pdfView <span class="token operator">=</span> pdfView</code></pre>
<p>Finally, create a <code>URL</code> pointing to a PDF you have in your bundle somewhere (or one in your documents directory), then create a <code>PDFDocument</code> object from that and pass it to the PDF view:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">guard</span> <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example"</span></span><span class="token punctuation">,</span> withExtension<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"pdf"</span></span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> document <span class="token operator">=</span> <span class="token class-name">PDFDocument</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pdfView<span class="token punctuation">.</span>document <span class="token operator">=</span> document
<span class="token punctuation">}</span></code></pre>
<p>Done!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a></li><li><a href="/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit</a></li><li><a href="/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image</a></li><li><a href="/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF</a></li><li><a href="/quick-start/swiftui/how-to-show-an-alert">How to show an alert</a></li></ul>
-->

:::

---

<TagLinks />