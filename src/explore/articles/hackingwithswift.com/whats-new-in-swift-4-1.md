---
lang: ko-KR
title: "What's new in Swift 4.1"
description: Synthesized equatable, conditional conformance, and more!
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-4.1
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 4.1
    - property: og:description
      content: Synthesized equatable, conditional conformance, and more!
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.html
prev: /programming/swift/articles/README.md
date: 2018-06-13
isOriginal: false
cover: https://hackingwithswift.com/uploads/swift-evolution-3.jpg
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

<SiteInfo
  name="What's new in Swift 4.1 – Hacking with Swift"
  desc="Synthesized equatable, conditional conformance, and more!"
  url="https://hackingwithswift.com/articles/50/whats-new-in-swift-4-1"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-3.jpg"/>

Swift 4.1 is the first minor release of Swift 4, bringing with it some useful improvements such as automatically synthesized equatable and hashable, conditional conformances, a smarter way to detect the simulator environment, and more.

Make sure you have [<FontIcon icon="iconfont icon-xcode"/>Xcode 9.3 or later](https://developer.apple.com/download/) then create a new playground. Let’s take a look at the top new features for this release…

::: info Update

I created an [Xcode Playground showing what's new in Swift 4.1 with examples you can edit](/explore/articles/hackingwithswift.com/learn-whats-new-in-swift-4-1-with-a-playground.md).

:::

---

## Synthesized Equatable and Hashable

The `Equatable` protocol allows Swift to compare one instance of a type against another. When we say `5 == 5`, Swift understands what that means because `Int` conforms to `Equatable`, which means it implements a function describing what `==` means for two instances of `Int`.

Implementing `Equatable` in our own value types allows them to work like Swift’s strings, arrays, numbers, and more, and it’s usually a good idea to make your structs conform to `Equatable` just so they fit the concept of value types better.

However, implementing `Equatable` by hand can be annoying. Consider this code: 

```swift
struct Person {
    var firstName: String
    var lastName: String
    var age: Int
    var city: String
}
```

If you have two instances of `Person` and want to make sure they are identical, you need to compare all four of its properties, like this:

```swift
struct Person: Equatable {
    var firstName: String
    var lastName: String
    var age: Int
    var city: String

    static func ==(lhs: Person, rhs: Person) -> Bool {
        return lhs.firstName == rhs.firstName && lhs.lastName == rhs.lastName && lhs.age == rhs.age && lhs.city == rhs.city
    }
}
```

Even *reading* that is tiring, never mind *writing* it.

Fortunately, Swift 4.1 can synthesize conformance for `Equatable` for us – it can generate an `==` method automatically, which will compare all properties in one value with all properties in another, just like above. So, all you have to do now is add `Equatable` as a protocol for your type, and Swift will do the rest:

```swift
struct Person: Equatable {
    var firstName: String
    var lastName: String
    var age: Int
    var city: String
}
```

Of course, if you *want* you can implement `==` yourself. For example, if your type has an `id` field that identifies it uniquely, you would write `==` to compare that single value rather than letting Swift do all the extra work.

Swift 4.1 also introduces synthesized support for the `Hashable` protocol, which means it will generate a `hashValue` property for conforming types automatically. `Hashable` was always annoying to implement because you need to return a unique (or at least mostly unique) hash for every object. It’s important, though, because it lets you use your objects as dictionary keys and store them in sets.

Previously we’d need to write code like this:

```swift
var hashValue: Int {
    return firstName.hashValue ^ lastName.hashValue &* 16777619
}
```

For the most part that’s no longer needed in Swift 4.1, although as with `Equatable` you might still want to write your own method if there’s something specific you need.

::: note

You still need to opt in to these protocols by adding a conformance to your type, and using the synthesized code does require that all properties in your type conform to `Equatable` or `Hashable` respectively.

For more information, see [Swift Evolution proposal SE-0185 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0185-synthesize-equatable-hashable.md).

:::

---

## Key decoding strategy for `Codable`

- I wrote a full article on this useful new feature: [Swift 4.1 improves Codable with keyDecodingStrategy](/explore/articles/hackingwithswift.com/swift-4-1-improves-codable-with-keydecodingstrategy.md)

In Swift 4.0 a common problem was trying to use `Codable` with JSON that utilized snake_case for its key names rather than the camelCase we normally use in Swift. Codable was unable to understand how the two different name types were mapped, so you had to create a custom `CodingKeys` enum helping it out.

This is where Swift 4.1's new `keyDecodingStrategy` property comes in: it’s set to `.useDefaultKeys` by default, which does a direct mapping of JSON names to Swift properties. However, if you change it to `.convertFromSnakeCase` then `Codable` handles the name conversion for us.

For example:

```swift
let decoder = JSONDecoder()
decoder.keyDecodingStrategy = .convertFromSnakeCase

do {
    let macs = try decoder.decode([Mac].self, from: jsonData)
    print(macs)
} catch {
    print(error.localizedDescription)
}
```

When you want to go back the other way – to convert a `Codable` struct with camelCase properties back to JSON with snake_case keys, set the `keyEncodingStrategy` to `.convertToSnakeCase` like this:

```swift
let encoder = JSONEncoder()
encoder.keyEncodingStrategy = .convertToSnakeCase
let encoded = try encoder.encode(someObject)
```

---

## Conditional conformances

Swift 4.1 implements [SE-0143 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0143-conditional-conformances.md), which introduced proposed conditional conformances into the language. This allows types to conform to a protocol only when certain conditions are met.

To demonstrate conditional conformances, let's create a `Purchaseable` protocol that we can use to buy things:

```swift
protocol Purchaseable {
   func buy()
}
```

We can now define a `Book` struct that conforms to the protocol, and prints a message when a book is bought:

```swift
struct Book: Purchaseable {
   func buy() {
      print("You bought a book")
   }
}
```

So far this is easy enough, but let's take it one step further: what if the user has a basket full of books, and wants to buy them all? We could loop over all books in the array by hand, calling `buy()` on each one. But a better approach is to write an extension on `Array` to make it conform to `Purchaseable`, then give it a `buy()` method that in turn calls `buy()` on each of its elements.

This is where conditional conformances come in: if we tried to extend all arrays, we'd be adding functionality where it wouldn't make sense – we'd be adding `buy()` to arrays of strings, for example, even though those strings don't have a `buy()` method we can call.

Swift 4.1 lets us make arrays conform to `Purchaseable` only if their elements also conform to `Purchaseable`, like this:

```swift
extension Array: Purchaseable where Element: Purchaseable {
   func buy() {
      for item in self {
         item.buy()
      }
   }
}
```

As you can see, conditional conformances let us constrain the way our extensions are applied more precisely than was possible before.

Conditional conformances also make large parts of Swift code easier and safer, even if you don't do any extra work yourself. For example, this code creates two arrays of optional strings and checks whether they are equal:

```swift
var left: [String?] = ["Andrew", "Lizzie", "Sophie"]
var right: [String?] = ["Charlotte", "Paul", "John"]
left == right
```

That might seem trivial, but that code wouldn't even compile in Swift 4.0 – both `String` and `[String]` were equatable, but `[String?]` was not.

The introduction of conditional conformance in Swift 4.1 means that it’s now possible to add protocol conformance to a type as long as it satisfies a condition. In this case, if the elements of the array are equatable, that means the whole thing is equatable. So, the above code now compiles in Swift 4.1

Conditional conformance has been extended to the `Codable` protocol in a way that will definitely make things safer. For example:

```swift
import Foundation

struct Person {
   var name = "Taylor"
}

var people = [Person()]
var encoder = JSONEncoder()
// try encoder.encode(people)
```

If you uncomment the `encoder.encode(people)` line, Swift will refuse to build your code because you're trying to encode a struct that doesn't conform to `Codable`. However, that code compiled cleanly with Swift 4.0, then threw a fatal error at runtime because `Person` doesn’t conform to `Codable`.

Obviously no one wants a fatal error at runtime, because it means your app crashes. Fortunately, Swift 4.1 cleans this up using conditional conformances: `Optional`, `Array`, `Dictionary`, and `Set` now only conform to `Codable` if their contents also conform to `Codable`, so the above code will refuse to compile.

---

## Recursive constraints on associated types

Swift 4.1 implements [SE-0157 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0157-recursive-protocol-constraints.md), which lifts restrictions on the way we use associated types inside protocols. As a result, we can now create recursive constraints for our associated types: associated types that are constrained by the protocol they are defined in.

To demonstrate this, let's consider a simple team hierarchy in a tech company. In this company, every employee has a manager – someone more senior to them that they report to. Each manager must also be an employee of the company, because it would be weird if they weren't.

We can express this relationship in a simple `Employee` protocol:

```swift
protocol Employee {
   associatedtype Manager: Employee
   var manager: Manager? { get set }
}
```

::: note

I've used an optional `Manager?` because ultimately one person (presumably the CEO) has no manager.

:::

Even though that's a fairly self-evident relationship, it wasn't possible to compile that code in Swift 4.0 because we're using the `Employee` protocol inside itself. However, this is fixed in Swift 4.1 because of the new ability to use recursive constraints on associated types.

Thanks to this new feature, we can model a simple tech company that has three kinds of team members: junior developers, senior developers, and board members. The reporting structure is also simple: junior developers are managed by senior developers, senior developers are managed by board members, and board members may be managed by another board member – e.g. the CTO reporting to the CEO.

That looks exactly as you would imagine thanks to Swift 4.1:

```swift
class BoardMember: Employee {
   var manager: BoardMember?
}

class SeniorDeveloper: Employee {
   var manager: BoardMember?
}

class JuniorDeveloper: Employee {
   var manager: SeniorDeveloper?
}
```

::: note

I've used classes here rather than structs because `BoardMember` itself contains a `BoardMember` property and that would result in an infinitely sized struct. If one of these has to be a class I personally would prefer to make all three classes just for consistency, but if you preferred you could leave `BoardMember` as a class and make both `SeniorDeveloper` and `JuniorDeveloper` into structs.

:::

---

## Build configuration import testing

Swift 4.1 implements [SE-0075 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0075-import-test.md), which introduces a new `canImport` condition that lets us check whether a specific module can be imported when our code is compiled.

This is particularly important for cross-platform code: if you had a Swift file that implemented one behavior on macOS and another on iOS, or if you needed specific functionality for Linux. For example:

```swift
#if canImport(SpriteKit)
   // this will be true for iOS, macOS, tvOS, and watchOS
#else
   // this will be true for other platforms, such as Linux
#endif
```

Previously you would have had to use inclusive or exclusive tests by operating system, like this:

```swift
#if !os(Linux)
   // Matches macOS, iOS, watchOS, tvOS, and any other future platforms
#endif

#if os(macOS) || os(iOS) || os(tvOS) || os(watchOS)
   // Matches only Apple platforms, but needs to be kept up to date as new platforms are added
#endif
```

The new `canImport` condition lets us focus on the functionality we care about rather than what platform we're compiling for, thus avoiding a variety of problems.

---

## Target environment testing

Swift 4.1 implements [SE-0190 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0190-target-environment-platform-condition.md), which introduces a new `targetEnvironment` condition that lets us differentiate between builds that are for physical devices and those that are for a simulated environment.

At this time `targetEnvironment` has only one value, `simulator`, which will be true if your build is targeting a simulated device such as the iOS Simulator. For example:

```swift
#if targetEnvironment(simulator)
   // code for the simulator here
#else
   // code for real devices here
#endif
```

This is useful when writing code to deal with functionality the simulator doesn't support, such as capturing photos from a camera or reading the accelerometer.

As an example, let's look at processing a photo from the camera. If we're running on a real device we'll create and configure a `UIImagePickerController()` to take photos using the camera, but if we're in the simulator we'll just load a sample image from our app bundle:

```swift
import UIKit

class TestViewController: UIViewController, UIImagePickerControllerDelegate {
   // a method that does some sort of image processing
   func processPhoto(_ img: UIImage) {
       // process photo here
   }

   // a method that loads a photo either using the camera or using a sample
   func takePhoto() {
      #if targetEnvironment(simulator)
         // we're building for the simulator; use the sample photo
         if let img = UIImage(named: "sample") {
            processPhoto(img)
         } else {
            fatalError("Sample image failed to load")
         }
      #else
         // we're building for a real device; take an actual photo
         let picker = UIImagePickerController()
         picker.sourceType = .camera
         vc.allowsEditing = true
         picker.delegate = self
         present(picker, animated: true)
      #endif
   }

   // this is called if the photo was taken successfully
   func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
      // hide the camera
      picker.dismiss(animated: true)

      // attempt to retrieve the photo they took
      guard let image = info[UIImagePickerControllerEditedImage] as? UIImage else {
         // that failed; bail out
         return
      }

      // we have an image, so we can process it
      processPhoto(image)
   }
}
```

---

## flatMap is now (partly) compactMap

The `flatMap()` method was useful for a variety of things in Swift 4.0, but one was particularly useful: the ability to transform each object in a collection, then remove any items that were nil.

[Swift Evolution proposal SE-0187 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0187-introduce-filtermap.md) suggested changing this, and as of Swift 4.1 this `flatMap()` variant has been renamed to `compactMap()` to make its meaning clearer.

For example:

```swift
let array = ["1", "2", "Fish"]
let numbers = array.compactMap { Int($0) }
```

That will create an `Int` array containing the numbers 1 and 2, because "Fish" will fail conversion to `Int`, return nil, and be ignored.

---

## Looking forward to Swift 5.0

The introduction of conditional conformance has enabled the Swift team to take out a fair amount of code while also promoting stability, and automatic `Equatable` and `Hashable` support will definitely make our lives easier.

Swift 4.2 introduces a variety of further enhancements, including derived collections of enum cases, warning and error diagnostic directives, and dynamic member look up – [click here to learn what's new in Swift 4.2](/explore/articles/hackingwithswift.com/whats-new-in-swift-4-2.md).

There are still other big proposals on the way, including [SE-0192: Non-Exhaustive Enums (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0192-non-exhaustive-enums.md). But as important as those features are, this is the year Apple will, we hope, deliver ABI stability for Swift, and that’s going to be *huge*. Fingers crossed!

---

<TagLinks />