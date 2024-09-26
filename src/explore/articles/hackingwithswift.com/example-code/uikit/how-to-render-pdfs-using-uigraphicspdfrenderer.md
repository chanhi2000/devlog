---
lang: ko-KR
title: "How to render PDFs using UIGraphicsPDFRenderer"
description: "Article(s) > How to render PDFs using UIGraphicsPDFRenderer"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render PDFs using UIGraphicsPDFRenderer"
    - property: og:description
      content: "How to render PDFs using UIGraphicsPDFRenderer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer.html
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
  "title": "How to render PDFs using UIGraphicsPDFRenderer | UIKit - free Swift example code",
  "desc": "How to render PDFs using UIGraphicsPDFRenderer",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
<p>UIKit comes with a built-in class for rendering PDFs, and you can render strings, attributed strings, images, and more right to PDF pages. To get started, just create an instance of <code>UIGraphicsPDFRenderer</code> with the paper size you want, then call its <code>pdfData()</code> method and pass in your drawing instructions. You get back a <code>Data</code> object, which you can then write to disk however you want.</p>
<p>Let’s work through some example code so you can try it out. First, pick a paper size:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// A4 size</span>
<span class="token keyword">let</span> pageRect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">595.2</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">841.8</span><span class="token punctuation">)</span>

<span class="token comment">// Use this to get US Letter size instead</span>
<span class="token comment">// let pageRect = CGRect(x: 0, y: 0, width: 612, height: 792)</span></code></pre>
<p>Next, use that size to create a <code>UIGraphicsPDFRenderer</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsPDFRenderer</span><span class="token punctuation">(</span>bounds<span class="token punctuation">:</span> pageRect<span class="token punctuation">)</span></code></pre>
<p>Third, decide what you want to render. I’m going to render some attributed text as if we were printing an essay:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"School report\n"</span></span>
<span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"This is an important report about the weather. "</span></span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> titleAttributes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">boldSystemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> textAttributes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> formattedTitle <span class="token operator">=</span> <span class="token class-name">NSMutableAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> title<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> titleAttributes<span class="token punctuation">)</span>
<span class="token keyword">let</span> formattedText <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> text<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> textAttributes<span class="token punctuation">)</span>
formattedTitle<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>formattedText<span class="token punctuation">)</span></code></pre>
<p>Once you have your content ready, call <code>pdfData()</code> on your renderer, begin a new page, then render as much as you want:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> data <span class="token operator">=</span> renderer<span class="token punctuation">.</span>pdfData <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    formattedTitle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> pageRect<span class="token punctuation">.</span><span class="token function">insetBy</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, I’ve inset my formatted text by 50 points on all side, which should be enough to allow printers to print it accurately.</p>
<p>Finally, save <code>data</code> somewhere as your finished PDF file.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview">How to watermark PDFs inside a PDFView</a></li><li><a href="/example-code/libraries/how-to-display-pdfs-using-pdfview">How to display PDFs using PDFView</a></li><li><a href="/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a></li><li><a href="/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow">How to render shadows using NSShadow and setShadow()</a></li><li><a href="/quick-start/swiftui/how-to-render-images-using-sf-symbols">How to render images using SF Symbols</a></li></ul>
-->

:::

---

<TagLinks />