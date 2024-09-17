---
lang: ko-KR
title: "How to add pixel-perfect physics to an SKSpriteNode"
description: "Article(s) > How to add pixel-perfect physics to an SKSpriteNode"
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
      content: "Article(s) > How to add pixel-perfect physics to an SKSpriteNode"
    - property: og:description
      content: "How to add pixel-perfect physics to an SKSpriteNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode.html
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
  "title": "How to add pixel-perfect physics to an SKSpriteNode | Games - free Swift example code",
  "desc": "How to add pixel-perfect physics to an SKSpriteNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Pixel-perfect physics is just one line of code in SpriteKit. Don't believe me? Here you go:</p>
<pre class=" language-swift"><code class=" language-swift">player <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"player"</span></span><span class="token punctuation">)</span>
player<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">384</span><span class="token punctuation">)</span>
player<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>texture<span class="token punctuation">:</span> player<span class="token punctuation">.</span>texture<span class="token operator">!</span><span class="token punctuation">,</span> size<span class="token punctuation">:</span> player<span class="token punctuation">.</span>size<span class="token punctuation">)</span></code></pre>
<p>That last line is the one that does the magic: SpriteKit will use the alpha values of your sprite (i.e., the transparent pixels) to figure out which parts should be part of a collision.</p>
<p>As you might imagine, pixel-perfect collision detection is significantly slower than using rectangles or circles, so you should use it carefully.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode</a></li><li><a href="/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property">How to stop an SKPhysicsBody responding to physics using its dynamic property</a></li><li><a href="/example-code/games/how-to-add-a-fragment-shader-to-an-skspritenode-using-skshader">How to add a fragment shader to an SKSpriteNode using SKShader</a></li><li><a href="/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics</a></li><li><a href="/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode">How to made an SKSpriteNode render faster using blendMode</a></li></ul>
-->

---

<TagLinks />