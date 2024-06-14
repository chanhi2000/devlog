---
lang: ko-KR
title: What is the @SceneStorage property wrapper?
description: Article(s) > What is the @SceneStorage property wrapper?
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
      content: Article(s) > What is the @SceneStorage property wrapper?
    - property: og:description
      content: What is the @SceneStorage property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/what-is-the-scenestorage-property-wrapper.html
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
  "title": "What is the @SceneStorage property wrapper? | SwiftUI by Example",
  "desc": "What is the @SceneStorage property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-scenestorage-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to save unique data for each of your screens, you should use SwiftUI’s `@SceneStorage` property wrapper. This works a bit like `@AppStorage` in that you provide it with a name to save things plus a default value, but rather than working with `UserDefaults` it instead gets used for state restoration – and it even works great with the kinds of complex multi-scene set ups we see so often in iPadOS.

For example, if you have a text editor and want to store what the user was typing, you should use this kind of code:

```swift
struct ContentView: View {
    @SceneStorage("text") var text = ""

    var body: some View {
        NavigationStack {
            TextEditor(text: $text)
        }
    }
}
```

Because that uses `@SceneStorage`, SwiftUI will automatically make sure that each scene instance has its own copy of the text – if you run the app side by side both will save and restore their data correctly.

Now, before you use `@SceneStorage` there are some important warnings from Apple:

- Don’t save lots of data; save just what you need for state restoration.
- Never store sensitive data in scene storage, because it isn’t secure.
- If the user goes to the app switcher and destroys your app, the scene storage is also destroyed.

::: details Similar solutions…

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />