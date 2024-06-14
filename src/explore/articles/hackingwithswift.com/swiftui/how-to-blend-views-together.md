---
lang: ko-KR
title: How to blend views together
description: Article(s) > How to blend views together
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
      content: Article(s) > How to blend views together
    - property: og:description
      content: How to blend views together
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-blend-views-together.html
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
  "title": "How to blend views together | SwiftUI by Example",
  "desc": "How to blend views together",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-blend-views-together",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When placing one view over another, you can control the way they overlap by using the `blendMode()` modifier. This contains a variety of ways you can mix colors together, such as using their difference or using a color burn – these will be familiar if you’ve used Core Graphics or something like Photoshop before.

To demonstrate this we could create a `ZStack` with two overlapping circles inside, where the second has a `.multiply` blend mode so that it darkens the colors behind it:

```swift
ZStack {
    Circle()
        .fill(.red)
        .frame(width: 200, height: 200)
        .offset(x: -50)
        .blendMode(.screen)

    Circle()
        .fill(.blue)
        .frame(width: 200, height: 200)
        .offset(x: 50)
        .blendMode(.screen)
}
.frame(width: 400)
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to combine text views together | SwiftUI by Example",
  "desc": "How to combine text views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-combine-text-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to group views together | SwiftUI by Example",
  "desc": "How to group views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-group-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to group views together with ControlGroup | SwiftUI by Example",
  "desc": "How to group views together with ControlGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-group-views-together-with-controlgroup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @EnvironmentObject to share data between views | SwiftUI by Example",
  "desc": "How to use @EnvironmentObject to share data between views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-environmentobject-to-share-data-between-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />