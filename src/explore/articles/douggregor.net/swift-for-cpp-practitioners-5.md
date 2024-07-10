---
lang: ko-KR
title: "Swift for C++ Practitioners, Part 5: Type erasure & metatypes"
description: "Article(s) > Swift for C++ Practitioners, Part 5: Type erasure & metatypes"
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
      content: "Article(s) > Swift for C++ Practitioners, Part 5: Type erasure & metatypes"
    - property: og:description
      content: "Swift for C++ Practitioners, Part 5: Type erasure & metatypes"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/douggregor.net/swift-for-cpp-practitioners-5.html
prev: /programming/swift/articles/README.md
date: 2024-04-11
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
  "title": "Swift for C++ Practitioners, Part 5: Type erasure & metatypes | Doug's Compiler Corner",
  "desc": "Swift for C++ Practitioners, Part 5: Type erasure & metatypes",
  "link": "https://www.douggregor.net/posts/swift-for-cxx-practitioners-type-erasure/",
  "background": "rgba(22,22,22,0.2)"
}
```

What do you do in C++ when you want to support different types, but don't want to have one template instantiation per type? Yes, you can introduce a class hierarchy with virtual functions, but more often a better answer is to use *type erasure*. Type erasure is a mechanism for *runtime polymorphism*, allowing you to provide different types at runtime while using the same code expressed with a single, concrete type. The C++ standard library contains two type-erased utility types: [<FontIcon icon="iconfont icon-cpp"/>`std::any`](https://en.cppreference.com/w/cpp/utility/any) and [<FontIcon icon="iconfont icon-cpp"/>`std::function`](https://en.cppreference.com/w/cpp/utility/functional/function). In both cases, you can have a concrete value whose underlying type can change:

```cpp
std::any a = 17;              // okay, stores an int
a = std::string("hello");     // now it stores a std::string!

std::function<int(int, int)> op = [](int a, int b) { return a + b; }; // okay, it adds integers
op = [](int a, int b) { return a * b; }                               // now it multiplies them!
```

Type erasure in C++ has been around for a long time, and it's a useful technique. [<FontIcon icon="fas fa-globe"/>Boost.Any](https://www.boost.org/doc/libs/1_84_0/doc/html/any.html) popularized the idea, and now there are numerous blog posts describing implementation techniques and C++ libraries implementing them.
In Swift, it's part of the language, and you can type-erase any protocol using the keyword `any`. In this post, we're going to dive into how Swift handles type erasure, and explore related features like *metatypes* and *opaque types*.

---

## The basics of type erasure

For example, let's bring back that the `Quantifiable` protocol from the last post. It looked like this:

```swift
protocol Quantifiable {
  func cost() -> Double
}
```

One can conform types to `Quantifiable` and write generic algorithms using `Quantifiable` as a constraint. If we want to use runtime polymorphism to store a value of any `Quantifiable` type, we can do so with `any Quantifiable` like this:

```swift
var q: any Quantifiable = 1   // okay, Int conforms to Quantifiable
print(q.cost())               // can use the members of the Quantifiable protocol

q = "Hello"                   // okay, String conforms to Quantifiable
```

You can think of the type of `q` as being "anything that is `Quantifiable`": the actual type isn't known until runtime, and can change by reassigning the variable to another value with a different type.
One can compose multiple protocols together using the `&` sign. For example, a value of type `any Quantifiable & Describable` can hold a value of any type that conforms to both `Quantifiable` and `Describable`, and you can use any operations that are available to a `Describable` type or `Quantifiable` type:

```swift
var dq: any Quantifiable & Describable = 1
dq.cost()
dq.describe()
```

The Swift equivalent to `std::any` is called, simply, `Any`: it is effectively an `any` type with no protocols listed, so it can store a value of any type in it. Now, just like with `std::any`, you can't do much with a value of type `Any` other than copy it around, because there are aren't many operations that work on all types.

---

## Dynamic casting

One thing you can do with values of `Any` type is to perform a runtime check of the actual stored type. This is accomplished with the same `as?` cast we introduced for downcasting to a subclass. For example, here's a function that checks whether a value of type `Any` is actually an `Int`:

```swift
func maybeIntValue(_ value: Any) -> Int? {
  if let integer = value as? Int {
    return integer
  }
  
  return nil
}
```

The same works for `switch` statements, where a `case` can use the `as` operator to apply only when a dynamic cast to the type succeeds. Here's a `switch` to identify a number of concrete types:

```swift
func whatAmI(_ value: Any) {
  switch value {
    case let bool as Bool: print("Bool \(bool)")
    case let integer as Int: print("Integer \(integer)")
    case let double as Double: print("Double \(double)")
    case let string as String: print("String \(string)")
    default: print("I don't know what this is")
  }
}
```

Such a `switch` must have a `default` clause, because there's no way to enumerate every type. The Swift compiler will produce an error `switch must be exhaustive` if you forget.
One particularly important aspect of dynamic casting is that you can cast to an `any` type, which lets you discover the capabilities of a value at runtime. For example, one can cast to `any Quantifiable` to determine whether a value conforms to `Quantifiable`.

```swift
var value: Any = 1
if let q = value as? any Quantifiable {
  print("Cost is \(q.cost())")
}
```

Dynamic casting allows one to rediscover type information that has been removed by type erasure. It's common in very dynamic programs where values are dynamically produced in one place, such as via a global registry or deserialization, and consumed elsewhere. To build something like that, which dynamically creates values of potentially unknown type, we need one more Swift feature: metatypes.

---

## Metatypes

In the prior post on generics, I noted that Swift doesn't have an equivalent to the `decltype` type in C++. Swift does, however, have a function named `type(of:)`, which produces the type of its argument. However, it's not producing a type, but a value representing the type, i.e., a *metatype*.
Metatypes in Swift are spelled with the `.Type` suffix, so if we have a type `Point`:

```swift
struct Point {
  var x: Double
  var y: Double
  
  static var origin: Point = Point(x: 0, y: 0)
}
```

The metatype of `Point` has the type `Point.Type`. One can form a value of this type with the expression `Point.self`.

```swift
let pointType: Point.Type = Point.self
```

What can you do with a metatype? For one thing, you can access static methods and properties, or call an initializer of that type to produce a new value, like this:

```swift
let point = pointType.init(x: 0.0, y: 0.0)
let origin = pointType.origin
```

Technically, when you write `Point(x: 0.0, y: 0.0)`, you're using syntactic sugar for `PointType.self.init(x: 0.0, y: 0.0)`.
The `type(of:)` operation has this generic signature:

```swift
func type<T>(of value: T) -> T.Type
```

So if we pass an instance of `Point` to `type(of:)`, we get back a `Point.Type` instance.

### Class metatypes

Metatypes of structs and enums, by themselves, aren't very interesting, because you could generally just refer to the type. With classes, metatypes become a lot more interesting because an instance of class type could actually store one of its subclasses. Let's build a small class hierarchy:

```swift
class Person {
  var name: String
  
  required init(name: String) {
    self.name = name
  }
  
  class var serializedTypeName: String { "PERSON"}
}

class Programmer: Person {
  var favoriteLanguage: String? = nil
  
  required init(name: String) {
    self.init(name: name, favoriteLanguage: nil)
  }
  
  init(name: String, favoriteLanguage: String?) {
    self.favoriteLanguage = favoriteLanguage
    super.init(name: name)
  }
  
  override class var serializedTypeName: String { "PROGRAMMER" }
}
```

Please ignore the `required` and `class var` for the moment---we'll get there shortly. First, let's imagine that we have a `person` instance, and we ask for its type via `type(of: person)`:

```swift
var person: Person = /*build some kind of person */
var personType: Person.Type = type(of: person)
```

Statically, the type of `person` can only be expressed as `Person.Type`. But dynamically, the `person` instance can store a `Person` object, or a `Programmer` object, or any instance of any other subclass of `Person`. The `type(of:)` operation produces a value of (static) type `Person.Type`, which dynamically could be `Person.self`, `Programmer.self`, or any other subclass's metatype. It's obvious, and a little mind-bending, but then it's obvious again.
What can we do with a metatype? For one, we can use `class` methods and properties, which are the overridable equivalent of `static` methods and properties. (Within a class, `static` is a synonym for `class final`). For example, the following:

```swift
print(personType.serializecClassName)
```

If `person` dynamically stores a `Person` instance, the metatype in `personType` will be `Person.self`, and it'll print `PERSON`. If `person` dynamically stores a `Programmer` instance, the metatype in `personType` will be `Programmer.self` and it'll print `PROGRAMMER`.
We can also initialize a new object by calling `personType.init(name:)`:

```swift
let newPerson = personType.init(name: "Doug")
```

and `newPerson` will have the same type as `person`. Note that this needs the initializer to be marked `required`: a `required` initializer must be implemented by every subclass. They're also needed to satisfy `init` requirements of a protocol to which the class conforms. For example:

```swift
protocol InitByName {
  init(name: String)
}

extension Person: InitByName { 
  // okay, because init(name:) is a required initializer
}
```

Why do we need `required`? Making `Person` conform to `InitByName` implies that every subclass of `Person` also conforms to `InitByName`, because one should always be able to substitute an instance of a subclass where the superclass was expected (this is the [<FontIcon icon="fa-brands fa-wikipedia-w"/>Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)). That means you need to be able to create an instance of any subclass by calling `init(name:)`. Making an initializer `required` ensures that all subclasses (and subclasses of subclasses, and so on) implement it.
At this point, we could build a simple registry mapping from the serialized class names to actual `Person` types:

```swift
var knownPersonTypes: [String: Person.type] = [:]

func addPersonType(_ personType: Person.Type) {
  knownPersonTypes[personType.serializedTypeName] = personType
}

addPersonType(Person.self)
addPersonType(Programmer.self)
```

Then we can build a `Person` instance based on the serialized name and the `name` field:

```swift
func instantiatePerson(className: String, name: String) -> Person? {
  knownPersonTypes[className]?.init(name: name)
}
```

### `any` metatypes

Class metatypes opened up the ability to use dynamic dispatch via subclassing, but there's a more general way: metatypes work with `any`, so we can express the "type of a some type that conforms to a protocol." For example, a value of type `any InitByName.Type` stores the metatype for some type that conforms to `InitByName`. That can be `Person` (or any of its subclasses), or some `struct` or `enum` that conforms to the protocol:

```swift
struct Fruit: InitByName {
	var name: String
  static var serializedTypeName: String { "FRUIT" }
}
```

The same registry code from before works just as well when we generalize `Person` to `any InitByName`. Here it is:

```swift
var knownTypes: [String: any InitByName.Type] = [:]

func addInitByNameType(_ type: any InitByName.Type) {
  knownTypes[type.serializedTypeName] = type
}

func instantiate(typeName: String, name: String) -> (any InitByName)? {
  knownTypes[typeName]?.init(name: name)
}
```

Note how the result of calling the initializer of a value of type `any InitByName.Type` is a value of type `any InitByName`. We don't know what metatype will be stored in the `any InitByName.Type` (although we could check with `as?` or a `case`), but we do know that its instance will conform to `InitByName`, so it's represented as `any InitByName`.

### Explicitly-specified generic function arguments

C++ allows you to explicitly specify the template arguments for a function template. C++ libraries tend to make use of this feature when a type should be explicitly specified by the caller. For example, imagine a "numeric cast" template like this:

```cpp
template<typename To, typename From>
To numeric_cast(const From& from);
```

In C++, the template argument for `To` can't be inferred by a normal call like `numeric_cast(d)`, so we explicitly specify the type at the call site, e.g.,:

```cpp
double d = 17.0;
int x = numeric_cast<int>(d);
```

Now, Swift is actually a bit different here. We can write essentially the same generic function:

```swift
func numericCast<To: Numeric, From: Numeric>(_ value: From) -> To
```

but it's going to behave differently at the call site. Swift's type inference uses more contextual cues that C++'s template argument deduction, so a call like this will work fine in Swift:

```swift
let x: Int = numericCast(d)
```

If you don't have type context to infer the type, i.e., if you just write:

```swift
numericCast(d)  // type inference fails to find a `To` type
```

then type inference will fail to infer a `To` type. An `as` coercion can fix this:

```swift
numericCast(d) as Int
```

Given that type inference usually figures out the types for us, and Swift already has the general notion of using `as` to provide type information when it doesn't, Swift never got the ability to explicitly provide generic arguments for functions. `numericCast<Int>(d)` is an error in Swift.

But what if you *want* to require the type to be specified at the call site, and not rely entirely on type inference? Turns out that you can use metatypes, and the result is really nice:

```swift
func numericCast<From: Numeric, To: Numeric>(_ value: From, to type: To.Type) -> To
```

Here, we've added a `to` parameter of the metatype of `To`. The user specifies the metatype of the type to convert to at the call site, like this:

```swift
let x = numericCast(d, to: Int.self)
```

The type of `To` is inferred from the argument. It also reads really nicely: "numeric cast `d` to `Int`".

Will Swift eventually gain the ability to explicitly specify the generic arguments of a generic function? Maybe someday, but not having this feature led to the discovery of the metatype-based solution above, and I think the end result is better for readability.

---

## Associated types

Associated types have some interesting interactions with type erasure. Let's explore those now, bringing back the `Collection` protocol from the prior post on Swift generics to develop these ideas further:

```swift
protocol Collection {
  associatedtype Value
  associatedtype Index: Equatable

  var startIndex: Index { get }
  var endIndex: Index { get }
  func index(after index: Index) -> Index
  
  subscript(index: Index) -> Value { get }
}

extension Collection {
  var first: Value? { 
    startIndex == endIndex ? nil : self[startIndex]
  }
}
```

### Erasure of associated types

Let's say we have a value `c` of type `any Collection`:

```swift
var c: any Collection
```

At runtime, `c` could store an `[Int]` or a `[String: (any InitByName).Type]`, or a `Set<String>` or any other collection. If we ask for the `first` value in `c`:

```swift
let f = c.first
```

what type should we expect to get? We know it's the `Value` type of the underlying collection, but since we don't know what the collection itself is, we don't know the `Value` type of it, either. Therefore, the type of the `first` is also type-erased by replacing each occurrence of an associated type (here, it's `Value`) with an `any` type based on the constraints placed on that associated type. There are no constraints on `Value`, so the type of `first` (`Value?`) is type-erased to `Any?`.
For an associated type like `Index` that has constraints, we'll get a more interesting resulting type: `Index` will be type-erased to `any Equatable`, so if we grab the start and end index of our collection, we'll get `any Equatable` values:

```swift
var si = c.startIndex   // inferred type is 'any Equatable'
let ei = c.endIndex     // inferred type is 'any Equatable'
```

The type erasure for associated types happens automatically, and generally means that once you've erased some type information, that type information stays erased until you do something explicit to bring type information back. Most of the time, that's fine, but it can be surprising.

### Equality of types

Now that we have the start and end indices, it's completely reasonable that we'd want to be able to loop over the elements of our collection `c`, perhaps like this:

```swift
while si != ei {
  let element = c.subscript[si]
  doSomething(element)
  si = c.index(after: si)
}
```

However, this can't work. Let's focus on the `si != ei`, which is trying to use the `!=` operator from the `Equatable` protocol:

```swift
protocol Equatable {
  static func ==(lhs: Self, rhs: Self) -> Bool
  static func !=(lhs: Self, rhs: Self) -> Bool
}
```

Remember that `Self` is the actual, concrete type that conforms to the protocol `Equatable`. When we write `si != ei`, where each of `si` and `ei` are of type `any Equatable`, the actual type for `Self` is stored inside that `any Equatable` and can vary at runtime. Here in the call, there's no static guarantee that both `si` and `ei` have the same underlying type as run-time, so the compiler has to reject the call. Otherwise, we could end up trying to compare an `Int` to a `String`, but there's no operator for that.

### Opening `any` types

To make this work, we're going to have to *dynamically* check that both sides have the same type, *then* use their operator. Let's build a function to check equality of two distinct `Equatable` types. To do so, we're going to use generics:

```swift
func isEqual<T: Equatable, U: Equatable>(_ lhs: T, rhs: U) -> Bool {
  if let rhsAsT = rhs as? T {
    return lhs == rhsAsT
  }
  
  if let lhsAsU = lhs as? U {
    return lhsAsU == rhs
  }
  
  return false
}
```

The types `T` and `U` could be different, so we first try to cast `rhs` to a `T`: if that succeeds, we can compare the values as `T` instances because `T` is `Equatable`. We also try in the other direction, to compare as `U` instances (via `U: Equatable`). If both fail, the types are incomparable, and we return `false`. Now, our loop condition can be

```swift
while !isEqual(si, ei) { ... }
```

But how does that *work*? We passed two `any Equatable` values (which are firmly runtime-polymorphic) into a generic function (which is statically-polymorphic), and it... just... works. This is what I meant be moving between static and dynamic polymorphism in Swift.

What's happening under the hood is called "opening" the `any` type. Effectively, the compiler is reaching in to each `any Equatable` value to pull out the concrete type, and binding the appropriate generic parameter (`T` or `U`) to that concrete type. Swift can do this due to separate compilation of generics, so the `isEqual` function implementation can work with types that aren't known until runtime.

We could write a similar function to perform the subscript of the collection, but it would be a lot easier if we turned the whole loop into a generic function on the collection. Say, a for-each operation:

```swift
func forEach<C: Collection>(_ c: C, body: (C.Value) -> Void) {
  var si = c.startIndex
  let ei = c.endIndex
  while si != ei {
    let current = c[si]
    body(current)
    si = c.index(after: si)
  }
}
```

This operation is generic: we have a name for the collection type (`C`), and know the relationship to its `Value` and `Index` types, so we have strong type equality. We can call this function with a value of type `any Collection`:

```swift
forEach(c) { element in
  doSomething(element)
}
```

That call opens up the type of `c`, binding it to `forEach`'s generic parameter `C`. The call itself still needs to erase the associated type, so the `element` parameter of the closure will be the type-erased `Value` type, i.e., `Any`.

### Primary associated types

Sometimes, it can be useful to be able to make some of the associated types concrete even when using an `any` type. For example, we might want to be able to take any collection stores `String` values. We can do so with *primary* associated types, which use generic argument syntax to specify associated types. The primary associated types are listed in angle brackets following the protocol name:

```swift
protocol Collection<Value> {
  associatedtype Value
  associatedtype Index: Equatable
  // ...
}
```

This enables `any` types to specify the `Value` type. For example, `any Collection<String>` is any type that conforms to `Collection` and has `String` as its value type. A value of such a type could store a `[String]`, `Set<String>`, or other collection:

```swift
var strings: any Collection<String>
strings = ["Hello", "World"]
print(strings.first ?? "Empty collection") // "Hello"
strings = ["Hello", "World"] as Set<String>
print(strings.first ?? "Empty collection") // "Hello" or "World"; ordering in sets is not guaranteed

strings = [1, 2, 3] // error: cannot convert value of type 'Int' to expected element type 'String' 
```

Even when there are primary associated types, one can use `any` types without mentioning them. In such cases, the associated type will be type-erased. For example, with the above protocol, `any Collection` will have its `Value` type type-erased to `Any`.

Why did we choose to make `Value` a primary associated type and not `Index`? It's all about the use cases, and here your instincts from C++ containers will serve you well: you generally care about the value type of a container because you're operating on its elements, but its iterator type is generally not interesting except as a mechanism to get at the elements. More importantly, although you generally get to choose the value type of your container, but the iterator comes with it, so only the value type makes sense as a primary associated type.

---

## When to type-erase?

Type erasure via `any` is not free: an instance of an `any` type has a fixed-sized buffer along with information about the (dynamically) stored type and each of the protocols that type conforms to. When the stored value is larger than that buffer, the `any` instance will be heap-allocated. Every operation on an instance of `any` goes through the equivalent of a `virtual` method dispatch, including copying and destruction. If you've ever looked into the implementation of `std::any` or `std::function`, you'll have a good mental model for how `any` types work under the hood in Swift, and why they aren't cheap. The Swift optimizer will do some amount of specialization of `any` types, but for it to succeed it needs to see both the creation and use of the `any` type, so it's not recommended to rely heavily on this optimization.

Use `any` types when you need to store heterogeneous data that potentially accepts any number of types. If there's a small, fixed number of types that you might store (say, a choice among a few basic types), consider using an `enum` instead:

```swift
enum StoredValue: Hashable {
  case integer(Int)
  case floating(Double)
  case string(String)
}
```

Operations on the `StoredValue` enum will be more efficient than operating on an `any Hashable` instance, because `StoredValue` is a concrete type.

More importantly, prefer generic operations to operations on `any` values. There is no reason to have a function that accepts a single `any` value, for example:

```swift
func operateOnAny(strings: any Collection<String>) { ... }
```

because the same function can be expressed generically as follows:

```swift
func operateOnAny<C: Collection>(strings: C) where C.Value == String { ... }
```

Due to opening of `any` types, which we talked about earlier, the two functions above are effectively interchangeable for callers. The generic function is better for performance, however, both because calls passing a concrete type like `[String]` avoid the formation of the `any Collection<String>` value and because it's easier for the compiler to specialize the generic version for `[String]` when it's profitable.

This is another place where your C++ instincts are good and you shouldn't ignore them: you wouldn't write a function to take a `std::any` parameter unless you really couldn't write it as a function template taking an arbitrary `T`, so think of `any` types the same way in Swift.

It's a *little* unfortunate that the more efficient generic function is more verbose than the less-efficient one. I've been holding off on introducing one last bit of syntactic sugar that gets rid of that advantage, because it needs a little explanation. Spoiler alert: the `some` keyword is used to introduce unnamed generic parameters with syntax parallel to that of `any` types, so the second function can be written as:

```swift
func operateOnAny(strings: some Collection<String>) { ... }
```

Each `some` type introduces an unnamed generic parameter whose constraints are listed after the `some`. Swift `some` types are also called *opaque* types, because they hide the name of the underlying type: an unnamed generic parameter can't be named (duh), so the actual collection type based into `operateOnAny(strings:)` is hidden from the function body. Opaque types are also useful in the return type of a function to hide the specific return type from the caller.

---

## Implementation hiding with opaque types

`any` types effectively hide the underlying type from clients, allowing it to change dynamically at run time. These are two different things: the first is about hiding implementation details behind an abstraction barrier (e.g., we know that we have a `Collection` of `String`s, but not the specific type of the collection itself) and the other is about allowing the underlying representation to change dynamically (e.g., we can choose `Set<String>` or `[String]` depending on what's best for the problem at hand).
Swift has a notion of *opaque* types that let you hide the implementation type behind an abstraction barrier without allowing it to change dynamically at runtime. This gives you, as the implementer, the freedom to limit your API surface area (by not exposing specific conrete types) and evolve your implementations over time, without breaking clients. For example, let's consider implementing a generic function `uniqued` on a `Collection` that produces a new collection with duplicates removed. We could have such a function return a `Set`:

```swift
extension Collection where Value: Hashable {
  func uniqued() -> Set<Value> {
    return Set<Value>(self)
  }
}
```

That implementation was easy, but it's perhaps not the best one. It might be better to unique into an array and return that, or return some different type entirely. The problem is that we have to decide right at the point where we create this function what the act type will be, and assess all of the tradeoffs.
We could introduce a special type to capture the "uniqued collection", like `UniquedCollection<Self>`. That's probably what we would do in C++, perhaps burying it in an `impl` or `detail` namespace to discourage users from depending on it.
Opaque types let us describe the result type based on its capabilities (in terms of protocols) without stating its identity:

```swift
extension Collection where Value: Hashable {
  public func uniqued() -> some Collection<Value> {
    return Set<Value>(self) // okay, Set<Value> is a Collection<Value>
  }
}
```

A user that calls `uniqued()` can't spell the type of the result, but it can be inferred and is known to be a collection containing the same value type as the collection it was applied to:

```swift
let uniquedNumbers = [1, 1, 2, 3, 5, 8].uniqued()   // okay, type is opaque to the user
print(uniquedNumbers.first)                         // prints the (1)
```

If we later decide to change the type returned by `unique()`, we can, because we never exposed the type to the user. So we can change our implementation to produce an array:

```swift
extension Collection where Value: Hashable {
  public func uniqued() -> some Collection<Value> {
    return Array(Set<Value>(self)) // okay, unique via a set but return an array
  }
}
```

or a private type of some sort:

```swift
private struct UniquedCollection<C: Collection>: Collection where C.Value: Hashable {
  // ...
}

extension Collection where Value: Hashable {
  public func uniqued() -> some Collection<Value> {
    return UniquedCollection(self) // okay, unique via a set but return an array
  }
}
```

Because the type is opaque to clients, these implementation changes won't affect them at all: they're under-the-hood improvements made by the author of `uniqued()`.

### `some` vs. `any`

In Swift, `any` types can be read to mean "any type that satisfies these requirements" whereas `some` types are read to mean "some specific type that satisfied these requirements". The key point here is that `some` types maintain identity whereas `any` types do not: if I take that `uniquedNumbers` type from above, I can iterate over it directly:

```swift
let uniquedNumbers = [1, 1, 2, 3, 5, 8].uniqued()
var ci = uniquedNumbers.startIndex
let ei = uniquedNumbers.endIndex
while ci != ei { // okay, Index type of the opaque type of uniquedNumbers
  print(uniquedNumbers[ci])
  ci = uniquedNumbers.index(after: ci)
}
```

This puts some restrictions on the body of functions returning `some` types. Specifically, every `return` statement must produce a value of the same type. This is called the *underlying type*, and the Swift compiler will detect a mismatch:

```swift
66 | extension Collection where Value: Hashable {
67 |   func uniqued() -> some Collection<Value> {
   |        `- error: function declares an opaque return type 'some Collection<Value>', but the return 
   |           statements in its body do not have matching underlying types
68 |     if isEmpty {
69 |       return [Element]()
   |                      `- note: return statement has underlying type '[Self.Value]'
70 |     }
71 | 
72 |     return Set<Element>(self)
   |                       `- note: return statement has underlying type 'Set<Self.Value>'
73 |   }
74 | }
```

Note that the identity of the underlying type is hidden from clients of the function, but it is known to the compiler, so hiding a type via an opaque type isn't a performance pessimization the way an `any` type is.

### Hiding complicated result types

Opaque result types really shine when they're used to hide unnecessary implementation details. To see what I mean, think about the types that are produced from a C++ library that uses [<FontIcon icon="fa-brands fa-wikipedia-w"/>expression templates](https://en.wikipedia.org/wiki/Expression_templates): every single operator introduces another wrapper type (often two of them), producing a final result whose type encodes the entire operation. For example, one might have a `parallel_array` type that uses expression templates, and an expression like:

```cpp
auto result = a * x + b
```

would produce a type such as `expr<add_expr<expr<mul_expr<expr<parallel_array<double>>, expr<double>>>, expr<parallel_array<double>>>`. Add some namespace qualifiers in there and it gets overwhelming, fast.
It gets particularly bad when you have to name the result type for some reason, e.g.,

```cpp
template<typename A, typename X, typename B>
expr<add_expr<expr<mul_expr<A, X>>, Y> mul_add(A a, X x, B b) {
  return a * x + b;
}
```

Expression templates can be a useful tool in Swift for the same reasons they're useful in C++, and Swift would have exactly the same issue with an explosion in user-facing types from simple uses. However, opaque result types let us hide the information behind a `some` type. For example,

```swift
protocol ArrayExpr<Value> {
  associatedtype Value: Numeric
}

private struct MulScalarOp<LHS: ArrayExpr>: ArrayExpr {
  typealias Value = LHS.Value

  init(lhs: LHS, rhs: LHS.Value) { ... }
}

func *<Value>(lhs: some ArrayExpr<Value>, rhs: Value) -> some ArrayExpr<Value> { 
  MulScalarOp(lhs: lhs, rhs: value)
}

private struct AddArrayOp<LHS: ArrayExpr, RHS: ArrayExpr> where LHS.Value == RHS.Value {
  typealias Value = LHS.Value

  init(lhs: LHS, rhs: RHS) { ... }
}

func +<Value>(lhs: some ArrayExpr<Value>, rhs: some ArrayExpr<Value>) -> some ArrayExpr<Value> { 
  AddArrayOp(lhs: lhs, rhs: rhs)
}
```

Now, code like this:

```swift
let result = a * x + b
```

produces an opaque type like `some ArrayExpr<Double>` that avoids exposing all of the implementation details of the expression templates. Add operation like the C++ `mul_add` earlier can be expressed in terms of opaque types so one never has to name the complicated types:

```swift
func mulAdd<Value>(_ a: some ArrayExpr<Value>, _ x: Value, _ b: some ArrayExpr<Value>) -> some ArrayExpr<Value> {
  a * x + b
}
```

We're still expressing the fundamental type constraints here: both `a` and `b` are array expressions of some type, whose underlying value type is `Value`, and `x` is a scalar of type `Value`. But we've abstracted away the actual array expression types so they can be propagated behind-the-scenes.

However, the compiler can still see the underlying types, so it can optimize the expression templates in the same manner one would expect.

---

## Wrap up

Type erasure in Swift leverages the same notion of protocols and constraints as generics, but moves from the realm of static polymorphism (concrete types known at compile time) to runtime polymorphism (types only known at runtime). Type erasure makes it easy to create heterogeneous data structures, which contain values of types not known until runtime.

Because of Swift's model of separate compilation, one can move easily between static and dynamic polymorphism: a value that conforms to a protocol `P` can be type-erased into a value of type `any P`, moving from static to dynamic polymorphism. Conversely, a value of type `any P` can be passed to a generic function requiring a type conforming to `P`, moving from dynamic back to static polymorphism. So while most of the time you should probably be using generics for abstraction, because they maintain more type information and are therefore easier to optimize, you can use type erasure locally in those places where you need the runtime polymorphism.

We also discussed metatypes. Metatypes are first-class values in Swift, and are the answer to the question "what's the type of this value?". Metatypes can be used to identify the types of values, construct new instances of the identified type (when there is a suitable `init` requirement), and dynamically query the capabilities of a given type with queries such as "does this type conform to the protocol `Decodable`?".

Next up, we'll explore Swift's take on error handling, comparing against C++'s model of exceptions.

---

<TagLinks />