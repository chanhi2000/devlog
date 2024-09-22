---
lang: ko-KR
title: "How to add raw values to enums"
description: "Article(s) > How to add raw values to enums"
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
      content: "Article(s) > How to add raw values to enums"
    - property: og:description
      content: "How to add raw values to enums"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-raw-values-to-enums.html
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
  "title": "How to add raw values to enums | Language - free Swift example code",
  "desc": "How to add raw values to enums",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-raw-values-to-enums",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Raw values for enums are primitive values that sit behind each case. For example, you might create an enum for the planets in our solar system, and want to refer to each planet by a number as well as its name:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Planets</span><span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> mercury
    <span class="token keyword">case</span> venus
    <span class="token keyword">case</span> earth
    <span class="token keyword">case</span> mars
<span class="token punctuation">}</span> </code></pre>
<p>Swift will assign each case a raw integer value, starting from 0 and counting up. You can then use this to load and save the enum, or perhaps transfer it over the network.</p>
<p>You can provide custom raw values for any or all of your cases, and Swift will fill in the rest. For example, if we wanted <code>mercury</code> to be planet number 1, <code>venus</code> to be number 2, and so on, we could do this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Planets</span><span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> mercury <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">case</span> venus
    <span class="token keyword">case</span> earth
    <span class="token keyword">case</span> mars
<span class="token punctuation">}</span></code></pre>
<p>That will cause Swift to count upwards from 1.</p>
<p>If your raw value type is <code>String</code>, Swift will automatically create strings from each case name.</p>
<p>So, this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Planets</span><span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> mercury
    <span class="token keyword">case</span> venus
    <span class="token keyword">case</span> earth
    <span class="token keyword">case</span> mars
<span class="token punctuation">}</span></code></pre>
<p>Is equivalent to this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">enum</span> <span class="token class-name">Planets</span><span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> mercury <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"mercury"</span></span>
    <span class="token keyword">case</span> venus <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"venus"</span></span>
    <span class="token keyword">case</span> earth <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"earth"</span></span>
    <span class="token keyword">case</span> mars <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"mars"</span></span>
<span class="token punctuation">}</span></code></pre>
<p>Finally, you can create enums from their raw value, but you get back an <em>optional</em> enum because your raw value might not match any of the available cases. For example, given our original <code>Planets</code> enum with integer raw values starting from 0, this would create an optional <code>Planet</code> pointing at Venus:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> venus <span class="token operator">=</span> <span class="token class-name">Planets</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/strings/how-do-you-make-raw-strings-in-swift">How do you make raw strings in Swift?</a></li><li><a href="/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums</a></li><li><a href="/example-code/language/what-are-indirect-enums">What are indirect enums?</a></li><li><a href="/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values</a></li><li><a href="/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a></li></ul>
-->

:::

---

<TagLinks />