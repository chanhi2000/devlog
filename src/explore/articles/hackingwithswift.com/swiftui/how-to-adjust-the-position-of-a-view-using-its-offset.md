---
lang: ko-KR
title: How to adjust the position of a view using its offset
description: Article(s) > How to adjust the position of a view using its offset
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
      content: Article(s) > How to adjust the position of a view using its offset
    - property: og:description
      content: How to adjust the position of a view using its offset
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.html
prev: /explore/articles/hackingwithswift.com/swiftui/how-to-ask-the-user-to-review-your-app.md
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
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

All views have a natural position inside your hierarchy, but the `offset()` modifier lets you move them relative to that natural position. This is particularly useful inside `ZStack`, where it lets you control how views should overlap.

::: important

Using `offset()` will cause a view to be moved relative to its natural position, but *won’t* affect the position of other views or any other modifiers placed after the offset. This means you need to think carefully how you use it, not least to make sure views don’t overlap if that wasn’t your intention.

:::

For example, in this `VStack` we can use `offset()` to move the second item down by 15 points so that it begins to overlap the third item:

```swift
VStack {
    Text("Home")
    Text("Options")
        .offset(y: 15)
    Text("Help")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-1.zip)

![The lines “Home”, “Options”, and “Help”. “Options” is displaced downwards and overlaps with “Help”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-1~dark@2x.png)

You will commonly find that using `padding()` together with `offset()` gives you the result you’re looking for, as that moves one view around while also adjusting the views next to it to match.

For example, this will move the second item down by 15 points, but add 15 points of padding to its bottom edge so that it doesn’t overlap the text view below:

```swift
VStack {
    Text("Home")
    Text("Options")
        .offset(y: 15)
        .padding(.bottom, 15)
    Text("Help")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-2.zip)

![The lines “Home”, “Options”, and “Help”. “Options” and “Help” are displaced downwards.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-2~dark@2x.png)

As I said earlier, any modifiers placed after `offset()` won’t be affected by the change in position, which might cause unexpected results. In this following example, I’ve used `background()` both before and after the offset, so you can see how they are different:

```swift
HStack {
    Text("Before")
        .background(.red)
        .offset(y: 15)

    Text("After")
        .offset(y: 15)
        .background(.red)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-3.zip)

![The text “Before” with a red background behind it, and the text “After”, with a red rectangle above it.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-3~dark@2x.png)

When used in conjunction with a `ZStack`, offsets let us position one view inside another, which is particularly useful when you control the alignment of the `ZStack`.

For example, if we have a `ZStack` showing a photo along with the name of the photographer, we might use `.bottomTrailing` alignment to make the image take up all the available space while having the credit line sit in the bottom-right corner, then use `offset(x: -5, y: -5)` to pull the credit line back by five points:

```swift
ZStack(alignment: .bottomTrailing) {
    Image("scotland")
    Text("Photo credit: Paul Hudson.")
        .padding(4)
        .background(.black)
        .foregroundStyle(.white)
        .offset(x: -5, y: -5)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-4.zip)

![An image of Scotland, with a black rectangle inset slightly from the bottom right corner. On the rectangle is the text “Photo credit: Paul Hudson.” in white.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset-4~dark@2x.png)

Placing the offset at the end of the other modifiers ensures they all move together.

::: details Similar solutions…

```component VPCard
{
  "title": "How to position views in a grid using LazyVGrid and LazyHGrid | SwiftUI by Example",
  "desc": "How to position views in a grid using LazyVGrid and LazyHGrid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a fixed grid | SwiftUI by Example",
  "desc": "How to position views in a fixed grid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-fixed-grid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the way an image is fitted to its space | SwiftUI by Example",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />