---
lang: ko-KR
title: "What are KeyValuePairs?"
description: "Article(s) > What are KeyValuePairs?"
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
      content: "Article(s) > What are KeyValuePairs?"
    - property: og:description
      content: "What are KeyValuePairs?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-keyvaluepairs.html
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
  "title": "What are KeyValuePairs? | Language - free Swift example code",
  "desc": "What are KeyValuePairs?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-keyvaluepairs",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p><code>KeyValuePairs</code>, somewhat confusingly known as <code>DictionaryLiteral</code> before Swift 5.0, is a useful data type that provides dictionary-like functionality with a handful of benefits:</p>
<ul>
<li>Your keys don’t need to conform to <code>Hashable</code>.</li>
<li>You can add items with duplicate keys.</li>
<li>The order in which you add items is preserved.</li>
</ul>
<p>However, because <code>KeyValuePairs</code> doesn’t require its keys to be hashable, you don’t get the fast key look up of a regular dictionary –&nbsp;it’s O(<em>n</em>) rather than O(1) if you like Big O notation. Instead, you access them like an array, using numerical indexes.</p>
<p>As an example, here’s a <code>KeyValuePairs</code> instance holding the name of a singer:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> singer<span class="token punctuation">:</span> <span class="token class-name">KeyValuePairs</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"firstName"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"lastName"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">]</span></code></pre>
<p>If we wanted to access the key name and value for the first item, we’d write something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">singer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>key</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is set to </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">singer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span></code></pre>
<p>Even better, because <code>KeyValuePairs</code> inherits from the <code>Sequence</code> protocol we can loop over all keys and values, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> value <span class="token keyword">in</span> singer <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">value<span class="token punctuation">.</span>key</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is set to </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">value<span class="token punctuation">.</span>value</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-a-tuple">What is a tuple?</a></li><li><a href="/example-code/language/what-are-sets">What are sets?</a></li><li><a href="/example-code/language/what-are-static-methods-and-variables">What are static methods and variables?</a></li><li><a href="/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence?</a></li><li><a href="/example-code/language/how-to-make-optional-protocol-methods">How to make optional protocol methods</a></li></ul>
-->

:::

---

<TagLinks />