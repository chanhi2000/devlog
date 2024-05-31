---
lang: ko-KR
title: How to make SwiftUI modifiers safer to use with @warn_unqualified_access
description: Article(s) > How to make SwiftUI modifiers safer to use with @warn_unqualified_access
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
      content: Article(s) > How to make SwiftUI modifiers safer to use with @warn_unqualified_access
    - property: og:description
      content: How to make SwiftUI modifiers safer to use with @warn_unqualified_access
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.html
prev: how-to-add-custom-activation-commands-for-voice-control.md
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
  "title": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access | SwiftUI by Example",
  "desc": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Every SwiftUI makes the same mistake at some point, and sadly it’s something you’ll do more than once: rather than writing `.someModifier()` you write `someModifier()`, and it causes your app to completely freeze or crash with `EXC_BAD_ACCESS`.

First I’ll show you the how to solve the problem, then I’ll explain what the underlying problem is. The solution is to use Swift’s `@warn_unqualified_access` attribute, which means you can’t access properties or methods without using a variable name or similar.

For example, if we had a `titleStyle()` method that added a bunch of modifiers to a view to make it matching a custom theme, we’d use `@warn_unqualified_access` before the method signature, like this:

```swift
extension View {
    @warn_unqualified_access
    func titleStyle() -> some View {
        self
            .font(.largeTitle)
            .fontWeight(.black)
            .padding()
            .background(.blue)
            .foregroundStyle(.white)
            .cornerRadius(10)
    }
}
```

When we use that, we’d write the same SwiftUI code we always did:

```swift
struct ContentView: View {
    var body: some View {
        Text("Welcome")
            .titleStyle()
    }
}
```

That works exactly as expected – the extra attribute hasn’t made the method behave differently at all in normal circumstances.

However, take a look at *this* code:

```swift
struct ContentView: View {
    var body: some View {
        Text("Welcome")
            titleStyle()
    }
}
```

That’s subtly different: I removed the dot before `titleStyle()`, which is an *unqualified access* – I haven’t said where I’m calling `titleStyle()`, so SwiftUI assumes I’m actually calling it on `ContentView`. This means it’s actually calling `self.padding()`, so we have an infinitely recursive view and ultimately a crash.

Sadly, SwiftUI doesn’t use `@warn_unqualified_access` with its own modifiers, but you can at least add it for the custom ones you build.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create custom modifiers | SwiftUI by Example",
  "desc": "How to create custom modifiers",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-modifiers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create modifiers for a UIViewRepresentable struct | SwiftUI by Example",
  "desc": "How to create modifiers for a UIViewRepresentable struct",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to stack modifiers to create more advanced effects | SwiftUI by Example",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stack-modifiers-to-create-more-advanced-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />