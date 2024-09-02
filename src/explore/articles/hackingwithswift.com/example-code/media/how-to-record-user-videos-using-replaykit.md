---
lang: ko-KR
title: "How to record user videos using ReplayKit"
description: "Article(s) > How to record user videos using ReplayKit"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to record user videos using ReplayKit"
    - property: og:description
      content: "How to record user videos using ReplayKit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-record-audio-using-avaudiorecorder.html
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
  "title": "How to record user videos using ReplayKit | Media - free Swift example code",
  "desc": "How to record user videos using ReplayKit",
  "link": "https://hackingwithswift.com/example-code/media/how-to-record-audio-using-avaudiorecorder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>While it's not <em>hard</em> to record audio with an iPhone, it does take quite a bit of code so give yourself a few minutes to get this implemented. First you need to import the <code>AVFoundation</code> framework into your view controller.</p>
<p>You will need to add three properties to your view controller: a button for the user to tap to start or stop recording, an audio session to manage recording, and an audio recorder to handle the actual reading and saving of data. You can create the button in Interface Builder if you prefer; we'll be doing it in code here.</p>
<p>Put these three properties into your view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> recordButton<span class="token punctuation">:</span> <span class="token class-name">UIButton</span><span class="token operator">!</span>
<span class="token keyword">var</span> recordingSession<span class="token punctuation">:</span> <span class="token class-name">AVAudioSession</span><span class="token operator">!</span>
<span class="token keyword">var</span> audioRecorder<span class="token punctuation">:</span> <span class="token class-name">AVAudioRecorder</span><span class="token operator">!</span></code></pre>
<p>Recording audio requires a user's permission to stop malicious apps doing malicious things, so we need to request recording permission from the user. If they grant permission, we'll create our recording button. Put this into <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift">recordingSession <span class="token operator">=</span> <span class="token class-name">AVAudioSession</span><span class="token punctuation">.</span><span class="token function">sharedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> recordingSession<span class="token punctuation">.</span><span class="token function">setCategory</span><span class="token punctuation">(</span><span class="token punctuation">.</span>playAndRecord<span class="token punctuation">,</span> mode<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> recordingSession<span class="token punctuation">.</span><span class="token function">setActive</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    recordingSession<span class="token punctuation">.</span><span class="token function">requestRecordPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> allowed <span class="token keyword">in</span>
        <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> allowed <span class="token punctuation">{</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">loadRecordingUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// failed to record!</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token comment">// failed to record!</span>
<span class="token punctuation">}</span></code></pre>
<p>You should replace the <code>// failed to record!</code> comment with a meaningful error alert to your user, or perhaps an on-screen label.</p>
<p>I made the code for <code>loadRecordingUI()</code> separate so you can replace it easily either with IB work or something else. Here's the least you need to do:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">loadRecordingUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    recordButton <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    recordButton<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Tap to Record"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
    recordButton<span class="token punctuation">.</span>titleLabel<span class="token operator">?</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">preferredFont</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>title1<span class="token punctuation">)</span>
    recordButton<span class="token punctuation">.</span><span class="token function">addTarget</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>recordTapped<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>touchUpInside<span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>recordButton<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That configures the button to call a method called <code>recordTapped()</code> when it's tapped. Don't worry, we haven't written that yet!</p>
<p>Before we write the code for <code>recordTapped()</code> we need to do a few other things. First, we need a method to start recording. This needs to decide where to save the audio, configure the recording settings, then start recording. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">startRecording</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> audioFilename <span class="token operator">=</span> <span class="token function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendingPathComponent</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"recording.m4a"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> settings <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token class-name">AVFormatIDKey</span><span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>kAudioFormatMPEG4AAC<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">AVSampleRateKey</span><span class="token punctuation">:</span> <span class="token number">12000</span><span class="token punctuation">,</span>
        <span class="token class-name">AVNumberOfChannelsKey</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token class-name">AVEncoderAudioQualityKey</span><span class="token punctuation">:</span> <span class="token class-name">AVAudioQuality</span><span class="token punctuation">.</span>high<span class="token punctuation">.</span>rawValue
    <span class="token punctuation">]</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        audioRecorder <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">AVAudioRecorder</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> audioFilename<span class="token punctuation">,</span> settings<span class="token punctuation">:</span> settings<span class="token punctuation">)</span>
        audioRecorder<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
        audioRecorder<span class="token punctuation">.</span><span class="token function">record</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        recordButton<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Tap to Stop"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
        <span class="token function">finishRecording</span><span class="token punctuation">(</span>success<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That code won't build just yet, because it has two problems. First, it uses the method <code>getDocumentsDirectory()</code>, which is a helper method I include in most of my projects. Here it is:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span>
    <span class="token keyword">return</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
<p>Second, it assigns <code>self</code> to be the delegate of the audio recorder, which means you need to conform your view controller to the <code>AVAudioRecorderDelegate</code> protocol.</p>
<p>With the code written to start recording, we need matching code to finish recording. This will tell the audio recorder to stop recording, then put the button title back to either "Tap to Record" (if recording finished successfully) or "Tap to Re-record" if there was a problem. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">finishRecording</span><span class="token punctuation">(</span>success<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    audioRecorder<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    audioRecorder <span class="token operator">=</span> <span class="token nil constant">nil</span>

    <span class="token keyword">if</span> success <span class="token punctuation">{</span>
        recordButton<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Tap to Re-record"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        recordButton<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Tap to Record"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
        <span class="token comment">// recording failed :(</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>With those two in place, we can finally write <code>recordTapped()</code>, because it just needs to call either <code>startRecording()</code> or <code>finishRecording()</code> depending on the state of the audio recorder. Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">recordTapped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> audioRecorder <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token function">startRecording</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">finishRecording</span><span class="token punctuation">(</span>success<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    </code></pre>
<p>Before you're done, there's one more thing to be aware of: iOS might stop your recording for some reason out of your control, such as if a phone call comes in. We are the delegate of the audio recorder, so if this situation crops up you'll be sent a <code>audioRecorderDidFinishRecording()</code> message that you can pass on to <code>finishRecording()</code> like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">audioRecorderDidFinishRecording</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> recorder<span class="token punctuation">:</span> <span class="token class-name">AVAudioRecorder</span><span class="token punctuation">,</span> successfully flag<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>flag <span class="token punctuation">{</span>
        <span class="token function">finishRecording</span><span class="token punctuation">(</span>success<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-record-user-videos-using-replaykit">How to record user videos using ReplayKit</a></li><li><a href="/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine">How to control the pitch and speed of audio using AVAudioEngine</a></li><li><a href="/example-code/games/how-to-create-3d-audio-sound-using-skaudionode">How to create 3D audio sound using SKAudioNode</a></li><li><a href="/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops">How to loop audio using AVAudioPlayer and numberOfLoops</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li></ul>
-->

:::

---

<TagLinks />