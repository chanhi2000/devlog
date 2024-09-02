---
lang: ko-KR
title: "How to play sounds using AVAudioPlayer"
description: "Article(s) > How to play sounds using AVAudioPlayer"
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
  - ios-2.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to play sounds using AVAudioPlayer"
    - property: og:description
      content: "How to play sounds using AVAudioPlayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer.html
date: 2019-03-28
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
  "title": "How to play sounds using AVAudioPlayer | Media - free Swift example code",
  "desc": "How to play sounds using AVAudioPlayer",
  "link": "https://hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.2

<!-- TODO: 작성 -->

<!-- 
<p>The most common way to play a sound on iOS is using <code>AVAudioPlayer</code>, and it's popular for a reason: it's easy to use, you can stop it whenever you want, and you can adjust its volume as often as you need. The only real catch is that you must store your player as a property or other variable that won't get destroyed straight away –&nbsp;if you don't, the sound will stop immediately.</p>
<p><code>AVAudioPlayer</code> is part of the AVFoundation framework, so you'll need to import that:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">AVFoundation</span></code></pre>
<p>Like I said, you need to store your audio player as a property somewhere so it is retained while the sound is playing. In our example we're going to play a bomb explosion sound, so I created a property for it like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> bombSoundEffect<span class="token punctuation">:</span> <span class="token class-name">AVAudioPlayer</span><span class="token operator">?</span></code></pre>
<p>With those two lines of code inserted, all you need to do is play your audio file. This is done first by finding where the sound is in your project using <code>path(forResource:)</code>, then creating a file URL out of it. That can then get passed to <code>AVAudioPlayer</code> to create an audio player object, at which point – finally –&nbsp;you can play the sound. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"example.mp3"</span></span><span class="token punctuation">,</span> ofType<span class="token punctuation">:</span><span class="token nil constant">nil</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>fileURLWithPath<span class="token punctuation">:</span> path<span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    bombSoundEffect <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">AVAudioPlayer</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> url<span class="token punctuation">)</span>
    bombSoundEffect<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token comment">// couldn't load file :(</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to stop the sound, you should use its <code>stop()</code> method.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging">How to make Xcode play sounds while debugging</a></li><li><a href="/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops">How to loop audio using AVAudioPlayer and numberOfLoops</a></li><li><a href="/example-code/media/how-to-play-videos-using-avplayerviewcontroller">How to play videos using AVPlayerViewController</a></li><li><a href="/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics</a></li><li><a href="/quick-start/swiftui/how-to-play-movies-with-videoplayer">How to play movies with VideoPlayer</a></li></ul>
-->

:::

---

<TagLinks />