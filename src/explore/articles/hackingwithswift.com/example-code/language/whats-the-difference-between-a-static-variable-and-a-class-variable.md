---
lang: ko-KR
title: "What’s the difference between a static variable and a class variable?"
description: "Article(s) > What’s the difference between a static variable and a class variable?"
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
      content: "Article(s) > What’s the difference between a static variable and a class variable?"
    - property: og:description
      content: "What’s the difference between a static variable and a class variable?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable.html
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
  "title": "What’s the difference between a static variable and a class variable? | Language - free Swift example code",
  "desc": "What’s the difference between a static variable and a class variable?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Both the <code>static</code> and <code>class</code> keywords allow us to attach variables to a class rather than to instances of a class. For example, you might create a <code>Student</code> class with properties such as <code>name</code> and <code>age</code>, then create a static <code>numberOfStudents</code> property that is owned by the <code>Student</code> class itself rather than individual instances.</p>
<p>Where <code>static</code> and <code>class</code> differ is how they support inheritance: When you make a <code>static</code> property it becomes owned by the class and cannot be changed by subclasses, whereas when you use <code>class</code> it may be overridden if needed.</p>
<p>For example, here’s a <code>Person</code> class with one static property and one class property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">var</span> count<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">250</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token keyword">var</span> averageAge<span class="token punctuation">:</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">30</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If we created a <code>Student</code> class by inheriting from <code>Person</code>, trying to override <code>count</code> (the static property) would fail to compile if uncommented, whereas trying to override <code>averageAge</code> (the class property) is OK:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// THIS ISN'T ALLOWED</span>
    <span class="token comment">// override static var count: Int {</span>
    <span class="token comment">//    return 150</span>
    <span class="token comment">// }</span>

    <span class="token comment">// THIS IS ALLOWED</span>
    <span class="token keyword">override</span> <span class="token keyword">class</span> <span class="token keyword">var</span> averageAge<span class="token punctuation">:</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">19.5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />