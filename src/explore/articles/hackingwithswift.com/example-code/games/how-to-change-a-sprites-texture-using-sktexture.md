---
lang: ko-KR
title: "How to change a sprite’s texture using SKTexture"
description: "Article(s) > How to change a sprite’s texture using SKTexture"
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
      content: "Article(s) > How to change a sprite’s texture using SKTexture"
    - property: og:description
      content: "How to change a sprite’s texture using SKTexture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture.html
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
  "title": "How to change a sprite’s texture using SKTexture | Games - free Swift example code",
  "desc": "How to change a sprite’s texture using SKTexture",
  "link": "https://hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.1

<!-- TODO: 작성 -->

<!-- 
<p>Although you can create an <code>SKSpriteNode</code> from a color and size, most folks create them from textures –&nbsp;image data stored in an asset catalog or texture atlas. SpriteKit’s textures are handled using their own class called <code>SKTexture</code>, and you can load them individually then use them to change the texture used to draw a sprite.</p>
<p>At its most basic, you can change a sprite’s texture like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> texture1 <span class="token operator">=</span> <span class="token class-name">SKTexture</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"newTexture"</span></span><span class="token punctuation">)</span>
someSprite<span class="token punctuation">.</span>texture <span class="token operator">=</span> texture1</code></pre>
<p>However, that only works if your sprite and the texture are the same size –&nbsp;if they don’t, the texture will get squashed to fit the available space.</p>
<p>If the sprite and texture are <em>different</em> sizes then a better thing to do is use the <code>setTexture()</code> action, passing in true for its <code>resize</code> parameter like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> texture2 <span class="token operator">=</span> <span class="token class-name">SKTexture</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"newTexture"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">setTexture</span><span class="token punctuation">(</span>texture2<span class="token punctuation">,</span> resize<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
someSprite<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span></code></pre>
<p>That will switch the texture over, then grow the sprite to fit the new texture size.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid</a></li><li><a href="/example-code/games/how-to-create-a-spritekit-texture-atlas-in-xcode">How to create a SpriteKit texture atlas in Xcode</a></li><li><a href="/example-code/games/how-to-crop-a-sprite-using-skcropnode">How to crop a sprite using SKCropNode</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path</a></li></ul>
-->

---

<TagLinks />