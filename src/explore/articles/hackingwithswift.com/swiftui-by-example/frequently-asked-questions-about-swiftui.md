---
lang: ko-KR
title: Frequently asked questions about SwiftUI
description: Article(s) > Frequently asked questions about SwiftUI
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
      content: Article(s) > Frequently asked questions about SwiftUI
    - property: og:description
      content: Frequently asked questions about SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/frequently-asked-questions-about-swiftui.html
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
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/frequently-asked-questions-about-swiftui", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Lots of people are already asking me questions about SwiftUI, and I've done my best to ask other people who know much more to try to find definitive answers as appropriate.

So, here goes…

---

## Which to learn: SwiftUI or UIKit?

This question has been asked so many times I added a dedicated chapter to this book so I could go into more detail

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## Where can SwiftUI be used?

SwiftUI runs on iOS 13, macOS 10.15, tvOS 13, watchOS 6, visionOS 1, or any future later versions of those platforms. This means if you work on an app that must support iOS N-1 or even N-2 – i.e., the current version and one or two before that – then you will be limited in terms of the features you can offer.

However, it's important you don't think of SwiftUI as being a multi-platform framework similar to Java's Swing or React Native. The official line seems to be that SwiftUI is not a multi-platform framework, but is instead a framework for creating apps on multiple platforms.

That might sound the same, but there's an important difference: Apple isn't saying that you can use identical SwiftUI code on every platform, because some things just aren't possible – there's no way to use the Apple Watch's digital crown on a Mac, for example.

---

## Does SwiftUI replace UIKit?

No. Many parts of SwiftUI directly build on top of existing UIKit components, such as `UITableView`. Of course, many other parts don't – they are new controls rendered by SwiftUI and not UIKit.

But the point isn't to what extent UIKit is involved. Instead, the point is that we don't _care_. SwiftUI more or less completely masks UIKit's behavior, so if you write your app for SwiftUI and Apple replaces UIKit with a singing elephant in two years you don't have to care – as long as Apple makes the elephant compatible with the same methods and properties that UIKit exposed to SwiftUI, your code doesn't change.

---

## Does SwiftUI use Auto Layout?

While Auto Layout is certainly being used for some things behind the scenes, it's not exposed to us as SwiftUI developers. Instead, it uses a flexible box layout system that will be familiar to developers coming from the web.

---

## Is SwiftUI fast?

SwiftUI is _screamingly_ fast – in all my tests so far it seems to outpace UIKit. Having spoken to the team who made it I'm starting to get an idea why: first, they aggressively flatten their layer hierarchy so the system has to do less drawing, but second many operations can bypass Core Animation entirely and go straight to Metal for extra speed.

So, yes: SwiftUI is incredibly fast, and all without us having to do any extra work.

---

## Why can't I see the preview of my code?

When working with SwiftUI it's helpful to be able to see both the code for your view and a preview of your view – how it looks – side by side. If you can see the code and not the preview, chances are you need to go to the Editor menu and make sure Canvas is enabled.

---

## How closely does the code match the preview?

When you make any change to the preview it will also update the generated code. Similarly, if you change the code it will update the user interface too. So, the code and preview are identical and always stay in sync.

---

## Why do my colors look slightly off?

SwiftUI gives us standard system colors like red, blue, and green, but these aren't the pure red, blue, and green you might be used to from `UIColor`. Instead, these are the new style colors that automatically adapt to light and dark mode, which means they will look brighter or darker depending on your system appearance.

---

## Is UIKit dead?

No! Apple introduced huge amounts of new functionality even as recently as WWDC23. If Apple are still doing WWDC talks about new features in UIKit, you're quite safe – there's no risk of them retiring it by surprise.

However, Apple has also ramped up the narrative that the best way to build apps is with SwiftUI, and also released Swift-only frameworks such as Swift Charts, SwiftData, and WidgetKit, so the writing is on the wall: SwiftUI is the future.

---

## Can you mix views from SwiftUI and UIKit?

Yes! You can embed one inside the other and it works great.

---

<TagLinks />