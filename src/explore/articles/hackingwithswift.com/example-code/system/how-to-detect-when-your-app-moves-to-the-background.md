---
lang: ko-KR
title: "How to detect when your app moves to the background"
description: "Article(s) > How to detect when your app moves to the background"
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
      content: "Article(s) > How to detect when your app moves to the background"
    - property: og:description
      content: "How to detect when your app moves to the background"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-detect-when-your-app-moves-to-the-background.html
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
  "title": "How to detect when your app moves to the background | System - free Swift example code",
  "desc": "How to detect when your app moves to the background",
  "link": "https://hackingwithswift.com/example-code/how-to-detect-when-your-app-moves-to-the-background",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>There are two ways to be notified when your app moves to the background: implement the <code>applicationWillResignActive()</code> method in your app delegate, or register for the <code>UIApplication.willResignActiveNotification</code> notification anywhere in your app. This particular notification is sent as soon as your app loses focus, meaning that it's triggered when the user taps the home button once (to return to the home screen) or double taps the home button (to enter multi-tasking).</p>
<p>If you want to go down the app delegate route, you'll find a stub for <code>applicationWillResignActive()</code> already in your AppDelegate.swift file. If you want to look for the notification, use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> notificationCenter <span class="token operator">=</span> <span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span>
    notificationCenter<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>appMovedToBackground<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>willResignActiveNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">appMovedToBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"App moved to background!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase">How to detect when your app moves to the background or foreground with scenePhase</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a></li><li><a href="/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background</a></li></ul>
-->

:::

---

<TagLinks />