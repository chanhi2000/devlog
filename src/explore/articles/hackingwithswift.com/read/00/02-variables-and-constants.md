---
lang: ko-KR
title: "Variables and constants"
description: "Article(s) > Variables and constants"
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
      content: "Article(s) > Variables and constants"
    - property: og:description
      content: "Variables and constants"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/02-variables-and-constants.html
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
  "title": "Variables and constants | Hacking with iOS",
  "desc": "Variables and constants",
  "link": "https://hackingwithswift.com/read/0/2/variables-and-constants",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/NbthZRnz1C4" />

Every useful program needs to store data at some point, and in Swift there are two ways to do it: variables and constants. A variable is a data store that can have its value changed whenever you want, and a constant is a data store that you set once and can never change. So, variables have values that can vary, and constants have values that are constant – easy, right?

Having both these options might seem pointless, after all you could just create a variable then never change it – why does it need to be made a constant? Well, it turns out that many programmers are – shock! – less than perfect at programming, and we make mistakes.

One of the advantages of separating constants and variables is that Xcode will tell us if we’ve made a mistake. If we say, "make this date a constant, because I know it will never change" then 10 lines later try to change it, Xcode will refuse to build our app.

Constants are also important because they let Xcode make decisions about the way it builds your app. If it knows a value will never change, it is able to apply optimizations to make your code run faster.

In Swift, you make a variable using the `var` keyword, like this:

```swift
var name = "Tim McGraw"
```

Let’s put that into a playground so you can start getting feedback. Delete everything in there apart from the `import UIKit` line (that's the bit that pulls in Apple's core iOS framework and it's needed later on), and add that variable.

Because this is a variable, you can change it whenever you want, but you shouldn't use the `var` keyword each time – that's only used when you're declaring new variables. Try writing this:

```swift
var name = "Tim McGraw"
name = "Romeo"
```

So, the first line creates the `name` variable and gives it an initial value, then the second line updates the `name` variable so that its value is now "Romeo". You'll see both values printed in the results area of the playground.

![Playground showing “Tim McGraw” and “Romeo” printed out.](https://hackingwithswift.com/img/books/hws/variables-and-constants-1@2x.png)

Now, what if we had made that a constant rather than a variable? Well, constants use the `let` keyword rather than `var`, so you can change your first line of code to say `let name` rather than `var name` like this:

```swift
import UIKit
let name = "Tim McGraw"
name = "Romeo"
```

But now there's a problem: Xcode will show a red warning next to line three, and it should have drawn a red underline underneath your code. Xcode’s message is “Cannot assign to value: 'name' is a 'let' constant”, which is Xcode-speak for "you're trying to change a constant and you can't do that."

![Playground showing error on line 3.](https://hackingwithswift.com/img/books/hws/variables-and-constants-2@2x.png)

So, constants are a great way to make a promise to Swift and to yourself that a value won't change, because if you do try to change it Xcode will refuse to run. Swift developers have a strong preference to use constants wherever possible because it makes your code easier to understand. In fact, Xcode will actually tell you if you make something a variable then never change it!

::: important

variable and constant names must be unique in your code. You'll get an error if you try to use the same variable name twice, like this:

```swift
var name = "Tim McGraw"
var name = "Romeo"
```

:::

If the playground finds an error in your code, it will either flag up a warning in a red box, or will just refuse to run. You'll know if the latter has happened because the text in the results pane has gone gray rather than its usual black.

![Playground showing error on line 3 due to an invalid redeclaration of 'name'.](https://hackingwithswift.com/img/books/hws/variables-and-constants-3@2x.png)

---

<TagLinks />