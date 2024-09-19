---
lang: ko-KR
title: "What are indirect enums?"
description: "Article(s) > What are indirect enums?"
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
      content: "Article(s) > What are indirect enums?"
    - property: og:description
      content: "What are indirect enums?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-indirect-enums.html
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
  "title": "What are indirect enums? | Language - free Swift example code",
  "desc": "What are indirect enums?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-indirect-enums",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Indirect enums are enums that need to reference themselves somehow, and are called “indirect” because they modify the way Swift stores them so they can grow to any size. Without the indirection, any enum that referenced itself could potentially become infinitely sized: it could contain itself again and again, which wouldn’t be possible.</p>
<p>As an example, here’s an indirect enum that defines a node in a linked list:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">indirect</span> <span class="token keyword">enum</span> <span class="token class-name">LinkedListItem</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token function">endPoint</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token function">linkNode</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span> next<span class="token punctuation">:</span> <span class="token class-name">LinkedListItem</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Because that references itself –&nbsp;because one of the associated values is itself a linked list item – we need to mark the enum as being indirect.</p>
<p>Apart from the special way they store their values internally, indirect enums work identically to regular enums. So, we could make a linked list using that enum and loop over it, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> third <span class="token operator">=</span> <span class="token class-name">LinkedListItem</span><span class="token punctuation">.</span><span class="token function">endPoint</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Third"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token class-name">LinkedListItem</span><span class="token punctuation">.</span><span class="token function">linkNode</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Second"</span></span><span class="token punctuation">,</span> next<span class="token punctuation">:</span> third<span class="token punctuation">)</span>
<span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token class-name">LinkedListItem</span><span class="token punctuation">.</span><span class="token function">linkNode</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"First"</span></span><span class="token punctuation">,</span> next<span class="token punctuation">:</span> second<span class="token punctuation">)</span>

<span class="token keyword">var</span> currentNode <span class="token operator">=</span> first

<span class="token label important">listLoop</span><span class="token punctuation">:</span> <span class="token keyword">while</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> currentNode <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">endPoint</span><span class="token punctuation">(</span><span class="token keyword">let</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token label important"> listLoop</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">linkNode</span><span class="token punctuation">(</span><span class="token keyword">let</span> value<span class="token punctuation">,</span> <span class="token keyword">let</span> next<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        currentNode <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums</a></li><li><a href="/example-code/language/how-to-add-raw-values-to-enums">How to add raw values to enums</a></li><li><a href="/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable">How to list all cases in an enum using CaseIterable</a></li><li><a href="/example-code/language/whats-the-difference-between-any-and-anyobject">What’s the difference between Any and AnyObject?</a></li><li><a href="/example-code/language/how-to-create-a-custom-optionset">How to create a custom OptionSet</a></li></ul>
-->

:::

---

<TagLinks />