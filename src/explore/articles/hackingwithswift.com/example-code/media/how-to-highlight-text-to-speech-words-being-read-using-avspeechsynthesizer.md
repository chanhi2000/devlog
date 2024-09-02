---
lang: ko-KR
title: "How to highlight text to speech words being read using AVSpeechSynthesizer"
description: "Article(s) > How to highlight text to speech words being read using AVSpeechSynthesizer"
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
      content: "Article(s) > How to highlight text to speech words being read using AVSpeechSynthesizer"
    - property: og:description
      content: "How to highlight text to speech words being read using AVSpeechSynthesizer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer.html
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
  "title": "How to highlight text to speech words being read using AVSpeechSynthesizer | Media - free Swift example code",
  "desc": "How to highlight text to speech words being read using AVSpeechSynthesizer",
  "link": "https://hackingwithswift.com/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has text-to-speech synthesis built right into the system, but even better is that it allows you to track when individual words are being spoken so that you can highlight the words on the screen. This is extremely easy to do thanks to the <code>AVSpeechSynthesizerDelegate</code> protocol: you get two callbacks in the form of <code>willSpeakRangeOfSpeechString</code> and <code>didFinish</code>, where you can do your work.</p>
<p>First, make sure you import AVFoundation into your project. Now make your class conform to the <code>AVSpeechSynthesizerDelegate</code> protocol.</p>
<p>Place a label into your view controller, then hook it up to an outlet called <code>label</code>. Now add these two methods:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">speechSynthesizer</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> synthesizer<span class="token punctuation">:</span> <span class="token class-name">AVSpeechSynthesizer</span><span class="token punctuation">,</span> willSpeakRangeOfSpeechString characterRange<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">,</span> utterance<span class="token punctuation">:</span> <span class="token class-name">AVSpeechUtterance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mutableAttributedString <span class="token operator">=</span> <span class="token class-name">NSMutableAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> utterance<span class="token punctuation">.</span>speechString<span class="token punctuation">)</span>
    mutableAttributedString<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token punctuation">.</span>foregroundColor<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> range<span class="token punctuation">:</span> characterRange<span class="token punctuation">)</span>
    label<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> mutableAttributedString
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">speechSynthesizer</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> synthesizer<span class="token punctuation">:</span> <span class="token class-name">AVSpeechSynthesizer</span><span class="token punctuation">,</span> didFinish utterance<span class="token punctuation">:</span> <span class="token class-name">AVSpeechUtterance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    label<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> utterance<span class="token punctuation">.</span>speechString<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Finally, you need to trigger the text-to-speech engine – this might be by a button press perhaps, but it's down to you. Here's the method I attached to a button press:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@IBAction</span> <span class="token keyword">func</span> <span class="token function-definition function">speak</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> sender<span class="token punctuation">:</span> <span class="token class-name">AnyObject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> string <span class="token operator">=</span> label<span class="token punctuation">.</span>text<span class="token operator">!</span>
    <span class="token keyword">let</span> utterance <span class="token operator">=</span> <span class="token class-name">AVSpeechUtterance</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> string<span class="token punctuation">)</span>
    utterance<span class="token punctuation">.</span>voice <span class="token operator">=</span> <span class="token class-name">AVSpeechSynthesisVoice</span><span class="token punctuation">(</span>language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"en-GB"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> synthesizer <span class="token operator">=</span> <span class="token class-name">AVSpeechSynthesizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    synthesizer<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
    synthesizer<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span>utterance<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice">How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice</a></li><li><a href="/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer">How to convert speech to text using SFSpeechRecognizer</a></li><li><a href="/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe">How to prevent a sheet from being dismissed with a swipe</a></li><li><a href="/example-code/uikit/how-to-respond-to-the-device-being-shaken">How to respond to the device being shaken</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />