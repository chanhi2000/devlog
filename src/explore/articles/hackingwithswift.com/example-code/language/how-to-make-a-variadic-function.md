---
lang: ko-KR
title: "How to make a variadic function"
description: "Article(s) > How to make a variadic function"
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
      content: "Article(s) > How to make a variadic function"
    - property: og:description
      content: "How to make a variadic function"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-a-variadic-function.html
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
  "title": "How to make a variadic function | Language - free Swift example code",
  "desc": "How to make a variadic function",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-a-variadic-function",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Variadic functions are functions that accept any number of parameters. The most common one in Swift is <code>print()</code> –&nbsp;most people use it to print a single value, but you can actually pass as many as you want, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span></code></pre>
<p>To make a variadic function of your own, just add <code>...</code> after any parameter. For example, we could write a <code>sum()</code> function that accepts any number of integers and adds them together, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">sum1</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> numbers<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> number <span class="token keyword">in</span> numbers <span class="token punctuation">{</span>
        total <span class="token operator">+=</span> number
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> total
<span class="token punctuation">}</span></code></pre>
<p>Or if you wanted to write that functionally, you would use <code>reduce()</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">sum2</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> numbers<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Notice how we specify <code>Int...</code> rather than <code>Int</code> –&nbsp;that means this function can be called using no integers, one integer, or even a hundred integers, and Swift will automatically convert them to be an array of integers inside the function.</p>
<p>So, it would be called like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-make-function-parameters-isolated">How to make function parameters isolated</a></li><li><a href="/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function?</a></li><li><a href="/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function?</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li><li><a href="/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays</a></li></ul>
-->

:::

---

<TagLinks />