---
lang: ko-KR
title: How to layer views on top of each other using ZStack
description: Article(s) > How to layer views on top of each other using ZStack
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
      content: Article(s) > How to layer views on top of each other using ZStack
    - property: og:description
      content: How to layer views on top of each other using ZStack
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack.html
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
  "title": "How to layer views on top of each other using ZStack | SwiftUI by Example",
  "desc": "How to layer views on top of each other using ZStack",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a dedicated stack type for creating overlapping content, which is useful if you want to place some text over a picture for example. It's called `ZStack`, and it works identically to the other two stack types.

For example, we could place a large image underneath some text like this:

```swift
ZStack {
    Image("niagara-falls")
    Text("Hacking with Swift")
        .font(.largeTitle)
        .background(.black)
        .foregroundStyle(.white)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack-1.zip)

![“Hacking with Swift” in white text on a black rectangle, centered over an image of Niagara Falls.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack-1~dark.png)

Like the other stack types, `ZStack` can be created with an alignment so that it doesn't always center things inside itself:

```swift
ZStack(alignment: .leading) {
    Image("niagara-falls")
    Text("Hacking with Swift")
        .font(.largeTitle)
        .background(.black)
        .foregroundStyle(.white)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack-2.zip)

![“Hacking with Swift” in white text on a black rectangle, touching the left edge of an image of Niagara Falls.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack-2~dark.png)

However, it doesn't have a spacing property because it doesn't make sense. Instead, you should use the `offset()` modifier as shown in [How to adjust the position of a view using its offset](/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md).

::: details Similar solutions…

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use images and other views as backgrounds | SwiftUI by Example",
  "desc": "How to use images and other views as backgrounds",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-images-and-other-views-as-backgrounds.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the home indicator and other system UI | SwiftUI by Example",
  "desc": "How to hide the home indicator and other system UI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-home-indicator-and-other-system-ui.md",
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

:::

---

<TagLinks />