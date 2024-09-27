---
lang: ko-KR
title: "How to detect the dominant language of a text string"
description: "Article(s) > How to detect the dominant language of a text string"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect the dominant language of a text string"
    - property: og:description
      content: "How to detect the dominant language of a text string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-detect-the-dominant-language-of-a-text-string.html
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
  "title": "How to detect the dominant language of a text string | System - free Swift example code",
  "desc": "How to detect the dominant language of a text string",
  "link": "https://hackingwithswift.com/example-code/how-to-detect-the-dominant-language-of-a-text-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
The `NSLinguisticTagger` class has dedicated code to help you identify the dominant language of a text string. Before I show you the code, there are three important provisos:

1. It detects the *dominant* language, which means if you provide it with text that contains more than one language it will return whichever one appears most often.
<li>If you give it text where no identification can be made, e.g. some numbers or an empty string, it will return nil.
<li>It is extraordinarily fast – you can feed it thousands of article-length strings a second and it will fly through them.

Here’s an example to help you get started:

```swift
let text = "Ceci n'est pas une pipe"

if let language = NSLinguisticTagger.dominantLanguage(for: text) {
    print(language)
} else {
    print("Unknown language")
}
```

When that code runs it will print “fr”, because the dominant language in the text is French.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString 
/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image">How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image 
/quick-start/swiftui/how-to-create-static-labels-with-a-text-view">How to create static labels with a Text view 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a>
-->

:::

---

<TagLinks />