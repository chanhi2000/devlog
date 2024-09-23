---
lang: ko-KR
title: "How to count matching items in an array"
description: "Article(s) > How to count matching items in an array"
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
      content: "Article(s) > How to count matching items in an array"
    - property: og:description
      content: "How to count matching items in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-count-matching-items-in-an-array.html
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
  "title": "How to count matching items in an array | Language - free Swift example code",
  "desc": "How to count matching items in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-count-matching-items-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to count how many items in an array (or any collection) match a test you specify, the easiest thing to do is run the collection through a call to <code>filter()</code> then count the remainder.</p>
<p>For example, if you had an array of numbers and wanted to count how many were odd, you would write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> count1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span>filter <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">.</span>count</code></pre>
<p>Because this is something that all collections might want to do, you should consider wrapping it in an extension on <code>Collection</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Collection</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">count</span><span class="token punctuation">(</span><span class="token keyword">where</span> test<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token keyword">rethrows</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that change, counting the odd numbers becomes this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> count2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span>count <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element</a></li><li><a href="/example-code/language/how-to-count-element-frequencies-in-an-array">How to count element frequencies in an array</a></li><li><a href="/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array</a></li><li><a href="/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet</a></li><li><a href="/example-code/language/removing-matching-elements-from-a-collection-removeallwhere">Removing matching elements from a collection: removeAll(where:)</a></li></ul>
-->

:::

---

<TagLinks />