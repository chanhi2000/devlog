---
lang: ko-KR
title: "How to use Core Graphics blend modes to draw a UIImage differently"
description: "Article(s) > How to use Core Graphics blend modes to draw a UIImage differently"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use Core Graphics blend modes to draw a UIImage differently"
    - property: og:description
      content: "How to use Core Graphics blend modes to draw a UIImage differently"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently.html
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
  "title": "How to use Core Graphics blend modes to draw a UIImage differently | Core Graphics - free Swift example code",
  "desc": "How to use Core Graphics blend modes to draw a UIImage differently",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>If you're rendering images using Core Graphics you should definitely try out some of the alternate blend modes that are available. If you've ever used Photoshop's blend modes these will be familiar: screen, luminosity, multiply and so on – these are all available right in Core Graphics.</p>
<p>To give you an idea what's possible, here's some code that takes two UIImages and draws them into one single image. The first image is drawn using normal rendering, and the second using <code>.luminosity</code>.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">let</span> img2 <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example2"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> img<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> img<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> img<span class="token punctuation">.</span>size<span class="token punctuation">)</span>

    <span class="token keyword">let</span> result <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
        <span class="token comment">// fill the background with white so that translucent colors get lighter</span>
        <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>

        img<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rect<span class="token punctuation">,</span> blendMode<span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
        img2<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rect<span class="token punctuation">,</span> blendMode<span class="token punctuation">:</span> <span class="token punctuation">.</span>luminosity<span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>How that looks depends on the source images you used – try drawing them the other way around to see what difference it makes, or try using <code>.multiply</code> rather than <code>.luminosity</code>.</p>
<p>If you're looking for a more advanced example, this function accepts an image and returns the same image with a rainbow effect to it. This is done by drawing six colored strips onto an image, then overlaying the original image using the blend mode <code>.luminosity</code> along with a slight alpha.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">addRainbow</span><span class="token punctuation">(</span>to img<span class="token punctuation">:</span> <span class="token class-name">UIImage</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIImage</span> <span class="token punctuation">{</span>
    <span class="token comment">// create a CGRect representing the full size of our input iamge</span>
    <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> img<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> img<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

    <span class="token comment">// figure out the height of one section (there are six)</span>
    <span class="token keyword">let</span> sectionHeight <span class="token operator">=</span> img<span class="token punctuation">.</span>size<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">6</span>

    <span class="token comment">// set up the colors – these are based on my trial and error</span>
    <span class="token keyword">let</span> red <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> orange <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.35</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> yellow <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.85</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.65</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> green <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> blue <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0.35</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> purple <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>red<span class="token punctuation">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> green<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> blue<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> yellow<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> purple<span class="token punctuation">]</span>

    <span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> img<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span>
        <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>

        <span class="token comment">// loop through all six colors</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> <span class="token number">6</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> color <span class="token operator">=</span> colors<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

            <span class="token comment">// figure out the rect for this section</span>
            <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> sectionHeight<span class="token punctuation">,</span> width<span class="token punctuation">:</span> rect<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> sectionHeight<span class="token punctuation">)</span>

            <span class="token comment">// draw it onto the context at the right place</span>
            color<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// now draw our input image over using Luminosity mode, with a little bit of alpha to make it fainter</span>
        img<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rect<span class="token punctuation">,</span> blendMode<span class="token punctuation">:</span> <span class="token punctuation">.</span>luminosity<span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-blend-views-together">How to blend views together</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics">How to draw a text string using Core Graphics</a></li><li><a href="/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:)</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:)</a></li><li><a href="/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect()</a></li></ul>
-->

:::

---

<TagLinks />