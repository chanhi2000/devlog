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
iOS has text-to-speech synthesis built right into the system, but even better is that it allows you to track when individual words are being spoken so that you can highlight the words on the screen. This is extremely easy to do thanks to the `AVSpeechSynthesizerDelegate` protocol: you get two callbacks in the form of `willSpeakRangeOfSpeechString` and `didFinish`, where you can do your work.

First, make sure you import AVFoundation into your project. Now make your class conform to the `AVSpeechSynthesizerDelegate` protocol.

Place a label into your view controller, then hook it up to an outlet called `label`. Now add these two methods:

```swift
func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, willSpeakRangeOfSpeechString characterRange: NSRange, utterance: AVSpeechUtterance) {
    let mutableAttributedString = NSMutableAttributedString(string: utterance.speechString)
    mutableAttributedString.addAttribute(.foregroundColor, value: UIColor.red, range: characterRange)
    label.attributedText = mutableAttributedString
}

func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance) {
    label.attributedText = NSAttributedString(string: utterance.speechString)
}
```

Finally, you need to trigger the text-to-speech engine – this might be by a button press perhaps, but it's down to you. Here's the method I attached to a button press:

```swift
@IBAction func speak(_ sender: AnyObject) {
    let string = label.text!
    let utterance = AVSpeechUtterance(string: string)
    utterance.voice = AVSpeechSynthesisVoice(language: "en-GB")

    let synthesizer = AVSpeechSynthesizer()
    synthesizer.delegate = self
    synthesizer.speak(utterance)
}
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-convert-text-to-speech-using-avspeechsynthesizer-avspeechutterance-and-avspeechsynthesisvoice">How to convert text to speech using AVSpeechSynthesizer, AVSpeechUtterance and AVSpeechSynthesisVoice 
/example-code/libraries/how-to-convert-speech-to-text-using-sfspeechrecognizer">How to convert speech to text using SFSpeechRecognizer 
/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe">How to prevent a sheet from being dismissed with a swipe 
/example-code/uikit/how-to-respond-to-the-device-being-shaken">How to respond to the device being shaken 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />