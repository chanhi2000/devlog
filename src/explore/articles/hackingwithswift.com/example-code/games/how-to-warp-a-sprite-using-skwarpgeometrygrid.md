---
lang: ko-KR
title: "How to warp a sprite using SKWarpGeometryGrid"
description: "Article(s) > How to warp a sprite using SKWarpGeometryGrid"
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
  - ios-7.1
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to warp a sprite using SKWarpGeometryGrid"
    - property: og:description
      content: "How to warp a sprite using SKWarpGeometryGrid"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to warp a sprite using SKWarpGeometryGrid | Games - free Swift example code",
  "desc": "How to warp a sprite using SKWarpGeometryGrid",
  "link": "https://hackingwithswift.com/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.1

<!-- TODO: 작성 -->

<!-- 
<p>SpriteKit allows you to warp sprites by dividing them up into small squares then stretching those squares into different positions. The result is that you can warp a sprite in various ways –&nbsp;you can effectively pull different parts of it however you want.</p>
<p>There’s a cost to doing this: a sprite is effectively one quad by default, which is a fancy way of saying it’s a rectangle. Behind the scenes that becomes two triangles, pieced together to look like a single rectangle. If we split that single sprite into two rows and two columns, you end up with four times as many triangles; if you split it into 10 rows and 10 columns, you end up with a huge number of triangles just to represent one tiny sprite –&nbsp;your game will slow down massively.</p>
<p>Helpfully, SpriteKit employs a technique called automatic quad subdivision: even though you create two rows and two columns, it will automatically split them further if it needs to, allowing to warp transformation to look silky smooth.</p>
<p>Warping a sprite is done in two steps: first you specify source points that describe where various points of your sprite are in their natural, unwarped state, and second you specify destination points that move those source points somewhere else. From that SpriteKit calculates the warp, bending the texture neatly to fit.</p>
<p>We’re going to use a three by three grid here, so we need nine sets of points inside an array. These must all be specified using the <code>vector_float2</code> type, and be done in a precise order.</p>
<p>Try adding these source points as a property for your class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// bottom row: left, center, right</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// middle row: left, center, right</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// top row: left, center, right</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span></code></pre>
<p>I added comments in there so you can hopefully see how all nine points are positioned. For example, the middle point is X: 0.5 Y: 0.5, meaning that it’s in the center of both axes. Having your source points as a property is a good idea if you plan to use them a lot –&nbsp;it’s easiest to take a copy of those points then make small changes than to keep setting them up from scratch.</p>
<p>We’re also going to create a warp geometry that uses the <code>src</code> positions twice: the same for before and after. This means it will look identical to a sprite without a warp geometry attached, but it also means that when we apply a new geometry with the same number of rows and columns SpriteKit will be able to animate the change.</p>
<p>Here’s the code for that:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> warp <span class="token operator">=</span> <span class="token class-name">SKWarpGeometryGrid</span><span class="token punctuation">(</span>columns<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> rows<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> sourcePositions<span class="token punctuation">:</span> src<span class="token punctuation">,</span> destinationPositions<span class="token punctuation">:</span> src<span class="token punctuation">)</span>
yourSprite<span class="token punctuation">.</span>warpGeometry <span class="token operator">=</span> warp</code></pre>
<p>So far we’ve defined the source points on our warp geometry and applied it to a sprite, but we haven’t actually done the important part: creating a warp animation. To make that happen we’re going to take a copy of the source points, change any points we want, then wrap that in a new <code>SKWarpGeometryGrid</code> and use it with an animation.</p>
<p>You can specify multiple warp animations to have iOS cycle through them, and as a result the animation <em>timing</em> is actually an array of times relative to the start of the animation. To demonstrate this process, we’re going to make a small change to our source points, take a copy of the original warp geometry we set earlier, then animate to the new points and back to the old points over one second.</p>
<p>Add this code to your scene:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// take a copy of our source points</span>
<span class="token keyword">var</span> dst <span class="token operator">=</span> src

<span class="token comment">// pull the two bottom edges of the sprite downwards    </span>
dst<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">)</span>
dst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">vector_float2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">)</span>

<span class="token comment">// create a new warp geometry by mapping from src to dst</span>
<span class="token keyword">let</span> newWarp <span class="token operator">=</span> <span class="token class-name">SKWarpGeometryGrid</span><span class="token punctuation">(</span>columns<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> rows<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> sourcePositions<span class="token punctuation">:</span> src<span class="token punctuation">,</span> destinationPositions<span class="token punctuation">:</span> dst<span class="token punctuation">)</span>

<span class="token comment">// pull out the existing warp geometry so we have something to animate back to</span>
<span class="token keyword">let</span> oldWarp <span class="token operator">=</span> spaceship<span class="token punctuation">.</span>warpGeometry<span class="token operator">!</span>

<span class="token comment">// try to create an SKAction with these two warps; each will animate over 0.5 seconds</span>
<span class="token keyword">if</span> <span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withWarps<span class="token punctuation">:</span> <span class="token punctuation">[</span>newWarp<span class="token punctuation">,</span> oldWarp<span class="token punctuation">]</span><span class="token punctuation">,</span> times<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// run it on the sprite</span>
    yourSprite<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-change-a-sprites-texture-using-sktexture">How to change a sprite’s texture using SKTexture</a></li><li><a href="/example-code/games/how-to-crop-a-sprite-using-skcropnode">How to crop a sprite using SKCropNode</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

---

<TagLinks />