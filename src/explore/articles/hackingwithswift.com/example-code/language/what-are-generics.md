---
lang: ko-KR
title: "What are generics?"
description: "Article(s) > What are generics?"
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
      content: "Article(s) > What are generics?"
    - property: og:description
      content: "What are generics?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-generics.html
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
  "title": "What are generics? | Language - free Swift example code",
  "desc": "What are generics?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-generics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Generics are a way of making one data type act in a variety of ways depending on how it is created. You’ve already used them whether you realized or not: Swift has an <code>Array</code> type, but it is <em>generic</em> –&nbsp;it doesn’t contain any sort of specific data. Instead, you ask for arrays that hold specific kinds of data by using things like <code>[String]</code> to get a string array.</p>
<p>It’s not hard to create generics of your own, and to demonstrate that we’re going to create a simple <code>Queue</code> type. These are first-in, first-out data structures (FIFO), which means you add things to the back and remove them from the front –&nbsp;much like a real-life queue.</p>
<p>We want this queue to be generic, and in Swift you do that by writing the name of a generic placeholder inside angle brackets, like this: <code>struct Queue&lt;T&gt; {</code>. That <code>T</code> doesn’t mean anything special –&nbsp;it could have been <code>R</code> or <code>Element</code> –&nbsp;but <code>T</code> is commonly used.</p>
<p>Inside the queue we’re going to have an internal array tracking the items we’re storing, and we’ll write methods to add and remove items.</p>
<p>Here’s the complete <code>Queue</code> struct:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Queue</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">var</span> internalArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">T</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> count<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> internalArray<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>

    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> item<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        internalArray<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">T</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> internalArray<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> internalArray<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You can now create a queue to store any object you want. For example, this create a queue of integers:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token class-name">Queue</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator">How to use compiler directives to detect the iOS Simulator</a></li><li><a href="/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword</a></li><li><a href="/example-code/language/how-to-convert-a-string-to-an-nsstring">How to convert a string to an NSString</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li><li><a href="/example-code/language/tips-for-android-developers-switching-to-swift">Tips for Android developers switching to Swift</a></li></ul>
-->

:::

---

<TagLinks />