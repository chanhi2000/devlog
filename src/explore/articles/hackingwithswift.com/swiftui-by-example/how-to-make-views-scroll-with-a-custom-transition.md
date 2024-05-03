---
lang: ko-KR
title: How to make views scroll with a custom transition
description: Article(s) > How to make views scroll with a custom transition
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
      content: Article(s) > How to make views scroll with a custom transition
    - property: og:description
      content: How to make views scroll with a custom transition
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-views-scroll-with-a-custom-transition.html
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
  "title": "How to make views scroll with a custom transition | SwiftUI by Example",
  "desc": "How to make views scroll with a custom transition",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `ScrollView` places all its children in a smooth-scrolling vertical or horizontal container, but if we attach the `scrollTransition()` modifier to child views then we're able to customize how views are transitioned on to and off from the screen.

This modifier must be passed a closure that takes at least two parameters: some content to control (one child view inside the scrolling area), plus a scroll transition phase. The phase might be one of three values:

- The `.identity` phase, which means the view is visible on the screen.
- The `.topLeading` phase, where the views is about to become visible from either the top or leading edge depending on your scroll view direction.
- The `.bottomTrailing` phase, which is the bottom/trailing counterpart to `.topLeading`.

For example, we could place a series of rounded rectangles in a vertical scroll view, making them fade in and out as they near the edges of the screen:

```swift
ScrollView {
    ForEach(0..<10) { i in
        RoundedRectangle(cornerRadius: 25)
            .fill(.blue)
            .frame(height: 80)
            .scrollTransition { content, phase in
                content
                    .opacity(phase.isIdentity ? 1 : 0)
                    .scaleEffect(phase.isIdentity ? 1 : 0.75)
                    .blur(radius: phase.isIdentity ? 0 : 10)
            }
            .padding(.horizontal)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-views-scroll-with-a-custom-transition-1.zip)

![Scrolling views that fade in and out as they scroll into and off the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition-1~dark@2x.gif)

For additional control, you can specify how much of the view needs to be visible before it's displayed or removed. For example, we could say that we want our scrolling views to be inserted into our view hierarchy only when they are at least 90% visible:

```swift
ScrollView {
    ForEach(0..<10) { i in
        RoundedRectangle(cornerRadius: 25)
            .fill(.blue)
            .frame(height: 80)
            .scrollTransition(.animated.threshold(.visible(0.9))) { content, phase in
                content
                    .opacity(phase.isIdentity ? 1 : 0)
                    .scaleEffect(phase.isIdentity ? 1 : 0.75)
                    .blur(radius: phase.isIdentity ? 0 : 10)
            }
            .padding(.horizontal)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-views-scroll-with-a-custom-transition-2.zip)

![Scrolling views that fade in and out as they scroll into and off the screen.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition-2~dark@2x.gif)

If you need *very* precise control over the effects that are applied, read the `value` of the transition phase. This will be -1 for views in the top leading phase, 1 for views in the bottom trailing phase, and 0 for all other views.

For example, this gently modifies the hue of each scrolling shape by combining `phase.value` with the `hueRotation()` modifier:

```swift
ScrollView {
    ForEach(0..<10) { i in
        RoundedRectangle(cornerRadius: 25)
            .fill(.blue)
            .frame(height: 80)
            .shadow(radius: 3)
            .scrollTransition { content, phase in
                content
                    .hueRotation(.degrees(45 * phase.value))
            }
            .padding(.horizontal)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-make-views-scroll-with-a-custom-transition-3.zip)

![Scrolling views that change color at the screen edge.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition-3~dark@2x.gif)

::: details Similar solutions…

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
  "title": "How to add and remove views with a transition | SwiftUI by Example",
  "desc": "How to add and remove views with a transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-and-remove-views-with-a-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a scroll view move to a location using ScrollViewReader | SwiftUI by Example",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to flash the scroll bar indicators of a ScrollView or List | SwiftUI by Example",
  "desc": "How to flash the scroll bar indicators of a ScrollView or List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />