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
If you're looking for text-to-speech conversion, it's baked right into iOS thanks to the `AVSpeechSynthesizer` class and its friends. As you can tell from the "AV" part of its name, you'll need to add AVFoundation to your project, like this:

```swift
import AVFoundation
```

With that done, you can speak whatever you want. For example, to say "Hello world" in a very slow British accent, use this:

```swift
let utterance = AVSpeechUtterance(string: "Hello world")
utterance.voice = AVSpeechSynthesisVoice(language: "en-GB")
utterance.rate = 0.1 

let synthesizer = AVSpeechSynthesizer()
synthesizer.speak(utterance)
```

You can omit the `rate` property entirely to have a natural-speed voice, or change the language to "en-US" (English, American accent), "en-IE" (English, Irish accent), "en-AU" (English, Australian accent) or whichever other accents Apple chooses to add in the future.

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer">How to highlight text to speech words being read using AVSpeechSynthesizer 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer">How to convert speech to text using SFSpeechRecognizer 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />