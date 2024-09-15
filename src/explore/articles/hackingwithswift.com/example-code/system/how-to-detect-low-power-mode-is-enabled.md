---
lang: ko-KR
title: "How to detect low power mode is enabled"
description: "Article(s) > How to detect low power mode is enabled"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect low power mode is enabled"
    - property: og:description
      content: "How to detect low power mode is enabled"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-detect-low-power-mode-is-enabled.html
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
  "title": "How to detect low power mode is enabled | System - free Swift example code",
  "desc": "How to detect low power mode is enabled",
  "link": "https://hackingwithswift.com/example-code/how-to-detect-low-power-mode-is-enabled",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>When a user has enabled low-power mode you probably want to avoid doing CPU-intensive work: not only is the system less able to give you resources, but you always want to respect the user's wishes and help their battery last as long as possible.</p>
<p>There are two ways of checking for low-power mode: you can read a property whenever you need it, or register for a notification. First, here's an example with the property:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">doComplicatedWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token class-name">ProcessInfo</span><span class="token punctuation">.</span>processInfo<span class="token punctuation">.</span>isLowPowerModeEnabled <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token comment">// continue doing complicated work here</span>
<span class="token punctuation">}</span></code></pre>
<p>You can also register to be notified when the lower power mode state changes, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>powerStateChanged<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">Notification</span><span class="token punctuation">.</span><span class="token class-name">Name</span><span class="token punctuation">.</span><span class="token class-name">NSProcessInfoPowerStateDidChange</span><span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>When that method is triggered, you can check the new value of <code>isLowPowerModeEnabled</code> to see what state the device is in:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">powerStateChanged</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> notification<span class="token punctuation">:</span> <span class="token class-name">Notification</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> lowerPowerEnabled <span class="token operator">=</span> <span class="token class-name">ProcessInfo</span><span class="token punctuation">.</span>processInfo<span class="token punctuation">.</span>isLowPowerModeEnabled
    <span class="token comment">// take appropriate action</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess">How to support low data mode networking using allowsConstrainedNetworkAccess</a></li><li><a href="/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled</a></li><li><a href="/example-code/uikit/how-to-check-whether-users-have-enabled-the-reduced-motion-setting">How to check whether users have enabled the reduced motion setting</a></li><li><a href="/quick-start/swiftui/how-to-detect-dark-mode">How to detect dark mode</a></li><li><a href="/example-code/uikit/how-to-detect-dark-mode-in-ios">How to detect dark mode in iOS</a></li></ul>
-->

:::

---

<TagLinks />