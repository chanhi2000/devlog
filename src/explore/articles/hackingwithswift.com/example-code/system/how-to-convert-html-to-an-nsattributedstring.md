---
lang: ko-KR
title: "How to convert HTML to an NSAttributedString"
description: "Article(s) > How to convert HTML to an NSAttributedString"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to convert HTML to an NSAttributedString"
    - property: og:description
      content: "How to convert HTML to an NSAttributedString"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert HTML to an NSAttributedString | System - free Swift example code",
  "desc": "How to convert HTML to an NSAttributedString",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>You can create an <code>NSAttributedString</code> directly from HTML, including support for a wide range of formatting, using a special initializer and passing in <code>NSAttributedString.DocumentType.html</code> for your document type.</p>
<p>For example, given the following HTML:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"""
&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;Hello, world!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
"""</span></span></code></pre>
<p>You first need to convert that string into a <code>Data</code> instance, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>html<span class="token punctuation">.</span>utf8<span class="token punctuation">)</span></code></pre>
<p>You can now create an <code>NSAttributedString</code> from that. This is a <em>throwing</em> call because you might try to convert something that isn’t valid, so we’re going to use <code>try?</code> and wrap it in <code>if let</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> attributedString <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> data<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>documentType<span class="token punctuation">:</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">DocumentType</span><span class="token punctuation">.</span>html<span class="token punctuation">]</span><span class="token punctuation">,</span> documentAttributes<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    yourLabel<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> attributedString
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor</a></li><li><a href="/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a></li><li><a href="/example-code/system/how-to-create-rich-formatted-text-strings-using-nsattributedstring">How to create rich formatted text strings using NSAttributedString</a></li><li><a href="/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF</a></li><li><a href="/example-code/system/how-to-make-tappable-links-in-nsattributedstring">How to make tappable links in NSAttributedString</a></li></ul>
-->

:::

---

<TagLinks />