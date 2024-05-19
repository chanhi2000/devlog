---
lang: ko-KR
title: How to use a timer with SwiftUI
description: Article(s) > How to use a timer with SwiftUI
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
      content: Article(s) > How to use a timer with SwiftUI
    - property: og:description
      content: How to use a timer with SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-a-timer-with-swiftui.html
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
  "title": "How to use a timer with SwiftUI | SwiftUI by Example",
  "desc": "How to use a timer with SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-a-timer-with-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to run some code regularly, perhaps to make a countdown timer or similar, you should use `Timer` and the `onReceive()` modifier.

For example, this code creates a timer publisher that fires every second, updating a label with the current time:

```swift
struct ContentView: View {
    @State private var currentDate = Date.now
    let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        Text("\(currentDate)")
            .onReceive(timer) { input in
                currentDate = input
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-a-timer-with-swiftui-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-a-timer-with-swiftui-1~dark.mp4" />

It's important to use `.main` for the runloop option, because our timer will update the user interface. As for the `.common` mode, that allows the timer to run alongside other common events – for example, if the text was in a scroll view that was moving.

As you can see, the `onReceive()` closure gets passed in some input containing the current date. In the code above we assign that straight to `currentDate`, but you could use it to calculate how much time has passed since a previous date.

If you specifically wanted to create a countdown timer or stopwatch, you should create some state to track how much time remains, then subtract from that when the timer fires. 

For example, we could create a countdown timer that shows time remaining in a label, like this:

```swift
struct ContentView: View {
    @State var timeRemaining = 10
    let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        Text("\(timeRemaining)")
            .onReceive(timer) { _ in
                if timeRemaining > 0 {
                    timeRemaining -= 1
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-a-timer-with-swiftui-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-a-timer-with-swiftui-2~dark.mp4" />

::: details Similar solutions…

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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to find which data change is causing a SwiftUI view to update | SwiftUI by Example",
  "desc": "How to find which data change is causing a SwiftUI view to update",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.md",
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
  "title": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access | SwiftUI by Example",
  "desc": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />