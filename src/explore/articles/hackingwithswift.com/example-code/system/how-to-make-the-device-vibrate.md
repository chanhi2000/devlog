---
lang: ko-KR
title: "How to make the device vibrate"
description: "Article(s) > How to make the device vibrate"
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
      content: "Article(s) > How to make the device vibrate"
    - property: og:description
      content: "How to make the device vibrate"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-the-device-vibrate.html
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
  "title": "How to make the device vibrate | System - free Swift example code",
  "desc": "How to make the device vibrate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-the-device-vibrate",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>All iPhones have a built-in motor to create vibration effects, and if you just want a quick vibration it takes just one line of code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">AudioServicesPlaySystemSound</span><span class="token punctuation">(</span><span class="token constant">kSystemSoundID_Vibrate</span><span class="token punctuation">)</span></code></pre>
<p>You’ll need to import the AVFoundation framework if you don’t have it already.</p>
<p>That’s not a particularly easy line of code to remember, so why not make it an extension on <code>UIDevice</code>?</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">extension</span> <span class="token class-name">UIDevice</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">vibrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AudioServicesPlaySystemSound</span><span class="token punctuation">(</span><span class="token constant">kSystemSoundID_Vibrate</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Now you can just call <code>UIDevice.vibrate()</code> as needed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-detect-device-rotation">How to detect device rotation</a></li><li><a href="/example-code/uikit/how-to-respond-to-the-device-being-shaken">How to respond to the device being shaken</a></li><li><a href="/example-code/system/how-to-identify-an-ios-device-uniquely-with-identifierforvendor">How to identify an iOS device uniquely with identifierForVendor</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />