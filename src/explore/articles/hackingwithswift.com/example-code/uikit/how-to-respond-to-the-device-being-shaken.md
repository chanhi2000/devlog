---
lang: ko-KR
title: "How to respond to the device being shaken"
description: "Article(s) > How to respond to the device being shaken"
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
      content: "Article(s) > How to respond to the device being shaken"
    - property: og:description
      content: "How to respond to the device being shaken"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to respond to the device being shaken | UIKit - free Swift example code",
  "desc": "How to respond to the device being shaken",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
You can make any `UIViewController` subclass respond to the device being shaken by overriding the `motionBegan` method. This is use to handle motion (shaking) but in theory also remote control actions – although I can't say I've ever seen someone write code to handle that!

This code will print a message every time the device is shaken:

```swift
override func motionBegan(_ motion: UIEvent.EventSubtype, with event: UIEvent?) {
    print("Device was shaken!")
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events">How to detect and respond to key press events 
/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear">How to respond to view lifecycle events: onAppear() and onDisappear() 
/example-code/media/how-to-highlight-text-to-speech-words-being-read-using-avspeechsynthesizer">How to highlight text to speech words being read using AVSpeechSynthesizer 
/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe">How to prevent a sheet from being dismissed with a swipe 
/quick-start/swiftui/how-to-detect-device-rotation">How to detect device rotation</a>
-->

:::

---

<TagLinks />