---
lang: ko-KR
title: "How to make optional protocol methods"
description: "Article(s) > How to make optional protocol methods"
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
      content: "Article(s) > How to make optional protocol methods"
    - property: og:description
      content: "How to make optional protocol methods"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-optional-protocol-methods.html
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
  "title": "How to make optional protocol methods | Language - free Swift example code",
  "desc": "How to make optional protocol methods",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-optional-protocol-methods",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>By default, all methods listed in a Swift protocol must be implementing in a conforming type. However, there are two ways you can work around this restriction depending on your need.</p>
<p>The first option is to mark your protocol using the <code>@objc</code> attribute. While this means it can be adopted only by classes, it <em>does</em> mean you mark individual methods as being <code>optional</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">protocol</span> <span class="token class-name">ObjcPrintable</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@objc</span> <span class="token keyword">optional</span> <span class="token keyword">func</span> <span class="token function-definition function">canPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span>
<span class="token punctuation">}</span></code></pre>
<p>If possible, the second option is usually better: write default implementations of the optional methods that do nothing, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">protocol</span> <span class="token class-name">Printable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">canPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">extension</span> <span class="token class-name">Printable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">canPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Remember, optional methods exist because you can provide sensible default behavior without them. In the above example it seems fair to make <code>Printable</code> things return true from <code>canPrint()</code> by default, because if someone wants to write an authentication layer for specific things they can implement their own version.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference?</a></li><li><a href="/example-code/language/what-is-optional-chaining">What is optional chaining?</a></li><li><a href="/example-code/language/how-to-use-flatmap-with-an-optional-value">How to use flatMap() with an optional value</a></li><li><a href="/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift?</a></li><li><a href="/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a></li></ul>
-->

:::

---

<TagLinks />