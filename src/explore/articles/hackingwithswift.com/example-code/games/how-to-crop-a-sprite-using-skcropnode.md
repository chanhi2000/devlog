---
lang: ko-KR
title: "How to crop a sprite using SKCropNode"
description: "Article(s) > How to crop a sprite using SKCropNode"
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
      content: "Article(s) > How to crop a sprite using SKCropNode"
    - property: og:description
      content: "How to crop a sprite using SKCropNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-crop-a-sprite-using-skcropnode.html
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
  "title": "How to crop a sprite using SKCropNode | Games - free Swift example code",
  "desc": "How to crop a sprite using SKCropNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-crop-a-sprite-using-skcropnode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.1

<!-- TODO: 작성 -->

<!-- 
<p>SpriteKit has a dedicated node type for handling cropping, and you can add things to it, position it where you want, then add it to your scene just like any other node.</p>
<p>However, its role is to crop the nodes it contains: when you assign a node to its <code>maskNode</code> property, SpriteKit looks at the colors of the mask and uses that to crop all the child nodes of the crop node. So, you might create an <code>SKCropNode</code> with five child nodes, then give it a circular mask node so that parts of the children are invisible. Everything that has a color in the mask won’t be cropped, and everything that is invisible will be.</p>
<p>Let’s look at some code. First you create and position your crop node:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> cropNode <span class="token operator">=</span> <span class="token class-name">SKCropNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cropNode<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span></code></pre>
<p>Next you set its <code>maskNode</code> property to any SpriteKit node. Using a sprite node is easy enough:</p>
<pre class=" language-swift"><code class=" language-swift">cropNode<span class="token punctuation">.</span>maskNode <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"cropMask"</span></span><span class="token punctuation">)</span></code></pre>
<p>Third you create a child node, position it inside the crop node, then add it to the crop node:</p>
<pre class=" language-swift"><code class=" language-swift">childNode <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"child"</span></span><span class="token punctuation">)</span>
childNode<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span>
childNode<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"character"</span></span>
cropNode<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>childNode<span class="token punctuation">)</span></code></pre>
<p>Finally add the crop node to your main scene:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">addChild</span><span class="token punctuation">(</span>cropNode<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid</a></li><li><a href="/example-code/games/how-to-change-a-sprites-texture-using-sktexture">How to change a sprite’s texture using SKTexture</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

---

<TagLinks />