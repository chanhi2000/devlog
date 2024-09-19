---
lang: ko-KR
title: "What is typecasting?"
description: "Article(s) > What is typecasting?"
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
      content: "Article(s) > What is typecasting?"
    - property: og:description
      content: "What is typecasting?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-typecasting.html
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
  "title": "What is typecasting? | Language - free Swift example code",
  "desc": "What is typecasting?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-typecasting",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>One of the many safety features of Swift is its type safety, which means it must know what kind of data is being held by all values at all times. However, sometimes you know information that Swift doesn’t: you know that the <code>UIViewController</code> you have a reference to is in fact your custom <code>PictureViewController</code> subclass, and you want to treat it like one.</p>
<p>Typecasting is the process of passing on your extra knowledge to Swift –&nbsp;a way of saying “that thing you thought was an X is actually a Y”. Swift won’t let you typecast completely unrelated types, which means you can’t say things like “that thing you thought was a string is actually an integer”, but is instead mainly used for subclasses.</p>
<p>As an example, here’s how we create new view controllers from a storyboard:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> vc <span class="token operator">=</span> storyboard<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">instantiateViewController</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Detail"</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">DetailViewController</span></code></pre>
<p>That <code>as?</code> is a typecast -&nbsp;we’re passing on to Swift the knowledge that the view controller we expect to be created is in fact a <code>DetailViewController</code>. If the typecast fails then <code>vc</code> will be nil, but if it succeeds then Swift will be able to use it as a <code>DetailViewController</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable</a></li><li><a href="/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger">How to perform sentiment analysis on a string using NLTagger</a></li><li><a href="/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct?</a></li><li><a href="/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess">How to support low data mode networking using allowsConstrainedNetworkAccess</a></li></ul>
-->

:::

---

<TagLinks />