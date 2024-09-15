---
lang: ko-KR
title: "How to run code asynchronously using GCD async()"
description: "Article(s) > How to run code asynchronously using GCD async()"
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
      content: "Article(s) > How to run code asynchronously using GCD async()"
    - property: og:description
      content: "How to run code asynchronously using GCD async()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-asynchronously-using-gcd-async.html
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
  "title": "How to run code asynchronously using GCD async() | System - free Swift example code",
  "desc": "How to run code asynchronously using GCD async()",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-asynchronously-using-gcd-async",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span>qos<span class="token punctuation">:</span> <span class="token punctuation">.</span>userInitiated<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">yourCodeHere</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>The <code>.userInitiated</code> quality of service setting is the highest priority after <code>userInteractive</code>. You can also use <code>utility</code> (lower priority) or <code>.background</code> (lowest priority.)</p>
<p>The second option looks like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">performSelector</span><span class="token punctuation">(</span>inBackground<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>yourCodeHere<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>You'll need to replace <code>yourCodeHere</code> with the name of an actual method. If you want to pass a parameter, make sure and use “yourCodeHere:" and provide a value for the <code>with</code> parameter.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-on-the-main-thread-using-gcd-async">How to run code on the main thread using GCD async()</a></li><li><a href="/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue">How to send notifications asynchronously using NotificationQueue</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li></ul>
-->

:::

---

<TagLinks />