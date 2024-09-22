---
lang: ko-KR
title: "How to compare two tuples for equality"
description: "Article(s) > How to compare two tuples for equality"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to compare two tuples for equality"
    - property: og:description
      content: "How to compare two tuples for equality"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality.html
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
  "title": "How to compare two tuples for equality | Language - free Swift example code",
  "desc": "How to compare two tuples for equality",
  "link": "https://hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift 2.2 introduced the ability to compare two tuples up to arity six, which means the tuples can contain no more than six elements. To compare tuples, just use the <code>==</code> operator, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> singer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> alien <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Justin"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Bieber"</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> singer <span class="token operator">==</span> alien <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Matching tuples!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Non-matching tuples!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p><strong>Warning:</strong> if you use labels, these are not evaluated when comparing two tuples. So, the code below will print "Matching tuples!" even though the labels are different:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token punctuation">(</span>first<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> last<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> bird <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> taylor <span class="token operator">==</span> bird <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Matching tuples!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Non-matching tuples!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto">How to compare two CGRects with equalTo()</a></li><li><a href="/example-code/language/how-to-compare-dates">How to compare dates</a></li><li><a href="/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI</a></li><li><a href="/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a></li></ul>
-->

:::

---

<TagLinks />