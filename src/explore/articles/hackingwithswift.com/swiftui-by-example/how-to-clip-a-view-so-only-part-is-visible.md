---
lang: ko-KR
title: How to clip a view so only part is visible
description: Article(s) > How to clip a view so only part is visible
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
      content: Article(s) > How to clip a view so only part is visible
    - property: og:description
      content: How to clip a view so only part is visible
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-clip-a-view-so-only-part-is-visible.html
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
  "title": "How to clip a view so only part is visible | SwiftUI by Example",
  "desc": "How to clip a view so only part is visible",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-clip-a-view-so-only-part-is-visible",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets you clip any view to control its shape, all by using the `clipShape()` modifier.

For example this creates a button using the system image “bolt.fill” (a filled lightning bolt), gives it some padding and a background color, then clips it using a circle so that we get a circular button:

```swift
Button {
    print("Button was pressed!")
} label: {
    Image(systemName: "bolt.fill")
        .foregroundStyle(.white)
        .padding()
        .background(.green)
        .clipShape(Circle())
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-clip-a-view-so-only-part-is-visible-1.zip)

![A white lightning bolt icon inside a green circle.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-clip-a-view-so-only-part-is-visible-1~dark@2x.png)

The `Circle` clip shape will always make circles from views, even if their width and height are unequal – it will just crop the larger value to match the small.

As well as `Circle` there’s also `Capsule`, which crops a view to have rounded corners in a lozenge shape. For example, this creates the same button using a capsule shape:

```swift
Button {
    print("Pressed!")
} label: {
    Image(systemName: "bolt.fill")
        .foregroundStyle(.white)
        .padding(EdgeInsets(top: 10, leading: 20, bottom: 10, trailing: 20))
        .background(.green)
        .clipShape(Capsule())
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-clip-a-view-so-only-part-is-visible-2.zip)

![A white lightning bolt icon inside a green capsule or pill shape.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-clip-a-view-so-only-part-is-visible-2~dark@2x.png)

I added some more precise padding there to get a better shape – you should experiment to find something you like.


::: details Similar solutions…

```component VPCard
{
  "title": "How to draw part of a solid shape using trim() | SwiftUI by Example",
  "desc": "How to draw part of a solid shape using trim()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-part-of-a-solid-shape-using-trim.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” | SwiftUI by Example",
  "desc": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md",
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
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-view-dismiss-itself.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />