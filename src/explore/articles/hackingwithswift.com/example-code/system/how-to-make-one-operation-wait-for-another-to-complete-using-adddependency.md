---
lang: ko-KR
title: "How to make one operation wait for another to complete using addDependency()"
description: "Article(s) > How to make one operation wait for another to complete using addDependency()"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make one operation wait for another to complete using addDependency()"
    - property: og:description
      content: "How to make one operation wait for another to complete using addDependency()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency.html
date: 2019-10-29
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
  "title": "How to make one operation wait for another to complete using addDependency() | System - free Swift example code",
  "desc": "How to make one operation wait for another to complete using addDependency()",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>When working with multiple instances of <code>Operation</code>, you’ll often want to queue up work that needs to be performed sequentially rather than all at once. If you want one operation to wait for another to complete before it starts, regardless of which operation queue either one is running on, you should use <code>addDependency()</code> to make the sequence clear to the system.</p>
<p>As an example, we could create two instances of <code>BlockOperation</code> that each print messages and pause a little:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> operation1 <span class="token operator">=</span> <span class="token class-name">BlockOperation</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Operation 1 is starting"</span></span><span class="token punctuation">)</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>forTimeInterval<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Operation 1 is finishing"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> operation2 <span class="token operator">=</span> <span class="token class-name">BlockOperation</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Operation 2 is starting"</span></span><span class="token punctuation">)</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>forTimeInterval<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Operation 2 is finishing"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>If we added those directly to an operation queue, they would both start running immediately. However, we could tell <code>operation2</code> that it needs to wait for <code>operation1</code> to complete, like this:</p>
<pre class=" language-swift"><code class=" language-swift">operation2<span class="token punctuation">.</span><span class="token function">addDependency</span><span class="token punctuation">(</span>operation1<span class="token punctuation">)</span></code></pre>
<p>Now if we add the operations to a queue they will execute sequentially rather than in parallel:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Adding operations"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token class-name">OperationQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">addOperation</span><span class="token punctuation">(</span>operation1<span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">addOperation</span><span class="token punctuation">(</span>operation2<span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">waitUntilAllOperationsAreFinished</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Done!"</span></span><span class="token punctuation">)</span></code></pre>
<p>You can add dependencies across operation queues if you need, which means you can queue up work to run in the background, then the main thread, then back to the background again without causing problems. So, we could rewrite the above code to run the operations on separate operation queues and we’d still get the same end result:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Adding operations"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> queue1 <span class="token operator">=</span> <span class="token class-name">OperationQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> queue2 <span class="token operator">=</span> <span class="token class-name">OperationQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
queue1<span class="token punctuation">.</span><span class="token function">addOperation</span><span class="token punctuation">(</span>operation1<span class="token punctuation">)</span>
queue2<span class="token punctuation">.</span><span class="token function">addOperation</span><span class="token punctuation">(</span>operation2<span class="token punctuation">)</span>
queue2<span class="token punctuation">.</span><span class="token function">waitUntilAllOperationsAreFinished</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Done!"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity">How to make a network request wait for an internet connection using waitsForConnectivity</a></li><li><a href="/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition</a></li><li><a href="/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture()</a></li><li><a href="/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a></li><li><a href="/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another</a></li></ul>
-->

:::

---

<TagLinks />