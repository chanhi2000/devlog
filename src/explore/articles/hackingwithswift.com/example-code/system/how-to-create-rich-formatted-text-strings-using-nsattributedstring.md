---
lang: ko-KR
title: "How to create rich formatted text strings using NSAttributedString"
description: "Article(s) > How to create rich formatted text strings using NSAttributedString"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create rich formatted text strings using NSAttributedString"
    - property: og:description
      content: "How to create rich formatted text strings using NSAttributedString"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-create-rich-formatted-text-strings-using-nsattributedstring.html
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
  "title": "How to create rich formatted text strings using NSAttributedString | System - free Swift example code",
  "desc": "How to create rich formatted text strings using NSAttributedString",
  "link": "https://hackingwithswift.com/example-code/how-to-create-rich-formatted-text-strings-using-nsattributedstring",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
<p>Attributed strings are strings with formatting attached, which means fonts, colors, alignment, line spacing and more. They are supported in many places around iOS, which means you can assign a fully formatted string to a <code>UILabel</code> and have it look great with no further work.</p>
<p>Please keep in mind, when working with fonts it's preferable to use Dynamic Type where possible so that a user's font size settings are honored. The example code below creates an attributed string using the "Headline" Dynamic Type size, then colors it purple. That is then placed into a <code>UILabel</code> by setting its <code>attributedText</code> property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> titleAttributes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">preferredFont</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>headline<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>foregroundColor<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>purple<span class="token punctuation">]</span>

<span class="token keyword">let</span> titleString <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Read all about it!"</span></span><span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> titleAttributes<span class="token punctuation">)</span>
yourLabel<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> titleString</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF</a></li><li><a href="/example-code/system/how-to-make-tappable-links-in-nsattributedstring">How to make tappable links in NSAttributedString</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li></ul>
-->

:::

---

<TagLinks />