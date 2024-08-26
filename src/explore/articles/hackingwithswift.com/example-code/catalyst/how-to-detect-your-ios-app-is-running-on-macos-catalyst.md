---
lang: ko-KR
title: "How to detect your iOS app is running on macOS Catalyst"
description: "Article(s) > How to detect your iOS app is running on macOS Catalyst"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect your iOS app is running on macOS Catalyst"
    - property: og:description
      content: "How to detect your iOS app is running on macOS Catalyst"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/catalyst/how-to-detect-your-ios-app-is-running-on-macos-catalyst.html
date: 2019-10-04
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Catalyst - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/catalyst/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to detect your iOS app is running on macOS Catalyst | Catalyst - free Swift example code",
  "desc": "How to detect your iOS app is running on macOS Catalyst",
  "link": "https://hackingwithswift.com/example-code/catalyst/how-to-detect-your-ios-app-is-running-on-macos-catalyst",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Although Catalyst does a good job of making UIKit work on macOS, you will quickly realize that some things that worked great on iOS just aren’t great fits for macOS.</p>
<p>So, if you want to detect when your iOS app is running on macOS using Catalyst, you can add an <code>#if targetEnvironment</code> check to provide alternative functionality, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token directive property"><span class="token directive-name">#if</span> targetEnvironment<span class="token punctuation">(</span>macCatalyst<span class="token punctuation">)</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"UIKit running on macOS"</span></span><span class="token punctuation">)</span>
<span class="token directive property"><span class="token directive-name">#else</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Your regular code"</span></span><span class="token punctuation">)</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span></code></pre>
<p>If that file also happens to support other platforms such as watchOS and tvOS, you can add further checks as needed like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token directive property"><span class="token directive-name">#if</span> targetEnvironment<span class="token punctuation">(</span>macCatalyst<span class="token punctuation">)</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"UIKit running on macOS"</span></span><span class="token punctuation">)</span>
<span class="token directive property"><span class="token directive-name">#elseif</span> os<span class="token punctuation">(</span>watchOS<span class="token punctuation">)</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Running on watchOS"</span></span><span class="token punctuation">)</span>
<span class="token directive property"><span class="token directive-name">#else</span></span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Your regular code"</span></span><span class="token punctuation">)</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span></code></pre>
<p>Detecting Catalyst is particularly useful when removing behavior that, while appropriate on iOS itself, doesn’t look great on macOS. For example, having screens full of information slide onto a <code>UINavigationController</code> looks great on iPhone, OK on iPad, but downright ugly on macOS, so you might want to push view controllers without animation when running on Catalyst.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a></li><li><a href="/quick-start/swiftui/how-to-get-translucent-lists-on-macos">How to get translucent lists on macOS</a></li><li><a href="/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a></li></ul>
-->

:::

---

<TagLinks />