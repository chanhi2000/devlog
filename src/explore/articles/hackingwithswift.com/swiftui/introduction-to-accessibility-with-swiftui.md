---
lang: ko-KR
title: Introduction to accessibility with SwiftUI
description: Article(s) > Introduction to accessibility with SwiftUI
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
      content: Article(s) > Introduction to accessibility with SwiftUI
    - property: og:description
      content: Introduction to accessibility with SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/introduction-to-accessibility-with-swiftui.html
prev: /explore/articles/hackingwithswift.com/swiftui/how-to-read-the-users-location-using-locationbutton.md
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
  "title": "Introduction to accessibility with SwiftUI | SwiftUI by Example",
  "desc": "Introduction to accessibility with SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/introduction-to-accessibility-with-swiftui",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default SwiftUI apps come with a remarkably high level of accessibility, which is no accident – it was planned into the framework from the earliest days, and unless you actively choose to work around the defaults you’ll find your apps do a good job of being accessible without much extra work from you.

The key to this behavior is the stack-based approach of SwiftUI’s layouts: everything has a natural order because we place things inside `HStack` and `VStack`, so the system can understand roughly how our layout should flow. In comparison, UIKit and Auto Layout let us place things anywhere, so the system effectively had to make a best guess as to how things should be ordered.

SwiftUI also strongly encourages us to add labels to all our interactive controls, explicitly saying what everything is for. Yes, we can hide those labels, but even when they are hidden they are still used by the system as audio prompts for the screen reader and more.

So, SwiftUI gives us a lot of accessibility for free. However, it still gives us extra tools to provide a more enhanced experience: how should things be read by the screen reader? Does *everything* need to be read? What if the user prefers not to have fancy animations?

In this collection of chapters we’re going to look at these more advanced pieces of functionality, hopefully helping you build user interfaces that provide users with a comfortable experience regardless of their system preferences.

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to detect the Reduce Motion accessibility setting | SwiftUI by Example",
  "desc": "How to detect the Reduce Motion accessibility setting",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-reduce-motion-accessibility-setting.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Introduction to using Core Data with SwiftUI | SwiftUI by Example",
  "desc": "Introduction to using Core Data with SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/introduction-to-using-core-data-with-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Introduction to navigation | SwiftUI by Example",
  "desc": "Introduction to navigation",
  "link": "/explore/articles/hackingwithswift.com/swiftui/introduction-to-navigation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/frequently-asked-questions-about-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />