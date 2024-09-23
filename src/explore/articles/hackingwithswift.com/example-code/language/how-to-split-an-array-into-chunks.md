---
lang: ko-KR
title: "How to split an array into chunks"
description: "Article(s) > How to split an array into chunks"
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
      content: "Article(s) > How to split an array into chunks"
    - property: og:description
      content: "How to split an array into chunks"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks.html
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
  "title": "How to split an array into chunks | Language - free Swift example code",
  "desc": "How to split an array into chunks",
  "link": "https://hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have an array of elements and you want to split them into chunks of a size you specify, here’s a useful extension you can add to your code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">chunked</span><span class="token punctuation">(</span>into size<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">Element</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> count<span class="token punctuation">,</span> by<span class="token punctuation">:</span> size<span class="token punctuation">)</span><span class="token punctuation">.</span>map <span class="token punctuation">{</span>
            <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">[</span><span class="token short-argument">$0</span> <span class="token operator">..&lt;</span> <span class="token class-name">Swift</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token short-argument">$0</span> <span class="token operator">+</span> size<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That converts an array into an array of arrays, using whatever size you specify. For example, if you have the numbers 1 to 100 in an array and you want to split it so that there are many arrays containing five numbers each, you’d write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">...</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">chunked</span><span class="token punctuation">(</span>into<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:)</a></li><li><a href="/example-code/language/how-to-split-an-integer-into-an-array-of-its-digits">How to split an integer into an array of its digits</a></li><li><a href="/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string</a></li><li><a href="/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value</a></li><li><a href="/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a></li></ul>
-->

:::

---

<TagLinks />