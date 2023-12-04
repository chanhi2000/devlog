---
lang: ko-KR
title: Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
description: 🕊️Kodeco - Swift > Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
    content: Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
  - property: og:title
    content: Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
  - property: og:description
    content: 🕊️Kodeco - Swift > Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/swift-kodeco/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started
desc: In this protocol-oriented programming tutorial, you’ll learn about extensions, default implementations and other techniques to add abstraction to your code. 
link: https://www.kodeco.com/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-language-ios-c8cae19f3d83ea7062fbae593cd0bb3c096e9788cad03bb69b11c1e042a6bb47.svg
color: rgba(135, 99, 210, 0.2)
```

---

::: note Update

Andy Pereira updated this tutorial for Swift 5.1 and Xcode 11. Erik Kerber wrote the original.

:::

__Protocols__ are a fundamental feature of Swift. They play a leading role in the structure of the Swift standard library and are a common method of abstraction. They provide a similar experience to interfaces that some other languages have.

This tutorial will introduce you to a software engineering practice called __protocol-oriented programming__, which has become somewhat a fundamental in Swift. It really is something you need to grasp if you’re learning Swift!

In this tutorial, you’ll learn about:

- The difference between object-oriented and protocol-oriented programming.
- Protocols with default implementations.
- Extending the Swift standard library.
- Further extending protocols with generics.

What are you waiting for? Time to start your Swift engines!

::: note Note

This tutorial assumes you know the basics of Swift development and more advanced topics like generics. If you are new to Swift development, check [out Swift Tutorial for Beginners](https://www.raywenderlich.com/6338-swift-tutorial-part-1-expressions-variables-and-constants) and [Swift Generics Tutorial: Getting Started](https://www.raywenderlich.com/3535703-swift-generics-tutorial-getting-started) beforehand.

:::

---

## Getting Started

Imagine you’re developing a racing video game. You want players to be able to drive cars, ride motorcycles and pilot planes. They can even ride different birds — because it’s a video game — and you can drive whatever you want! The key here is that there are lots of different “things” that can be driven or piloted.

A common approach for this type of app is [object-oriented programming](https://www.raywenderlich.com/81952/intro-object-oriented-design-swift-part-1), where you can encapsulate all of the logic inside base classes that other classes then inherit from. The base classes would have the “drive” and “pilot” logic in them.

You start programming your game by creating classes for each vehicle. Put a pin in the bird concept for now. You’ll work on that later.

As you code, you notice that `Car` and `Motorcycle` share some functionality, so you create a base class called `MotorVehicle` and add them to it. `Car` and `Motorcycle` then inherit from `MotorVehicle`. You also design a base class called `Aircraft` that `Plane` inherits from.

You think, “This is going great.” But wait! Your racing game is set in the year 30XX, and some cars can fly.

Now, you face a predicament. Swift doesn’t support multiple inheritance. How can your flying cars inherit from both `MotorVehicle` and `Aircraft`? Do you create another base class that merges the two functionalities? Probably not, since there’s no clean and easy way to do this.

Who will save your racing game from this disastrous dilemma? __Protocol-oriented programming__ to the rescue!

![Our hero, protocol-oriented programming Swift, flying to the rescue](https://koenig-media.raywenderlich.com/uploads/2019/12/mascot_swifty-superhero-blue-500x500.png)

Why Protocol-Oriented Programming?

---

## Hatching the Egg

Begin by opening Xcode and then creating a new playground named <FontIcon icon="fas fa-dove"/>`SwiftProtocols.playground`. Then add this code to it:

```swift
protocol Bird {
  var name: String { get }
  var canFly: Bool { get }
}

protocol Flyable {
  var airspeedVelocity: Double { get }
}
```

Build the playground with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Return</kbd> to make sure that it compiles properly.

This code defines a simple protocol, `Bird`, with properties `name` and `canFly`. It then defines a protocol called `Flyable`, which has the property `airspeedVelocity`.

In the pre-protocol days of yore, developers would start with `Flyable` as a base class and then rely on object inheritance to define `Bird` and any other things that fly.

But in protocol-oriented programming, everything starts as a protocol. This technique allows you to encapsulate the functional concept without needing a base class.

As you’re about to see, this makes the entire system much more flexible when defining types.

---

## Defining Protocol-Conforming Types

Start by adding the following `struct` definition to the bottom of the playground:

```swift
struct FlappyBird: Bird, Flyable {
  let name: String
  let flappyAmplitude: Double
  let flappyFrequency: Double
  let canFly = true

  var airspeedVelocity: Double {
    3 * flappyFrequency * flappyAmplitude
  }
}
```

This code defines a new `struct` named `FlappyBird` that conforms to both the `Bird` and `Flyable` protocols. Its `airspeedVelocity` is a computed property comprising of `flappyFrequency` and `flappyAmplitude`. Being flappy, it returns `true` for `canFly`.

Next, add the following two `struct` definitions to the bottom of the playground:

```swift
struct Penguin: Bird {
  let name: String
  let canFly = false
}

struct SwiftBird: Bird, Flyable {
  var name: String { "Swift \(version)" }
  let canFly = true
  let version: Double
  private var speedFactor = 1000.0
  
  init(version: Double) {
    self.version = version
  }

  // Swift is FASTER with each version!
  var airspeedVelocity: Double {
    version * speedFactor
  }
}
```

A `Penguin` is a `Bird`, but it cannot fly. Good thing you didn’t take the inheritance approach and make all birds `Flyable`!

Using protocols, you can define functional components and have any relevant object conform to them.

You then declare `SwiftBird`, but in our game there are different versions of `SwiftBird`. The higher the `version` property is, the faster its `airspeedVelocity` as defined by the computed property.

However, you can see there are redundancies. Every type of `Bird` has to declare whether it `canFly` or not — even though a notion of `Flyable` already exists in your system. It’s almost like you need a way to define default implementations of protocol methods. Well, that’s where protocol extensions come in.

---

## Extending Protocols With Default Implementations

Protocol extensions allow you to define a protocol’s default behavior. To implement your first one, insert the following just below the `Bird` protocol definition:

```swift
extension Bird {
  // Flyable birds can fly!
  var canFly: Bool { self is Flyable }
}
```

This code defines an extension on `Bird`. It sets the default behavior for `canFly` to return true whenever the type conforms to the Flyable protocol. In other words, any `Flyable` bird no longer needs to explicitly declare it `canFly`. It will simply fly, as most birds do.

Now delete the `let canFly = ...` from `FlappyBird`, `Penguin` and `SwiftBird`. Build the playground again. You’ll notice that the playground still builds successfully because the protocol extension now handles that requirement.

---

## Enums Can Play, Too

`Enum` types in Swift are much more powerful than enums from C and C++. They adopt many features that only `class` or `struct` types traditionally support, meaning they can conform to protocols.

Add the following `enum` definition to the end of the playground:

```swift
enum UnladenSwallow: Bird, Flyable {
  case african
  case european
  case unknown
  
  var name: String {
    switch self {
    case .african:
      return "African"
    case .european:
      return "European"
    case .unknown:
      return "What do you mean? African or European?"
    }
  }
  
  var airspeedVelocity: Double {
    switch self {
    case .african:
      return 10.0
    case .european:
      return 9.9
    case .unknown:
      fatalError("You are thrown from the bridge of death!")
    }
  }
}
```


By defining the correct properties, `UnladenSwallow` conforms to the two protocols `Bird` and `Flyable`. Because it’s such a conformist, it also enjoys default implementation for `canFly`.

Did you really think a tutorial involving `airspeedVelocity` could pass up a Monty Python reference? 

---

## Overriding Default Behavior

Your `UnladenSwallow` type automatically received an implementation for `canFly` by conforming to the `Bird` protocol. However, you want `UnladenSwallow.unknown` to return `false` for `canFly`.

Can you override the default implementation? You bet. Go back to the end of your playground and add some new code:

```swift
extension UnladenSwallow {
  var canFly: Bool {
    self != .unknown
  }
}
```

Now only `.african` and `.european` will return `true` for `canFly`. Try it out! Add the following code at the end of your playground:

```swift
UnladenSwallow.unknown.canFly         // false
UnladenSwallow.african.canFly         // true
Penguin(name: "King Penguin").canFly  // false
```

Build the playground and you’ll notice it shows the values as given in the comments above.

In this way, you override properties and methods much like you can with __virtual methods__ in object-oriented programming.

---

## Extending Protocols

You can also conform your own protocols to other protocols from the Swift standard library and define _default_ behaviors. Replace your Bird protocol declaration with the following code:

```swift
protocol Bird: CustomStringConvertible {
  var name: String { get }
  var canFly: Bool { get }
}

extension CustomStringConvertible where Self: Bird {
  var description: String {
    canFly ? "I can fly" : "Guess I'll just sit here :["
  }
}
```

Conforming to `CustomStringConvertible` means your type needs to have a `description` property so it be converted to a `String` automatically when needed. Instead of adding this property to every current and future `Bird` type, you’ve defined a protocol extension that `CustomStringConvertible` will only associate with types of `Bird`.

Try it out by entering the following at the bottom of the playground:

```swift
UnladenSwallow.african
```

Build the playground and you should see “`I can fly`” appear in the assistant editor. Congratulations! You’ve extended your protocol.

---

## Effects on the Swift Standard Library

Protocol extensions can’t grip a one-pound coconut by the husk, but as you’ve seen, they can provide an efficient method for customizing and extending the capabilities of named types. The Swift team also employed protocols to improve the Swift standard library.

Add this code to the end of your playground:

```swift
let numbers = [10, 20, 30, 40, 50, 60]
let slice = numbers[1...3]
let reversedSlice = slice.reversed()

let answer = reversedSlice.map { $0 * 10 }
print(answer)
```

You may be able to guess the printed answer, but what might surprise you are the types involved.

For example, `slice` is not an `Array<Int>` but an `ArraySlice<Int>`. This special __wrapper type__ acts as a view into the original array, offering a fast and efficient way to perform operations on sections of a larger array. Similarly, `reversedSlice` is a `ReversedCollection<ArraySlice<Int>>`, another wrapper type with a view into the original array.

Fortunately, the wizards developing the Swift standard library defined the map function as an extension to the `Sequence` protocol, which all `Collection` types conform to. This lets you call `map` on `Array` as easily as on `ReversedCollection` and not notice the difference. You’ll borrow this important design pattern shortly.

---

## Off to the Races

So far, you’ve defined several types that conform to `Bird`. You’ll now add something completely different at the end of your playground:

```swift
class Motorcycle {
  init(name: String) {
    self.name = name
    speed = 200.0
  }

  var name: String
  var speed: Double
}
```

This class has nothing to do with birds or flying. You just want to race motorcycles against penguins. It’s time to bring these wacky racers to the starting line.

---

### Bringing It All Together

To unify these disparate types, you need a common protocol for racing. You can manage this without even touching the original model definitions thanks to a fancy idea called __retroactive modeling__. Just add the following to your playground:

```swift
// 1
protocol Racer {
  var speed: Double { get }  // speed is the only thing racers care about
}

// 2
extension FlappyBird: Racer {
  var speed: Double {
    airspeedVelocity
  }
}

extension SwiftBird: Racer {
  var speed: Double {
    airspeedVelocity
  }
}

extension Penguin: Racer {
  var speed: Double {
    42  // full waddle speed
  }
}

extension UnladenSwallow: Racer {
  var speed: Double {
    canFly ? airspeedVelocity : 0.0
  }
}

extension Motorcycle: Racer {}

// 3
let racers: [Racer] =
  [UnladenSwallow.african,
   UnladenSwallow.european,
   UnladenSwallow.unknown,
   Penguin(name: "King Penguin"),
   SwiftBird(version: 5.1),
   FlappyBird(name: "Felipe", flappyAmplitude: 3.0, flappyFrequency: 20.0),
   Motorcycle(name: "Giacomo")]
```

Here’s what this does:

1. First, define the protocol `Racer`. This protocol defines anything that can be raced in your game.
2. Then, conform everything to `Racer` so that all our existing types can be raced. Some types, such as `Motorcycle`, conform trivially. Others, such as `UnladenSwallow`, need a bit more logic. Either way, when you’re done you have a bunch of conforming `Racer` types.
3. With all of the types at the starting line, you now create an `Array<Racer>` which holds an instance of each of the types you’ve created.

Build the playground to check everything compiles.

### Top Speed

It’s time to write a function that determines the top speed of the racers. Add the following code to the end of your playground:

```swift
func topSpeed(of racers: [Racer]) -> Double {
  racers.max(by: { $0.speed < $1.speed })?.speed ?? 0.0
}

topSpeed(of: racers) // 5100
```

This function uses the Swift standard library function `max` to find the racer with the highest speed and return it. It returns 0.0 if the user passes in an empty `Array` in for `racers`.

Build the playground and you'll see that the max speed of the racers you created earlier is indeed `5100`.

### Making It More Generic

Suppose `Racers` is rather large, and you only want to find the top speed for a subset of the participants. The solution is to alter `topSpeed(of:)` to take anything that's a `Sequence` instead of the concrete `Array`.

Replace your existing implementation of `topSpeed(of:)` with the following function:

```swift
// 1
func topSpeed<RacersType: Sequence>(of racers: RacersType) -> Double
    /*2*/ where RacersType.Iterator.Element == Racer {
  // 3
  racers.max(by: { $0.speed < $1.speed })?.speed ?? 0.0
}
```

This one may look a bit scary, but here's how it breaks down:

1. `RacersType` is the generic type for this function. It can be any type that conforms to the Swift standard library's `Sequence` protocol.
2. The where clause specifies that the `Element` type of the `Sequence` must conform to your `Racer` protocol to use this function.
3. The actual function body is the same as before.

Now add the following code to the bottom of your playground:

```swift
topSpeed(of: racers[1...3]) // 42
```

Build the playground and you'll see an answer of 42 as the output. The function now works for any `Sequence` type including `ArraySlice`.

### Making It More Swifty

Here's a secret: You can do even better. Add this at the end of your playground:

```swift
extension Sequence where Iterator.Element == Racer {
  func topSpeed() -> Double {
    self.max(by: { $0.speed < $1.speed })?.speed ?? 0.0
  }
}

racers.topSpeed()        // 5100
racers[1...3].topSpeed() // 42
```

Borrowing from the Swift standard library playbook, you've now extended `Sequence` itself to have a `topSpeed()` function. The function is easily discoverable and only applies when you are dealing with a `Sequence` of `Racer` types.

---

## Protocol Comparators

Another feature of Swift protocols is how you denote operator requirements such as equality of objects for `==` or how to compare objects for `>` and `<`. You know the deal — add the following code to the bottom of your playground:

```swift
protocol Score {
  var value: Int { get }
}

struct RacingScore: Score {
  let value: Int
}
```

Having a `Score` protocol means you can write code that treats all scores the same way. But by having different concrete types, such as `RacingScore`, you won't mix up these scores with style scores or cuteness scores. Thanks, compiler!

You want scores to be comparable so you can tell who has the highest score. Before Swift 3, developers needed to add global operator functions to conform to these protocols. Today, you can define these static methods as part of the model. Do so by replacing the definition of `Score` and `RacingScore` with the following:

```swift
protocol Score: Comparable {
  var value: Int { get }
}

struct RacingScore: Score {
  let value: Int
  
  static func <(lhs: RacingScore, rhs: RacingScore) -> Bool {
    lhs.value < rhs.value
  }
}
```

Nice! You've encapsulated all of the logic for `RacingScore` in one place. `Comparable` only requires you to provide an implementation for the less-than operator. The rest of the operators for comparison, like greater-than, have default implementations provided by the Swift standard library based on the less-than operator.

Test your newfound operator skills with the following line of code at the bottom of your playground:

```swift
RacingScore(value: 150) >= RacingScore(value: 130) // true
```

Build the playground and you'll notice that the answer is `true` as expected. You can now compare scores!

---

## Mutating Functions

So far, every example you've implemented has demonstrated how to add functionality. But what if you want to have a protocol define something that changes an aspect of your object? You can do this by using __mutating methods__ in your protocol.

At the bottom of the playground, add the following new protocol:

```swift
protocol Cheat {
  mutating func boost(_ power: Double)
}
```

This defines a protocol that gives your type the ability to cheat. How? By adding a boost to anything you feel is appropriate.

Next, create an extension on `SwiftBird` that conforms to `Cheat` with the following code:

```swift
extension SwiftBird: Cheat {
  mutating func boost(_ power: Double) {
    speedFactor += power
  }
}
```

Here, you implement `boost(_:)` and make `speedFactor` increase by the `power` passed in. You add the `mutating` keyword to let the `struct` know one of its values will change within this function.

Add the following code to the playground to see how this works:

```swift
var swiftBird = SwiftBird(version: 5.0)
swiftBird.boost(3.0)
swiftBird.airspeedVelocity // 5015
swiftBird.boost(3.0)
swiftBird.airspeedVelocity // 5030
```

Here, you've created a `SwiftBird` that is mutable, and you boosted its velocity by three and then by three again. Build the playground and you should notice that the `airspeedVelocity` of the `SwiftBird` has increased with each boost.

---

## Where to Go From Here?

Use the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial to download the completed playground.

At this point, you've tested the power of protocol-oriented programming by creating simple protocols and expanding them with protocol extensions. With default implementations, you can give existing protocols common and automatic behavior. This is like a base class only better, since they can apply to `struct` and `enum` types too.

You've also seen that protocol extensions can extend and provide default behavior to protocols in the Swift standard library, Cocoa, Cocoa Touch or any third-party library.

To continue learning more about protocols, read the [official Swift documentation](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html).

You can view an [excellent WWDC session](https://developer.apple.com/videos/wwdc/2015/?id=408) on protocol-oriented programming on Apple's developer portal. It provides an in-depth exploration of the theory behind it all.

Read more about the rationale for operator conformance in its [Swift evolution proposal](https://github.com/apple/swift-evolution/blob/master/proposals/0091-improving-operators-in-protocols.md). You may also want to learn more about Swift `Collection` protocols and [learn how to build your own](https://www.raywenderlich.com/139591/building-custom-collection-swift).

As with any programming paradigm, it's easy to get overly exuberant and use it for all the things. This interesting [blog post by Chris Eidhof](http://chris.eidhof.nl/post/protocol-oriented-programming/) reminds readers that they should beware of silver-bullet solutions. Don't use protocols everywhere "just because."

Have any questions? Let us know in the forum discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2019/12/Protocol_Oriented_Programming_Materials-1.zip