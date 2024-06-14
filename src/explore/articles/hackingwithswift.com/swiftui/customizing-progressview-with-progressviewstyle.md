---
lang: ko-KR
title: Customizing ProgressView with ProgressViewStyle
description: Article(s) > Customizing ProgressView with ProgressViewStyle
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
      content: Article(s) > Customizing ProgressView with ProgressViewStyle
    - property: og:description
      content: Customizing ProgressView with ProgressViewStyle
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/customizing-progressview-with-progressviewstyle.html
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
  "title": "Customizing ProgressView with ProgressViewStyle | SwiftUI by Example",
  "desc": "Customizing ProgressView with ProgressViewStyle",
  "link": "https://hackingwithswift.com/quick-start/swiftui/customizing-progressview-with-progressviewstyle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us the `ProgressViewStyle` protocol to create custom designs for `ProgressView`, allowing us to read how complete the progress view and take that into account in our design.

To make a custom `ProgressView` style, you need to create a struct that has a `makeBody()` method accepting the current configuration of the view. You can then go ahead and render the progress however you want – perhaps a text percentage, perhaps a growing circle, and so on – then return your finished layout to be rendered.

To demonstrate this, here’s a custom style that creates a gauge, showing progress as a stroked circle that completes as progress ramps up:

```swift
struct GaugeProgressStyle: ProgressViewStyle {
    var strokeColor = Color.blue
    var strokeWidth = 25.0

    func makeBody(configuration: Configuration) -> some View {
        let fractionCompleted = configuration.fractionCompleted ?? 0

        return ZStack {
            Circle()
                .trim(from: 0, to: fractionCompleted)
                .stroke(strokeColor, style: StrokeStyle(lineWidth: strokeWidth, lineCap: .round))
                .rotationEffect(.degrees(-90))
        }
    }
}

// A view letting you adjust the progress with tap gestures
struct ContentView: View {
    @State private var progress = 0.2

    var body: some View {
        ProgressView(value: progress, total: 1.0)
            .progressViewStyle(GaugeProgressStyle())
            .frame(width: 200, height: 200)
            .contentShape(Rectangle())
            .onTapGesture {
                if progress < 1.0 {
                    withAnimation {
                        progress += 0.2
                    }
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/customizing-progressview-with-progressviewstyle-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/customizing-progressview-with-progressviewstyle-1~dark.mp4" />

Notice how my custom style rotates the circle anti-clockwise by 90 degrees, so the circle draws it progress from the top.

::: details Similar solutions…

```component VPCard
{
  "title": "How to show progress on a task using ProgressView | SwiftUI by Example",
  "desc": "How to show progress on a task using ProgressView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-progress-on-a-task-using-progressview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show indeterminate progress using ProgressView | SwiftUI by Example",
  "desc": "How to show indeterminate progress using ProgressView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-indeterminate-progress-using-progressview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing Button with ButtonStyle | SwiftUI by Example",
  "desc": "Customizing Button with ButtonStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui/customizing-button-with-buttonstyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing Toggle with ToggleStyle | SwiftUI by Example",
  "desc": "Customizing Toggle with ToggleStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui/customizing-toggle-with-togglestyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Migrating from UIKit to SwiftUI | SwiftUI by Example",
  "desc": "Migrating from UIKit to SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/migrating-from-uikit-to-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />