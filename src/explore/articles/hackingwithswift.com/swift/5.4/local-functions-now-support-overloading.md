---
lang: ko-KR
title: Local functions now support overloading
description: Article(s) > Local functions now support overloading
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
      content: Article(s) > Local functions now support overloading
    - property: og:description
      content: Local functions now support overloading
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.html
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
  "title": "Local functions now support overloading | Changes in Swift 5.4",
  "desc": "Local functions now support overloading",
  "link": "https://hackingwithswift.com/swift/5.4/local-functions-now-support-overloading", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.4

[<FontIcon icon="fa-brands fa-swift"/>SR-10069](https://bugs.swift.org/browse/SR-10069) requested the ability to overload functions in local contexts, which in practice means nested functions can now be overloaded so that Swift chooses which one to run based on the types that are used.

For example, if we wanted to make some simple cookies we might write code like this:

```swift
struct Butter { }
struct Flour { }
struct Sugar { }

func makeCookies() {
    func add(item: Butter) {
        print("Adding butter…")
    }

    func add(item: Flour) {
        print("Adding flour…")
    }

    func add(item: Sugar) {
        print("Adding sugar…")
    }

    add(item: Butter())
    add(item: Flour())
    add(item: Sugar())
    print("Come and get some cookies!")
}

makeCookies()
```

Prior to Swift 5.4, the three `add()` methods could be overloaded only if they were not nested inside `makeCookies()`, but from Swift 5.4 onwards function overloading is supported in this case as well.

Swift 5.4 also lets us call local functions before they are declared, meaning that we can now write code like this if needed:

```swift
func makeCookies2() {   
    add(item: Butter())
    add(item: Flour())
    add(item: Sugar())

    func add(item: Butter) {
        print("Adding butter…")
    }

    func add(item: Flour) {
        print("Adding flour…")
    }

    func add(item: Sugar) {
        print("Adding sugar…")
    }
}

makeCookies2()
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
<!-- 
```component VPCard
{
  "title": "Local functions now support overloading | Changes in Swift 5.4",
  "desc": "Local functions now support overloading",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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

```component VPCard
{
  "title": "Property wrappers are now supported for local variables | Changes in Swift 5.4",
  "desc": "Property wrappers are now supported for local variables",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-property-wrappers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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