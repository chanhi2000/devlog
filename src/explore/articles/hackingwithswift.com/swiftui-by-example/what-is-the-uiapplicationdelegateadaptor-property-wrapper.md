---
lang: ko-KR
title: What is the @UIApplicationDelegateAdaptor property wrapper?
description: Article(s) > What is the @UIApplicationDelegateAdaptor property wrapper?
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
      content: Article(s) > What is the @UIApplicationDelegateAdaptor property wrapper?
    - property: og:description
      content: What is the @UIApplicationDelegateAdaptor property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-uiapplicationdelegateadaptor-property-wrapper.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/common-swiftui-errors-and-how-to-fix-them.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is the @UIApplicationDelegateAdaptor property wrapper? | SwiftUI by Example",
  "desc": "What is the @UIApplicationDelegateAdaptor property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-uiapplicationdelegateadaptor-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you need to get access to `AppDelegate` functionality in SwiftUI, you should create a class that inherits from `NSObject` and `UIApplicationDelegate`, and give it any functionality you want, such as this:

```swift
class AppDelegate: NSObject, UIApplicationDelegate {
    // add app delegate methods here
}
```

For example, if you wanted to implement the old `didFinishLaunchingWithOptions` method, you might use this:

```swift
class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        print("Your code here")
        return true
    }
}
```

Once you have that, use the `UIApplicationDelegateAdaptor` property wrapper in your main `App` so that SwiftUI knows to create and manage your app delegate class:

```swift
struct NewIn14App: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-gesturestate-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-published-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-scaledmetric-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @AppStorage property wrapper? | SwiftUI by Example",
  "desc": "What is the @AppStorage property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-appstorage-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />