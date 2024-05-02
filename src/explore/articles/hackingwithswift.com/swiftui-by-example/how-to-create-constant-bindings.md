---
lang: ko-KR
title: How to create constant bindings
description: Article(s) > How to create constant bindings
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to create constant bindings
    - property: og:description
      content: How to create constant bindings
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-constant-bindings.html
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
  "title": "How to create constant bindings | SwiftUI by Example",
  "desc": "How to create constant bindings",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-constant-bindings",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you're prototyping some UI, or when you just need to pass in a value to give your SwiftUI preview something meaningful to show, you will find it helpful to use constant bindings: hard-coded values that don't change, but can still be used like regular bindings so your code works.

For example, if you want to create a toggle switch you would normally have to create an `@State` property to store the Boolean, then send that into the toggle switch when you create it. However, if you're just prototyping your user interface you can use a constant binding instead, like this:

```swift
Toggle(isOn: .constant(true)) {
    Text("Show advanced options")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-constant-bindings-1.zip)

![The text “Show advanced options” beside a green toggle which is turned on.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-constant-bindings-1~dark.png)

That switch is read-only and always on because that's what our constant binding says, but it's enough to get you moving for now – you can come back and replace it with a full `@State` property later.

These constant bindings come in all sorts of types: Booleans, strings, integers, and more are all available, and Swift will make sure you use the right one for each view type.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create custom bindings | SwiftUI by Example",
  "desc": "How to create custom bindings",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-bindings.md",
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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a List or a ForEach from a binding | SwiftUI by Example",
  "desc": "How to create a List or a ForEach from a binding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-list-or-a-foreach-from-a-binding.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />