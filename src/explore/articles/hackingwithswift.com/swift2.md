---
lang: ko-KR
title: "What's new in Swift 2.0"
description: "What's new in Swift 2.0"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-2.0
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 2.0
    - property: og:description
      content: "What's new in Swift 2.0"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift2.html
prev: /programming/swift/articles/README.md
date: 2015-06-08
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
  "title": "What's new in Swift 2.0 – Hacking with Swift",
  "desc": "What's new in Swift 2.0",
  "link": "https://hackingwithswift.com/swift2",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift 2.0 is here, and packed full with features. If you already completed the entire [<FontIcon icon="fas fa-globe"/>Hacking with Swift coding series](https://hackingwithswift.com/) (it's free!), you'll have watched Apple's WWDC15 keynote with as much excitement as I did. And yes: Swift 2 is now available with Xcode 7, so if you're keen to start learning then I'm here to help.

While I'm busy updating my free online Swift tutorial series, I wrote this article about some of the new features in Swift 2 and another [showing off what's new in iOS 9](/explore/articles/hackingwithswift.com/ios9.md). I've even put up a whole page of [free tutorials for iOS 9](/explore/articles/hackingwithswift.com/ios9-tutorials.md) teaching many of the amazing new features – you should check it out!

If you liked this article, you might also want to read:

```component VPCard
{
  "title": "What's new in Swift 2.2 – Hacking with Swift",
  "desc": "What's new in Swift 2.2",
  "link": "/explore/articles/hackingwithswift.com/swift2-2.md",
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

All set to go? Here's the least you need to know…

---

## NEW: Watch my Swift 2.0 video

I made a super-fast video going over the key new features in Swift 2. You can read the original article below, or watch this video for my lightning summary. Feedback? [<FontIcon icon="fa-brands fa-x-twitter"/>Find me on Twitter @twostraws](http://x.com/twostraws).

<VidStack src="youtube/pHsvYPMqsOc" />

---

## try/catch

::: infor Update

I wrote a tutorial on Swift 2's try catch error handling – check it out!

```component VPCard
{
  "title": "Error handling in Swift: try, catch, do and throw – Hacking with Swift",
  "desc": "Error handling in Swift: try, catch, do and throw",
  "link": "/explore/articles/hackingwithswift.com/new-syntax-swift-2-error-handling-try-catch.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

This is a common feature of other languages, but something notably missing from Swift – at least until now. I'm not going to wade into the larger debate about the merits of `try/catch` (trust me, this can cause major fights!), I'm just going to explain what it does and how you can use it once you install Xcode 7.

`try`/`catch` is a way of programming that means "try this thing, but if it fails do this other thing instead." Swift uses enums for error types so that it can ensure your error catching is exhaustive, just like with `switch` statements. So for example, you might define your error list something like this:

```swift
enum MyError: ErrorType {
    case UserError
    case NetworkError
    case DiscoverydError
}
```

Notice how my error type builds on the built-in `ErrorType` protocol; this is required.

Once you've defined the various errors you want to work with, it's time to introduce three new keywords: `throws`, `try`, `do` and `catch`.

First up, `throws` is a simple keyword that you add to your method to tell Swift it might fail. You put it right before where you put your method's return type, like this:

```swift
func doStuff() throws -> String {
```

Once that's done, you cannot call that method unless your code is written to handle any errors it throws – Xcode simply won't compile. When you want to throw an error from inside your methods, you just write `throw` followed by the type of error you want to throw, like this:

```swift
func doStuff() throws -> String {
    print("Do stuff 1")
    print("Do stuff 2")
    throw MyError.NetworkError

    return "Some return value"
}
```

The dummy `print()` calls are there so you can follow the program flow, as you'll see in a moment.

But first, on to the next keyword: `try`. This is placed before any call to a method that throws an error, like this:

```swift
try doStuff()
```

This literally writes into your code "I acknowledge that this code might fail," so it's effectively syntactic sugar to ensure safety. But even with that your code still won't compile, because you don't catch the errors: you need to use `do` and `catch`.

Catching errors has two forms: catching specific errors and catching all errors. You can mix and match, meaning your code can say "if the error is X, I want to handle it like this; all other errors should be handled this other way."

Here's a very basic example showing how to catch all errors:

```swift
do {
    try doStuff()
    print("Success")
} catch {
    print("An error occurred.")
}
```

If you remember, we made the `doStuff()` method print "Do stuff 1" then "Do stuff 2" before throwing a network error. So, what will happen is:

- "Do stuff 1" will be printed
- "Do stuff 2" will be printed
- The NetworkError error will be thrown, immediately exiting the `doStuff()` method – its return statement will never be reached
- Control will jump to the `catch` block
- "An error occurred" will be printed

To be clear: in the code above, "Success" will never be printed – as soon as any `try` methods throw an error, execution stops and jumps to the `catch` block.

As I said, you can mix and match generic and specific `catch` blocks, but you do need to be sure that all possible errors are caught. For example, this will execute one chunk of code for NetworkError errors, and another chunk for all other errors:

```swift
do {
    try doStuff()
    print("Success")
} catch MyError.NetworkError {
    print("A network error occurred")
} catch {
    print("An error occurred")
}
```

---

## Automatically synthesized headers

This is a small change, but trust me: it's a welcome one. To try it out in Xcode 7, go to Navigate > Generated Interface.

In Objective C header files provided a list of the functionality exposed by classes – think of them like summaries telling you what methods are available and what parameters they take, but with none of the code.

Swift doesn't have header files, whch means you write all your code in a .swift file and don't have to worry about updating header files. Instead, you use keywords like "private" to mark how methods should be exposed to the outside world.

But in losing header files, Swift lost one important piece of functionality: being able to see at a glance what functions are inside a class. So if you give me a 1000-line Swift file and I just want to see how I can call your functions, I have to dig through all the code, which is unpleasant.

Apple's solution is simple and efficient: Xcode can now show synthesized header files: it scans through your code and produces virtual header files that summarise the exposed methods with none of the code, just like you see if you try to inspect any of Apple's own classes.

---

## The "guard" keyword

::: info update

I wrote a tutorial on the guard keyword in Swift 2 – check it out!

```component VPCard
{
  "title": "The guard keyword in Swift: early returns made easy – Hacking with Swift",
  "desc": "The guard keyword in Swift: early returns made easy",
  "link": "/explore/articles/hackingwithswift.com/new-syntax-swift-2-guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

It's very common to place some conditional checks at the start of a method to ensure that various data is configured ready to go. For example, if a Submit button is tapped, you might want to check that the user has entered a username in your user interface. To do this, you'd use this code:

```swift
func submitTapped() {
    guard username.text.characters.count > 0 else {
        return
    }

    print("All good")
}
```

Using `guard` might not seem much different to using `if`, but with `guard` your intention is clearer: execution should not continue if your conditions are not met. Plus it has the advantage of being shorter and more readable, so `guard` is a real improvement, and I'm sure it will be adopted quickly.

There is one bonus to using `guard` that might make it even more useful to you: if you use it to unwrap any optionals, those unwrapped values stay around for you to use in the rest of your code block. For example:

```swift
guard let unwrappedName = userName else {
    return
}

print("Your username is \(unwrappedName)")
```

This is in comparison to a straight `if` statement, where the unwrapped value would be available only inside the `if` block, like this:

```swift
if let unwrappedName = userName {
    print("Your username is \(unwrappedName)")
} else {
    return
}

// this won't work – unwrappedName doesn't exist here!
print("Your username is \(unwrappedName)")
```

---

## Measuring strings has changed. Again.

If you just read `username.text.characters.count` and did a double take, I don't blame you: Apple has changed how strings are measured yet again. What was `countElements()` became `count()`, and has now gone away entirely – and in fact if you try to use `count()` with a String you'll get an error.

Instead, you should access the `characters` property of your String, then call `count` on that. Or at least that's what you should do until Apple changes its mind again…

---

## The "defer" keyword

::: info Update

I wrote a tutorial on the defer keyword of Swift 2 – check it out!

```component VPCard
{
  "title": "The defer keyword in Swift: try/finally done right – Hacking with Swift",
  "desc": "The defer keyword in Swift: try/finally done right",
  "link": "/explore/articles/hackingwithswift.com/new-syntax-swift-2-defer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

Some languages have a concept of `try/finally` which lets you tell your app "no matter what happens, I want this code to be executed." Swift 2 introduces its own take on this requirement using the `defer` keyword: it means "I want this work to take place, but not just yet." In practice, this usually means the work will happen just before your method ends, but here's the cool thing: this will still happen if you throw an error.

First, a simple example:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    print("Checkpoint 1")
    doStuff()
    print("Checkpoint 4")
}

func doStuff() {
    print("Checkpoint 2")
    defer { print("Do clean up here") }
    print("Checkpoint 3")
}
```

If you run that, you'll see "Checkpoint 1", "Checkpoint 2", "Checkpoint 3", "Do clean up here", then "Checkpoint 4". So, even though the `defer` line appears before checkpoint 3, it gets executed after – it gets deferred until the method is about to end.

I put "Do clean up code here" in there because that's exactly what `defer` is good at: when you know you need to flush a cache, write out a file or whatever, and you want to make sure that code gets executed regardless of what path is taken through your method.

As I said, work you schedule with `defer` will execute no matter what route your code takes through your method, and that includes if you throw any errors. For example:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    print("Checkpoint 1")

    do {
        try doStuff()
    } catch {
        print("Error!")
    }

    print("Checkpoint 4")
}

func doStuff() throws {
    print("Checkpoint 2")
    defer { print("Do clean up here") }
    throw MyError.UserError
    print("Checkpoint 3")
}
```

As soon as `doStuff()` throws its error, the method is exited and at that point the deferred code is called.

---

## Mutability warnings

This is a simple change that is going to go a long way to help code readability. As you know, Swift developers prefer declaring things as constants (using `let`) rather than variables (using `var`). But what if you made something a variable by accident? Or if you thought you might need to change it, then never do?

As of Xcode 7 and Swift 2, you'll get warnings in your code whenever you declare variables that never change – Xcode literally examines the way you use the variable and knows if you never change it.

---

## Checking API availability

::: info Update

I wrote a tutorial on #availability – check it out!

```component VPCard
{
  "title": "Availability checking in Swift: backwards compatibility the smart way – Hacking with Swift",
  "desc": "Availability checking in Swift: backwards compatibility the smart way",
  "link": "/explore/articles/hackingwithswift.com/new-syntax-swift-2-availability-checking.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

One regular problem that iOS developers hit is that we need to be careful when using new APIs – if you try and use `UIStackView` on iOS 8, for example, your app will crash. In the olden days, Objective C developers would write code like this:

```swift
NSClassFromString(@"UIAlertController") != nil
```

That means, "if the UIAlertController class exists," which was a way of checking if we were running on iOS 8 or later. But because Xcode didn't know that was our goal, it couldn't ensure we got things right. Well, this is fixed with Swift 2, because you can now write code like this:

```swift
if #available(iOS 9, *) {
    let stackView = UIStackView()
    // do stuff
}
```

The magic happens with `#available`: it will automatically check whether we are running on iOS 9 or later, and, if so, will run the code with the `UIStackView`. The `*` after "iOS 9" is there as a catch all for any future platforms that Apple introduces, and it's required.

So, `#available` is cool, but even better is the fact that you can give it an `else` block and, because Xcode now knows this block will only execute if the device is iOS 8 or earlier, it can warn you if you new APIs. For example, if you wrote something like this:

```swift
if #available(iOS 9, *) {
    // do cool iOS 9 stuff
} else {
    let stackView = UIStackView()
}
```

…that will now fail to build: Xcode can see we're trying to use `UIStackView` where it is not available, and it simply will not allow this to happen. So, by switching from "is this class available" to telling Xcode our actual intent, we get a huge boost in safety.

---

## And there's more…

There's so much I haven't even touched on, not least being able to write Markdown in comments and the much-improved Whole Module Optimization. But even though this little article is about Swift, I do want to add one Objective C thing: Apple has finally added generics to Objective C! You just use `NSArray<NSString *>*` to declare an array of strings, which is a cinch.

---

<TagLinks />