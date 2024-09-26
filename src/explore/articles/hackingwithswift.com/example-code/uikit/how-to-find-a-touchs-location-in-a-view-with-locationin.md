---
lang: ko-KR
title: "How to find a touch's location in a view with location(in:)"
description: "Article(s) > How to find a touch's location in a view with location(in:)"
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
      content: "Article(s) > How to find a touch's location in a view with location(in:)"
    - property: og:description
      content: "How to find a touch's location in a view with location(in:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin.html
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
  "title": "How to find a touch's location in a view with location(in:) | UIKit - free Swift example code",
  "desc": "How to find a touch's location in a view with location(in:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>When the user starts touching an iOS screen, <code>touchesBegan()</code> is immediately called with a set of <code>UITouches</code>. If you want to find where the user touched, you need to take one of those touches then use <code>location(in:)</code> on it, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> touch <span class="token operator">=</span> touches<span class="token punctuation">.</span>first <span class="token punctuation">{</span>
        <span class="token keyword">let</span> position <span class="token operator">=</span> touch<span class="token punctuation">.</span><span class="token function">location</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> view<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That will make <code>position</code> a <code>CGPoint</code> representing where the user touched in the current view. You can if you want pass a different view to <code>location(in:)</code>, and it will tell you where the touch was relative to that other view instead.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a></li><li><a href="/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint</a></li><li><a href="/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a></li></ul>
-->

:::

---

<TagLinks />