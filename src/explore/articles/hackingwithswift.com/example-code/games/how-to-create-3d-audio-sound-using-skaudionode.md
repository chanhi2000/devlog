---
lang: ko-KR
title: "How to create 3D audio sound using SKAudioNode"
description: "Article(s) > How to create 3D audio sound using SKAudioNode"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create 3D audio sound using SKAudioNode"
    - property: og:description
      content: "How to create 3D audio sound using SKAudioNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create 3D audio sound using SKAudioNode | Games - free Swift example code",
  "desc": "How to create 3D audio sound using SKAudioNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>3D audio is a feature where a sound is dynamically altered so that listeners think it comes from a particular location. Obviously they are looking at a flat 2D screen ahead of them, but using some clever mathematics iOS can make sounds "feel" like they are behind you, or at a more basic level adjust the panning so that sounds come from the left or right of the user's audio device.</p>
<p>As of iOS 9.0, you get these features for free: all you need to do is create an <code>SKAudioNode</code> for your sound and set its <code>isPositional</code> property to be <code>true</code>. That's it – iOS will automatically use the position of the node to adjust the way its audio sounds, and it even adjusts the audio as you move it around.</p>
<p>To give you a working example, this creates an audio node from a file called music.m4a (you'll need to provide that), then makes the audio move left and right forever. If you listen to this using headphones (which is the only effective way for 3D sound to work on iOS devices) you'll really hear a pronounced panning effect.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">didMove</span><span class="token punctuation">(</span>to view<span class="token punctuation">:</span> <span class="token class-name">SKView</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> music <span class="token operator">=</span> <span class="token class-name">SKAudioNode</span><span class="token punctuation">(</span>fileNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"music.m4a"</span></span><span class="token punctuation">)</span>
    <span class="token function">addChild</span><span class="token punctuation">(</span>music<span class="token punctuation">)</span>

    music<span class="token punctuation">.</span>isPositional <span class="token operator">=</span> <span class="token boolean">true</span>
    music<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1024</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> moveForward <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> moveBack <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1024</span><span class="token punctuation">,</span> duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> sequence <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">sequence</span><span class="token punctuation">(</span><span class="token punctuation">[</span>moveForward<span class="token punctuation">,</span> moveBack<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> repeatForever <span class="token operator">=</span> <span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>

    music<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>repeatForever<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine">How to control the pitch and speed of audio using AVAudioEngine</a></li><li><a href="/example-code/media/how-to-record-audio-using-avaudiorecorder">How to record audio using AVAudioRecorder</a></li><li><a href="/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops">How to loop audio using AVAudioPlayer and numberOfLoops</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

---

<TagLinks />