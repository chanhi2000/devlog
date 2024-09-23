---
lang: ko-KR
title: "How to find the difference between two arrays"
description: "Article(s) > How to find the difference between two arrays"
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
      content: "Article(s) > How to find the difference between two arrays"
    - property: og:description
      content: "How to find the difference between two arrays"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-find-the-difference-between-two-arrays.html
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
  "title": "How to find the difference between two arrays | Language - free Swift example code",
  "desc": "How to find the difference between two arrays",
  "link": "https://hackingwithswift.com/example-code/language/how-to-find-the-difference-between-two-arrays",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have two arrays that contain similar items and want to find out their differences – i.e., which items exist in one or the other, but not both – the easiest thing to do is use a <code>Set</code>. Sets have a <code>symmetricDifference()</code> method that does exactly this, so you just need to convert both arrays to a set, then convert the result back into an array.</p>
<p>Here’s an extension to make it easier:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token keyword">where</span> <span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Hashable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">difference</span><span class="token punctuation">(</span>from other<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Element</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Element</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> thisSet <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> otherSet <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>thisSet<span class="token punctuation">.</span><span class="token function">symmetricDifference</span><span class="token punctuation">(</span>otherSet<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>And here’s some example code you can use to try it out:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> names1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ringo"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> names2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Ringo"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"George"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> difference <span class="token operator">=</span> names1<span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> names2<span class="token punctuation">)</span></code></pre>
<p>That will set <code>difference</code> to be <code>["George", "John"]</code>, because those are the two names that only appear once in either array.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a></li><li><a href="/example-code/language/how-to-find-the-minimum-of-two-numbers">How to find the minimum of two numbers</a></li><li><a href="/example-code/language/how-to-find-the-maximum-of-two-numbers">How to find the maximum of two numbers</a></li><li><a href="/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints</a></li></ul>
-->

:::

---

<TagLinks />