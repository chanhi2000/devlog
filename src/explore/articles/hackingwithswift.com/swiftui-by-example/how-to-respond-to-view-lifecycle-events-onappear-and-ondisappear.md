---
lang: ko-KR
title: How to respond to view lifecycle events - onAppear() and onDisappear()
description: Article(s) > How to respond to view lifecycle events - onAppear() and onDisappear()
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
      content: Article(s) > How to respond to view lifecycle events - onAppear() and onDisappear()
    - property: og:description
      content: How to respond to view lifecycle events - onAppear() and onDisappear()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.html
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
  "title": "How to respond to view lifecycle events: onAppear() and onDisappear() | SwiftUI by Example",
  "desc": "How to respond to view lifecycle events: onAppear() and onDisappear()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us equivalents to UIKit's `viewDidAppear()` and `viewDidDisappear()` in the form of `onAppear()` and `onDisappear()`. You can attach any code to these two events that you want, and SwiftUI will execute them when they occur.

As an example, this creates two views that use `onAppear()` and `onDisappear()` to print messages, with a navigation link to move between the two:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                NavigationLink {
                    DetailView()
                } label: {
                    Text("Hello World")
                }
            }
            .onAppear {
                print("ContentView appeared!")
            }
            .onDisappear {
                print("ContentView disappeared!")
            }
        }
    }
}

struct DetailView: View {
    var body: some View {
        VStack {
            Text("Second View")
        }
        .onAppear {
            print("DetailView appeared!")
        }
        .onDisappear {
            print("DetailView disappeared!")
        }
    }
}
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear-1~dark.mp4" />

When that code runs you should be able to move between the two views and see messages printed in your Xcode debug console.

::: details Similar solutions…

```component VPCard
{
  "title": "How to detect and respond to key press events | SwiftUI by Example",
  "desc": "How to detect and respond to key press events",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-and-respond-to-key-press-events.md",
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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />