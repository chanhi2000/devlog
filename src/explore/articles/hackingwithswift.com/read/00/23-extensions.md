---
lang: ko-KR
title: "Extensions"
description: "Article(s) > Extensions"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Extensions"
    - property: og:description
      content: "Extensions"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/23-extensions.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Extensions | Hacking with iOS",
  "desc": "Extensions",
  "link": "https://hackingwithswift.com/read/0/23/extensions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

Extensions let us modify Swift’s data types to add new functionality, and so on in a really clean way – our new code is indistinguishable from existing code.

Let's start with an extension that adds one to an integer. Yes, I realize this is essentially just `+= 1`, but we're starting simple. First, add this integer:

```swift
var myInt = 0
```

Now add this to the playground, just beneath the `import UIKit` statement:

```swift
extension Int {
    func plusOne() -> Int {
        return self + 1
    }
}
```

::: tip

As that method contains only a single line of code that must return a value, you can remove the `return` keyword entirely.

:::

`extension Int` tells Swift that we want to add functionality to its `Int` struct. We could have used `String`, `Array`, or whatever instead, but `Int` is a nice easy one to start.

How the extension works will become clear once you use it. Put this line just below the end of the extension:

```swift
myInt.plusOne()
```

![Calling `plusOne` creates the Integer 1.](https://hackingwithswift.com/img/books/hws/extensions-1@2x.png)

In the playground output you'll now see 0 for the first line and 1 for the second, so calling `plusOne()` has returned a number one higher than the number we called it on.

The extension has been added to all integers, so you can even call it like this:

```swift
5.plusOne()
```

When you do that, you'll see 6 in the output column.

Our extension adds 1 to its input number and returns it to the caller, but *doesn't* modify the original value. Try typing this:

```swift
var myInt = 10
myInt.plusOne()
myInt
```

Using a variable by itself tells the playground just to output its value, so in the output column you'll see 10, then 11, then 10 again. This is the original value, the return from the `plusOne()` method, and the original, unchanged value.

To push things a little further, let's modify the `plusOne()` method so that it doesn't return anything, instead modifying the instance itself – i.e., the input integer.

To make that happen, you might think we need to do something like this:

```swift
extension Int {
    func plusOne() {
        self += 1
    }
}
```

That removes the return value because we aren't returning anything now, and it uses the `+=` operator to add one to `self`. But this won't work, and in fact Xcode will give you a wonderfully indecipherable error message: "Left side of mutating operator isn't mutable: 'self' is immutable"

What Xcode really means is that it Swift doesn't let you modify `self` inside an extension by default. The reason is that we could call `plusOne()` using `5.plusOne()`, and clearly you can't modify the number 5 to mean something else.

So, Swift forces you to declare the method `mutating`, meaning that it will change its input. Change your extension to this:

```swift
extension Int {
    mutating func plusOne() {
        self += 1
    }
}
```

…and now the error message will go away. Once you have declared a method as being `mutating`, Swift knows it will change values so it won't let you use it with constants. For example:

```swift
var myInt = 10
myInt.plusOne()

let otherInt = 10
otherInt.plusOne()
```

The first integer will be modified correctly, but the second will fail because Swift won't let you modify constants.

It's extremely common for developers to use extensions to add functionality to things. In some ways, extensions are similar to subclasses, so why use extensions at all?

The main reason is extensibility: extensions work across all data types, and they don't conflict when you have more than one. That is, we could make a `Dog` subclass that adds `bark()`, but what if we find some open source code that contains a `doTricks()` method? We would have to copy and paste it in to our subclass, or perhaps even subclass again.

With extensions you can have ten different pieces of functionality in ten different files – they can all modify the same type directly, and you don't need to subclass anything. A common naming scheme for naming your extension files is <FontIcon icon="fa-brands fa-swift"/>`Type+Modifier.swift`, for example <FontIcon icon="fa-brands fa-swift"/>`String+RandomLetter.swift`.

If you find yourself trimming whitespace off strings frequently, you'll probably get tired of using this monstrosity:

```swift
str = str.trimmingCharacters(in: .whitespacesAndNewlines)
```

…so why not just make an extension like this:

```swift
extension String {
    mutating func trim() {
        self = trimmingCharacters(in: .whitespacesAndNewlines)
    }
}
```

![Using `trim` removes surrounding whitespace from a String.](https://hackingwithswift.com/img/books/hws/extensions-2@2x.png)

You can extend as much as you want, although it's good practice to keep differing functionality separated into individual files.

---

<TagLinks />