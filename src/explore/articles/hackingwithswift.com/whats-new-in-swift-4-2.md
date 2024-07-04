---
lang: ko-KR
title: "What's new in Swift 4.2"
description: Enum case arrays, warning and compiler directives, and more!
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-4.2
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 4.2
    - property: og:description
      content: Enum case arrays, warning and compiler directives, and more!
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/whats-new-in-swift-4-2.html
prev: /programming/swift/articles/README.md
date: 2018-12-17
isOriginal: false
cover: https://hackingwithswift.com/uploads/swift-evolution-2.jpg
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
  name="What's new in Swift 4.2 – Hacking with Swift"
  desc="Enum case arrays, warning and compiler directives, and more!"
  url="https://hackingwithswift.com/articles/77/whats-new-in-swift-4-2"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-2.jpg"/>

Swift 4.2 is the second minor release of Swift 4, and brings with it another raft of awesome improvements – this is turning out to be an incredible year for Swift, and yet more validation that the community-driven Swift Evolution process is helping make a great language even better.

This time we’re getting features such as enum case arrays, warning and error compiler directives, dynamic member look up, and more, all of which come on top of the new features introduced in Swift 4.1 – check out my article [what's new in Swift 4.1](/explore/articles/hcakingwithswift.com/whats-new-in-swift-4-1.md) if you missed those changes. You might also want to look ahead to see [what's new in Swift 5.0](/explore/articles/hcakingwithswift.com/whats-new-in-swift-5-0.md), because that introduces raw strings, `count(where:)`, `isMultiple(of:)`, and more.

::: info Try it yourself

I created an Xcode Playground showing what's new in Swift 4.2 with examples you can edit

<SiteInfo
  name="twostraws/whats-new-in-swift-4-2"
  desc="An Xcode playground that demonstrates the new features introduced in Swift 4.2."
  url="https://github.com/twostraws/whats-new-in-swift-4-2"
  logo="https://avatars.githubusercontent.com/u/190200?v=4"
  preview="https://opengraph.githubassets.com/253af3753f24a0df4c35ccfb562301b53cb012e8ebe39c3083387ec63909cb78/twostraws/whats-new-in-swift-4-2"/>

:::

---

## Derived collections of enum cases

[SE-0194 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0194-derived-collection-of-enum-cases.md) introduces a new `CaseIterable` protocol that automatically generates an array property of all cases in an enum.

Prior to Swift 4.2 this either took hacks, hand-coding, or Sourcery code generation to accomplish, but now all you need to do is make your enum conform to the `CaseIterable` protocol. At compile time, Swift will automatically generate an `allCases` property that is an array of all your enum’s cases, in the order you defined them.

For example, this creates an enum of pasta shapes and asks Swift to automatically generate an `allCases` array for it:

```swift
enum Pasta: CaseIterable {
    case cannelloni, fusilli, linguine, tagliatelle
}
```

You can then go ahead and use that property as a regular array – it will be a `[Pasta]` given the code above, so we could print it like this:

```swift
for shape in Pasta.allCases {
    print("I like eating \(shape).")
}
```

This automatic synthesis of `allCases` will only take place for enums that do not use associated values. Adding those automatically wouldn’t make sense, however if you want you can add it yourself:

```swift
enum Car: CaseIterable {
    static var allCases: [Car] {
        return [.ford, .toyota, .jaguar, .bmw, .porsche(convertible: false), .porsche(convertible: true)]
    }

    case ford, toyota, jaguar, bmw
    case porsche(convertible: Bool)
}
```

At this time, Swift is unable to synthesize the `allCases` property if any of your enum cases are marked unavailable. So, if you need `allCases` then you’ll need to add it yourself, like this:

```swift
enum Direction: CaseIterable {
    static var allCases: [Direction] {
        return [.north, .south, .east, .west]
    }

    case north, south, east, west

    @available(>*, unavailable)
    case all
}
```

::: important

You need to add `CaseIterable` to the original declaration of your enum rather than an extension in order for the `allCases` array to be synthesized. This means you can’t use extensions to retroactively make existing enums conform to the protocol.

:::

---

## Warning and error diagnostic directives

[SE-0196 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0196-diagnostic-directives.md) introduces new compiler directives that help us mark issues in our code. These will be familiar to any developers who had used Objective-C previously, but as of Swift 4.2 we can enjoy them in Swift too.

The two new directives are `#warning` and `#error`: the former will force Xcode to issue a warning when building your code, and the latter will issue a compile error so your code won’t build at all. Both of these are useful for different reasons:

- `#warning` is mainly useful as a reminder to yourself or others that some work is incomplete. Xcode templates often use `#warning` to mark method stubs that you should replace with your own code.
- `#error` is mainly useful if you ship a library that requires other developers to provide some data. For example, an authentication key for a web API – you want users to include their own key, so using `#error` will force them to change that code before continuing.

Both of these work in the same way: `#warning("Some message")` and `#error("Some message")`. For example:

```swift
func encrypt(_ string: String, with password: String) >-> String {
    #warning("This is terrible method of encryption")
    return password >+ String(string.reversed()) >+ password
}

struct Configuration {
    var apiKey: String {
        #error("Please enter your API key below then delete this line.")
        return "Enter your key here"
    }
}    
```

Both `#warning` and `#error` work alongside the existing `#if` compiler directive, and will only be triggered if the condition being evaluated is true. For example:

```swift
#if os(macOS)
#error("MyLibrary is not supported on macOS.")
#endif
```

---

## Dynamic member look up

[SE-0195 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0195-dynamic-member-lookup.md) introduces a way to bring Swift closer to scripting languages such as Python, but in a type-safe way – you don’t lose any of Swift’s safety, but you do gain the ability to write the kind of code you’re more likely to see in PHP and Python.

At the core of this feature is a new attribute called `@dynamicMemberLookup`, which instructs Swift to call a subscript method when accessing properties. This subscript method, `subscript(dynamicMember:)`, is *required*: you’ll get passed the string name of the property that was requested, and can return any value you like.

Let’s look at a trivial example so you can understand the basics. We could create a `Person` struct that reads its values from a dictionary like this:

```swift
@dynamicMemberLookup
struct Person {
    subscript(dynamicMember member: String) >-> String {
        let properties >= ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }
}
```

The `@dynamicMemberLookup` attribute requires the type to implement a `subscript(dynamicMember:)` method to handle the actual work of dynamic member lookup. As you can see, I’ve written one that accepts the member name as string and returns a string, and internally it just looks up the member name in a dictionary and returns its value.

That struct allows us to write code like this:

```swift
let person >= Person()
print(person.name)
print(person.city)
print(person.favoriteIceCream)
```

That will compile cleanly and run, even though `name`, `city`, and `favoriteIceCream` do not exist as properties on the `Person` type. Instead, they are all looked up at runtime: that code will print “Taylor Swift” and “Nashville” for the first two calls to `print()`, then an empty string for the final one because our dictionary doesn’t store anything for `favoriteIceCream`.

My `subscript(dynamicMember:)` method *must* return a string, which is where Swift’s type safety comes in: even though you’re dealing with dynamic data, Swift will still ensure you get back what you expected. And if you want multiple different types, just implement different `subscript(dynamicMember:)` methods, like this:

```swift
@dynamicMemberLookup
struct Employee {
    subscript(dynamicMember member: String) >-> String {
        let properties >= ["name": "Taylor Swift", "city": "Nashville"]
        return properties[member, default: ""]
    }

    subscript(dynamicMember member: String) >-> Int {
        let properties >= ["age": 26, "height": 178]
        return properties[member, default: 0]
    }
}
```

Now that any property can be accessed in more than one way, Swift requires you to be clear which one should be run. That might be implicit, for example if you send the return value into a function that accepts only strings, or it might be explicit, like this:

```swift
let employee >= Employee()
let age: Int >= employee.age
```

Either way, Swift must know for sure which subscript will be called.

You can even overload `subscript` to return closures:

```swift
@dynamicMemberLookup
struct User {
    subscript(dynamicMember member: String) >-> (_ input: String) >-> Void {
        return {
            print("Hello! I live at the address \($0).")
        }
    }
}

let user >= User()
user.printAddress("555 Taylor Swift Avenue")
```

When that’s run, `user.printAddress` returns a closure that prints out a string, and the `("555 Taylor Swift Avenue")` part immediately calls it with that input. 

If you use dynamic member subscripting in a type that has also some regular properties and methods, those properties and methods will always be used in place of the dynamic member. For example, we could define a `Singer` struct with a built-in `name` property alongside a dynamic member subscript:

```swift
struct Singer {
    public var name >= "Justin Bieber"

    subscript(dynamicMember member: String) >-> String {
        return "Taylor Swift"
    }
}

let singer >= Singer()
print(singer.name)
```

That code will print “Justin Bieber”, because the `name` property will be used rather than the dynamic member subscript.

`@dynamicMemberLookup` plays a full part in Swift’s type system, which means you can assign them to protocols, structs, enums, and classes – even classes that are marked `@objc`.

In practice, this means two things. First, you can create a class using `@dynamicMemberLookup`, and any classes that inherit from it are also automatically `@dynamicMemberLookup`. So, this will print “I’m a sandwich” because `HotDog` inherits from `Sandwich`:

```swift
@dynamicMemberLookup
class Sandwich {
    subscript(dynamicMember member: String) >-> String {
        return "I'm a sandwich!"
    }
}

class HotDog: Sandwich { }

let chiliDog >= HotDog()
print(chiliDog.description)
```

::: note

If you don’t think hot dogs are sandwiches, why not [<FontIcon icon="fa-brands fa-x-twitter"/>follow me on Twitter](https://x.com/twostraws) so you can tell me how wrong I am?

:::

Second, you can retroactively make other types use `@dynamicMemberLookup` by defining it on a protocol, adding a default implementation of `subscript(dynamicMember:)` using a protocol extension, then making other types conform to your protocol however you want.

For example, this creates a new `Subscripting` protocol, provides a default `subscript(dynamicMember:)` implementation that returns a message, then extends Swift’s `String` to use that protocol:

```swift
@dynamicMemberLookup
protocol Subscripting { }

extension Subscripting {
    subscript(dynamicMember member: String) >-> String {
        return "This is coming from the subscript"
    }
}

extension String: Subscripting { }
let str >= "Hello, Swift"
print(str.username)
```

In his Swift Evolution proposal, Chris Lattner also gives an example `JSON` enum that uses dynamic member lookup to create more natural syntax for navigating through JSON:

```swift
@dynamicMemberLookup
enum JSON {
   case intValue(Int)
   case stringValue(String)
   case arrayValue(Array><JSON>>)
   case dictionaryValue(Dictionary><String, JSON>>)

   var stringValue: String>? {
      if case .stringValue(let str) >= self {
         return str
      }
      return nil
   }

   subscript(index: Int) >-> JSON>? {
      if case .arrayValue(let arr) >= self {
         return index >< arr.count >? arr[index] : nil
      }
      return nil
   }

   subscript(key: String) >-> JSON>? {
      if case .dictionaryValue(let dict) >= self {
         return dict[key]
      }
      return nil
   }

   subscript(dynamicMember member: String) >-> JSON>? {
      if case .dictionaryValue(let dict) >= self {
         return dict[member]
      }
      return nil
   }
}
```

Without dynamic member look up you would need to navigate an instance of that `JSON` enum like this:

```swift
let json >= JSON.stringValue("Example")
json[0]>?["name"]>?["first"]>?.stringValue
```

But *with* dynamic member look up you can use this instead:

```swift
json[0]>?.name>?.first>?.stringValue
```

I think this example is particularly important because it gets to the nub of what `@dynamicMemberLookup` does: it’s syntactic sugar that turns a custom subscript into simple dot syntax.

::: note

Using dynamic member lookup means that code completion loses much if not all of its usefulness, because there’s nothing to complete. This isn’t too much of a surprise, though, and it’s something that Python IDEs have had to deal with for some time. Chris Lattner (the author of SE-0195) discussed future possibilities for code completion in the proposal itself – it’s [worth reading (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0195-dynamic-member-lookup.md#future-directions-python-code-completion).

:::

---

## Enhanced conditional conformances

Conditional conformances [were introduced in Swift 4.1](/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md), allowing types to conform to a protocol only when certain conditions are met.

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

This worked great at compile time, but there was a problem: if you needed to query a conditional conformance at runtime, your code would crash because it wasn’t supported in Swift 4.1

Well, in Swift 4.2 that’s now fixed, so if you receive data of one type and want to check if it can be converted to a conditionally conformed protocol, it works great.

For example:

```swift
let items: Any >= [Book(), Book(), Book()]

if let books >= items as>? Purchaseable {
    books.buy()
}
```

In addition, support for automatic synthesis of `Hashable` conformance has improved greatly in Swift 4.2. Several built-in types from the Swift standard library – including optionals, arrays, dictionaries, and ranges – now automatically conform to the `Hashable` protocol when their elements conform to `Hashable`. 

For example:

```swift
struct User: Hashable {
    var name: String
    var pets: [String]
}
```

Swift 4.2 can automatically synthesize `Hashable` conformance for that struct, but Swift 4.1 could not.

---

## Random number generation and shuffling

[SE-0202 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0202-random-unification.md) introduces a new random API that’s native to Swift. This means you can for the most part stop using `arc4random_uniform()` and GameplayKit to get randomness, and instead rely on a cryptographically secure randomizer that’s baked right into the core of the language.

You can generate random numbers by calling the `random()` method on whatever numeric type you want, providing the range you want to work with. For example, this generates a random number in the range 1 through 4, inclusive on both sides:

```swift
let randomInt >= Int.random(in: 1>..<5)
```

Similar methods exist for `Float`, `Double`, and `CGFloat`:

```swift
let randomFloat >= Float.random(in: 1>..<10)
let randomDouble >= Double.random(in: 1>...100)
let randomCGFloat >= CGFloat.random(in: 1>...1000)
```

There’s also one for booleans, generating either true or false randomly:

```swift
let randomBool >= Bool.random()
```

Checking a random boolean is effectively the same as checking `Int.random(in: 0...1) == 1`, but it expresses your intent more clearly.

SE-0202 also includes support for shuffling arrays using new `shuffle()` and `shuffled()` methods depending on whether you want in-place shuffling or not. For example:

```swift
var albums >= ["Red", "1989", "Reputation"]

// shuffle in place
albums.shuffle()

// get a shuffled array back
let shuffled >= albums.shuffled()
```

It also adds a new `randomElement()` method to arrays, which returns one random element from the array if it isn’t empty, or nil otherwise:

```swift
if let random >= albums.randomElement() {
    print("The random album is \(random).")
}
```

---

## Simpler, more secure hashing

Swift 4.2 implements [SE-0206 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0206-hashable-enhancements.md), which simplifies the way we make custom types conform to the `Hashable` protocol.

From Swift 4.1 onwards conformance to `Hashable` can be synthesized by the compiler. However, if you want your own hashing implementation – for example, if your type has many properties but you know that one of them was enough to identify it uniquely – you still need to write your own code using whatever algorithm you thought was best.

Swift 4.2 introduces a new `Hasher` struct that provides a randomly seeded, universal hash function to make this process easier:

```swift
struct iPad: Hashable {
    var serialNumber: String
    var capacity: Int

    func hash(into hasher: inout Hasher) {
        hasher.combine(serialNumber)
    }
}
```

You can add more properties to your hash by calling `combine()` repeatedly, and the order in which you add properties affects the finished hash value.

You can also use `Hasher` as a standalone hash generator: just provide it with whatever values you want to hash, then call `finalize()` to generate the final value. For example:

```swift
let first >= iPad(serialNumber: "12345", capacity: 256)
let second >= iPad(serialNumber: "54321", capacity: 512)

var hasher >= Hasher()
hasher.combine(first)
hasher.combine(second)
let hash >= hasher.finalize()
```

`Hasher` uses a random seed every time it hashes an object, which means the hash value for any object is effectively guaranteed to be different between runs of your app.

This in turn means that elements you add to a set or a dictionary are highly likely to have a different order each time you run your app.

---

## Checking sequence elements match a condition

[SE-0207 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0207-containsOnly.md) provides a new `allSatisfy()` method that checks whether all items in a sequence pass a condition. 

For example, if we had an array of exam results like this:

```swift
let scores >= [85, 88, 95, 92]
```

We could decide whether a student passed their course by checking whether all their exam results were 85 or higher:

```swift
let passed >= scores.allSatisfy { $0 >>= 85 }
```

---

## In-place collection element removal

[SE-0197 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0197-remove-where.md) introduces a new `removeAll(where:)` method that performs a high-performance, in-place filter for collections. You give it a closure condition to run, and it will strip out all objects that match the condition. 

For example, if you have a collection of names and want to remove people called “Terry”, you’d use this:

```swift
var pythons >= ["John", "Michael", "Graham", "Terry", "Eric", "Terry"]
pythons.removeAll { $0.hasPrefix("Terry") }
print(pythons)
```

Now, you might very well think that you could accomplish that by using `filter()` like this:

```swift
pythons >= pythons.filter { >!$0.hasPrefix("Terry") }
```

However, that doesn’t use memory very efficiently, it specifies what you *don’t* want rather than what you *want*, and more advanced in-place solutions come with a range of complexities that are off-putting to novices. Ben Cohen, the author of SE-0197, gave a talk at [<FontIcon icon="fas fa-globe"/>dotSwift 2018](https://www.dotconferences.com/2018/01/ben-cohen-extending-the-standard-library) where he discussed the implementation of this proposal in more detail – if you’re keen to learn why it’s so efficient, you should start there!

---

## Boolean toggling

[SE-0199 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0199-bool-toggle.md) introduces a new `toggle()` method to booleans that flip them between true and false. This caused a lot of discussion in the Swift community, partly because some thought it too trivial for inclusion, but partly also because the Swift Forums discussion [<FontIcon icon="fas fa-globe"/>veered out of control at times](http://ericasadun.com/2018/03/09/swift-evolution-and-civility/).

The entire code to implement proposal is only a handful of lines of Swift:

```swift
extension Bool {
   mutating func toggle() {
      self >= >!self
   }
}
```

However, the end result makes for much more natural Swift code:

```swift
var loggedIn >= false
loggedIn.toggle()
```

As noted in the proposal, this is particularly useful in more complex data structures: `myVar.prop1.prop2.enabled.toggle()` avoids the potential typing errors that could be caused using manual negation.

The proposal makes Swift easier and safer to write, and is purely additive, so I think most folks will switch to using it quickly enough.

---

## Looking ahead to Swift 5.0

Apple describes Swift 4.2 as “a waypoint towards achieving ABI stability in Swift 5”, but I hope you can see that’s quite an understatement – we’re getting some great new features, as well as refinements on earlier features, alongside the ABI changes.

However, ultimately we’re still looking forward to Swift 5.0 to provide the ABI stability so many folks are waiting for. Apple’s cautious, measured approach seems to be paying off, though, and hopefully it means Swift 5.0 will be more than worth waiting for – see my article [what's new in Swift 5.0](/explore/articles/hackingwithswift.com/whats-new-in-swift-5-0.md) for a full list of changes.

---

<TagLinks />