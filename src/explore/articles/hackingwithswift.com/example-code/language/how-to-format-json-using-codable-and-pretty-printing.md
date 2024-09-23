---
lang: ko-KR
title: "How to format JSON using Codable and pretty printing"
description: "Article(s) > How to format JSON using Codable and pretty printing"
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
      content: "Article(s) > How to format JSON using Codable and pretty printing"
    - property: og:description
      content: "How to format JSON using Codable and pretty printing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-format-json-using-codable-and-pretty-printing.html
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
  "title": "How to format JSON using Codable and pretty printing | Language - free Swift example code",
  "desc": "How to format JSON using Codable and pretty printing",
  "link": "https://hackingwithswift.com/example-code/language/how-to-format-json-using-codable-and-pretty-printing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When you use <code>JSONEncoder</code> and <code>Codable</code> to create JSON from your Swift data, it comes out in a compressed format by default –&nbsp;it has all its excess whitespace removed. This makes it efficient for transferring over the network, but hard to debug because it’s just a big jumble of words.</p>
<p>For debugging purposes, it’s a good idea to enable pretty printing for your encoded JSON, which will tell <code>JSONEncoder</code> to separate everything using line breaks and spaces so you can read it more easily.</p>
<p>To make this happen, set the <code>outputFormatting</code> property of your JSON encoder to be <code>.prettyPrinted</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
encoder<span class="token punctuation">.</span>outputFormatting <span class="token operator">=</span> <span class="token punctuation">.</span>prettyPrinted</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />