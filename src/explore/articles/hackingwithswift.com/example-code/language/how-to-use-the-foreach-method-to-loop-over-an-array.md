---
lang: ko-KR
title: "How to use the forEach method to loop over an array"
description: "Article(s) > How to use the forEach method to loop over an array"
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
      content: "Article(s) > How to use the forEach method to loop over an array"
    - property: og:description
      content: "How to use the forEach method to loop over an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array.html
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
  "title": "How to use the forEach method to loop over an array | Language - free Swift example code",
  "desc": "How to use the forEach method to loop over an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>In Swift we normally loop over arrays like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> number <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>However, Swift provides us an alternative: a dedicated array method called <code>forEach()</code>, that loops over each item in the array and does something with it. For example, the above loop would be written like this:</p>
<pre class=" language-swift"><code class=" language-swift">numbers<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>The difference is that <code>forEach()</code> can’t skip over any items – you can’t exit the loop part way, without processing the rest of the items. This helps people reading your code to figure out your intent: you want to act on all items, and won’t stop in the middle.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach">How to create views in a loop using ForEach</a></li><li><a href="/example-code/language/how-to-loop-over-non-nil-items-in-an-array">How to loop over non-nil items in an array</a></li><li><a href="/quick-start/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding">How to create a List or a ForEach from a binding</a></li><li><a href="/quick-start/concurrency/how-to-loop-over-an-asyncsequence-using-for-await">How to loop over an AsyncSequence using for await</a></li><li><a href="/example-code/language/using-stride-to-loop-over-a-range-of-numbers">Using stride() to loop over a range of numbers</a></li></ul>
-->

:::

---

<TagLinks />