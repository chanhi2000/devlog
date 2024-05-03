---
lang: ko-KR
title: How to show progress on a task using ProgressView
description: Article(s) > How to show progress on a task using ProgressView
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
      content: Article(s) > How to show progress on a task using ProgressView
    - property: og:description
      content: How to show progress on a task using ProgressView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-progress-on-a-task-using-progressview.html
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
  "title": "How to show progress on a task using ProgressView | SwiftUI by Example",
  "desc": "How to show progress on a task using ProgressView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `ProgressView` can be bound to a `Double` to show a horizontal progress bar. For example, this creates a progress bar with the title “Downloading”, that will read `downloadAmount` to determine how full the progress bar should be:

```swift
struct ContentView: View {
    @State private var downloadAmount = 0.0

    var body: some View {
        VStack {
            ProgressView("Downloading…", value: downloadAmount, total: 100)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-progress-on-a-task-using-progressview-1.zip)

![The text “Downloading” over an almost empty progress bar.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview-1~dark.png)

In practice, you'll need some way to actually *change* that value, such as a timer, a network request, or other user interface. For example, this will fill the progress bar up over a few seconds:

```swift
struct ContentView: View {
    @State private var downloadAmount = 0.0
    let timer = Timer.publish(every: 0.1, on: .main, in: .common).autoconnect()

    var body: some View {
        ProgressView("Downloading…", value: downloadAmount, total: 100)
            .onReceive(timer) { _ in
                if downloadAmount < 100 {
                    downloadAmount += 2
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-show-progress-on-a-task-using-progressview-2.zip)

::: note

Xcode will get angry if you set your progress value higher than the progress total – make sure you cap it as you can see above.

:::

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-show-progress-on-a-task-using-progressview-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to show indeterminate progress using ProgressView | SwiftUI by Example",
  "desc": "How to show indeterminate progress using ProgressView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-indeterminate-progress-using-progressview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing ProgressView with ProgressViewStyle | SwiftUI by Example",
  "desc": "Customizing ProgressView with ProgressViewStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-progressview-with-progressviewstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run an asynchronous task when a view is shown | SwiftUI by Example",
  "desc": "How to run an asynchronous task when a view is shown",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-an-asynchronous-task-when-a-view-is-shown.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show an action sheet | SwiftUI by Example",
  "desc": "How to show an action sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide and show the sidebar programmatically | SwiftUI by Example",
  "desc": "How to hide and show the sidebar programmatically",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-sidebar-programmatically.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />