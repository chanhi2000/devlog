---
lang: ko-KR
title: "How to use Codable to load and save custom data types"
description: "Article(s) > How to use Codable to load and save custom data types"
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
      content: "Article(s) > How to use Codable to load and save custom data types"
    - property: og:description
      content: "How to use Codable to load and save custom data types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types.html
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
  "title": "How to use Codable to load and save custom data types | Language - free Swift example code",
  "desc": "How to use Codable to load and save custom data types",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift 4 introduced a new way to load and save data, replacing the old <code>NSCoding</code> protocol with something that’s more flexible, safer, and easier to write: <code>Codable</code>.</p>
<p>Unless you want a custom implementation, just making your data type conform to <code>Codable</code> is all it takes to allow it to be saved to property list XML or JSON.</p>
<p>For example, here’s a custom struct that conforms to <code>Codable</code>, along with a few instances of it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Language</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> version<span class="token punctuation">:</span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> swift <span class="token operator">=</span> <span class="token class-name">Language</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">,</span> version<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> php <span class="token operator">=</span> <span class="token class-name">Language</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"PHP"</span></span><span class="token punctuation">,</span> version<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> perl <span class="token operator">=</span> <span class="token class-name">Language</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Perl"</span></span><span class="token punctuation">,</span> version<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">)</span></code></pre>
<p>You can see I've marked the Language struct as conforming to the <code>Codable</code> protocol – there’s no need to add custom loading and saving code like we had with <code>NSCoding</code>.</p>
<p>With that one tiny conformance, we can convert it to a <code>Data</code> representation of JSON like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> encoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">let</span> encoded <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> encoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>swift<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// save `encoded` somewhere</span>
<span class="token punctuation">}</span></code></pre>
<p>Swift will automatically encode all properties inside your data type – you don't need to do anything.</p>
<p>To prove that everything is working well, we can try converting that <code>Data</code> object into a string so we can print it out, then decode it back into a new Language instance that we can read from:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token keyword">let</span> encoded <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> encoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>swift<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> encoded<span class="token punctuation">,</span> encoding<span class="token punctuation">:</span> <span class="token punctuation">.</span>utf8<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> decoded <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">Language</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> encoded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>decoded<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Notice how decoding doesn't require a typecast – you provide the data type name as its first parameter, so Swift infers the return type from there.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable">How to save and load NavigationStack paths using Codable</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />