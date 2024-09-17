---
lang: ko-KR
title: "How to remove a prefix from a string"
description: "Article(s) > How to remove a prefix from a string"
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
      content: "Article(s) > How to remove a prefix from a string"
    - property: og:description
      content: "How to remove a prefix from a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-remove-a-prefix-from-a-string.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to remove a prefix from a string | Strings - free Swift example code",
  "desc": "How to remove a prefix from a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-remove-a-prefix-from-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s string have a built-in <code>hasPrefix()</code> method that returns true if the string starts with specific letters, but they don’t have a way to remove those letters if they exist.</p>
<p>Fortunately, we can fill that gap with an extension on <code>String</code> that combines <code>hasPrefix()</code> with <code>dropFirst()</code>, which will check whether the prefix exists and remove it in one go:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">deletingPrefix</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> <span class="token keyword">prefix</span><span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token keyword">prefix</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">dropFirst</span><span class="token punctuation">(</span><span class="token keyword">prefix</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-remove-cells-from-a-uitableview">How to remove cells from a UITableView</a></li><li><a href="/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a></li><li><a href="/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array</a></li><li><a href="/quick-start/swiftui/how-to-add-and-remove-views-with-a-transition">How to add and remove views with a transition</a></li><li><a href="/example-code/language/how-to-remove-duplicate-items-from-an-array">How to remove duplicate items from an array</a></li></ul>
-->

:::

---

<TagLinks />