---
lang: ko-KR
title: "How to used a named UIColor in code and Interface Builder"
description: "Article(s) > How to used a named UIColor in code and Interface Builder"
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
      content: "Article(s) > How to used a named UIColor in code and Interface Builder"
    - property: og:description
      content: "How to used a named UIColor in code and Interface Builder"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to used a named UIColor in code and Interface Builder | Xcode - free Swift example code",
  "desc": "How to used a named UIColor in code and Interface Builder",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
Since Xcode 9.0 we’ve been able to create named colors directly inside asset catalogs, which means it’s possible to select a precise color once then use it uniformly across all code and storyboards.

To try this out, open your asset catalog, click the + button, then choose New Color Set from the menu that appears. Select the new color that got created – it will be a large white square – then press Alt+<kbd>Cmd</kbd>+4 to activate the attributes inspector so that you can customize it.

Named colors are comprised of two rather obvious parts: a name (e.g. “PayPal blue”) and a color, which you can specify as ranges from 0-1, ranges from 0-255, or hexadecimal.

Once a named color is in place you can use it code like this:

```swift
myView.backgroundColor = UIColor(named: "Chartreuse")
```

You can also use it inside storyboards by selecting it from the color dropdown menu – all your named colors will automatically be shown in their own section of the menu.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />