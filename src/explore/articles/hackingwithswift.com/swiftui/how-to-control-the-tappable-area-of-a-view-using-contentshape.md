---
lang: ko-KR
title: How to control the tappable area of a view using contentShape()
description: Article(s) > How to control the tappable area of a view using contentShape()
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
      content: Article(s) > How to control the tappable area of a view using contentShape()
    - property: og:description
      content: How to control the tappable area of a view using contentShape()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape.html
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
  "title": "How to control the tappable area of a view using contentShape() | SwiftUI by Example",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you add a tap gesture to a primitive SwiftUI view such as `Text` or `Image`, the whole view becomes tappable. If you add a tap gesture to a container SwiftUI view, such as `VStack` or `HStack`, then SwiftUI only adds the gesture to the parts of the container that have something inside – large parts of the stack are likely to be untappable.

If this is what you want then the default behavior is fine. However, if you want to change the shape of hit tests – the area that responds to taps – then you should use the `contentShape()` modifier with the shape you want.

For example, this code creates a `VStack` containing an image, a spacer, and some text, then uses the `contentShape()` modifier to make the whole stack tappable rather than just the image and text:

```swift
VStack {
    Image(systemName: "person.circle").resizable().frame(width: 50, height: 50)
    Spacer().frame(height: 50)
    Text("Paul Hudson")
}
.contentShape(Rectangle())
.onTapGesture {
    print("Show details for user")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape-1~dark.mp4" />

::: detials Similar solutions…

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
  "title": "How to fix a Form Picker or a NavigationLink that isn't tappable | SwiftUI by Example",
  "desc": "How to fix a Form Picker or a NavigationLink that isn't tappable",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to place content outside the safe area | SwiftUI by Example",
  "desc": "How to place content outside the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-place-content-outside-the-safe-area.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add extra padding to the safe area | SwiftUI by Example",
  "desc": "How to add extra padding to the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-extra-padding-to-the-safe-area.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to inset the safe area with custom content | SwiftUI by Example",
  "desc": "How to inset the safe area with custom content",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />