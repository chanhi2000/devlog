---
lang: ko-KR
title: "How to control the pitch and speed of audio using AVAudioEngine"
description: "Article(s) > How to control the pitch and speed of audio using AVAudioEngine"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to control the pitch and speed of audio using AVAudioEngine"
    - property: og:description
      content: "How to control the pitch and speed of audio using AVAudioEngine"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.html
date: 2021-03-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to control the pitch and speed of audio using AVAudioEngine | Media - free Swift example code",
  "desc": "How to control the pitch and speed of audio using AVAudioEngine",
  "link": "https://hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Although it’s easy enough to play sound effects and music using AVKit, it’s actually one of the most powerful frameworks in iOS and&nbsp;can easily add some fun and interesting effects to your apps and games.</p>
<p>For example, one of the powerful classes in AVKit is called <code>AVAudioEngine</code>. Its job is to connect audio processing objects in a chain so that the output of one object is the input for another. You can feed audio into the start, apply processing in the middle, then play the audio as the output, giving you real-time audio manipulation without much effort.</p>
<p>To try this out, we’ll create a simple test that loads an MP3 file and starts playing it, but adjusts the playback speed and pitch of the audio every time the user taps the screen.</p>
<p>First you need a property to store your <code>AVAudioEngine</code> object, along with properties that store an <code>AVAudioUnitTimePitch</code> and an <code>AVAudioUnitVarispeed</code> –&nbsp;the processors that transform the speed and pitch of audio:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> engine <span class="token operator">=</span> <span class="token class-name">AVAudioEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> speedControl <span class="token operator">=</span> <span class="token class-name">AVAudioUnitVarispeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
<span class="token keyword">let</span> pitchControl <span class="token operator">=</span> <span class="token class-name">AVAudioUnitTimePitch</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>Next you need a method that will play a URL. This takes six steps:</p>
<ol>
<li>Create an <code>AVAudioFile</code> that reads from whatever file URL gets passed into the method.</li>
<li>Create an <code>AVAudioPlayerNode</code> that will read in your <code>AVAudioFile</code>. This is a like a more advanced <code>AVAudioPlayer</code>, and we can use it as part of our engine connections.</li>
<li>Connect the audio player, the pitch control, and the speed control to our playback engine.</li>
<li>Arrange the parts so that the audio player feeds into the speed control, the speed control feeds into the pitch control, and the pitch control feeds to the main mixer output –&nbsp;gets played aloud.</li>
<li>Prepare the audio player node to start reading its file.</li>
<li>Start the engine and the player.</li>
</ol>
<p>Here’s the code for that, with comments matching the numbers above:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">play</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1: load the file</span>
    <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">AVAudioFile</span><span class="token punctuation">(</span>forReading<span class="token punctuation">:</span> url<span class="token punctuation">)</span>

    <span class="token comment">// 2: create the audio player</span>
    <span class="token keyword">let</span> audioPlayer <span class="token operator">=</span> <span class="token class-name">AVAudioPlayerNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 3: connect the components to our playback engine</span>
    engine<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>audioPlayer<span class="token punctuation">)</span>
    engine<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>pitchControl<span class="token punctuation">)</span>
    engine<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>speedControl<span class="token punctuation">)</span>

    <span class="token comment">// 4: arrange the parts so that output from one is input to another</span>
    engine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioPlayer<span class="token punctuation">,</span> to<span class="token punctuation">:</span> speedControl<span class="token punctuation">,</span> format<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
    engine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>speedControl<span class="token punctuation">,</span> to<span class="token punctuation">:</span> pitchControl<span class="token punctuation">,</span> format<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
    engine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>pitchControl<span class="token punctuation">,</span> to<span class="token punctuation">:</span> engine<span class="token punctuation">.</span>mainMixerNode<span class="token punctuation">,</span> format<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

    <span class="token comment">// 5: prepare the player to play its file from the beginning</span>
    audioPlayer<span class="token punctuation">.</span><span class="token function">scheduleFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> at<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

    <span class="token comment">// 6: start the engine and player</span>
    <span class="token keyword">try</span> engine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    audioPlayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Now you can call that method using a path to any audio file in your app bundle.</p>
<p>As for changing the pitch and rate, we made <code>pitchControl</code> and <code>speedControl</code> properties so we can adjust them at will. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pitchControl<span class="token punctuation">.</span>pitch <span class="token operator">+=</span> <span class="token number">50</span>
    speedControl<span class="token punctuation">.</span>rate <span class="token operator">+=</span> <span class="token number">0.1</span>
<span class="token punctuation">}</span></code></pre>
<p>As you’ll see, this processing happens incredibly quickly –&nbsp;it’s all realtime, so you can create fun effects for apps and games in just a few minutes of work!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/system/measuring-execution-speed-using-cfabsolutetimegetcurrent">Measuring execution speed using CFAbsoluteTimeGetCurrent()</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />