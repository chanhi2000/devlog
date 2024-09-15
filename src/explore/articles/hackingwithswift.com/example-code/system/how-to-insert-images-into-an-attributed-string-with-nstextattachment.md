---
lang: ko-KR
title: "How to insert images into an attributed string with NSTextAttachment"
description: "Article(s) > How to insert images into an attributed string with NSTextAttachment"
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
      content: "Article(s) > How to insert images into an attributed string with NSTextAttachment"
    - property: og:description
      content: "How to insert images into an attributed string with NSTextAttachment"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-insert-images-into-an-attributed-string-with-nstextattachment.html
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
  "title": "How to insert images into an attributed string with NSTextAttachment | System - free Swift example code",
  "desc": "How to insert images into an attributed string with NSTextAttachment",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-insert-images-into-an-attributed-string-with-nstextattachment",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>If you've ever tried to lay out multiple <code>UILabels</code> mixed in with <code>UIImageViews</code>, you'll know it's almost impossible to make them line up correctly even after you add dozens of Auto Layout rules.</p>
<p>If you are able to use it, there is a much simpler suggestion: <code>NSAttributedString</code> and <code>NSTextAttachment</code>. Attributed strings are strings with formatting attached (bold, italics, alignment, colors, etc), but you can also attach images inside attributed strings, and they just get drawn right along with the text.</p>
<p>Here's an example to help you get started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// create an NSMutableAttributedString that we'll append everything to</span>
<span class="token keyword">let</span> fullString <span class="token operator">=</span> <span class="token class-name">NSMutableAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Start of text"</span></span><span class="token punctuation">)</span>

<span class="token comment">// create our NSTextAttachment</span>
<span class="token keyword">let</span> image1Attachment <span class="token operator">=</span> <span class="token class-name">NSTextAttachment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
image1Attachment<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"awesomeIcon.png"</span></span><span class="token punctuation">)</span>

<span class="token comment">// wrap the attachment in its own attributed string so we can append it</span>
<span class="token keyword">let</span> image1String <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>attachment<span class="token punctuation">:</span> image1Attachment<span class="token punctuation">)</span>

<span class="token comment">// add the NSTextAttachment wrapper to our full string, then add some more text.</span>
fullString<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>image1String<span class="token punctuation">)</span>
fullString<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"End of text"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// draw the result in a label</span>
yourLabel<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> fullString</code></pre>
<p>Using this technique is much easier than Auto Layout, because iOS becomes responsible for drawing the image directly inside the string. This means if your user interface adjusts because of things like rotation or multi-tasking, the string – and its images – will redraw smoothly, with no further work from you.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-insert-images-into-text">How to insert images into text</a></li><li><a href="/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a></li><li><a href="/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor</a></li><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:)</a></li></ul>
-->

:::

---

<TagLinks />