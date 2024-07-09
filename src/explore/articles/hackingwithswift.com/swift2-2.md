---
lang: ko-KR
title: "What's new in Swift 2.2"
description: "What's new in Swift 2.2"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-2.2
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 2.2
    - property: og:description
      content: "What's new in Swift 2.2"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift2-2.html
prev: /programming/swift/articles/README.md
date: 2016-03-21
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

[[toc]]

---

```component VPCard
{
  "title": "What's new in Swift 2.2 – Hacking with Swift",
  "desc": "What's new in Swift 2.2",
  "link": "https://hackingwithswift.com/swift2-2",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift 2.2 is almost here, and cleans up a number of quirks, adds some missing features, and deprecates – perhaps controversially – some language features. This article goes over all the major changes, along with several minor ones, and gives you practical code examples so you can get up and running straight away.

If you liked this article, you might also want to read:

```component VPCard
{
  "title": "What's new in Swift 2.0 – Hacking with Swift",
  "desc": "What's new in Swift 2.0",
  "link": "/explore/articles/hackingwithswift.com/swift2.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in iOS 9 for developers – Hacking with Swift",
  "desc": "What's new in iOS 9 for developers",
  "link": "/explore/articles/hackingwithswift.com/ios9.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## Watch my Swift 2.2 video

I made a video going over the key new features in Swift 2.2. You can read the original article below, or watch this video for my lightning summary. Feedback? [<FontIcon icon="fa-brands fa-x-twitter"/>Find me on Twitter @twostraws](http://x.com/twostraws).

<VidStack src="youtube/Swgf39f_Q5E" />

---

## `++` and `--` are deprecated

Swift 2.2 formally deprecates the `++` and `--` operators, which means they still work but you'll get a warning when you use them. Deprecation is usually a first step towards removing something entirely, and in this case both of these operators will be removed in Swift 3.0.

In their place, you need to use `+= 1` and `-= 1` instead. These operators have been there all along, and are not going away.

You might wonder why two long-standing operators are being removed, particularly when they exist in C, C#, Java, and – critically to its "joke" – C++. There are several answers, not least:

1. Writing `++` rather than `+= 1` is hardly a dramatic time saving
2. Although it's easy once you know it, `++` doesn't have an obvious meaning to people learning Swift, whereas `+=` at least reads as "add and assign."
3. C-style loops – one of the most common situations where `++` and `--` were used – have also been deprecated, which brings me on to my next point…

---

## Traditional C-style for loops are deprecated

Yes, you read that correctly: loops like the below will soon be removed entirely from Swift:

```swift
for var i = 1; i <= 10; i += 1 {
    print("\(i) green bottles")
}
```

These are called C-style for loops because they have long been a feature of C-like languages, and conceptually even pre-date C by quite a long way.

Although Swift is (just about!) a C-like language, it has a number of newer, smarter alternatives to the traditional for loop. The result: this construct has been deprecated in Swift 2.2 and will be removed "in a future version of Swift."

Note: the current deprecation warning does not say it's removed in Swift 3.0, although I suspect it will be.

To replace these old for loops, use one of the many alternatives. For example, the "green bottles" code above could be rewritten to loop over a range, like this:

```swift
for i in 1...10 {
    print("\(i) green bottles")
}
```

Remember, though, that it's a bad idea to create a range where the start is higher than the end: your code will compile, but it will crash at runtime. So, rather than writing this:

```swift
for i in 10...1 {
    print("\(i) green bottles")
}
```

…you should write this instead:

```swift
for i in (1...10).reverse() {
    print("\(i) green bottles")
}
```

Another alternative is just to use regular fast enumeration over an array of items, like this:

```swift
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in array {
    print("\(number) green bottles")
}
```

Although if you want to be technically correct (also known as "the best kind of correct") you would write such a beast like this:

```swift
var array = Array(1...10)

for number in array {
    print("\(number) green bottles")
}
```

---

## Arrays and other slice types now have removeFirst()

The `removeLast()` method has always been helpful when working with arrays, but until now it's been missing a counterpart to remove items from the start of an array.

Well, Swift 2.2 is here to rescue you with the addition of the `removeFirst()` method. This removes the first element in an array, and returns it to you.

Looking back to the green bottles code above, you'll notice two quirks: first, I was using `var` rather than `let`, and second it was printing the grammatically incorrect message "1 green bottles".

Neither of these are a mistake, because I'm going to use them to demonstrate `removeFirst()`:

```swift
var array = Array(1...10)
array.removeFirst()

for number in array {
    print("\(number) green bottles")
}
```

::: warning

whereas `removeLast()` has an optional equivalent, `popLast()`, there is no optional equivalent for `removeFirst()`. This means if you call it on an empty array, your code will crash.

:::

---

## You can now compare tuples (within reason)

A tuple is simply a comma-separated list of values, where each value may or may not be named. For example:

```swift
let singer = ("Taylor", "Swift")
let alien = ("Justin", "Bieber")
```

In older versions of Swift, you couldn't compare two tuples without writing some unwieldy code like this:

```swift
func ==  (t1: (T, T), t2: (T, T)) -> Bool {
    return t1.0 == t2.0 &amp;&amp; t1.1 == t2.1
}
```

It's not very user-friendly to require that kind of boilerplate code, and of course it would only work for tuples that have exactly two elements. In Swift 2.2, you no longer need to write that code because tuples can be compared directly:

```swift
let singer = ("Taylor", "Swift")
let alien = ("Justin", "Bieber")

if singer == alien {
    print("Matching tuples!")
} else {
    print("Non-matching tuples!")
}
```

Swift 2.2's automatic tuple comparison works with tuples with two elements just like the function we wrote, but it also works with tuples of other sizes – up to arity 6, which means a tuple that contains six elements.

(In case you were wondering: "arity" is pronounced like "arrity", but "tuple" is pronounced any number of ways: "toople", "tyoople" and "tupple" are all common.)

There are two reasons why Swift's tuple comparisons work only up to arity 6 (rather than arity 6 million). First, each extra comparison requires more code inside the Swift standard library. Second, using tuples that big is probably a code smell – switch to a struct instead.

You can see how tuple comparison works by changing our two tuples like this:

```swift
let singer = ("Taylor", 26)
let alien = ("Justin", "Bieber")
```

Be prepared for a very long error message from Xcode, but the interesting part comes near the end:

```
note: overloads for '==' exist with these partially matching parameter lists: ......
((A, B), (A, B)), ((A, B, C), (A, B, C)), ((A, B, C, D), (A, B, C, D)), ((A, B, C, D, E), (A, B, C, D, E)), ((A, B, C, D, E, F), (A, B, C, D, E, F))
```

As you can see, Swift literally has functions to compare tuples all the way up to `(A, B, C, D, E, F)`, which ought to be more than enough.

---

## Tuple splat syntax is deprecated

Staying with tuples for a moment longer: another feature that has been deprecated is one that has been part of Swift since 2010 (yes, years before it launched). It's been named "the tuple splat", and not many people were using it. It's partly for that reason – although mainly because it introduces all sorts of ambiguities when reading code – that this syntax is being deprecated.

In case you were curious – and let's face it, you probably are – here's an example of tuple splat syntax in action:

```swift
func describePerson(name: String, age: Int) {
    print("\(name) is \(age) years old")
}

let person = ("Taylor Swift", age: 26)
describePerson(person)
```

But remember: don't grow too fond of your new knowledge, because tuple splats are deprecated in Swift 2.2 and will be removed entirely in a later version.

---

## More keywords can be used as argument labels

Argument labels are a core feature of Swift, and let us write code like this:

```swift
for i in 1.stride(through: 9, by: 2) {
    print(i)
}
```

Without the `through` or `by` labels, this code would lose its self-documenting nature: what do the 9 and 2 do in `1.stride(9, 2)`? In this example, Swift also uses the argument labels to distinguish `1.stride(through: 9, by: 2)` from `1.stride(to: 9, by: 2)`, which produces different results.

As of Swift 2.2, you can now use a variety of language keywords as these argument labels. You might wonder why this would be a good thing, but consider this code:

```swift
func printGreeting(name: String, repeat repeatCount: Int) {
    for _ in 0 ..< repeatCount {
        print(name)
    }
}

printGreeting("Taylor", repeat: 5)
```

That uses `repeat` as an argument label, which makes sense because the function will print a string a number of times. Because `repeat` is a keyword, this code would not work before Swift 2.2 – you would need to write ``repeat`` instead, which is unpleasant.

Note that there are still some keywords that may not be used, specifically `var`, `let` and `inout`.

---

## var parameters have been deprecated

Another deprecation, but again with good reason: `var` parameters are deprecated because they offer only marginal usefulness, and are frequently confused with `inout`. These things are so sneaky I couldn't resist adding one to my [<FontIcon icon="fas fa-globe"/>Swift language tests](https://hackingwithswift.com/test/), although I will probably have removed them by the time you read this!

To give you an example, here is the `printGreeting()` function modified to use `var`:

```swift
func printGreeting(var name: String, repeat repeatCount: Int) {
    name = name.uppercaseString

    for _ in 0 ..< repeatCount {
        print(name)
    }
}

printGreeting("Taylor", repeat: 5)
```

The differences there are in the first two lines: `name` is now `var name`, and `name` gets converted to uppercase so that "TAYLOR" is printed out five times.

Without the `var` keyword, `name` would have been a constant and so the `uppercaseString` line would have failed.

The difference between `var` and `inout` is subtle: using `var` lets you modify a parameter inside the function, whereas `inout` causes your changes to persist even after the function ends.

As of Swift 2.2, `var` is deprecated, and it's slated for removal in Swift 3.0. If this is something you were using, just create a variable copy of the parameter inside the method, like this:

```swift
func printGreeting(name: String, repeat repeatCount: Int) {
    let upperName = name.uppercaseString

    for _ in 0 ..< repeatCount {
        print(upperName)
    }
}

printGreeting("Taylor", repeat: 5)
```

---

## Renamed debug identifiers: #line, #function, #file

Swift 2.1 and earlier used the "screaming snake case" symbols `__FILE__`, `__LINE__`, `__COLUMN__`, and `__FUNCTION__`, which automatically get replaced the compiler by the filename, line number, column number and function name where they appear.

In Swift 2.2, those old symbols have been replaced with `#file`, `#line`, `#column` and `#function`, which will be familiar to you if you've already used [Swift 2.0's `#available`](/explore/articles/hackingwithswift.com/new-syntax-swift-2-availability-checking.md) to check for iOS features. As the official Swift review says, it also introduces "a convention where # means invoke compiler substitution logic here."

Below I've modified the `printGreeting()` function so you can see both the old and new debug identifiers in action:

```swift
func printGreeting(name: String, repeat repeatCount: Int) {
    // old - deprecated!
    print("This is on line \(__LINE__) of \(__FUNCTION__)")

    // new - shiny!
    print("This is on line \(#line) of \(#function)")

    let upperName = name.uppercaseString

    for _ in 0 ..< repeatCount {
        print(upperName)
    }
}

printGreeting("Taylor", repeat: 5)
```

For the sake of completion, I should add that you can also use `#dsohandle`, but if you know what dynamic shared object handles are you probably already spotted this change yourself!

---

## Stringified selectors are deprecated

One unwelcome quirk of Swift before 2.2 was that selectors could be written as strings, like this:

```swift
navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Tap!", style: .Plain, target: self, action: "buttonTaped")
```

If you look closely, I wrote `"buttonTaped"` rather than `"buttonTapped"`, but Xcode wasn't able to notify me of my mistake if either of those methods didn't exist.

This has been resolved as of Swift 2.2: using strings for selectors has been deprecated, and you should now write `#selector(buttonTapped)` in that code above. If the `buttonTapped()` method doesn't exist, you'll get a compile error – another whole class of bugs eliminated at compile time!

---

## Compile-time Swift version checking

Swift 2.2 adds a new build configuration option that makes it easy to combine code code written in versions of Swift into a single file. This might seem unnecessary, but spare a thought to people who write libraries in Swift: do they target Swift 2.2 and hope everyone is using it, or target Swift 2.0 and hope users can upgrade using Xcode?

Using the new build option lets you write two different flavours of Swift, and the correct one will be compiled depending on the version of the Swift compiler.

For example:

```swift
#if swift(>=2.2)
print("Running Swift 2.2 or later")
#else
print("Running Swift 2.1 or earlier")
#endif
```

Just like the existing `#if os()` build option, this adjusts what code is produced by the compiler: if you're using a Swift 2.2 compiler, the second `print()` line won't even be seen. This means you can use utter gibberish if you want:

```swift
#if swift(>=2.2)
print("Running Swift 2.2 or later")
#else
THIS WILL COMPILE JUST FINE IF YOU'RE
USING A SWIFT 2.2 COMPILER BECAUSE
THIS BIT IS COMPLETELY IGNORED!
#endif
```

---

## New documentation keywords: recommended, recommendedover, and keyword

Swift supports Markdown-formatted comments to add metadata to your code, so you can write things like this:

```swift
/**
Say hello to a specific person
- parameters:
- name: The name of the person to greet
- returns: Absolutely nothing
- authors:
Paul Hudson
Bilbo Baggins
- bug: This is a deeply dull function
*/
func sayHello(name: String) {
    print("Hello, \(name)!")
}

sayHello("Bob")
```

This metadata gets used in code completion ("Say hello to a specific person" gets shown as you type) and also in the quick help pane, which is where the other data is shown.

In Swift 2.2, three new keywords have been added: `recommended`, `recommendedover`, and `keyword`. These appear to be designed to make code completion more useful by letting you specify which properties and methods should return matches inside Xcode, but right now it doesn't appear to be working so that's only a hunch.

When things do suddenly spring into life – soon, I hope! – you can use them like this:

```swift
/**
Greets a named person
- keyword: greeting
- recommendedover: sayHelloToPaul
*/
func sayHello(name: String) { }

/**
Always greets the same person
- recommended: sayHello
*/
func sayHelloToPaul() { }
```

As you can see, `recommended` lets you say "prefer this other method instead", whereas `recommendedover` lets you say "prefer me over this other method."

Like I said, these don't appear to be functional in the current Xcode 7.3, but I filed a bug with Apple in the hope of getting some clarity around what these do, and will update this page when I find out more.

On the plus side, Xcode 7.3 does feature all-new code completion: you can now type something like "strapp" to have "stringByAppendingString" highlighted in the code completion, or "uitavc" to have "UITableViewCell" highlighted. It will take a little thinking to rewire your brain to use these text shortcuts, but it does promise a significant speed up for your coding.

---

<TagLinks />