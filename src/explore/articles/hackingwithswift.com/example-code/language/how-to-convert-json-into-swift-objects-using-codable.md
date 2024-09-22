---
lang: ko-KR
title: "How to convert JSON into Swift objects using Codable"
description: "Article(s) > How to convert JSON into Swift objects using Codable"
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
      content: "Article(s) > How to convert JSON into Swift objects using Codable"
    - property: og:description
      content: "How to convert JSON into Swift objects using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-json-into-swift-objects-using-codable.html
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
  "title": "How to convert JSON into Swift objects using Codable | Language - free Swift example code",
  "desc": "How to convert JSON into Swift objects using Codable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-json-into-swift-objects-using-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s <code>Codable</code> protocol makes it easy to convert JSON to native Swift structs and classes –&nbsp;just design data types that hold the same keys and values as your JSON, then use <code>JSONDecoder</code> to convert.</p>
<p>Here’s some example JSON we can work with:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> jsonString <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"""
[
    {
        "name": "Taylor Swift",
        "age": 26
    },
    {
        "name": "Justin Bieber",
        "age": 25
    }
]
"""</span></span>

<span class="token keyword">let</span> jsonData <span class="token operator">=</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">.</span>utf8<span class="token punctuation">)</span></code></pre>
<p>That stores two people in an array, each with a name and an age.</p>
<p>We need to make a matching Swift struct that can hold those fields. The only requirement <code>Codable</code> has is that all the properties inside the struct also conform to <code>Codable</code> –&nbsp;in our case that’s a string and an integer, so we’re all set.</p>
<p>Start by adding this type:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span></code></pre>
<p>Now we can go ahead and decide the JSON data into an array of that <code>Person</code> struct. This is a throwing operation, so you need to use <code>try</code>. Here’s some example code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> people <span class="token operator">=</span> <span class="token keyword">try</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">Person</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> jsonData<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That will result in <code>people</code> storing the two items from the JSON, except now they are parsed into Swift types so we can refer to them in a type-safe way.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a></li><li><a href="/example-code/language/how-to-format-json-using-codable-and-pretty-printing">How to format JSON using Codable and pretty printing</a></li><li><a href="/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable</a></li><li><a href="/quick-start/swiftui/observable-objects-environment-objects-and-published">Observable objects, environment objects, and @Published</a></li></ul>
-->

:::

---

<TagLinks />