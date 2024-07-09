---
lang: ko-KR
title: "What's new in Swift 5.1"
description: Opaque return types, implicit returns, universal self, and more
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.0
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 5.1
    - property: og:description
      content: Opaque return types, implicit returns, universal self, and more
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/whats-new-in-swift-5-1.html
prev: /programming/swift/articles/README.md
date: 2019-09-18
isOriginal: false
cover: https://www.hackingwithswift.com/uploads/swift-evolution-1.jpg
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
  name="What's new in Swift 5.1 – Hacking with Swift"
  desc="Opaque return types, implicit returns, universal self, and more"
  url="https://hackingwithswift.com/articles/182/whats-new-in-swift-5-1"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://www.hackingwithswift.com/uploads/swift-evolution-1.jpg"/>

Swift 5.1 has finally landed, albeit slightly incompletely because function builders haven't gone through the Swift Evolution process yet, Still, we are getting another keystone feature in the form of module stability, which allows us to use third-party libraries without worrying which version of the Swift compiler they were built with.

Yes, I know that sounds similar to the ABI stability we got in Swift 5.0, but there’s a subtle difference: ABI stability resolves Swift differences at runtime, but *module* stability resolves differences at *compile time*.

Alongside that major milestone we’re also getting a number of important language improvements, and in this article I’ll walk through them and provide code examples so you can see them in action. As you're reading through, chances are you'll see just how many of these features relate to SwiftUI, and in fact I think it's fair to say that SwiftUI would be unrecognizable without the new features introduced with Swift 5.1.

- If you missed all the new features in Swift 5.1, start here: [what's new in Swift 5.0](/explore/articles/hackingwithswift.com/whats-new-in-swift-5-0.md).
- I have a free online book on SwiftUI called [SwiftUI By Example](/explore/articles/hackingwithswift.com/swiftui/README.md) – if you want to see these new Swift 5.1 features in action that's the place to start.

<VidStack src="youtube/WQ-wppW8jt4" />

---

## Massive improvements to synthesized memberwise initializers

[SE-0242 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0242-default-values-memberwise.md) introduces major improvements to one of Swift’s most commonly used features: memberwise initializers for structs.

In earlier versions of Swift, a memberwise initializer was automatically created to accept parameters matching the properties of a struct, like this:

```swift
struct User {
    var name: String
    var loginCount: Int = 0
}

let piper = User(name: "Piper Chapman", loginCount: 0)
```

In Swift 5.1 this has been enhanced so that the memberwise initializer now uses default parameter values for any properties that have them. In the `User` struct we’ve given `loginCount` a default value of 0, which means we can either specify it or leave it to the memberwise initializer:

```swift
let gloria = User(name: "Gloria Mendoza", loginCount: 0)
let suzanne = User(name: "Suzanne Warren")
```

This lets us avoid repeating code, which is always welcome.

---

## Implicit returns from single-expression functions

[SE-0255 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0255-omit-return.md) has removed a small but important inconsistency in the language: single-expression functions that return a value can now remove the `return` keyword and Swift will understand it implicitly.

In previous versions of Swift, single-line closures that returned a value you could omit the `return` keyword because the only line of code that was there *must* be the one that returned a value. So, these two pieces of code were identical:

```swift
let doubled1 = [1, 2, 3].map { $0 * 2 }
let doubled2 = [1, 2, 3].map { return $0 * 2 }
```

In Swift 5.1, this behavior has now been extended to functions as well: if they contain a single expression – effectively a single piece of code that evaluates to a value – then you can leave off the `return` keyword, like this:

```swift
func double(_ number: Int) -> Int {
    number * 2
}
```

That will probably cause some people to do a double take at first, but I’m sure it will become second nature over time.

---

## Universal `Self`

[SE-0068 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0068-universal-self.md) expands Swift’s use of `Self` so that it refers to the containing type when used inside classes, structs, and enums. This is particularly useful for *dynamic* types, where the exact type of something needs to be determined at runtime.

As an example, consider this code:

```swift
class NetworkManager {
    class var maximumActiveRequests: Int {
        return 4
    }

    func printDebugData() {
        print("Maximum network requests: \(NetworkManager.maximumActiveRequests).")
    }
}
```

That declares a static `maximumActiveRequests` property for a network manager, and adds a `printDebugData()` method to print the static property. That works fine right now, but when `NetworkManager` is subclassed things become more complicated:

```swift
class ThrottledNetworkManager: NetworkManager {
    override class var maximumActiveRequests: Int {
        return 1
    }
}
```

That subclass changes `maximumActiveRequests` so that it allows only one request at a time, but if we call `printDebugData()` it will print out the value from its parent class:

```swift
let manager = ThrottledNetworkManager()
manager.printDebugData()
```

That *should* print out 1 rather than 4, and that’s where SE-0068 comes in: we can now write `Self` (with a capital S) to refer to the current type. So, we can rewrite `printDebugData()` to this:

```swift
class ImprovedNetworkManager {
    class var maximumActiveRequests: Int {
        return 4
    }

    func printDebugData() {
        print("Maximum network requests: \(Self.maximumActiveRequests).")
    }
}
```

This means `Self` works the same way as it did for protocols in earlier Swift versions.

---

## Opaque return types

[SE-0244 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0244-opaque-result-types.md) introduces the concept of opaque types into Swift. An opaque type is one where we’re told about the capabilities of an object without knowing specifically what kind of object it is.

At first glance that sounds a lot like a protocol, but opaque return types take the concept of protocols significantly further because are able to work with associated types, they require the same type to be used internally each time, and they allow us to hide implementation details.

As an example, if we wanted to launch different kinds of fighters from a Rebel base we might write code like this:

```swift
protocol Fighter { }
struct XWing: Fighter { }

func launchFighter() -> Fighter {
    return XWing()
}

let red5 = launchFighter()
```

Whoever calls that function knows it will return some sort of `Fighter` but doesn’t know precisely what. As a result, we could add `struct YWing: Fighter { }` or other types, and have any of them be returned.

But there’s a problem: what if we wanted to check whether a specific fighter was Red 5? You *might* think the solution is to make `Fighter` conform to the `Equatable` protocol so we can use `==`. However, as soon as you do that Swift will throw up a particularly dreaded error for the `launchFighter` function: “Protocol 'Fighter' can only be used as a generic constraint because it has Self or associated type requirements.”

The “Self” part of that error is what is hitting us here. The `Equatable` protocol has to compare two instances of itself (“Self”) to see whether they are the same, but Swift has no guarantee that the two equatable things are remotely the same – we could be comparing a Fighter with an array of integers, for example.

Opaque types solve this problem because even though *we* just see a protocol being used, internally the Swift compiler knows exactly what that protocol actually resolves to – it knows it’s an `XWing`, an array of strings, or whatever.

To send back an opaque type, use the keyword `some` before your protocol name:

```swift
func launchOpaqueFighter() -> some Fighter {
    return XWing()
}
```

From the caller’s perspective that still gets back a `Fighter`, which might be an `XWing`, a `YWing`, or something else that conforms to the `Fighter` protocol. But from the *compiler’s* perspective it knows exactly what is being returned, so it can make sure we follow all the rules correctly.

For example, consider a function that returned `some Equatable` like this:

```swift
func makeInt() -> some Equatable {
    Int.random(in: 1...10)
}
```

When we call that, all we know is that it is some sort of `Equatable` value, however if call it twice then we can compare the results of those two calls because Swift knows for sure it will be the same underlying type:

```swift
let int1 = makeInt()
let int2 = makeInt()
print(int1 == int2)
```

The same is *not* true if we had a *second* function that returned `some Equatable`, like this:

```swift
func makeString() -> some Equatable {
    "Red"
}
```

Even though from our perspective both send us back an `Equatable` type, and we *can* compare the results of two calls to `makeString()` or two calls to `makeInt()`, Swift won’t let us compare the return value of `makeString()` to the return value of `makeInt()` because it knows comparing a string and an integer doesn’t make any sense.

An important proviso here is that functions with opaque return types must always return one specific type. If for example we tried to use `Bool.random()` to randomly launch an `XWing` or a `YWing` then Swift would refuse to build our code because the compiler can no longer tell what will be sent back.

You might well think “if we always need to return the same type, why not just write the function as `func launchFighter() -> XWing`? While that might work sometimes, it creates new problems such as:

- We end up with types we don’t really want to expose to the world. For example, if we used `someArray.lazy.drop { … }` we get sent back a `LazyDropWhileSequence` – a dedicated and highly specific type from the Swift standard library. All we actually care about is that this thing is a sequence; we don’t need to know how Swift’s internals work.
- We lose the ability to change our mind later. Making `launchFighter()` return only an `XWing` means we can’t switch to a different type in the future, and given how much Disney relies on Star Wars toy sales that would be a problem! By returning an opaque type we can return X-Wings today, then move to B-Wings in a year – we only ever return one in any given build of our code, but we can still have the flexibility to change our mind.

In some respects all this might sound similar to generics, which also solve the “Self or associated type requirements” problem. Generics allow us to write code like this:

```swift
protocol ImperialFighter {
    init()
}

struct TIEFighter: ImperialFighter { }
struct TIEAdvanced: ImperialFighter { }

func launchImperialFighter<T: ImperialFighter>() -> T {
    return T()
}
```

That defines a new protocol that requires conforming types to be initializable with no parameters, defines two structs that conform to that protocol, then creates a generic function to use it. However, the difference here is that now *callers* of `launchImperialFighter()` are the ones to choose what kind of fighter they get, like this:

```swift
let fighter1: TIEFighter = launchImperialFighter()
let fighter2: TIEAdvanced = launchImperialFighter()
```

If you *want* callers to be able to select their data type then generics work well, but if you want the *function* to decide the return type then they fall down;

So, opaque result types allow us to do several things:

- Our functions decide what type of data gets returned, not the caller of those functions.
- We don’t need to worry about Self or associated type requirements, because the compiler knows exactly what type is inside.
- We get to change our minds in the future whenever we need to.
- We don’t expose private internal types to the outside world.

---

## Static and class subscripts

[SE-0254 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0254-static-subscripts.md) adds the ability to mark subscripts as being *static*, which means they apply to types rather than instances of a type.

Static properties and methods are used when one set of values is shared between all instances of that type. For example, if you had one centralized type to store your app settings, you might write code like this:

```swift
public enum OldSettings {
    private static var values = [String: String]()

    static func get(_ name: String) -> String? {
        return values[name]
    }

    static func set(_ name: String, to newValue: String?) {
        print("Adjusting \(name) to \(newValue ?? "nil")")
        values[name] = newValue
    }
}

OldSettings.set("Captain", to: "Gary")
OldSettings.set("Friend", to: "Mooncake")
print(OldSettings.get("Captain") ?? "Unknown")
```

Wrapping the dictionary inside a type means that we can control access more carefully, and using an enum with no cases means we can’t try to instantiate the type – we can’t make various instances of `Settings`.

With Swift 5.1 we can now use a static subscript instead, allowing us to rewrite our code to this:

```swift
public enum NewSettings {
    private static var values = [String: String]()

    public static subscript(_ name: String) -> String? {
        get {
            return values[name]
        }
        set {
            print("Adjusting \(name) to \(newValue ?? "nil")")
            values[name] = newValue
        }
    }
}

NewSettings["Captain"] = "Gary"
NewSettings["Friend"] = "Mooncake"
print(NewSettings["Captain"] ?? "Unknown")
```

Custom subscripts like this have always been possible for instances of types; this improvement makes static or class subscripts possible too.

---

## Warnings for ambiguous `none` cases

Swift’s optionals are implemented as an enum of two cases: `some` and `none`. This gave rise to the possibility of confusion if we created our own enums that had a `none` case, then wrapped that inside an optional.

For example:

```swift
enum BorderStyle {
    case none
    case solid(thickness: Int)
}
```

Used as a non-optional this was always clear:

```swift
let border1: BorderStyle = .none
print(border1)
```

That will print “none”. But if we used an optional for that enum – if we didn’t know what border style to use – then we’d hit problems:

```swift
let border2: BorderStyle? = .none
print(border2)
```

That prints “nil”, because Swift assumes `.none` means the optional is empty, rather than an optional with the value `BorderStyle.none`.

In Swift 5.1 this confusion now prints a warning: “Assuming you mean 'Optional.none'; did you mean 'BorderStyle.none' instead?” This avoids the source compatibility breakage of an error, but at least informs developers that their code might not quite mean what they thought.

---

## Matching optional enums against non-optionals

Swift has always been smart enough to handle switch/case pattern matching between optionals and non-optionals for strings and integers, but before Swift 5.1 that wasn’t extended to enums.

Well, in Swift 5.1 we can now use switch/case pattern matching to match optional enums with non-optionals, like this:

```swift
enum BuildStatus {
    case starting
    case inProgress
    case complete
}

let status: BuildStatus? = .inProgress

switch status {
case .inProgress:
    print("Build is starting…")
case .complete:
    print("Build is complete!")
default:
    print("Some other build status")
}
```

Swift is able to compare the optional enum directly with the non-optional cases, so that code will print “Build is starting…”

---

## Ordered collection diffing

[SE-0240 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0240-ordered-collection-diffing.md) introduces the ability to calculate and apply the differences between ordered collections. This could prove particularly interesting for developers who have complex collections in table views, where they want to add and remove lots of items smoothly using animations.

The basic principle is straightforward: Swift 5.1 gives us a new `difference(from:)` method that calculates the differences between two ordered collections – what items to remove and what items to insert. This can be used with any ordered collection that contains `Equatable` elements.

To demonstrate this, we can create an array of scores, calculate the difference from one to the other, then loop over those differences and apply each one to make our two collections the same.

::: note

Because Swift now ships inside Apple’s operating systems, new features like this one must be used with an `#available` check to make sure the code is being run on an OS that includes the new functionality. For features that will land in an unknown, unannounced operating system shipping at some point in the future, a special version number of “9999” is used to mean “we don’t know what the actual number is just yet.”

:::

Here’s the code:

```swift
var scores1 = [100, 91, 95, 98, 100]
let scores2 = [100, 98, 95, 91, 100]

if #available(iOS 9999, *) {
    let diff = scores2.difference(from: scores1)

    for change in diff {
        switch change {
        case .remove(let offset, _, _):
            scores1.remove(at: offset)
        case .insert(let offset, let element, _):
            scores1.insert(element, at: offset)
        }
    }

    print(scores1)
}
```

For more advanced animations, you can use the third value of the changes: `associatedWith`. So, rather than using `.insert(let offset, let element, _)` above you might write `.insert(let offset, let element, let associatedWith)` instead. This lets you track pairs of changes at the same time: moving an item two places down in your collection is a removal then an insertion, but the `associatedWith` value ties those two changes together so you treat it as a move instead.

Rather than applying changes by hand, you can apply the whole collection using a new `applying()` method, like this:

```swift
if #available(iOS 9999, *) {
    let diff = scores2.difference(from: scores1)
    let result = scores1.applying(diff) ?? []
}
```

---

## Creating uninitialized arrays

[SE-0245 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0245-array-uninitialized-initializer.md) introduces a new initializer for arrays that doesn’t pre-fill values with a default. This was previously available as a private API, which meant Xcode wouldn’t list it in its code completion but you could still use it if you wanted – and if you were happy to take the risk that it wouldn’t be withdrawn in the future!

To use the initializer, tell it the capacity you want, then provide a closure to fill in the values however you need. Your closure will be given an unsafe mutable buffer pointer where you can write your values, as well as an `inout` second parameter that lets you report back how many values you actually used.

For example, we could make an array of 10 random integers like this:

```swift
let randomNumbers = Array<Int>(unsafeUninitializedCapacity: 10) { buffer, initializedCount in
    for x in 0..<10 {
        buffer[x] = Int.random(in: 0...10)
    }

    initializedCount = 10
}
```

There are some rules here:

1. You don’t need to use all the capacity you ask for, but you can’t go *over* capacity. So, if you ask for a capacity of 10 you can set `initializedCount` to 0 through 10, but not 11.
2. If you don’t initialize elements that end up being in your array – for example if you set `initializedCount` to 5 but don’t actually provide values for elements 0 through 4 – then they are likely to be filled with random data. This is A Bad Idea.
3. If you don’t set `initializedCount` it will be 0, so any data you assigned will be lost.

Now, we *could* have rewritten the above code using `map()`, like this:

```swift
let randomNumbers2 = (0...9).map { _ in Int.random(in: 0...10) }
```

That’s certainly easier to read, but it’s less efficient: it creates a range, creates a new empty array, sizes it up to the correct amount, loops over the range, and calls the closure once for each range item.

---

## More to come!

Swift 5.1 is still under development, and although the [<FontIcon icon="fa-brands fa-swift"/>final branching for Swift itself has passed](https://swift.org/blog/5-1-release-process/) there is still scope to see changes from some of the other associated projects. 

Again, the big feature here is module stability, and I know [<FontIcon icon="fa-brands fa-swift"/>the team are working hard on getting that right](https://forums.swift.org/t/update-on-module-stability-and-module-interface-files/23337). They don’t announce shipping dates, although [<FontIcon icon="fa-brands fa-swift"/>they have said](https://swift.org/blog/5-1-release-process/) that 5.1 “has a significantly shorter development” as a result of Swift 5.0 requiring “an unusual amount of focus and attention” – I’m guessing we’ll see a beta at WWDC19, but obviously this isn’t something to be rushed for a particular date.

One thing that deserves special mention is that two of the changes listed here weren’t introduced as a result of Swift Evolution. Instead, the changes – “Warnings for ambiguous `none` cases” and “Matching optional enums against non-optionals” – were picked up as bugs and corrected quickly.

These are great quality of life improvements in Swift, but the reason I’m calling them out specially is because they were both fixed by a community contributor: [<FontIcon icon="fa-brands fa-x-twitter"/>Suyash Srijan](https://x.com/suyashsrijan). It’s fantastic to see development of Swift continue to grow beyond Apple, and Suyash’s work on those two highly visible features is helping make Swift easier and more consistent for everyone.

Best of all, the ambiguous enum bug was filed as a starter bug, which is one that the Swift team have picked out specifically to make it easier for folks to get started contributing. If you’d like to explore the current starter bugs for yourself, and perhaps even take a shot at fixing one, visit [<FontIcon icon="fas fa-globe"/>http://bit.ly/starterbugs](http://bit.ly/starterbugs).

---

<TagLinks />