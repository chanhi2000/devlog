---
lang: ko-KR
title: "What is the @objcMembers attribute?"
description: "Article(s) > What is the @objcMembers attribute?"
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
      content: "Article(s) > What is the @objcMembers attribute?"
    - property: og:description
      content: "What is the @objcMembers attribute?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-objcmembers-attribute.html
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
  "title": "What is the @objcMembers attribute? | Language - free Swift example code",
  "desc": "What is the @objcMembers attribute?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-objcmembers-attribute",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>By default Swift generates code that is only available to other Swift code, but if you need to interact with the Objective-C runtime –&nbsp;all of UIKit, for example – you need to tell Swift what to do.</p>
<p>If you just want to expose a single method or property, you can mark that method using the <code>@objc</code> attribute. However, if you want <em>all</em> methods in a class to be exposed to Objective-C you can use a shortcut: the <code>@objcMembers</code> keyword:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objcMembers</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>In that code, the <code>login()</code> method will automatically be exposed to Objective-C in the same way as if it had been marked with <code>@objc</code>, because the whole class it’s inside is marked with <code>@objcMembers</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-the-autoclosure-attribute">What is the autoclosure attribute?</a></li><li><a href="/example-code/language/what-is-the-objc-attribute">What is the @objc attribute?</a></li><li><a href="/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”</a></li><li><a href="/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup</a></li><li><a href="/example-code/uikit/how-to-subclass-uiapplication-using-uiapplicationmain">How to subclass UIApplication using UIApplicationMain</a></li></ul>
-->

:::

---

<TagLinks />