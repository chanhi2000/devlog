---
lang: ko-KR
title: "How to conform to the Equatable protocol"
description: "Article(s) > How to conform to the Equatable protocol"
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
      content: "Article(s) > How to conform to the Equatable protocol"
    - property: og:description
      content: "How to conform to the Equatable protocol"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-conform-to-the-equatable-protocol.html
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
  "title": "How to conform to the Equatable protocol | Language - free Swift example code",
  "desc": "How to conform to the Equatable protocol",
  "link": "https://hackingwithswift.com/example-code/language/how-to-conform-to-the-equatable-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>The <code>Equatable</code> protocol is what allows two objects to be compared using <code>==</code>, and it’s surprisingly easy to implement because Swift does most of the work for you by default.</p>
<p>First, here’s a struct we can work with:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span></code></pre>
<p>To make that <code>Equatable</code> you need to add the <code>Equatable</code> conformance like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span></code></pre>
<p>If you don’t want to check all properties for equality, or if any of your properties are not also <code>Equatable</code>, then you need to write your own <code>==</code> function like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">==</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">Person</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> lhs<span class="token punctuation">.</span>name <span class="token operator">==</span> rhs<span class="token punctuation">.</span>name <span class="token operator">&amp;&amp;</span> lhs<span class="token punctuation">.</span>age <span class="token operator">==</span> rhs<span class="token punctuation">.</span>age
<span class="token punctuation">}</span></code></pre>
<p>Put that <em>inside</em> the <code>Person</code> struct. Because that’s your own function you can make it do any comparisons you like. Swift’s default <code>Equatable</code> implementation will check all properties for equality, so if you have one property that is guaranteed to be unique adding your own <code>Equatable</code> implementation is a good idea.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-conform-to-the-hashable-protocol">How to conform to the Hashable protocol</a></li><li><a href="/example-code/language/how-to-conform-to-the-comparable-protocol">How to conform to the Comparable protocol</a></li><li><a href="/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject">How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'"</a></li><li><a href="/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable">How to fix “Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’”</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li></ul>
-->

:::

---

<TagLinks />