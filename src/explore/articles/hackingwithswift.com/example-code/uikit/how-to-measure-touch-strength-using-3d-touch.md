---
lang: ko-KR
title: "How to measure touch strength using 3D Touch"
description: "Article(s) > How to measure touch strength using 3D Touch"
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
      content: "Article(s) > How to measure touch strength using 3D Touch"
    - property: og:description
      content: "How to measure touch strength using 3D Touch"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-measure-touch-strength-using-3d-touch.html
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
  "title": "How to measure touch strength using 3D Touch | UIKit - free Swift example code",
  "desc": "How to measure touch strength using 3D Touch",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-measure-touch-strength-using-3d-touch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>You can read a user's 3D Touch strength using the <code>force</code> property of a <code>UITouch</code>, which is best used when compared against the <code>touch.maximumPossibleForce</code>. For example, you can divide one into the other to see how much relative strength is applied, or do a straight comparison to check to see whether the user is pressing as hard as possible.</p>
<p>Before you try to make use of 3D Touch, make sure it's available by checking the <code>forceTouchCapability</code> of your current trait collection. Here's an example <code>touchesMoved()</code> implementation that checks whether 3D Touch is available and the user is pressing hard:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesMoved</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">touchesMoved</span><span class="token punctuation">(</span>touches<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> touch <span class="token operator">=</span> touches<span class="token punctuation">.</span>first <span class="token punctuation">{</span>
        <span class="token keyword">if</span> view<span class="token punctuation">.</span>traitCollection<span class="token punctuation">.</span>forceTouchCapability <span class="token operator">==</span> <span class="token punctuation">.</span>available <span class="token punctuation">{</span>
            <span class="token keyword">if</span> touch<span class="token punctuation">.</span>force <span class="token operator">==</span> touch<span class="token punctuation">.</span>maximumPossibleForce <span class="token punctuation">{</span>
                <span class="token comment">// user pressed hard – do something!</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure()</a></li><li><a href="/example-code/strings/how-to-measure-a-string-for-objective-c-code">How to measure a string for Objective-C code</a></li><li><a href="/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects">How to add Metal shaders to SwiftUI views using layer effects</a></li><li><a href="/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a></li><li><a href="/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint</a></li></ul>
-->

:::

---

<TagLinks />