---
lang: ko-KR
title: "What are convenience initializers?"
description: "Article(s) > What are convenience initializers?"
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
      content: "Article(s) > What are convenience initializers?"
    - property: og:description
      content: "What are convenience initializers?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-convenience-initializers.html
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
  "title": "What are convenience initializers? | Language - free Swift example code",
  "desc": "What are convenience initializers?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-convenience-initializers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Designated initializers are the default way of creating new instances of a type. There are others, known as convenience initializers, that are there to help you accomplish common tasks more easily, but those are in addition to your designated initializers rather than a replacement.</p>
<p>For example, you might have a <code>Polygon</code> class that stores sets of points to be drawn later on, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Polygon</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> points<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CGPoint</span><span class="token punctuation">]</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>points<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CGPoint</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>points <span class="token operator">=</span> points
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Now, if that were just a struct you could go ahead and add other initializers. But as it’s a <em>class</em> – where the rules for initialization are quite complex –&nbsp;you could add a convenience initializer that sets up squares of a specific length, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">convenience</span> <span class="token keyword">init</span><span class="token punctuation">(</span>squareWithLength length<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> points <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> length<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> length<span class="token punctuation">,</span> y<span class="token punctuation">:</span> length<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> length<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

    <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>points<span class="token punctuation">:</span> points<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note how the convenience initializer ends by calling the designated initializer – this is a requirement, and means that your convenience initializers are only responsible for setting up the parts that are unique to them rather than doing everything.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-are-designated-initializers">What are designated initializers?</a></li><li><a href="/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a></li><li><a href="/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor</a></li><li><a href="/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them?</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li></ul>
-->

:::

---

<TagLinks />