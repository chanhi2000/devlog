---
lang: ko-KR
title: "Swift for C++ Practitioners, Part 6: Error Handling"
description: "Article(s) > Swift for C++ Practitioners, Part 6: Error Handling"
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
      content: "Article(s) > Swift for C++ Practitioners, Part 6: Error Handling"
    - property: og:description
      content: "Swift for C++ Practitioners, Part 6: Error Handling"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/douggregor.net/swift-for-cpp-practitioners-6.html
prev: /programming/swift/articles/README.md
date: 2024-04-15
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

```component VPCard
{
  "title": "Swift for C++ Practitioners, Part 6: Error Handling | Doug's Compiler Corner",
  "desc": "Swift for C++ Practitioners, Part 6: Error Handling",
  "link": "https://www.douggregor.net/posts/swift-for-cxx-practitioners-error-handling/",
  "background": "rgba(22,22,22,0.2)"
}
```

C++ has a few different mechanisms for handling errors. One is [<FontIcon icon="iconfont icon-cpp"/>`std::expected`](https://en.cppreference.com/w/cpp/utility/expected), where the return type of a function is either the expected value or an error value. Another is [<FontIcon icon="iconfont icon-cpp"/>exceptions](https://cplusplus.com/doc/tutorial/exceptions/), which come with a whole host of downsides (we'll get there in a moment). Personally, I find that I end up hand-rolling something more like `std::expected` in C++ more often than not, and the experience isn't great.

Swift takes some of the syntax of C++ exceptions (`throw` and `catch`), but the underlying philosophy of error handling in Swift is a bit different from C++. To get to it, let's start by looking at some of the issues with C++ exceptions, as they will help inform the choices made in Swift.

---

## Issues with C++ exceptions

Herb Sutter did quite an excellent job of laying out the issues with C++ exceptions in [<FontIcon icon="fas fa-file-pdf"/>P0709](https://open-std.org/jtc1/sc22/wg21/docs/papers/2019/p0709r4.pdf). Rather than come up with my own formulation from scratch, I'll quote directly from his abstract and refine from there:

<PDF url="https://open-std.org/jtc1/sc22/wg21/docs/papers/2019/p0709r4.pdf" />

- §4.1: C++ projects commonly ban exceptions, because today’s dynamic exception types violate the zero- overhead principle, and do not have statically boundable space and time costs. In particular, throw requires dynamic allocation and catch of a type requires RTTI.
- §4.2: Programs bugs are not recoverable run-time errors and so should not be reported as exceptions or error codes.
- §4.3: Allocation failure is not like other recoverable run-time errors and should be treated separately.
- §4.5: Some users don’t use exceptions because exceptional control flow is invisible.

I think Herb missed one overarching problem, which is that C++ got the defaults wrong with respect to exceptions. In C++, a function is assumed to throw unless it is explicitly marked [<FontIcon icon="iconfont icon-cpp"/>`noexcept`](https://en.cppreference.com/w/cpp/language/noexcept_spec)(or `throw()` in the pre-C++11 beforetimes). This means that nearly every C++ function out there can throw, because only the most diligent C++ developer is going to carefully audit each function to make sure it is marked `noexcept`, and suffer the unexpected [<FontIcon icon="iconfont icon-cpp"/>`std::terminate`](https://en.cppreference.com/w/cpp/error/terminate) call if they got it wrong. The problem with getting this default wrong is that it undercuts everything else you'd like to fix with the C++ exceptions design. The space and time costs for exceptions (Herb's §4.1) might be perfectly acceptable if you only paid for them where you used exceptions, but because of throwing-by-default, you're paying those costs across the entire code base even if only a narrow portion of it actually uses exceptions. Additionally, you can't change the language to make exceptional control flow visible (Herb's §4.5) when the default is "everything throws", because exceptional control flow is *everywhere* in C++. And while you could eliminate `std::bad_alloc` (Herb's §4.3) to reduce the number of places that could automatically throw, it barely makes a dent in the user experience when everything is already assumed to throw.

Error handling is hard: it's hard to anticipate what failures can occur, hard to figure out how to respond appropriately to get back to a reasonable state after an error, and hard to simulate those errors in a test to be sure you got it right. A language needs to help you identify and deal with errors, and most-everything-can-throw does the opposite.

---

## Swift's approach to error handling

Swift's error handling model is similar in spirit to C++: an error is thrown with `throw`, can propagate through multiple stack frames (tearing down local values and running `defer` blocks along the way), and is eventually caught with a `catch` block. Nearly any type can be thrown: the only constraint is that the type must conform to the [<FontIcon icon="fa-brands fa-swift"/>`Error`](https://developer.apple.com/documentation/swift/error) protocol. By default, errors in Swift are type-erased to `any Error`; see my prior post on type erasure if you want to learn more about type erasure.

The differences are mainly in the defaults, but they make a world of difference. A Swift function cannot throw unless it explicitly specifies that it `throws`, and memory allocation failure is not handled via a thrown error (Herb's §4.3), so the vast majority of Swift functions are non-throwing.

Thrown errors are checked at compile time: a throwing operation must be marked via the `try` keyword to make all of the control flow in code explicit (Herb's §4.5), and the thrown error must either be handled (e.g., with a `catch` block) or the enclosing function must be marked `throws` to allow the error to propagate out of it. The key goal here is that there should be `no surprises` in error handling: you know where errors originate and how they propagate, and while you can write bad error-handling code, it's hard to forget to write it at all, and you only do so when things can actually fail.

### An example

Let's see Swift's error handling in action by writing a simple function to parse a string into an integer. Because I love generic programming, we're going to make it generic over any fixed-with integer type by turning it into an extension of the [<FontIcon icon="fa-brands fa-swift"/>`FixedWidthInteger` protocol](https://developer.apple.com/documentation/swift/fixedwidthinteger). But first, let's think about what can go wrong: the easiest thing that can go wrong is that one of the characters in the string isn't a digit. Let's capture that case in a new `Error`-conforming `enum` that will describe errors that occur during integer parsing:

```swift
enum IntegerParseError: Error {
  case nonDigitCharacter(String, index: String.Index)
}
```

We haven't talked about the [<FontIcon icon="fa-brands fa-swift"/>`String`](https://developer.apple.com/documentation/swift/string) type much, so allow me a slight digression...

::: info Digression

A proper discussion of `String` could fill up its own post, so here's the short version: `String` is a fully Unicode-aware string type and always contains a valid Unicode string. It's generally best to form and manipulate them with string literals, string interpolations, or other high-level operations. For lower-level operations you can treat them as a collection of [<FontIcon icon="fa-brands fa-swift"/>`Character`](https://developer.apple.com/documentation/swift/character) instances. `Character` is about as far from the C++ `char` type as you can get, because it captures the notion of a *grapheme cluster*, which is the nearest approximation Unicode has to what a human would consider a single character on screen. This covers everything from simple ASCII characters to composed multi-byte sequences like flag emoji (🇺🇦) and family emoji (👩‍👩‍👦‍👦).

:::

So, let's build our first iteration of a parsing function that takes a string and converts it to any fixed-width integer:

```swift
extension FixedWidthInteger {
  init(parsing string: String) throws {
    self = 0
    for index in string.indices {
      let char = string[index]
      guard let digit = char.wholeNumberValue else {
        throw IntegerParseError.nonDigitCharacter(string, index: index)
      }

      self = self * 10 + Self(exactly: digit)!
    }
  }
}
```

I chose to make this an initializer, so that it can be used as (e.g.) `Int8(parsing: string)`. The code itself walks through each of the indices in the string, extracting each character, turning it into a [<FontIcon icon="fa-brands fa-swift"/>whole number value](https://developer.apple.com/documentation/swift/character/wholenumbervalue), and accumulating the result into `self`. If at any point it finds a character that isn't a whole number value, it will `throw` an instance of `IntegerParseError` that describes what the problem is.

There is no error-handling code within this initializer, so it must be marked as `throws` to indicate that an error can propagate out of a call to the initializer. The Swift compiler will produce an error if the `throws` is missing.

Now, when we use this initializer, we will always need to acknowledge the error. For example, let's try to parse "1+23" into an `Int8`:

```swift
let value = try Int8(parsing: "1+23")
```

The `try` must be present to indicate that an operation to its right can throw. Just as any code containing a `throw` must account for the error (by handling it or being `throws` itself), code containing a `try` must account for the error. This makes control flow due to errors explicit. Note that you can cover multiple throw sites with a single `try` if you'd like. For example:

```swift
let (first, second) = try (Int8(parsing: firstString), Int8(parsing: secondString))
```

is equivalent to

```swift
let (first, second) = (try Int8(parsing: firstString), try Int8(parsing: secondString))
```

It's a matter of taste. My personal style leans toward the former, because if there's any kind of side effect in a subexpression that would need different control flow, I'm going to break that out into a separate statement anyway.

### `do..catch` blocks

So, we've seen that we can mark a function as `throws` to allow an error to propagate out of it, so how we can handle an error when we don't want it to propagate? In Swift, it's a `do..catch` block:

```swift
do {
  let value = try Int8(parsing: "1 + 23")
  print("Integer value is \(value)")
} catch let error {
  fatalError("Invalid input string: \(error)")
}
```

Any errors thrown within the body of the `do` part of a `do..catch` block will be checked against each of the `catch` blocks, much like C++'s `try..catch`. In this example, we have a single `catch` block that catches any error. The error itself will be named `error` and have type `any Error`.

There can be multiple `catch` clauses, and they use the same pattern-matching syntax as `switch` statements, so we can match a particular error case if we want:

```swift
let value: Int8?
do {
  value = try Int8(parsing: "1 + 23")
} catch IntegerParseError.nonDigitCharacter(let string, index: let index) {
  print(#"Non-digit character "\#(string[index])" found in string "\#(string)"."#)
  value = nil
} catch {
  print("Unhandled error \(error)")
	throw error
}
```

Now when an `IntegerParserError.nonDigitCharacter` error is thrown, it will be matched against the first `catch`, with the `string` and `index` values of the error bound to the stored values.

::: note Aside

I snuck another minor Swift feature into that `print` statement, raw string literals, which are written with `#"..."#`. Inside, double-quotes don't finish the raw string literal unless followed by a `#`, and the `\` is not an escaping character unless followed by the `#`. If you really want to use `"#` or `\#` inside the raw string literal, you can even add more `#`s around the outside double-quotes, where you need a matching number of `#`s to make the `"` or `#` significant, e.g., `###" not escaped \"# until we get here "###`.

:::

Any errors that don't match that first `catch` clause will fall into the second catch clause. As a little shortcut, if the catch clause doesn't specify anything to match, it's equivalent to `let error`, i.e., it introduces local `error` value of type `any Error`.

Note that this second `catch` block throws `error` again: Swift doesn't have (nor need) a special "rethrows" syntax, because errors are just values. So if we want to "rethrow", we can `throw` the error we got. Or we can package it up---there's no need for special mechanisms like [<FontIcon icon="iconfont icon-cpp"/>`std::exception_ptr`](https://en.cppreference.com/w/cpp/error/exception_ptr) in C++.

### `try?`

There's one last shorthand syntax to get out of the way before we switch gears a bit. If you find yourself trying an operation and producing either a value or `nil`, like this:

```swift
let value: Int8?
do {
  value = try Int8(parsing: string)
} catch {
  value = nil
}
```

Then you can use the `try?` shorthand to simplify the code to:

```swift
let value = try? Int8(parsing: string)
```

The `try?` expression performs the operation to its right and, if successful, returns its value. If the operation throws an error, then the `try?` expression returns `nil`. The type of a `try?` is an optional of the expression to its right, so in this case, we get an `Int?`. I'm not a huge fan of this feature, because it loses information about the specific error that was thrown, but it can be convenient when throwing together some Swift code to get a task done once or twice.

### Throwing closures

Just like functions, closures can throw. Such closures can explicitly be marked with `throws` if you provide a parameter list, like this:

```swift
func commaSeparatedIntegers(string: String) throws -> [Int8] {
  // split String into [Substring] instances at the given separator
  let strings = string.split(separator: ",") 
  return try strings.map { (substring: String) throws in
    try UInt8(parsing: String(substring))
  }
}
```

A few things to note: the [<FontIcon icon="fa-brands fa-swift"/>`split(separator:)`](https://developer.apple.com/documentation/swift/sequence/split(separator:maxsplits:omittingemptysubsequences:)) operation on a collection turns an array of subcollections that are separated by the `Equatable` element provided by the `separator` argument. In this example, we then `map` over those substrings (a [<FontIcon icon="iconfont icon-cpp"/>`std::transform`](https://en.cppreference.com/w/cpp/algorithm/transform) in C++ STL-speak) to parse each of them into an integer. Because the initializer of the `UInt8` `throws`, we must mark the closure's return expression with `try`. Now, when giving a throwing closure, the `map` operation itself also throws, so we need to mark the `map` call with a `try` as well. Therefore, all of the exceptional control flow (out of the closure, and out of the map call) is indicated in the program.

Now, we don't *have* to mark a closure as throwing when it throws, because it can be inferred. A closure that contains a `throw` or a `try` (that isn't swallowed up in a `do..catch` / `try?` / `try!`) is known to throw, so the above can be written more succinctly as:

```swift
func commaSeparatedIntegers(string: String) throws -> [Int8] {
  // split String into [Substring] instances at the given separator
  let strings = string.split(separator: ",") 
  return try strings.map { 
    try UInt8(parsing: String($0))
  }
}
```

I'm also using the `$0` shorthand for "the first closure argument", because this closure is so small that it's not worth naming the argument. The presence of `try` implies that the closure `throws`.

We're going to come back to `map` and it's "it throws if its input closure throws" behavior a bit later, when we talk about typed throws.

---

## Program bugs are not exceptional conditions

We've talked a lot about the mechanics of error handling in Swift, so now let's talk some philosophy. Swift takes the viewpoint that errors are exceptional conditions that the program has to deal with, but `program bugs are not exceptional conditions.` When Swift detects a program bug, such as an out-of-bounds index into an array or an attempt to force an optional value containing `nil` (via `!` or `as!`), it will immediately halt the program. It will look like a program crash, but should be accompanied by a message indicating what went wrong.

The Swift philosophy, echoed by Herb's §4.2, is that a program should not attempt to recover from a programmer error. Programmer errors are likely to mean broken invariants that will cause more problems later, and a program that's limping on after a program error is ripe for security exploits. So when things go wrong, Swift halts the program to prevent further damage.

Now, you don't *have* to buy in to Swift's philosophy here. You can go ahead and add an `Array` subscript that throws when out of bounds, or a cast operation that throws when it fails, and generally turn every bad thing that can happen into a thrown error. You'll be going against the grain of the Swift standard library and general community, but it's possible. But know that I will know, and I will judge you.

### `try!`

There are some times when you're using a general operation that can throw an error, but because of where you are in the program, you *know* it can't fail. Perhaps you're working from data that's baked into the program elsewhere, or are in program startup where things can't go wrong yet. As a corollary to `try?`, there's a `try!` operation that produces a fatal error if an error is thrown from its subexpression. For example, if we do:

```swift
let value = try! Int8(parsing: "1+23")
```

The type of the `try!` expression is the type of its subexpression; here, that's `Int8`. If an error is thrown from the subexpression, the program will halt with an error message something like this:

```swift
parsing/parsing.swift:94: Fatal error: 'try!' expression unexpectedly raised an error: parsing.IntegerParseError.nonDigitCharacter("12+3", index: Swift.String.Index(_rawBits: 65799))
```

You can think of `try!` as having about the same semantics as `(try? <subexpression>)!`, but providing a better error message when things go wrong. Unlike `try?`, I actually do like `try!`: when the program invariants say there can't be an error here, it's a lot more convenient than a `do..catch` with a `fatalError` in the `catch` block.

::: note Aside

Some Swift style guides prohibit the use of the various `!` operations, whether they are `!` to force-unwrap optional, `as!` to force-cast, or `try!` to assert that an operation cannot fail. These constructs exist in Swift for a reason, and are appropriate to use when the surrounding program invariants ensure that the operation cannot fail, but you weren't able to express those invariants in the type system. The consistent use of `!` is meant to say "be wary", not "run away screaming."

:::

### Preconditions and assertions

A careful programmer will document the invariants of data structures and the preconditions of any functions, so that misuses due to programmer error are caught quickly. To support this checking consistently, Swift provides the `precondition` function, which takes a `Bool` condition, an optional error message string, and optional file/line information (that will be automatically filled in for you). For example, a bounds check on an array subscript will use a precondition like this:

```swift
precondition(index >= 0 && index < count, "out-of-bounds array index")
```

If that `Bool` expression evaluates `false`, the program will halt immediately and display the error message, line, and column. The actual declaration of `precondition` shows off a few tiny features that Swift library developers like to use, that I otherwise wouldn't have gotten to, so here it is:

```swift
public func precondition(
  _ condition: @autoclosure () -> Bool,
  _ message: @autoclosure () -> StaticString = StaticString(),
  file: StaticString = #file, line: UInt = #line
)
```

The first argument is the `Bool` condition, but it has *function* type and this `@autoclosure` thing. What's going on? Well, an "autoclosure" is a fun way in which a function can defer computation of one of its arguments. In essence, when we wrote the expression `index >= 0 && index < count`, Swift packaged that up into a closure

```swift
{ index >= 0 && index < count }
```

and passed that closure into the `precondition` function. We can evaluate the condition by calling `condition()` in the body of the function. Note that the `message` is also an `@autoclosure`: we won't call the closure unless the condition has failed, so we don't need to form the string instance except along the error path. Auto-closures actually came into being because we wanted to be able to express the short-circuiting behavior of the logical `&&` operation in the library. The implementation looks like this:

```swift
extension Bool {
  public static func &&(lhs: Bool, rhs: @autoclosure () -> Bool) -> Bool {
    lhs ? rhs() : false
  }
}
```

Autoclosures are also used in Swift's `assert` function, which ensures that a particular condition holds *but only in debug builds*. In release builds, the `assert` function folds away, never evaluating the condition. Use asserts for checking invariants that are too expensive in release builds, but can help aid debugging when things go wrong:

```swift
assert(self.isSorted, "insert operation must maintain sortedness property")
```

Both `precondition` and `assert` have defaulted `file` and `line` arguments. If you don't pass in a value, they take on the default values `#file` and `#line`, respectively. These are built-in macros that produce the file and line at the call site, which allows `precondition` and `assert` to point at where the failing precondition/assertion occurred in the source code.

### Arithmetic overflow is a program bug

In the C++ community, we've spent a *lot* of time [<FontIcon icon="fas fa-globe"/>fretting](https://open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0907r4.html) over what to do about arithmetic overflow. It's been undefined behavior since the dawn of time, and undefined behavior is bad, so there's been a push to define it somehow. The most reasonable answer is to define it as basically every system out there implements it, which is [<FontIcon icon="fas fa-globe"/>two's complement wrapping](https://ccrma.stanford.edu/~jos/fp/Two_s_Complement_Wrap_Around.html). That's better, but it's not great: arithmetic overflow that is guaranteed to wrap can open up security vulnerabilities if an attacker can manager to wrap a buffer index to get access to other data they shouldn't.

Swift's answer is to define arithmetic overflow as a programmer error, and trap when it occurs. You can see the effect of this by trying to pass a string for a too-large integer into our parsing initializer:

```swift
let value = try Int8(parsing: "155")
```

The program will trap (crash) when trying to multiply 15 * 10 as an `Int8`. This is not great for our parsing function, so let's fix it!

Swift has two ways of dealing with arithmetic overflow programmatically. The first is a set of [<FontIcon icon="fa-brands fa-swift"/>"wrapping" arithmetic operators](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/advancedoperators/#Overflow-Operators) with the `&` prefix that wrap their results according to two's complement arithmetic. If we replace the `*` and `+` in our `init(parsing:)` implementation with `&*` and `&+`, respectively, the crash will go away! Yay! Except that the answers are going to be wrong, because `try Int8(parsing: "155")` will now produce the result `-101`. Use the wrapping arithmetic operations when the algorithm you're implementing is designed for two's complement arithmetic, not as a "please make it not crash" hammer.

The second way of dealing with overflow is through the `*ReportingOverflow` family of methods on `FixedWidthInteger`, which form the appropriate operation and return the partial value along with a flag that indicates whether it overflowed or not. This allows us to detect an react to the overflow. Let's do that, and report the overflow via a thrown error. We can represent the failure condition with a new case in the `IntegerParseError` enum:

```swift
case overflow(String, any Numeric.Type)
```

Now, instead of writing `self * 10`, we can use the `multipliedReportingOverflow(by:)` operation, like this:

```swift
var overflow: Bool
(self, overflow) = self.multipliedReportingOverflow(by: 10)
if overflow {
   throw IntegerParseError.overflow(string, Self.self)
}
```

It's a little verbose, but it works. I bet someone could write a nice throwing wrapper around a `FixedWidthInteger` type that makes this kind of code easier to write, but for now I'm going to go the brute-force method and also addition counterpart. The final integer-parsing operation is as follows:

```swift
extension FixedWidthInteger {
  init(parsing string: String) throws {
    self = 0
    for index in string.indices {
      let char = string[index]

      guard let digit = char.wholeNumberValue else {
        throw IntegerParseError.nonDigitCharacter(string, index: index)
      }

      var overflow: Bool
      (self, overflow) = self.multipliedReportingOverflow(by: 10)
      if overflow {
         throw IntegerParseError.overflow(string, Self.self)
      }

      (self, overflow) = self.addingReportingOverflow(Self(digit))
      if overflow {
         throw IntegerParseError.overflow(string, Self.self)
      }
    }
  }
}
```

Now if we `try Int8(parsing: "155")` we'll get a thrown error that describes the failure: the value `"155"` doesn't fit into the integer type. We can even make the error nice and human-readable:

```swift
extension IntegerParseError: CustomStringConvertible {
  var description: String {
    switch self {
    case .nonDigitCharacter(let string, let index):
      "non-digit character '\(string[index])' at index \(index) when converting '\(string)' to an integer"

    case .overflow(let string, let type):
      "overflow converting '\(string)' to integer type '\(type)'"
    }
  }
}
```

so we end up with this:

```swift
overflow converting '155' to integer type 'Int8'
```

It's definitely worth making your error types provide nice, human-readable error messages, because they're likely to propagate up to some part of the system that can't do anything better than present the error to the user. And that message is a whole lot nicer for most users than the default rendering `parsing.IntegerParseError.overflow("155", Swift.Int8)`.

---

## Typed throws

Thus far, all the functions and closures we've seen have used "untyped" thows, where all errors are type-erased to `any Error`. Untyped errors are a good default: you can still pick out a specific error type using pattern-matching in a `catch` in those (generally rare) cases where you must, but most error-handling code just deals with any kind of error opaquely and safely backs out of the failed operation.

There are a few cases where untyped throws are insufficient, though:

1. In performance-critical or very low-level code that cannot afford the runtime cost of type erasure or perhaps cannot allocate at all along the error path. This includes [Embedded Swift (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/visions/embedded-swift.md), which doesn't allow for type erasure in any form. (Note that this restriction is captured by Herb's §4.1).
2. In generic code that will only propagate errors that are introduced by operations on its generic inputs, such as the `map` operation throwing an error only when its closure parameter throws.

In such cases, it can be valuable to specify the exact type of the error that can be thrown. Swift allows this with typed throws, which allows one to specify a concrete thrown error type in parentheses after the `throws` keyword. Our parsing code could adopt typed throws like this:

```swift
init(parsing string: String) throws(IntegerParseError) { ... }
```

Now, this initializer may only throw or propagate errors of the type `IntegerParseError`. If you really want, you can take advantage of the type inference this affords for throws statements to omit the `IntegerParseError` on them, e.g.,

```swift
throw .nonDigitCharacter(string, index: index)
```

For callers, the knowledge that this initializer can only throw `IntegerParseError` gives tighter bounds for `do..catch` blocks. For example, this code knows that the caught `error` is of type `IntegerParseError`:

```swift
do {
  let value = try Int8(parsing: string)
  print("Value is \(value)")
} catch {
  // error has type `IntegerParseError`
}
```

That's the basics of typed throws: you can specify the type of a thrown error, which of course must conform to the `Error` protocol. This becomes part of the interface contract, so the implementation must only every throw this type, and clients are guaranteed to only ever see a thrown error of this type. It's all enforced statically, so you can't get it wrong. However, you can come to regret being specific about the thrown error type, if you later change the implementation in a manner that can produce new kinds of errors.

::: warning

As of the time of this writing (April, 2024), typed throws has been accepted into the upcoming Swift 6.0 and is available in [<FontIcon icon="fa-brands fa-swift"/>nightly snapshots](https://swift.org/download/), but has not yet made it into a Swift release. While it's not terribly likely, it's possible that details may change.

:::

### Untyped throws

Okay, so now we have *untyped* throws, and we have *typed* throws, so how do these relate? Fortunately, this is easy: untyped throws (spelled `throws`) is the same thing as throwing `any Error` (spelled `throws(any Error)`); it's effectively just a shorthand. A function that throws some type `E` can be converted to a function that throws `any Error`. That's it; nothing weird here. Just some syntactic sugar and an implicit conversion.

### Non-throwing functions and the `Never` type

A *much* more interesting question is how typed throws relates to *non-throwing* functions. For that, we need to introduce another special Swift type called `Never`. There's no real equivalent to `Never` in C++, so I'll describe it from first principles. Please try not to equate it to anything in C++, because it'll create more confusion: it may sound a little like `void`, but it's not that. It may sound a little like an incomplete type, but it's not that. Enough preamble, what is it?

`Never` is a type for which there can never be an instance, ever. Formally, `Never` is an `enum` with no cases, which is also called an *uninhabited enum*:

```swift
enum Never { /* empty */ }
```

Now, because there can never be an instance of type `Never`, any computation that *produces* a value of type `Never` must be unreachable. Dead code. An impossible state.

`Never` came into Swift as a more composable way to indicate that a function could never return. C++11 has [<FontIcon icon="iconfont icon-cpp"/>the `noreturn` attribute](https://en.cppreference.com/w/cpp/language/attributes/noreturn) to say that a function could never return, but it's an attribute tacked on to a function, and doesn't get any real checking. In Swift, we give that function the result type `Never`:

```swift
func explode() -> Never {
  fatalError("BOOM!")
}
```

A `Never`-returning function must not return along any path. If any path could return or fall off the end of the function, the compiler will emit an error. The `explode()` function above is known to be correct because it's calling `fatalError`, which is defined in the Standard Library to return `Never`:

```swift
public func fatalError(
  _ message: @autoclosure () -> String = String(),
  file: StaticString = #file, line: UInt = #line
) -> Never
```

Using the `Never` type instead of an attribute has really nice properties, because it interacts nicely with type inference. If you form a closure that calls `fatalError`, it will be inferred to have result type `Never`, so we know that calls to that closure never return. And if you call a generic function that returns a `T`, and `T` is inferred to `Never`, you know that the generic function won't return.

Let's get back to throwing. If a function isn't marked with `throws`, then it doesn't throw. One might say it... *never*... throws. Joking aside, this means that a function that `throws(Never)` is equivalent to one that does not throw. So typed throws is actually a generalization of throwing functions, where `throws(any Error)` is "can throw anything" and `throws(Never)` is "does not throw", and you can have any `throws(Concrete)` in between.

### Generic error propagation

A bit earlier, we had this call to `map`:

```swift
return try strings.map { 
  try UInt8(parsing: String($0))
}
```

and I noted that `map` propagates the error from the closure out. Now that we have typed throws, we can express the `map` operation generically:

```swift
extension Collection {
  func map<T, E>(body: (Element) throws(E) -> T) throws(E) -> [T] {
    var result: [T] = []
    for element in self {
      result.append(try body(element))
    }
    return result
  }
}
```

The basic idea is that we're calling `body` for each element in the collection, and appending the result to the `result` array to be returned at the end. Easy.

Now, `body` can throw an error of type `E`. When it does, that error propagates out of `map`, which is *also* defined to throw type `E`. `E`, in this case, is a generic parameter that is inferred from the call site. Everything type-checks in the `map` definition because the only throwing call site produces an `E`.

Now let's look at the client. In our original `map` call

```swift
return try strings.map { 
  try UInt8(parsing: String($0))
}
```

the closure will be inferred to throw an error (`IntegerParseError`) based on the call to `init(parsing:)`. The generic argument for `E` will, therefore, be inferred to be `IntegerParseError`, so the whole `map` call throws `IntegerParseError`. What about a non-throwing case?

```swift
return strings.map { 
  (try? UInt8(parsing: String($0))) ?? UInt8(0) // turn failures into 0s
}
```

Here, the closure does not throw (because the error from `init(parsing:)` is swallowed by the `try?`), so it has a thrown error type of `Never`. The generic argument for `E` is inferred to `Never`, so the call to `map` is known not to throw... and we don't need a `try` outside of the call to `map`.

Operations like `map` that are expressed in terms of generic thrown error types are only considered to throw when the thrown error type is inferred to something other than `Never`, allowing them to act as either throwing or not depending on context. This abstraction over thrown error types means we don't have to duplicate generic implementations to account for throwing vs. non-throwing. `Never` may feel odd, but it's quite powerful.

::: note Historical note

Prior to the introduction of typed throws, a different feature called `rethrows` captured the notion that a particular function would only throw when one of the closure arguments passed into it throws. This feature was used for algorithms like `map`, and is expected to rapidly fall out of favor (and probably be deprecated) once typed throws is in widespread use.

:::

### The `Result` type

Swift has a standard type [<FontIcon icon="fa-brands fa-swift"/>`Result`](https://developer.apple.com/documentation/swift/result) type for packaging up either a successful result, or a failure condition, and is intended to be used in much the same way as `std::expected`. Personally, I've found a lot less of a need for `Result` now that Swift has `async`/`await` (the subject of a later post, I promise), but you may see it in Swift code and it's good for exposition. `Result` is an enum with two cases:

```swift
enum Result<Success, Failure: Error> {
  case success(Success)
  case failure(Failure)
}
```

A function that returns `Result<T, E>` is morally equivalent to one that returns a `T` and `throws(E)`. Indeed, one can convert in both directions fairly readily. To go from a function (or closure) to a `Result` instance, use this handy initializer:

```swift
extension Result {
  init(catching body: () throws(Failure) -> Success) {
    do {
      self = .success(try body())      
    } catch {
      self = .failure(error)
    }
  }
}
```

In other words: run the body. If it succeeds, put the successful value into `self` via the `success` case. If it fails, it will have thrown an instance of type `Failure`, so the `catch` block will initialize `self` via the `failure` case. Either way, `self` is fully initialized at the end!

To go the other way, there's a `get` operation:

```swift
extension Result {
  func get() throws(Failure) -> Success {
    switch self {
      case .success(let value): return success
      case .failure(let error): throw error
    }
  }
}
```

A call to `get` will either get the success value, or throw failure. If you prefer to use property access, we can write that with a throwing computed property:

```swift
extension Result {
  var value: Success {
    get throws(Failure) {
      return get()
    }
  }
}
```

`Result` illustrates another one of the great things about `Never`: if you have a type `Result<Int, Never>`, then it's just a wrapper around an `Int`. If you call `get()` or use `value`, it's known not to throw (because `Failure` is `Never`), so you don't need a `try`. All of the generic code just works, because it's impossible to ever end up in the `failure` case dynamically to trigger a thrown error.

---

## Wrap-up

Error handling is one of the parts of Swift I adore: it's purposeful and opinioned, the pieces all compose well, and it helps take a tricky aspect of programming and makes it easier through useful application of a static type system. For C++ practitioners, there's a lot to be familiar with, because the basic model is effectively the same: thrown errors propagate up until they hit a matching catch. However, the defaults have been re-oriented to make exceptional conditions uncommon, static checking has been made sound to prevent accidents, and exceptional control flow has been made explicit to aid in understanding code.

And although it's not baked into the language design per se, Swift has definite opinions about when to throw errors and when to trap. Programmer errors should trap as soon as they are detected to prevent them from causing bad behavior, including security issues. Other exceptional conditions that prevent the normal flow of the problem should be reported as errors, preserving enough detail to provide a useful error message to be logged for the programmer or reported to the end user. I believe that following this philosophy, and being properly supported by the language in handling errors, leads to better-quality code in the long run.

---

<TagLinks />