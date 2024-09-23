---
lang: ko-KR
title: "How to restrict a protocol to classes"
description: "Article(s) > How to restrict a protocol to classes"
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
      content: "Article(s) > How to restrict a protocol to classes"
    - property: og:description
      content: "How to restrict a protocol to classes"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-restrict-a-protocol-to-classes.html
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
  "title": "How to restrict a protocol to classes | Language - free Swift example code",
  "desc": "How to restrict a protocol to classes",
  "link": "https://hackingwithswift.com/example-code/language/how-to-restrict-a-protocol-to-classes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>There are some occasions when your protocol relies on reference semantics to work, which in practice means it can be adopted only by classes. For example, you might want to use the identity operator (<code>===</code>) to compare two instances of a conforming type, or you might want to change properties inside the type without relying on mutating methods.</p>
<p>To restrict your protocol in this way, make it inherit from <code>AnyObject</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">Authenticatable</span><span class="token punctuation">:</span> <span class="token class-name">AnyObject</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: Some older Swift code uses <code>class</code> for this restriction, but <code>AnyObject</code> is correct for modern Swift.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/whats-the-difference-between-actors-classes-and-structs">What’s the difference between actors, classes, and structs?</a></li><li><a href="/example-code/uikit/what-are-size-classes">What are size classes?</a></li><li><a href="/quick-start/swiftui/how-to-create-different-layouts-using-size-classes">How to create different layouts using size classes</a></li><li><a href="/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming?</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li></ul>
-->

:::

---

<TagLinks />