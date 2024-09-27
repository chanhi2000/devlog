---
lang: ko-KR
title: "How to safely use reference types inside value types with isKnownUniquelyReferenced()"
description: "Article(s) > How to safely use reference types inside value types with isKnownUniquelyReferenced()"
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
      content: "Article(s) > How to safely use reference types inside value types with isKnownUniquelyReferenced()"
    - property: og:description
      content: "How to safely use reference types inside value types with isKnownUniquelyReferenced()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced.html
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
  "title": "How to safely use reference types inside value types with isKnownUniquelyReferenced() | Language - free Swift example code",
  "desc": "How to safely use reference types inside value types with isKnownUniquelyReferenced()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Working with value types like structs and enums makes your code easier to write, easier to test, and easier to reason about. However, they aren’t always possible: classes and closures are both reference types, and are used extensively in Swift for the handful of times when sharing data is important, or perhaps because you’re using them through someone else’s Swift code.

This can cause a variety of side effects with your code: if you use reference types inside value types, they still behave like reference types. The solution to this is to wrap those reference types in value semantics, meaning that they behave more like value types.

To demonstrate the problem, consider this `ChatHistory` class:

```swift
class ChatHistory: NSCopying {
    var messages: String = "Anonymous"

    func copy(with zone: NSZone? = nil) -> Any {
        let copy = ChatHistory()
        copy.messages = messages
        return copy
    }
}
```

It doesn’t hold much data, but it’s enough for us to work with.

If you wanted to use that inside a struct your first attempt might look like this:

```swift
struct User {
    var chats = ChatHistory()
}

let twostraws = User()
twostraws.chats.messages = "Hello!"
```

Although that’s a value type – meaning that it may have only one owner at a time – it doesn’t really *behave* like one. You can see we’re modifying the struct directly, even though it’s marked as a constant. We could also create a different struct and make it re-use the same `chats` property:

```swift
var taylor = User()
taylor.chats = twostraws.chats
```

Because we made `taylor.chats` point to the same object as `twostraws.chats` – a reference type – then changing one will also change the other. So, this will print “Goodbye!” twice:

```swift
twostraws.chats.messages = "Goodbye!"
print(twostraws.chats.messages)
print(taylor.chats.messages)
```

To fix this we’re going to change the implementation of `User` so that `messages` becomes a private property called `_messages`, and expose a custom getter/setter called `messages` that will act in its place. The setter part will just change `_messages` directly, but the getter will take a copy of `_messages` before returning it so that our properties are always unique.

To do this we’re going to use Swift’s mutating getters, which are enabled using the `mutating get` keyword. This allows us to change the struct inside the getter, and Swift will back this up by refusing to allow it when used with constants.

Here’s how that looks:

```swift
struct User {
    var _chats = ChatHistory()

    var chats: ChatHistory {
        mutating get {
            _chats = _chats.copy() as! ChatHistory
            return _chats
        }

        set {
            _chats = newValue
        }
    }
}
```

This is an improvement, because now Swift will force us to make `twostraws` a variable, like this:

```swift
var twostraws = User()
```

This makes sense, because we *are* changing it. However, it introduces a new problem: all that copying is quite wasteful if you do repeated work when the messages object was unique all along.

To fix this new problem you need the `isKnownUniquelyReferenced()` function, which returns true when called on an instance of a Swift class that has only one owner.`isKnownUniquelyReferenced()`. This means we can return `_chats` if it is uniquely referenced (no one else has a reference to it), otherwise we’ll take a copy. This reduces copying down to the bare minimum, which is much more efficient.

```swift
struct User {
    private var _chats = ChatHistory()

    var chats: ChatHistory {
        mutating get {
            if !isKnownUniquelyReferenced(&_chats) {
                _chats = _chats.copy() as! ChatHistory
            }

            return _chats
        }

        set {
            _chats = newValue
        }
    }
}
```

If you run the program again, you’ll see that the two users now have their own chat logs – using `twostraws.chats.messages = "Goodbye!"` inherently means reading `chats`, which will notice the object isn’t uniquely referenced and take a copy before continuing.

You could still abuse that if you really wanted to, but it’s getting increasingly hard – Swift is protecting us from a wider variety of mistakes.

Ideally your goal is to copy as infrequently as possible, so it’s common to make copies only when something is definitely changing rather than simply being read. In practice, this would mean marking methods in your struct as `mutating`, then funneling access through there so you copy only as needed. At WWDC 2015, [Apple gave a demonstration of using two different properties (one reading, one writing) to accomplish this – see <a href="https://developer.apple.com/videos/play/wwdc2015/414">https://developer.apple.com/videos/play/wwdc2015/414</a> for more information.

**Warning:** Don’t try using `isKnownUniquelyReferenced()` on Objective-C objects, because it will not behave as you expect – it’s designed only for Swift classes.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-automatic-reference-counting-arc">What is Automatic Reference Counting (ARC)? 
/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round" 
/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock">How to fix “Ambiguous reference to member 'buildBlock()’” 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink">How to disable the overlay color for images inside Button and NavigationLink</a>
-->

:::

---

<TagLinks />