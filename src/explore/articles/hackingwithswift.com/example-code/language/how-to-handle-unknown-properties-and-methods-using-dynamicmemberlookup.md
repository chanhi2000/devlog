---
lang: ko-KR
title: "How to handle unknown properties and methods using @dynamicMemberLookup"
description: "Article(s) > How to handle unknown properties and methods using @dynamicMemberLookup"
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
      content: "Article(s) > How to handle unknown properties and methods using @dynamicMemberLookup"
    - property: og:description
      content: "How to handle unknown properties and methods using @dynamicMemberLookup"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup.html
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
  "title": "How to handle unknown properties and methods using @dynamicMemberLookup | Language - free Swift example code",
  "desc": "How to handle unknown properties and methods using @dynamicMemberLookup",
  "link": "https://hackingwithswift.com/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift has always had strong focus on type safety, but sometimes you need to be able to work with data where the structure isn’t known ahead of time.

To handle this situation, Swift has an attribute called `@dynamicMemberLookup`, which instructs Swift to call a subscript method when accessing properties. This subscript method, `subscript(dynamicMember:)`, is *required* when using the `@dynamicMemberLookup` attribute – you’ll get passed the string name of the property that was requested, and can return any value you like.

To help you understand the basics, here’s an example that creates a `Person` struct that reads its values from a dictionary:

```swift
@dynamicMemberLookup
struct Person {
    subscript(dynamicMember member: String) -> String {
        let properties = ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }
}
```

The `@dynamicMemberLookup` attribute requires the type to implement a `subscript(dynamicMember:)` method to handle the work of dynamic member lookup. As you can see, I’ve written one that accepts the member name as string and returns a string, and internally it just looks up the member name in a dictionary and returns its value.

That struct allows us to write code like this:

```swift
let person = Person()
print(person.name)
print(person.city)
print(person.nameOfPet)
```

That will compile cleanly and run, even though `name`, `city`, and `nameOfPet` do not exist as properties on the `Person` type. Instead, they are all looked up at runtime: that code will print “Taylor Swift” and “Nashville” for the first two calls to `print()`, then an empty string for the final one because our dictionary doesn’t store anything for `nameOfPet`.

This `subscript(dynamicMember:)` method *must* return a string, which is what enforces Swift’s type safety – even though you’re still dealing with dynamic data, Swift will ensure you get back what you expected.

If you want multiple different types, just implement different `subscript(dynamicMember:)` methods:

```swift
@dynamicMemberLookup
struct Employee {
    subscript(dynamicMember member: String) -> String {
        let properties = ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }

    subscript(dynamicMember member: String) -> Int {
        let properties = ["age": 26, "height": 178]
        return properties[member, default: 0]
    }
}
```

Now that any property can be accessed in more than one way, it’s important that you are clear which one should be used. That might be implicit, for example if you send the return value into a function that accepts only strings, or it might be explicit, like this:

```swift
let employee = Employee()
let age: Int = employee.age
```

Either way, Swift must know for sure which subscript will be called.

You can also overload `subscript` to return closures:

```swift
@dynamicMemberLookup
struct User {
    subscript(dynamicMember member: String) -> (_ input: String) -> Void {
        return {
            print("Hello! I live at the address \($0).")
        }
    }
}

let user = User()
user.printAddress("123 Swift Street")
```

When that’s run, `user.printAddress` returns a closure that prints out a string, and the `("123 Swift Street")` part immediately calls it with that input. 

Using dynamic member subscripting in a type that has also regular properties and methods will result in those properties and methods always being used in place of the dynamic member. For example, we could define a `Singer` struct with a built-in `name` property alongside a dynamic member subscript:

```swift
struct Singer {
    public var name = "Ed Sheeran"

    subscript(dynamicMember member: String) -> String {
        return "Taylor Swift"
    }
}

let singer = Singer()
print(singer.name)
```

That code prints “Ed Sheeran”, because the `name` property will always be used rather than the dynamic member subscript.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />