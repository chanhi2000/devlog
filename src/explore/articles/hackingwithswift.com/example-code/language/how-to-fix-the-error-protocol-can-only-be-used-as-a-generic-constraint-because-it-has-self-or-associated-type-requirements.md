---
lang: ko-KR
title: "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
description: "Article(s) > How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
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
      content: "Article(s) > How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
    - property: og:description
      content: "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.html
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
  "title": "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” | Language - free Swift example code",
  "desc": "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "https://hackingwithswift.com/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Protocols with associated types are a powerful, if somewhat treacherous, feature of Swift. Sometimes it’s fair to say that the only winning move is not to play –&nbsp;i.e., to avoid them entirely –&nbsp;but if that isn’t the case you are sometimes likely to find yourself facing a difficult error: “protocol can only be used as a generic constraint because it has Self or associated type requirements.”</p>
<p>As an example, here’s a protocol with an associated type:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">associatedtype</span> <span class="token constant">ID</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token constant">ID</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>So, whatever type wants to conform to <code>Identifiable</code> must state which type they use to identify themselves. We could create two instances of such types like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Website</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token constant">URL</span>
<span class="token punctuation">}</span></code></pre>
<p>That is, people identify themselves using a <code>String</code>, and websites use a <code>URL</code>. So far, so easy. However, if you want to write a function using <code>Identifiable</code> as parameters you’ll hit a problem. For example, you might try to write a function that compares two instances of <code>Identifiable</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">compareThing1</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> thing1<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token punctuation">,</span> against thing2<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>That will issue the error “protocol 'Identifiable' can only be used as a generic constraint because it has Self or associated type requirements.”</p>
<p>The reason for the error is simple enough: although <code>thing1</code> and <code>thing2</code> being passed into the function both conform to <code>Identifiable</code> that doesn’t make them usable in the same way –&nbsp;the <code>id</code> of a person and the <code>id</code> of a website are completely different types, so there’s no meaningful way you can use them together.</p>
<p>As the error says, this protocol can be used only as a generic constraint. That’s actually pointing us to the solution here: if we use <code>Identifiable</code> as a generic constraint then we can tell Swift not only that <code>thing1</code> and <code>thing2</code> conform to the protocol but also that they are actually the same type.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">compareThing1</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> thing1<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span> against thing2<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>That code fixes the problem, because Swift has enough information to know how you plan to use <code>thing1</code> and <code>thing2</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”</a></li><li><a href="/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a></li><li><a href="/example-code/language/self-vs-self-whats-the-difference">Self vs self - what's the difference?</a></li><li><a href="/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a></li></ul>
-->

:::

---

<TagLinks />