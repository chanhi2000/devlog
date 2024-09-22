---
lang: ko-KR
title: "How to conform to the Hashable protocol"
description: "Article(s) > How to conform to the Hashable protocol"
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
      content: "Article(s) > How to conform to the Hashable protocol"
    - property: og:description
      content: "How to conform to the Hashable protocol"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-conform-to-the-hashable-protocol.html
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
  "title": "How to conform to the Hashable protocol | Language - free Swift example code",
  "desc": "How to conform to the Hashable protocol",
  "link": "https://hackingwithswift.com/example-code/language/how-to-conform-to-the-hashable-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>In Swift, conforming to the <code>Hashable</code> protocol is often just as easy as adding <code>Hashable</code> to your conformance list. However, if you have custom requirements, or use properties that don’t all conform to <code>Hashable</code>, it takes a little more work.</p>
<p>Here’s an example struct we can work with:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> iPad<span class="token punctuation">:</span> <span class="token class-name">Hashable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> serialNumber<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> capacity<span class="token punctuation">:</span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span></code></pre>
<p>Because that conforms to the <code>Hashable</code> protocol and both its properties also conform to the <code>Hashable</code> protocol, Swift will generate a <code>hash(into:)</code> method automatically.</p>
<p>However, in this case we can see that <code>serialNumber</code> is enough to identify each iPad uniquely so hashing <code>capacity</code> isn’t needed. So, we can write our own implementation of <code>hash(into:)</code> that hashes just that one property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">hash</span><span class="token punctuation">(</span>into hasher<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token class-name">Hasher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>You can add more properties to your hash by calling <code>combine()</code> repeatedly, and the order in which you add properties affects the finished hash value.</p>
<p>Swift uses a random seed every time it hashes an object, which means the hash value for any object is effectively guaranteed to be different between runs of your app.</p>
<p>This in turn means that elements you add to a set or a dictionary are highly likely to have a different order each time you run your app.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-conform-to-the-comparable-protocol">How to conform to the Comparable protocol</a></li><li><a href="/example-code/language/how-to-conform-to-the-equatable-protocol">How to conform to the Equatable protocol</a></li><li><a href="/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject">How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'"</a></li><li><a href="/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable">How to fix “Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’”</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li></ul>
-->

:::

---

<TagLinks />