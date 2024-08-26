---
lang: ko-KR
title: "How to create keyframe animations using CAKeyframeAnimation"
description: "Article(s) > How to create keyframe animations using CAKeyframeAnimation"
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
      content: "Article(s) > How to create keyframe animations using CAKeyframeAnimation"
    - property: og:description
      content: "How to create keyframe animations using CAKeyframeAnimation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create keyframe animations using CAKeyframeAnimation | CALayer - free Swift example code",
  "desc": "How to create keyframe animations using CAKeyframeAnimation",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>Keyframe animations offer extraordinary power for developers because they let you set multiple values and have iOS animate between them over times you specify. There are three components: a key path (the property to animate), an array of values (the value you want to use for that property), and an array of key times (when that value should be used for the property).</p>
<p>The number of key times needs to match the number of values, because each value is applied in order when its key time is reached. In the example code below, a view will be moved down 300 points then back to its starting point over 2 seconds. It's important that you understand the key times and duration are separate: the key times should be between 0 and 1, where 0 means "the start of the animation" and 1 means "the end of the animation."</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> animation <span class="token operator">=</span> <span class="token class-name">CAKeyframeAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
animation<span class="token punctuation">.</span>keyPath <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"position.y"</span></span>
animation<span class="token punctuation">.</span>values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
animation<span class="token punctuation">.</span>keyTimes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
animation<span class="token punctuation">.</span>duration <span class="token operator">=</span> <span class="token number">2</span>
animation<span class="token punctuation">.</span>isAdditive <span class="token operator">=</span> <span class="token boolean">true</span>

vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>animation<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"move"</span></span><span class="token punctuation">)</span></code></pre>
<p>Because the animation is marked as additive, it means that 300 is relative to its starting position.</p>
<p>We can use key frame animations to create a simple shake effect that moves a view left and right across a brief animation. This will use additive animations again because we want to specify relative values (move to the left and right a bit) rather than absolute values:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">shakeView</span><span class="token punctuation">(</span>vw<span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> animation <span class="token operator">=</span> <span class="token class-name">CAKeyframeAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    animation<span class="token punctuation">.</span>keyPath <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"position.x"</span></span>
    animation<span class="token punctuation">.</span>values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">]</span>
    animation<span class="token punctuation">.</span>keyTimes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.125</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0.375</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.625</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">0.875</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
    animation<span class="token punctuation">.</span>duration <span class="token operator">=</span> <span class="token number">0.4</span>
    animation<span class="token punctuation">.</span>isAdditive <span class="token operator">=</span> <span class="token boolean">true</span>

    vw<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>animation<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"shake"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-create-keyframe-animations-using-animatekeyframes">How to create keyframe animations using animateKeyframes()</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li><li><a href="/quick-start/swiftui/how-to-override-animations-with-transactions">How to override animations with transactions</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators">How to create multi-step animations using phase animators</a></li><li><a href="/quick-start/swiftui/how-to-apply-multiple-animations-to-a-view">How to apply multiple animations to a view</a></li></ul>
-->

:::

---

<TagLinks />