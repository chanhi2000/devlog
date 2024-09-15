---
lang: ko-KR
title: "How to convert between camel case and snake case with Codable and keyEncodingStrategy"
description: "Article(s) > How to convert between camel case and snake case with Codable and keyEncodingStrategy"
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
      content: "Article(s) > How to convert between camel case and snake case with Codable and keyEncodingStrategy"
    - property: og:description
      content: "How to convert between camel case and snake case with Codable and keyEncodingStrategy"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-between-camel-case-and-snake-case-with-codable-and-keyencodingstrategy.html
date: 2019-10-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert between camel case and snake case with Codable and keyEncodingStrategy | System - free Swift example code",
  "desc": "How to convert between camel case and snake case with Codable and keyEncodingStrategy",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-between-camel-case-and-snake-case-with-codable-and-keyencodingstrategy",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Most Swift developers use camel case for naming properties, which means we start with a lowercase letter then capitalize the first letter of second and subsequent words: <code>numberOfUsers</code> or <code>powerLevel</code>. On the other hand, many web APIs prefer snake case, written as <code>number_of_users</code> and <code>power_level</code>, so if you need to convert camel case to snake case you need to use the <code>keyEncodingStrategy</code> of <code>JSONEncoder</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
encoder<span class="token punctuation">.</span>keyEncodingStrategy <span class="token operator">=</span> <span class="token punctuation">.</span>convertToSnakeCase

<span class="token keyword">if</span> <span class="token keyword">let</span> encoded <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> encoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>yourData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// continue with encoded data</span>
<span class="token punctuation">}</span></code></pre>
<p>With that set, Swift can convert property names as part of the encoding process, which makes <code>Codable</code> much easier to use. </p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />