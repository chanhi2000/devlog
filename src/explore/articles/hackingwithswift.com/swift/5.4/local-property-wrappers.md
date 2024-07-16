---
lang: ko-KR
title: Property wrappers are now supported for local variables
description: Article(s) > Property wrappers are now supported for local variables
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
      content: Article(s) > Property wrappers are now supported for local variables
    - property: og:description
      content: Property wrappers are now supported for local variables
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.4/local-property-wrappers.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Property wrappers are now supported for local variables | Changes in Swift 5.4",
  "desc": "Property wrappers are now supported for local variables",
  "link": "https://hackingwithswift.com/swift/5.4/local-property-wrappers", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.4

Property wrappers were first introduced in Swift 5.1 as a way of attaching extra functionality to properties in an easy, reusable way, but in Swift 5.4 their behavior got extended to support using them as local variables in functions.

For example, we could create a property wrapper that ensures its value never goes below zero:

```swift
@propertyWrapper struct NonNegative<T: Numeric & Comparable> {
    var value: T

    var wrappedValue: T {
        get { value }

        set {
            if newValue < 0 {
                value = 0
            } else {
                value = newValue
            }
        }
    }

    init(wrappedValue: T) {
        if wrappedValue < 0 {
            self.value = 0
        } else {
            self.value = wrappedValue
        }
    }
}
```

And from Swift 5.4 onwards we can use that property wrapper inside a regular function, rather than just attaching to a property. For example, we might write a game where our player can gain or lose points, but their score should never go below 0:

```swift
func playGame() {
    @NonNegative var score = 0

    // player was correct
    score += 4

    // player was correct again
    score += 8

    // player got one wrong
    score -= 15

    // player got another one wrong
    score -= 16

    print(score)
}

playGame()
```

::: details Other Changes in Swift 5.4

```component VPCard
{
  "title": "Improved implicit member syntax | Changes in Swift 5.4",
  "desc": "Improved implicit member syntax",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multiple variadic parameters in functions | Changes in Swift 5.4",
  "desc": "Multiple variadic parameters in functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Local functions now support overloading | Changes in Swift 5.4",
  "desc": "Local functions now support overloading",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Creating variables that call a function of the same name | Changes in Swift 5.4",
  "desc": "Creating variables that call a function of the same name",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-variables-same-name.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Result builders | Changes in Swift 5.4",
  "desc": "Result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/result-builders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Property wrappers are now supported for local variables | Changes in Swift 5.4",
  "desc": "Property wrappers are now supported for local variables",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-property-wrappers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Packages can now declare executable targets | Changes in Swift 5.4",
  "desc": "Packages can now declare executable targets",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/spm-executable-targets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.4 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-3-to-5-4.playground.zip)

:::

---

<TagLinks />