---
lang: ko-KR
title: How to make a fixed size Spacer
description: Article(s) > How to make a fixed size Spacer
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to make a fixed size Spacer
    - property: og:description
      content: How to make a fixed size Spacer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-fixed-size-spacer.html
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
  "title": "How to make a fixed size Spacer | SwiftUI by Example",
  "desc": "How to make a fixed size Spacer",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-a-fixed-size-spacer",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `Spacer` views automatically fill up all available space on their axis of expansion, which is a fancy way of saying they take up as much space as they can either horizontally or vertically, depending on what you put them in.

If you want to make a spacer of an exact size, just do the same thing you would do for any other kind of view: use a `frame()` modifier with the exact sizes you want.

For example, this shows two text views, with a 50-point spacer in between them:

```swift
VStack {
    Text("First Label")
    Spacer()
        .frame(height: 50)
    Text("Second Label")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-fixed-size-spacer-1.zip)

![A phone showing the text “First Label” some distance above the text “Second Label”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-fixed-size-spacer-1~dark.png)

If you give the spacer a range of values, for example using `.frame(minHeight: 50, maxHeight: 500)`, then it will automatically take up as much space as it can, up to the maximum you set. Adding some flexibility in this way is usually a good idea, so that your user interfaces scale across devices more easily.

There are some situations where you want to specify a spacer size agnostic to its layout direction, for example if your views might sometimes be in a `HStack` or a `VStack` and you want the spacer to add 50 points regardless of direction.

In this circumstance you should use the `minLength` initializer, like this:

```swift
VStack {
    Text("First Label")
    Spacer(minLength: 50)
    Text("Second Label")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-a-fixed-size-spacer-2.zip)

![A phone showing “First Label” at the top of the screen and “Second Label” at the bottom.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-a-fixed-size-spacer-2~dark.png)

::: note

That's a *minimum* length, so the spacer will still grow to be larger if space is available.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to force views to one side inside a stack using Spacer | SwiftUI by Example",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a fixed grid | SwiftUI by Example",
  "desc": "How to position views in a fixed grid",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-position-views-in-a-fixed-grid.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate the size of text | SwiftUI by Example",
  "desc": "How to animate the size of text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-the-size-of-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create different layouts using size classes | SwiftUI by Example",
  "desc": "How to create different layouts using size classes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-different-layouts-using-size-classes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />