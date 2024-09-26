---
lang: ko-KR
title: "How to render an NSAttributedString to a PDF"
description: "Article(s) > How to render an NSAttributedString to a PDF"
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
  - ios-4.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render an NSAttributedString to a PDF"
    - property: og:description
      content: "How to render an NSAttributedString to a PDF"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf.html
date: 2019-03-28
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
  "title": "How to render an NSAttributedString to a PDF | UIKit - free Swift example code",
  "desc": "How to render an NSAttributedString to a PDF",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.2

<!-- TODO: 작성 -->

<!--
<p>Attributed strings contain all the formatting they need to go straight to images, PDFs, and other visual output, although it does take a little setup to get a good PDF out.</p>
<p>First, create your attributed string:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> attributedString <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"This is a test"</span></span><span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>foregroundColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>
<p>Next, wrap that inside a <code>UISimpleTextPrintFormatter</code>, which is responsible for layout out that string over as many pages as needed:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> printFormatter <span class="token operator">=</span> <span class="token class-name">UISimpleTextPrintFormatter</span><span class="token punctuation">(</span>attributedText<span class="token punctuation">:</span> attributedString<span class="token punctuation">)</span></code></pre>
<p>You can then put that formatter inside a page renderer, telling it to start printing at page 0:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIPrintPageRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
renderer<span class="token punctuation">.</span><span class="token function">addPrintFormatter</span><span class="token punctuation">(</span>printFormatter<span class="token punctuation">,</span> startingAtPageAt<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></code></pre>
<p>Next you need to define a few sizes: how big your paper size is, along with what margins you want.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// A4 size</span>
<span class="token keyword">let</span> pageSize <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">595.2</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">841.8</span><span class="token punctuation">)</span>

<span class="token comment">// Use this to get US Letter size instead</span>
<span class="token comment">// let pageSize = CGSize(width: 612, height: 792)</span>

<span class="token comment">// create some sensible margins</span>
<span class="token keyword">let</span> pageMargins <span class="token operator">=</span> <span class="token class-name">UIEdgeInsets</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token keyword">left</span><span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">,</span> bottom<span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token keyword">right</span><span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">)</span>

<span class="token comment">// calculate the printable rect from the above two</span>
<span class="token keyword">let</span> printableRect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> pageMargins<span class="token punctuation">.</span><span class="token keyword">left</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> pageMargins<span class="token punctuation">.</span>top<span class="token punctuation">,</span> width<span class="token punctuation">:</span> pageSize<span class="token punctuation">.</span>width <span class="token operator">-</span> pageMargins<span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">-</span> pageMargins<span class="token punctuation">.</span><span class="token keyword">right</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> pageSize<span class="token punctuation">.</span>height <span class="token operator">-</span> pageMargins<span class="token punctuation">.</span>top <span class="token operator">-</span> pageMargins<span class="token punctuation">.</span>bottom<span class="token punctuation">)</span>

<span class="token comment">// and here's the overall paper rectangle</span>
<span class="token keyword">let</span> paperRect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> pageSize<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> pageSize<span class="token punctuation">.</span>height<span class="token punctuation">)</span></code></pre>
<p>You can now pass the paper and printable rectangles to the page renderer, like this:</p>
<pre class=" language-swift"><code class=" language-swift">renderer<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token class-name">NSValue</span><span class="token punctuation">(</span>cgRect<span class="token punctuation">:</span> paperRect<span class="token punctuation">)</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"paperRect"</span></span><span class="token punctuation">)</span>
renderer<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token class-name">NSValue</span><span class="token punctuation">(</span>cgRect<span class="token punctuation">:</span> printableRect<span class="token punctuation">)</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"printableRect"</span></span><span class="token punctuation">)</span></code></pre>
<p>The next step is to create an empty instance of <code>NSMutableData</code>, then ask UIKit to render into that data object:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> pdfData <span class="token operator">=</span> <span class="token class-name">NSMutableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token class-name">UIGraphicsBeginPDFContextToData</span><span class="token punctuation">(</span>pdfData<span class="token punctuation">,</span> paperRect<span class="token punctuation">,</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
renderer<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span>forDrawingPages<span class="token punctuation">:</span> <span class="token class-name">NSMakeRange</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>numberOfPages<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>Now all that remains is to render draw each page into the bounds of the PDF context, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> bounds <span class="token operator">=</span> <span class="token class-name">UIGraphicsGetPDFContextBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span>  <span class="token operator">..&lt;</span> renderer<span class="token punctuation">.</span>numberOfPages <span class="token punctuation">{</span>
    <span class="token class-name">UIGraphicsBeginPDFPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    renderer<span class="token punctuation">.</span><span class="token function">drawPage</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> i<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> bounds<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">UIGraphicsEndPDFContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>At this point your <code>pdfData</code> value contains the finished PDF, so you can write it wherever you want:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> pdfData<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> yourURL<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a></li><li><a href="/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image</a></li><li><a href="/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView</a></li><li><a href="/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit</a></li><li><a href="/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString</a></li></ul>
-->

:::

---

<TagLinks />