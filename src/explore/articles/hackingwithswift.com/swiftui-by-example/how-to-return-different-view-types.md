---
lang: ko-KR
title: How to return different view types
description: Article(s) > How to return different view types
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
      content: Article(s) > How to return different view types
    - property: og:description
      content: How to return different view types
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-return-different-view-types.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to return different view types | SwiftUI by Example",
  "desc": "How to return different view types",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-return-different-view-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

The `body` property of any SwiftUI automatically gets the ability to return different views thanks to a special attributed called `@ViewBuilder`. This is implemented using Swift's result builder system, and it understands how to present two different views depending on our app's state.

However, this same functionality isn't automatically everywhere, which means any custom properties you make must return the same view type.

There are four ways you can fix this. The first option is to wrap your output in a group, so that no matter whether you send back an image or a text view they both go back in a group:

```swift
struct ContentView: View {
    var tossResult: some View {
        Group {
            if Bool.random() {
                Image("laser-show")
                    .resizable()
                    .scaledToFit()
            } else {
                Text("Better luck next time")
                    .font(.title)
            }
        }
        .frame(width: 400, height: 300)
    }

    var body: some View {
        VStack {
            Text("Coin Flip")
                .font(.largeTitle)

            tossResult
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-return-different-view-types-1.zip)


The second is to use a type-erased wrapper called `AnyView` that we can return:

```swift
struct ContentView: View {
    var tossResult: some View {
        if Bool.random() {
            return AnyView(Image("laser-show").resizable().scaledToFit())
        } else {
            return AnyView(Text("Better luck next time").font(.title))
        }
    }

    var body: some View {
        VStack {
            Text("Coin Flip")
                .font(.largeTitle)

            tossResult
                .frame(width: 400, height: 300)                
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-return-different-view-types-2.zip)

If you haven't heard of this concept, it effectively forces Swift to forget about what specific type is inside the `AnyView`, allowing them to look like they are the same thing. This has a performance cost, though, so don't use it often.

Although both `Group` and `AnyView` achieve the same result for our layout, between the two it's generally preferable to use `Group` because it's more efficient for SwiftUI.

A third option is to apply the `@ViewBuilder` attribute yourself to any properties that need it, like this:

```swift
struct ContentView: View {
    @ViewBuilder var tossResult: some View {
        if Bool.random() {
            Image("laser-show")
                .resizable()
                .scaledToFit()
        } else {
            Text("Better luck next time")
                .font(.title)
        }
    }

    var body: some View {
        VStack {
            Text("Coin Flip")
                .font(.largeTitle)

            tossResult
                .frame(width: 400, height: 300)                
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-return-different-view-types-3.zip)

That works, but honestly if you find yourself reaching for `@ViewBuilder` you should question whether you're trying to put too much into one view.

The fourth solution, and the one that works best the majority of the time, is to break up your views into smaller views, then combine them together as needed:

```swift
struct TossResult: View {
    var body: some View {
        if Bool.random() {
            Image("laser-show")
                .resizable()
                .scaledToFit()
        } else {
            Text("Better luck next time")
                .font(.title)
        }
    }
}

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Coin Flip")
                .font(.largeTitle)

            TossResult()
                .frame(width: 400, height: 300)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-return-different-view-types-4.zip)

This works particularly well to help break apart logic and layout, and also has the benefit of making your views more reusable elsewhere in your app. SwiftUI will automatically collapse your view hierarchy, so there is no meaningful performance difference when you break up a view.

![The text “Coin flip” over a successful outcome with lots of lasers, as well as an unsuccessful outcome with the words “Better luck next time”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-return-different-view-types-1~dark.png)

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type” | SwiftUI by Example",
  "desc": "How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create different layouts using size classes | SwiftUI by Example",
  "desc": "How to create different layouts using size classes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-different-layouts-using-size-classes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in different devices | SwiftUI by Example",
  "desc": "How to preview your layout in different devices",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-different-devices.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />