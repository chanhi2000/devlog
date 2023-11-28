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

---

## Defining Protocol-Conforming Types

---

## Extending Protocols With Default Implementations

---

## Enums Can Play, Too

---

## Overriding Default Behavior

---

## Extending Protocols

---

## Effects on the Swift Standard Library

---

## Off to the Races

---

### Bringing It All Together

### Top Speed

### Making It More Generic

### Making It More Swifty

---

## Protocol Comparators

---

## Mutating Functions

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