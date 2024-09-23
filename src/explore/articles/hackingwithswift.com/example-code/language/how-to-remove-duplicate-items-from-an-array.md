---
lang: ko-KR
title: "How to remove duplicate items from an array"
description: "Article(s) > How to remove duplicate items from an array"
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
      content: "Article(s) > How to remove duplicate items from an array"
    - property: og:description
      content: "How to remove duplicate items from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-remove-duplicate-items-from-an-array.html
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
  "title": "How to remove duplicate items from an array | Language - free Swift example code",
  "desc": "How to remove duplicate items from an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-remove-duplicate-items-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>There are several ways of removing duplicate items from an array, but one of the easiest is with the following extension on <code>Array</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token keyword">where</span> <span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Hashable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">removingDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">Element</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> addedDict <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> filter <span class="token punctuation">{</span>
            addedDict<span class="token punctuation">.</span><span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">removeDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span> <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">removingDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That provides two methods: one called <code>removingDuplicates()</code> that returns an array with duplicates removed, and one called <code>removeDuplicates()</code> that changes the array in place.</p>
<p>The method works using <code>filter()</code> and a dictionary: when you call <code>updateValue()</code> on a dictionary it returns nil if the key is new, so we can use that to figure out which items are unique.</p>
<p>For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> unique <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">removingDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter()</a></li><li><a href="/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array</a></li><li><a href="/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a></li><li><a href="/example-code/uikit/how-to-remove-cells-from-a-uitableview">How to remove cells from a UITableView</a></li><li><a href="/example-code/strings/how-to-remove-a-prefix-from-a-string">How to remove a prefix from a string</a></li></ul>
-->

:::

---

<TagLinks />