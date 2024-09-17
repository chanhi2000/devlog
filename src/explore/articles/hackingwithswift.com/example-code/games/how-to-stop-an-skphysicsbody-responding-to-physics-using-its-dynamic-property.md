---
lang: ko-KR
title: "How to stop an SKPhysicsBody responding to physics using its dynamic property"
description: "Article(s) > How to stop an SKPhysicsBody responding to physics using its dynamic property"
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
      content: "Article(s) > How to stop an SKPhysicsBody responding to physics using its dynamic property"
    - property: og:description
      content: "How to stop an SKPhysicsBody responding to physics using its dynamic property"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property.html
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
  "title": "How to stop an SKPhysicsBody responding to physics using its dynamic property | Games - free Swift example code",
  "desc": "How to stop an SKPhysicsBody responding to physics using its dynamic property",
  "link": "https://hackingwithswift.com/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Enabling physics in SpriteKit is just one line of code, but sometimes you want your physics to be a little more nuanced. For example, your player might have circle physics and should respond to gravity, whereas walls might have rectangle physics and not respond to gravity – they are there to be bounced off, but nothing more.</p>
<p>This problem is solved in SpriteKit by using the <code>isDynamic</code> property. It's <code>true</code> by default, which means that your objects respond to the world's environment as you would expect, but if you set it to be <code>false</code> then you get an object that has active physics but doesn't move as a result of those physics.</p>
<p>Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> wall <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"wall"</span></span><span class="token punctuation">)</span>
wall<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
wall<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>circleOfRadius<span class="token punctuation">:</span> wall<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">)</span>
wall<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>isDynamic <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">addChild</span><span class="token punctuation">(</span>wall<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode</a></li><li><a href="/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics</a></li><li><a href="/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode</a></li><li><a href="/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a></li></ul>
-->

---

<TagLinks />