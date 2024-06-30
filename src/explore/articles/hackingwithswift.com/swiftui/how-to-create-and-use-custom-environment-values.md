---
lang: ko-KR
title: How to create and use custom environment values
description: Article(s) > How to create and use custom environment values
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
      content: Article(s) > How to create and use custom environment values
    - property: og:description
      content: How to create and use custom environment values
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-and-use-custom-environment-values.html
next: /explore/articles/hackingwithswift.com/swiftui/working-with-lists.md
date: 2024-06-21
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
  "title": "How to create and use custom environment values | SwiftUI by Example",
  "desc": "How to create and use custom environment values",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-use-custom-environment-values",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI's `@Entry` macro makes it straightforward to create custom values for the environment, although I'd recommend you also add a `View` extension to make your code clearer.

The first step is to make an extension on `EnvironmentValues`, using `@Entry` inside there to create your custom environment key, give it a type, and also give it a default value:

```swift
extension EnvironmentValues {
    @Entry var iconColor: Color = .red
}
```

The `@Entry` macro automatically turns that into a fully fledged environment key and value, meaning that we can now use `environment(\.iconColor, .blue)` to set a value, and `@Environment(\.iconColor)` to read that value back out, like this:

```swift
struct BubblesView: View {
    @Environment(\.iconColor) var iconColor

    var body: some View {
        Image(systemName: "bubbles.and.sparkles.fill")
            .foregroundStyle(iconColor)
            .font(.largeTitle)
    }
}

struct ContentView: View {
    var body: some View {
        HStack {
            BubblesView()
                .environment(\.iconColor, .blue)

            BubblesView()
                .environment(\.iconColor, .red)
        }
    }
}
```

::: details Similar solutions…

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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui/observable-objects-environment-objects-and-published.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Environment property wrapper? | SwiftUI by Example",
  "desc": "What is the @Environment property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-environment-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />