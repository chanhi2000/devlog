---
lang: ko-KR
title: "How to specify default values for dictionary keys"
description: "Article(s) > How to specify default values for dictionary keys"
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
      content: "Article(s) > How to specify default values for dictionary keys"
    - property: og:description
      content: "How to specify default values for dictionary keys"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-specify-default-values-for-dictionary-keys.html
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
  "title": "How to specify default values for dictionary keys | Language - free Swift example code",
  "desc": "How to specify default values for dictionary keys",
  "link": "https://hackingwithswift.com/example-code/language/how-to-specify-default-values-for-dictionary-keys",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Reading a dictionary key returns an option value by default, because the key you asked for might not exist. However, there’s a slightly different subscript you can call that eliminates optionality: when you read a key, you can also provide a default value to use if the key doesn’t exist.</p>
<p>For example, here’s a dictionary representing the high scores in a game:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ed Sheeran"</span></span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">]</span></code></pre>
<p>If we wanted to read the score of Adele Adkins, we’d get back <code>nil</code> because she doesn’t have a score. And if we tried to read any of the values that <em>do</em> have keys we’d still get back an optional integer.</p>
<p>Fortunately, if you provide a default value while reading a key you can be guaranteed you’ll always get a value back, so the return value for our <code>scores</code> dictionary will always be a real integer rather than an optional.</p>
<p>So, here we can read Adele’s score from the dictionary, or give it a default value of 0 if the key doesn’t exist:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> adeleScore <span class="token operator">=</span> scores<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Adele Adkins"</span></span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">]</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable</a></li><li><a href="/example-code/strings/how-to-specify-floating-point-precision-in-a-string">How to specify floating-point precision in a string</a></li><li><a href="/quick-start/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports">How to specify the Dynamic Type sizes a view supports</a></li><li><a href="/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder">How to specify your own date format with Codable and JSONEncoder</a></li><li><a href="/example-code/language/how-to-transform-a-dictionary-using-mapvalues">How to transform a dictionary using mapValues()</a></li></ul>
-->

:::

---

<TagLinks />