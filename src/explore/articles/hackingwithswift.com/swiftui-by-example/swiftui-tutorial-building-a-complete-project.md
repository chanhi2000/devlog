---
lang: ko-KR
title: Building a complete project
description: Article(s) > Building a complete project
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
      content: Article(s) > Building a complete project
    - property: og:description
      content: Building a complete project
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tutorial-building-a-complete-project.md
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/dedication.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "SwiftUI tutorial: Building a complete project | SwiftUI by Example",
  "desc": "SwiftUI tutorial: Building a complete project",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/swiftui-tutorial-building-a-complete-project",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack id="M6v6y-KyJs0" />

This is a complete, free SwiftUI tutorial designed to take you through lots of its functionality in a single project. It's aimed at people who have existing programming experience with UIKit, but most things are explained in detail so newcomers ought to be able to follow along.

::: important

This was written for iOS 16.1, so you'll need at least Xcode 14.1 to follow along. This is available as a free download from the Mac App Store if you don't already have it.

:::

The project we'll be making is called iDine, and is a restaurant app that lists items in a menu and helps folks place orders. I've designed the project specifically so that it covers as many different techniques as possible to give you a good grounding in how things work in SwiftUI. Of course, we're also building a real project at the same time – it's going to be busy!

::: tip Note

If you'd like to see my completed version of this project, you can find it here on GitHub: [<FontIcon icon="iconfont icon-github"/>`twostraws/iDine`](https://github.com/twostraws/iDine).

:::

To get started, please create a new iOS project in Xcode called “iDine”, choosing the App template. You should also select SwiftUI for the Interface, but please leave all the checkboxes unchecked.

Xcode's project creation window, configured to create a SwiftUI app.

There are quite a few assets provided for this project that you need to copy in before you start. These are all in the assets for this project, which you can download [<FontIcon icon="fas fa-globe"/>here](https://www.hackingwithswift.com/samples/idine.zip).

Please copy them into your project like this:

- Drag <FontIcon icon="fa-brands fa-swift"/>`Helper.swift` into your project navigator. This contains a helper extension that makes it easier to decode `Codable` data from a bundle. This is not related to SwiftUI, so we won't be covering it here.
- You should also drag <FontIcon icon="fa-brands fa-swift"/>`Order.swift` and <FontIcon icon="fa-brands fa-swift"/>`Menu.swift` into the project navigator. These are custom types that store the data we're using in the app.
- And drag menu.json into your project navigator too – this describes all the menu items our restaurant offers, and will be decoded into instances of `MenuSection` and `MenuItem`.
- Drag the contents of the Images directory into your asset catalog, so we have all the pictures we need.

![Dragging our artwork into Xcode's asset catalog.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/2-2~dark.png)

OK, that's it – we're ready to go!

::: tip

At the end of each chapter I've added a “Further reading” section that suggests links to other chapters in this book. You don't need to read them in order to follow along; they are there to provide extra information and detail if you want to understand the bigger picture more thoroughly.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > Wrap up: our SwiftUI project is complete",
  "desc": "Wrap up: our SwiftUI project is complete",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/wrap-up-our-swiftui-project-is-complete.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/frequently-asked-questions-about-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />