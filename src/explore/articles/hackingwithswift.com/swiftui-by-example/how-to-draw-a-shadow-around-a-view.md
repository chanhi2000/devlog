---
lang: ko-KR
title: How to draw a shadow around a view
description: Article(s) > How to draw a shadow around a view
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
      content: Article(s) > How to draw a shadow around a view
    - property: og:description
      content: How to draw a shadow around a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-shadow-around-a-view.html
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
  "title": "How to draw a shadow around a view | SwiftUI by Example",
  "desc": "How to draw a shadow around a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-shadow-around-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 16**

SwiftUI gives us two ways of creating shadows: we can attach shadows directly to shape styles, but there’s also a dedicated `shadow()` modifier to draw shadows around views. 

The former option is useful when you’re working with solid shapes, because you can create drop shadows easily:

```swift
Circle()
    .fill(.red.shadow(.drop(color: .black, radius: 10)))
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-1.zip)

And you can create *inner* shadows for those shapes just as easily:

```swift
Circle()
    .fill(.red.shadow(.inner(color: .black, radius: 10)))
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-2.zip)

You can control the color, radius, and position of the shadow, and you can also control which parts of the view get shadowed by adjusting your modifier order.

If you want to attach a shadow to other kinds of views, you should use the `shadow()` modifier instead. In its basic form, you can add a shadow just by specifying the radius of the blur, like this:

```swift
Text("Hacking with Swift")
    .foregroundStyle(.black)
    .padding()
    .shadow(radius: 5)
    .border(.red, width: 4)
    .background(.white)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip)

![The text “Hacking with Swift” in black on a white rectangle with a thick red border. The text has a hazy gray shadow behind it.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-1~dark@2x.png)

That adds a very slight shadow with a 5-point blur centered on the text.

You can also specify which color you want along with the X and Y offset from the original view. For example, this creates a strong red shadow with a 5-point blur, centered on the text:

```swift
Text("Hacking with Swift")
    .padding()
    .shadow(color: .red, radius: 5)
    .border(.red, width: 4)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip)

![The text “Hacking with Swift” with a hazy red shadow behind it.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-2~dark@2x.png)

If you want to specify offsets for the shadow, add `x` and/or `y` parameters to the modifier, like this:

```swift
Text("Hacking with Swift")
    .padding()
    .shadow(color: .red, radius: 5, x: 20, y: 20)
    .border(.red, width: 4)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip)

![The text “Hacking with Swift” centered in a red rectangular outline. Along the rectangle's bottom edge is a hazy red cloud.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-3~dark@2x.png)

Remember, SwiftUI applies modifiers in the order you list them, so if you want you can have your shadow apply to the border as well just by putting the border modifier before the shadow modifier:

```swift
Text("Hacking with Swift")
    .padding()
    .border(.red, width: 4)
    .shadow(color: .red, radius: 5, x: 20, y: 20)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip)

![The text “Hacking with Swift” centered in a red rectangular outline. Behind and to the bottom right is a blurry shadow of the text and outline.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-4~dark@2x.png)

::: tip

If you find your shadow effect isn’t strong enough, add another `shadow()` modifier – you can stack them up to create more complex shadow effects.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to color the padding around a view | SwiftUI by Example",
  "desc": "How to color the padding around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-color-the-padding-around-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-spacing-around-individual-views-using-padding.md",
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
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />