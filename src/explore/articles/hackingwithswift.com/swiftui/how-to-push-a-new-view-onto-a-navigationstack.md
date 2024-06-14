---
lang: ko-KR
title: How to push a new view onto a NavigationStack
description: Article(s) > How to push a new view onto a NavigationStack
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
      content: Article(s) > How to push a new view onto a NavigationStack
    - property: og:description
      content: How to push a new view onto a NavigationStack
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-onto-a-navigationstack.html
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
  "title": "How to push a new view onto a NavigationStack | SwiftUI by Example",
  "desc": "How to push a new view onto a NavigationStack",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-push-a-new-view-onto-a-navigationstack",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us push any view onto a `NavigationStack` by using `NavigationLink`. In its simplest form you can provide this with a string for its title and a destination view as a trailing closure, and `NavigationStack` will care of pushing the new view on the stack for us along with animation.

For example, this creates a simple `DetailView` struct, then presents it from a `NavigationStack`:

```swift
struct DetailView: View {
    var body: some View {
        Text("This is the detail view")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                NavigationLink("Show Detail View") {
                    DetailView()
                }
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-push-a-new-view-onto-a-navigationstack-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-push-a-new-view-onto-a-navigationview-1~dark.mp4" />

If you need more advanced control over the label, pass it as a secondary trailing closure. For example, this uses a `Label` view rather than a simple string:

```swift
struct DetailView: View {
    var body: some View {
        Text("This is the detail view")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                NavigationLink {
                    DetailView()
                } label: {
                    Label("Show Detail View", systemImage: "globe")
                }
            }
            .navigationTitle("Navigation")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-push-a-new-view-onto-a-navigationstack-2.zip)

SwiftUI will automatically style your links as buttons so users know they are interactive. You can disable this behavior by applying `.buttonStyle(.plain)` to `NavigationLink`.

::: details Similar solutions…

How to push a new view onto a NavigationView <!-- add -->

```component VPCard
{
  "title": "How to push a new view when a list row is tapped | SwiftUI by Example",
  "desc": "How to push a new view when a list row is tapped",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to save and load NavigationStack paths using Codable | SwiftUI by Example",
  "desc": "How to save and load NavigationStack paths using Codable",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-save-and-load-navigationstack-paths-using-codable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />