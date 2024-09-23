---
lang: ko-KR
title: "How to create a custom debug description"
description: "Article(s) > How to create a custom debug description"
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
      content: "Article(s) > How to create a custom debug description"
    - property: og:description
      content: "How to create a custom debug description"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-a-custom-debug-description.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create a custom debug description | Language - free Swift example code",
  "desc": "How to create a custom debug description",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-a-custom-debug-description",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift lets you print all types of data, but some data is more useful than others thanks to the <code>CustomDebugStringConvertible</code> protocol. If you write a type conforming to that protocol, you must include a <code>debugDescription</code> string property that describes how instances of this type should be represented while debugging.</p>
<p>To test this out, we’re going to create a <code>Player</code> struct that stores a player’s name. When we try to debug an instance of this struct – i.e., print it out, or hover over it in the debugger –&nbsp;we just want the player’s name to come back, for easier debugging.</p>
<p>Try adding this struct to a playground:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Player</span><span class="token punctuation">:</span> <span class="token class-name">CustomDebugStringConvertible</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"@twostraws"</span></span>

    <span class="token keyword">var</span> debugDescription<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You can now create instances of that struct and print them out to see the player name:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types</a></li><li><a href="/example-code/language/how-to-print-debug-text-in-swift">How to print debug text in Swift</a></li><li><a href="/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics</a></li><li><a href="/example-code/xcode/how-to-debug-view-layouts-in-xcode">How to debug view layouts in Xcode</a></li><li><a href="/example-code/strings/how-to-test-localization-by-setting-a-debug-locale-and-double-length-pseudolanguage">How to test localization by setting a debug locale and double length pseudolanguage</a></li></ul>
-->

:::

---

<TagLinks />