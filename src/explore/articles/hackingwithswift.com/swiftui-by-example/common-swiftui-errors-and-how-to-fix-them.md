---
lang: ko-KR
title: Common SwiftUI errors and how to fix them
description: Article(s) > Common SwiftUI errors and how to fix them
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
      content: Article(s) > Common SwiftUI errors and how to fix them
    - property: og:description
      content: Common SwiftUI errors and how to fix them
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/common-swiftui-errors-and-how-to-fix-them.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-uiapplicationdelegateadaptor-property-wrapper.md
date: 2022-12-01
isOriginal: false
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
  "title": "Common SwiftUI errors and how to fix them | SwiftUI by Example",
  "desc": "Common SwiftUI errors and how to fix them",
  "link": "https://hackingwithswift.com/quick-start/swiftui/common-swiftui-errors-and-how-to-fix-them",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

As great as SwiftUI is, it’s fair to say that its error messages can sometimes be a little unhelpful. Often you’ll get an error on line 5 when really the error is on line 10, and its common for the messages you *do* get to be hard to understand.

Although it’s not possible for me to diagnose every error you might hit, in this appendix we walk through all the most common error messages people seem to hit, then provide example code to solve it so you can move on.

If none of these solutions have helped you, the best thing to do is a binary chop for your code: remove a few things and see if that works, then remove a few more things and a few more, until eventually your code compiles. You can then re-add the part that causes the problem, and try to fix it.

Please keep in mind that SwiftUI leverages all of Swift’s most advanced features – the error messages are going to improve, but it might take a little time.

::: details Similar solutions…

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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
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