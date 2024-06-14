---
lang: ko-KR
title: Introduction to navigation
description: Article(s) > Introduction to navigation
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
      content: Article(s) > Introduction to navigation
    - property: og:description
      content: Introduction to navigation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/introduction-to-navigation.html
prev: /explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md
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
  "title": "Introduction to navigation | SwiftUI by Example",
  "desc": "Introduction to navigation",
  "link": "https://hackingwithswift.com/quick-start/swiftui/introduction-to-navigation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Navigation sits at the heart of so many apps, and SwiftUI does a great job of making it easy out of the box. This means we get a simple and natural approach using `NavigationLink`, full control over programmatic navigation using `Navigationpath`, support for two- and three-view layout with `NavigationSplitView`, and more.

This means a lot of the time you can forget about the easier stuff and focus on the parts that need more thought, such as:

- Making customizable toolbars with sensible defaults
- Saving and loading your user's navigation with state restoration
- Deciding when and how to show a sidebar, or adding an extra content view if needed.
- Combining `NavigationSplitView` *and* `NavigationStack` to get exactly the structure you want.

These aren't necessarily hard, they just take more planning to get right.

::: details Similar solutions…

```component VPCard
{
  "title": "How to use programmatic navigation in SwiftUI | SwiftUI by Example",
  "desc": "How to use programmatic navigation in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-programmatic-navigation-in-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in a navigation view | SwiftUI by Example",
  "desc": "How to preview your layout in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to embed a view in a navigation view | SwiftUI by Example",
  "desc": "How to embed a view in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-embed-a-view-in-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add bar items to a navigation view | SwiftUI by Example",
  "desc": "How to add bar items to a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-bar-items-to-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />