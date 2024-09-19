---
lang: ko-KR
title: "What is the autoclosure attribute?"
description: "Article(s) > What is the autoclosure attribute?"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is the autoclosure attribute?"
    - property: og:description
      content: "What is the autoclosure attribute?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-autoclosure-attribute.html
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
  "title": "What is the autoclosure attribute? | Language - free Swift example code",
  "desc": "What is the autoclosure attribute?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-autoclosure-attribute",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>@autoclosure</code> attribute can be applied to a closure parameter for a function, and automatically creates a closure from an expression you pass in. When you call a function that uses this attribute, the code you write <em>isn't</em> a closure, but it <em>becomes</em> a closure, which can be a bit confusing –&nbsp;even the official Swift reference guide warns that overusing autoclosures makes your code harder to understand.</p>
<p>To help you understand how it works, here's a trivial example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">printTest1</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> result<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Before"</span></span><span class="token punctuation">)</span>
    <span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"After"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printTest1</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>
<p>That code creates a <code>printTest()</code> method, which accepts a closure and calls it. As you can see, the <code>print("Hello")</code> is inside a closure that gets called between "Before" and "After", so the final output is "Before", "Hello", "After".</p>
<p>If we used <code>@autoclosure</code> instead, it would allow us to rewrite the <code>printTest()</code> call so that it doesn't need braces, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">printTest2</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> result<span class="token punctuation">:</span> <span class="token attribute atrule">@autoclosure</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Before"</span></span><span class="token punctuation">)</span>
    <span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"After"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printTest2</span><span class="token punctuation">(</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>These two pieces of code produce identical results thanks to <code>@autoclosure</code>. In the second code example, the <code>print("Hello")</code> won't be executed immediately because it gets wrapped inside a closure for execution later.</p>
<p>The <code>@autoclosure</code> attribute is used inside Swift wherever code needs to be passed in and executed only if conditions are right. For example, the <code>&amp;&amp;</code> operator uses <code>@autoclosure</code> to allow short-circuit evaluation, and the <code>assert()</code> function uses it so that the assertion isn’t checked outside of debug mode.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-the-objc-attribute">What is the @objc attribute?</a></li><li><a href="/example-code/language/what-is-the-objcmembers-attribute">What is the @objcMembers attribute?</a></li><li><a href="/example-code/language/how-to-make-array-access-safer-using-a-custom-subscript">How to make array access safer using a custom subscript</a></li><li><a href="/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”</a></li><li><a href="/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup</a></li></ul>
-->

:::

---

<TagLinks />