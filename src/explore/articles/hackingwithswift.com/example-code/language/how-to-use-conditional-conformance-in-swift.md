---
lang: ko-KR
title: "How to use conditional conformance in Swift"
description: "Article(s) > How to use conditional conformance in Swift"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use conditional conformance in Swift"
    - property: og:description
      content: "How to use conditional conformance in Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-conditional-conformance-in-swift.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use conditional conformance in Swift | Language - free Swift example code",
  "desc": "How to use conditional conformance in Swift",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-conditional-conformance-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Conditional conformances <a href="/articles/50/whats-new-in-swift-4-1">were introduced in Swift 4.1</a>, and <a href="/articles/77/whats-new-in-swift-4-2">refined in Swift 4.2</a> to allow you to query them at runtime. They allow types to conform to a protocol only when certain conditions are met – hence “conditional conformance”.

For example, if we had a `Purchaseable` protocol:

```swift
protocol Purchaseable {
    func buy()
}
```

And a simple type that conforms to that protocol:

```swift
struct Book: Purchaseable {
    func buy() {
        print("You bought a book")
    }
}
```

Then we could make `Array` conform to `Purchaseable` if all the elements inside the array were also `Purchasable`:

```swift
extension Array: Purchaseable where Element: Purchaseable {
    func buy() {
        for item in self {
            item.buy()
        }
    }
}
```

You can add conditional conformances to new types, and you can use any protocol you want – it doesn’t need to be one you define.

For example, you might a generic `Box` class that is able to wrap a value so it can be passed by reference:

```swift
final class Box<T> {
    var value: T

    init(value: T) {
        self.value = value
    }
}
```

We could use that box to store `User` structs, like this:

```swift
struct User: Equatable {
    var username: String
}

let user = User(username: "twostraws")
let box1 = Box(value: user)
let box2 = Box(value: user)
```

We’ve made the `User` struct `Equatable`, which means we can compare two instances of it to see if they are equal. What conditional conformance let us do is make `Box` equatable if its content is also equatable, like this:

```swift
extension Box: Equatable where T: Equatable {
    static func == (lhs: Box<T>, rhs: Box<T>) -> Bool {
        return lhs.value == rhs.value
    }
}
```

With that in place, we can now check two boxes for equality directly, like this:

```swift
box1 == box2
```

Conditional conformance was enhanced in Swift 4.2, giving the ability to query a conditional conformance at runtime. Although this compiled in Swift 4.1, it would crash at runtime – a result no one wanted. 

Well, that’s now fixed, so if you receive data of one type and want to check if it can be converted to a conditionally conformed protocol, it works great.

For example:

```swift
let items: Any = [Book(), Book(), Book()]

if let books = items as? Purchaseable {
    books.buy()
}
```

-->

::: details Similar solutions…

<!--
/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock() 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/language/how-to-install-a-beta-version-of-swift">How to install a beta version of Swift</a>
-->

:::

---

<TagLinks />