---
lang: ko-KR
title: "How to use operator overloading"
description: "Article(s) > How to use operator overloading"
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
      content: "Article(s) > How to use operator overloading"
    - property: og:description
      content: "How to use operator overloading"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-operator-overloading.html
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
  "title": "How to use operator overloading | Language - free Swift example code",
  "desc": "How to use operator overloading",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-operator-overloading",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Operator overloading is the practice of adding new operators and modifying existing ones to do different things. Operators are those little symbols like <code>+</code>, <code>*</code>, and <code>/</code>, and Swift uses them in a variety of ways depending on context – a string plus another string equals a combined string, for example, whereas an integer plus another integer equals a summed integer.</p>
<p>To create your own operator you need to tell Swift whether it should be <em>prefix</em> (before its operand; the values used with it), <em>postfix</em> (after its operand), or <em>infix</em>. The most common is infix: <code>+</code>, <code>-</code>, <code>*</code>, and more are all infix.</p>
<p>To create a new operator, try adding this to a playground:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">infix</span> <span class="token keyword">operator</span> <span class="token operator">**</span></code></pre>
<p>That’s the exponentiation operator, designed to raise one number to the power of another. Normally we’d use the <code>pow()</code> function for that job, but with operator overloading we can make <code>**</code> work instead.</p>
<p>Now you need to tell Swift what to do when it sees that operator. For example, when we write something like <code>2 ** 4</code> what does that <em>mean</em>?</p>
<p>What Swift wants is a function called <code>**</code>, the name of our operator, where the left-hand side is one type and the right-hand side is another type. Which type is down to us, but <code>**</code> is normally used with a <code>Double</code> on either side, so we’re going to write a function that accepts two doubles and returns a double:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token operator">**</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">Double</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">Double</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">pow</span><span class="token punctuation">(</span>lhs<span class="token punctuation">,</span> rhs<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, the function itself is a cinch thanks to <code>pow()</code> –&nbsp;we literally just pass on the numbers. Now this code should work in your playground:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">4</span></code></pre>
<p>For more advanced uses, you also need to specify associativity and a precedence group, but what we have is fine to start with.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-the-ternary-operator">What is the ternary operator?</a></li><li><a href="/example-code/language/what-is-the-nil-coalescing-operator">What is the nil coalescing operator?</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li></ul>
-->

:::

---

<TagLinks />