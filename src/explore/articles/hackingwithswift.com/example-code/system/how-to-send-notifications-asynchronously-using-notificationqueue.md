---
lang: ko-KR
title: "How to send notifications asynchronously using NotificationQueue"
description: "Article(s) > How to send notifications asynchronously using NotificationQueue"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to send notifications asynchronously using NotificationQueue"
    - property: og:description
      content: "How to send notifications asynchronously using NotificationQueue"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-send-notifications-asynchronously-using-notificationqueue.html
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
  "title": "How to send notifications asynchronously using NotificationQueue | System - free Swift example code",
  "desc": "How to send notifications asynchronously using NotificationQueue",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-send-notifications-asynchronously-using-notificationqueue",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>Any notifications posted using NotificationCenter are delivered <em>synchronously</em>, which means all observers get notified simultaneously and execute all their code before control gets passed back to the the poster of the notification.</p>
<p>While that’s often what you want, sometimes it can be problematic because processing repeated notifications during busy periods can slow your app down. Fortunately, Apple gives us an alternative in the shape of <code>NotificationQueue</code>: an asynchronous system that queues up notifications at different urgencies, and can even coalesce similar messages to avoid repetition.</p>
<p>You can try it out using this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> notification <span class="token operator">=</span> <span class="token class-name">Notification</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">Notification</span><span class="token punctuation">.</span><span class="token class-name">Name</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"MyValueChanged"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token class-name">NotificationQueue</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>notification<span class="token punctuation">,</span> postingStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>whenIdle<span class="token punctuation">,</span> coalesceMask<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">none</span><span class="token punctuation">,</span> forModes<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>That will enqueue the “MyValueChanged” notification to be delivered when your app is idle, and without coalescing. You can also use <code>.asap</code> for your posting style to deliver in the next run loop, and <code>.now</code>, which will cause the notification to be delivered synchronously.</p>
<p>The reason the <code>.now</code> posting style is important is because of the ability of <code>NotificationQueue</code> to <em>coalesce</em> notifications –&nbsp;i.e., join them together. If you specify <code>.onName</code> for the <code>coalesceMask</code> property it will automatically merge any notifications of the same name, which stops observers being overloaded by repeated notifications.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-asynchronously-using-gcd-async">How to run code asynchronously using GCD async()</a></li><li><a href="/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange">How to send state updates manually using objectWillChange</a></li><li><a href="/example-code/uikit/how-to-send-an-email">How to send an email</a></li><li><a href="/example-code/uikit/why-can-i-not-register-for-push-notifications">Why can I not register for push notifications?</a></li><li><a href="/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument">How to group user notifications using threadIdentifier and summaryArgument</a></li></ul>
-->

:::

---

<TagLinks />