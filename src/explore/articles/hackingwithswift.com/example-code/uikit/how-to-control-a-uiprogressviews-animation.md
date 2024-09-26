---
lang: ko-KR
title: "How to control a UIProgressView’s animation"
description: "Article(s) > How to control a UIProgressView’s animation"
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
      content: "Article(s) > How to control a UIProgressView’s animation"
    - property: og:description
      content: "How to control a UIProgressView’s animation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-control-a-uiprogressviews-animation.html
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
  "title": "How to control a UIProgressView’s animation | UIKit - free Swift example code",
  "desc": "How to control a UIProgressView’s animation",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-control-a-uiprogressviews-animation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>The <code>UIProgressView</code> class has a built-in <code>setProgress()</code> method that adjusts its progress with animation, but by default you don’t have control over the timing of that animation.</p>
<p>Fortunately, if you want to time the animation to match other aspects of your user interface you can wrap it inside an animation block of your own.</p>
<p>For example, given a <code>UIProgressView</code> stored in a <code>progressView</code> property, this will animate the progress view to completion over four seconds:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">4.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>progressView<span class="token punctuation">.</span><span class="token function">setProgress</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-start-an-animation-immediately-after-a-view-appears">How to start an animation immediately after a view appears</a></li><li><a href="/quick-start/swiftui/how-to-create-an-explicit-animation">How to create an explicit animation</a></li><li><a href="/quick-start/swiftui/how-to-create-a-spring-animation">How to create a spring animation</a></li><li><a href="/quick-start/swiftui/how-to-delay-an-animation">How to delay an animation</a></li><li><a href="/quick-start/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes">How to run a completion callback when an animation finishes</a></li></ul>
-->

:::

---

<TagLinks />