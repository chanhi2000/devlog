---
lang: ko-KR
title: "Conditional statements"
description: "Article(s) > Conditional statements"
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
      content: "Article(s) > Conditional statements"
    - property: og:description
      content: "Conditional statements"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/08-conditional-statements.html
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
  "title": "Conditional statements | Hacking with iOS",
  "desc": "Conditional statements",
  "link": "https://hackingwithswift.com/read/0/8/conditional-statements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/VjMZmqUrN_0" />

Sometimes you want code to execute only if a certain condition is true, and in Swift that is represented primarily by the `if` and `else` statements. You give Swift a condition to check, then a block of code to execute if that condition is true.

You can optionally also write `else` and provide a block of code to execute if the condition is false, or even `else if` and have more conditions. A "block" of code is just a chunk of code marked with an open brace – `{` – at its start and a close brace – `}` – at its end.

Here's a basic example:

```swift
var action: String
var person = "hater"

if person == "hater" {
    action = "hate"
}
```

![Using a condition to conditionally assign a value.](https://hackingwithswift.com/img/books/hws/conditional-statements-1@2x.png)

That uses the `==` (equality) operator introduced previously to check whether the string inside `person` is exactly equivalent to the string "hater". If it is, it sets the `action` variable to "hate". Note that open and close braces, also known by their less technical name of "curly brackets" – that marks the start and end of the code that will be executed if the condition is true.

Let's add `else if` and `else` blocks:


```swift
var action: String
var person = "hater"

if person == "hater" {
    action = "hate"
} else if person == "player" {
    action = "play"
} else {
    action = "cruise"
}
```

![A conditional with three branches. Only one is executed.](https://hackingwithswift.com/img/books/hws/conditional-statements-2@2x.png)

That will check each condition in order, and only one of the blocks will be executed: a person is either a hater, a player, or anything else.

---

## Evaluating multiple conditions

You can ask Swift to evaluate as many conditions as you want, but they all need to be true in order for Swift to execute the block of code. To check multiple conditions, use the `&&` operator – it means "and". For example:

```swift
var action: String
var stayOutTooLate = true
var nothingInBrain = true

if stayOutTooLate && nothingInBrain {
    action = "cruise"
}
```

![A conditional which checks if both conditions are true.](https://hackingwithswift.com/img/books/hws/conditional-statements-3@2x.png)

Because `stayOutTooLate` and `nothingInBrain` are both true, the whole condition is true, and `action` gets set to "cruise." Swift uses something called short-circuit evaluation to boost performance: if it is evaluating multiple things that all need to be true, and the first one is false, it doesn't even bother evaluating the rest.

---

## Looking for the opposite of truth

This might sound deeply philosophical, but actually this is important: sometimes you care whether a condition is not true, i.e. is false. You can do this with the `!` (not) operator that was introduced earlier. For example:

```swift
if !stayOutTooLate && !nothingInBrain {
    action = "cruise"
}
```

![A conditional which checks if both conditions are false.](https://hackingwithswift.com/img/books/hws/conditional-statements-4@2x.png)

This time, the `action` variable will only be set if both `stayOutTooLate` and `nothingInBrain` are false – the `!` has flipped them around.

---

<TagLinks />