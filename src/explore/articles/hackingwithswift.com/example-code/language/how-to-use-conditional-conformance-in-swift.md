---
lang: ko-KR
title: "How to use conditional conformance in Swift"
description: "Article(s) > How to use conditional conformance in Swift"
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
      content: "Article(s) > How to use conditional conformance in Swift"
    - property: og:description
      content: "How to use conditional conformance in Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-conditional-conformance-in-swift.html
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
  "title": "How to use conditional conformance in Swift | Language - free Swift example code",
  "desc": "How to use conditional conformance in Swift",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-conditional-conformance-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Conditional conformances <a href="/articles/50/whats-new-in-swift-4-1">were introduced in Swift 4.1</a>, and <a href="/articles/77/whats-new-in-swift-4-2">refined in Swift 4.2</a> to allow you to query them at runtime. They allow types to conform to a protocol only when certain conditions are met – hence “conditional conformance”.</p>
<p>For example, if we had a <code>Purchaseable</code> protocol:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">Purchaseable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>And a simple type that conforms to that protocol:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Book</span><span class="token punctuation">:</span> <span class="token class-name">Purchaseable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"You bought a book"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Then we could make <code>Array</code> conform to <code>Purchaseable</code> if all the elements inside the array were also <code>Purchasable</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Array</span><span class="token punctuation">:</span> <span class="token class-name">Purchaseable</span> <span class="token keyword">where</span> <span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Purchaseable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token keyword">self</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You can add conditional conformances to new types, and you can use any protocol you want – it doesn’t need to be one you define.</p>
<p>For example, you might a generic <code>Box</code> class that is able to wrap a value so it can be passed by reference:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value<span class="token punctuation">:</span> <span class="token class-name">T</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>We could use that box to store <code>User</code> structs, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"twostraws"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> box1 <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> user<span class="token punctuation">)</span>
<span class="token keyword">let</span> box2 <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> user<span class="token punctuation">)</span></code></pre>
<p>We’ve made the <code>User</code> struct <code>Equatable</code>, which means we can compare two instances of it to see if they are equal. What conditional conformance let us do is make <code>Box</code> equatable if its content is also equatable, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">Box</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token keyword">where</span> <span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">==</span> <span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lhs<span class="token punctuation">.</span>value <span class="token operator">==</span> rhs<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that in place, we can now check two boxes for equality directly, like this:</p>
<pre class=" language-swift"><code class=" language-swift">box1 <span class="token operator">==</span> box2</code></pre>
<p>Conditional conformance was enhanced in Swift 4.2, giving the ability to query a conditional conformance at runtime. Although this compiled in Swift 4.1, it would crash at runtime – a result no one wanted. </p>
<p>Well, that’s now fixed, so if you receive data of one type and want to check if it can be converted to a conditionally conformed protocol, it works great.</p>
<p>For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> items<span class="token punctuation">:</span> <span class="token keyword">Any</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> books <span class="token operator">=</span> items <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Purchaseable</span> <span class="token punctuation">{</span>
    books<span class="token punctuation">.</span><span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock()</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”</a></li><li><a href="/example-code/language/how-to-install-a-beta-version-of-swift">How to install a beta version of Swift</a></li></ul>
-->

:::

---

<TagLinks />