---
lang: ko-KR
title: How to give a view a custom frame
description: Article(s) > How to give a view a custom frame
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
      content: Article(s) > How to give a view a custom frame
    - property: og:description
      content: How to give a view a custom frame
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-give-a-view-a-custom-frame.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-custom-colors-from-an-asset-catalog.md
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
  "title": "How to give a view a custom frame | SwiftUI by Example",
  "desc": "How to give a view a custom frame",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-give-a-view-a-custom-frame",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default SwiftUI's views take up only as much space as they need, but if you want that to change you can use a frame() modifier to tell SwiftUI what kind of size range you want to have.

For example, you could create a button with a 200x200 tappable area like this:

```swift
Button {
    print("Button tapped")
} label: {
    Text("Welcome")
        .frame(minWidth: 0, maxWidth: 200, minHeight: 0, maxHeight: 200)
        .font(.largeTitle)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-give-a-view-a-custom-frame-1.zip)

![The word “Welcome” in blue signifying it is tappable.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-give-a-view-a-custom-frame-1~dark.png)

Or you could make a text view fill the whole screen (minus the safe area) by specifying a frame with zero for its minimum width and height, and infinity for its maximum width and height, like this:

```swift
Text("Please log in")
    .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity)
    .font(.largeTitle)
    .foregroundStyle(.white)
    .background(.red)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-give-a-view-a-custom-frame-2.zip)

![A phone showing the words “Please log in” over a large red background.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-give-a-view-a-custom-frame-2~dark.png)

::: note

if you want a view to go under the safe area, make sure you add the `ignoresSafeArea()` modifier.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
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

```component VPCard
{ 
  "title": "How to use Dynamic Type with a custom font | SwiftUI by Example",
  "desc": "How to use Dynamic Type with a custom font",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-dynamic-type-with-a-custom-font.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom transition | SwiftUI by Example",
  "desc": "How to create a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />