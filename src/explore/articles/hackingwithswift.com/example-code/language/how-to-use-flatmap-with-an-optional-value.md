---
lang: ko-KR
title: "How to use flatMap() with an optional value"
description: "Article(s) > How to use flatMap() with an optional value"
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
      content: "Article(s) > How to use flatMap() with an optional value"
    - property: og:description
      content: "How to use flatMap() with an optional value"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-flatmap-with-an-optional-value.html
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
  "title": "How to use flatMap() with an optional value | Language - free Swift example code",
  "desc": "How to use flatMap() with an optional value",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-flatmap-with-an-optional-value",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 

<p>The <code>flatMap()</code> method of optionals allows you to transform the optional if it has a value, or do nothing if it is empty. This makes for shorter and more expressive code than doing a regular unwrap, and doesn’t require you to change your data type.</p>
<p>Using <code>flatMap()</code> with optionals is similar to using <code>map()</code>, with one important difference: if your transformation closure returns an optional, <code>flatMap()</code> will combine that optional with the existing optional, whereas <code>map()</code> will keep them both.</p>
<p>Here’s a practical example so you can see the difference:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> stringNumber<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"5"</span></span>
<span class="token keyword">let</span> intNumber <span class="token operator">=</span> stringNumber<span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></code></pre>
<p>When that code runs, <code>intNumber</code> will be an <code>Int??</code> –&nbsp;an optional optional integer. This is because we already have optionality from <code>stringNumber</code>, and the <code>Int</code> initializer from a string also returns an optional, so <code>map()</code> just puts them together.</p>
<p>In comparison, <code>flatMap()</code> acts differently:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> flatMapNumber <span class="token operator">=</span> stringNumber<span class="token punctuation">.</span>flatMap <span class="token punctuation">{</span> <span class="token class-name">Int</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></code></pre>
<p>That will return a regular <code>Int?</code>, meaning that either the whole thing exists or nothing exists –&nbsp;it’s easier to work with.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference?</a></li><li><a href="/example-code/language/how-to-use-map-with-an-optional-value">How to use map() with an optional value</a></li><li><a href="/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift?</a></li><li><a href="/example-code/language/what-is-a-monad">What is a monad?</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li></ul>
-->

:::

---

<TagLinks />