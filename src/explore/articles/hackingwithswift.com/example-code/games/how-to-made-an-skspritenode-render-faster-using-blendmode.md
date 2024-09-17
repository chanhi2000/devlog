---
lang: ko-KR
title: "How to made an SKSpriteNode render faster using blendMode"
description: "Article(s) > How to made an SKSpriteNode render faster using blendMode"
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
      content: "Article(s) > How to made an SKSpriteNode render faster using blendMode"
    - property: og:description
      content: "How to made an SKSpriteNode render faster using blendMode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode.html
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
  "title": "How to made an SKSpriteNode render faster using blendMode | Games - free Swift example code",
  "desc": "How to made an SKSpriteNode render faster using blendMode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>All SpriteKit nodes have a <code>blendMode</code> property that describes how they should be drawn to the screen. The default value is <code>.alpha</code>, which means the sprite should be drawn so that its alpha transparency is respected –&nbsp;any parts that are translucent get blended with the existing background color at that point, and any fully transparent parts are not drawn at all.</p>
<p>Alpha drawing is obviously a sensible default, because it allows us to render sprites with irregular shapes and holes. However, if you know for a fact that your sprite is completely rectangular and has no holes then using <code>.alpha</code> is wasteful – SpriteKit is forced to do alpha blending even though it isn’t required. This is particularly common with background images: if they are designed to fill the full screen, there’s no need to make them drawing using <code>.alpha</code>. </p>
<p>To fix this –&nbsp;and make such drawing significantly faster – change the blend mode of opaque sprites to be <code>.replace</code>, which ignores any alpha in the texture:</p>
<pre class=" language-swift"><code class=" language-swift">background<span class="token punctuation">.</span>blendMode <span class="token operator">=</span> <span class="token punctuation">.</span>replace</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode</a></li><li><a href="/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode</a></li><li><a href="/example-code/games/how-to-add-a-fragment-shader-to-an-skspritenode-using-skshader">How to add a fragment shader to an SKSpriteNode using SKShader</a></li><li><a href="/example-code/games/how-to-color-an-skspritenode-using-colorblendfactor">How to color an SKSpriteNode using colorBlendFactor</a></li><li><a href="/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow">How to render shadows using NSShadow and setShadow()</a></li></ul>
-->

---

<TagLinks />