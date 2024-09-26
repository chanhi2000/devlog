---
lang: ko-KR
title: "How to create a parallax effect in UIKit"
description: "Article(s) > How to create a parallax effect in UIKit"
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
      content: "Article(s) > How to create a parallax effect in UIKit"
    - property: og:description
      content: "How to create a parallax effect in UIKit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-a-parallax-effect-in-uikit.html
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
  "title": "How to create a parallax effect in UIKit | UIKit - free Swift example code",
  "desc": "How to create a parallax effect in UIKit",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-a-parallax-effect-in-uikit",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>Parallax effects have been standard since iOS 7.0, and the <code>UIInterpolatingMotionEffect</code> class makes this easy by automatically smoothing accelerometer input so your views can adjust to tilt data.</p>
<p>If you want to have a <code>UIView</code> respond to tilting, add this function to your code then call it on any view you want:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">addParallaxToView</span><span class="token punctuation">(</span>vw<span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> amount <span class="token operator">=</span> <span class="token number">100</span>

    <span class="token keyword">let</span> horizontal <span class="token operator">=</span> <span class="token class-name">UIInterpolatingMotionEffect</span><span class="token punctuation">(</span>keyPath<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"center.x"</span></span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token punctuation">.</span>tiltAlongHorizontalAxis<span class="token punctuation">)</span>
    horizontal<span class="token punctuation">.</span>minimumRelativeValue <span class="token operator">=</span> <span class="token operator">-</span>amount
    horizontal<span class="token punctuation">.</span>maximumRelativeValue <span class="token operator">=</span> amount

    <span class="token keyword">let</span> vertical <span class="token operator">=</span> <span class="token class-name">UIInterpolatingMotionEffect</span><span class="token punctuation">(</span>keyPath<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"center.y"</span></span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token punctuation">.</span>tiltAlongVerticalAxis<span class="token punctuation">)</span>
    vertical<span class="token punctuation">.</span>minimumRelativeValue <span class="token operator">=</span> <span class="token operator">-</span>amount
    vertical<span class="token punctuation">.</span>maximumRelativeValue <span class="token operator">=</span> amount

    <span class="token keyword">let</span> group <span class="token operator">=</span> <span class="token class-name">UIMotionEffectGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    group<span class="token punctuation">.</span>motionEffects <span class="token operator">=</span> <span class="token punctuation">[</span>horizontal<span class="token punctuation">,</span> vertical<span class="token punctuation">]</span>
    vw<span class="token punctuation">.</span><span class="token function">addMotionEffect</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both">Answering the big question: should you learn SwiftUI, UIKit, or both?</a></li><li><a href="/quick-start/swiftui/migrating-from-uikit-to-swiftui">Migrating from UIKit to SwiftUI</a></li><li><a href="/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController</a></li><li><a href="/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase">How to create a marching ants effect using lineDashPhase</a></li><li><a href="/quick-start/swiftui/how-to-create-a-marching-ants-border-effect">How to create a marching ants border effect</a></li></ul>
-->

:::

---

<TagLinks />