---
lang: ko-KR
title: "How to add a number over your app icon using applicationIconBadgeNumber"
description: "Article(s) > How to add a number over your app icon using applicationIconBadgeNumber"
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
      content: "Article(s) > How to add a number over your app icon using applicationIconBadgeNumber"
    - property: og:description
      content: "How to add a number over your app icon using applicationIconBadgeNumber"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-number-over-your-app-icon-using-applicationiconbadgenumber.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to add a number over your app icon using applicationIconBadgeNumber | UIKit - free Swift example code",
  "desc": "How to add a number over your app icon using applicationIconBadgeNumber",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-number-over-your-app-icon-using-applicationiconbadgenumber",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>Once your app has the user’s permission to do so, you can show numbers over your icon to indicate outstanding tasks, unread messages, game invites, or whatever makes sense for your app.</p>
<p>You <em>do</em> need to get their permission, though, so you should start by adding an import for the UserNotifications framework, then request permission with code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UNUserNotificationCenter</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">requestAuthorization</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token punctuation">.</span>badge<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span>granted<span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token keyword">in</span>
    <span class="token keyword">if</span> error <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// success!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Once you have that permission –&nbsp;anywhere inside the <code>// success!</code> comment or at some point afterwards –&nbsp;you can place an integer badge of your app icon with one line of code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>applicationIconBadgeNumber <span class="token operator">=</span> <span class="token number">1</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label">How to show text and an icon side by side using Label</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />