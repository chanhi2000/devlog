---
lang: ko-KR
title: "How to use map() to transform an array"
description: "Article(s) > How to use map() to transform an array"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use map() to transform an array"
    - property: og:description
      content: "How to use map() to transform an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-map-to-transform-an-array.html
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
  "title": "How to use map() to transform an array | Language - free Swift example code",
  "desc": "How to use map() to transform an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-map-to-transform-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>The <code>map()</code> method allows us to transform arrays (and indeed any kind of collection) using a transformation closure we specify. The return value will be an array of the same size, containing your transformed elements.</p>
<p>For example, given the following array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></code></pre>
<p>We could use <code>map()</code> to transform those numbers so they are doubled, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> doubled <span class="token operator">=</span> numbers<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token punctuation">}</span></code></pre>
<p>You can map whatever you want. For example, you could convert an array of strings to be uppercase:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> strings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"George"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ringo"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> uppercased <span class="token operator">=</span> strings<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span><span class="token function">uppercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array</a></li><li><a href="/example-code/language/how-to-transform-a-dictionary-using-mapvalues">How to transform a dictionary using mapValues()</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more</a></li><li><a href="/quick-start/swiftui/how-to-show-a-map-view">How to show a Map view</a></li></ul>
-->

:::

---

<TagLinks />