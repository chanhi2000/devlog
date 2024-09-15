---
lang: ko-KR
title: "How to cancel a delayed perform() call"
description: "Article(s) > How to cancel a delayed perform() call"
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
      content: "Article(s) > How to cancel a delayed perform() call"
    - property: og:description
      content: "How to cancel a delayed perform() call"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-cancel-a-delayed-perform-call.html
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
  "title": "How to cancel a delayed perform() call | System - free Swift example code",
  "desc": "How to cancel a delayed perform() call",
  "link": "https://hackingwithswift.com/example-code/system/how-to-cancel-a-delayed-perform-call",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>You can make a method call run after a number of seconds have elapsed using <code>perform(_:withObject:afterDelay:)</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">perform</span><span class="token punctuation">(</span><span class="token other-directive property">#selector</span><span class="token punctuation">(</span>yourMethodHere<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> afterDelay<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span></code></pre>
<p>However,&nbsp;what if you change your mind, and decide you don't want <code>yourMethodHere()</code> to be called? As long as you act before that timer expires, you have two options: cancel that specific delayed call, or cancel all delayed calls.</p>
<p>To cancel that specific method call, you need to use the method <code>cancelPreviousPerformRequests(withTarget:)</code> on <code>NSObject</code>. Provide it with a target (where the method was going to be called), as well as the same selector and object you used when calling <code>perform()</code>, and it will cancel that delayed call.</p>
<p>For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// set up a delayed call…</span>
<span class="token function">perform</span><span class="token punctuation">(</span><span class="token other-directive property">#selector</span><span class="token punctuation">(</span>yourMethodHere<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> afterDelay<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// …then immediately cancel it</span>
<span class="token class-name">NSObject</span><span class="token punctuation">.</span><span class="token function">cancelPreviousPerformRequests</span><span class="token punctuation">(</span>withTarget<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>yourMethodHere<span class="token punctuation">)</span><span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>Being able to filter the cancellation by both selector and object means you can be very specific: "cancel the printing call for this filename."</p>
<p>If you've made a number of delayed calls and want to cancel them all – very helpful if you're about to leave a view controller, for example, and want to abandon any queued work – you can use this method call instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">NSObject</span><span class="token punctuation">.</span><span class="token function">cancelPreviousPerformRequests</span><span class="token punctuation">(</span>withTarget<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">)</span></code></pre>
<p>That will cancel every call that was queued up on <code>self</code>, regardless of which selectors and objects were used.</p>
<p>If you're making delayed calls on a specific object, just use that object in place of <code>self</code>. For example:</p>
<pre class=" language-swift"><code class=" language-swift">myObj<span class="token punctuation">.</span><span class="token function">perform</span><span class="token punctuation">(</span><span class="token other-directive property">#selector</span><span class="token punctuation">(</span>yourMethodHere<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> afterDelay<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token class-name">NSObject</span><span class="token punctuation">.</span><span class="token function">cancelPreviousPerformRequests</span><span class="token punctuation">(</span>withTarget<span class="token punctuation">:</span> myObj<span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>yourMethodHere<span class="token punctuation">)</span><span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/concurrency/how-to-cancel-a-task">How to cancel a Task</a></li><li><a href="/quick-start/concurrency/how-to-cancel-a-task-group">How to cancel a task group</a></li><li><a href="/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform">How to run code after a delay using asyncAfter() and perform()</a></li><li><a href="/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger">How to perform sentiment analysis on a string using NLTagger</a></li><li><a href="/example-code/uikit/how-to-perform-a-segue-programmatically-using-performsegue">How to perform a segue programmatically using performSegue()</a></li></ul>
-->

:::

---

<TagLinks />