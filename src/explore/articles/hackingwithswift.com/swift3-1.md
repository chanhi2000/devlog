---
lang: ko-KR
title: "What's new in Swift 3.1"
description: "What's new in Swift 3.1"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-3.1
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 3.1
    - property: og:description
      content: "What's new in Swift 3.1"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift3-1.html
prev: /programming/swift/articles/README.md
date: 2017-01-26
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What's new in Swift 3.1 – Hacking with Swift",
  "desc": "What's new in Swift 3.1",
  "link": "https://hackingwithswift.com/swift3-1",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift 3.1 is a small, backwards-compatible update to Swift 3.0, cleaning up a few advanced features in preparation for more serious changes coming when Swift 4.0 is announced in June. Although it took a lot of behind-the-scenes work to make these changes happen (see  [here (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/pull/5600/files) and  [here (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/pull/5126/files) if you'd like some detail), the end result for developers is a few extra features that we'll be able to start using soon enough.

In this article I'm going to explain three of the most useful changes with code examples, and hopefully this will give you some chance to be prepared to update your code when the time comes.

::: warning

Although it is not a feature of Swift 3.1, I couldn't publish this article without mentioning that Xcode 8.3 drops support for Swift 2.3. So, if you were holding back on your migration to Swift 3.x, now is the time to make the switch!

:::

If you liked this article, you might also enjoy these:

```component VPCard
{
  "title": "What's new in Swift 3.0 – Hacking with Swift",
  "desc": "What's new in Swift 3.0",
  "link": "/explore/articles/hackingwithswift.com/swift3",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## Concrete constrained extensions

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

---

## Generics with nested types

Swift 3.0's support for nested types is useful to help you organize your data and increase encapsulation, but Swift 3.1 takes them to the next level by adding support for generics. Let's look at a simple example again, just to start with:

```swift
struct Message {
    struct Attachment {
        var contents: String
    }

    var title: String
    var attachment: Attachment
}
```

That creates a `Message` struct that has an `Attachment` struct inside it – a nested type. I've added two `String` properties, because messages will have some text and attachments will hold some text.

Now, what if we wanted either `Message` or `Attachment` to have different kinds of data – perhaps `Int` or `Data`? Well, that requires generics, so you might have found yourself writing something like this:

```swift
struct Message<T> {
    struct Attachment {
        var contents: String
    }

    var title: T
    var attachment: Attachment
}
```

That tells Swift we want `Message` to work across several data types, and whatever data type gets used to create the struct should also be used for the `title` property. Or at least that's what it *would* tell Swift, if such code were actually legal – Swift 3.0 does not allow you to mix nested type with generics. Fortunately, this is exactly what Swift 3.1 allows, because nested types can now appear inside generic types.

Not content to stop there, Swift 3.1 takes this a step further: nested types can *also* be generic, either using their own generic type or by inheriting the generic type of their parent. For example:

```swift
struct Message<T> {
    struct Attachment<T> {
        var contents: T
    }

    var title: T
    var attachment: Attachment<T>
}
```

With that code, the `Message` struct will have a specific type assigned to it, and the `Attachment` struct will always have the same type – you can't use `String` for one and `Int` for the other. So, this code will work fine:

```swift
let msg = Message(title: "Hello", attachment: Message.Attachment(contents: "World"))
```

Helpfully, if your goal is to make the nested type and its container use the same generic type, you don't even need to declare the nested type as generic – Swift makes the outer type available to the nested type, so in fact you can just write this:

```swift
struct Message<T> {
    struct Attachment {
        var contents: T
    }

    var title: T
    var attachment: Attachment
}
```

Generics are great and so are nested types, so I'm really pleased to see Swift 3.1 bring them together at last.

---

## Sequences get prefix(while:) and drop(while:) methods

Two useful new methods have been added to the `Sequence` protocol: `prefix(while:)` and `drop(while:)`. The former returns the longest subsequence that satisfies a predicate, which is a fancy way of saying that you give it a closure to run on every item, and it will go through all the elements in the sequence and return those that match the closure – but will stop as soon as it finds a non-matching element.

Let's take a look at a code example:

```swift
let names = ["Michael Jackson", "Michael Jordan", "Michael Caine", "Taylor Swift", "Adele Adkins", "Michael Douglas"]
let prefixed = names.prefix { $0.hasPrefix("Michael") }
print(prefixed)
```

That uses the `hasPrefix()` method to return the subsequence `["Michael Jackson", "Michael Jordan", "Michael Caine"` – the first three elements in the sequence. It won't include "Michael Douglas", because that comes after the first non-Michael. If you wanted *all* the Michaels regardless of their position, you should use `filter()` instead.

The second new method, `drop(while:)` is effectively the opposite: it finds the longest subsequence that satisfies your predicate, then returns everything *after* it. For example:

```swift
let names = ["Michael Jackson", "Michael Jordan", "Michael Caine", "Taylor Swift", "Adele Adkins", "Michael Douglas"]
let dropped = names.drop { $0.hasPrefix("Michael") }
print(dropped)
```

That will return the subsequence `["Taylor Swift", "Adele Adkins", "Michael Douglas"]` – everything after the initial Michaels.

---

## Looking forward to Swift 4.0…

Swift 4.0 is almost certainly going to see the light of day in June, with a full release a few months afterwards. Although a major goal is to provide source stability for Swift 3 code, some breaking changes are almost inevitable.

If you want to take a peek into the future, you should  [read the String Processing For Swift document (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/master/docs/StringManifesto.md) from two of Apple's Swift engineers – yes, code will break, but hopefully this will result in strings being significantly easier for developers to work with. If you worked through the string problems in my  [<FontIcon icon="fas fa-globe"/>Swift Coding Challenges](https://hackingwithswift.com/store/swift-coding-challenges) book, you'll know how tricky strings can be right now.

One feature we're all hoping for is true  [ABI compatibility (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/master/docs/ABIStabilityManifesto.md), which would allow developers to distribute compiled libraries – one of the few key missing features that remain in Swift today. It would also reduce the size of every Swift app because iOS could store Swift's runtime libraries rather than them being distributed with every Swift app, so we get faster uploads to iTunes Connect, faster downloads to users, and slimmer apps all around. Hurray!

---

<TagLinks />