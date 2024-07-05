---
lang: ko-KR
title: New and improved diagnostics
description: Article(s) > New and improved diagnostics
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > New and improved diagnostics
    - property: og:description
      content: New and improved diagnostics
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.html
next: /explore/articles/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "New and improved diagnostics | Changes in Swift 5.2",
  "desc": "New and improved diagnostics",
  "link": "https://hackingwithswift.com/swift/5.2/new-diagnostics", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.2

Swift 5.2 introduced a new diagnostic architecture that aims to improves the quality and precision of error messages issued by Xcode when you make a coding error. This is particularly apparent when working with SwiftUI code, where Swift would often produce false positive error messages.

For an example, consider code like this:

```swift
struct ContentView: View {
    @State private var name = 0

    var body: some View {
        VStack {
            Text("What is your name?")
            TextField("Name", text: $name)
                .frame(maxWidth: 300)
        }
    }
}
```

That attempts to bind a `TextField` view to an integer `@State` property, which is invalid. In Swift 5.1 this caused an error for the `frame()` modifier saying **'Int' is not convertible to 'CGFloat?’**, but in Swift 5.2 and later this correctly identifies the error is the `$name` binding: **Cannot convert value of type `Binding<Int>` to expected argument type `Binding<String>`**.

You can find out more about the new diagnostic architecture on the [<FontIcon icon="fa-brands fa-swift"/>Swift.org blog](https://swift.org/blog/new-diagnostic-arch-overview/). 

::: details Other Changes in Swift 5.2

```component VPCard
{
  "title": "Key path expressions as functions | Changes in Swift 5.2",
  "desc": "Key path expressions as functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Callable values of user-defined nominal types | Changes in Swift 5.2",
  "desc": "Callable values of user-defined nominal types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Subscripts can now declare default arguments | Changes in Swift 5.2",
  "desc": "Subscripts can now declare default arguments",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Lazy filtering order is now reversed | Changes in Swift 5.2",
  "desc": "Lazy filtering order is now reversed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "New and improved diagnostics | Changes in Swift 5.2",
  "desc": "New and improved diagnostics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-1-to-5-2.playground.zip)

:::

---

<TagLinks />