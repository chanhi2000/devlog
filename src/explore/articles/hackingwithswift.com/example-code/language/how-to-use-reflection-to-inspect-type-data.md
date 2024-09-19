---
lang: ko-KR
title: "How to use reflection to inspect type data"
description: "Article(s) > How to use reflection to inspect type data"
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
      content: "Article(s) > How to use reflection to inspect type data"
    - property: og:description
      content: "How to use reflection to inspect type data"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-reflection-to-inspect-type-data.html
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
  "title": "How to use reflection to inspect type data | Language - free Swift example code",
  "desc": "How to use reflection to inspect type data",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-reflection-to-inspect-type-data",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift has a built-in <code>Mirror</code> struct that lets us query any kind of data in our code. It’s most commonly used to read through the list of properties that are available, but it’s also used in playgrounds to print out user-readable values inside types.</p>
<p>To get started, first create a custom type then an instance of that type:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">26</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> taylor <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>You can now instantiate a <code>Mirror</code> object from <code>taylor</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> mirror <span class="token operator">=</span> <span class="token class-name">Mirror</span><span class="token punctuation">(</span>reflecting<span class="token punctuation">:</span> taylor<span class="token punctuation">)</span></code></pre>
<p>That mirror isn’t a copy of <code>taylor</code>, a <em>reflection</em> of it –&nbsp;something you can inspect. For example, you can loop over all the properties inside <code>taylor</code> and print out their names and values like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> <span class="token keyword">case</span> <span class="token keyword">let</span> <span class="token punctuation">(</span>label<span class="token operator">?</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token keyword">in</span> mirror<span class="token punctuation">.</span>children <span class="token punctuation">{</span>
    <span class="token function">print</span> <span class="token punctuation">(</span>label<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a></li></ul>
-->

:::

---

<TagLinks />