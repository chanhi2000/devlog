---
lang: ko-KR
title: "What are protocol extensions?"
description: "Article(s) > What are protocol extensions?"
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
      content: "Article(s) > What are protocol extensions?"
    - property: og:description
      content: "What are protocol extensions?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-protocol-extensions.html
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
  "title": "What are protocol extensions? | Language - free Swift example code",
  "desc": "What are protocol extensions?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-protocol-extensions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>This might sound obvious, but protocol extensions are extensions to protocols as opposed to concrete types. For example, the <code>BinaryInteger</code> protocol is adopted by all integer types: <code>Int</code>, <code>Int64</code>, <code>UInt8</code>, and so on. If you wanted to add a method to all of those at once, you’d use a protocol extension to modify <code>BinaryInteger</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">BinaryInteger</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">cubed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token operator">*</span> <span class="token keyword">self</span> <span class="token operator">*</span> <span class="token keyword">self</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That <code>cubed()</code> method will now existing on all integer types, so you can write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> i<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">let</span> j<span class="token punctuation">:</span> <span class="token class-name">UInt8</span> <span class="token operator">=</span> <span class="token number">7</span>
<span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span><span class="token function">cubed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>j<span class="token punctuation">.</span><span class="token function">cubed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>Note: <code>Self</code> with a capital S refers to whatever type conforms to the protocol, e.g. <code>Int</code> or <code>UInt32</code>, whereas <code>self</code> with a lowercase S refers to whatever the current value of the type is, e.g. 5 or 99.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming?</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li><li><a href="/example-code/language/whats-the-difference-between-a-protocol-and-a-class">What’s the difference between a protocol and a class?</a></li><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/language/what-is-a-protocol">What is a protocol?</a></li></ul>
-->

:::

---

<TagLinks />