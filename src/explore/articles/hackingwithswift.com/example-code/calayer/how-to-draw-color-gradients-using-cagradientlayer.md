---
lang: ko-KR
title: "How to draw color gradients using CAGradientLayer"
description: "Article(s) > How to draw color gradients using CAGradientLayer"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw color gradients using CAGradientLayer"
    - property: og:description
      content: "How to draw color gradients using CAGradientLayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-draw-color-gradients-using-cagradientlayer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to draw color gradients using CAGradientLayer | CALayer - free Swift example code",
  "desc": "How to draw color gradients using CAGradientLayer",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-draw-color-gradients-using-cagradientlayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>I love <code>CAGradientLayer</code> because it takes just four lines of code to use, and yet looks great because it quickly and accurately draws smooth color gradients use Core Graphics. Here's a basic example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token class-name">CAGradientLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
layer<span class="token punctuation">.</span>frame <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">)</span>
layer<span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span>cgColor<span class="token punctuation">,</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor<span class="token punctuation">]</span>
view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">addSublayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span></code></pre>
<p>Note that you need to fill in an array of <code>colors</code> that will be used to draw the gradient. You can provide more than one if you want to, at which point you will also need to fill in the <code>locations</code> array to tell <code>CAGradientLayer</code> where each color starts and stops. Note that you need to specify your colors as <code>CGColor</code> and not <code>UIColor</code>.</p>
<p>If you want to make your gradient work in a different direction, you should set the <code>startPoint</code> and <code>endPoint</code> properties. These are both <code>CGPoints</code> where the X and Y values are between 0 and 1, where 0 is one edge and 1 is the opposite edge. The default start point is X 0.5, Y 0.0 and the default end point is X 0.5, Y 1.0, which means both points are in the center of the layer, but it starts at the top and ends at the bottom.</p>
<p>You might be interested to know that <code>CAGradientLayer</code> happily works with translucent colors, meaning that you can make a gradient that fades out.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect()</a></li><li><a href="/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:)</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:)</a></li></ul>
-->

:::

---

<TagLinks />