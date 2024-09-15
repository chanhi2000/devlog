---
lang: ko-KR
title: "How to synchronize code to drawing using CADisplayLink"
description: "Article(s) > How to synchronize code to drawing using CADisplayLink"
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
  - ios-3.1
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to synchronize code to drawing using CADisplayLink"
    - property: og:description
      content: "How to synchronize code to drawing using CADisplayLink"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-synchronize-code-to-drawing-using-cadisplaylink.html
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
  "title": "How to synchronize code to drawing using CADisplayLink | System - free Swift example code",
  "desc": "How to synchronize code to drawing using CADisplayLink",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-synchronize-code-to-drawing-using-cadisplaylink",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.1

<!-- TODO: 작성 -->

<!-- 
<p>Lots of beginners think <code>Timer</code> is a great way to handle running apps or games so that update code is executed every time the screen is redrawn. Their logic is simple: update the app every 60th of a second and you're perfectly placed for smooth redraws.</p>
<p>The problem is, they are forgetting that <code>Timer</code> doesn't offer precise firing and can drift earlier or later than requested updates, and also has no idea about screen redraws and so could happily fire 10ms after a screen redraw just happened –&nbsp;and when you're working to 16.666ms frames, 10ms is a long time!</p>
<p>A smarter and faster solution is the <code>CADisplayLink</code> class, which automatically calls a method you define as soon as a screen redraw happens, so you always have maximum time to execute your update code. It's extremely simple to use –&nbsp;here's an example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> displayLink <span class="token operator">=</span> <span class="token class-name">CADisplayLink</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span><span class="token punctuation">)</span>
displayLink<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>current<span class="token punctuation">,</span> forMode<span class="token punctuation">:</span> <span class="token punctuation">.</span>common<span class="token punctuation">)</span></code></pre>
<p>That will call a method called <code>update()</code> every 60th of a second by default. You can see it in action with this method stub:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Updating!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect()</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code</a></li></ul>
-->

:::

---

<TagLinks />