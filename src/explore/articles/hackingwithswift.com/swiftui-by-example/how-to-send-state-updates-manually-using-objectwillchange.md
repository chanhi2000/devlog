---
lang: ko-KR
title: How to send state updates manually using objectWillChange
description: Article(s) > How to send state updates manually using objectWillChange
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
      content: Article(s) > How to send state updates manually using objectWillChange
    - property: og:description
      content: How to send state updates manually using objectWillChange
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-send-state-updates-manually-using-objectwillchange.html
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
  "title": "How to send state updates manually using objectWillChange | SwiftUI by Example",
  "desc": "How to send state updates manually using objectWillChange",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although using `@Published` is the easiest way to control state updates, you can also do it by hand if you need something specific. For example, you might want the view to refresh only if you're happy with the values you've been given.

All observable objects automatically get access to an `objectWillChange` property, which itself has a `send()` method we can call whenever we want observing views to refresh.

For example:

```swift
// Create an observable object class that announces 
// changes to its only property
class UserAuthentication: ObservableObject {
    var username = "Taylor" {
        willSet {
            objectWillChange.send()
        }
    }
}

struct ContentView: View {
    // Create an instance of our object
    @StateObject var user = UserAuthentication()

    var body: some View {
        VStack(alignment: .leading) {
            TextField("Enter your name", text: $user.username)
            Text("Your username is: \(user.username)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-send-state-updates-manually-using-objectwillchange-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange-1~dark.mp4" />

Notice how we have a `willSet` property observer attached to the `username` property of `UserAuthentication`, allowing us to run code whenever that value changes. In our example code, we call `objectWillChange.send()` whenever `username` changes, which is what tells the `objectWillChange` publisher to put out the news that our data has changed so that any subscribed views can refresh.

::: tip

This example is no different from using `@Published` on the property, but now that we have a custom call to `objectWillChange.send()` we can add extra functionality – we could save the value to disk, for example.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run some code when state changes using onChange() | SwiftUI by Example",
  "desc": "How to run some code when state changes using onChange()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-some-code-when-state-changes-using-onchange.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Modifying state during view update, this will cause undefined behavior” | SwiftUI by Example",
  "desc": "How to fix “Modifying state during view update, this will cause undefined behavior”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with state | SwiftUI by Example",
  "desc": "Working with state",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-state.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />