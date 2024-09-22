---
lang: ko-KR
title: "How to add a custom initializer to a struct without losing its memberwise initializer"
description: "Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer"
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
      content: "Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer"
    - property: og:description
      content: "How to add a custom initializer to a struct without losing its memberwise initializer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.html
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
  "title": "How to add a custom initializer to a struct without losing its memberwise initializer | Language - free Swift example code",
  "desc": "How to add a custom initializer to a struct without losing its memberwise initializer",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>All structs in Swift come with a default memberwise initializer, which is an initializer that accepts values for all the properties in the struct. However, as soon as you add your <em>own</em> initializer to the struct that memberwise initializer goes away, because it’s possible you’re doing special work that the default initializer isn’t aware of.</p>
<p>If you want to keep both the default initializer and your own custom ones, there’s a simple trick: create your initializers inside an extension rather than as part of the main struct definition.</p>
<p>For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> firstName<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> lastName<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">extension</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> split <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">components</span><span class="token punctuation">(</span>separatedBy<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">" "</span></span><span class="token punctuation">)</span>
        firstName <span class="token operator">=</span> split<span class="token punctuation">.</span>first <span class="token operator">??</span> <span class="token string-literal"><span class="token string">""</span></span>
        lastName <span class="token operator">=</span> split<span class="token punctuation">.</span>last <span class="token operator">??</span> <span class="token string-literal"><span class="token string">""</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Because my custom initializer is inside an extension, you can create instances of <code>Person</code> in two ways:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> taylor1 <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>firstName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> lastName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> taylor2 <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it">How to change a view’s anchor point without moving it</a></li><li><a href="/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct">How to create modifiers for a UIViewRepresentable struct</a></li><li><a href="/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct?</a></li><li><a href="/example-code/language/what-is-a-nested-class-or-nested-struct">What is a nested class or nested struct?</a></li><li><a href="/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable</a></li></ul>
-->

:::

---

<TagLinks />