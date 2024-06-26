---
lang: ko-KR
title: "Swift for C++ Practitioners, Part 4: Generics"
description: "Article(s) > Swift for C++ Practitioners, Part 4: Generics"
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
      content: "Article(s) > Swift for C++ Practitioners, Part 4: Generics"
    - property: og:description
      content: "Swift for C++ Practitioners, Part 4: Generics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/douggregor.net/swift-for-cpp-practitioners-4.html
prev: /programming/swift/articles/README.md
date: 2024-04-06
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
  "title": "Swift for C++ Practitioners, Part 4: Generics | Doug's Compiler Corner",
  "desc": "Swift for C++ Practitioners, Part 4: Generics",
  "link": "https://www.douggregor.net/posts/swift-for-cxx-practitioners-generics/",
  "background": "rgba(22,22,22,0.2)"
}
```

Swift's generics system is, on its surface, similar to C++ templates: functions and types can be parameterized (e.g., a `Set` type has a parameter `T`) and can be used with any suitable generic arguments (e.g., `Set<Int>`). One can use these features to implement generic algorithms and data structures that work with a wide variety of concrete types.

Swift's generics system was designed with the goal of making [<FontIcon icon="fa-brands fa-wikipedia-w"/>Generic Programming](https://en.wikipedia.org/wiki/Generic_programming) easy and fun. Generic functions and types are *constrained* by a set of requirements on the type parameters, akin to the [<FontIcon icon="iconfont icon-cpp"/>`requires` clause](https://en.cppreference.com/w/cpp/language/requires) provided by [<FontIcon icon="iconfont icon-cpp"/>C++20 Concepts](https://en.cppreference.com/w/cpp/language/constraints). However, Swift's generics are *separately type checked*, so there is no such thing as an instantiation-time error: if the Swift type checker accepts the generic function or type you write, it will work with any arguments that meet those same requirements.

Swift generics are also *separately compiled*, meaning that you can have a generic function or type within one shared library, and use it from other code, without requiring explicit instantiation or manual indirection. This means that Swift can provide some language features that aren't possible in C++. For example, C++ doesn't allow you to have a `virtual` function template, because the dynamic dispatch (`virtual`) is in conflict with the need to instantiate the function template for each set of generic arguments; in contrast, Swift allows generic functions that can be overridden in subclasses. Similarly, [<FontIcon icon="fas fa-globe"/>type erasure in C++](https://davekilian.com/cpp-type-erasure.html) is a mechanism for runtime polymorphism in C++ that allows one to hide the type used at runtime behind another instance, and is used in library components such as [<FontIcon icon="iconfont icon-cpp"/>`std::any`](https://en.cppreference.com/w/cpp/utility/any) and [<FontIcon icon="iconfont icon-cpp"/>`std::function`](https://en.cppreference.com/w/cpp/utility/functional/function). Swift's [<FontIcon icon="fa-brands fa-swift"/>`any` types](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/opaquetypes#Boxed-Protocol-Types) provide the same functionality as part of the language, using the same mechanism that underlies its generics system, making it easy to bridge the compile-time/runtime polymorphism divide. There are some downsides to separate compilation of generics, and we'll get back to those later in the post.

Before elaborating on the above, it's important to understand what Swift's generics system *cannot* do that one might expect when coming from C++ templates. Swift generics have no notion of *specialization*, so you can't (say) customize the representation of a generic type based on its type arguments. For example, the equivalent of [<FontIcon icon="iconfont icon-cpp"/>`std::vector<bool>`](https://en.cppreference.com/w/cpp/container/vector_bool) is inexpressible in the Swift generics system. This limitation is necessary for separate type checking and compilation to work, and it simplifies the mental model for working with generics, but it has significant implications: *there is no template metaprogramming* in Swift. So while the canonical use of [<FontIcon icon="iconfont icon-cpp"/>`std::enable_if`](https://en.cppreference.com/w/cpp/types/enable_if) is effectively built into the Swift language (it's just part of type checking), there's no way to express [<FontIcon icon="iconfont icon-cpp"/>`std::conditional`](https://en.cppreference.com/w/cpp/types/conditional) or similar. If you're an expert in C++ templates, this can be hard to stomach, because the tools you're accustomed to just aren't there in Swift. However, separate type checking is *totally worth it*, and something you sort of have to experience to understand why. I'll try to make the case as obvious as I can throughout this post.

Enough introduction, let's write some generics!

---

## The basics

Generics in Swift use angle brackets, just like in C++. Instead of a template header, the angle brackets go after the name of the entity. Here's the Swift equivalent to [<FontIcon icon="iconfont icon-cpp"/>`std::pair`](https://en.cppreference.com/w/cpp/utility/pair):

```swift
struct Pair<T, U> {
  var first: T
  var second: U
}
```

Now, we can go ahead and form a pair of an `Int` and a `String`, e.g.,

```swift
let intAndString = Pair<Int, String>(first: 42, second: "Answer")
```

We've explicitly written out the generic arguments, but we didn't have to, because Swift's type inference can handle that for us. The above can be written equivalently as:

```swift
let intAndString = Pair(first: 42, second: "Answer")
```

You can think of this as being essentially equivalent to C++17 [<FontIcon icon="iconfont icon-cpp"/>class template argument deduction](https://en.cppreference.com/w/cpp/language/class_template_argument_deduction), but uniform in the language and without an explicit notion of deduction guides.

Generic functions are similar. For example, we could write the identity function like this:

```swift
func identity<T>(_ value: T) -> T {
  return value
}
```

### Extending generic types

That's not very interesting, so let's write an operation that returns a new pair with the `first` and `second` fields swapped:

```swift
extension Pair {
  func swapped() -> Pair<U, T> {
    return .init(first: second, second: first)
  }
}
```

Neat! We've extended our generic `Pair` type in the same way we might extend any other type in Swift. One important thing to note here is that the names of generic parameters are significant in Swift, unlike in C++, because extensions of a type automatically have access to the generic parameters of that type. So **don't be like me** and use names like `T` and `U`: pick more meaningful names (e.g., `First` and `Second` for our little `Pair` type).

Just to close the loop, let's call this new function:

```swift
let stringAndInt = intAndString.swapped() // returns Pair<String, Int> containing (first: "Answer", second: 42)
```

### Separate type checking

Now, all of the code above is correct code. What if we made a mistake, and got our types mixed up due to the badly-named `T` and `U`?

```swift
extension Pair {
  func swappedBad() -> Pair<T, U> {
    return .init(first: second, second: first)
  }
}
```

The Swift compiler will inform us of our error in the definition of the generic function:

```swift
pair.swift:8:25: error: cannot convert value of type 'U' to expected argument type 'T'
 6 │ extension Pair {
 7 │   func swappedBad() -> Pair<T, U> {
 8 │     return .init(first: second, second: first)
   │                         ╰─ error: cannot convert value of type 'U' to expected argument type 'T'
 9 │   }
10 │ }

pair.swift:8:41: error: cannot convert value of type 'T' to expected argument type 'U'
 6 │ extension Pair {
 7 │   func swappedBad() -> Pair<T, U> {
 8 │     return .init(first: second, second: first)
   │                                         ╰─ error: cannot convert value of type 'T' to expected argument type 'U'
 9 │   }
10 │ }
```

Note that we don't have any caller of this function, yet we got a type error. A generic function's body is type-checked against the constraints it places on its generic parameters. It cannot use those types in ways that aren't covered by the constraints. This is a very different starting point than C++ templates, where the template itself is only partially checked at the point of definition: anything that involves a C++ template parameter (i.e., is *dependent* on a template parameter) must be deferred until template instantiation time.

The other piece of separate type checking occurs at uses of a generic type or function. If the generic arguments supplied to the generic type or function don't satisfy the constraints, the compiler will reject that use of the generic type or function. This part should feel more familiar when coming from C++, because this is what [<FontIcon icon="iconfont icon-cpp"/>`std::enable_if`](https://en.cppreference.com/w/cpp/types/enable_if) and [<FontIcon icon="iconfont icon-cpp"/>C++20 `requires` clauses](https://en.cppreference.com/w/cpp/language/constraints) do: prevent the user from instantiating a template with arguments that won't work, like passing bidirectional iterators to [<FontIcon icon="iconfont icon-cpp"/>`std::sort`](https://en.cppreference.com/w/cpp/algorithm/sort).

The "separate" in separate type checking refers to the fact that we can type-check the definition of a generic separaterly from its use, and so long as both type-checks succeed, you know that there will be no further type errors. There is no need to type-check the "instantiation" that substitutes the generic arguments into the definition of the generic function, because it can never fail.

Separate type checking is a fairly core notion in C++, too! But in C++ it only applies to non-template code. For example, say you have some function:

```cpp
std::vector<std::string> selectRandomWords(const std::string &input, int num_words);
```

The definition of that function knows that the `input` argument will be a `std::string`, and `num_words` will be an `int`. A call to that function must provide values that can be converted to those parameter types. The two sides of the interface are checked separately, and we know there will be no type errors later on.

The practical impact of having separate type checking for generics is that it makes everything *simpler*. There are no *template instantiation backtraces* exposing the implementations of the generics you've used. Rather, if you fail to meet the requirements of a generic function or type, you'll get an error message right at that use. Moreover, *writing* generic types and functions is a whole lot easier, because the type checker helps you get the constraints right and stay within those bounds.

If you're thinking that all of this talk about constraints sounds a whole lot like [<FontIcon icon="fa-brands fa-wikipedia-w"/>C++ concepts](https://en.wikipedia.org/wiki/Concept_(generic_programming)), you're right! In Swift, we call them *protocols*.

---

## Protocols

Protocols describe an abstract interface on a type. They are introduced with the `protocol` keyword, have a name, and can have various members including functions, properties, initializers, and subscripts. Protocols can be used as generic constraints, and a protocol constraint can only be satisfied by a type that *conforms to* the protocol.

Let's start with a simple protocol that provides a cost function; we'll call it `Quantifiable`:

```swift
protocol Quantifiable {
  func cost() -> Double
}
```

Note that the `cost` function has no definition. That's because it's an abstract interface, which must be implemented by every conforming type, somewhat like a pure virtual function in C++. In generic programming, we often call these [<FontIcon icon="fas fa-globe"/>*customization points*](https://ericniebler.com/2014/10/21/customization-point-design-in-c11-and-beyond/): places where a given concrete type can (or must) provide its own implementation. In Swift, we usually call them the *requirements* of a protocol.

We can now write a generic function that retrieves the cost of a particular value, like this:

```swift
func getCost<T: Quantifiable>(value: T) -> Double {
  return value.cost()
}
```

If we had forgotten the constraint `T: Quantifiable`, the compiler would have complained that `value of type 'T' has no member 'cost'`. If we call `getCost` with a value of a type that isn't quantifiable (no types are, yet), we'll get an error like this:

```swift
20 │ getCost(value: 42)
   │ ╰─ error: global function 'getCost(value:)' requires that 'Int' conform to 'Quantifiable'
```

There's much more to protocols, but first let's put things together to create a complete example.

### Conformances

To satisfy a protocol constraint like `T: Quantifiable`, the generic argument for `T` must conform to `Quantifiable`. We can state such a conformance for a given type by extending that type and specifying the conformance. For example, we can make `Int` quantifiable like this:

```swift
extension Int: Quantifiable {
  func cost() -> Double { return 1 }
}
```

The `: Quantifiable` states the conformance, and the type checker will make sure that every member from the protocol (in this case, `cost`) has a corresponding member in the type, with a compatible type signature. If we were to forget an operation, or have a type mismatch between what's in the protocol and what's in the type...

```swift
extension String: Quantifiable {
  func cost() -> Int { return count } // error: see below
}
```

we'll get an error like this:

```swift
22 │ extension String: Quantifiable {
   │ ╰─ error: type 'String' does not conform to protocol 'Quantifiable'
23 │   func cost() -> Int { return count } // error
   │        ╰─ note: candidate has non-matching type '() -> Int'
24 │ }
```

This kind of checking is available with C++20 concepts, but you must opt in to it with something like a `static_assert`:

```cpp
static_assert(Quantifiable<String>); // C++20 approximation of Swift "conformance checking"
```

Checking the conformance is another important piece of separate type checking: it makes sure that the type fully implements the abstract interface described by the protocol, so that a generic function or type written to that abstract interface will succeed with any type that implements it.

### Where clauses

The `<T: Quantifiable>` syntax I used in the `getCost` function is actually shorthand for the more general `where` clause. A `where` clause specifies the constraints on a generic function or type, much like a C++20 `requires` clause. The `getCost` function could be equivalently written with a `where` clause like this:

```swift
func getCost<T>(value: T) -> Double where T: Quantifiable {
  return value.cost()
}
```

`where` clauses can go on any generic entity, including on members of generic types. For example, let's go ahead and add a `cost()` method to our `Pair` type:

```swift
extension Pair {
  func cost() -> Double where T: Quantifiable, U: Quantifiable {
    return first.cost() + second.cost()
  }
}
```

This `cost()` function can only be called on an instance of `Pair` where both `T` and `U` conform to `Quantifiable`. However, that's probably not how a Swift programmer would write this function. Rather, they'd put the `where` clause up on the extension itself, to highlight that all of the API of the extension only applies when `T` and `U` satisfy these extra constraints. Like this:

```swift
extension Pair where T: Quantifiable, U: Quantifiable {
  func cost() -> Double {
    return first.cost() + second.cost()
  }
}
```

In Swift, we refer to extensions like these as *constrained extensions*, because they extend the functionality of a type when the arguments meet some additional set of constraints. An extension without an additional `where` clause is, therefore, an *unconstrained extension*.

### Conditional conformances

Notice how `Pair` now seems to match the interface of `Quantifiable` itself? We can make it official by declaring this extension as `Pair`'s conformance to `Quantifiable`:

```swift
extension Pair: Quantifiable where T: Quantifiable, U: Quantifiable {
  func cost() -> Double {
    return first.cost() + second.cost()
  }
}
```

This is called a *conditional conformance* in Swift. Essentially, that means `Pair` only conforms to the `Quantifiable` protocol when certain other constraints are satisfied, and it allows generic types to compose well with the generics system: `Pair` conforms when its component values conform. A protocol conformance declared via constrained extension is a conditional conformance.

We see this a lot for various collection types like `Array`, which often conform to a protocol only when the element of the array conforms to that same protocol. For example, an `Array` is `Equatable` (meaning that it can be compared for equality) when its elements are `Equatable`, like this:

```swift
struct Array<Element> { ... }

extension Array: Equatable where Element: Equatable {
  static func ==(lhs: Array<Element>, rhs: Array<Element>) -> Bool {
    if lhs.count != rhs.count { 
      return false 
    }
    
    for index in indices {
      if lhs[index] != rhs[index] { 
        return false 
      }
    }
    
    return true
  }
}
```

This is common in C++ as well: a `std::vector<T>` will have a usable `==` when the element type `T` has a usable `==`. In C++, the relationship isn't usually expressed explicitly like this: usually, the vector's `==` will fail to instantiate if the template argument for `T` doesn't have an `==`, so you get an instantiation backtrace. C++ does allow the use of a `requires` clause or `enable_if` to get something more like what Swift is doing.

### Operators

Operators in Swift are introduced with the `func` keyword, like all other functions. They are implemented as `static` functions within a type, or as module-scope functions, which are similar to C++. Unlike C++, they cannot be implemented as non-`static` functions (but that's kind of an anti-pattern in C++ anyway). Swift doesn't have general notion of [<FontIcon icon="iconfont icon-cpp"/>Argument Dependent Lookup (ADL)](https://en.cppreference.com/w/cpp/language/adl), because it's not really needed when most functionality is introduced via extensions anyway, but it does find operators within the types of the operands. Let's see some operators in a protocol:

```swift
protocol Equatable {
  static func ==(lhs: Self, rhs: Self) -> Bool
  static func !=(lhs: Self, rhs: Self) -> Bool
}
```

Note that the parameter types are all `Self`, which means "the type that conforms to this protocol". When we make `Array<Element>` conform to `Equatable`, the `Self` type is `Array<Element>`. This is effectively how `Self` is used everywhere else in types, because it's the name for the implicit `self` parameter for non-static methods.

Armed with protocols and generic constraints, let's dive deeper into generic programming by looking at how Swift tackles the fundamental problems solved by the C++ [<FontIcon icon="fa-brands fa-wikipedia-w"/>Standard Template Library (STL)](https://en.wikipedia.org/wiki/Standard_Template_Library): collections (containers, in C++ speak) and algorithms.

---

## Exploring protocols

Let's consider an algorithm that sums up the elements in an array of `Double` values. Then, we're going to *lift* this algorithm to make it more generic, discovering more protocols along the way. We can write our function like this:

```swift
extension Array<Double> {
  func sum() -> Double {
    var result = 0.0
    for index in 0..<count {
      result = result + self[index]
    }
    return result
  }
}
```

In the implementation of this function, `0..<count` is Swift syntax for a range of integer values from 0 up to (but not including) `count`, which lets us easily iterate over all of the value indices in the array.

The extension of `Array<Double>` is actually a short-hand syntax for something that goes into a `where` clause: a *same-type constraint*. We could, equivalently, have written the above as:

```swift
extension Array where Element == Double { ... }
```

That's a little bit silly here, but I promise that same-type constraints will become much more useful soon, and they fulfill roughly the same role as [<FontIcon icon="iconfont icon-cpp"/>`std::is_same`](https://en.cppreference.com/w/cpp/types/is_same) in C++.

Now, the most obvious next step to "lift" this algorithm is to make it work on element types other than `Double`. That requires us to create a protocol to cover the `+` operation and a zero element. Let's call it `AddableWithZero`:

```swift
protocol AddableWithZero {
  static func +(lhs: Self, rhs: Self) -> Self
  static var zero: Self { get }
}
```

This happens to be the first property we've seen in a protocol. Note that we use `get` (without a definition) here to say that it's a readable property. If we wanted it to allow both reads and writes, the property would be written as `{ get set }`. Using `AddableWithZero`, we can lift our `sum` function like this:

```swift
extension Array where Element: AddableWithZero {
  func sum() -> Element {
    var result = Element.zero
    for index in 0..<count {
      result = result + self[index]
    }
    return result
  }
}
```

### Protocol refinement

Our new `sum` function is pretty general, but it requires you to have both a `+` and a "zero" element. We could make this `sum` a bit more general by taking an initial value, so we don't need `zero` as part of the protocol. But we don't want to lose out on the convenience of zero as the right default for most cases. So, let's revise our protocol a bit to separate out the "addable" part from the "zero" part, introducing two protocols that are related:

```swift
protocol Addable {
  static func +(lhs: Self, rhs: Self) -> Self
}

protocol AddableWithZero: Addable {
  static var zero: Self { get }  
}
```

Here, we say that `AddableWithZero` *refines* `Addable`. The key property is that every type that conforms to `AddableWithZero` must *also* conform to `Addable`. This lets us introduce two variants of `sum` built on each other: one with the lesser `Addable` constraint that requires an initial value, and one that uses `AddableWithZero` and supplies the zero value:

```swift
extension Array where Element: Addable {
  func sum(initialValue: Element) -> Element {
    var result = initialValue
    for index in 0..<count {
      result = result + self[index]
    }
    return result
  }
  
  func sum() -> Element where Element: AddableWithZero {
    return sum(initialValue: .zero)
  }
}
```

Protocol refinement lets us add structure to our protocol hierarchies. The same notion exists with C++ concepts, where [<FontIcon icon="iconfont icon-cpp"/>`random_access_iterator`](https://en.cppreference.com/w/cpp/iterator/random_access_iterator) refines [<FontIcon icon="iconfont icon-cpp"/>`bidirectional_iterator`](https://en.cppreference.com/w/cpp/iterator/bidirectional_iterator). A given protocol can refine zero or more other protocols, and it's okay if the same protocol shows up at multiple places in the protocol hierarchy.

### Associated types

Now that we've lifted a generic algorithm on arrays, it's time to handle other kinds of collections, such as sets or ring buffers. Looking back at the `sum` method, it only accesses the array in two ways: a `count` value that defines the upper bound, and a `subscript` to access an element. That's starting to sound like a protocol!

```swift
protocol Collection {
  var count: Int { get }
  subscript(index: Int) -> ??? { get }
}
```

This is *almost* complete, but what type is produced by the subscript operation? It's going to differ from one collection to the next... an `Array<Double>` would produce `Double`s here, a set of `String` would produce `String`s here, and so on. To express "the element type of the collection", we introduce an *associated type*, like this:

```swift
protocol Collection {
  associatedtype Value
  
  var count: Int { get }
  subscript(index: Int) -> Value { get }
}
```

Now, every type that conforms to `Collection` must provide a `Value` type that specifies its element type. One can do this with a type alias, e.g.,

```swift
extension Array: Collection {
  typealias Value = Element
  // count and subscript come from the primary definition of Array
}
```

You can think of associated types like individual type traits; this `Value` associated type is what we would use `std::iterator_traits<Iter>::value_type` for in C++.

Now, whenever we have a type `T` that conforms to `Collection`, we can refer to its element type as `T.Value`. For example, let's write a module-scope function that sums up the elements of an arbitrary collection:

```swift
func sum<C: Collection>(_ collection: C, initialValue: C.Value) -> C.Value where C.Value: Addable {
  var result = initialValue
  for index in 0..<collection.count {
    result = result + collection[index]
  }
  return result
}
```

The type `C` conforms to `Collection`, which means it has an element type (`C.Value`), `count`, and subscript to access elements. The `where` clause specifies that its element type must conform to `Addable`, which allows us to use the `+` operation. It's all type-checked at the point of definition so we know that the set of constraints is complete.

Now, not every kind of data structure can meaningfully provide integer-based subscripting, so let's revise our `Collection` protocol to make it more general:

```swift
protocol Collection {
  associatedtype Value
  associatedtype Index: Equatable

  var startIndex: Index { get }
  var endIndex: Index { get }
  func index(after index: Index) -> Index
  
  subscript(index: Index) -> Value { get }
}
```

The new associated type, `Index`, refers to an element within the collection. It's a *little* bit like a C++ iterator, except that it doesn't necessarily carry all of the information needed to access the element or move through the collection. Rather, the `subscript` accesses an element refered to by the `index` (as we saw before, where the index type was effectively `Int`), and the new `index(after:)` operation returns the index of the element after the given `index`. The `startIndex` and `endIndex` properties complete the set, providing the index of the first element and an index one-past-the-last element (just like C++ `begin` and `end` iterators).

Note that the `Index` associated type specifies that it must be `Equatable`. Associated types can have constraints placed on them, just like generic parameters can. They can even have `where` clauses, so the associated type declaration above is equivalent to

```swift
associatedtype Index where Index: Equatable
```

By making the `Index` types `Equatable`, we can check when we a particular index hits the last index in the collection. That's enough to implement `sum`, based on our shiny new `Collection` protocol:

```swift
func sum<C: Collection>(_ collection: C, initialValue: C.Value) -> C.Value where C.Value: Addable {
  var result = initialValue
  var currentIndex = collection.startIndex
  let endIndex = collection.endIndex
  
  while currentIndex != endIndex {
    result = result + collection[currentIndex]
    currentIndex = collection.index(after: currentIndex)
  }
  return result
}
```

And then the `Array` type can directly conform to this new version of the protocol with only a few modifications:

```swift
extension Array: Collection {
  // Swift will infer the typealiases below for you, or you can write them out like we did here
  typealias Value = Element
  typealias Index = Int
  
  var startIndex: Int { 0 }
  var endIndex: Int { count }
  func index(after index: Int) -> Element { index + 1 }
}
```

Other data structures could introduce their own `Index` types to store whatever state is needed to identify an element, whether it's the node itself (say, in a linked list), an abstract position into the sequence of values, or some path encoding for indicating a location in a tree, just like you could with a C++ iterator. The main difference is that `Index` types can often be smaller or simpler than the equivalent C++ iterator, because the primary operations on them (movement and element access) are operations on the collection. This also means that the operations on an `Index` can be properly checked: `Array` uses `Int` for its index, but all operations on that index will bounds-check the given index value, so you won't hit undefined behavior during iteration.

Feel free to hack up your favorite data structure and make it a `Collection` if you'd like, because now we're doing some real generic programming, baby!

### Protocol extensions

As you might recall, I previously made a [very big deal](/explore/articles/douggregor.net/swift-for-cpp-practitioners-3.md) out of the fact that extensions were *so much better* than free functions, and now here I am writing `sum` as a free function. That's just for exposition, so we can see all of the constraints written out in a form that looks a lot like a C++ template with concept constraints. But the thing is, extensions really *are* the best answer, and you can use them to write generic algorithms.

Most generic algorithms are written in an extension on a protocol. Extending a protocol adds the new members to *every* type that conforms that protocol. Let's put `sum` on all collections whose `Value` type is `Addable`:

```swift
extension Collection where Value: Addable {
  func sum(initialValue: Value) -> Value {
    var result = initialValue
    var currentIndex = self.startIndex
    let endIndex = self.endIndex
  
    while currentIndex != endIndex {
      result = result + self[currentIndex]
      currentIndex = index(after: currentIndex)
    }
    
    return result
  }
  
  func sum() -> Value where Value: AddableWithZero {
    return sum(initialValue: .zero)
  }  
}
```

The `sum` methods here and the free functions defined earlier are semantically the same, but making it a method within a protocol extension is nicer in a couple of ways. Of course, it means that you can access this with normal member syntax, e.g., `myArrayOfNumbers.sum()`. But more importantly, it's easier to write and read the implementation of these methods, because the generic parameter for the `Collection` itself doesn't need to be spelled out: it's just the `Self` of the collection, and so it's implicit and in context. It's also full type-checked at definition time (of course), so the process of writing a generic algorithm like this one is practically the same as writing a non-generic algorithm.

The entire [<FontIcon icon="fa-brands fa-swift"/>`Collection` protocol hierarchy](https://developer.apple.com/documentation/swift/collection) in Swift is built in this manner, with the standard collection algorithms for searching, sorting, and so on implemented as members in protocol extensions. The design of the `Collection` hierarchy itself could fill an entire blog post. Feel free to dive in to Swift collections via the link above. Or, keep reading to learn more about the Swift generics system...

### Default implementations

A while ago, we defined the `Equatable` protocol with both `==` and `!=`, like this:

```swift
protocol Equatable {
  static func ==(lhs: Self, rhs: Self) -> Bool
  static func !=(lhs: Self, rhs: Self) -> Bool
}
```

Strictly speaking, we don't *need* to have `!=` in this protocol, because `x != y` can be written equivalently as `!(x == y)` for any sensible type. Generic algorithms can just use `==`, and it's less work for authors of the conformances of concrete types to the `Equatable` protocol. Good enough, right?

Or is it?

It turns out that protocol extensions have another use: they can provide default implementations for requirements of the protocol, written in terms of other requirements. So we can provide a default implementation for `!=` in terms of `==`:

```swift
extension Equatable {
  static func !=(lhs: Self, rhs: Self) -> Bool {
    return !(lhs == rhs)
  }
}
```

Default implementations are "just" syntactic sugar, but they make it reasonable to add the full suite of related operations into a protocol without requiring every conforming type to implement them. Conforming types still *can* implement them, for example if the type can provide a faster implementation than the default one, but they don't have to. It's like getting [<FontIcon icon="fas fa-globe"/>Boost.Operators](https://www.boost.org/doc/libs/1_84_0/libs/utility/doc/html/utility/utilities/operators.html) for free.

Default implementations also let you evolve protocols over time without breaking existing conformances: you can add a new requirement to the protocol so long as you also add a default implementation via a protocol extension. For example, imagine that the original `Equatable` protocol only had `==`. You could add `!=` to the protocol along with its default implementation in a protocol extension, and now `!=` is available to your generic algorithms on `Equatable` and all types that are `Equatable`.

### Stronger constraints for better algorithms

One of the tenets of generic programming is that there are often several algorithms to provide the same result, but they differ in what constraints they place on their generic arguments. For example, let's say we had an operation to get the last element of a `Collection`, like this:

```swift
extension Collection {
  var last: Element? {
    var currentIndex = startIndex
    var priorIndex: Index? = nil
    while currentIndex != endIndex {
      priorIndex = currentIndex
      currentIndex = index(after: currentIndex)
    }
    
    guard let priorIndex else {
      return nil
    }
    
    return self[priorIndex]
  }
}
```

That's the best you can do with `Collection` indices, because they only go forward. That's reasonable for a singly linked list, but awful for something like an array. So, just like C++ has bidirectional iterators, we can `BidirectionalCollection` in Swift:

```swift
protocol BidirectionalCollection: Collection {
  func index(before index: Index) -> Index
}
```

And we can provide a better implementation of `last` for bidirectional collections:

```swift
extension BidirectionalCollection {
  var last: Element? {
    let index = endIndex
    if startIndex == endIndex { return nil }
    return self[index(before: endIndex)]
  }
}
```

Now, for a given collection instance (like an array), Swift will choose between the two `last` implementations-, and assuming that the collection instance is known to be a `BidirectionalCollection`, it will chose that `last` implementation as the better one. We can even go further by making it a customization point, i.e., adding it to the protocol:

```swift
protocol Collection {}
  // ...
  var last: Element? // default implementation will be chosen from the two `last` protocol extensions
}
```

This way, every collection has an efficient `last` operation, which is chosen based on the capabilities of the conforming type. It's generally good practice to implement generic algorithms in protocol extensions. Then, when you find that they can have better implementations for some data types, also make it customization point by adding the requirement. This change is backward-compatible, and can unlock better performance from the generics system.

---

## Variadic generics

C++ has [<FontIcon icon="iconfont icon-cpp"/>variadic templates](https://en.cppreference.com/w/cpp/language/parameter_pack) to abstract over the number of template arguments. The basic model of C++ variadic templates is that one declares *parameter packs* that can take any number of arguments, and then *pack expansions* to process all of the arguments in one or more parameter packs. For example, let's say we had a `describe` function in C++ that takes any number of arguments:

```cpp
// C++
template<typename ...Args>
void describe(const Args &...args) {
  // ... 
}
```

Swift's *variadic generics* use the same underlying conceptual model, although the syntax is a bit different. In C++, both parameter pack declarations and pack expansions use the ellipsis (`...`). In Swift, we use the `each` keyword to denote a parameter pack (both at the declaration and the use), and the `repeat` keyword to identify pack expansions. The `describe` function above would look like this in Swift:

```swift
// Swift
func describe<each Arg: Describable>(arg: repeat each Arg) {
  // ...
}
```

Note that `each` is used both when declaring `Arg` (in the angle brackets) and when referring to it is part of the type of the `arg` parameter. The type of the `arg` parameter is a pack expansion (introduced by `repeat`) where each element in the expansion pulled from the parameter pack (via `each Arg`). Note that we're also placing a constraint on the arguments: each argument must conform to the `Describable` protocol.

As with C++, a pack expansion can have an arbitrarily-complicated pattern. For example, we can introduce an operation to describe tuples of arbitrary size, like this:

```swift
func describeTuple<each Arg: Describable>(arg: (repeat each Arg)) {
  // ...
}
```

The parentheses indicate that we have a tuple. The `repeat` is inside the parentheses because we are expanding the pattern into separate elements in the tuple. The C++ equivalent would be `std::tuple<Args...>`.

Let's take this a little further and use some associated types. Here's a function that takes a set of collections and produces a tuple containing the first elements of each collection:

```swift
// Swift
func firsts<each C: Collection>(_ collection: repeat each C) -> (repeat (each C).Element?) {
  return (repeat (each collection).first)
}
```

The function takes in an arbitrary number of collections. It returns a tuple containing optional element values of each of the collections (which is what `first` produces). It produces that those values by forming a tuple `(repeat ...)` where each element is the result of accessing `first` on one of the collections (`each collection`). The C++ with tuples would be much the same, assuming we have some kind of `front_opt` that returned a `std:optional` and a `container_traits` to get the value type of a container:

```cpp
// C++
template<typename ...C>
std::tuple<std::optional<typename container_traits<C>::value_type>...>
firsts(const C& ...collection) {
  return std::make_tuple(front_opt(collection)...);
}
```

When dealing entirely in parameter packs and pack expansions, C++ and Swift are quite similar. Swift is using keywords `repeat` and `each` to distinguish pack expansions from parameter packs, whereas C++ uses `...` for both, but the model and usage patterns are effectively the same.

### (No) recursive decomposition

With C++ variadic templates, one sometimes needs to step outside of pack expansions and do some template metaprogramming. I didn't actually provide a function body for `describe` function template we started this section with it, but it's likely that it would look something like this:

```cpp
template<typename T>
void describeSingle(bool isFirst, const T &value) {
  if (!isFirst) { 
    std::cout << ", ";
  }
  std::cout << value;  
}

void describeImpl(bool isFirst) {
  std::cout << std::endl;
}

template<typename Head, typename ...Tail>
void describeImpl(bool isFirst, const Head &head, const Tail &...tail) {
  describeSingle(isFirst, head)  
  describeImpl(/*isFirst=*/false, tail...);
}

template<typename ...Args>
void describe(const Args &...args) {
  describeImpl(/*isFirst=*/true, args...);
}
```

The two `describeImpl` functions together form a recursive algorithm: the first one is the basis case of the recursion, printing a newline at the end. The second one is the recursive case: it peels off the first element of the parameter pack (into `head`) and prints it, then recurses by passing the remaining elements of the parameter pack (`tail`) along. This "recursive decomposition" of parameter packs a fairly common way to implement operations with C++ variadic templates.

**There is no recursive decomposition of parameter packs in Swift**, because it doesn't work with separate type checking. The Swift equivalent to the above would produce errors on each call to `describeImpl`, because there's no single function `describeImpl` that handles an arbitrary number of arguments. The error would look something like this:

```swift
describe.swift:13:32: error: cannot pass value pack expansion to non-pack parameter of type 'Head'
11 |   head.describe()
12 |   
13 |   describeImpl(isFirst: false, repeat each tail)
   |                                `- error: cannot pass value pack expansion to non-pack parameter of type 'Head'
14 | }
15 | 
```

In Swift, one must *always* operate on parameter packs via pack expansions, because there's no template metaprogramming to fall back on. Fortunately, it's fairly easy to iterate over all of the elements in a parameter pack with Swift 6.0, because it's the same `for..in` loop one can use with sequences. That brings us to our actual implementation of `describe` in Swift:

```swift
protocol Describable {
  func describe()
}

func describe<each Arg: Describable>(
  _ arg: repeat each Arg
) {
  var isFirst = true
  for current in repeat each arg {
    if isFirst {
      isFirst = false
    } else {
      print(",", separator: "", terminator: "")
    }
    current.describe()
  }
   print("\n", separator: "", terminator: "")
}
```

Everything above feels rather straightforward: we iterate through the parameter pack, where `current` takes on each value in the parameter pack, and do what's appropriate for that value. It's certainly more straightforward than the recursive decomposition, and has the added benefit that is separately type-checked.

### Hidden types

Now, if you think about it a little *too* deeply, it starts to feel a little murky: what *is* `current` anyway? In each iteration, it is a different value plucked from the parameter pack `arg`. So in each iteration, `current` effectively has a different type! In fact, you can't specifically write out what the type of `current`: it has to be inferred and is a hidden type that means "the current element in the parameter pack". However, you do know that `current` is `Describable`, so you can call `describe()` on it.

You might find that you need a name for the type of `current`. Swift doesn't have a direct way to ask for the type of a value (i.e., there's no equivalent to `decltype`), but you can write a generic function to pass `current` to:

```swift
func describeSingle<T: Describable>(isFirst: inout Bool, _ value: T) {
  if isFirst {
    isFirst = false
  } else {
    print(",", separator: "", terminator: "")
  }
  value.describe()
}
```

and then call it from `describe` with `describeSingle(isFirst: &first, current)`.

This same idea of "hidden" types will come up again later when we talk about *type erasure*. But first, let's talk about separate compilation.

---

## Separate compilation

Early on in this post, I noted that Swift's generics support separate compilation. We've mostly focused on separate type checking so far, because that's the most impactful on the programmer: it's what eliminates instantiation-time failures and generally makes it a whole lot easier to work with generic code.

Separate type checking is necessary for separate compilation of generics, but it's not sufficient. Let's step back and consider how C++ compiles templates: when you use a template with some template arguments, the compiler will *instantiate* the template's definition by substituting in the concrete template arguments (`int`, `std::string`, etc.) for the corresponding template parameters (`T`, `U`). Template instantiation is a recursive process, and in the end you'll have code that only contains concrete types: the templates have all been substituted away. This is an important part of both the mental model and the performance model of C++ templates.

In more formal programming-language terms, the "instantiation" process is called "monomorphization". When you have separate type checking, monomorphization never fails, so it can be thought of as just an implementation detail. You can treat generic functions as generic, and the compiler will monomorphize based on the generic arguments you provide. A number of programming languages that have separately type-checked generics work this way.

With separate compilation of generics, you don't need monomorphization. Instead, you compile a generic function or type into a single implementation that can work with any generic argument. Imagine having all of your template definitions in a `.cpp` file rather than in the header, and distributing the compiled object files (say, in a shared library) so clients can use your templates with their own types: that's separate compilation of generics. It also opens up some language features that you might not have realized you were missing, which I'll talk about in the next section.

With Swift's separate compilation of generics, **monomorphization is an optimization**: the compiler can choose to monomorphize uses of generics when it can see both the use and the definition, and it appears profitible. This effectively lets the optimizer decide between having a single implementation (slower due to dynamic dispatch, but shared) and having many monomorphized implementations (faster because each is specialized for a type, but can lead to "template bloat"). Separate compilation of generics provides more language functionality and more options for distribution, but nothing is free. Let's dive in.

### The joys

Separate compilation of generics means that you can distribute implementations of generic functions and types as part of compiled libraries, without having to also ship the source code. Along with the fact that Swift has a stable ABI, this means that you can ship library binaries that make use of the whole language.

Even if you never intent to ship a library without source code, separate compilation allows dynamic dispatch on generic functions. For example, C++ prohibits the definition of a `virtual` function template:

```cpp
virtual.cpp:3:24: error: 'virtual' cannot be specified on member function templates
    3 |   template<typename T> virtual void doSomething() { }
      |    
```

Have you ever thought about *why* this doesn't work in C++? It's because a `virtual` function introduces dynamic dispatch, and for dynamic dispatch to work you need a single place to jump through---say, a single function pointer. But a function template can have any number of template instantiations, and you don't know what they are ahead of time, so there's no way to record all of the function pointers you might ever need.

With separate compilation of generics in Swift, class methods can be generic and overridden:

```swift
class DataManager {
  func merge<Elements: Collection>(elementsOf collection: Elements) {
    // merge all of the elements of the collection
  }
}

class DistributedDataManager: DataManager {
  override func merge<Elements: Collection>(elementsOf collection: Elements) {
    // merge all of the elements of the collection.
  }
}
```

Separate compilation of generics also allows one to move between static and dynamic polymorphism fluidly in Swift. We'll explore *type erasure* more in the next post, but let's give a taste of it here. Any time you have a protocol, you can create a type-erased instance of it using the `any` keyword. An instance of the type `any Describable` can store a value of any type, so long as that type conforms to `Describable`. If the instance is mutable, it can be re-assigned to a value of another type. Think of a [<FontIcon icon="iconfont icon-cpp"/>`std::any`](https://en.cppreference.com/w/cpp/utility/any) or [<FontIcon icon="iconfont icon-cpp"/>`std::function`](https://en.cppreference.com/w/cpp/utility/functional/function) and you'll have the right idea. This lets us easily form (and work with) heterogeneous collections, for example, an array of `Describable` entities where each has a different type:

```swift
var describibles: [any Describable] = []
describibles.append(17)      // okay assuming Int is Describable
describibles.append("hello") // okay assuming String is Describable
```

This is runtime polymorphism, because each element in `describables` can have a different type, and we might not know what the type is until runtime. However, we know that each element is `Describable`, so we can operate on them directly. Let's loop over all of the elements in `describables` with a `for..in` loop to "describe" them all in the same way we did with the parameter pack:

```swift
var isFirst = true
for current in describibles {
  describeSingle(isFirst: &first, current)  // okay, each element in 'current' is Describable
}
```

There's a lot of power here in Swift's ability to move between static polymorphism (generics) and dynamic polymorphism (`any`), which is great for expressing your ideas.

But we all know that with great power, comes great responsibility.

### The sorrows

The main downside of Swift's separate compilation model is that you need to keep the performance model in mind. Using generics from a shared library or using `any` types to introduce runtime polymorphism means additional overhead including more memory allocation (`any` types often need to use heap allocation) and slower execution time (due to indirection through what are effectively vtables). Use these features when it's the right way to solve your problem---runtime polymorphism is *great* when you need it---but don't develop the habit of reaching for them.

In Swift, you're a bit more dependent on the optimizer to eliminate the overhead of generic abstractions. C++ compilers pride themselves on having "zero abstraction penalty", meaning that one can template things to their heart's delight and the runtime code will be as efficient as if the code had been concrete (well, usually, and you do pay dearly in compile times for this privilege).

Swift's optimizer does a lot of monomorphization and inlining, and is improving with every release, so you certainly can get to zero abstraction penality when working with Swift generics and concrete types. However, if you're building massive towers of protocol abstractions, it's going to a lot harder for the compiler to eliminate all of the abstractions, and you'll end up paying for the abstraction either in compile times (as we do in C++) or in runtime performance (also happens in C++, but moreso in Swift).

One thing I've seen play out many times with C++ programmers coming to Swift is that they discover Swift generics and go *wild* with protocols, building massive and intricate protocol hierarchies. I suspect that this is a combination of having the runtime expectations of C++ (abstraction is free at runtime) along with the newly-discovered benefits of separate type checking (abstraction is free at design time) that leads them here. C++ gives you free-at-runtime abstraction but makes it very hard to debug when complicated templates go wrong, so I expect we unconsciously limit ourselves to fewer templates if we can get away with it. With Swift, it's so much easier to build these towers of abstraction that the abstracting itself becomes fun (generic programming is *fun*), and we only realize the pain later on in slower compile times or execution time. Programmers coming to Swift from other languages don't seem as susceptible to this, so dear C++ aficionado---have fun, but exercise *some* restraint.

### Some advice

My main advice is to keep things simple---build the abstractions you need to get useful, reusable generic implementations, but don't get lost in towers of abstraction. Whenever possible, use static polymorphism (generics), and fall back to runtime polymorphism (`any`) when you actually need to vary the types at runtime.

When you have something working, *turn on the optimizer* and *measure the performance* (in that order). That should go without saying, but I think a lot of us feel that we've developed a mental model for the performance of C++, and we get complacent about actually measuring it. The performance model of Swift is a bit different from C++, so it's more important to measure, and you'll develop a mental model over time. Even then, you should still measure---regardless of the language you choose.

---

## Wrap-up

Swift's generics are a wonderful way to do generic programming. Protocols make it easy to describe the type abstractions, and `where` clauses let you express the constraints on a generic function or type. Extensions of protocols make it easier than ever to write generic algorithms, with nary an angle bracket in sight. Conformances make it clear which types implement which protocols, and how.

Throughout your generics journey in Swift, separate type checking has your back. It's hard to express how different it is from the experience of working with C++ templates, because this entire failure mode---instantiation backtraces---is just *gone*. For me, it makes generic programming fun, and I'm never afraid to go generalize some code. You just have to try it.

This has been a very, very long post. Thanks for reading all the way to the end! My next post is going to go further into something we touched on here: *type erasure*. There's a lot of expressivity to be gained in proper use of runtime polymorphism, and we're going to explore it all.

---

<TagLinks />