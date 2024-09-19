---
lang: ko-KR
title: "Self vs self - what's the difference?"
description: "Article(s) > Self vs self - what's the difference?"
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
      content: "Article(s) > Self vs self - what's the difference?"
    - property: og:description
      content: "Self vs self - what's the difference?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/self-vs-self-whats-the-difference.html
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
  "title": "Self vs self - what's the difference? | Language - free Swift example code",
  "desc": "Self vs self - what's the difference?",
  "link": "https://hackingwithswift.com/example-code/language/self-vs-self-whats-the-difference",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When you’re writing protocols and protocol extensions, there’s a difference between <code>Self</code> (capital S) and <code>self</code> (lowercase S). When used with a capital S, <code>Self</code> refers to the type that conform to the protocol, e.g. <code>String</code> or <code>Int</code>. When used with a lowercase S, <code>self</code> refers to the value inside that type, e.g. “hello” or 556.</p>
<p>As an example, consider this extension on <code>BinaryInteger</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">BinaryInteger</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">squared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token operator">*</span> <span class="token keyword">self</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Remember, <code>Self</code> with a capital S refers to whatever type is conforming to the protocol. In the example above, <code>Int</code> conforms to <code>BinaryInteger</code>, so when called on <code>Int</code> the method returns an <code>Int</code>.</p>
<p>On the other hand, <code>self</code> with a <em>lowercase</em> S refers to whatever value the type holds. If the example above were called on an <code>Int</code> storing the value 5 it would effectively be <code>5 * 5</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable">How to fix “Cannot assign to property: 'self' is immutable”</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/language/whats-the-difference-between-init-and-init">What’s the difference between init?() and init()?</a></li></ul>
-->

:::

---

<TagLinks />