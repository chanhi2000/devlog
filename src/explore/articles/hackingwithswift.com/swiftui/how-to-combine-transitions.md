---
lang: ko-KR
title: How to combine transitions
description: Article(s) > How to combine transitions
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
      content: Article(s) > How to combine transitions
    - property: og:description
      content: How to combine transitions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-combine-transitions.html
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
  "title": "How to combine transitions | SwiftUI by Example",
  "desc": "How to combine transitions",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-combine-transitions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When adding or removing a view, SwiftUI lets you combine transitions to make new animation styles using the `combined(with:)` method.

For example, you can make a view move (one transition) and fade (a second transition) at the same time like this:


```swift
struct ContentView: View {
    @State private var showDetails = false

    var body: some View {
        VStack {
            Button("Press to show details") {
                withAnimation {
                    showDetails.toggle()
                }
            }

            if showDetails {
                Text("Details go here.")
                     .transition(AnyTransition.opacity.combined(with: .slide))
            }
        }

    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-combine-transitions-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-transitions-1~dark.mp4" />

To make combined transitions easier to use and re-use, you can create them as extensions on `AnyTransition`. For example, we could define a custom `moveAndScale` transition and try it out straight away:


```swift
extension AnyTransition {
    static var moveAndScale: AnyTransition {
        AnyTransition.move(edge: .bottom).combined(with: .scale)
    }
}

struct ContentView: View {
    @State private var showDetails = false

    var body: some View {
        VStack {
            Button("Press to show details") {
                withAnimation {
                    showDetails.toggle()
                }
            }

            if showDetails {
                Text("Details go here.")
                    .transition(.moveAndScale)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-combine-transitions-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-combine-transitions-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create asymmetric transitions | SwiftUI by Example",
  "desc": "How to create asymmetric transitions",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-asymmetric-transitions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to combine text views together | SwiftUI by Example",
  "desc": "How to combine text views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-combine-text-views-together.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to combine shapes to create new shapes | SwiftUI by Example",
  "desc": "How to combine shapes to create new shapes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-combine-shapes-to-create-new-shapes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom transition | SwiftUI by Example",
  "desc": "How to create a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-custom-transition.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to become a SwiftUI expert | SwiftUI by Example",
  "desc": "How to become a SwiftUI expert",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-become-a-swiftui-expert.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />