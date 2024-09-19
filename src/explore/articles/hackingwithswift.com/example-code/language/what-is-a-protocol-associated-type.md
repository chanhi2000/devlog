---
lang: ko-KR
title: "What is a protocol associated type?"
description: "Article(s) > What is a protocol associated type?"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is a protocol associated type?"
    - property: og:description
      content: "What is a protocol associated type?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-protocol-associated-type.html
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
  "title": "What is a protocol associated type? | Language - free Swift example code",
  "desc": "What is a protocol associated type?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-protocol-associated-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>Associated types are a powerful way of making protocols generic, but they can be a bit confusing at first. In essence, they mark holes in protocols that must be filled by whatever types conform to those protocols.</p>
<p>Let’s start with a simple example: an <code>ItemStoring</code> protocol that can store items in an array. What <em>type</em> those items are depends on whatever conforms to the protocol, but we can still use them inside the protocol and any extensions.</p>
<p>Here’s the basic protocol:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">ItemStoring</span> <span class="token punctuation">{</span>
    <span class="token keyword">associatedtype</span> <span class="token class-name">DataType</span>

    <span class="token keyword">var</span> items<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">DataType</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span><span class="token punctuation">}</span>
    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token class-name">DataType</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, it requires that conforming types provide an <code>items</code> array that holds an array of whatever is used to fill the <code>DataType</code> hole, and also a mutating method to add items of that type.</p>
<p>That mutating method is probably going to be the same for all conforming types, so we can write a protocol extension that provides a default implementation:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">ItemStoring</span> <span class="token punctuation">{</span>
    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token class-name">DataType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Finally we can create a <code>NameDatabase</code> struct that conforms to the <code>ItemStoring</code> protocol like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">NameDatabase</span><span class="token punctuation">:</span> <span class="token class-name">ItemStoring</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Swift is smart enough to realize that <code>String</code> is being used to fill the hole in the associated type, because the <code>items</code> array must be whatever <code>DataType</code> is.</p>
<p>That’s all the code written, so you can go ahead and use <code>NameDatabase</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> names <span class="token operator">=</span> <span class="token class-name">NameDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
names<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"James"</span></span><span class="token punctuation">)</span>
names<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Jess"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums</a></li><li><a href="/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a></li></ul>
-->

:::

---

<TagLinks />