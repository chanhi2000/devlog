---
lang: ko-KR
title: "How to copy objects in Swift using copy()"
description: "Article(s) > How to copy objects in Swift using copy()"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to copy objects in Swift using copy()"
    - property: og:description
      content: "How to copy objects in Swift using copy()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-copy-objects-in-swift-using-copy.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to copy objects in Swift using copy() | System - free Swift example code",
  "desc": "How to copy objects in Swift using copy()",
  "link": "https://hackingwithswift.com/example-code/system/how-to-copy-objects-in-swift-using-copy",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
There are two main complex data types in Swift – objects and structs – and they do so many things similarly that you'd be forgiven for not being sure exactly where they differ. Well, one of the key areas is down to copying: two variables can point at the same object so that changing one changes them both, whereas if you tried that with structs you'd find that Swift creates a full copy so that changing the copy does not affect the original.

Having lots of objects point at the same data can be useful, but frequently you'll want to modify *copies* so that modifying one object doesn't have an effect on anything else. To make this work you need to do three things:

- Make your class conform to `NSCopying`. This isn't strictly required, but it makes your intent clear.
<li>Implement the method `copy(with:)`, where the actual copying happens.
<li>Call `copy()` on your object.

Here's an example of a `Person` class that conforms fully to the `NSCopying` protocol:

```swift
    class Person: NSObject, NSCopying {
    var firstName: String
    var lastName: String
    var age: Int

    init(firstName: String, lastName: String, age: Int) {
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
    }

    func copy(with zone: NSZone? = nil) -> Any {
        let copy = Person(firstName: firstName, lastName: lastName, age: age)
        return copy
    }
}
```

Note that `copy(with:)` is implemented by creating a new `Person` object using the current person's information.

With that done, you can test out your copying like this:

```swift
let paul = Person(firstName: "Paul", lastName: "Hudson", age: 36)
let sophie = paul.copy() as! Person

sophie.firstName = "Sophie"
sophie.age = 6

print("\(paul.firstName) \(paul.lastName) is \(paul.age)")
print("\(sophie.firstName) \(sophie.lastName) is \(sophie.age)")
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/observable-objects-environment-objects-and-published">Observable objects, environment objects, and @Published 
/example-code/language/what-is-copy-on-write">What is copy on write? 
/example-code/system/how-to-copy-text-to-the-clipboard-using-uipasteboard">How to copy text to the clipboard using UIPasteboard 
/example-code/uikit/how-to-disable-undo-redo-copy-and-paste-gestures-using-editinginteractionconfiguration">How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration 
/example-code/language/how-to-convert-json-into-swift-objects-using-codable">How to convert JSON into Swift objects using Codable</a>
-->

:::

---

<TagLinks />