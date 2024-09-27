---
lang: ko-KR
title: "How to fix incorrect VoiceOver pronunciations"
description: "Article(s) > How to fix incorrect VoiceOver pronunciations"
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
      content: "Article(s) > How to fix incorrect VoiceOver pronunciations"
    - property: og:description
      content: "How to fix incorrect VoiceOver pronunciations"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.html
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
  "title": "How to fix incorrect VoiceOver pronunciations | Accessibility - free Swift example code",
  "desc": "How to fix incorrect VoiceOver pronunciations",
  "link": "https://hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
As clever as VoiceOver is, sometimes it will get the pronunciation wrong for certain words – particularly when it’s missing some context that would have made clear what the correct pronunciation was.

For example, if you have a `UILabel` containing the string “Live” should that be pronounced as “liv” or as “lyve”? Or how about “Read” – is that pronounced as “reed” or “red”? There’s no way for VoiceOver to know unless you tell it.

The official way to do this is by using the `UIAccessibilitySpeechAttributeIPANotation` key in an attributed string, but in practice using that just makes your sounds come out poorly.

An easier way that also produces better results is just to use your own phonetic lettering. For example:

```swift
label.text = "read"
label.accessibilityLabel = "red"
```

Using this approach, the screen will show “read” but VoiceOver users will hear “red” – it works for everyone.

There are two places where this approach either won’t be enough or will prove extremely complicated.

First, if you use foreign languages inside your app they will be read out as if they were the user’s primary language. So, French words might be pronounced as if they were English, for example.

Second, if your app uses punctuation that the user needs to hear audibly, the result won’t be what you hoped for. For example, if you write some Swift code like `user.name` that will be interpreted by VoiceOver as “user (pause) name” rather than “user period name”.

Both of these problems can be fixed by using special attributes of `NSAttributedString`. For example, we can specify the language for an attributed string like this:

```swift
let attributedString1 = NSAttributedString(
    string: "Bonjour", attributes: [.accessibilitySpeechLanguage: "fr-FR"]
)

label.text = "Bonjour"
label.accessibilityAttributedLabel = attributedString1
```

And we can tell VoiceOver to read all punctuation like this:

```swift
let attributedString2 = NSAttributedString(
    string: "user.name", attributes: [.accessibilitySpeechPunctuation: true]
)

label.text = "user.name"
label.accessibilityAttributedLabel = attributedString2
```

Much better!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually 
/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext 
/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile” 
/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable">How to fix a Form Picker or a NavigationLink that isn’t tappable 
/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock">How to fix “Ambiguous reference to member 'buildBlock()’”</a>
-->

:::

---

<TagLinks />