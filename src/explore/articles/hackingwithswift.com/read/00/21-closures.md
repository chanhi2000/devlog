---
lang: ko-KR
title: "Closures"
description: "Article(s) > Closures"
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
      content: "Article(s) > Closures"
    - property: og:description
      content: "Closures"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/21-closures.html
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
  "title": "Closures | Hacking with iOS",
  "desc": "Closures",
  "link": "https://hackingwithswift.com/read/0/21/closures",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/1P0yQ72g6Bk" />

You've met integers, strings, doubles, floats, Booleans, arrays, dictionaries, structs and classes so far, but there's another type of data that is used extensively in Swift, and it's called a closure. These are complicated, but they are so powerful and expressive that they are used pervasively in Swift, so you won't get very far without understanding them.

A closure can be thought of as a variable that holds code. So, where an integer holds "0" or "500", a closure holds lines of Swift code. Closures also capture the environment where they are created, which means they take a copy of the values that are used inside them.

You never *need* to design your own closures so don't be afraid if you find the following quite complicated. However, Apple’s frameworks will often ask you to write closures to match their needs, so you at least need to know how they work.

Here’s an example from SwiftUI:

```swift
let message = "Button pressed"

Button("Press Me", action: {
    print(message)
})
```

`Button` is one of the many user interface controls we have in SwiftUI, and provides something that user can press on to execute some sort of action. 

In this code, creating a button takes two parameters: some text to show as the button’s title, and a closure containing the code to be executed when the button is pressed. I've specified “Press Me” for the first parameter, and for the second I've made the system print a message string.

This method needs to use a closure because SwiftUI won’t run the code until the button is pressed – it will stash the action code away for later on, then call it only when needed. This wouldn't be possible if we just ran our code directly.

The above code also shows how closures capture their environment: I intentionally declared the `message` constant outside of the closure, then used it inside. Swift detects this, and makes that data available inside the closure too.

Swift's system of automatically capturing a closure's environment is very helpful, but can occasionally trip you up: if object A stores a closure as a property, and that property also references object A, you have something called a retain cycle and you'll have unhappy users. This is a substantially more advanced topic than you need to know right now, so don't worry too much about it just yet.

---

## Trailing closures

As closures are used so frequently, Swift can apply a little syntactic sugar to make your code easier to read. The rule is this: if the last parameters to a method are closures, you can eliminate those parameters and instead provide them as a block of code inside braces. For example, we could convert the previous code to this:

```swift
let message = "Button pressed"

Button("Press Me") {
    print(message)
}
```

It does make your code shorter and easier to read, so this syntax form – known as trailing closure syntax – is preferred.

A function can have multiple trailing closures if needed, and this is particularly common in SwiftUI. For example, one way to create a button is to provide code to run when it’s pressed as the first closure, then something custom to show inside the button on the screen, like this:

```swift
Button {
    print("The button was pressed")
} label: {
    Image("press-me")
}
```

That uses an image rather than a simple piece of text, but it could be any kind of SwiftUI user interface control.

---

<TagLinks />