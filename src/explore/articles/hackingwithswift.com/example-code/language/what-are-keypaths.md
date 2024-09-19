---
lang: ko-KR
title: "What are keypaths?"
description: "Article(s) > What are keypaths?"
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
      content: "Article(s) > What are keypaths?"
    - property: og:description
      content: "What are keypaths?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-keypaths.html
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
  "title": "What are keypaths? | Language - free Swift example code",
  "desc": "What are keypaths?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-keypaths",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift keypaths are a way of storing uninvoked references to properties, which is a fancy way of saying they refer to a property itself rather than to that property’s value.</p>
<p>Here’s an example struct storing a name and maximum warp speed of a starship:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Starship</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> maxWarp<span class="token punctuation">:</span> <span class="token class-name">Double</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> voyager <span class="token operator">=</span> <span class="token class-name">Starship</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Voyager"</span></span><span class="token punctuation">,</span> maxWarp<span class="token punctuation">:</span> <span class="token number">9.975</span><span class="token punctuation">)</span></code></pre>
<p>Keypaths let us refer to the <code>name</code> or <code>maxWarp</code> properties without reading them directly, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> nameKeyPath <span class="token operator">=</span> <span class="token punctuation">\</span><span class="token class-name">Starship</span><span class="token punctuation">.</span>name
<span class="token keyword">let</span> warpKeyPath <span class="token operator">=</span> <span class="token punctuation">\</span><span class="token class-name">Starship</span><span class="token punctuation">.</span>maxWarp</code></pre>
<p>If you want to read those keypaths on a specific starship, Swift will return you the actual values attached to those properties:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span>voyager<span class="token punctuation">[</span>keyPath<span class="token punctuation">:</span> nameKeyPath<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>voyager<span class="token punctuation">[</span>keyPath<span class="token punctuation">:</span> warpKeyPath<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>
<p>In practice, this means you can refer to the same property in multiple places all using the same keypath – and if you decide you want a different property you can change it in just one place.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-a-tuple">What is a tuple?</a></li><li><a href="/example-code/language/what-is-the-ternary-operator">What is the ternary operator?</a></li><li><a href="/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced()</a></li><li><a href="/example-code/language/tips-for-android-developers-switching-to-swift">Tips for Android developers switching to Swift</a></li><li><a href="/example-code/language/how-to-convert-a-string-to-a-double">How to convert a string to a double</a></li></ul>
-->

:::

---

<TagLinks />