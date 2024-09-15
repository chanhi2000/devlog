---
lang: ko-KR
title: "How to run code at a specific time"
description: "Article(s) > How to run code at a specific time"
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
      content: "Article(s) > How to run code at a specific time"
    - property: og:description
      content: "How to run code at a specific time"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-at-a-specific-time.html
date: 2022-03-23
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
  "title": "How to run code at a specific time | System - free Swift example code",
  "desc": "How to run code at a specific time",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-at-a-specific-time",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>You can use <code>perform(_:with:afterDelay:)</code> to run a method after a certain number of seconds have passed, but if you want to run code at a specific time –&nbsp;say at exactly 4pm – then you should use <code>Timer</code> instead. This class is great for executing code repeatedly at a specific time interval, but it's also great for running code at an exact time that you specify.</p>
<p>This is accomplished using a <code>Timer</code> constructor that accepts an <code>Date</code> for when the timer should fire. You can make this date however you want, which is what makes this approach so flexible.</p>
<p>As a simple example, this will create a timer that calls a <code>runCode()</code> method in five seconds:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">.</span><span class="token function">addingTimeInterval</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span>fireAt<span class="token punctuation">:</span> date<span class="token punctuation">,</span> interval<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>runCode<span class="token punctuation">)</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token class-name">RunLoop</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>timer<span class="token punctuation">,</span> forMode<span class="token punctuation">:</span> <span class="token punctuation">.</span>common<span class="token punctuation">)</span></code></pre>
<p>Notice how you can specify a <code>interval</code> parameter? That's for when you set <code>repeats</code> to be <code>true</code>. If you have a <code>Date</code> 5 seconds from now and an <code>interval</code> of 1 (after setting <code>repeat</code> to be true!), it means "call <code>runCode()</code> after five seconds, then every one second after that."</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li><li><a href="/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext</a></li><li><a href="/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners">How to round only specific corners using maskedCorners</a></li></ul>
-->

:::

---

<TagLinks />