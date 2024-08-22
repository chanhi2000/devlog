---
lang: ko-KR
title: "How to sort an array using sort()"
description: "Article(s) > How to sort an array using sort()"
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
      content: "Article(s) > How to sort an array using sort()"
    - property: og:description
      content: "How to sort an array using sort()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.html
date: 2019-06-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Array - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/arrays/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to sort an array using sort() | Array - free Swift example code",
  "desc": "How to sort an array using sort()",
  "link": "https://www.hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<VidStack src="youtube/o_zYsGu2Z8U" />

<!-- 
<p>All arrays have built-in <code>sort()</code> and <code>sorted()</code> methods that can be used to sort the array, but they are subtly different.</p>
<p>If the array is simple you can just call <code>sort()</code> directly, like this, to sort an array in place:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Jemima"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Peter"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"David"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Kelly"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Isabella"</span></span><span class="token punctuation">]</span>
names<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>If you have a custom struct or class and want to sort them arbitrarily, you should call <code>sort()</code> using a trailing closure that sorts on a field you specify. Here's an example using an array of custom structs that sorts on a particular property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> firstName<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">User</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Jemima"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">User</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Peter"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">User</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"David"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">User</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Kelly"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">User</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Isabella"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

users<span class="token punctuation">.</span>sort <span class="token punctuation">{</span>
    <span class="token short-argument">$0</span><span class="token punctuation">.</span>firstName <span class="token operator">&lt;</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>firstName
<span class="token punctuation">}</span></code></pre>
<p>If you want to return a sorted array rather than sort it in place, use <code>sorted()</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> sortedUsers <span class="token operator">=</span> users<span class="token punctuation">.</span>sorted <span class="token punctuation">{</span>
    <span class="token short-argument">$0</span><span class="token punctuation">.</span>firstName <span class="token operator">&lt;</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>firstName
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-reverse-sort-an-array">How to reverse sort an array</a></li><li><a href="/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable</a></li><li><a href="/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a></li></ul>
-->

:::

---

<TagLinks />