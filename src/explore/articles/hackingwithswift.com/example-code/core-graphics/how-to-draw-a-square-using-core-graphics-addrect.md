---
lang: ko-KR
title: "How to draw a square using Core Graphics: addRect()"
description: "Article(s) > How to draw a square using Core Graphics: addRect()"
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
      content: "Article(s) > How to draw a square using Core Graphics: addRect()"
    - property: og:description
      content: "How to draw a square using Core Graphics: addRect()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect.html
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
  "title": "How to draw a square using Core Graphics: addRect() | Core Graphics - free Swift example code",
  "desc": "How to draw a square using Core Graphics: addRect()",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>You can draw a square (or indeed any size of rectangle) using the <code>addRect()</code> Core Graphics function. There's a little bit of set up work required, such as creating a context big enough to hold the square and setting up colors, but the code below does everything you need:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> img <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setFillColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setStrokeColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>green<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setLineWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> rectangle <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addRect</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">drawPath</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token punctuation">.</span>fillStroke<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p><strong>Important note:</strong> when setting a line width using <code>setLineWidth()</code>, the center of the border is the edge of your path. This means our board will be 5 points inside the rectangle and 5 points outside, because we have a total border width of 10 points. Because the square's path is the same size as the context, this means the outside part of the border will be clipped.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:)</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:)</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics">How to draw a text string using Core Graphics</a></li><li><a href="/example-code/uikit/how-to-add-retina-and-retina-hd-graphics-to-your-project">How to add Retina and Retina HD graphics to your project</a></li></ul>
-->

:::

---

<TagLinks />