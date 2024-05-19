---
lang: ko-KR
title: How to create custom bindings
description: Article(s) > How to create custom bindings
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
      content: Article(s) > How to create custom bindings
    - property: og:description
      content: How to create custom bindings
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-bindings.html
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
  "title": "How to create custom bindings | SwiftUI by Example",
  "desc": "How to create custom bindings",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-bindings",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When we use SwiftUI's `@State` property wrapper it does a huge amount of work on our behalf to allow two-way bindings for user interface controls. However, we can also create bindings by hand using the `Binding` type, which can be provided with custom `get` and `set` closures to run when the value is read or written.

For example, this creates a trivial binding that just acts as a passthrough for another property:

```swift
struct ContentView: View {
    @State private var username = ""

    var body: some View {
        let binding = Binding(
            get: { self.username },
            set: { self.username = $0 }
        )

        return VStack {
            TextField("Enter your name", text: binding)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-custom-bindings-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-custom-bindings-1~dark.mp4" />

::: tip

When binding to a custom `Binding` instance, you don't need to use the dollar sign before the binding name – you're already reading the two-way binding.

:::

Custom bindings are useful when you want to add extra logic to a binding being read or written – you might want to perform some calculations before sending a value back, or you might want to take some extra actions when the value is changed.

For example, we could create a stack of two toggle switches where both can be off and either one can be on, but both can't be on at the same time – enabling one will always disable the other. Here's how that looks in code:

```swift
struct ContentView: View {
    @State private var firstToggle = false
    @State private var secondToggle = false

    var body: some View {
        let firstBinding = Binding(
            get: { self.firstToggle },
            set: {
                self.firstToggle = $0

                if $0 == true {
                    self.secondToggle = false
                }
            }
        )

        let secondBinding = Binding(
            get: { self.secondToggle },
            set: {
                self.secondToggle = $0

                if $0 == true {
                    self.firstToggle = false
                }
            }
        )

        return VStack {
            Toggle(isOn: firstBinding) {
                Text("First toggle")
            }

            Toggle(isOn: secondBinding) {
                Text("Second toggle")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-custom-bindings-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-custom-bindings-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create constant bindings | SwiftUI by Example",
  "desc": "How to create constant bindings",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-constant-bindings.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Bindings and forms | SwiftUI by Example",
  "desc": "Bindings and forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/bindings-and-forms.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom transition | SwiftUI by Example",
  "desc": "How to create a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />