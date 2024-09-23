---
lang: ko-KR
title: "How to run code when an object is destroyed"
description: "Article(s) > How to run code when an object is destroyed"
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
      content: "Article(s) > How to run code when an object is destroyed"
    - property: og:description
      content: "How to run code when an object is destroyed"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-run-code-when-an-object-is-destroyed.html
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
  "title": "How to run code when an object is destroyed | Language - free Swift example code",
  "desc": "How to run code when an object is destroyed",
  "link": "https://hackingwithswift.com/example-code/language/how-to-run-code-when-an-object-is-destroyed",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>All structs and classes can have initializers, which are special methods that run when those types are created. However, classes can also have <em>deinitializers</em> – code that gets run when an instance of the class is destroyed. This isn’t possible with structs because they only ever have one owner.</p>
<p>Deinitializers never take any parameters, so they are written just as <code>deinit</code>. For example, we could create a simple <code>Person</code> class with an initializer and a deinitializer:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"I'm alive!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"I'm dying!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to try that in a playground, run this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Putting the <code>Person</code> instance inside a <code>do</code> block ensures it will be destroyed before the playground finishes, so you should see “I’m alive!” and “I’m dying!”</p>
<p>Deinitializers are extremely important when handling memory that isn’t managed by Swift. For example, if you’re using an external C library and it has allocated RAM, you should free that RAM inside your deinitializer.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view">How to access a Core Data managed object context from a SwiftUI view</a></li><li><a href="/example-code/arrays/how-to-tell-if-an-array-contains-an-object">How to tell if an array contains an object</a></li><li><a href="/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a></li></ul>
-->

:::

---

<TagLinks />