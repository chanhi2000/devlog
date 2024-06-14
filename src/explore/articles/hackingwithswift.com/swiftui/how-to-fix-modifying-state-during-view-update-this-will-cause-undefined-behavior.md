---
lang: ko-KR
title: How to fix “Modifying state during view update, this will cause undefined behavior”
description: Article(s) > How to fix “Modifying state during view update, this will cause undefined behavior”
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
      content: Article(s) > How to fix “Modifying state during view update, this will cause undefined behavior”
    - property: og:description
      content: How to fix “Modifying state during view update, this will cause undefined behavior”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.html
date: 2022-12-01
isOriginal: false
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
  "title": "How to fix “Modifying state during view update, this will cause undefined behavior” | SwiftUI by Example",
  "desc": "How to fix “Modifying state during view update, this will cause undefined behavior”",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This error occurs because you’re modifying the state of a SwiftUI view while the view is actually being rendered. Modifying the state of a view causes the view to be re-rendered, so SwiftUI gets confused – “undefined behavior” is Apple’s way of saying that whatever you see right now might change in the future because it’s not how SwiftUI should be used.

Here’s an example of the problem in action:

```swift
struct ContentView: View {
    @State private var name = ""

    var body: some View {
        if name.isEmpty {
            name = "Anonymous"
        }

        return Text("Hello, \(name)!")
    }
}
```

That creates a state property called `name`, and has a text view that shows it. However, inside `body` is some logic that attempts to modify `name` while the view is being rendered – SwiftUI is trying to figure out what’s in the view, and you’re changing it while that process is happening.

To fix the problem, move the code that changes your view’s state – in this case the `name = "Anonymous"` – to something that occurs outside of the view updates. For example, this sets the value when the text view first appears:

```swift
struct ContentView: View {
    @State var name = ""

    var body: some View {
        Text("Hello, \(name)!")
            .onAppear {
                if name.isEmpty {
                    name = "Anonymous"
                }
            }
    }
}
```

You could also move the logic into an `onTapGesture()` or similar – anywhere that isn’t directly inside the body of a view.

::: details Similar solutions…

```component VPCard
{
  "title": "How to find which data change is causing a SwiftUI view to update | SwiftUI by Example",
  "desc": "How to find which data change is causing a SwiftUI view to update",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.md",
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
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run some code when state changes using onChange() | SwiftUI by Example",
  "desc": "How to run some code when state changes using onChange()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-run-some-code-when-state-changes-using-onchange.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />