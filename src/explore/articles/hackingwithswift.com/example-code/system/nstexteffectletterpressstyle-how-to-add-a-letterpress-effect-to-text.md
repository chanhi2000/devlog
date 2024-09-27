---
lang: ko-KR
title: "NSTextEffectLetterpressStyle: How to add a letterpress effect to text"
description: "Article(s) > NSTextEffectLetterpressStyle: How to add a letterpress effect to text"
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
      content: "Article(s) > NSTextEffectLetterpressStyle: How to add a letterpress effect to text"
    - property: og:description
      content: "NSTextEffectLetterpressStyle: How to add a letterpress effect to text"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/nstexteffectletterpressstyle-how-to-add-a-letterpress-effect-to-text.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "NSTextEffectLetterpressStyle: How to add a letterpress effect to text | System - free Swift example code",
  "desc": "NSTextEffectLetterpressStyle: How to add a letterpress effect to text",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/nstexteffectletterpressstyle-how-to-add-a-letterpress-effect-to-text",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
You can add a subtle embossing effect to any text in your app using `NSAttributedString` and `NSTextEffectLetterpressStyle`. As an example, this code creates an attributed string using 24-point Georgia Bold in red, with Apple's letterpress effect applied, then writes it into a label:

```swift
let attrs = [NSAttributedString.Key.foregroundColor: UIColor.red,
             NSAttributedString.Key.font: UIFont(name: "Georgia-Bold", size: 24)!,
             NSAttributedString.Key.textEffect: NSAttributedString.TextEffectStyle.letterpressStyle as NSString
             ]

let string = NSAttributedString(string: "Hello, world!", attributes: attrs)
yourLabel.attributedText = string
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-visual-effect-blurs">How to add visual effect blurs 
/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView 
/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase">How to create a marching ants effect using lineDashPhase 
/quick-start/swiftui/how-to-create-a-marching-ants-border-effect">How to create a marching ants border effect 
/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios">How to get a Cover Flow effect on iOS</a>
-->

:::

---

<TagLinks />