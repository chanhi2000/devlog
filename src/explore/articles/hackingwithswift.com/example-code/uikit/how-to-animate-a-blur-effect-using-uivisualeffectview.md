---
lang: ko-KR
title: "How to animate a blur effect using UIVisualEffectView"
description: "Article(s) > How to animate a blur effect using UIVisualEffectView"
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
      content: "Article(s) > How to animate a blur effect using UIVisualEffectView"
    - property: og:description
      content: "How to animate a blur effect using UIVisualEffectView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview.html
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
  "title": "How to animate a blur effect using UIVisualEffectView | UIKit - free Swift example code",
  "desc": "How to animate a blur effect using UIVisualEffectView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>UIKit’s <code>UIVisualEffectView</code> class lets us add blurring effects to any view, optionally also combining a vibrancy effect to overlaid controls to help make them stand out. This makes it perfect for partly obscuring background content when you want to present information on top, and you can even animate that presentation if you want.</p>
<p>First, place a <code>UIVisualEffectView</code> into your view controller, either using code or using IB with an outlet.</p>
<p>When your app launches you should clear the <code>effect</code> property of your visual effect view, causing it to do nothing:</p>
<pre class=" language-swift"><code class=" language-swift">visualEffectView<span class="token punctuation">.</span>effect <span class="token operator">=</span> <span class="token nil constant">nil</span></code></pre>
<p>When you want the blur to animate in –&nbsp;i.e., when you’re ready to show information on top –&nbsp;just set that <code>effect</code> property to a new instance of <code>UIBlurEffect</code> inside an animation block, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>visualEffectView<span class="token punctuation">.</span>effect <span class="token operator">=</span> <span class="token class-name">UIBlurEffect</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token class-name">UIBlurEffect</span><span class="token punctuation">.</span><span class="token class-name">Style</span><span class="token punctuation">.</span>prominent<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>UIKit will take care of the rest!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview">How to add blur and vibrancy using UIVisualEffectView</a></li><li><a href="/quick-start/swiftui/how-to-blur-a-view">How to blur a view</a></li><li><a href="/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:)</a></li><li><a href="/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:)</a></li><li><a href="/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:)</a></li></ul>
-->

:::

---

<TagLinks />