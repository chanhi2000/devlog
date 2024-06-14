---
lang: ko-KR
title: How to animate changes in binding values
description: Article(s) > How to animate changes in binding values
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
      content: Article(s) > How to animate changes in binding values
    - property: og:description
      content: How to animate changes in binding values
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-animate-changes-in-binding-values.html
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
  "title": "How to animate changes in binding values | SwiftUI by Example",
  "desc": "How to animate changes in binding values",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-animate-changes-in-binding-values",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s two-way bindings let us adjust the state of our program, and we can respond to that by adjusting our view hierarchy. For example, we might make some text appear or disappear, or adjust the opacity of a view.

Rather than having a state change happen immediately, we can *animate* changes caused by a binding being modified by adding `animation()` to our binding. For example, this view has a toggle that shows or hides a text view depending on the stage of the toggle:


```swift
struct ContentView: View {
    @State private var showingWelcome = false

    var body: some View {
        VStack {
            Toggle("Toggle label", isOn: $showingWelcome)

            if showingWelcome {
                Text("Hello World")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-animate-changes-in-binding-values-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-changes-in-binding-values-1~dark.mp4" />

Without animation, the text view will just appear or disappear immediately, which causes a visual jump. If we modify the toggle so it was bound to `$showingWelcome.animation()` then the text view will slide in smoothly:


```swift
struct ContentView: View {
    @State private var showingWelcome = false

    var body: some View {
        VStack {
            Toggle("Toggle label", isOn: $showingWelcome.animation())

            if showingWelcome {
                Text("Hello World")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-animate-changes-in-binding-values-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-changes-in-binding-values-2~dark.mp4" />

If you want more control over the animation, you can pass parameters to `animation()` that affect how the transition happens. For example, this will bring the text in with a simple spring animation: `$showingWelcome.animation(.spring())`.

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-changes-in-binding-values-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a List or a ForEach from a binding | SwiftUI by Example",
  "desc": "How to create a List or a ForEach from a binding",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Binding property wrapper? | SwiftUI by Example",
  "desc": "What is the @Binding property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/what-is-the-binding-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<String>'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate the size of text | SwiftUI by Example",
  "desc": "How to animate the size of text",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-animate-the-size-of-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate SF Symbols | SwiftUI by Example",
  "desc": "How to animate SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-animate-sf-symbols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />