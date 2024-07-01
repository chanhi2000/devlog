---
lang: ko-KR
title: "Answering the big question: should you learn SwiftUI, UIKit, or both?"
description: "Article(s) > Answering the big question: should you learn SwiftUI, UIKit, or both?"
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
      content: "Article(s) > Answering the big question: should you learn SwiftUI, UIKit, or both?"
    - property: og:description
      content: "Answering the big question: should you learn SwiftUI, UIKit, or both?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.html
date: 2023-06-17
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

Of all the SwiftUI questions I've been asked, one comes up more than any other: “I'm learning Swift: should I learn SwiftUI or do I need to learn UIKit as well?”

The answer folks seem to want to hear is “forget that old UIKit thing – you should focus on SwiftUI!” However, the simple truth is that the vast majority of people won't find success with that advice, and it's worth explaining why in a little detail.

Before I get into detail I want to make one thing clear: SwiftUI is a remarkable user interface framework, and is 100% absolutely going to be the future of app development on Apple's platforms. However, if you want to work at a large company *today* – or indeed any point in the next one to two years or so – you almost certainly need some knowledge of UIKit.

OK, with that out of the way, the problems with focusing on SwiftUI while ignoring UIKit come down to three things:

1. Limited API coverage.
2. Limited adoption.
3. Limited support.

Let's break that down…

---

## Limited API coverage

Regardless of whether you want to work for a company or just build hobby apps in your spare time, one drawback of SwiftUI is that it does not currently have the same broad API coverage as UIKit.

For example, if you want to show rich editable text you would use `UITextView` in UIKit, but SwiftUI's own `TextEditor` will only handle plain strings. Or if you want to embed a web view, that's as simple as using `WKWebView` in UIKit, but in SwiftUI it's just not possible.

This isn't Apple being lazy, and instead seems to be deliberate: rather than releasing wrappers for all their APIs up front then having to make changes later, they are instead taking a much more cautious approach and adding APIs incrementally. This should (I hope!) reduce the number of breaking changes we see in the future, because it gives Apple's engineers more time to hone the subset of APIs they intend to ship.

A lot of the time you'll find workarounds, but honestly it's tiring when you know a particular thing is trivial in UIKit but hard if not impossible in SwiftUI.

As each year goes by I fully expect to see more functionality added to SwiftUI to bring it to parity with UIKit, but right now some key components are still missing.

---

## Limited adoption

SwiftUI was only announced at WWDC2019, and is available in iOS 13 devices or later. This immediately means that:

- The majority of apps written to date uses UIKit.
- Any app that needs to support iOS 12 or earlier is just out of luck for SwiftUI. (In practice this is more complicated, because SwiftUI for iOS 13 is missing some major features such as `@StateObject`.)

This means that if you intend to get a job as an iOS developer in the next two years, UIKit experience may be mandatory because that's what many existing codebases use. No one – not even Apple, I think! – expects everyone in the iOS community to migrate over to SwiftUI at any sort of rapid pace. There's a lot of code, a lot of time, and a lot of money invested in UIKit apps, and it has a long and happy life ahead of it.

Some folks try to draw parallels between adoption of Swift and adoption of SwiftUI, which I don't think is helpful. Adoption of Swift was fast because it worked across every one of the frameworks Apple supported (UIKit, SpriteKit, etc), and also already supported iOS n-1, so many companies could switch to it immediately.

Again, I want to reiterate that SwiftUI is absolutely going to be the future of development for Apple's platforms, but it will take a long time until you can be confident UIKit experience is no longer necessary for work.

In the meantime, SwiftUI is the perfect candidate for wholly new apps, smaller apps, personal apps, prototype apps, and more. And if you're lucky enough to join a company that uses SwiftUI exclusively, enjoy it!

---

## Limited support

UIKit has been around over ten years now, which means a) almost every problem you might face has probably already been faced and solved by others, and b) there are lots of libraries out there that provide extensions and customizations.

While some learners might imagine that senior developers hold vast amounts of UIKit in their head, the simple truth is that we all use Google, Stack Overflow, Hacking with Swift, and more to find solutions to problems. When you're desperate that might literally be pasting error messages into a website, but regardless of how you get answers it saves a _lot_ of time finding them online.

SwiftUI, simply by virtue of being significantly newer, has significantly fewer solutions available. In fact, it's common to look for things that no one has tried before, particularly if it's shortly after WWDC – you're literally the first person. That can be a lot of fun, but if you have an actual project that you actually want to ship it can also be a frustrating time sink.

---

## So… are you saying I shouldn't learn SwiftUI?

No! SwiftUI is great fun to work with, and you can build marvelous things with it. The whole rest of this book is designed to help you get started with SwiftUI as quickly and efficiently as possible – I wouldn't have written it if I didn't think SwiftUI was awesome.

What I'm trying to say is that the existence of SwiftUI hasn't somehow rendered UIKit obsolete: if you intend to get an iOS development job within the next two years, knowing how to use UIKit will either be a firm requirement or a strong bonus.

So, to answer the question directly: yes, you should get busy learning SwiftUI because it is the future of app development on Apple's platforms, but at some point you may still need to learn UIKit because those skills will be useful for years to come.

As each year goes by, all three problems listed above will become reduced as SwiftUI grows in strength, adoption, and support, and as SwiftUI grows UIKit will start to shrink. However, for now at least, many people need both.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Migrating from UIKit to SwiftUI | SwiftUI by Example",
  "desc": "Migrating from UIKit to SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/migrating-from-uikit-to-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />