---
lang: ko-KR
title: "What is a singleton?"
description: "Article(s) > What is a singleton?"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is a singleton?"
    - property: og:description
      content: "What is a singleton?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-singleton.html
date: 2022-04-11
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
  "title": "What is a singleton? | Language - free Swift example code",
  "desc": "What is a singleton?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-singleton",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Singletons are objects that should only ever be created once, then shared everywhere they need to be used. They are common on Apple’s platforms: <code>FileManager</code>, <code>UserDefaults</code>, <code>UIApplication</code>, and <code>UIAccelerometer</code> are all mostly used through their singleton implementations.</p>
<p>The basic implementation of a Swift singleton looks like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Settings</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">let</span> shared <span class="token operator">=</span> <span class="token class-name">Settings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span>

    <span class="token keyword">private</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Adding a <code>private</code> initializer is important, because it stops other parts of our code from trying to create a <code>Settings</code> class instance. However, the class creates its own instance of itself as a static variable, which means the only instance of the <code>Settings</code> class is the one it created: <code>Settings.shared</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array</a></li><li><a href="/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder">How to specify your own date format with Codable and JSONEncoder</a></li><li><a href="/example-code/language/what-is-a-protocol">What is a protocol?</a></li><li><a href="/example-code/language/what-is-the-objcmembers-attribute">What is the @objcMembers attribute?</a></li><li><a href="/example-code/language/what-is-class-inheritance">What is class inheritance?</a></li></ul>
-->

:::

---

<TagLinks />