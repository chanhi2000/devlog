---
lang: ko-KR
title: How to make VoiceOver read characters individually
description: Article(s) > How to make VoiceOver read characters individually
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to make VoiceOver read characters individually
    - property: og:description
      content: How to make VoiceOver read characters individually
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-voiceover-read-characters-individually.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make VoiceOver read characters individually | SwiftUI by Example",
  "desc": "How to make VoiceOver read characters individually",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-voiceover-read-characters-individually",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Most text can be read as words, but some special text such as passwords, stock symbols, and certain numbers, must be read by VoiceOver letter by letter in order to be useful. In SwiftUI this can be enabled using the `speechSpellsOutCharacters()` modifier, which is used like this:

```swift
Text("abCayer-muQai")
    .speechSpellsOutCharacters()
```

This modifier returns another `Text` instance, which means you can chain it to other `Text`-only modifiers if you want.

It works particular well when grouping accessibility elements together so they are read as one, like this:

```swift
VStack {
    Text("Your password is")
    Text("abCayer-muQai")
        .font(.title)
        .speechSpellsOutCharacters()
}
.accessibilityElement(children: .combine)
```

Using that code, VoiceOver will automatically read “Your password is” naturally, then spell out the password part as requested.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a picker and read values from it | SwiftUI by Example",
  "desc": "How to create a picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read tap and double-tap gestures | SwiftUI by Example",
  "desc": "How to read tap and double-tap gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-tap-and-double-tap-gestures.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a segmented control and read values from it | SwiftUI by Example",
  "desc": "How to create a segmented control and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a stepper and read values from it | SwiftUI by Example",
  "desc": "How to create a stepper and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-stepper-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a slider and read values from it | SwiftUI by Example",
  "desc": "How to create a slider and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-slider-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />