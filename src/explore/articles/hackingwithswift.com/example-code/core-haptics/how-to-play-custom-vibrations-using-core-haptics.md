---
lang: ko-KR
title: "How to play custom vibrations using Core Haptics"
description: "Article(s) > How to play custom vibrations using Core Haptics"
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
      content: "Article(s) > How to play custom vibrations using Core Haptics"
    - property: og:description
      content: "How to play custom vibrations using Core Haptics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics.html
date: 2019-06-04
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
  "title": "How to play custom vibrations using Core Haptics | Core Haptics - free Swift example code",
  "desc": "How to play custom vibrations using Core Haptics",
  "link": "https://hackingwithswift.com/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- 
<p>Core Haptics lets us define a variety of vibrations and sound effects that trigger with precise timing and behaviors, all powered by the iPhone’s Taptic Engine. These behaviors are somewhat hard to define with words, and are best <em>felt</em> rather than <em>described</em>, but the words Apple uses are things like “intensity” (the relative strength of the vibration) and “sharpness” (whether it’s a dull tap or a more precise one).</p>
<p>To try it out for yourself, first import Core Haptics, then create a property to store an instance of the main Core Haptics engine:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> engine<span class="token punctuation">:</span> <span class="token class-name">CHHapticEngine</span><span class="token operator">?</span></code></pre>
<p>Before you try to create an instance of that engine, you should make sure haptics are supported on the current device using code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">guard</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">.</span><span class="token function">capabilitiesForHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>supportsHaptics <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></code></pre>
<p>But if that passes you’re safe to create and start your haptic engine. This might be inside <code>viewDidLoad()</code>, for example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">guard</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">.</span><span class="token function">capabilitiesForHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>supportsHaptics <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    engine <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"There was an error creating the engine: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>It’s not <em>required</em>, but at the same time you might also want to assign closures to the <code>stoppedHandler</code> and <code>resetHandler</code> properties of your engine, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// The engine stopped; print out why</span>
engine<span class="token operator">?</span><span class="token punctuation">.</span>stoppedHandler <span class="token operator">=</span> <span class="token punctuation">{</span> reason <span class="token keyword">in</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"The engine stopped: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">reason</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// If something goes wrong, attempt to restart the engine immediately</span>
engine<span class="token operator">?</span><span class="token punctuation">.</span>resetHandler <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">weak</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"The engine reset"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token keyword">self</span><span class="token operator">?</span><span class="token punctuation">.</span>engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to restart the engine: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Finally you’re all set to start making haptic effects. For example, this creates one strong, sharp tap whenever you touch the screen:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">.</span><span class="token function">capabilitiesForHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>supportsHaptics <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> intensity <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensity<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> sharpness <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticSharpness<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>intensity<span class="token punctuation">,</span> sharpness<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticPattern</span><span class="token punctuation">(</span>events<span class="token punctuation">:</span> <span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makePlayer</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> pattern<span class="token punctuation">)</span>
        <span class="token keyword">try</span> player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>atTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to play pattern: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>For something more exciting you can create a series of events and pass in various values for their <code>relativeTime</code> so they either overlap or play in a sequence.</p>
<p>For example, this creates a series of taps, starting strong and sharp and fading away to weak and dull over a second:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">.</span><span class="token function">capabilitiesForHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>supportsHaptics <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">CHHapticEvent</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> by<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> intensity <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticIntensity<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> sharpness <span class="token operator">=</span> <span class="token class-name">CHHapticEventParameter</span><span class="token punctuation">(</span>parameterID<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticSharpness<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>intensity<span class="token punctuation">,</span> sharpness<span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> i<span class="token punctuation">)</span>
        events<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticPattern</span><span class="token punctuation">(</span>events<span class="token punctuation">:</span> events<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makePlayer</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> pattern<span class="token punctuation">)</span>
        <span class="token keyword">try</span> player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>atTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to play pattern: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>And this taps out the Morse code for SOS (...---...) on the Taptic engine by mixing transient events (brief taps) with continuous events (long buzzes over a period of time):</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token class-name">CHHapticEngine</span><span class="token punctuation">.</span><span class="token function">capabilitiesForHardware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>supportsHaptics <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> short1 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> short2 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> short3 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0.4</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> long1 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticContinuous<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> long2 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticContinuous<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> long3 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticContinuous<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">1.8</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> short4 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">2.4</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> short5 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">2.6</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> short6 <span class="token operator">=</span> <span class="token class-name">CHHapticEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">:</span> <span class="token punctuation">.</span>hapticTransient<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> relativeTime<span class="token punctuation">:</span> <span class="token number">2.8</span><span class="token punctuation">)</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">CHHapticPattern</span><span class="token punctuation">(</span>events<span class="token punctuation">:</span> <span class="token punctuation">[</span>short1<span class="token punctuation">,</span> short2<span class="token punctuation">,</span> short3<span class="token punctuation">,</span> long1<span class="token punctuation">,</span> long2<span class="token punctuation">,</span> long3<span class="token punctuation">,</span> short4<span class="token punctuation">,</span> short5<span class="token punctuation">,</span> short6<span class="token punctuation">]</span><span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token keyword">try</span> engine<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makePlayer</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> pattern<span class="token punctuation">)</span>
        <span class="token keyword">try</span> player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>atTime<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Failed to play pattern: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Notice how I’ve specified all the <code>relativeTime</code> parameters so they are spaced roughly correctly for the sequence I want.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-play-sounds-using-avaudioplayer">How to play sounds using AVAudioPlayer</a></li><li><a href="/example-code/media/how-to-play-videos-using-avplayerviewcontroller">How to play videos using AVPlayerViewController</a></li><li><a href="/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging">How to make Xcode play sounds while debugging</a></li><li><a href="/quick-start/swiftui/how-to-play-movies-with-videoplayer">How to play movies with VideoPlayer</a></li><li><a href="/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve</a></li></ul>
-->

:::

---

<TagLinks />