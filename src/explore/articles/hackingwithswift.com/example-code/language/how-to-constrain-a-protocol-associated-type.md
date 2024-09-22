---
lang: ko-KR
title: "How to constrain a protocol associated type"
description: "Article(s) > How to constrain a protocol associated type"
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
      content: "Article(s) > How to constrain a protocol associated type"
    - property: og:description
      content: "How to constrain a protocol associated type"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-constrain-a-protocol-associated-type.html
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
  "title": "How to constrain a protocol associated type | Language - free Swift example code",
  "desc": "How to constrain a protocol associated type",
  "link": "https://hackingwithswift.com/example-code/language/how-to-constrain-a-protocol-associated-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p style="margin: 0; margin-bottom: 20px;"><a href="/about">Paul Hudson</a> &nbsp;&nbsp; <i class="fab fa-twitter" aria-hidden="true" style="color: #4099ff"></i> <a href="https://twitter.com/twostraws" target="_blank">@twostraws</a> &nbsp;&nbsp; <time itemprop="dateModified" datetime="2019-05-28T20:41:20+00:00">May 28th 2019</time><meta itemprop="datePublished" content="2019-05-28T20:41:20+00:00"></p>
<p>Protocol associated types let you add a huge amount of flexibility to your protocols, but sometimes you want a little <em>less</em> flexibility. For example, you might say that all types conforming to a protocol must specify the <code>id</code> of their object and also what type that ID must be:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">Identifiable1</span> <span class="token punctuation">{</span>
    <span class="token keyword">associatedtype</span> <span class="token constant">ID</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token constant">ID</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With that code, <code>ID</code> could be anything –&nbsp;a <code>String</code>, an <code>Int</code>, a <code>UILabel</code>, and so on. However, you might find you need to apply some constraints to that type: perhaps you need to use it as a dictionary key (<code>Hashable</code>), or sort it in an array (<code>Comparable</code>).</p>
<p>To make this work, Swift lets us apply constraints to associated types: “it can be any type, as long as that type conforms to…”. For example, this forces <code>ID</code> to conform to <code>Hashable</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">Identifiable2</span> <span class="token punctuation">{</span>
    <span class="token keyword">associatedtype</span> <span class="token constant">ID</span><span class="token punctuation">:</span> <span class="token class-name">Hashable</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token constant">ID</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Because <code>Hashable</code> inherits from <code>Equatable</code> we can now be sure that any types used for <code>ID</code> can be compared using <code>==</code> and also used as keys in dictionaries.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums</a></li><li><a href="/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a></li></ul>
-->

:::

---

<TagLinks />