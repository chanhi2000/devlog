---
lang: ko-KR
title: "How to modify haptic events over time using CHHapticParameterCurve"
description: "Article(s) > How to modify haptic events over time using CHHapticParameterCurve"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to modify haptic events over time using CHHapticParameterCurve"
    - property: og:description
      content: "How to modify haptic events over time using CHHapticParameterCurve"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve.html
date: 2019-10-08
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Haptics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-haptics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to modify haptic events over time using CHHapticParameterCurve | Core Haptics - free Swift example code",
  "desc": "How to modify haptic events over time using CHHapticParameterCurve",
  "link": "https://hackingwithswift.com/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>Core Haptics gives us extraordinary control over vibration events, including one-off taps (transient haptics), longer vibrations (continuous haptics), and shaped vibrations (haptic parameter curves).</p>
<p>For example, if you wanted to make a vibration that started strong and faded away, you would use import CoreHaptics and create a property to store the haptic engine:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> engine<span class="token punctuation">:</span> <span class="token class-name">CHHapticEngine</span><span class="token operator">?</span></code></pre>
<p>Then you would spin up the haptic engine like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">guard</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">.</span><span class="token function">capabilitiesForHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>supportsHaptics <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    engine <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"There was an error creating the engine: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Finally, you need to run this code whenever you want your haptic to play</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// create a dull, strong haptic</span>
<span class="token keyword">let</span> sharpness <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticSharpness<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> intensity <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensity<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// create a curve that fades from 1 to 0 over one second</span>
<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">.</span><span class="token class-name">ControlPoint</span><span class="token punctuation">(</span>relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">.</span><span class="token class-name">ControlPoint</span><span class="token punctuation">(</span>relativeTime<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// use that curve to control the haptic strength</span>
<span class="token keyword">let</span> parameter <span class="token operator">=</span> <span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensityControl<span class="token punctuation">,</span> controlPoints<span class="token punctuation">:</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// create a continuous haptic event starting immediately and lasting one second</span>
<span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticContinuous<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>sharpness<span class="token punctuation">,</span> intensity<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// now attempt to play the haptic, with our fading parameter</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticPattern</span><span class="token punctuation">(</span>events<span class="token punctuation">:</span> <span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">,</span> parameterCurves<span class="token punctuation">:</span> <span class="token punctuation">[</span>parameter<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makePlayer</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> pattern<span class="token punctuation">)</span>
    <span class="token keyword">try</span> player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>atTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token comment">// add your own meaningful error handling here!</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, it does take quite a bit of code to get a fairly basic effect. However, the reason for that is because Core Haptics allows us to create more complicated effects by adding more parameters, curves, and events –&nbsp;it’s a remarkably flexible API.</p>
<p>For example, we just created a fading continuous haptic, but we can actually combine that with multiple transient haptics to make an explosion effect: one fading buzz, with lots of smaller little pops going off at the same time.</p>
<p>To try this out, first make sure you follow the setup steps above, then use this code to create and play your haptic:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">CHHapticEvent</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> curves <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// create one continuous buzz that fades out</span>
    <span class="token keyword">let</span> sharpness <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticSharpness<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> intensity <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensity<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">.</span><span class="token class-name">ControlPoint</span><span class="token punctuation">(</span>relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">.</span><span class="token class-name">ControlPoint</span><span class="token punctuation">(</span>relativeTime<span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> parameter <span class="token operator">=</span> <span class="token class-name">CHHapticParameterCurve</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensityControl<span class="token punctuation">,</span> controlPoints<span class="token punctuation">:</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticContinuous<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>sharpness<span class="token punctuation">,</span> intensity<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token punctuation">)</span>
    events<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
    curves<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>parameter<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">16</span> <span class="token punctuation">{</span>
    <span class="token comment">// make some sparkles</span>
    <span class="token keyword">let</span> sharpness <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticSharpness<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> intensity <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensity<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>sharpness<span class="token punctuation">,</span> intensity<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token class-name">TimeInterval</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token operator">...</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    events<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticPattern</span><span class="token punctuation">(</span>events<span class="token punctuation">:</span> events<span class="token punctuation">,</span> parameterCurves<span class="token punctuation">:</span> curves<span class="token punctuation">)</span>

    <span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makePlayer</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> pattern<span class="token punctuation">)</span>
    <span class="token keyword">try</span> player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>atTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>By combining 16 random transient haptics with our fading continuous haptic, we can get an effect that feels great and can be bundled into a method for easier re-use –&nbsp;it’s a really neat special effect you can add to both apps and games.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator">How to generate haptic feedback with UIFeedbackGenerator</a></li><li><a href="/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported">How to modify haptic events over time using CHHapticParameterCurve</a></li><li><a href="/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback">How to add haptic effects using sensory feedback</a></li><li><a href="/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events">How to detect and respond to key press events</a></li><li><a href="/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear">How to respond to view lifecycle events: onAppear() and onDisappear()</a></li></ul>
-->

:::

---

<TagLinks />