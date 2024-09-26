---
lang: ko-KR
title: "How to generate haptic feedback with UIFeedbackGenerator"
description: "Article(s) > How to generate haptic feedback with UIFeedbackGenerator"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to generate haptic feedback with UIFeedbackGenerator"
    - property: og:description
      content: "How to generate haptic feedback with UIFeedbackGenerator"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator.html
date: 2020-02-07
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
  "title": "How to generate haptic feedback with UIFeedbackGenerator | UIKit - free Swift example code",
  "desc": "How to generate haptic feedback with UIFeedbackGenerator",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
<p>iOS 10 introduced new ways of generating haptic feedback using predefined vibration patterns shared by all apps, thus helping users understand that various types of feedback carry special significance. The core of this functionality is provided by <code>UIFeedbackGenerator</code>, but that's just an abstract class – the three classes you really care about are <code>UINotificationFeedbackGenerator</code>, <code>UIImpactFeedbackGenerator</code>, and <code>UISelectionFeedbackGenerator</code>.</p>
<p>The first of these, <code>UINotificationFeedbackGenerator</code>, lets you generate feedback based on three system events: error, success, and warning. The second, <code>UIImpactFeedbackGenerator</code>, lets you generate light, medium, and heavy effects that Apple says provide a "physical metaphor that complements the visual experience." Finally, <code>UISelectionFeedbackGenerator</code> generates feedback that should be triggered when the user is changing their selection on screen, e.g. moving through a picker wheel.</p>
<p><strong>At this time, only the new Taptic Engine found in the iPhone 7 and iPhone 7 Plus support these APIs. Other devices silently ignore the haptic requests.</strong></p>
<p>To start trying these APIs yourself, create a Single View App template in Xcode, then replace the built-in <code>ViewController</code> class with this test harness:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> btn <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        btn<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span>            

        btn<span class="token punctuation">.</span>widthAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalToConstant<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
        btn<span class="token punctuation">.</span>heightAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalToConstant<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
        btn<span class="token punctuation">.</span>centerXAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>centerXAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
        btn<span class="token punctuation">.</span>centerYAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>centerYAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>

        btn<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Tap here!"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        btn<span class="token punctuation">.</span><span class="token function">setTitleColor</span><span class="token punctuation">(</span><span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        btn<span class="token punctuation">.</span><span class="token function">addTarget</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>tapped<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>touchUpInside<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">tapped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Running </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

        <span class="token keyword">switch</span> i <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UINotificationFeedbackGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">notificationOccurred</span><span class="token punctuation">(</span><span class="token punctuation">.</span>error<span class="token punctuation">)</span>

        <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UINotificationFeedbackGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">notificationOccurred</span><span class="token punctuation">(</span><span class="token punctuation">.</span>success<span class="token punctuation">)</span>

        <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UINotificationFeedbackGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">notificationOccurred</span><span class="token punctuation">(</span><span class="token punctuation">.</span>warning<span class="token punctuation">)</span>

        <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UIImpactFeedbackGenerator</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>light<span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">impactOccurred</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UIImpactFeedbackGenerator</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>medium<span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">impactOccurred</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">case</span> <span class="token number">6</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UIImpactFeedbackGenerator</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>heavy<span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">impactOccurred</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token class-name">UISelectionFeedbackGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            generator<span class="token punctuation">.</span><span class="token function">selectionChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            i <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>When you run that on your phone, pressing the "Tap here!" button cycles through all the vibration options in order.</p>
<p>One tip: because it can take a small amount of time for the system to prepare haptic feedback, Apple recommends you call the <code>prepare()</code> method on your generator before triggering the haptic effect. If you don't do this, and there <em>is</em> a slight delay between the visual effect and the matching haptic, it might confuse users more than it helps.</p>
<p>Although you can technically use a success notification feedback for whatever you want, doing so inappropriately may confuse users, particularly those who are heavily reliant on haptic feedback for device interaction. Apple specifically requests that you use them judiciously, that you avoid using the wrong haptic for a given situation, and that you remember not all devices support this new haptic feedback –&nbsp;you need to consider older iPhones too.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback">How to add haptic effects using sensory feedback</a></li><li><a href="/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve</a></li><li><a href="/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported">How to detect whether haptic event playback is supported</a></li><li><a href="/example-code/games/how-to-generate-shaped-random-numbers-using-gkgaussiandistribution">How to generate shaped random numbers using GKGaussianDistribution</a></li><li><a href="/example-code/system/how-to-generate-a-random-identifier-using-uuid">How to generate a random identifier using UUID</a></li></ul>
-->

:::

---

<TagLinks />