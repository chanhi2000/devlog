---
lang: ko-KR
title: "What is a monad?"
description: "Article(s) > What is a monad?"
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
      content: "Article(s) > What is a monad?"
    - property: og:description
      content: "What is a monad?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-monad.html
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
  "title": "What is a monad? | Language - free Swift example code",
  "desc": "What is a monad?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-monad",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>A monad is any data type that can be mapped over using <code>map()</code> and flat mapped over using <code>flatMap()</code>, as long it abides by three laws. Arrays, sets, optionals, and more are all monads. </p>
<p>You don’t need to understand (or even be aware of) the three monad laws in order to use them, but if you’re curious I’ll try to explain. The three monad laws are best demonstrated using code, because honestly it’s a bit heavy when you’re just learning.</p>
<p>The first law is left identity, and means that if you have: 1) a value, e.g. the number 5; 2) a monad that contains that value, e.g. an array containing the number 5; and 3) a function that accepts the same type of value (5) and sends back the same type of monad (an array); then calling <code>flatMap()</code> on the array should be equal to applying the function directly to the value.</p>
<p>In code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// if you have a value, in this case 5</span>
<span class="token keyword">let</span> myNumber <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment">// and you have a monad containing that value, in this case an array containing 5</span>
<span class="token keyword">let</span> myMonad <span class="token operator">=</span> <span class="token punctuation">[</span>myNumber<span class="token punctuation">]</span>

<span class="token comment">// and you have a function that accepts a number and returns the same type of monad as we had before (an array)</span>
<span class="token keyword">let</span> doubleNumbers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>

<span class="token comment">// then calling flatMap on the array…</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> myMonad<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span>doubleNumbers<span class="token punctuation">)</span>

<span class="token comment">// should be equal to applying the function directly to the value</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token function">doubleNumbers</span><span class="token punctuation">(</span>myNumber<span class="token punctuation">)</span>

<span class="token comment">// so, this should print "true" in a playground</span>
result1 <span class="token operator">==</span> result2</code></pre>
<p>The second law is right identity, and means that if you have: 1) a value, e.g. the number 5; 2) a monad that contains that value, e.g. an array containing the number 5; and 3) a function that accepts the same type of value (5) and sends back the same kind of monad (an array) without transforming the value; then calling <code>flatMap()</code> with that function on your monad should leave it unchanged.</p>
<p>In code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// if you have a value, in this case 5</span>
<span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment">// and you have a monad containing that value, in this case an array containing 5</span>
<span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token comment">// and you have a function that accepts a number and returns the same type of monad as we had before (an array) without transforming the value</span>
<span class="token keyword">let</span> wrapInArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token punctuation">}</span>

<span class="token comment">// then calling flatMap() with that function on your monad should leave it unchanged</span>
<span class="token keyword">let</span> flatMapped <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span>wrapInArray<span class="token punctuation">)</span>

<span class="token comment">// this should print "true" in a playground</span>
array <span class="token operator">==</span> flatMapped</code></pre>
<p>The third law is associativity, and means that if you have 1) a value, e.g. the number 5; 2) a monad that contains that value, e.g. an array containing the number 5; and 3) two functions that can be run on that monad as a chain; then it shouldn’t matter how those functions are nested.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// if you have a value, in this case 5</span>
<span class="token keyword">let</span> anotherNumber <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment">// and you have a monad containing that value, in this case an array containing 5</span>
<span class="token keyword">let</span> anotherArray <span class="token operator">=</span> <span class="token punctuation">[</span>myNumber<span class="token punctuation">]</span>

<span class="token comment">// and you have two functions that can be run on that monad as a chain, in this case one that multiplies by 5 and one by 10</span>
<span class="token keyword">let</span> multiplyBy5 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token short-argument">$0</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> multiplyBy10 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token short-argument">$0</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>

<span class="token comment">// then it shouldn’t matter how those functions are nested</span>
<span class="token keyword">let</span> chained <span class="token operator">=</span> anotherArray<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span>multiplyBy5<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span>multiplyBy10<span class="token punctuation">)</span>
<span class="token keyword">let</span> nested <span class="token operator">=</span> anotherArray<span class="token punctuation">.</span>flatMap <span class="token punctuation">{</span> <span class="token function">multiplyBy5</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span>multiplyBy10<span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token comment">// this should print "true" in a playground</span>
chained <span class="token operator">==</span> nested</code></pre>
<p>Again, you don’t need to understand these laws in order to use monads, so don’t be too worried if you understood only part of the code above.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure?</a></li><li><a href="/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types">How to use Codable to load and save custom data types</a></li><li><a href="/example-code/language/how-to-convert-an-int-to-a-string">How to convert an Int to a String</a></li><li><a href="/example-code/language/what-is-a-nib">What is a nib?</a></li><li><a href="/example-code/language/what-are-designated-initializers">What are designated initializers?</a></li></ul>
-->

:::

---

<TagLinks />