---
lang: ko-KR
title: How to create custom modifiers
description: Article(s) > How to create custom modifiers
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
      content: Article(s) > How to create custom modifiers
    - property: og:description
      content: How to create custom modifiers
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-modifiers.html
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
  "title": "How to create custom modifiers | SwiftUI by Example",
  "desc": "How to create custom modifiers",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-modifiers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you find yourself constantly attaching the same set of modifiers to a view – e.g., giving it a background color, some padding, a specific font, and so on – then you can avoid duplication by creating a custom view modifier that encapsulates all those changes. So, rather than say “make it red, make it use a large font” and so on, you can just say “make it look like a warning,” and apply a pre-made set of modifiers.

If you want to make your own, define a struct that conforms to the `ViewModifier` protocol. This protocol requires that you accept a `body(content:)` method that transforms some sort of content however you want, returning the result.

For example, this creates a new `PrimaryLabel` modifier that adds padding, a red background, white text, and a large font, then uses it in a view:

```swift
struct PrimaryLabel: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(.red)
            .foregroundStyle(.white)
            .font(.largeTitle)
    }
}

struct ContentView: View {
    var body: some View {
        Text("Hello, SwiftUI")
            .modifier(PrimaryLabel())
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-custom-modifiers-1.zip)

![“Hello, SwiftUI” in large white text on a red rectangle.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-custom-modifiers-1~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create modifiers for a UIViewRepresentable struct | SwiftUI by Example",
  "desc": "How to create modifiers for a UIViewRepresentable struct",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to stack modifiers to create more advanced effects | SwiftUI by Example",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-stack-modifiers-to-create-more-advanced-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access | SwiftUI by Example",
  "desc": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom transition | SwiftUI by Example",
  "desc": "How to create a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-custom-transition.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />