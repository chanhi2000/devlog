---
lang: ko-KR
title: "How to create keyframe animations using animateKeyframes()"
description: "Article(s) > How to create keyframe animations using animateKeyframes()"
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
      content: "Article(s) > How to create keyframe animations using animateKeyframes()"
    - property: og:description
      content: "How to create keyframe animations using animateKeyframes()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-keyframe-animations-using-animatekeyframes.html
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
  "title": "How to create keyframe animations using animateKeyframes() | UIKit - free Swift example code",
  "desc": "How to create keyframe animations using animateKeyframes()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-keyframe-animations-using-animatekeyframes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>If you need to combine a selection of animations over time the easiest thing to do is create a keyframe animation. This starts with a call to <code>animateKeyframes()</code>, then you go ahead and call <code>addKeyframe()</code> as many times as you need.</p>
<p>Each keyframe you add has a relative start time and relative duration, so they work independently of the overall timing. You also provide each keyframe with the animation it should perform, again not worrying about the rest of the animation. When it runs, iOS combines them all together, blending one animation seamlessly into the next.</p>
<p>To give you an example, here’s some code that moves and scales an image view around the screen:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>imageView<span class="token punctuation">.</span>center

<span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animateKeyframes</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>calculationModeCubic<span class="token punctuation">,</span> animations<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">addKeyframe</span><span class="token punctuation">(</span>withRelativeStartTime<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> relativeDuration<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>imageView<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>scaleX<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">addKeyframe</span><span class="token punctuation">(</span>withRelativeStartTime<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> relativeDuration<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>imageView<span class="token punctuation">.</span>center <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span>midX<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span>maxY<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">addKeyframe</span><span class="token punctuation">(</span>withRelativeStartTime<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> relativeDuration<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>imageView<span class="token punctuation">.</span>center <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>bounds<span class="token punctuation">.</span>width<span class="token punctuation">,</span> y<span class="token punctuation">:</span> start<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">addKeyframe</span><span class="token punctuation">(</span>withRelativeStartTime<span class="token punctuation">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span> relativeDuration<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>imageView<span class="token punctuation">.</span>center <span class="token operator">=</span> start
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>
<p>The <code>calculationModeCubic</code> option tells iOS to blend the animations together, so you’ll see the image view overshoot one animation as it curves into the next. You should also try using <code>calculationModeCubicPaced</code> instead – in the above code it makes the scaling part run over the entire length of the animation.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation">How to create keyframe animations using CAKeyframeAnimation</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li><li><a href="/quick-start/swiftui/how-to-override-animations-with-transactions">How to override animations with transactions</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators">How to create multi-step animations using phase animators</a></li><li><a href="/quick-start/swiftui/how-to-apply-multiple-animations-to-a-view">How to apply multiple animations to a view</a></li></ul>
-->

:::

---

<TagLinks />