---
lang: ko-KR
title: "Swift for C++ Practitioners, Part 1: Intro & Value Types"
description: "Article(s) > Swift for C++ Practitioners, Part 1: Intro & Value Types"
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
      content: "Article(s) > Swift for C++ Practitioners, Part 1: Intro & Value Types"
    - property: og:description
      content: "Swift for C++ Practitioners, Part 1: Intro & Value Types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/douggregor.net/swift-for-cpp-practitioners-1.html
prev: /programming/swift/articles/README.md
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
  "title": "Swift for C++ Practitioners, Part 1: Intro & Value Types | Doug's Compiler Corner",
  "desc": "Swift for C++ Practitioners, Part 1: Intro & Value Types",
  "link": "https://www.douggregor.net/posts/swift-for-cxx-practitioners-value-types/",
  "background": "rgba(22,22,22,0.2)"
}
```

> 2024.02.11

There is a [<FontIcon icon="fa-brands fa-swift"/>Getting Started](https://www.swift.org/getting-started) guide for Swift that's good for a general audience. However, I've noticed that folks coming from C++ tend to struggle with certain aspects of Swift's design, and can get themselves stuck. I think I understand why: the two languages feel similar enough that someone familiar with C++ will take the idioms and patterns from C++ and project them on to Swift, which doesn't always end up well. So, I want to take a different approach to teaching Swift that is specifically geared toward C++ "practitioners": folks who write C++ day-to-day and understand not only the C++ language, but its standard library and best practices. For you, dear C++ practitioner, I want to teach Swift by mapping from the idioms, patterns, and mental model of C++ into Swift. My hope is that you'll come through this series of posts not just learning Swift, but learning how to use Swift *well*.

As a C++ programmer, some parts of Swift will feel like magic, such as separately type-checked generics and value types that compose beautifully, and we'll revel in those. I'll show how some of the aspects of C++ that we've collectively come to view as problematic, such as wrong defaults or avoidable foot guns, are addressed by Swift's design. Other parts of Swift will grate against the sensibilities of a C++ practitioner, and we won't shy away from those, either. Instead, we'll explain what is different, why Swift is designed that way, and how to cope. I live in both worlds: I'm a Swift designer, implementer, and advocate, and yet I've a long history with C++ that includes being a code owner of Clang and spending a decade on the ISO C++ committee. Most of the code I write day-to-day is in the Swift compiler, which is mostly C++ but is migrating toward Swift.

::: note

You may have heard about [<FontIcon icon="fa-brands fa-swift"/>Swift's interoperability with C++](https://www.swift.org/documentation/cxx-interop). It's a fantastic tool for incrementally moving a C++ code base toward Swift or wrapping up a C++ library in a nicer Swift interface. However, it's the wrong place to start if you know C++ already and want to learn Swift. Instead, I recommend building something purely in Swift first, to get the feel for Swift without the "pull" of existing C++ code toward more C++-centric patterns. You'll be able to integrate Swift better into your existing code bases once you have a solid understanding of both languages.

:::

This is a multi-part series that will walk through the various features of Swift. We'll start with the obligatory "Hello, world" and then dive straight into *value types*.

---

## Hello, World!

Okay, let's get this over with: this is "Hello, World" in Swift:

```swift
print("Hello, world!")
```

But it's more important to greet you, dear C++ practictioner, so let's customize it a little bit:

```swift
let reader = "dear C++ practitioner"
print("""
      Hello, \(reader)!
      
      Today, we shall embark on learning a new programming language, Swift.
      """)
```

The `let` is how we declare an immutable variable, like `const` in C++, but with stronger guarantees: we'll get to that later. We've omitted the type because Swift does type inference in a manner that's similar to `auto` in C++, but we could have written the type explicitly with `let reader: String`. The triple-quotes describe a [<FontIcon icon="fa-brands fa-swift"/>multi-line string literal](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters#Multiline-String-Literals), and the `\(...)` syntax within it is [<FontIcon icon="fa-brands fa-swift"/>string interpolation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/stringsandcharacters#String-Interpolation), a feature common in scripting languages that makes it easy to plug values into the middle of a string.

---

## Value types

C++ provides rich support for *value types*, i.e., types for which each copy is completely independent of the original. Let's take a simple example with C++ vectors:

```cpp
std::vector<std::string> v1 = { "Hello", "original" };
std::vector<std::string> v2 = v1;
v2[1] = "copy";
```

Here, `v1` is a vector containing `"Hello"` and `"original"`. When we make a copy `v2`, that copy is completely independent of the original: the change to `v2` on the last line, so that it contains `"Hello"` and `"copy"` , doesn't modify the original `v1`.

Many C++ types are value types, from builtin types like integers and floating-point types to standard library containers like `std::string`, `std::vector`, and `std::map`. C++ lets you build your own value types by letting you control how a class type is created, copied, and destroyed, so long as you follow the [<FontIcon icon="iconfont icon-cpp"/>Rule of Three/Five/Zero](https://en.cppreference.com/w/cpp/language/rule_of_three).

Swift also emphasizes value types because they aid *local reasoning*, which is the ability to look at code in isolation and reason about what it does, and whether it does so correctly. When you copy an instance of a value type, you don't need to worry that something you do will affect the original. As in C++, many Swift types are value types, including `String`, `Array`, and `Dictionary`, which are analogous to `std::string`, `std::vector`, and `std::map`:

```swift
let v1: [String] = ["Hello", "original"] // [String] is an array type, can also be spelled Array<String>
var v2 = v1 // inferred to also have type [String]
v2[1] = "copy"
print(v1) // prints ["Hello", "original"]
print(v2) // prints ["Hello", "copy"]
```

Here we've introduced the `var` keyword: `var` introduces variables that can be modified (i.e., they are mutable), whereas `let` introduces variables that cannot be modified (they are immutable). In Swift, we prefer that you use `let` wherever you can, because immutability aids local reasoning: it's easier to reason about something if it isn't changing.

### Aggregating values in structs

As in C++, Swift has structs to aggregate data together. While in C++ the difference between `struct` and `class` is almost cosmetic (it only impacts whether the defaults are `public` vs. `private`), in Swift they are completely different animals. A Swift `struct` is generally a value type, whereas a Swift `class` is a class in the Object-Oriented sense of the word, and has *reference semantics*: copies still refer to the same underlying instance. We'll get back to classes in a later post, because `struct`s are one way we build value types out of other value types:

```swift
struct LabeledPoint {
  var x: Double
  var y: Double
  var label: String
}
```

Structs containing other value types are themselves value types. For example, let's use that labeled point:

```swift
let p1 = LabeledPoint(x: 0, y: 0, label: "origin")
var p2 = p1
p2.label = "center"

print(p1) // LabeledPoint(x: 0, y: 0, label: "origin")
print(p2) // LabeledPoint(x: 0, y: 0, label: "center")
```

That first line is creating a new instance of a `LabeledPoint`, calling an *initializer* (that's what Swift calls constructors) to produce the new value from the component parts. The result is on the stack, not the heap, just like you'd expect in C++. Copying the `p1` value into `p2` produces a completely separate value, just as you'd expect from the corresponding C++ code.

::: info Labeled arguments

When creating the new `LabeledPoint` instance, notice that each of the arguments requires a label, e.g., `x:`, `y:`, and `label:`. By default, all function arguments must be labeled at the call site, which communicates information about what the function will be doing with the corresponding argument, aiding readability. This is particularly useful when combined with default arguments. A function can opt out of having a particular argument labeled, of course, and we'll get back to that later.

:::

### Initialization always goes through initializers

C++ has a couple of different ways to initialize an instance of a `struct`, including constructor calls, initializer lists, default initialization, and copy initialization. Swift settles on one: calling an initializer. Initializers are responsible for initializing all of the fields of the struct before they return (no excuses). The creation of the `LabeledPoint` in the previous section is using the *memberwise* initializer that Swift provides automatically for structs, which initializes the fields in order from the corresponding parameters. We could go ahead and write out this initializer directly if we wanted to, like this:

```swift
struct LabeledPoint {
  var x: Double
  var y: Double
  var label: String
  
  init(x: Double, y: Double, label: String) {
    self.x = x
    self.y = y
    self.label = label
  }
}
```

The `init` keyword is what defines an initializer, and is the equivalent of repeating the class name in C++ to define a constructor, but usually less verbose. `self` is the Swift equivalent to `this`, but think of it as being a like a C++ reference (`ClassName&`) rather than a pointer like it would be in C++ (`ClassName*`).

There is no special syntax for initializing the fields in a `struct`, like there is in C++. Instead, it's just normal assignments to the fields, and the compiler checks that (1) you don't read a field before it's been assigned, and (2) all fields have been assigned before `self` is referenced as a whole object, including the function return. So let's try out a semantic disaster of an initializer that breaks both rules:

```swift
// in LabeledPoint ...
init(x: Double, y: Double, label: String) {
  self.y = self.x   // error: 'self' used before all stored properties are initialized
  self.x = x
  if Int.random(in: 0..<2) == 1 {
    print(self) // error: 'self' used before all stored properties are initialized
  }
} //  error: return from initializer without initializing all stored properties
```

Uses of uninitialized variables don't happen in Swift, because of a semantic guarantee called *definite initialization*: the compiler checks that every variable is initialized before it is used, in all execution paths. This applies equally to all code, and it helps define away a class of bugs that bite us in C++:

```swift
let p: LabeledPoint
if y > 0 {
  p = LabeledPoint(x: 0, y: 0, label: "origin")
}
print(p) // error: constant 'p' used before being initialized
```

Because of definite initialization, Swift has no notion of a default constructor the way C++ does. The variable `p` *is not initialized* on the line where it is defined, the way a C++ class with a non-trivial default constructor would be. Rather, you assign to it, and the first assignment is an initialization. You can't read from it before initializing it, so there is no *undefined behavior* due to uninitialized values.

You could write an initializer that takes no arguments, and perhaps that makes sense for points to (say) create the origin point, but Swift will never automatically call it: you'll always call it explicitly. Let's write that out so we can demonstrate the Swift equivalent to C++ [<FontIcon icon="fa-brands fa-microsoft"/>delegating constructors](https://learn.microsoft.com/en-us/cpp/cpp/delegating-constructors?view=msvc-170):

```swift
// also in LabeledPoint
init() {
  self.init(x: 0, y: 0, label: "origin")
}
```

The call to `self.init` delegates the responsibility for initializing all of the fields of `self` to another initializer. The rules of definite initialization kick in here, too: you can't use (or initialize) any of the fields of `self` before the `self.init` call, and after that call `self` is fully initialized.

### Where's my copy constructor?

By now, you've probably noted that we could write an initializer that looks very much like a copy constructor:

```swift
// also in LabeledPoint
init(_ other: LabeledPoint) {
  self.x = other.x
  self.y = other.y
  self.label = other.label
}
```

The `_` in the declaration of `other` is a placeholder for "not named", and here it means that the argument to this initializer is not named. Therefore, we can call this initializer with the syntax `LabeledPoint(other)`, just like one would in C++. However, Swift will never *implicitly* call an initializer like this, because it's not special in any way.

Swift will copy, move, and destroy instances of structs by performing those operations directly on each instance property of the `struct`. In essence, a Swift `struct` always follows the [<FontIcon icon="iconfont icon-cpp"/>C++ rule of zero](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rc-zero), where one relies on the default implementations of all of the special constructors, assignment operators, and destructor. In practice, this means that it's not possible to observe when Swift is making copies of value types, so the compiler is free to make copies that are necessary for implementing the semantics of the program, and optimize away copies when they are no longer needed. The compiler can even implicitly turn a "copy" into a move when it determines that the source of the copy is going away.

For a type that needs hold on to resources, Swift has classes, which I've already noted will be the subject of another post. Swift also has a notion of "noncopyable" types, but those will come much later. For now, we'll dive deeper into value types.

### Immutability runs deep with value types

Earlier, we introduced `let` as a way to create immutable local variables. With value types, immutability is the default. Parameters are immutable unless otherwise specified, which also includes `self`:

```swift
// in LabeledPoint
func badSwapX(_ other: LabeledPoint) {
  let tmpX = other.x
  other.x = self.x  // error: 'other' parameter is immutable
  self.x = tmpX     // error: 'self' parameter is immutable
}
```

One can create methods that mutate `self` by putting the `mutating` modifier before the `func` keyword. Let's start with a sensible example:

```swift
// in LabeledPoint
mutating func reflectOverXAxis() {
  y = -y
}
```

For other parameters, one can place `inout` on the parameter to indicate that it is meant to be modified by the function. Formally, `mutating` on the function is equivalant to `inout` on the `self` parameter, but Swift uses `mutating` because it reads better. With `inout` parameters and `mutating` methods, we can write a working version of the `badSwapX` method:

```swift
// in LabeledPoint
mutating func swapX(_ other: inout LabeledPoint) {
  let tmpX = other.x
  other.x = self.x
  self.x = tmpX
}
```

When calling a function with an `inout` argument, the argument must be prefixed with `&` to indicate that we're passing it's (logical) address to the function. For example, here's a call to `swapX`:

```swift
var p1 = LabeledPoint(x: 0, y: 0, label: "Origin")
var p2 = LabeledPoint(x: 1, y: 1, label: "Upper right unit")
p1.swapX(&p2)
```

If the value we are trying to apply `&` to is immutable, the Swift compiler would produce an error. Note that there is no prefix `&` on `p1`, even though it's calling a `mutable` method: it's not needed because the name of the method should [<FontIcon icon="fa-brands fa-swift"/>clearly imply the mutation](https://www.swift.org/documentation/api-design-guidelines/). Of course, if `p1` were immutable, it would still be an error.

There are two more important things to say about immutability before we move on to our next kind of value type, `enum`.

First, you *cannot cheat immutability* any more than you can cheat Death. There is no equivalent to the C++ `const_cast` in Swift. There are no `mutable` data members in Swift; even a `var` member of a struct can only be modified on a `var` instance of that struct. There are no `const T&` parameters whose values can change out from underneath you: an immutable value is truly immutable, and the compiler makes sure that no matter how an immutable parameter is actually passed (by-value or by-reference), the underlying value won't change. This can be frustrating, because you've given up control about when to pass by-value, pass by `const` reference, or pass by rvalue reference to do a move. On the other hand, it is liberating: there's no spooky-action-at-a-distance when that `const&` actually *does* change underneath you, and you can lean on immutability to make it easier to reason about your code.

That brings us to the second point: *there is no aliasing of inout parameters*. Aliasing, as I mean it here, is when two different pass-by-reference parameters actually refer to the same underlying instance. If you've ever had to go add an `if (this == &other) { ... }` check into your copy or move assignment operator in C++, you know just how vicious unexpected aliasing of parameters can be for program semantics. In Swift, we have the [law of exclusivity (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/main/docs/OwnershipManifesto.md#the-law-of-exclusivity), which prevents any such aliasing.

### Memory safety and the law of exclusivity

Swift's *law of exclusivity* states that two accesses to a given value in memory can only occur simultaneously if both of them are reads, so it is an error to (for example) try to form a mutating access (such as passing something `inout`) while accessing that value. But this isn't some abstract rule that introduces undefined behavior when you mess up: Swift enforces the law of exclusivity through a combination of static checking (which can produce compiler errors if you produce aliasing) and dynamic checking (when it's not possible for the compiler to prove that there is no aliasing).

Static checking of the law of exclusivity applies when the value being accessed is sufficiently local that it's possible to reason about all possible accesses to that value. Value types are great for this, because two independent `var` instances of value type are guaranteed not to alias. The compiler can correctly determine that the two `inout` arguments in the call `p1.swapX(&p2)` do not alias, because `p1` and `p2` are separate variables. If one instead wrote `p1.swapX(&p1)`, the compiler would produce an error describing the problem:

```
=== exclusivity.swift:28 ===
   ┆
26 │   var p1 = LabeledPoint(x: 0, y: 0, label: "Origin")
27 │   var p2 = LabeledPoint(x: 1, y: 1, label: "Upper right unit")
28 │   p1.swapX(&p1)
   │   │        ╰─ note: conflicting access is here
   │   ╰─ error: overlapping accesses to 'p1', but modification requires exclusive access; consider copying to a local variable
29 │ 
```

Now, if we're dealing with a variable that isn't local---say it's a global variable (gasp!) or a member of a reference type like a `class`, then it's impossible to reason about all of the accesses. Let's build a small contrived example of this:

```swift
var globalOrigin = LabeledPoint(x: 0, y: 0, label: "origin")

func swapXWithGlobalOrigin(_ other: inout LabeledPoint) {
  other.swapX(&globalOrigin) // is this safe?
}

func somewhereElse() {
  swapXWithGlobalOrigin(&globalOrigin) // uh oh
}
```

Within `swapXWithGlobalOrigin`, there is no way to know whether some other part of the program might access `globalOrigin` while it runs. So, the Swift compiler will insert a runtime check that tracks when `globalOrigin` is potentially being modified, and will stop the program if a simultaneous access occurs:

```
Simultaneous accesses to 0x100e93008, but modification requires exclusive access.
Previous access (a modification) started at t`somewhereElse() + 42 (0x100e8e95a).
Current access (a modification) started at:
0    libswiftCore.dylib                 0x00007ff82b380890 swift::runtime::AccessSet::insert(swift::runtime::Access*, void*, void*, swift::ExclusivityFlags) + 444
1    libswiftCore.dylib                 0x00007ff82b380ae0 swift_beginAccess + 66
2    t                                  0x0000000100e8e8d0 swapXWithGlobalOrigin(_:) + 59
3    t                                  0x0000000100e8e930 somewhereElse() + 51
4    t                                  0x0000000100e8ea40 static Main.main() + 9
5    t                                  0x0000000100e8ea50 static Main.$main() + 9
6    t                                  0x0000000100e8ea70 main + 9
7    dyld                               0x00007ff81aaa9c10 start + 1942
Fatal access conflict detected.
```

Most Swift programmers never think about the Law of Exclusivity: it's enforcement is there to prevent mistakes that would cause undefined behavior mayhem in C++, so it's critical to Swift's memory-safety story. But a lot of mutation in Swift works on local values, and the language helps you avoid most of these situations, so the runtime checking is rarely encountered in practice.

### Enums are the union of enums and unions

Enums are one of Swift's loveliest little features. We borrowed them from [<FontIcon icon="fa-brands fa-wikipedia-w"/>CLU](https://en.wikipedia.org/wiki/CLU_(programming_language)), and for a time before Swift 1.0 they even used the keyword `oneof` . A Swift enum is a type-safe variant, which subsumes C++'s `enum`, `union`, and `std::variant` in one nice little package. An enum can express one of a set of named cases, such as a font size expressed via semantic names:

```swift
enum FontSize {
  case title
  case paragraph
  case footnote
}
```

This enum works just like you'd expect the equivalent C++ `enum class`. For example:

```swift
let fontSize: FontSize = .paragraph

switch fontSize {
  case .title: print("Title")
  case .paragraph: print("Paragraph")
  case .footnote: print("Footnote")
}
```

I snuck a `switch` statement in there because one often uses switch statements to deal with each of the cases in an enum. Switch statements in Swift must always be exhaustive: if you don't handle all possible cases, you need to add a `default` clause. This eliminates accidents of omission when (for example) someone adds a new case, and is commonly a warning in C++ compilers. If you've been cringing about the missing `break` statements above, don't: Swift puts a `break` before the next case, and if you really want to fall through to the next case, you have to explicitly write `fallthrough` to do so.

Back to `FontSize`: the cases of `FontSize` are inside the type. If you want to refer to the `paragraph` case, you can do so with `FontSize.paragraph`. However, whenever there is type information, such as when you're initializing a variable of type `FontSize` or switching on a value of type `FontSize`, you can use the *leading dot syntax* like `.paragraph` and let Swift's type inference figure out the type. Compare the above to the corresponding C++ `enum class`:

```swift
enum class FontSize {
  title,
  paragraph,
  footnote
};

auto fontSize = FontSize::paragraph;
switch (fontSize) {
  case FontSize::title: print("Title"); break;
  case FontSize::paragraph: print("Paragraph"); break;
  case FontSize::footnote: print("Footnote"); break;
}
```

It's the little things, but they really do add up to cleaner code. Swift's leading dot syntax works really nicely with labeled arguments, because the argument label implies the type of the argument, leading to very readable code. For example, let's imagine a `Font` struct that uses `FontSize` along with `FontStyle` and `FontWeight` enums, including some default values:

```swift
struct Font {
  var style: FontStyle = .sanSerif
  var size: FontSize = .paragraph
  var weight: FontWeight = .regular
}
```

Now, we can create a new `Font` like this:

```swift
let font = Font(size: .title, weight: .bold)
```

Note how the argument labels `size` and `weight` naturally describe the arguments that follow them, and the types provide enough information so we don't need to write out the redundant `FontSize` and `FontWeight` types on those arguments. Moreover, we are able to use the default argument for `style` even though it's the first parameter: labeled arguments make default arguments work really well. These are simple design decisions for a language to make, but they reinforce readable code.

Alright, back to enums! Imagine that you wrote that `FontSize` as an `enum class` in C++. Hold it in your mind. It's simple, it works. Now, someone comes along and tells you that you need to support *custom* font sizes, which can be expressed in terms of points. Your nice `enum class` is out the window, because you can't enumerate all of the custom point sizes. Here's the pattern I would use in C++:

```cpp  
class FontSize {
public:
  enum Kind {
    title,
    paragraph,
    footnote,
    custom
  };

private:
  Kind kind;
  int points; // only valid when kind == custom

public:
  FontSize() : kind(paragraph) { }
  FontSize(Kind kind) : kind(kind) { assert(kind != custom); }
  
  static FontSize forCustom() { 
    FontSize size;
    size.kind = custom;
    size.points = points;
    return size;
  }
  
  explicit operator Kind() const { return kind; } // so we can switch
  
  int getPoints() const {
    assert(kind == custom);
    return points;
  }
};
```

That is a *lot* of code. It is implementing a type-safe union that consists of the three simple cases, plus the one `custom` case. I cringe ever time I have to write one of these in C++ (which happens a lot), because it is so much boilerplate and it's so easy to make a silly mistake. I've yet to come across a C++ technique or library that makes this cleaner. Feel free to let me know if you have a significantly more elegant solution in C++.

In Swift, you add one case to `FontSize`:

```swift
case custom(points: Int)
```

Swift cases can carry values in them, which is why I said earlier that they also are like C++ unions---without all of the undefined behavior. Given this case, I can create a custom font size:

```swift
let customFont: FontSize = .custom(points: 32)
```

And extend my `switch` statement accordingly:

```swift
switch fontSize {
  case .title: print("Title")
  case .paragraph: print("Paragraph")
  case .footnote: print("Footnote")
  case .custom(let pt): print("\(pt) points")
}
```

Swift provides pattern matching. When we match the `custom` case, we also declare a new variable `pt` to capture the `points` value. The value `pt` is only available when one is using a custom font size, so there's no need for runtime assertions like `kind == custom` like we had in C++.

Let's add one more case to our font size, which lets us take an existing font size and scale it by a given factor. It can be expressed like this:

```swift
indirect case scaled(size: FontSize, factor: Double)
```

This way, one can construct a font that is 20% larger than the paragraph font using, e.g.,

```swift
FontSize.scaled(size: .paragraph, factor: 1.2)
```

The `indirect` is needed to indicate that the value associated with the case (called the *associated value* in Swift) needs to be stored *indirectly*, because the associated value contains an instance of `FontSize` itself. Enums are value types and generally use stack storage, so the `indirect` indicates when the value for the case needs to be moved off to the heap. If the `indirect` were missing, the compiler would complain because the `FontSize` type doesn't have a fixed size in memory:

```
=== FontSize.swift:1 ===
 1 │ enum FontSize {
   │      ╰─ error: recursive enum 'FontSize' is not marked 'indirect'
 2 │   case title
 3 │   case paragraph
 4 │   case footnote
 5 │   case custom(points: Int)
 6 │   case scaled(size: FontSize, factor: Double)
   │        ╰─ note: cycle beginning here: (size: FontSize, factor: Double) -> (.0: FontSize)
 7 │ }
 8 │ 
```

Indirect enum cases are useful for building recursive data structures, like a binary tree. We'll come back to those when we can do it properly, with generics.

Now we can create a nice member function that scales the font instance we have by a specific factor:

```swift
// in FontSize
func scaled(by factor: Double) -> Self {
  .scaled(size: self, factor: factor)
}
```

This can be called as, e.g., `myFontSize.scaled(by: 1.2)`. There are a few little things to notice here. The first is that enums can have methods just like structs can. They can also have initializers, which must eventually assign one of the cases to `self`. Next, our function is returning `Self`, which is shorthand for "the type of `self`". Finally, look at how the parameter is named, "`by factor`": here, the *argument label* is `by` (it's used at the call site) and the *parameter name* is `factor` (it's used inside the body). This is because the argument label is there to describe the argument at the call site, i.e., we're scaling "`by` 1.2", whereas the parameter name is the noun of what the parameter actually is---the `factor` used in the computation. Before now, we've seen that the two names are generally the same, or the argument label is omitted, but separating the two can lead to elegant, readable code particularly when the argument label is a preposition.

---

## Collections

The standard Swift collections types `Array`, `Dictionary`, and `Set` are value types when they are storing value types. For example, we could have an array of `Font` instances, which will behave as a value type:

```swift
var fonts = [Font(size: .title, weight: .bold), Font(size: .paragraph)] // infers type Array<Font>, also written [Font]
var oldFonts = fonts  // copies the contents of fonts
fonts.append(Font(size: .footnote))
print(fonts.count)    // 3
print(oldFonts.count) // 2
fonts[1].weight = .bold // doesn't affect oldFonts
```

Dictionaries and sets work similarly. For example, let's build a dictionary that names all of our fonts:

```swift
var fontsDict = [  // infers type Dictionary<String, Font>, also written [String: Font]
  "Title" : Font(size: .title, weight: .bold), 
  "Paragraph" : Font(size: .paragraph)
]

var oldFontsDict = fontsDict // make a copy
fontsDict["Footnote"] = Font(size: .footnote) // add an element
print(fontDict.count)    // 3
print(oldFontsDict.count) // 2
```

The bracket syntax is used for both dictionary literals (when the elements are `key: value` pairs) and array literals (when the elements are just... elements). The literals are actually extensible: you can use an array literal to initialize a `Set`, or even your own type, by defining an appropriate initializer and opting in to be "expressible by" that literal type using the generics system. (More on that in a later post, I promise.)

---

## Regular types

In C++ we sometimes talk about [<FontIcon icon="fas fa-file-pdf"/>regular types](http://stepanovpapers.com/DeSt98.pdf), defined by Alexander Stepanov, which are types that behave predictably with respect to value semantics: you can copy them, and the copy is equal to the original. They can be moved, destroyed, and swapped. C++20 has a [FontIcon icon="iconfont icon-cpp"/>`std::regular` concept](https://en.cppreference.com/w/cpp/concepts/regular) to capture these requirements.

Swift value types fulfill most of the requirements of a regular type by default, and are based on the same semantic contract. Swift value types are always copyable, destructible, assignable, and movable. Indeed, you can't really even express these ideas in Swift, it's just the way types behave.

However, there are some notable differences from the Stepanov or C++ standard definitions of a regular type. The first was noted earlier: Swift doesn't have a notion of "default construction" at all, so Swift value types are not "default constructible". You tend not to need this notion in Swift, though, because of definite initialization. There is a benefit here for the authors of types: you don't have to worry about inventing a "default" state if one doesn't make sense. For example, imagine an collection that is always non-empty: how would you give it a default constructor? You can't without doing something weird, like adding a single default-constructed element, so such a type can't be regular.

Regular types also have (in)equality operators (`==` and `!=`). Swift doesn't provide those for free, but you can either write them yourself with, e.g.,

```swift
// in Font
static func ==(lhs: Font, rhs: Font) -> Bool {
  return lhs.style == rhs.style && lhs.size == rhs.size && lhs.weight == rhs.weight
}
```

or let the compiler do it for you, by putting `: Equatable` in the type definition:

```swift
struct Font: Equatable {
  var style: FontStyle = .sanSerif
  var size: FontSize = .paragraph
  var weight: FontWeight = .regular
}
```

This says that the `Font` type is `Equatable`, and the compiler will synthesize both `==` and `!=` for you based on the data members. You can also put `Hashable` here to get a hash function that combines the data members, which then allows your type to be used as a key in a `Dictionary` or a value in a `Set`. Again, this is dipping our toes into Swift's generics system, but for now you can think of `Equatable` as being a little bit like a C++ concept (we call it a *protocol* in Swift), but... better.

---

## What's next?

We've talked about value types---a lot. If you're writing Swift, you should use them often, because they provide excellent local reasoning and the ability to model most data in a straightforward manner: `struct`s and collections to aggregate data and `enum`s to capture different choices.

In the next part of this series, we'll talk about reference types. Specifically, classes, and how Swift supports Object-Oriented Programming.

---

## 참조

<PDF url="http://stepanovpapers.com/DeSt98.pdf" />

---

<TagLinks />