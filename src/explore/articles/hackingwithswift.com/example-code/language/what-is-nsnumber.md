---
lang: ko-KR
title: "What is NSNumber?"
description: "Article(s) > What is NSNumber?"
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
      content: "Article(s) > What is NSNumber?"
    - property: og:description
      content: "What is NSNumber?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-nsnumber.html
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
  "title": "What is NSNumber? | Language - free Swift example code",
  "desc": "What is NSNumber?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-nsnumber",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p><code>NSNumber</code> is an Objective-C class designed to store a variety of types of numbers. It was important in Objective-C because its primitive number types – integers, doubles, etc –&nbsp;could not be used in most of Apple’s APIs without wrapping them in an object such as <code>NSNumber</code>, but mostly Swift does a good job of automatically converting its numbers to <code>NSNumber</code> when you need it.</p>
<p>That being said, there are a few times when Swift won’t help you out, and you need to convert to <code>NSNumber</code> by hand. For example, this code is designed to convert numerical numbers like 50 into textual numbers like “fifty”, but it won’t compile:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">50</span>
<span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token class-name">NumberFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter<span class="token punctuation">.</span>numberStyle <span class="token operator">=</span> <span class="token punctuation">.</span>spellOut

<span class="token comment">// this line won't work</span>
<span class="token comment">// let string1 = formatter.string(from: number) ?? ""</span></code></pre>
<p>The problem is that the <code>string(from:)</code> method expects an <code>NSNumber</code> and Swift isn’t able to automatically bridge the integer we created in <code>number</code>. The fix here is nice and easy –&nbsp;just add <code>as NSNumber</code> to help Swift bridge the two worlds:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string2 <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> number <span class="token keyword">as</span> <span class="token class-name">NSNumber</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">""</span></span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-are-static-methods-and-variables">What are static methods and variables?</a></li><li><a href="/example-code/language/how-to-create-a-custom-optionset">How to create a custom OptionSet</a></li><li><a href="/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence?</a></li><li><a href="/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable</a></li><li><a href="/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct?</a></li></ul>
-->

:::

---

<TagLinks />