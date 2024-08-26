---
lang: ko-KR
title: "How to make a shape draw itself using strokeEnd"
description: "Article(s) > How to make a shape draw itself using strokeEnd"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a shape draw itself using strokeEnd"
    - property: og:description
      content: "How to make a shape draw itself using strokeEnd"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-shape-draw-itself-using-strokeend.html
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
  "title": "How to make a shape draw itself using strokeEnd | CALayer - free Swift example code",
  "desc": "How to make a shape draw itself using strokeEnd",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-make-a-shape-draw-itself-using-strokeend",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!-- 
<p>iOS makes it easy to draw shapes using <code>CAShapeLayer</code>, but you also get the ability to adjust <em>how</em> shapes are drawn. By manipulating the <code>strokeStart</code> and <code>strokeEnd</code> properties you can make shapes draw themselves on the screen: you can present a half-drawn star, or a three-quarters drawn circle, for example.</p>
<p>However, as clever as that is what’s <em>really</em> neat is being able to animate the drawing process. To try it out, first create a <code>CAShapeLayer</code> with a stroke that’s visible, like this one:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token class-name">CAShapeLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> bounds <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">)</span>
layer<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>roundedRect<span class="token punctuation">:</span> bounds<span class="token punctuation">,</span> byRoundingCorners<span class="token punctuation">:</span> <span class="token punctuation">.</span>allCorners<span class="token punctuation">,</span> cornerRadii<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath
layer<span class="token punctuation">.</span>strokeColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor
layer<span class="token punctuation">.</span>fillColor <span class="token operator">=</span> <span class="token nil constant">nil</span>
layer<span class="token punctuation">.</span>lineDashPattern <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
view<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">addSublayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span></code></pre>
<p>Now create and add a <code>CABasicAnimation</code> to adjust the <code>strokeEnd</code> property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> animation <span class="token operator">=</span> <span class="token class-name">CABasicAnimation</span><span class="token punctuation">(</span>keyPath<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"strokeEnd"</span></span><span class="token punctuation">)</span>
animation<span class="token punctuation">.</span>fromValue <span class="token operator">=</span> <span class="token number">0</span>
animation<span class="token punctuation">.</span>toValue <span class="token operator">=</span> <span class="token number">1</span>
animation<span class="token punctuation">.</span>duration <span class="token operator">=</span> <span class="token number">2</span>
animation<span class="token punctuation">.</span>autoreverses <span class="token operator">=</span> <span class="token boolean">true</span>
animation<span class="token punctuation">.</span>repeatCount <span class="token operator">=</span> <span class="token punctuation">.</span>infinity
layer<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>animation<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"line"</span></span><span class="token punctuation">)</span></code></pre>
<p>I made that animate from 0 (not drawn) to 1 (fully drawn) over two seconds, but also made it reverse at the end and repeat infinite times.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim">How to draw part of a solid shape using trim()</a></li><li><a href="/quick-start/swiftui/how-to-make-a-view-dismiss-itself">How to make a view dismiss itself</a></li><li><a href="/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views</a></li></ul>
-->

:::

---

<TagLinks />