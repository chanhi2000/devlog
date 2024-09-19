---
lang: ko-KR
title: "What is a computed property?"
description: "Article(s) > What is a computed property?"
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
      content: "Article(s) > What is a computed property?"
    - property: og:description
      content: "What is a computed property?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-computed-property.html
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
  "title": "What is a computed property? | Language - free Swift example code",
  "desc": "What is a computed property?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-computed-property",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
w<p>Swift offers us two kinds of property: a <em>stored</em> property is one that saves a value for use later, and a <em>computed</em> property is one that runs some code in order to calculate the value.</p>
<p>As comparison, here’s a <code>Person</code> struct with four stored properties and one computed one. The computed property returns a string based on joining the four stored properties into a sentence.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Taylor"</span></span>
    <span class="token keyword">var</span> favoriteColor <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"red"</span></span>
    <span class="token keyword">var</span> favoriteCity <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Tokyo"</span></span>
    <span class="token keyword">var</span> favoriteFood <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"tea"</span></span>

    <span class="token keyword">var</span> greeting<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Hello, my name is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, and I like </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">favoriteFood</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">favoriteCity</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, and the color </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">favoriteColor</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: Unlike stored properties, Swift requires you to use an explicit type with your computed properties.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/understanding-property-wrappers-in-swift-and-swiftui">Understanding property wrappers in Swift and SwiftUI</a></li><li><a href="/quick-start/swiftui/what-is-the-gesturestate-property-wrapper">What is the @GestureState property wrapper?</a></li><li><a href="/quick-start/swiftui/what-is-the-published-property-wrapper">What is the @Published property wrapper?</a></li><li><a href="/quick-start/swiftui/what-is-the-binding-property-wrapper">What is the @Binding property wrapper?</a></li></ul>
-->

:::

---

<TagLinks />