---
lang: ko-KR
title: Improved implicit member syntax
description: Article(s) > Improved implicit member syntax
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.4
head:
  - - meta:
    - property: og:title
      content: Article(s) > Improved implicit member syntax
    - property: og:description
      content: Improved implicit member syntax
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.html
prev: /explore/articles/hackingwithswift.com/swift/5.5/static-member-generic.md
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
  "title": "Improved implicit member syntax | Changes in Swift 5.4",
  "desc": "Improved implicit member syntax",
  "link": "https://hackingwithswift.com/swift/5.4/improved-implicit-member-syntax", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.4

[SE-0287 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0287-implicit-member-chains.md) improves Swift’s ability to use implicit member expressions, so rather than just having support for exactly one single static member you can make chains of them.

Swift has always had the ability to use implicit member syntax for simple expressions, for example if you wanted to color some text in SwiftUI you could use `.red` rather than `Color.red`:

```swift
import SwiftUI

struct ContentView1: View {
    var body: some View {
        Text("You're not my supervisor!")
            .foregroundColor(.red)
    }
}
```

Prior to Swift 5.4 this did not work with more complex expressions. For example, if you wanted your red color to be slightly transparent you would need to write this:

```swift
struct ContentView2: View {
    var body: some View {
        Text("You're not my supervisor!")
            .foregroundColor(Color.red.opacity(0.5))
    }
}
```

From Swift 5.4 onwards the compiler is able to understand multiple chained members, meaning that the `Color` type can be inferred:

```swift
struct ContentView3: View {
    var body: some View {
        Text("You're not my supervisor!")
            .foregroundColor(.red.opacity(0.5))
    }
}
```

::: details Other Changes in Swift 5.4
<!-- 
```component VPCard
{
  "title": "Improved implicit member syntax | Changes in Swift 5.4",
  "desc": "Improved implicit member syntax",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Multiple variadic parameters in functions | Changes in Swift 5.4",
  "desc": "Multiple variadic parameters in functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Local functions now support overloading | Changes in Swift 5.4",
  "desc": "Local functions now support overloading",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Creating variables that call a function of the same name | Changes in Swift 5.4",
  "desc": "Creating variables that call a function of the same name",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-variables-same-name.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Result builders | Changes in Swift 5.4",
  "desc": "Result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/result-builders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Property wrappers are now supported for local variables | Changes in Swift 5.4",
  "desc": "Property wrappers are now supported for local variables",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-property-wrappers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Packages can now declare executable targets | Changes in Swift 5.4",
  "desc": "Packages can now declare executable targets",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/spm-executable-targets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.4 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-3-to-5-4.playground.zip)

:::

---

<TagLinks />