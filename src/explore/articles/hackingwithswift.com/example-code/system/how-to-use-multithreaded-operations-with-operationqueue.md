---
lang: ko-KR
title: "How to use multithreaded operations with OperationQueue"
description: "Article(s) > How to use multithreaded operations with OperationQueue"
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
      content: "Article(s) > How to use multithreaded operations with OperationQueue"
    - property: og:description
      content: "How to use multithreaded operations with OperationQueue"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-multithreaded-operations-with-operationqueue.html
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
  "title": "How to use multithreaded operations with OperationQueue | System - free Swift example code",
  "desc": "How to use multithreaded operations with OperationQueue",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-multithreaded-operations-with-operationqueue",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>There are lots of ways to work with Grand Central Dispatch (GCD) on iOS, but <code>OperationQueue</code> is particularly powerful because it lets you control precisely how many simultaneous operations can run and what quality of service you need, while also letting you schedule work using closures. You can even ask the operation queue to wait until all its operations are finished, which makes scheduling easier.</p>
<p>If you had an array of images you needed to process then save somewhere, you might normally write a loop like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> image <span class="token keyword">in</span> images <span class="token punctuation">{</span>
    <span class="token function">process</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>However, that’s single-threaded – it can only use one of the available CPU cores. With only a small change you can get the same behavior working across multiple cores, and the operation queue will wait until it’s all complete so it doesn’t change the meaning of your code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token class-name">OperationQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> image <span class="token keyword">in</span> images <span class="token punctuation">{</span>
    queue<span class="token punctuation">.</span>addOperation <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

queue<span class="token punctuation">.</span><span class="token function">waitUntilAllOperationsAreFinished</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>You can add as many operations as you want, but they don’t all get executed at the same time. Instead, <code>OperationQueue</code> limits the number of operations based on system conditions –&nbsp;if it’s a more powerful device that isn’t doing much right now, you’ll get more operations than a less powerful device or a device that’s busy with other work.</p>
<p>You can override this behavior if you need something specific:</p>
<pre class=" language-swift"><code class=" language-swift">queue<span class="token punctuation">.</span>maxConcurrentOperationCount <span class="token operator">=</span> <span class="token number">4</span></code></pre>
<p>And if you ever need to stop all operations that have yet to be started, call <code>cancelAllOperations()</code> on your queue, like this:</p>
<pre class=" language-swift"><code class=" language-swift">queue<span class="token punctuation">.</span><span class="token function">cancelAllOperations</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>That won’t cancel any operations that are currently in flight.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency()</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li></ul>
-->

:::

---

<TagLinks />