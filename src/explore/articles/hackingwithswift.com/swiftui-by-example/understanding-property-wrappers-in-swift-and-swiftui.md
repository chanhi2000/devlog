---
lang: ko-KR
title: Understanding property wrappers in Swift and SwiftUI
description: Article(s) > Understanding property wrappers in Swift and SwiftUI
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
      content: Article(s) > Understanding property wrappers in Swift and SwiftUI
    - property: og:description
      content: Understanding property wrappers in Swift and SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/understanding-property-wrappers-in-swift-and-swiftui.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-become-a-swiftui-expert.md
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
  "title": "Understanding property wrappers in Swift and SwiftUI | SwiftUI by Example",
  "desc": "Understanding property wrappers in Swift and SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/understanding-property-wrappers-in-swift-and-swiftui",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI relies heavily on property wrappers to make our code easier to read, write, and maintain, but if you’ve never used them before you might wonder where all the `@` and `$` signs have come from – they can seem quite alien at first.

Although property wrappers are a general Swift feature since they were introduced in Swift 5.1, they are particularly common in SwiftUI – you’ll see `@Published`, `@ObservedObject`, `@EnvironmentObject` and many more, all with the purpose of helping reduce the amount of boilerplate in our code.

We’ll be going into detail on each one of SwiftUI’s property wrappers in the next few chapters, but just briefly it’s worth summarizing the basics:

- Some property wrappers allow us to achieve effects that would otherwise not be possible, such as the way `@State` lets us modify properties inside a struct.
- Some property wrappers specifically require you to have done extra work elsewhere, and may crash your app if that work isn’t done. For example, `@FetchRequest` expects you to have placed a Core Data managed object context into the environment ahead of time.
- You may apply only one property wrapper at a time, which means `@ObservedObject @Binding var value = SomeClass()` is not allowed.
- Even though some property wrappers look similar (looking at you, `@Environment` and `@EnvironmentObject`!) they are all different and it’s important you use them appropriately.
- You can create your own property wrappers if you want, but this isn’t required to use SwiftUI.

That covers the basics, but to really understand how these property wrappers work it’s worth investigating them individually.

::: details Similar solutions…

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />