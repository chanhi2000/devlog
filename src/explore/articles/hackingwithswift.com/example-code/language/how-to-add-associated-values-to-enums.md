---
lang: ko-KR
title: "How to add associated values to enums"
description: "Article(s) > How to add associated values to enums"
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
      content: "Article(s) > How to add associated values to enums"
    - property: og:description
      content: "How to add associated values to enums"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums.html
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
  "title": "How to add associated values to enums | Language - free Swift example code",
  "desc": "How to add associated values to enums",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Enums with associated values let you associate extra data with an enum case. This helps make them significantly more useful, because we can create gradations of cases rather than have them be absolute.</p>
<p>For example, we could create a <code>Weather</code> enum that can store various weather types: sunny, cloudy, windy, and rainy. However, that doesn’t really describe those conditions very well –&nbsp;how cloudy is it? Is it gale force winds or just a breeze? Is the rain definitely going to happen, or is it a fairly remote chance?</p>
<p>With enum associated values we can describe these situations more accurately. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Weather</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> sunny
    <span class="token keyword">case</span> <span class="token function">cloudy</span><span class="token punctuation">(</span>coverage<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token function">windy</span><span class="token punctuation">(</span>speed<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token function">rainy</span><span class="token punctuation">(</span>chance<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That leaves “sunny” as a simple value, but the other three all have associated values –&nbsp;how cloudy it is, what the speed of the wind is, and how likely the rain is.</p>
<p>Using those values we can now create instances of those enums:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> london <span class="token operator">=</span> <span class="token class-name">Weather</span><span class="token punctuation">.</span><span class="token function">cloudy</span><span class="token punctuation">(</span>coverage<span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> gusty <span class="token operator">=</span> <span class="token class-name">Weather</span><span class="token punctuation">.</span><span class="token function">windy</span><span class="token punctuation">(</span>speed<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> guaranteedRain <span class="token operator">=</span> <span class="token class-name">Weather</span><span class="token punctuation">.</span><span class="token function">rainy</span><span class="token punctuation">(</span>chance<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-add-raw-values-to-enums">How to add raw values to enums</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li></ul>
-->

:::

---

<TagLinks />