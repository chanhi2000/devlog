---
lang: ko-KR
title: "Swift for C++ Practitioners, Part 3: Extensions and Access Control"
description: "Article(s) > Swift for C++ Practitioners, Part 3: Extensions and Access Control"
icon: fa-brands fa-swift
category: 
  - Swift
  - Cpp
  - Article(s)
tag: 
  - blog
  - douggregor.net
  - swift
  - ios
  - c++
  - cpp
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Swift for C++ Practitioners, Part 3: Extensions and Access Control"
    - property: og:description
      content: "Swift for C++ Practitioners, Part 3: Extensions and Access Control"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/douggregor.net/swift-for-cpp-practitioners-3.html
prev: /programming/swift/articles/README.md
date: 2024-03-01
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

```component VPCard
{
  "title": "C++ > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cpp/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Swift for C++ Practitioners, Part 3: Extensions and Access Control | Doug's Compiler Corner",
  "desc": "Swift for C++ Practitioners, Part 3: Extensions and Access Control",
  "link": "https://www.douggregor.net/posts/swift-for-cxx-practitioners-extensions/",
  "background": "rgba(22,22,22,0.2)"
}
```

Let's take a short break from the Swift type system to talk a bit about code organization in Swift, which is quite different from how it's handled in C++. This post will cover Swift's extensions, modules, and access control. I'll throw in some other little expressivity tricks like computed properties and subscripts as well.

---

## Free function or member function?

In C++, whenever we want to introduce a new function for a type `X`, we have two choices: create a "free function" (at namespace scope) or a member function (which lives inside the class). The choice impacts a number of things: the syntax you use to call the function (`f(x)` vs. `x.f()`), which header can declare the function, how access control works, and so on.

Much of the advice in the C++ community says that we should [<FontIcon icon="fas fa-globe"/>prefer free functions to member functions](https://danielsieger.com/blog/2023/05/01/cpp-member-vs-free-functions.html). There are a number of very good reasons why:

- Free functions can be added by anyone, not just the author of the class, so they are more general.
- Free functions can be kept local to a single implementation file (e.g., by making them `static` or putting them in an anonymous namespace).
- Free functions make for better customization points in templates, because they can be added for any existing type, including built-in types. (This is why [<FontIcon icon="iconfont icon-cpp"/>`std::begin`](https://en.cppreference.com/w/cpp/iterator/begin) and [<FontIcon icon="iconfont icon-cpp"/>`std::end`](https://en.cppreference.com/w/cpp/iterator/end) exist, for example).

The problem is that free functions are more clunky to use than member functions. Many functions naturally operate on some primary value, and writing `x.f()` or `x->g()` is clearer than `f(x)` or `g(*x)` for operating on a value of `x`. Member functions are more discoverable by documentation and tools---it's far easier to look at the documentation for members of `std::vector` than it is to look through all of the algorithms in `std::` that might apply to an instance of [<FontIcon icon="iconfont icon-cpp"/>`std::vector`](https://en.cppreference.com/w/cpp/container/vector), and code completion after `x.` or `x->` gives useful context for finding the function you're looking for while writing code. Moreover, member functions compose together nicely when you're operating on the resulting value of each function, e.g., `x.f().g().h()`. Writing that same chained operation with free functions involves inverting the logic to `h(g(f(x)))`. It's okay, but it's harder to read, and harder to write.

All of these are small things by themselves, but together they make it hard to justify following the advice to "prefer free functions to member functions." The end result of following that advice might be more flexible, but it's harder to use. So we end up not following the advice, or duplicating functionality, like how `std::begin` wraps `std::vector::begin` because the former is more general but the latter is more usable.

---

## Extensions

In Swift, you can add new members to any type by writing an *extension* of that type. For example, let's say that we have a simple struct representing a point in 2-D space:

```swift
struct Point {
  var x: Double
  var y: Double
}
```

And then we'd like to add some new operations to `Point`. For example, let's create some operations that can help move the point around in space: one to move it by some amount in the x or y coordinates, another to flip it over the horizontal or vertical axis. These could be free functions, but it's nicer to use an extension to make them member functions like this:

```swift
extension Point {
  func translated(deltaX: Double, deltaY: Double) -> Point {
    Point(x: x + deltaX, y: y + deltaY)
  }
  
  func flipped(axis: Axis) -> Point {
    switch axis {
      case .horizontal: Point(x: x, y: -y)
      case .vertical: Point(x: -x, y: y)
    }
  }
}
```

Now, we can go ahead and use these member functions together:

```swift
let p2 = p1.translated(deltaX: 1, deltaY: -0.5)
  .flipped(axis: .horizontal)
```

Anyone can add an extension to any type. So long as the extension is visible to you, the members added via extension are used exactly the same way as members that were defined with the original type. Extensions allow one to organize the different aspects of a type's API: the data members, initializers, primary operations, and (for a class) deinitializer and overridable methods go into the primary definition of the type, which must contain all of the information needed to determine how the type is laid out in memory. From there, any number of extensions can be used to provide different conceptual slices of the type's API. The `Point` extension above provides the APIs that move the point around in space. Another extension might provide serialization or printing support, with yet another extension containing distance computations between this point and other objects. Although we won't get to generics until the next post, I'll spoil things a little bit to say that extensions are critical there, too: they satisfy customization points and make it exceptionally easy to write generic algorithms that operate across all sets of types.

### Computed properties

An extension can also add new properties to a type, but only if they are *computed* properties, i.e., ones whose values are computed from other existing values. For example, we could add computed property to determine the distance of a point from the origin, i.e., it's magnitude:

```swift
extension Point {
  var magnitude: Double {
    sqrt(x*x + y*y)
  }
}
```

The curly braces indicate that this property is a computed property, and contain the code that computes the property's value. The `magnitude` computed property works like any other property, e.g.,:

```swift
print("Point \(p) has magnitude \(p.magnitude)"")
```

Now, the `magnitude` property is read-only: there's no way to assign to it, or pass it `inout`, because it doesn't make sense to modify the magnitude of a point. However, we can define some read/write computed properties by writing out explicit `get` and `set` functions within the curly braces. Let's do it for one of our standard examples, a view on the point using polar coordinates (angle and radius):

```swift
extension Point {
  var angle: Double {
    get { atan2(y, x) }
    set { 
      self = .init(angle: newValue, radius: radius)
    }
  }
  
  var radius: Double {
    get { magnitude }
    set { 
      self = .init(angle: angle, radius: newRadius)
    }
  }

  init(angle: Double, radius: Double) {
    self.init(x: radius * cos(angle), y: radius * sin(theta))
  }
}
```

This extension has provided a fairly complete API for `Point` with polar coordinates: you can read or write `angle` and `radius` to manipulate the point's location via polar coordinates, or create a new `Point` instance from polar coordinates with the given initializer. Within the `set` functions, `newValue` is the name of an implement parameter containing new value to which the property is being set. If you want, you can rename it by providing a different name, e.g., `set(newAngle) { ... }`), but folks don't tend to do this often.

When manipulating a `Point` via the Polar APIs, the result is still always stored in terms of the Cartesian coordinates `x` and `y`. Indeed, without looking at the implementation of the `Point` type, you can't even necessarily tell whether you're dealing with a computed property or a stored property. This is generally a good thing, because it means that the type can be refactored to change the way it stores its data (say, to provide indirection or add a caching layer) without requiring that clients change their code at all. It's another small thing, but in Swift you choose between a function or a property based on the syntax you want for your API, not based on the implementation details. And you won't have to write spurious getter/setter functions for every single non-static data member "just in case" you need them later.

However, this abstraction from the actual storage can also be a bit unsettling as a user if you don't have a good mental model of how the types will perform, especially coming from C++ where you expect to be close to the machine model. The [<FontIcon icon="fa-brands fa-swift"/>Swift API design guidelines](https://swift.org/documentation/api-design-guidelines/#naming) have something to say about this: computed properties should generally be cheap to compute (i.e., amortized constant time), and should refer to some aspect of the part of the type's state. If you have something that's expensive to compute (say, the smallest element in an array) or represents a transformation of the whole value (say, a view of an array with the elements reversed), it should be a function.

### Extending "standard" types

Early in this post, I pointed out that free functions in C++ are used in templates because they can be implemented for built-in types. For example, there's no way to add a member function named `begin` to a C++ pointer or array type, but you can implement a `begin` operation as a free function on an array of fixed size:

```cpp
template<typename T, std::size_t N>
T* begin(T (&amp;array)[N]) {
  return array;
}
```

In Swift, most of the types one thinks of as built-in---integers, floating point numbers, Booleans, optionals, arrays, etc.---are actually structs or enums provided by the standard library. Therefore, you can extend them with new functionality. For example, maybe we want to add a property that determines whether a given integer is prime. We can do so by extending `Int`:

```swift
extension Int {
  var isPrime: Bool {
    switch self {
      case 0, 1: return false
      default: break
    }
    
    for i in 2..<abs(self) {
      if self % i == 0 {
        return false
      }
    }
    
    return true
  }
}
```

This is where extensions show their value: you can extend any type, from anywhere, with new functionality without paying a "syntax penalty" (shall we call it a "*syn* tax"?) for being outside of the definition of the type or its enclosing module. "Free function or member function?" is a matter of API design, not a decision forced on you by the language. Once you get used to these in Swift, you'll really start to miss them in C++. I certainly do.

### Subscripts

One of my favorite parlor tricks is to add support for manipulating specific bits within an integer by treating it like an array of `Bool` values, e.g.,

```swift
var flags: UInt32 = 0b1001
flags[2] = true  // set bit #2
flags[0] = false // clear bit #0
```

The code is a straightforward extension of the `UInt32` type from the standard library, but it also requires that we introduce one more feature: the use of `subscript` to define a new subscript, which is the Swift equivalent of the C++ `operator[]`:

```swift
extension UInt32 {
  subscript(index: Int) -> Bool {
    get {
      (self &amp; UInt32(1) << index) != 0
    }
    
    set {
      let mask = UInt32(1) << index
      self = (self &amp; ~mask) | (newValue ? mask : 0)
    }
  }
}
```

Note that subscripts in Swift are property-like: they can be read-only (just a `get`, optionally with the `get { /* ... */ }` elided) or read-write (if they also have a `set`). The subscript parameters are written in parentheses, like a function, and there can be any number of parameters. For example, a 2-D matrix type might take both the row and column:

```swift
extension Matrix2D {
  subscript(i: Int, j: Int) -> Double {
    get { /* ... */ }
    set { /* ... */ }
  }
}

print("Top level corner is \(matrix[0, 0])")
```

Subscripts can also have labeled arguments. For example, our same matrix type might want to provide subscript operations that provide access to an entire row or column as a vector:

```swift
extension Matrix2D {
  subscript(row row: Int) -> Vector {
    get { /* ... */ }
    set { /* ... */ }
  }
  
  subscript(column column: Int) -> Vector {
    get { /* ... */ }
    set { /* ... */ }
  }
}

print("First row is \(matrix[row: 0])")
```

The `row row` bit is a little weird, and might cause you to start humming a nursery rhyme. It's a bit of an inconsistency in Swift that for functions and initializers, arguments are labeled by default (you would only write `row: Int`) whereas in subscripts the arguments are unlabeled by default (so you have to write `row row: Int` so that the caller will need to provide `row:`). When we made this choice, we opted to align with common usage (very few subscripts *want* labeled arguments) rather than overall consistency. Now, it feels like a wart. Either way, you still get to choose when you define the `subscript` what the argument labels will be.

Extensions let you go ahead and add members to any type, from anywhere. That sounds a little cool, but also a little scary: how does this not break encapsulation? To understand that, we need to dive into how code is organized in Swift, along with its access control model.

---

## Code organization

In C++, code is organized into header files and implementation files. Header files (`.h`, `.hpp`, etc.) are generally for the interfaces to things---function declarations, type definitions, and so on---whereas implementation files (`.cpp`, `.cxx`, etc.) are generally for the code that implements those interfaces. Implementation files are generally compiled once and linked into the program, whereas header files will be included in many different implementation files and potentially vended to other clients.

Now, these are somewhat purist definitions that don't really match reality, because C++ header files actually contain a lot more than just the interface: they also need to have a lot of implementation details that are necessary to make the interfaces usable. For example, you need the declarations of all of the members of your C++ classes (even the `private` ones!) because they can only be declared in the header. You also need the definitions of any templates or macros that are part of the interface, because otherwise clients can't instantiate the template or expand the macro. (No, don't talk to me about `export`, I don't want to hear it). Indeed, the desire to hide away the private details of a C++ class from clients is why we have the [<FontIcon icon="iconfont icon-cpp"/>pImpl idiom](https://en.cppreference.com/w/cpp/language/pimpl), and various other techniques to keep implementation details in the implementation files and out of headers.

Swift takes a different approach to code organization and access control.

### Modules

A Swift program is comprised of a number of modules. A module is a collection of APIs, such as functions and types, along with their implementations. Each module has a name (e.g., `Geometry`) that can be used to reference it, and access its public APIs. To access the public APIs of the `Geometry` module from another module, one must import it:

```swift
import Geometry
```

Once that's done, all of the public APIs in the `Geometry` module are now available to you.

The actual creation of a module exists somewhat outside the Swift language: your build system will say what source files are part of a given module, and the name of that module, and all of those source files will be compiled together. Groups of modules can be organized into [<FontIcon icon="fa-brands fa-swift"/>packages](https://swift.org/packages/).

The import relationships amongst the modules in a program must form a Directed Acyclic Graph, or DAG: there cannot be any cycles where module `A` imports module `B` imports module `A`. C++ headers let you get away with such tricks, if your linker cooperates, but it's generally a bad idea that will come back to bite you later. With Swift, it'll bite you sooner, but it's predictable.

### Going `public`

By default, any code within a module can access any other code within that module. One nice aspect of this is that, when your program is a single module, you don't have to think about modules or access control at all: just write your code and ignore this feature of the language. We call this *progressive disclosure*, the idea that one can ignore certain aspects of the language when starting out, and then learn about them only at the time when you need them, without invalidating any of your prior understanding of the language.

You need access control when your program gets big enough that you want to split it into modules, or when you want to start providing your modules for someone else to use. If you haven't used any access control in your module, it's public interface is empty. *All* promises made by a Swift module to outside clients are explicit, so if you want to make a type available to clients, you have to say so by marking it `public`. Perhaps we want to make the `Point` type available to clients, which we could do like so:

```swift
public struct Point {
  public var x: Double
  public var y: Double
}
```

Now, a client that imports our module (let's keep calling it `Geometry`) can access the `Point` type and both its `x` and `y` values. However, the client cannot create an instance of the `Point` type, because we haven't explicitly provided a `public` initializer. Let's revise our type to do so:

```swift
public struct Point {
  public var x: Double
  public var y: Double
  
  public init(x: Double, y: Double) {
    self.x = x
    self.y = y
  }
}
```

That's it! We've exposed the API we wanted public, and anything we didn't explicitly promise is an implementation detail. For example, the `translated(deltaX:deltaY:)`, `flipped(axis:)`, and `magnitude` operations we provided earlier are still implementation details.

::: note Aside

At the point where you are marking things `public`, now would be a *really* good time to write some documentation for them. Use triple-slash (`///`) or Doxygen-style (`/** ... **/`) comment headers and [<FontIcon icon="fa-brands fa-markdown"/>Markdown](https://markdownguide.org), then use the excellent [<FontIcon icon="fa-brands fa-swift"/>DocC](https://swift.org/documentation/docc/#) to generate beautiful documentation. Trust me, your users will thank you. It's also a good way to review your whole API the way your clients will see it.

Technically, any declaration that doesn't have an access specifier on it is `internal`, meaning "internal to its module". You can write out the `internal` if you want, but it's pretty rare for folks to do that in Swift.

:::

### Files, `fileprivate`, and `private`

A module is comprised of one or more source files. The names of those source files don't matter to the Swift language, only to us programmers. However, files are part of Swift's access control model, and you can limit access to a particular declaration to the source file in which is resides (`fileprivate`) or to just its enclosing type within that source file (`private`). For example, we might want to do this so that the actual storage representation of our `Point` type is only accessible within a single source file, making it easy to audit and change. Let's use a SIMD type just for fun:

```swift
// in Point.swift
public struct Point {
  private var storage: SIMD2<Double>
}

extension Point {
  public var x: Double {
    get { storage[0] }
    set { storage[0] = newValue }
  }
  
  public var y: Double {
    get { storage[1] }
    set { storage[1] = newValue }
  }
  
  public init(x: Double, y: Double) {
    self.init(storage: [x, y])
  }
}
```

The code above is valid. If we tried to move any part of the extension to another source file, we would get an error because `Point.storage` is only accessible in this source file. Moreover, it's only accessible to `Point` and its extensions within this source file, so we can't even refer to it from free functions in the same file

```swift
// also in Point.swift
func printPoint(_ point: Point) {
  print("\(point.storage)") // error: storage is not accessible outside of Point in this file
}
```

If we want the ability to access `storage` from this free function, we can mark it `fileprivate` rather than `private`.

You can think of Swift's `fileprivate` and `private` as filling the same role as anonymous namespaces or (non-member) `static` functions do in C++ implementation files: a way to write code that never escapes that one implementation file, so it isn't available to any other part of your program. But unlike anonymous namespaces or `static`, there's no "*syn* tax": you can reduce a declaration's access down to a single file with `fileprivate` or `private` without changing any other code in that source file, whereas in C++ you'd have to go change the way it's used and possibly edit the corresponding header.

### Extensions and source file naming

Swift programmers tend to keep source files fairly small and dedicated to a particular task. For example, the `Point.swift` described above, which provides only the type definition and the one extension allowing access via Cartesian coordinates, might be the entire contents of the source file. All other functionality for `Point` would go into a separate source file, which would contain extensions. For example, the support for Polar coordinates would go into a source file `Point+Polar.swift`, whereas printing support could go into `Point+Printing.swift`. If you look at a sizable Swift module, you'll see lots of the `<type>+<purpose>.swift` source files:

```swift
Line.swift
Line+Transforms.swift
Point.swift
Point+Cartesian.swift
Point+Codable.swift
Point+Polar.swift
Point+Printing.swift
```

At first, this approach surprised me: why break things up into so many small pieces? However, it keeps each source file manageable and focused. Moreover, each source file can present its API for the rest of the world (whether it's just this module or beyond), and then hide its implementation details with `private` or `fileprivate`.

There is a rough analogue to this in C++, where a single large class has its implementation scattered across a number of different implementation files, each of which implements a few of the member functions. Each of those implementation files might use anonymous namespaces or `static` functions to hide some of its implementation details from the other source files. It works, and we use it extensively in the various C++ code bases I've worked on, but it still means having an enormous header file that you're always touching.

### Packages

Swift packages provide a way to "package up" and distributed a set of Swift modules together for use in Swift programs, and are supported by the [<FontIcon icon="fa-brands fa-swift"/>Swift Package Manager](https://swift.org/documentation/package-manager/). A package is a group of modules that is developed together, and has its own access control level: `package`. Use `package` access control when you need access to a particular API across the modules within your own package, but you don't want to make them public for anyone else. The `package` access level is particularly useful for unit tests, which often want access to functionality that should not be part of the public API vended to clients.

There is a lot more to be said about Swift packages, but I will leave them to a separate post. There's more access control to be had.

### No peeking!

C++ has two access-control features that have no counterpart in Swift, and allow entities outside of the normal scope to access the private members of the type: `protected` and `friend`. While we could debate the merits of these features, I'll point out that we've received very few requests to add them (or something like them) into Swift over the years, and leave it at that.

### Inheritance and overriding

Swift's access control design is centered around the idea of never implicitly promising anything to clients outside of the module. If it isn't marked `public`, it's an implementation detail, so you can change it. That helps programmers prevent getting accidentally stuck with an accidentally-published API that has amassed clients who didn't know better.

With object-oriented programming, there are additional concerns that an implementer needs to consider beyond clients just using an API. For a class, an implementer needs to consider whether it makes sense for clients to subclass a class and, if so, which methods can be overridden by those clients. Most OO languages, including C++, allow any (virtual) method to be overridden by clients unless explicitly marked as `final` (or `sealed`). Swift takes a slightly different approach: within a module, one is free to subclass any non-`final` class or override any non-`final` method declared in the same module. These are implementation details that are not exposed to clients.

However, outside of a module, a `public` class cannot be subclassed and a `public` method cannot be overridden. This is because designing a class for inheritance or a method for overriding takes extra care to maintain backward compatibility: what if the method is called as an implementation detail of another method? If so, you might be stuck maintaining that call sequence forever, even if future implementations of the class don't need it. Instead, Swift makes this an opt-in behavior via the access specifier `open`: an `open` class can be subclassed by anyone, and an `open` method can be overridden by anyone. `open` is more permissive than `public`, meaning that all `open` entities are implicitly `public`, so they can be both overridden and also used from outside the module. Here's a quick example:

```swift
// module A
open class Superclass {
  open func f() { }
  public func g() { }
  public final func h() { }
}

class OtherClass: Superclass {
  override func f() { /* ... */ } // okay, it's open
  override func g() { /* ... */ } // okay, it's in the same module
  override func h() { /* ... */ } // error, it's final
}

// module B
import A

class Subclass: Superclass { // okay, it's open
  override func f() { /* ... */ } // okay, it's open
  override func g() { /* ... */ } // error, it's in a different module and isn't open
}
```

The `open` access specifier makes it clear where the extension points in an object-oriented hierarchy are, making this complicated contract between implementer and client explicit and clear.

---

## Wrap-up

Early on, I linked to a post about [<FontIcon icon="fas fa-globe"/>prefering free functions](https://danielsieger.com/blog/2023/05/01/cpp-member-vs-free-functions.html). It is one of many in the C++ world, and links out to various guidelines and talks that all come to roughly the same conclusion. Here are the reasons listed in that post for prefering free functions to member functions in C++:

- **Loose Coupling:** A free function is more loosely coupled to the class it is operating on. It only depends on the interface. This also enables generic functions being usable with different concrete classes.
- **Encapsulation and Hiding:** A free function promotes encapsulation and information hiding since it does not have access to the implementation details of the class.
- **Flexibility and Extensibility:** Adding another free function is cheap and easy and does not require modification of the class definition.
- **Testing:** A free function is generally easier to test due to increased independence. No hacks required to test those pesky private member functions.

Swift's extensions and access control address all of those reasons directly. Encapsulation and hiding are based on the organization of code into files, modules, and packages. You can add a member to a type from anywhere with an extension. The result of these aspects being orthogonal is that you get all of the loose coupling, enapsulating, flexibility, and extensibility of C++ "free functions", with the ergonomics of member functions. It's lovely.

Extensions are also a key part of the next part of our story: generics.

---

<TagLinks />