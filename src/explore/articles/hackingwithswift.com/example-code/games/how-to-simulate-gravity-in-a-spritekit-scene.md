---
lang: ko-KR
title: "How to simulate gravity in a SpriteKit scene"
description: "Article(s) > How to simulate gravity in a SpriteKit scene"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to simulate gravity in a SpriteKit scene"
    - property: og:description
      content: "How to simulate gravity in a SpriteKit scene"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-simulate-gravity-in-a-spritekit-scene.html
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
  "title": "How to simulate gravity in a SpriteKit scene | Games - free Swift example code",
  "desc": "How to simulate gravity in a SpriteKit scene",
  "link": "https://hackingwithswift.com/example-code/games/how-to-simulate-gravity-in-a-spritekit-scene",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Once you’ve given all your SpriteKit nodes physics bodies, you might want to add some simulated gravity so they fall to the ground over time. This technique is also useful if you want to simulate wind (think of it like horizontal gravity), or even for making the user tilt their device to make nodes fall in different directions.</p>
<p>Gravity for your scene is configured using the <code>physicsWorld.gravity</code> property. By default it’s set to a value equal to Earth’s gravity of 9.8 meters per second, but you can change that however you want. For example, you might want to simulate someone walking on the moon where gravity is 1.62 meters per second:</p>
<pre class=" language-swift"><code class=" language-swift">physicsWorld<span class="token punctuation">.</span>gravity <span class="token operator">=</span> <span class="token class-name">CGVector</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1.62</span><span class="token punctuation">)</span></code></pre>
<p>Alternatively you can disable gravity entirely by using a zero vector:</p>
<pre class=" language-swift"><code class=" language-swift">physicsWorld<span class="token punctuation">.</span>gravity <span class="token operator">=</span> <span class="token punctuation">.</span>zero</code></pre>
<p>These changes don’t need to be permanent – you could disable gravity when the player picks up an anti-grav belt, then re-enable it after 30 seconds.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics</a></li><li><a href="/quick-start/swiftui/how-to-integrate-spritekit-using-spriteview">How to integrate SpriteKit using SpriteView</a></li><li><a href="/example-code/games/how-to-create-a-spritekit-texture-atlas-in-xcode">How to create a SpriteKit texture atlas in Xcode</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property">How to stop an SKPhysicsBody responding to physics using its dynamic property</a></li></ul>
-->

---

<TagLinks />