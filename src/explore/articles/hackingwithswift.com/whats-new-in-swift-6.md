---
lang: ko-KR
title: What's new in Swift 6.0?
description: When fully enabled, Swift 6 is likely to require changes in pretty much every project.
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: When fully enabled, Swift 6 is likely to require changes in pretty much every project.
    - property: og:description
      content: What's new in Swift 6.0?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/whats-new-in-swift-6.html
prev: /programming/swift/articles/README.md
date: 2024-06-10
isOriginal: false
cover: https://hackingwithswift.com/uploads/swift-evolution-12.jpg
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
  name="What's new in Swift 6.0? – Hacking with Swift"
  desc="When fully enabled, Swift 6 is likely to require changes in pretty much every project."
  url="https://hackingwithswift.com/articles/242/whats-new-in-swift-6"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-12.jpg"/>

---

2024 is Swift's 10th anniversary, and for the last five of those years we've had no major-version Swift updates – literally half of Swift's life has been 5.0 through to 5.10.

This is more common than you might think. In fact, several major programming languages have some kind of release that takes significantly longer than all others: Python 3 took years to arrive, PHP 6 took so long the team bailed out and jumped straight to PHP 7, and Perl 6 dragged on so much that it ended up evolving into a different language called Raku.

Swift last had major breaking changes back in Swift 3, but when enabled in full Swift's own v6 has the potential to make Swift 3 look like a walk in the park. This is partly because of new changes, but partly also because many features added in recent Swift versions have been hidden behind feature flags that will be enabled by default in Swift 6.

Let's take a look at what's changing…

::: tip

You can also [<FontIcon icon="fas fa-download"/>download this as an Xcode playground (<FontIcon icon="iconfont icon-github"/>`twostraws/whats-new-in-swift-6-0`)](https://github.com/twostraws/whats-new-in-swift-6-0) if you want to try the code samples yourself.

:::

---

## Complete concurrency enabled by default

Swift 6 contains another barrage of updates around concurrency, and the team ought to be proud of the extraordinary advances they have made to make this release possible.

By far the biggest change is that complete concurrency checking is enabled by default. Unless you're very fortunate indeed, there's a very good chance your code will need some adjustment – it's no surprise the Swift team made it optional in earlier versions to give folks time to evaluate what's changing.

Swift 6 improves concurrency checking further, and the Swift team say it "removes many false-positive data-race warnings" that were present in 5.10. It also introduces several targeted changes that will do wonders to make concurrency easier to adopt – if you tried with 5.10 and found things just too gnarly to figure out, hopefully some of the changes in Swift 6 will help.

Easily the biggest is [<FontIcon icon="fa-brands fa-swift"/>SE-0414 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`) (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0414-region-based-isolation.md), defines isolation regions that allow the compiler to conclusively prove different parts of your code can run concurrently.

At the core of this change lies the existing concept of *sendability*. A `Sendable` type is one that can be safely passed around in a concurrent environment, which can include value types such as structs, final classes with constant properties, actors that automatically protect their own mutable state, and more. 

Before Swift 6 the compiler was very strict: if you had a non-sendable value on one actor and tried to send it to another actor, you'd get concurrency checking warnings. For example, although SwiftUI view bodies run on the main actor, SwiftUI views themselves *don't*, which can easily cause all sorts of false positive warnings from the compiler – Swift thinks there's a potential race condition when really there isn't.

You can see the problem with the following code:

```swift
class User {
    var name = "Anonymous"
}

struct ContentView: View {
    var body: some View {
        Text("Hello, world!")
            .task {
                let user = User()
                await loadData(for: user)
            }
    }

    func loadData(for user: User) async {
        print("Loading data for \(user.name)…")
    }
}
```

Before Swift 6 the call to `loadData()` would throw up a warning: "passing argument of non-sendable type 'User' outside of main actor-isolated context may introduce data races."

*After* Swift 6 this warning goes away: Swift now detects that the code doesn't actually present a problem because `user` isn't being accessed from two or more places at once, so it won't emit a warning – the compiler is able to analyze the program's flow and detect that it's safe.

This change effectively means sendable objects are now either those that conform to `Sendable`, or those that don't need to conform to `Sendable` because the compiler can prove they are being used safely – it's a dramatic simplification of concurrency for developers, made possible by truly cutting-edge compiler development.

But there are many other, smaller improvements, including:

- [<FontIcon icon="fa-brands fa-swift"/>SE-430 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0430-transferring-parameters-and-results.md) adds a new `sending` keyword for when we need to send values between isolation regions.
- [<FontIcon icon="fa-brands fa-swift"/>SE-0423 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0423-dynamic-actor-isolation.md) improves concurrency support when needing to operate with Objective-C frameworks.
- [<FontIcon icon="fa-brands fa-swift"/>SE-0420 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0420-inheritance-of-actor-isolation.md) allows us to make `async` functions that are isolated to the same actor as their caller.

Some other changes were present in earlier versions of Swift, but hidden behind feature flags. For example, [<FontIcon icon="fa-brands fa-swift"/>SE-0401 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0401-remove-property-wrapper-isolation.md) removes a feature that was introduced back in Swift 5.5: actor inference for property wrappers.

Previously, any struct or class using a property wrapper with `@MainActor` for its wrapped value will automatically be `@MainActor`. This is what makes `@StateObject` and `@ObservedObject` convey main-actor-ness on SwiftUI views that use them – if you use either of those two property wrappers in a SwiftUI view, the whole view becomes `@MainActor` too.

As an example, consider the view model below, marked with `@MainActor` as is good practice:

```swift
@MainActor
class ViewModel: ObservableObject {
    func authenticate() {
        print("Authenticating…")
    }
}
```

If you want to use that from a SwiftUI view using `@StateObject`, you must *also* mark the view with `@MainActor` from Swift 6 and later, like this:

```swift
@MainActor
struct LogInView: View {
    @StateObject private var model = ViewModel()

    var body: some View {
        Button("Hello, world", action: startAuthentication)
    }

    func startAuthentication() {
        model.authenticate()
    }
}
```

Before Swift 6, `@MainActor` would have been conferred on the whole view because of its `@StateObject` property.

Another old change that's now enable in Swift 6 is [<FontIcon icon="fa-brands fa-swift"/>SE-0412 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0412-strict-concurrency-for-global-variables.md) requires global variables to be safe in concurrent environments.

This applies to loose variables you might have in your projects at global scope:

```swift
var gigawatts = 1.21
```

But also to static variables stored in types:

```swift
struct House {
    static var motto = "Winter is coming"
}
```

This data can be accessed anywhere at any time, which makes it inherently unsafe. To resolve the problem you either need to convert the variable into a sendable constant, restrict it to a global actor, e.g. `@MainActor`, or, if you have no other option or know it's protected somewhere else, mark it nonisolated.

For example, all of these are allowed:

```swift
struct XWing {
    @MainActor
    static var sFoilsAttackPosition = true
}

struct WarpDrive {
    static let maximumSpeed = 9.975
}

@MainActor
var idNumber = 24601

// Not recommended unless you're certain it's safe
nonisolated(unsafe) var britishCandy = ["Kit Kat", "Mars Bar", "Skittles", "Starburst", "Twix"]
```

A further feature present earlier but now enabled is [<FontIcon icon="fa-brands fa-swift"/>SE-0411 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0411-isolated-default-values.md), which changes function default values to have the same isolation as the function they are inside.

For example, the code below is now allowed, when previously it would have triggered an error:

```swift
@MainActor
class Logger {

}

@MainActor 
class DataController {
    init(logger: Logger = Logger()) {

    }
}
```

Because both `DataController` and `Logger` have been restricted to the main actor, Swift now considers the `Logger()` creation to also be restricted to the main actor, which makes perfect sense.

Swift concurrency remains a bit of a moving target, but if you'd like to know more I highly recommend [<FontIcon icon="fas fa-globe"/>Matt Massicotte's blog](https://massicotte.org) – I don't think anyone is doing more to educate Swift developers about effective adoption of Swift concurrency.

And remember: if Swift 6 throws up concurrency warnings and errors about your code, those problems were there beforehand too – they just weren't being diagnosed automatically!

---

## count(where:)

.[<FontIcon icon="fa-brands fa-swift"/>SE-0220 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0220-count-where.md) introduced a new `count(where:)` method that performs the equivalent of a `filter()` and count in a single pass. This saves the creation of a new array that gets immediately discarded, and provides a clear and concise solution to a common problem.

This example creates an array of test results, and counts how many are greater or equal to 85:

```swift
let scores = [100, 80, 85]
let passCount = scores.count { rgument">$0 >= 85 }
```

And this counts how many names in an array start with “Terry”:

```swift
let pythons = ["Eric Idle", "Graham Chapman", "John Cleese", "Michael Palin", "Terry Gilliam", "Terry Jones"]
let terryCount = pythons.count { rgument">$0.hasPrefix("Terry") }
```

This method is available to all types that conform to `Sequence`, so you can use it on sets and dictionaries too.

::: note

`count(where:)` was originally planned for Swift 5.0 way back in 2019, but was withdrawn at the time for performance reasons.

:::

---

## Typed throws

.[<FontIcon icon="fa-brands fa-swift"/>SE-0413 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0413-typed-throws.md) introduced the ability to specify exactly what types of errors a function can throw, known as "typed throws". This resolves an annoyance with errors in Swift: we needed a general catch clause even when we had specifically caught all possible errors.

As an example of typed throws, we could define a `CopierError` that can track when a photocopier runs out of paper:

```swift
enum CopierError: Error {
    case outOfPaper
}
```

We could then create a `Photocopier` struct that creates some number of copies of a page. This might throw errors if there isn't enough paper loaded for the requested operation, but rather than mark it simply as `throws` we'll use `throws(CopierError)` to be clear exactly what kind of errors can be thrown:

```swift
struct Photocopier {
    var pagesRemaining: Int

    mutating func copy(count: Int) throws(CopierError) {
        guard count >= pagesRemaining else {
            throw CopierError.outOfPaper
        }

        pagesRemaining -= count
    }
}
```

::: note

With this change you can either use `throws` to specify any kind of error being thrown, or `throws(OneSpecificErrorType)` to signal that only that one type can be thrown. You cannot write `throws(A, B, C)` to throw one of several errors.

:::

Now we can write code to attempt photocopying, catching the single error that can possibly be thrown:

```swift
do {
    var copier = Photocopier(pagesRemaining: 100)
    try copier.copy(count: 10)
} catch CopierError.outOfPaper {
    print("Please refill the paper")
}
```

That call site is the important change here: in earlier versions of Swift we'd need a so-called "Pokémon catch" at the end, because Swift couldn't be sure exactly which error types could be thrown – you've "gotta catch 'em all."

This comes with several other advantages:

1. Because Swift knows that `CopierError` is the only error type that can be thrown, we can write `throw .outOfPaper`.
2. If the code in a `do` block only throws one kind of error, the `error` value in a general `catch` block will automatically have the same error type rather than being any kind of error.
3. If we attempt to throw any other kind of error not listed in the `throws` clause, Swift will issue a compile error.

Where this gets really clever is that `throws(any Error)` is equivalent to using just `throws` by itself, and `throws(Never)` is equivalent to a non-throwing function. That might sound obscure, but it means in many places `rethrows` can be expressed more clearly: the function throws whatever the function parameter throws.

As an example, Swift 6's new `count(where:)` method accepts a closure used to evaluate how many items match whatever kind of filter you're running. That closure might throw errors, and if it does `count(where:)` will throw that same error type:

```swift
public func count<E>(
    where predicate: (Element) throws(E) -> Bool
) throws(E) -> Int {
```

If that closure *doesn't* throw an error, `throws(E)` is effectively `throws(Never)`, meaning that `count(where:)` will also not throw errors.

Even though typed throws seem very appealing, they aren't a great choice when the errors that can be thrown might change in the future. They are a particularly poor choice in library code, because they lock you into a contract you might not want to stick to in the future.

In fact, here I'll just defer to the authors of the evolution proposal, who sum it up like this: **even with the addition of typed throws to Swift, untyped throws is better for most scenarios.**

Where typed throws *are* particularly useful is in the increasingly important realm of embedded Swift, where performance and predictability is critical. Apple's recent interest in typed throws would rather suggest that embedded Swift is something they are keen to invest in as a priority – perhaps the idea of having kernel-level Swift isn't so far away.

---

## Pack iteration

.[<FontIcon icon="fa-brands fa-swift"/>SE-0408 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0408-pack-iteration.md) introduces pack iteration, which adds the ability to loop over the parameter pack feature introduced in Swift 5.9.

Although value packs remain one of the most complex features of Swift, the evolution proposal shows just how useful this feature is by adding tuple comparison for any arity in just a few lines of code:

```swift
func == <each Element: Equatable>(lhs: (repeat each Element), rhs: (repeat each Element)) -> Bool {
    for (left, right) in repeat (each lhs, each rhs) {
        guard left == right else { return false }
    }
    return true
}
```

If that means nothing to you, the Simple English version is that [<FontIcon icon="fa-brands fa-swift"/>SE-0015 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0015-tuple-comparison-operators.md) added support for direct tuple comparison up to arity 6, meaning that two tuples with up to six items could be compared using `==`. If you tried comparing tuples with seven items – e.g. `(1, 2, 3, 4, 5, 6, 7) == (1, 2, 3, 4, 5, 6, 7)` – Swift would throw up an error. SE-0408, along with the code above, removes that restriction.

Tantalizingly, the Future Directions section](https://github.com/apple/swift-evolution/blob/main/proposals/0408-pack-iteration.md#future-directions) of this evolution proposal suggest that in the future we might see a variant of Swift's `zip()` function that supports any number of sequences.

That being said, if I were to speculate I'd say this particular feature feels more like Apple continuing work to formalize a technique SwiftUI has used for some time: being able to iterate over `TupleView` children in a `VStack`.

---

## Add Collection Operations on Noncontiguous Elements

.[<FontIcon icon="fa-brands fa-swift"/>SE-0270 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0270-rangeset-and-collection-operations.md) introduces various new methods to handle more complex operations on collections, such as moving or remove multiple items that aren't contiguous.

This change is powered by a new type called `RangeSet`. If you've ever used `IndexSet` from Foundation, think of `RangeSet` as being `IndexSet` except for any kind of `Comparable` type rather than just integers.

Lots of Swift API has been upgraded to `RangeSet`. To give us some example data to work with, we could create an array of students with exam results like this:

```swift
struct ExamResult {
    var student: String
    var score: Int
}

let results = [
    ExamResult(student: "Eric Effiong", score: 95),
    ExamResult(student: "Maeve Wiley", score: 70),
    ExamResult(student: "Otis Milburn", score: 100)
]
```

We can get a `RangeSet` containing the indices of all students who score 85% or higher like this:

```swift
let topResults = results.indices { student in
    student.score >= 85
}
```

And if we wanted to get access to those students, we can use a new `Collection` subscript:

```swift
for result in results[topResults] {
    print("\(result.student) scored \(result.score)%")
}
```

This subscript returns another new type called `DiscontiguousSlice`, which is similar to `Slice` in that for performance reasons it refers to elements stored in a different collection, except the indices are *discontiguous*, meaning that they aren't necessarily adjacent in the collection.

The "set" part of the name is there because `RangeSet` supports a variety of functions that come from the `SetAlgebra` protocol, including `union()`, `intersection()`, and `isSuperset(of:)`. This also means that inserting one range into another will merge any overlapping ranges rather than creating duplicates.

---

## Access-level modifiers on import declarations

.[<FontIcon icon="fa-brands fa-swift"/>SE-0409 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0409-access-level-on-imports.md) adds the ability to mark import declarations with access control modifiers, such as `private import SomeLibrary`.

There are various ways this will be useful, including the ability for library developers to avoid accidentally leaking their own dependencies. For example, a banking might be split into multiple parts:

- The app itself, presenting the user interface.
- A Banking library that handles all the functionality and core logic.
- Several smaller, internal libraries that handle individual pieces of work that are lower level, such as a Transactions package, a Networking package, and so on.

So, the app depends on the Banking library, and the Banking library in turn depends on Transactions, Networking, and other internal libraries.

We can demonstrate that setup with some code that also demonstrates the problem being resolved here. First, we could say that the low-level Transactions package has a struct such as this one:

```swift
public struct BankTransaction {
    // code here
}
```

Up in the Banking library we might write a function to send money from one account number to another using that `BankTransaction`:

```swift
public func sendMoney(from: Int, to: Int) -> BankTransaction {
    // handle sending money then send back the result
    return BankTransaction()
}
```

And now in the main app we can call `sendMoney()` to do the work.

That's all regular Swift code, but it can create a rather unpleasant problem: very often wrapper libraries don't want to reveal the inner workings of the libraries they rely on internally, which is exactly what happens here – our main app is given access to the `BankTransaction` struct from the Transactions library, when really it should only use APIs from the Banking library.

From 6.0 onwards we can solve this problem by using access control on the import for Transactions: by using `internal import Transactions` or similar in the Banking library, Swift will refuse to build any code declared as public that exposes API from the Transactions library.

This really helps to clear up code boundaries: the Banking framework can still go ahead and use all the libraries it wants internally, but it won't be allowed to send those back to clients – the app in this case – by accident. If we genuinely did want to expose the internal framework types, we would use `public import Transactions` to make that explicit.

On a more fine-grained level, this also allows files inside the same module to add extra restrictions – one file could privately import a framework without wanting to accidentally expose the contents of that framework elsewhere.

Although Swift 6 hasn't shipped yet, it's looking like the default for imports will be `internal` when running in Swift 6 mode, but `public` in Swift 5 mode to retain compatibility with existing code.

---

## Upgrades for noncopyable types

Noncopyable types were [introduced in Swift 5.9](/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md), but are getting several upgrades in Swift 6.

As a reminder, noncopyable types allow us create types that have unique ownership, which we can pass around using borrowing or consuming as needed.

One example of noncopyable types I previously used were the secret messages used in the Mission Impossible movies – they famously self-destruct after being read, which we can model with a noncopyable type that is consumed (i.e. destroyed) upon reading:

```swift
struct Message: ~Copyable {
    var agent: String
    private var message: String

    init(agent: String, message: String) {
        self.agent = agent
        self.message = message
    }

    consuming func read() {
        print("\(agent): \(message)")
    }
}

func createMessage() {
    let message = Message(agent: "Ethan Hunt", message: "You need to abseil down a skyscraper for some reason.")
    message.read()
}

createMessage()
```

In that code, the compiler enforces that `message.read()` can only ever be called once, because it consumes the object.

The first major improvement is [<FontIcon icon="fa-brands fa-swift"/>SE-0427 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0427-noncopyable-generics.md), which introduces a batch of improvements at once. The biggest of those is that every struct, class, enum, generic type parameter, and protocol in Swift 6 automatically conforms to a new `Copyable` protocol unless you explicitly opt out using `~Copyable`.

This impacts on the other changes introduced with this proposal. For example, noncopyable types can now be used with generics, allowing things like *optional* noncopyable instances because Swift's `Optional` is implemented a generic enum. However, because generic type parameters automatically conform to `Copyable` we must explicitly opt out using `~Copyable`.

Similarly, this change means noncopyable types can now conform to protocols, but only when those protocols are also marked `~Copyable` because otherwise they get automatically opted into `Copyable` as mentioned above. (In case you were curious, `Copyable` types can conform to noncopyable protocols just fine.)

.[<FontIcon icon="fa-brands fa-swift"/>SE-0429 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0429-partial-consumption.md) improves things further by adding partial consumption of noncopyable values.

Previously it could be a problem when one noncopyable type incorporated another. For example, even fairly trivial code like the below was a problem before [<FontIcon icon="fa-brands fa-swift"/>SE-0429 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0429-partial-consumption.md):

```swift
struct Package: ~Copyable {
    var from: String = "IMF"
    var message: Message

    consuming func read() {
        message.read()
    }
}
```

That code is now valid Swift, as long as the types in question don't have deinitializers. 

A third major noncopyable improvement is [<FontIcon icon="fa-brands fa-swift"/>SE-0432 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0432-noncopyable-switch.md), which allows us to borrow noncopyable types while switching over them. Previously it was impossible to do pattern matching with `where` clauses that depended on noncopyable values, whereas thanks to SE-0432 this is now possible in Swift 6.

Continuing our Mission Impossible example, we could say that one set of orders might be signed or anonymous, like this:

```swift
enum ImpossibleOrder: ~Copyable {
    case signed(Package)
    case anonymous(Message)
}
```

Because that enum has associated values that are noncopyable, it must itself be noncopyable. However, the associated values being noncopyable also means that pattern matching with `where` was tricky – if you wanted to perform one set of actions for one `Message` type, and a different set for another `Message` type, you were out of luck.

With [<FontIcon icon="fa-brands fa-swift"/>SE-0432 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0432-noncopyable-switch.md) this is now resolved, meaning code like the below is now allowed:

```swift
func issueOrders() {
    let message = Message(agent: "Ethan Hunt", message: "You need to abseil down a skyscraper for some reason.")
    let order = ImpossibleOrder.anonymous(message)

    switch consume order {
    case .signed(let package):
        package.read()
    case .anonymous(let message) where message.agent == "Ethan Hunt":
        print("Play dramatic music")
        message.read()
    case .anonymous(let message):
        message.read()
    }
}
```

Put together, this collection of changes helps make noncopyable types work much more naturally in Swift.

---

## 128-bit Integer Types

.[<FontIcon icon="fa-brands fa-swift"/>SE-0425 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0425-int128.md) introduces `Int128` and `UInt128`. I literally have nothing more to say about these, because I think you already know exactly how they work – even the evolution proposal says, "the actual API of the types is uninteresting."

Still, I'd feel guilty if I didn't at least give you a code sample, so here goes:

```swift
let enoughForAnybody: Int128 = 170_141_183_460_469_231_731_687_303_715_884_105_727
```

---

## BitwiseCopyable

.[<FontIcon icon="fa-brands fa-swift"/>SE-0426 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0426-bitwise-copyable.md) introduces a new `BitwiseCopyable` protocol, which has the sole purpose of allowing the compiler to create more optimized code for conforming types.

*Most of the time you don't need to do anything to enable `BitwiseCopyable` support*. Swift will automatically apply it to most structs and enums you create as long as all the properties they contain are also bitwise copyable. That includes a huge collection of built-in types: all integers, all floating-point numbers, `Bool`, `Duration`, `StaticString`, and more.

Where things take a little more thinking is when you're building a library – if Swift were to automatically apply a conformance to `BitwiseCopyable` it could cause problems if your type changed in the future in a way that made it *not* support the protocol.

So, Swift disables the automatic inference for types you export with `public` or `package` visibility unless you explicitly mark those types with `@frozen`.

If you specifically need to disable `BitwiseCopyable`, you can do that by adding `~BitwiseCopyable` to your type's inheritance list. For example, the standard library's `CommandLine` enum is both `public` and `@frozen`, so the Swift team explicitly opt out of it being bitwise copyable like this:

```swift
@frozen
public enum CommandLine : ~BitwiseCopyable {
}
```

::: important

Opting out of `BitwiseCopyable` must happen directly where your type is declared rather than in an extension.

:::

---

## And maybe more…

Until Swift 6 ships as final later in the year it's hard to tell exactly what mix of features might arrive. At this time, the following proposals are the ones I'm watching carefully:

- [<FontIcon icon="fa-brands fa-swift"/>SE-0364 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`): Warning for Retroactive Conformances of External Types](https://github.com/apple/swift-evolution/blob/main/proposals/0364-retroactive-conformance-warning.md)
- [<FontIcon icon="fa-brands fa-swift"/>SE-0415 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`): Function body macros](https://github.com/apple/swift-evolution/blob/main/proposals/0415-function-body-macros.md)
- [<FontIcon icon="fa-brands fa-swift"/>SE-0419 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`): Swift Backtrace API](https://github.com/apple/swift-evolution/blob/main/proposals/0419-backtrace-api.md)

The retroactive conformances change is particularly interesting, mostly because Apple does a less than optimal job of making some of its most common framework types conform to common protocols like `Equatable` and `Codable` – I really hope that changes before SE-0364 kicks in.

---

## Where next?

Swift 6 feels like it has been on the horizon for some years now – I can certainly remember thinking about it pretty much ever since early concurrency discussions, when we started looking towards the compiler refusing to build code that wasn't provably concurrency-safe.

Over time, Swift 6 became something of a dumping ground for code-breaking features – some evolution proposals landed in earlier versions of Swift, and were either disabled fully or in part without enabling specific compiler flags. Some or all of these will now enabled when Swift 6 language mode is enabled:

- [<FontIcon icon="fa-brands fa-swift"/>Bare slash regexes](https://github.com/apple/swift-evolution/blob/main/proposals/0354-regex-literals.md)
- [<FontIcon icon="fa-brands fa-swift"/>Access control for imports](https://github.com/apple/swift-evolution/blob/main/proposals/0409-access-level-on-imports.md)
- [<FontIcon icon="fa-brands fa-swift"/>Concise magic file names](https://github.com/apple/swift-evolution/blob/main/proposals/0274-magic-file.md)
- [<FontIcon icon="fa-brands fa-swift"/>Forward scan matching for trailing closures](https://github.com/apple/swift-evolution/blob/main/proposals/0286-forward-scan-trailing-closures.md)
- [<FontIcon icon="fa-brands fa-swift"/>`any` being required for existential types](https://github.com/apple/swift-evolution/blob/main/proposals/0335-existential-any.md)
- [<FontIcon icon="fa-brands fa-swift"/>Importing Forward Declared Objective-C Interfaces and Protocols](https://github.com/apple/swift-evolution/blob/main/proposals/0384-importing-forward-declared-objc-interfaces-and-protocols.md)
- [<FontIcon icon="fa-brands fa-swift"/>Deprecate @UIApplicationMain and @NSApplicationMain](https://github.com/apple/swift-evolution/blob/main/proposals/0383-deprecate-uiapplicationmain-and-nsapplicationmain.md)

Now that Swift 6 is finally here, there's undoubtedly going to be a fair amount of churn in projects: if you're moving from Swift 5.10 to Swift 6 without trying some of the compiler flags or enabling strict concurrency checking, there's a good chance your project won't build. 

There will also be just as much churn in documentation: many tutorials, books, and conference videos will be outdated when projects start moving to Swift 6 across the board, unless Apple really does some magic with their framework updates alongside Swift 6.

One thing that will help – which I think will also land in Swift 6, but it's hard to tell – is [<FontIcon icon="fa-brands fa-swift"/>SE-0435 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0435-swiftpm-per-target-swift-language-version-setting.md), which allows developers to control the Swift language setting on individual targets in their project. If this comes with Swift 6, it will certainly make it easier to move across to Swift 6 incrementally.

I know it probably feels like Swift's concurrency story has been in non-stop flux ever since it was introduced, but I also don't think it's over yet. Even with the remarkable efforts that went into Swift 5.10 and 6.0, I fully expect a few more years of refinement to happen both in Swift and particularly Apple's frameworks to help make concurrency as smooth as possible.

Perhaps the more interesting question is whether Swift 6.x will last as long as Swift 5.x did, or whether the team will ease into a slightly more regular cadence now the mammoth work of complete concurrency is finally enabled.

---

<TagLinks />