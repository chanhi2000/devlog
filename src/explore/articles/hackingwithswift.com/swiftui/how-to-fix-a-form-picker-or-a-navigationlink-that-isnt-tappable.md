---
lang: ko-KR
title: How to fix a Form Picker or a NavigationLink that isn't tappable
description: Article(s) > How to fix a Form Picker or a NavigationLink that isn't tappable
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
      content: Article(s) > How to fix a Form Picker or a NavigationLink that isn't tappable
    - property: og:description
      content: How to fix a Form Picker or a NavigationLink that isn't tappable
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.html
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
  "title": "How to fix a Form Picker or a NavigationLink that isn't tappable | SwiftUI by Example",
  "desc": "How to fix a Form Picker or a NavigationLink that isn't tappable",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you have a `NavigationLink` or `Picker` that isn’t working, this usually happens because in some situations SwiftUI expects the containing view to be inside a `NavigationStack`. So, you might see a list row showing a disclosure indicator, but for it to appear disabled.

To fix the problem, wrap your view in a `NavigationStack`, like this:

```swift
NavigationStack {
    NavigationLink {
        Text("Detail view")
    } label: {
        Text("Show detail view")
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a tappable button | SwiftUI by Example",
  "desc": "How to create a tappable button",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-tappable-button.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a picker and read values from it | SwiftUI by Example",
  "desc": "How to create a picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control the tappable area of a view using contentShape() | SwiftUI by Example",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden() | SwiftUI by Example",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a date picker and read values from it | SwiftUI by Example",
  "desc": "How to create a date picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />