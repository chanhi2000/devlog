---
lang: ko-KR
title: "How to help VoiceOver read specific kinds of text using accessibilityTextualContext"
description: "Article(s) > How to help VoiceOver read specific kinds of text using accessibilityTextualContext"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to help VoiceOver read specific kinds of text using accessibilityTextualContext"
    - property: og:description
      content: "How to help VoiceOver read specific kinds of text using accessibilityTextualContext"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext.html
date: 2019-10-20
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Accessibility - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/accessibility/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to help VoiceOver read specific kinds of text using accessibilityTextualContext | Accessibility - free Swift example code",
  "desc": "How to help VoiceOver read specific kinds of text using accessibilityTextualContext",
  "link": "https://hackingwithswift.com/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Although VoiceOver does a great job of reading our interfaces by default, sometimes it can benefit from a little extra guidance in order to read content appropriately. `accessibilityTextualContext` is a property available on all UIKit controls that lets us mark content as being a specific type – output from the command line, some spreadsheet data, or even narrative speech.

For example, we could mark a label as containing source code like this:

```swift
yourLabel.accessibilityTextualContext = .sourceCode
```

Now that VoiceOver knows the label contains source code, it could choose to read out every character of punctuation rather than assume that “,” and “.” are just part of a sentence.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually 
/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations">How to fix incorrect VoiceOver pronunciations 
/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode">How to use semantic colors to help your iOS app adapt to dark mode 
/example-code/system/how-to-run-code-at-a-specific-time">How to run code at a specific time 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />