---
lang: ko-KR
title: "What is the nil coalescing operator?"
description: "Article(s) > What is the nil coalescing operator?"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is the nil coalescing operator?"
    - property: og:description
      content: "What is the nil coalescing operator?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-nil-coalescing-operator.html
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
  "title": "What is the nil coalescing operator? | Language - free Swift example code",
  "desc": "What is the nil coalescing operator?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-nil-coalescing-operator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Optionals are a powerful source of safety in Swift, but can also be annoying if you find them littered throughout your code. Swift's nil coalescing operator helps you solve this problem by either unwrapping an optional if it has a value, or providing a default if the optional is empty.</p>
<p>Here's an example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
<span class="token keyword">let</span> unwrappedName <span class="token operator">=</span> name <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span></code></pre>
<p>Because <code>name</code> is an optional string, we need to unwrap it safely to ensure it has a meaningful value. The nil coalescing operator –&nbsp;<code>??</code> – does exactly that, but if it finds the optional has no value then it uses a default instead. In this case, the default is "Anonymous". What this means is that <code>unwrappedName</code> has the data type <code>String</code> rather than <code>String?</code> because it can be guaranteed to have a value.</p>
<p>You don't need to create a separate variable to use nil coalescing. For example, this works fine too:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">!"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-loop-over-non-nil-items-in-an-array">How to loop over non-nil items in an array</a></li><li><a href="/example-code/language/how-to-use-operator-overloading">How to use operator overloading</a></li><li><a href="/example-code/language/what-is-the-ternary-operator">What is the ternary operator?</a></li><li><a href="/example-code/system/how-to-save-user-settings-using-userdefaults">How to save user settings using UserDefaults</a></li><li><a href="/quick-start/concurrency/how-to-create-a-custom-asyncsequence">How to create a custom AsyncSequence</a></li></ul>
-->

:::

---

<TagLinks />