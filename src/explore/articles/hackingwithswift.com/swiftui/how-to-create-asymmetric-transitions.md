---
lang: ko-KR
title: How to create asymmetric transitions
description: Article(s) > How to create asymmetric transitions
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
      content: Article(s) > How to create asymmetric transitions
    - property: og:description
      content: How to create asymmetric transitions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-asymmetric-transitions.html
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
  "title": "How to create asymmetric transitions | SwiftUI by Example",
  "desc": "How to create asymmetric transitions",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-asymmetric-transitions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us specify one transition when adding a view and another when removing it, all done using the `asymmetric()` transition type.

For example, we can create a text view that uses asymmetric transitions so that it moves in from the leading edge when added and moves down to the bottom edge when being removed, like this:

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
                    .transition(.asymmetric(insertion: .move(edge: .leading), removal: .move(edge: .bottom)))
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-asymmetric-transitions-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-asymmetric-transitions-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to combine transitions | SwiftUI by Example",
  "desc": "How to combine transitions",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-combine-transitions.md",
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
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create modifiers for a UIViewRepresentable struct | SwiftUI by Example",
  "desc": "How to create modifiers for a UIViewRepresentable struct",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />