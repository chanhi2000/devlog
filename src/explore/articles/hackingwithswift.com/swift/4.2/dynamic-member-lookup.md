---
lang: ko-KR
title: Dynamic member look up
description: Article(s) > Dynamic member look up
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Dynamic member look up
    - property: og:description
      content: Dynamic member look up
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.html
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
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "https://hackingwithswift.com/swift/4.2/dynamic-member-lookup", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.2

[SE-0195 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0195-dynamic-member-lookup.md) introduced a way to bring Swift closer to scripting languages such as Python, but in a type-safe way – you don’t lose any of Swift’s safety, but you do gain the ability to write the kind of code you’re more likely to see in PHP and Python.

At the core of this feature is a new attribute called `@dynamicMemberLookup`, which instructs Swift to call a subscript method when accessing properties. This subscript method, `subscript(dynamicMember:)`, is *required*: you’ll get passed the string name of the property that was requested, and can return any value you like.

Let’s look at a trivial example so you can understand the basics. We could create a `Person` struct that reads its values from a dictionary like this:

```swift
@dynamicMemberLookup
struct Person {
    subscript(dynamicMember member: String) -> String {
        let properties = ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }
}
```

The `@dynamicMemberLookup` attribute requires the type to implement a `subscript(dynamicMember:)` method to handle the actual work of dynamic member lookup. As you can see, I’ve written one that accepts the member name as string and returns a string, and internally it just looks up the member name in a dictionary and returns its value.

That struct allows us to write code like this:

```swift
let person = Person()
print(person.name)
print(person.city)
print(person.favoriteIceCream)
```

That will compile cleanly and run, even though `name`, `city`, and `favoriteIceCream` do not exist as properties on the `Person` type. Instead, they are all looked up at runtime: that code will print “Taylor Swift” and “Nashville” for the first two calls to `print()`, then an empty string for the final one because our dictionary doesn’t store anything for `favoriteIceCream`.

My `subscript(dynamicMember:)` method *must* return a string, which is where Swift’s type safety comes in: even though you’re dealing with dynamic data, Swift will still ensure you get back what you expected. And if you want multiple different types, just implement different `subscript(dynamicMember:)` methods, like this:

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

Now that any property can be accessed in more than one way, Swift requires you to be clear which one should be run. That might be implicit, for example if you send the return value into a function that accepts only strings, or it might be explicit, like this:

```swift
let employee = Employee()
let age: Int = employee.age
```

Either way, Swift must know for sure which subscript will be called.

You can even overload `subscript` to return closures:

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
user.printAddress("555 Taylor Swift Avenue")
```

When that’s run, `user.printAddress` returns a closure that prints out a string, and the `("555 Taylor Swift Avenue")` part immediately calls it with that input.

If you use dynamic member subscripting in a type that has also some regular properties and methods, those properties and methods will always be used in place of the dynamic member. For example, we could define a `Singer` struct with a built-in `name` property alongside a dynamic member subscript:

```swift
struct Singer {
    public var name = "Justin Bieber"

    subscript(dynamicMember member: String) -> String {
        return "Taylor Swift"
    }
}

let singer = Singer()
print(singer.name)
```

That code will print “Justin Bieber”, because the `name` property will be used rather than the dynamic member subscript.

`@dynamicMemberLookup` plays a full part in Swift’s type system, which means you can assign them to protocols, structs, enums, and classes – even classes that are marked `@objc`.

In practice, this means two things. First, you can create a class using `@dynamicMemberLookup`, and any classes that inherit from it are also automatically `@dynamicMemberLookup`. So, this will print “I’m a sandwich” because `HotDog` inherits from `Sandwich`:

```swift
@dynamicMemberLookup
class Sandwich {
    subscript(dynamicMember member: String) -> String {
        return "I'm a sandwich!"
    }
}

class HotDog: Sandwich { }

let chiliDog = HotDog()
print(chiliDog.description)
```

Second, you can retroactively make other types use `@dynamicMemberLookup` by defining it on a protocol, adding a default implementation of `subscript(dynamicMember:)` using a protocol extension, then making other types conform to your protocol however you want.

For example, this creates a new `Subscripting` protocol, provides a default `subscript(dynamicMember:)` implementation that returns a message, then extends Swift’s `String` to use that protocol:

```swift
@dynamicMemberLookup
protocol Subscripting { }

extension Subscripting {
    subscript(dynamicMember member: String) -> String {
        return "This is coming from the subscript"
    }
}

extension String: Subscripting { }
let str = "Hello, Swift"
print(str.username)
```

::: details Other Changes in Swift 4.2

```component VPCard
{
  "title": "Derived collections of enum cases | Changes in Swift 4.2",
  "desc": "Derived collections of enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Warning and error diagnostic directives | Changes in Swift 4.2",
  "desc": "Warning and error diagnostic directives",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/warning-error.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Enhanced conditional conformances | Changes in Swift 4.2",
  "desc": "Enhanced conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Random number generation and shuffling | Changes in Swift 4.2",
  "desc": "Random number generation and shuffling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/random.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/hashable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Checking sequence elements match a condition | Changes in Swift 4.2",
  "desc": "Checking sequence elements match a condition",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/allsatisfy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "In-place collection element removal | Changes in Swift 4.2",
  "desc": "In-place collection element removal",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/remove-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Boolean toggling | Changes in Swift 4.2",
  "desc": "Boolean toggling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/toggle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-1-to-4-2.playground.zip)

:::

---

<TagLinks />