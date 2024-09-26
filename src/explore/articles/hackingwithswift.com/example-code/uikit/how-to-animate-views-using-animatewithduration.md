---
lang: ko-KR
title: "How to animate views using animate(withDuration:)"
description: "Article(s) > How to animate views using animate(withDuration:)"
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
      content: "Article(s) > How to animate views using animate(withDuration:)"
    - property: og:description
      content: "How to animate views using animate(withDuration:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-views-using-animatewithduration.html
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
  "title": "How to animate views using animate(withDuration:) | UIKit - free Swift example code",
  "desc": "How to animate views using animate(withDuration:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-views-using-animatewithduration",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>Animation in iOS is done by starting an animation block, then telling iOS what changes you want to make. Because the animation block is active, those changes won't happen straight away – instead, iOS will execute them smoothly over the time you specified, so you don't have to worry when it will finish or what all the intermediate states are.</p>
<p>Here's a basic example to make a view fade out:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> viewToAnimate <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    viewToAnimate<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to remove the view from its superview once the fade has finished, you can use a more advanced version of the same method that gives you a completion block –&nbsp;a closure that will be run once the animation finishes. Here's how that looks:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    viewToAnimate<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span>
    viewToAnimate<span class="token punctuation">.</span><span class="token function">removeFromSuperview</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>You can also specify a delay before the animation starts, and even control the acceleration and deceleration curves of the animation, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> delay<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>curveEaseIn<span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    viewToAnimate<span class="token punctuation">.</span>alpha <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span>
    viewToAnimate<span class="token punctuation">.</span><span class="token function">removeFromSuperview</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:)</a></li><li><a href="/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator">How to animate views using UIViewPropertyAnimator</a></li><li><a href="/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:)</a></li><li><a href="/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView</a></li><li><a href="/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text</a></li></ul>
-->

:::

---

<TagLinks />