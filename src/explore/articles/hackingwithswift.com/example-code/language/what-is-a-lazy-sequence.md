---
lang: ko-KR
title: "What is a lazy sequence?"
description: "Article(s) > What is a lazy sequence?"
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
      content: "Article(s) > What is a lazy sequence?"
    - property: og:description
      content: "What is a lazy sequence?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-lazy-sequence.html
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
  "title": "What is a lazy sequence? | Language - free Swift example code",
  "desc": "What is a lazy sequence?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-lazy-sequence",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Lazy sequences are regular sequences where each item is computed on demand rather than up front. For example, consider this array of numbers:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">...</span><span class="token number">100000</span><span class="token punctuation">)</span></code></pre>
<p>That will hold 100,000 numbers. Now, if we wanted to double all those numbers, we’d write something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> doubled <span class="token operator">=</span> numbers<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token punctuation">}</span></code></pre>
<p>That will cause Swift to double all 100,000 numbers, and sometimes that’s exactly what you want. However, if you know you intend to use only a handful of them, you can make the calculation lazy instead, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> lazyDoubled <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token keyword">lazy</span><span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token punctuation">}</span></code></pre>
<p>Now that <code>map()</code> call won’t do any work up front – it just stores the original array (numbers 1 to 100,000) alongside the transformation closure (double each number). So, when you request item 5,000 it can calculate just that one for you and return it in a split second –&nbsp;a significant time saving.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-are-lazy-variables">What are lazy variables?</a></li><li><a href="/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack">How to lazy load views using LazyVStack and LazyHStack</a></li><li><a href="/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream?</a></li><li><a href="/example-code/language/how-to-make-a-custom-sequence">How to make a custom sequence</a></li><li><a href="/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence</a></li></ul>
-->

:::

---

<TagLinks />