---
lang: ko-KR
title: "How to find the longest initial sequence in an array"
description: "Article(s) > How to find the longest initial sequence in an array"
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
      content: "Article(s) > How to find the longest initial sequence in an array"
    - property: og:description
      content: "How to find the longest initial sequence in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array.html
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
  "title": "How to find the longest initial sequence in an array | Language - free Swift example code",
  "desc": "How to find the longest initial sequence in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>One of Swift’s lesser-known functions is <code>prefix(while:)</code>: call this on an array along with a test to apply, and it will return as many items from the start of the array as it can, stopping only when it reaches the first element that fails your test.</p>
<p>For example, if we had an array of test scores:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">86</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span></code></pre>
<p>We could use <code>prefix(while:)</code> to return all scores over 85 that occurred before the first score below 85 –&nbsp;i.e., find me all the passing scores that took place before the first person failed.</p>
<p>Here’s that in Swift:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> initialPasses1 <span class="token operator">=</span> scores<span class="token punctuation">.</span><span class="token keyword">prefix</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">&gt;</span> <span class="token number">85</span> <span class="token punctuation">}</span></code></pre>
<p>You can apply any test you want, and sometimes you’ll get back an empty array if the very first element fails your test. For example, this will return an empty array:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> initialPasses2 <span class="token operator">=</span> scores<span class="token punctuation">.</span><span class="token keyword">prefix</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">&lt;</span> <span class="token number">85</span> <span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream?</a></li><li><a href="/example-code/language/how-to-make-a-custom-sequence">How to make a custom sequence</a></li><li><a href="/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence</a></li><li><a href="/example-code/games/how-to-run-skactions-in-a-sequence">How to run SKActions in a sequence</a></li><li><a href="/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence?</a></li></ul>
-->

:::

---

<TagLinks />