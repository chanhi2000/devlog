---
lang: ko-KR
title: "How to animate views with spring damping using animate(withDuration:)"
description: "Article(s) > How to animate views with spring damping using animate(withDuration:)"
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
      content: "Article(s) > How to animate views with spring damping using animate(withDuration:)"
    - property: og:description
      content: "How to animate views with spring damping using animate(withDuration:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration.html
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
  "title": "How to animate views with spring damping using animate(withDuration:) | UIKit - free Swift example code",
  "desc": "How to animate views with spring damping using animate(withDuration:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>Spring animations work by changing from a start state to an end state, with a slight overshoot and bounce at the end. For example, if you want to animate a view moving from X:0 to X:100, it might move to X:120 before bouncing back to X:80, then X:110 and finally X:100, as if the animation were attached to a spring.</p>
<p>Spring animations are built into iOS as of iOS 7.0 and require two values: how "springy" the spring should be, and how fast it should start. The first value is specified with <code>usingSpringWithDamping</code>, where higher values make the bouncing finish faster. The second value is specified with <code>initialSpringVelocity</code>, where higher values give the spring more initial momentum.</p>
<p>Here's the code to make a view fade out, then fade it the tiniest bit, then fade out again –&nbsp;all done using a spring animation:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> delay<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> usingSpringWithDamping<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> initialSpringVelocity<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>curveEaseInOut<span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>viewToAnimate<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span>
    <span class="token keyword">self</span><span class="token punctuation">.</span>viewToAnimate<span class="token punctuation">.</span><span class="token function">removeFromSuperview</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:)</a></li><li><a href="/quick-start/swiftui/how-to-create-a-spring-animation">How to create a spring animation</a></li><li><a href="/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator">How to animate views using UIViewPropertyAnimator</a></li><li><a href="/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text</a></li><li><a href="/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:)</a></li></ul>
-->

:::

---

<TagLinks />