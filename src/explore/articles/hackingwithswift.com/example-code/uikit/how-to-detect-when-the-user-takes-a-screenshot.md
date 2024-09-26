---
lang: ko-KR
title: "How to detect when the user takes a screenshot"
description: "Article(s) > How to detect when the user takes a screenshot"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect when the user takes a screenshot"
    - property: og:description
      content: "How to detect when the user takes a screenshot"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-when-the-user-takes-a-screenshot.html
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
  "title": "How to detect when the user takes a screenshot | UIKit - free Swift example code",
  "desc": "How to detect when the user takes a screenshot",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-when-the-user-takes-a-screenshot",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>If you’re showing sensitive data it can be important to know when you’re user takes a screenshot. Snapchat, for example, automatically notifies participants in a conversation if someone takes a screenshot, effectively letting them know their privacy might have been breached.</p>
<p>The key is to watch for the <code>.UIApplicationUserDidTakeScreenshot</code> message to be posted, which will happen whenever a screenshot happens. For example, this runs a <code>screenshotTaken()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>screenshotTaken<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>userDidTakeScreenshotNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>And this just prints a log message instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>forName<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>userDidTakeScreenshotNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> queue<span class="token punctuation">:</span> <span class="token class-name">OperationQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">)</span> <span class="token punctuation">{</span> notification <span class="token keyword">in</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Screenshot taken!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Use whichever of those two fits your needs best.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/system/how-to-detect-which-country-a-user-is-in">How to detect which country a user is in</a></li><li><a href="/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view">How to detect the user hovering over a view</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li></ul>
-->

:::

---

<TagLinks />