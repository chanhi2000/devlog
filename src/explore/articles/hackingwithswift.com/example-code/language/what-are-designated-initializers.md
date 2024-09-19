---
lang: ko-KR
title: "What are designated initializers?"
description: "Article(s) > What are designated initializers?"
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
      content: "Article(s) > What are designated initializers?"
    - property: og:description
      content: "What are designated initializers?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-designated-initializers.html
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
  "title": "What are designated initializers? | Language - free Swift example code",
  "desc": "What are designated initializers?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-designated-initializers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Designated initializers are the default way of creating new instances of a type. There are others, known as convenience initializers, that are there to help you accomplish common tasks more easily, but those are in addition to your designated initializers rather than a replacement.</p>
<p>For example, you might create a <code>Polygon</code> class that stores sets of points to be drawn later on, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Polygon</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> points<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CGPoint</span><span class="token punctuation">]</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>points<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CGPoint</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>points <span class="token operator">=</span> points
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That initializer is your designated initializer: one that will set up all properties fully in a default way. You could add convenience initializers on top to perform certain tasks –&nbsp;creating squares or triangles would make sense in this scenario –&nbsp;but those must always end by calling a designated initializer.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-are-convenience-initializers">What are convenience initializers?</a></li><li><a href="/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a></li><li><a href="/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”</a></li><li><a href="/quick-start/concurrency/whats-the-difference-between-actors-classes-and-structs">What’s the difference between actors, classes, and structs?</a></li><li><a href="/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them?</a></li></ul>
-->

:::

---

<TagLinks />