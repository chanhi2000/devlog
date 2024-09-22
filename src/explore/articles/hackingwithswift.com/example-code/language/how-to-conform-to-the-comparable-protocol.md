---
lang: ko-KR
title: "How to conform to the Comparable protocol"
description: "Article(s) > How to conform to the Comparable protocol"
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
      content: "Article(s) > How to conform to the Comparable protocol"
    - property: og:description
      content: "How to conform to the Comparable protocol"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-conform-to-the-comparable-protocol.html
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
  "title": "How to conform to the Comparable protocol | Language - free Swift example code",
  "desc": "How to conform to the Comparable protocol",
  "link": "https://hackingwithswift.com/example-code/language/how-to-conform-to-the-comparable-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>Comparable</code> protocol allows use to use the <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, and <code>&gt;=</code> operators with conforming data types, which in turn means that Swift knows how to sort arrays of those types. Most of Swift’s built-in types support <code>Comparable</code> out of the box, but if you want your own type to conform to them then you need to implement <code>&lt;</code> –&nbsp;from that Swift can provide default implementations of the other three operators.</p>
<p>The <code>&lt;</code> function needs to accept two instances of your type, one of the left-hand side and one on the right, and return true if the left-hand object should be ordered before the right-hand object.</p>
<p>As an example, consider this simple <code>Person</code> struct:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span></code></pre>
<p>That has one property called <code>name</code>, and we’re going to make <code>Person</code> conform to the <code>Comparable</code> protocol based on that property. This means writing a static method called <code>&lt;</code> that takes two instances of <code>Person</code> and internally compares the <code>name</code> properties of each of them:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Comparable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>

    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">Person</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lhs<span class="token punctuation">.</span>name <span class="token operator">&lt;</span> rhs<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that in place you can now use <code>&lt;</code> to compare two instances of <code>Person</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> justin <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Justin Bieber"</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>taylor <span class="token operator">&lt;</span> justin<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-conform-to-the-hashable-protocol">How to conform to the Hashable protocol</a></li><li><a href="/example-code/language/how-to-conform-to-the-equatable-protocol">How to conform to the Equatable protocol</a></li><li><a href="/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject">How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'"</a></li><li><a href="/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable">How to fix “Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’”</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li></ul>
-->

:::

---

<TagLinks />