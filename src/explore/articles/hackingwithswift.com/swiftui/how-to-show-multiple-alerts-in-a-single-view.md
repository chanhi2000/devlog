---
lang: ko-KR
title: How to show multiple alerts in a single view
description: Article(s) > How to show multiple alerts in a single view
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
      content: Article(s) > How to show multiple alerts in a single view
    - property: og:description
      content: How to show multiple alerts in a single view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-show-multiple-alerts-in-a-single-view.html
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
  "title": "How to show multiple alerts in a single view | SwiftUI by Example",
  "desc": "How to show multiple alerts in a single view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI makes it relatively easy to show a single alert, but things become trickier if you try to show two or more alerts from a single view – you might find that one alert works and the other doesn’t, for example.

To solve this, you need to make sure you attach no more than one `alert()` modifier to each view. That might sound limiting, but remember: you don’t need to attach the alerts to the *same* view – you can attach them anywhere. In fact, you might find that attaching them directly to the thing that shows them (e.g. a button) works best for you.

As an example, we can write some code to define two `@State` properties that each control an alert being shown. Rather than attaching both `alert()` modifiers to the same `VStack`, this attaches them each to whichever button is responsible for showing that alert:

```swift
struct ContentView: View {
    @State private var showingAlert1 = false
    @State private var showingAlert2 = false

    var body: some View {
        VStack {
            Button("Show 1") {
                showingAlert1 = true
            }
            .alert(isPresented: $showingAlert1) {
                Alert(title: Text("One"), message: nil, dismissButton: .cancel())
            }

            Button("Show 2") {
                showingAlert2 = true
            }
            .alert(isPresented: $showingAlert2) {
                Alert(title: Text("Two"), message: nil, dismissButton: .cancel())
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-show-multiple-alerts-in-a-single-view-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view-1~dark.mp4" />

If you try moving both `alert()` modifiers to the `VStack`, you’ll find that only one works, which is why the above approach is so useful.


::: details Similar solutions…

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
  "title": "How to show an alert | SwiftUI by Example",
  "desc": "How to show an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-an-alert.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to apply multiple animations to a view | SwiftUI by Example",
  "desc": "How to apply multiple animations to a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-apply-multiple-animations-to-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let the user select multiple dates | SwiftUI by Example",
  "desc": "How to let the user select multiple dates",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-the-user-select-multiple-dates.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a popover view | SwiftUI by Example",
  "desc": "How to show a popover view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-popover-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />