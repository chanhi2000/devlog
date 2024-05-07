---
lang: ko-KR
title: How to present multiple sheets
description: Article(s) > How to present multiple sheets
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
      content: Article(s) > How to present multiple sheets
    - property: og:description
      content: How to present multiple sheets
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-multiple-sheets.html
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
  "title": "How to present multiple sheets | SwiftUI by Example",
  "desc": "How to present multiple sheets",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-present-multiple-sheets",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to show multiple sheets in SwiftUI, it’s only possible by triggering the second sheet from inside the first – you shouldn’t attach both `sheet()` modifiers to the same parent view.

Instead, place one `sheet()` modifier inside the view being used as your first sheet, like this:

```swift
struct ContentView: View {
    @State private var showingFirst = false
    @State private var showingSecond = false

    var body: some View {
        VStack {
            Button("Show First Sheet") {
                showingFirst = true
            }
        }
        .sheet(isPresented: $showingFirst) {
            Button("Show Second Sheet") {
                showingSecond = true
            }
            .sheet(isPresented: $showingSecond) {
                Text("Second Sheet")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-present-multiple-sheets-1.zip)

Using this approach, both sheets will be displayed correctly.

If you *do* place both `sheet()` modifiers in the same parent, SwiftUI will display a warning: “Currently, only presenting a single sheet is supported. The next sheet will be presented when the currently presented sheet gets dismissed.” That *might* be exactly what you want, but the warning suggests that this behavior might change in the future.

::: details Similar solutions…

```component VPCard
{
  "title": "How to present a new view using sheets | SwiftUI by Example",
  "desc": "How to present a new view using sheets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-new-view-using-sheets.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to present a full screen modal view using fullScreenCover() | SwiftUI by Example",
  "desc": "How to present a full screen modal view using fullScreenCover()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-full-screen-modal-view-using-fullscreencover.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to apply multiple animations to a view | SwiftUI by Example",
  "desc": "How to apply multiple animations to a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-apply-multiple-animations-to-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show multiple alerts in a single view | SwiftUI by Example",
  "desc": "How to show multiple alerts in a single view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-multiple-alerts-in-a-single-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let the user select multiple dates | SwiftUI by Example",
  "desc": "How to let the user select multiple dates",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-select-multiple-dates.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />