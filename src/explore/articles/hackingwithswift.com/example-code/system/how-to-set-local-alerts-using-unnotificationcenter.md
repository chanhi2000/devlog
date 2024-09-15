---
lang: ko-KR
title: "How to set local alerts using UNNotificationCenter"
description: "Article(s) > How to set local alerts using UNNotificationCenter"
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
      content: "Article(s) > How to set local alerts using UNNotificationCenter"
    - property: og:description
      content: "How to set local alerts using UNNotificationCenter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-set-local-alerts-using-unnotificationcenter.html
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
  "title": "How to set local alerts using UNNotificationCenter | System - free Swift example code",
  "desc": "How to set local alerts using UNNotificationCenter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-set-local-alerts-using-unnotificationcenter",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Local notifications are messages that appear on the user's lock screen when your app isn't running. The user can then swipe to unlock their device and go straight to your app, at which point you can act on the notification.</p>
<p>All this is done using the User Notifications framework, so import that now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">UserNotifications</span></code></pre>
<p>To begin with, you need to ask for permission in order to show messages on the lock screen. Here's how that's done:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token class-name">UNUserNotificationCenter</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

center<span class="token punctuation">.</span><span class="token function">requestAuthorization</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>alert<span class="token punctuation">,</span> <span class="token punctuation">.</span>badge<span class="token punctuation">,</span> <span class="token punctuation">.</span>sound<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>granted<span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token keyword">in</span>
    <span class="token keyword">if</span> granted <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Yay!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"D'oh"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That will show an alert to the user asking them if they want to let you show notifications. When it comes to scheduling a notification, you need to choose a trigger (when to show) and content (what to show), then combine them together into a single request. </p>
<p>Here's the code required to show a local notification:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">scheduleNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token class-name">UNUserNotificationCenter</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token class-name">UNMutableNotificationContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    content<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Late wake up call"</span></span>
    content<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"The early bird catches the worm, but the second mouse gets the cheese."</span></span>
    content<span class="token punctuation">.</span>categoryIdentifier <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"alarm"</span></span>
    content<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"customData"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"fizzbuzz"</span></span><span class="token punctuation">]</span>
    content<span class="token punctuation">.</span>sound <span class="token operator">=</span> <span class="token class-name">UNNotificationSound</span><span class="token punctuation">.</span><span class="token keyword">default</span>

    <span class="token keyword">var</span> dateComponents <span class="token operator">=</span> <span class="token class-name">DateComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dateComponents<span class="token punctuation">.</span>hour <span class="token operator">=</span> <span class="token number">10</span>
    dateComponents<span class="token punctuation">.</span>minute <span class="token operator">=</span> <span class="token number">30</span>
    <span class="token keyword">let</span> trigger <span class="token operator">=</span> <span class="token class-name">UNTimeIntervalNotificationTrigger</span><span class="token punctuation">(</span>timeInterval<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token class-name">UNNotificationRequest</span><span class="token punctuation">(</span>identifier<span class="token punctuation">:</span> <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uuidString<span class="token punctuation">,</span> content<span class="token punctuation">:</span> content<span class="token punctuation">,</span> trigger<span class="token punctuation">:</span> trigger<span class="token punctuation">)</span>
    center<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>The <code>trigger</code> constant is being created using a time interval, which means this notification will appear five seconds after you schedule it. </p>
<p>If you want a specific time, use <code>UNCalendarNotificationTrigger</code> instead, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> dateComponents <span class="token operator">=</span> <span class="token class-name">DateComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dateComponents<span class="token punctuation">.</span>hour <span class="token operator">=</span> <span class="token number">10</span>
dateComponents<span class="token punctuation">.</span>minute <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">let</span> trigger <span class="token operator">=</span> <span class="token class-name">UNCalendarNotificationTrigger</span><span class="token punctuation">(</span>dateMatching<span class="token punctuation">:</span> dateComponents<span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>That will show an alert at 10:30am every day, because its <code>repeats</code> property is set to true.</p>
<p>The notification request code above also set a <code>userInfo</code> property on the notification, which is a dictionary where you can store any kind of context data you want. This dictionary gets given back to you when the user unlocks their device using your notification, so you can act on the alert in a meaningful way.</p>
<p>If you want to attach custom buttons to your notification, you need to use the <code>UNNotificationAction</code> class, then register various actions against a category string. We used the category identifier string of “alarm” above, so we could attach a button to that category like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">registerCategories</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token class-name">UNUserNotificationCenter</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    center<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>

    <span class="token keyword">let</span> show <span class="token operator">=</span> <span class="token class-name">UNNotificationAction</span><span class="token punctuation">(</span>identifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"show"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Tell me more…"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>foreground<span class="token punctuation">)</span>
    <span class="token keyword">let</span> category <span class="token operator">=</span> <span class="token class-name">UNNotificationCategory</span><span class="token punctuation">(</span>identifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"alarm"</span></span><span class="token punctuation">,</span> actions<span class="token punctuation">:</span> <span class="token punctuation">[</span>show<span class="token punctuation">]</span><span class="token punctuation">,</span> intentIdentifiers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    center<span class="token punctuation">.</span><span class="token function">setNotificationCategories</span><span class="token punctuation">(</span><span class="token punctuation">[</span>category<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note that that code sets <code>self</code> to be the delegate for the notification center, so you’ll need to make your view controller conform to the <code>UNUserNotificationCenterDelegate</code> protocol.</p>
<p>When a message comes in, your delegate will get notified and you can take the appropriate action. We gave the “Tell me more…” button the identifier “show”, so that’s what will be passed to us if the user taps that button. Alternatively, we’ll be sent <code>UNNotificationDefaultActionIdentifier</code> to mean “the user swiped to unlock using our notification.” </p>
<p>Here’s some code handling both options:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">userNotificationCenter</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> center<span class="token punctuation">:</span> <span class="token class-name">UNUserNotificationCenter</span><span class="token punctuation">,</span> didReceive response<span class="token punctuation">:</span> <span class="token class-name">UNNotificationResponse</span><span class="token punctuation">,</span> withCompletionHandler completionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// pull out the buried userInfo dictionary</span>
    <span class="token keyword">let</span> userInfo <span class="token operator">=</span> response<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>request<span class="token punctuation">.</span>content<span class="token punctuation">.</span>userInfo

    <span class="token keyword">if</span> <span class="token keyword">let</span> customData <span class="token operator">=</span> userInfo<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"customData"</span></span><span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Custom data received: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">customData</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

        <span class="token keyword">switch</span> response<span class="token punctuation">.</span>actionIdentifier <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">UNNotificationDefaultActionIdentifier</span><span class="token punctuation">:</span>
            <span class="token comment">// the user swiped to unlock</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Default identifier"</span></span><span class="token punctuation">)</span>

        <span class="token keyword">case</span> <span class="token string-literal"><span class="token string">"show"</span></span><span class="token punctuation">:</span>
            <span class="token comment">// the user tapped our "show more info…" button</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Show more information…"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token label important">

        default</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// you must call the completion handler when you're done</span>
    <span class="token function">completionHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That code also pulls out the <code>CustomField1</code> value that was set in the <code>userInfo</code> earlier.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view</a></li><li><a href="/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values</a></li><li><a href="/example-code/language/how-to-use-local-variable-observers">How to use local variable observers</a></li><li><a href="/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet</a></li><li><a href="/example-code/language/when-to-use-a-set-rather-than-an-array">When to use a set rather than an array</a></li></ul>
-->

:::

---

<TagLinks />