---
lang: ko-KR
title: "How to use compiler directives to detect the iOS Simulator"
description: "Article(s) > How to use compiler directives to detect the iOS Simulator"
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
      content: "Article(s) > How to use compiler directives to detect the iOS Simulator"
    - property: og:description
      content: "How to use compiler directives to detect the iOS Simulator"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use compiler directives to detect the iOS Simulator | Language - free Swift example code",
  "desc": "How to use compiler directives to detect the iOS Simulator",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift makes it easy to write special code that should be executed only in the iOS Simulator. This is helpful to test situations where the simulator and devices don't match, for example testing the accelerometer or camera.</p>
<p>If you want certain code to be run only in the iOS simulator, you should use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token directive property"><span class="token directive-name">#if</span> targetEnvironment<span class="token punctuation">(</span>simulator<span class="token punctuation">)</span></span>
<span class="token comment">// your code</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span></code></pre>
<p>Any code between the <code>#if</code> and <code>#endif</code> won't even exist when the app is run on devices, so it has zero performance impact. If you want to specify alternate code that should only be run on devices (and never on the simulator) you should use <code>#else</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">updateMotion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token directive property"><span class="token directive-name">#if</span> targetEnvironment<span class="token punctuation">(</span>simulator<span class="token punctuation">)</span></span>
    <span class="token comment">// we're on the simulator - calculate pretend movement</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> currentTouch <span class="token operator">=</span> lastTouchPosition <span class="token punctuation">{</span>
        <span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> currentTouch<span class="token punctuation">.</span>x <span class="token operator">-</span> player<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> currentTouch<span class="token punctuation">.</span>y <span class="token operator">-</span> player<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
        physicsWorld<span class="token punctuation">.</span>gravity <span class="token operator">=</span> <span class="token class-name">CGVector</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> diff<span class="token punctuation">.</span>x <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> diff<span class="token punctuation">.</span>y <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token directive property"><span class="token directive-name">#else</span></span>
    <span class="token comment">// we're on a device – use the accelerometer</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> accelerometerData <span class="token operator">=</span> motionManager<span class="token punctuation">.</span>accelerometerData <span class="token punctuation">{</span>
        physicsWorld<span class="token punctuation">.</span>gravity <span class="token operator">=</span> <span class="token class-name">CGVector</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> accelerometerData<span class="token punctuation">.</span>acceleration<span class="token punctuation">.</span>y <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> accelerometerData<span class="token punctuation">.</span>acceleration<span class="token punctuation">.</span>x <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/xcode/how-to-set-the-clock-in-the-ios-simulator">How to set the clock in the iOS Simulator</a></li><li><a href="/example-code/uikit/what-does-the-message-simulator-user-has-requested-new-graphics-quality-100-mean">What does the message "Simulator user has requested new graphics quality: 100" mean?</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li><li><a href="/example-code/catalyst/how-to-detect-your-ios-app-is-running-on-macos-catalyst">How to detect your iOS app is running on macOS Catalyst</a></li></ul>
-->

:::

---

<TagLinks />