---
lang: ko-KR
title: "How to multiply an int and a double"
description: "Article(s) > How to multiply an int and a double"
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
      content: "Article(s) > How to multiply an int and a double"
    - property: og:description
      content: "How to multiply an int and a double"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-multiply-an-int-and-a-double.html
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
  "title": "How to multiply an int and a double | Language - free Swift example code",
  "desc": "How to multiply an int and a double",
  "link": "https://hackingwithswift.com/example-code/language/how-to-multiply-an-int-and-a-double",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s type safety means code to multiply an integer and a double won’t compile:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">4</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">5.0</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> a <span class="token operator">*</span> b</code></pre>
<p>You can either fix this by forcing your integer to be a double:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> d<span class="token punctuation">:</span> <span class="token class-name">Double</span> <span class="token operator">=</span> <span class="token number">4</span>
<span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token number">5.0</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> a <span class="token operator">*</span> b</code></pre>
<p>Alternatively you can convert your integer to a double as needed:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token number">4</span>
<span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">5.0</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">*</span> b</code></pre>
<p>If this situation really annoys you and you want it solved fully, add this custom <code>*</code> function:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token operator">*</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">Double</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>lhs<span class="token punctuation">)</span> <span class="token operator">*</span> rhs
<span class="token punctuation">}</span></code></pre>
<p>That will multiply an integer on the left with a double on the right, returning a double containing the result.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />