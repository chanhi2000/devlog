---
lang: ko-KR
title: "How to cache data using NSCache"
description: "Article(s) > How to cache data using NSCache"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to cache data using NSCache"
    - property: og:description
      content: "How to cache data using NSCache"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-cache-data-using-nscache.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to cache data using NSCache | System - free Swift example code",
  "desc": "How to cache data using NSCache",
  "link": "https://hackingwithswift.com/example-code/system/how-to-cache-data-using-nscache",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>Here's an easy win for you that will make your apps immediately much better: <code>NSCache</code> is a specialized class that behaves similarly to a mutable dictionary with one major difference: iOS will automatically remove objects from the cache if the device is running low on memory.</p>
<p>Helpfully, if the system does encounter memory pressure <code>NSCache</code> will automatically start to remove items without you knowing about it, which means&nbsp;you won't get a memory warning unless even more RAM needs to be cleared. It will also remove items intelligently, trying to keep as much cached as possible.</p>
<p>Here's how to use it, imagining a fictional class called <code>ExpensiveObjectClass</code> that you want to compute as infrequently as you can:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token class-name">NSCache</span><span class="token operator">&lt;</span><span class="token class-name">NSString</span><span class="token punctuation">,</span> <span class="token class-name">ExpensiveObjectClass</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> myObject<span class="token punctuation">:</span> <span class="token class-name">ExpensiveObjectClass</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> cachedVersion <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CachedObject"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use the cached version</span>
    myObject <span class="token operator">=</span> cachedVersion
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// create it from scratch then store in the cache</span>
    myObject <span class="token operator">=</span> <span class="token class-name">ExpensiveObjectClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span>myObject<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"CachedObject"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/concurrency/how-to-create-and-use-an-actor-in-swift">How to create and use an actor in Swift</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group</a></li><li><a href="/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a></li></ul>
-->

:::

---

<TagLinks />