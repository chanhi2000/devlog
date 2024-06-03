---
lang: ko-KR
title: What is the @AppStorage property wrapper?
description: Article(s) > What is the @AppStorage property wrapper?
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
      content: Article(s) > What is the @AppStorage property wrapper?
    - property: og:description
      content: What is the @AppStorage property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-appstorage-property-wrapper.html
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
  "title": "What is the @AppStorage property wrapper? | SwiftUI by Example",
  "desc": "What is the @AppStorage property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-appstorage-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a dedicated property wrapper for reading values from `UserDefaults`, which will automatically reinvoke your view’s body property when the value changes. That is, this wrapper effectively watches a key in `UserDefaults`, and will refresh your UI if that key changes.

For example, this will watch `UserDefaults` for a “username” key, which will be set when the button is pressed:

```swift
struct ContentView: View {
    @AppStorage("username") var username: String = "Anonymous"

    var body: some View {
        VStack {
            Text("Welcome, \(username)!")

            Button("Log in") {
                username = "@twostraws"
            }
        }
    }
}
```

Changing `username` above will cause the new string to be written to `UserDefaults` immediately, while also updating the view. The same would be true if we had used the older method:

```swift
UserDefaults.standard.set("@twostraws", forKey: "username")
```

`@AppStorage` will watch `UserDefaults.standard` by default, but you can also make it watch a particular app group if you prefer, like this:

```swift
@AppStorage("username", store: UserDefaults(suiteName: "group.com.hackingwithswift.unwrap")) var username: String = "Anonymous"
```

::: important

`@AppStorage` writes your data to `UserDefaults`, which is *not* secure storage. As a result, you should not save any personal data using `@AppStorage`, because it’s relatively easy to extract.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @SceneStorage property wrapper? | SwiftUI by Example",
  "desc": "What is the @SceneStorage property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-scenestorage-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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

:::

---

<TagLinks />