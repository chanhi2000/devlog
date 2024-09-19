---
lang: ko-KR
title: "Remove all instances of an object from an array"
description: "Article(s) > Remove all instances of an object from an array"
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
      content: "Article(s) > Remove all instances of an object from an array"
    - property: og:description
      content: "Remove all instances of an object from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/remove-all-instances-of-an-object-from-an-array.html
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
  "title": "Remove all instances of an object from an array | Language - free Swift example code",
  "desc": "Remove all instances of an object from an array",
  "link": "https://hackingwithswift.com/example-code/language/remove-all-instances-of-an-object-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Arrays already have methods to find and remove a single item, or remove all items at once, but for removing all instances of a specific item you need to use a closure-based method called <code>removeAll(where:)</code>.</p>
<p>For example, given these numbers:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></code></pre>
<p>If we wanted to remove all instances of 2 from that array, we could use <code>removeAll(where:)</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift">numbers<span class="token punctuation">.</span>removeAll <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">}</span></code></pre>
<p>If you want to <em>return</em> the array with items removed rather than doing it in place, you’d need to write your own extension to <code>Array</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token keyword">where</span> <span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">removing</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> obj<span class="token punctuation">:</span> <span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Element</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> filter <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">!=</span> obj <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Now you can write <code>let removed = numbers.removing(2)</code> to get back <code>[1, 3, 4, 5]</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter()</a></li><li><a href="/example-code/arrays/how-to-tell-if-an-array-contains-an-object">How to tell if an array contains an object</a></li><li><a href="/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array</a></li><li><a href="/example-code/language/how-to-remove-duplicate-items-from-an-array">How to remove duplicate items from an array</a></li><li><a href="/example-code/language/how-to-run-code-when-an-object-is-destroyed">How to run code when an object is destroyed</a></li></ul>
-->

:::

---

<TagLinks />