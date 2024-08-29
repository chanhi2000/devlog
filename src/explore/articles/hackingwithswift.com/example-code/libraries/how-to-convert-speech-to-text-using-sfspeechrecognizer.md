---
lang: ko-KR
title: "How to convert speech to text using SFSpeechRecognizer"
description: "Article(s) > How to convert speech to text using SFSpeechRecognizer"
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
      content: "Article(s) > How to convert speech to text using SFSpeechRecognizer"
    - property: og:description
      content: "How to convert speech to text using SFSpeechRecognizer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert speech to text using SFSpeechRecognizer | Libraries - free Swift example code",
  "desc": "How to convert speech to text using SFSpeechRecognizer",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has a built-in speech transcription system, which allows you to convert any audio recording into a text stream. It takes a few steps to configure, so let’s walk through them.</p>
<p>First, add <code>import Speech</code> to the top of your Swift file, to bring in the Speech framework.</p>
<p>Second, request permission to transcribe audio:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">requestTranscribePermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SFSpeechRecognizer</span><span class="token punctuation">.</span>requestAuthorization <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> authStatus <span class="token keyword">in</span>
        <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> authStatus <span class="token operator">==</span> <span class="token punctuation">.</span>authorized <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Good to go!"</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Transcription permission was declined."</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Third, add a key to your Info.plist called <code>NSSpeechRecognitionUsageDescription</code>, then give it a string describing what you intend to do with the transcriptions.</p>
<p>Finally, write a method to perform transcription on an audio URL. This URL should be a recording you’ve already made, that is stored locally on the device:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">transcribeAudio</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// create a new recognizer and point it at our audio</span>
    <span class="token keyword">let</span> recognizer <span class="token operator">=</span> <span class="token class-name">SFSpeechRecognizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token class-name">SFSpeechURLRecognitionRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> url<span class="token punctuation">)</span>

    <span class="token comment">// start recognition!</span>
    recognizer<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">recognitionTask</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>result<span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token keyword">in</span>
        <span class="token comment">// abort if we didn't get any transcription back</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> result <span class="token operator">=</span> result <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"There was an error: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token operator">!</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// if we got the final transcription back, print it</span>
        <span class="token keyword">if</span> result<span class="token punctuation">.</span>isFinal <span class="token punctuation">{</span>
            <span class="token comment">// pull out the best transcription...</span>
            <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>bestTranscription<span class="token punctuation">.</span>formattedString<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: the <code>isFinal</code> property is there because you may get an initial transcription back containing some or all of the text, but it’s only considered final –&nbsp;i.e. as good as it gets –&nbsp;when the <code>isFinal</code> flag is true.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice">How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice</a></li><li><a href="/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer">How to highlight text to speech words being read using AVSpeechSynthesizer</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li></ul>
-->

:::

---

<TagLinks />