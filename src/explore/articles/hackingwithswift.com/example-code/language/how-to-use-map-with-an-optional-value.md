---
lang: ko-KR
title: "How to use map() with an optional value"
description: "Article(s) > How to use map() with an optional value"
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
      content: "Article(s) > How to use map() with an optional value"
    - property: og:description
      content: "How to use map() with an optional value"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-map-with-an-optional-value.html
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
  "title": "How to use map() with an optional value | Language - free Swift example code",
  "desc": "How to use map() with an optional value",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-map-with-an-optional-value",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>The <code>map()</code> method of optionals allows you to transform the optional if it has a value, or do nothing if it is empty. This makes for shorter and more expressive code than doing a regular unwrap, and doesn’t require you to change your data type.</p>
<p>For example, if you had an optional string like this one:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"twostraws"</span></span></code></pre>
<p>You could use the <code>map()</code> method to transform it safely, without having to check and unwrap it –&nbsp;if it were nil, the <code>map()</code> call would do nothing.</p>
<p>For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> twitterName <span class="token operator">=</span> name<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">"@</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token short-argument">$0</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span> <span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>twitterName<span class="token punctuation">)</span></code></pre>
<p>That will print <code>@twostraws</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference?</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more</a></li><li><a href="/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift?</a></li><li><a href="/example-code/language/how-to-use-flatmap-with-an-optional-value">How to use flatMap() with an optional value</a></li></ul>
-->

:::

---

<TagLinks />