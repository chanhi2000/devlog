---
lang: ko-KR
title: How to run code when your app launches
description: Article(s) > How to run code when your app launches
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
      content: Article(s) > How to run code when your app launches
    - property: og:description
      content: How to run code when your app launches
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-code-when-your-app-launches.html
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
  "title": "How to run code when your app launches | SwiftUI by Example",
  "desc": "How to run code when your app launches",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-run-code-when-your-app-launches",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you're using the SwiftUI App life cycle, your app launches through one struct that conforms to the `App` protocol. Its job is to create your initial view using either `WindowGroup`, `DocumentGroup`, or similar, but because its created before any of your actual views this is the perfect place for running code when your app launches.

For example, if you wanted to set up some initial `UserDefaults` values, your app's initializer is a great place to call `register(defaults:)`. This method sets up *default defaults*, by which I mean initial values for `UserDefaults` values that exist only until you set them – as soon as you provide a value of your own, these aren't used any more, and these initial values also disappear when your app is terminated so you should call it every launch just to make sure.

So, we might write something like this:

```swift
@main
struct ExampleApp: App {
    // register initial UserDefaults values every launch
    init() {
        UserDefaults.standard.register(defaults: [
            "name": "Taylor Swift",
            "highScore": 10
        ])
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

That `initializer()` is run *before* the `body` property is called, so it's also before `ContentView` is called. As a result, any places where you read `UserDefaults` in `ContentView` will already have your defaults in place.

To demonstrate this, here's an example `ContentView` struct that uses `@AppStorage` to read the “name” key:

```swift
struct ContentView: View {
    @AppStorage("name") var name = "Anonymous"

    var body: some View {
        Text("Your name is \(name).")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-run-code-when-your-app-launches-1.zip)

![The text “Your name is Taylor Swift.”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-run-code-when-your-app-launches-1~dark.png)

Using `@AppStorage` requires that we give our property an initial value, which is cumbersome because we need to ensure we have the same initial value everywhere the property is used.

However, here it doesn't matter: “Anonymous” will only be used for times when no value exists, and no initial defaults have been registered. We already called `register(defaults:)` in our app's initializer, so this view will show “Your name is Taylor Swift.”

::: details Similar solutions…

```component VPCard
{
  "title": "How to control which view is shown when your app launches | SwiftUI by Example",
  "desc": "How to control which view is shown when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-which-view-is-shown-when-your-app-launches.md",
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
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
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
  "title": "How to run a completion callback when an animation finishes | SwiftUI by Example",
  "desc": "How to run a completion callback when an animation finishes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-a-completion-callback-when-an-animation-finishes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />