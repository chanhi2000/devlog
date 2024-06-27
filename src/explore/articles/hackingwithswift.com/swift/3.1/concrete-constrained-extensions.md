---
lang: ko-KR
title: Concrete constrained extensions
description: Article(s) > Concrete constrained extensions
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-3.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > Concrete constrained extensions
    - property: og:description
      content: Concrete constrained extensions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.1/concrete-constrained-extensions.html
prev: /explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.md
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
  "title": "Concrete constrained extensions | Changes in Swift 3.1",
  "desc": "Concrete constrained extensions",
  "link": "https://hackingwithswift.com/swift/3.1/concrete-constrained-extensions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.1

Swift lets us extend types using constraints, which is a powerful and expressive way to add functionality. To demonstrate this, let's look at a worked example in Swift 3.0 that modifies collections to do something trivial:

```swift
extension Collection where Iterator.Element: Comparable {
    func lessThanFirst() -> [Iterator.Element] {
        guard let first = self.first else { return [] }
        return self.filter { $0 < first }
    }
}

let items = [5, 6, 10, 4, 110, 3].lessThanFirst()
print(items)
```

That adds a new method called `lessThanFirst()`, which returns all items in a collection that are less than the first item. So, using it with the array `[5, 6, 10, 4, 110, 3]` will return `[4, 3]`.

That code extends a protocol (`Collection`) only where it matches a constraint: elements in the collection must conform to another protocol, `Comparable`. This alone is powerful stuff, but let's take it back a step: what if we wanted something a bit more specific? Swift 3.0 lets us extend a concrete type rather than the protocol `Collection`, so instead we could write this:

```swift
extension Array where Element: Comparable {
    func lessThanFirst() -> [Element] {
        guard let first = self.first else { return [] }
        return self.filter { $0 < first }
    }
}

let items = [5, 6, 10, 4, 110, 3].lessThanFirst()
print(items)
```

That extends a concrete type (only `Array`) but still using a protocol for its constraint. What if we wanted to go even more specific – extend a concrete type with a concrete constraint, for example only arrays that contains integers? Well, it turns out that isn't possible in Swift 3.0, which usually strikes people as odd: if Swift 3.0 can handle extending protocols with another protocol as a constraint, then surely extending a specific type with a specific constraint should be a cinch?

Fortunately, this discrepancy has been removed in Swift 3.1, which means we can now write code like this:

```swift
extension Array where Element == Int {
    func lessThanFirst() -> [Int] {
        guard let first = self.first else { return [] }
        return self.filter { $0 < first }
    }
}

let items = [5, 6, 10, 4, 110, 3].lessThanFirst()
print(items)
```

That extends a concrete type (only `Array`) and uses a concrete constraint (only where the elements are `Int`).

Now, obviously we're using a trivial example here – in your own code this is going to be significantly more useful when you want to extend arrays containing your own custom structs.

::: details Other Changes in Swift 3.1
<!-- 
```component VPCard
{
  "title": "Concrete constrained extensions | Changes in Swift ",
  "desc": "Concrete constrained extensions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.1/concrete-constrained-extensions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Generics with nested types | Changes in Swift ",
  "desc": "Generics with nested types",
  "link": "/explore/articles/hackingwithswift.com/swift/3.1/generic-nested-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Sequences get prefix(while:) and drop(while:) methods | Changes in Swift ",
  "desc": "Sequences get prefix(while:) and drop(while:) methods",
  "link": "/explore/articles/hackingwithswift.com/swift/3.1/prefix-drop.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-3-0-to-3-1.playground.zip)

:::

---

<TagLinks />