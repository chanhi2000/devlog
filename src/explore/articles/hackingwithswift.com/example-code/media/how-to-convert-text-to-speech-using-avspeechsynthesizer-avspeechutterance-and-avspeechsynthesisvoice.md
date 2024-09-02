---
lang: ko-KR
title: "How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice"
description: "Article(s) > How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice"
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
      content: "Article(s) > How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice"
    - property: og:description
      content: "How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice.html
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
  "title": "How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice | Media - free Swift example code",
  "desc": "How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice",
  "link": "https://hackingwithswift.com/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>If you're looking for text-to-speech conversion, it's baked right into iOS thanks to the <code>AVSpeechSynthesizer</code> class and its friends. As you can tell from the "AV" part of its name, you'll need to add AVFoundation to your project, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">AVFoundation</span></code></pre>
<p>With that done, you can speak whatever you want. For example, to say "Hello world" in a very slow British accent, use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> utterance <span class="token operator">=</span> <span class="token class-name">AVSpeechUtterance</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hello world"</span></span><span class="token punctuation">)</span>
utterance<span class="token punctuation">.</span>voice <span class="token operator">=</span> <span class="token class-name">AVSpeechSynthesisVoice</span><span class="token punctuation">(</span>language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"en-GB"</span></span><span class="token punctuation">)</span>
utterance<span class="token punctuation">.</span>rate <span class="token operator">=</span> <span class="token number">0.1</span> 

<span class="token keyword">let</span> synthesizer <span class="token operator">=</span> <span class="token class-name">AVSpeechSynthesizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
synthesizer<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span>utterance<span class="token punctuation">)</span></code></pre>
<p>You can omit the <code>rate</code> property entirely to have a natural-speed voice, or change the language to "en-US" (English, American accent), "en-IE" (English, Irish accent), "en-AU" (English, Australian accent) or whichever other accents Apple chooses to add in the future.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer">How to highlight text to speech words being read using AVSpeechSynthesizer</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer">How to convert speech to text using SFSpeechRecognizer</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />