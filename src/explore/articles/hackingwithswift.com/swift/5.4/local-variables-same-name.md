---
lang: ko-KR
title: Creating variables that call a function of the same name
description: Article(s) > Creating variables that call a function of the same name
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
      content: Article(s) > Creating variables that call a function of the same name
    - property: og:description
      content: Creating variables that call a function of the same name
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.4/local-variables-same-name.html
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
  "title": "Creating variables that call a function of the same name | Changes in Swift 5.4",
  "desc": "Creating variables that call a function of the same name",
  "link": "https://hackingwithswift.com/swift/5.4/local-variables-same-name", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.4

From Swift 5.4 onwards it’s possible to create a local variable by calling a function of the same name. That might sound obscure, but it’s actually a problem we hit all the time.

For example, this creates a struct with a `color(forRow:)` method, which gets called and assigned to a local variable called `color`:

```swift
struct Table {
    let count = 10

    func color(forRow row: Int) -> String {
        if row.isMultiple(of: 2) {
            return "red"
        } else {
            return "black"
        }
    }

    func printRows() {
        for i in 0..<count {
            let color = color(forRow: i)
            print("Row \(i): \(color)")
        }
    }
}

let table = Table()
table.printRows()
```

That kind of usage is only allowed from Swift 5.4 and later. In earlier versions of Swift, it would create a circular reference because Swift couldn’t distinguish between the local `color` constant and the `color(forRow:)` method it was calling – you would have seen the error “Variable used within its own initial value”.

This usually resulted in us either using `self.color(forRow: 1989)` to make it clear we mean the method call, or just naming the local value something else such as `colorForRow`.

Fortunately Swift 5.4 [resolves this (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/main/test/Sema/diag_variable_used_in_initial.swift) and allows us to use the more natural naming.

This change also allows us to make local copies of properties and global variables. For example, we can take a copy of a `username` property that is also called `username`, like this:

```swift
struct User {
    let username = "Taylor"

    func suggestAlternativeUsername() -> String {
        var username = username
        username += String(Int.random(in: 1000...9999))
        return username
    }
}

let user = User()
user.suggestAlternativeUsername()
```

Because this also applies to global variables, that same code works just fine even without the struct in place:

```swift
let username = "Taytay"

func suggestAlternativeUsername() -> String {
    var username = username
    username += String(Int.random(in: 1000...9999))
    return username
}

suggestAlternativeUsername()
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