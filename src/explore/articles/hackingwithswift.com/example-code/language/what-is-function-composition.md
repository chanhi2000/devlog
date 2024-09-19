---
lang: ko-KR
title: "What is function composition?"
description: "Article(s) > What is function composition?"
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
      content: "Article(s) > What is function composition?"
    - property: og:description
      content: "What is function composition?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-function-composition.html
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
  "title": "What is function composition? | Language - free Swift example code",
  "desc": "What is function composition?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-function-composition",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Function composition is the ability to combine small functions together to make bigger functions.</p>
<p>In normal circumstances, you’d give some input to function A and get back output, and do the same for function B. When those two functions as combined together, A’s output becomes B’s input, so you provide input to A and get the results back from B.</p>
<p>To demonstrate this, here’s a function that generates random numbers in a specific range:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">generateRandomNumber</span><span class="token punctuation">(</span>max<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token function">arc4random_uniform</span><span class="token punctuation">(</span><span class="token class-name">UInt32</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>And here’s a function that spells out any number it’s given:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">spell</span><span class="token punctuation">(</span>number<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token class-name">NumberFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    formatter<span class="token punctuation">.</span>numberStyle <span class="token operator">=</span> <span class="token punctuation">.</span>spellOut
    <span class="token keyword">return</span> formatter<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> number <span class="token keyword">as</span> <span class="token class-name">NSNumber</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">""</span></span>
<span class="token punctuation">}</span></code></pre>
<p>We can define a new operator that lets us combine those two together, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">precedencegroup</span> <span class="token class-name">CompositionPrecedence</span> <span class="token punctuation">{</span>
    <span class="token keyword">associativity</span><span class="token punctuation">:</span> <span class="token keyword">left</span>
<span class="token punctuation">}</span>

<span class="token keyword">infix</span> <span class="token keyword">operator</span> <span class="token operator">&gt;&gt;&gt;</span><span class="token punctuation">:</span> <span class="token class-name">CompositionPrecedence</span>

<span class="token keyword">func</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">U</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">U</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">U</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">V</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">V</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token function">rhs</span><span class="token punctuation">(</span><span class="token function">lhs</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You can learn more about how that works in <a href="/store/pro-swift">Pro Swift</a>.</p>
<p>You can now combine your two smaller functions into bigger ones, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> spellOutRandom <span class="token operator">=</span> generateRandomNumber <span class="token operator">&gt;&gt;&gt;</span> spell</code></pre>
<p><code>spellOutRandom()</code> is designed to take the input from the first function (a number) and send back the output from the second function (a string), so we can use it like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token function">spellOutRandom</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>That will output a different spelled number each time it’s run.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function?</a></li><li><a href="/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function?</a></li><li><a href="/quick-start/concurrency/how-to-create-and-call-an-async-function">How to create and call an async function</a></li><li><a href="/quick-start/concurrency/how-to-make-function-parameters-isolated">How to make function parameters isolated</a></li><li><a href="/quick-start/concurrency/what-calls-the-first-async-function">What calls the first async function?</a></li></ul>
-->

:::

---

<TagLinks />