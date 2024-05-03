---
lang: ko-KR
title: How to disable the overlay color for images inside Button and NavigationLink
description: Article(s) > How to disable the overlay color for images inside Button and NavigationLink
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
      content: Article(s) > How to disable the overlay color for images inside Button and NavigationLink
    - property: og:description
      content: How to disable the overlay color for images inside Button and NavigationLink
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.html
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
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

On iOS, an image drawn inside a `NavigationLink` or a `Button` will almost certainly not behave as you expect: the whole image will be be covered with an opaque blue color, or whatever accent color you have in your view.

There are two ways you can fix this; which you choose depends on the behavior you want.

First, you can use the `renderingMode()` mode modifier to achieve a slightly different result:

```swift
NavigationStack {
    NavigationLink {
        Text("Detail view here")
    } label: {
        Image("logo")
            .renderingMode(.original)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink-1~dark.mp4 "/>

As an alternative, you can use the `buttonStyle()` modifier with `.plain`, like this:

```swift
NavigationStack {
    NavigationLink {
        Text("Detail view here")
    } label: {
        Image("logo")
    }
    .buttonStyle(.plain)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink-2.zip)

Or like this for plain buttons:

```swift
Button {
    // your action here
} label: {
    Image("logo")
}
.buttonStyle(.plain)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink-3.zip)

::: important

If you're using Xcode 12 you need to use `PlainButtonStyle()` rather than `.plain`.

:::

The difference is subtle, but important: if you use a `Button` inside a `List`, using `buttonStyle(.plain)` will mean that only the space directly around the button's content can be tapped, whereas if you use `.renderingMode(.original)` then the whole cell remains tappable.

::: details Similar solutions…

```component VPCard
{
  "title": "Displaying a detail screen with NavigationLink | SwiftUI by Example",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/displaying-a-detail-screen-with-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix a Form Picker or a NavigationLink that isn't tappable | SwiftUI by Example",
  "desc": "How to fix a Form Picker or a NavigationLink that isn't tappable",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable autocorrect in a TextField | SwiftUI by Example",
  "desc": "How to disable autocorrect in a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-autocorrect-in-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable ScrollView clipping so contents overflow | SwiftUI by Example",
  "desc": "How to disable ScrollView clipping so contents overflow",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-scrollview-clipping-so-contents-overflow",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable taps for a view using allowsHitTesting() | SwiftUI by Example",
  "desc": "How to disable taps for a view using allowsHitTesting()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-taps-for-a-view-using-allowshittesting.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />