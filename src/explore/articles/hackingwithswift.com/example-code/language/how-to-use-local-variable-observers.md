---
lang: ko-KR
title: "How to use local variable observers"
description: "Article(s) > How to use local variable observers"
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
      content: "Article(s) > How to use local variable observers"
    - property: og:description
      content: "How to use local variable observers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-local-variable-observers.html
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
  "title": "How to use local variable observers | Language - free Swift example code",
  "desc": "How to use local variable observers",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-local-variable-observers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>You should already be familiar with the concept of property observers in Swift – those <code>willSet</code> and <code>didSet</code> blocks you can attach to property on classes and structs. Well, those same blocks can be attached to local and global variables as well, allowing you to respond to changes easily.</p>
<p>The syntax is identical: create your variable, give it an initial value, then provide <code>willSet</code> and/or <code>didSet</code> closures inside braces, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">didSet</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Name changed to </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Justin Bieber"</span></span></code></pre>
<p>That will print “Name changed to Justin Bieber!” when run.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable">What’s the difference between a static variable and a class variable?</a></li><li><a href="/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values</a></li><li><a href="/example-code/language/what-are-property-observers">What are property observers?</a></li><li><a href="/example-code/system/how-to-set-local-alerts-using-unnotificationcenter">How to set local alerts using UNNotificationCenter</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li></ul>
-->

:::

---

<TagLinks />