---
lang: ko-KR
title: "Error handling in Swift: try, catch, do and throw"
description: "Error handling in Swift: try, catch, do and throw"
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
  - xcode
head:
  - - meta:
    - property: og:title
      content: "Error handling in Swift: try, catch, do and throw"
    - property: og:description
      content: "Error handling in Swift: try, catch, do and throw"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/new-syntax-swift-2-error-handling-try-catch.html
prev: /programming/swift/articles/README.md
date: 2019-09-23
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
  "title": "Error handling in Swift: try, catch, do and throw – Hacking with Swift",
  "desc": "Error handling in Swift: try, catch, do and throw",
  "link": "https://hackingwithswift.com/new-syntax-swift-2-error-handling-try-catch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift works hard to make sure we can write *safe* software, which means it eliminates many opportunities for our code to fail. One of the ways it accomplishes this is by letting us catch errors when risky code doesn't run according to plan, and in this article I'm going to walk through how that works and how to use it in your own code.

---

## The Swift approach: try, catch, do and throw

If we wanted to load a file from a URL into a `Data` instance, we might write code like this:

```swift
let contents: Data?
do {
    contents = try Data(contentsOf: someURL)
} catch {
    contents = nil
}
```

That illustrates three of the five new keywords you'll need to learn.

The fourth and fifth keywords are `throw` and `throws`, and we'll look at them in depth now.

Please create a new Xcode project, using the Single View App template. You can name it whatever you feel like, and target whatever device you want – it doesn't matter, because we're not doing anything visual here.

Select <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` and add this new method:

```swift
func encrypt(_ str: String, withPassword password: String) -> String {
    // complicated encryption goes here
    let encrypted = password + str + password
    return String(encrypted.reversed())
}
```

That method is going to encrypt an string using the password that gets sent in. Well, it's not *actually* going to do that – this article isn't about encryption, so my "encryption" algorithm is pathetic: it puts the password before and after the input string, then reverses it. You're welcome to add the complex encryption algorithm yourself later on!

Modify `viewDidLoad()` to call that method by adding this:

```swift
let encrypted = encrypt("secret information!", withPassword: "12345")
print(encrypted)
```

When you run your app now, you'll see "54321!noitamrofni terces54321" printed out in the Xcode terminal. Easy, right?

But there's a problem: assuming you actually do put in a meaningful encryption algorithm, there's nothing stopping users from entering an empty string for a password, entering obvious passwords such as "password", or even trying to call the encryption method without any data to encrypt!

Swift comes to the rescue: you can tell Swift that this method can throw an error if it finds itself in an unacceptable state, such as if the password is six or fewer characters. Those errors are defined by you, and Swift goes some way to ensuring you catch them all.

To get started, we need the `throws` keyword, which you add to your method definition before its return value, like this:

```swift
func encrypt(_ str: String, withPassword password: String) throws -> String {
    // complicated encryption goes here
    let encrypted = password + str + password
    return String(encrypted.reversed())
}
```

As soon as you do that, your code stops working: adding `throws` has actually made things worse! But it's worse for a good reason: Swift's `try/catch` system is designed to be clear to developers, which means you need to mark any methods that can throw using the `try` keyword, like this:

```swift
let encrypted = try encrypt("secret information!", withPassword: "12345")
```

…but even now your code won't compile, because you haven't told Swift what to do when an error is thrown. This is where the `do` and `catch` keywords come in: they start a block of code that might fail, and handle those failures. In our basic example, it might look like this:

```swift
do {
    let encrypted = try encrypt("secret information!", withPassword: "12345")
    print(encrypted)
} catch {
    print("Something went wrong!")
}
```

That silences all the errors, and your code runs again. But it's not actually doing anything interesting yet, because even though we say `encrypt()` has the potential to throw an error, it never actually does.

---

## How to throw an error in Swift

Before you can throw an error, you need to make a list of all the possible errors you want to throw. In our case, we're going to stop people from providing empty passwords, short passwords and obvious passwords, but you can extend it later.

To do this, we need to create an `enum` that represents our type of error. This needs to build on the built-in `Error` enum, but otherwise it's easy. Add this before `class ViewController`:

```swift
enum EncryptionError: Error {
    case empty
    case short
}
```

That defines our first two encryption error types, and we can start using them immediately. As these are preconditions to running the method, we're going to use the new `guard` keyword to make our intentions clear.

Put this at the start of `encrypt()`:

```swift
guard password.count > 0 else { throw EncryptionError.empty }
guard password.count >= 5 else { throw EncryptionError.short }
```

If you run the app now nothing will have changed, because we're providing the password "12345". But if you set that to an empty string, you'll see "Something went wrong!" printed in the Xcode console, showing the error.

Of course, having a single error message isn't helpful – there are several ways the method call can fail, and we want to provide something meaningful for each of them. So, modify the `try/catch` block in `viewDidLoad()` to this:

```swift
do {
    let encrypted = try encrypt("secret information!", withPassword: "")
    print(encrypted)
} catch EncryptionError.empty {
    print("You must provide a password.")
} catch EncryptionError.short {
    print("Passwords must be at least five characters, preferably eight or more.")
} catch {
    print("Something went wrong!")
}
```

Now there are meaningful error messages, so our code is starting to look better. But you may notice that we still need a third `catch` block in there even though we already caught both the `.empty` and `.short` cases.

---

## Swift wants exhaustive try/catch error handling

If you recall, I said "Swift goes some way to ensuring you catch them all" and here's where that becomes clear: we're catching both errors we defined, but Swift also wants us to define a generic catch all to handle any other errors that might occur. We don't tell Swift what kind of error our encryption method might throw, just that it throws something, so this extra catch-all block is required.

This does have one downside: if you add any future values to the enum, which we're about to do, it will just drop into the default `catch` block – you won't be asked to provide any code for it as would happen with a `switch/case` block.

We're going to add a new value to our enum now, to detect obvious passwords. But we're going to use Swift's super-powerful enums so that we can return a message along with the error type. So, modify the `EncryptionError` enum to this:

```swift
enum EncryptionError: Error {
    case empty
    case short
    case obvious(String)
}
```

Now when you want to throw an error of type `EncryptionError.obvious` you must provide a reason.

```swift
guard password != "12345" else { throw EncryptionError.obvious("I've got the same passcode on my luggage!") }
```

Obviously you don't want to provide hundreds (or thousands!) of `guard` statements to filter out obvious passwords, but hopefully you remember [how to use UITextChecker](https://hackingwithswift.com/read/5/5/returning-values-contains) to do spell checking – that would be a smart thing here!
<!-- TODO: 작성 (/explore/articles/hackingwithswift.com/read/5/returning-values-contains.md) -->

That's our basic `do/try/throw/catch` Swift example complete. You might look at the `try` statement and think it useless, but it's primarily there to signal to developers "this call might fail." This matters: when a `try` calls fails, execution immediately jumps to the `catch` blocks, so if you see `try` before a call it signals that the code beneath it might not get called.

There's one more thing to discuss, which is what to do if you know a call simply can't fail, for whatever reason. Now, clearly this is a decision you need to make on a case-by-case basic, but if you know there's absolutely no way a method call might fail, or if it did fail then your code was so fundamentally broken that you might as well crash, you can use `try!` to signal this to Swift.

When you use the `try!` keyword, you don't need to have `do` and `catch` around your code, because you're promising it won't ever fail. Instead, you can just write this:

```swift
let encrypted = try! encrypt("secret information!", withPassword: "12345")
print(encrypted)
```

Using the `try!` keyword communicates your intent clearly: you're aware there's the theoretical possibility of the call failing, but you're certain it won't happen in your use case. For example, if you're trying to load the contents of a file in your app's bundle, any failure effectively means your app bundle is damaged or unavailable, so you should terminate.

That's all for error handling in Swift. If you'd like to learn about how Swift handles `try/finally` you should [read my article on Swift's defer keyword](/explore/articles/hackingwithswift.com/new-syntax-swift-2-defer.md).

---

<TagLinks />