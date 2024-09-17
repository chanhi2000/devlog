---
lang: ko-KR
title: "How to make a sprite follow a path"
description: "Article(s) > How to make a sprite follow a path"
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
      content: "Article(s) > How to make a sprite follow a path"
    - property: og:description
      content: "How to make a sprite follow a path"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-make-a-sprite-follow-a-path.html
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
  "title": "How to make a sprite follow a path | Games - free Swift example code",
  "desc": "How to make a sprite follow a path",
  "link": "https://hackingwithswift.com/example-code/games/how-to-make-a-sprite-follow-a-path",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>SpriteKit makes it easy for a node to follow a path we specify, and you can use it to make rockets take off, enemies to zig zag around a maze, and more.</p>
<p>First, create a <code>UIBezierPath</code> specifying the shape of your path: </p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">addLine</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will move directly up.</p>
<p>Next, turn that into an <code>SKAction</code> using <code>SKAction.follow()</code>. You can specify whether this path is an <em>offset</em> or contains absolute coordinates –&nbsp;we used X:0 Y:0 above, so if we request offset movement that will be equivalent to the node’s starting position.</p>
<p>The <code>follow()</code> method also accepts parameters for speed (how fast the movement should happen), and whether the node should orient itself to the path. The orientation option is particularly neat: your node will turn itself so that it’s always facing towards the path.</p>
<p>Try this code to make a node follow a path with path orientation enabled:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> move <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">follow</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>cgPath<span class="token punctuation">,</span> asOffset<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> orientToPath<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> speed<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span>
node<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/example-code/games/how-to-change-a-sprites-texture-using-sktexture">How to change a sprite’s texture using SKTexture</a></li><li><a href="/example-code/games/how-to-crop-a-sprite-using-skcropnode">How to crop a sprite using SKCropNode</a></li><li><a href="/quick-start/swiftui/how-to-draw-a-custom-path">How to draw a custom path</a></li></ul>
-->

---

<TagLinks />