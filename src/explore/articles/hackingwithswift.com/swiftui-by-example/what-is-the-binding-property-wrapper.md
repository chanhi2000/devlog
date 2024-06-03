---
lang: ko-KR
title: What is the @Binding property wrapper?
description: Article(s) > What is the @Binding property wrapper?
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
      content: Article(s) > What is the @Binding property wrapper?
    - property: og:description
      content: What is the @Binding property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-binding-property-wrapper.html
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
  "title": "What is the @Binding property wrapper? | SwiftUI by Example",
  "desc": "What is the @Binding property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-binding-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

`@Binding` lets us declare that one value actually comes from elsewhere, and should be shared in both places. This is *not* the same as `@ObservedObject` or `@EnvironmentObject`, both of which are designed for reference types to be shared across potentially many views.

For example, we might have a `ContentView` with an `@State` property storing whether a child view is being presented or not, like this:

```swift
struct ContentView: View {
    @State private var showingAddUser = false

    var body: some View {
        VStack {
            // your code here
        }
        .sheet(isPresented: $showingAddUser) {
            // show the add user view
        }
    }
}
```

That uses `showingAddUser` for the `isPresented` parameter of our sheet, which means when that Boolean becomes true the add user view will be shown. However, how can we allow the add user view to dismiss itself if it needs to – if the user taps a Done button, for example?

What we *want* to happen is for the add user view to set `showingAddUser` back to false, which will cause `ContentView` to hide it. This is exactly what `@Binding` is for: it lets us create a property in the add user view that says “this value will be provided from elsewhere, and will be shared between us and that other place.”

So, we might create an add user view like this:

```swift
struct AddView: View {
    @Binding var isPresented: Bool

    var body: some View {
        Button("Dismiss") {
            isPresented = false
        }
    }
}
```

That property literally means “I have a Boolean value called `isPresented`, but it’s being stored elsewhere.” So, when we create that `AddView` to replace the `// show the add user view` comment from earlier, we’d need to provide the value so it can be manipulated:

```swift
.sheet(isPresented: $showingAddUser) {
    AddView(isPresented: $showingAddUser)
}
```

This allows both `ContentView` and `AddView` to share the same Boolean value – when it changes in one place it also changes in the other.

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