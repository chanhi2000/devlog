---
lang: ko-KR
title: "How to draw a text string using Core Graphics"
description: "Article(s) > How to draw a text string using Core Graphics"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw a text string using Core Graphics"
    - property: og:description
      content: "How to draw a text string using Core Graphics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.html
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
  "title": "How to draw a text string using Core Graphics | Core Graphics - free Swift example code",
  "desc": "How to draw a text string using Core Graphics",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>To draw text in Core Graphics is trivial because every Swift string has a built-in <code>draw(with:)</code> method that takes an array of attributes and a position and size. There is, like always, some Core Graphics set up work to do, but this next code snippet is a complete example you can re-use easily:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> img <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    <span class="token keyword">let</span> paragraphStyle <span class="token operator">=</span> <span class="token class-name">NSMutableParagraphStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    paragraphStyle<span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">.</span>center

    <span class="token keyword">let</span> attrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"HelveticaNeue-Thin"</span></span><span class="token punctuation">,</span> size<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>paragraphStyle<span class="token punctuation">:</span> paragraphStyle<span class="token punctuation">]</span>

    <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"How much wood would a woodchuck\nchuck if a woodchuck would chuck wood?"</span></span>
    string<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">448</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">448</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>usesLineFragmentOrigin<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect()</a></li><li><a href="/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:)</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:)</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />