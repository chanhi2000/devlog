---
lang: ko-KR
title: "How to count element frequencies in an array"
description: "Article(s) > How to count element frequencies in an array"
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
      content: "Article(s) > How to count element frequencies in an array"
    - property: og:description
      content: "How to count element frequencies in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-count-element-frequencies-in-an-array.html
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
  "title": "How to count element frequencies in an array | Language - free Swift example code",
  "desc": "How to count element frequencies in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-count-element-frequencies-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have an array containing various elements and you want to count how often each item appears, you can do so by combining the <code>map()</code> method with a <code>Dictionary</code> initializer.</p>
<p>First, create an array of items:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"a"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"b"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"a"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"c"</span></span><span class="token punctuation">]</span></code></pre>
<p>Second, convert that to an array of key-value pairs using tuples, where each value is the number 1:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> mappedItems <span class="token operator">=</span> items<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></code></pre>
<p>Finally, create a <code>Dictionary</code> from that tuple array, asking it to add the 1s together every time it finds a duplicate key:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> counts <span class="token operator">=</span> <span class="token class-name">Dictionary</span><span class="token punctuation">(</span>mappedItems<span class="token punctuation">,</span> uniquingKeysWith<span class="token punctuation">:</span> <span class="token operator">+</span><span class="token punctuation">)</span></code></pre>
<p>That will create the dictionary <code>["b": 1, "a": 2, "c": 1]</code> because dictionaries are not stored in order – as you can see, it tells us that “a” appeared twice, while the other two appeared once.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element</a></li><li><a href="/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array</a></li><li><a href="/example-code/language/how-to-get-a-random-element-from-an-array-using-randomelement">How to get a random element from an array using randomElement()</a></li><li><a href="/example-code/language/how-to-count-matching-items-in-an-array">How to count matching items in an array</a></li><li><a href="/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet</a></li></ul>
-->

:::

---

<TagLinks />