---
lang: ko-KR
title: "The guard keyword in Swift: early returns made easy"
description: "The guard keyword in Swift: early returns made easy"
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
      content: "The guard keyword in Swift: early returns made easy"
    - property: og:description
      content: "The guard keyword in Swift: early returns made easy"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/new-syntax-swift-2-guard.html
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
  "title": "The guard keyword in Swift: early returns made easy – Hacking with Swift",
  "desc": "The guard keyword in Swift: early returns made easy",
  "link": "https://hackingwithswift.com/new-syntax-swift-2-guard",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift's `guard` keyword lets us check an optional exists and exit the current scope if it doesn't, which makes it perfect for early returns in methods.

---

## How it used to be: pyramids of doom

When a method runs, you want to be sure that it has all the data it needs to work properly, and your code should only execute when that's the case. Coders solved that in common two ways: pyramids of doom and early returns. The former looks like this:

```swift
if firstName != "" {
    if lastName != "" {
        if address != "" {
            // do great code
        }
    }
}
```

It's called a pyramid of doom because of the natural shape of the code as it piles up with more and more indenting.

The latter looks like this:

```swift
if firstName == "" { return }
if lastName == "" { return }
if address == "" { return }
// do great code
```

This technique is called "early return" because you return from the method as early as possible, meaning that if you remain in the method it means everything is safe.

Neither of these two solutions are attractive. The first solution is messy, and only gets worse as you check more things. By the time you get to the meat of your method, you might be ten levels deep in checks, which is nasty!

The second solution isn't very descriptive, in that it doesn't make clear *why* we are we returning. It also checks against the opposite of what we care about: we're looking for a valid first name, so checking for an empty string is reversed.

In Swift, early returns have another problem, which is in the way they handle optionals. As you might imagine, one of the most important checks in Swift lies in safely unwrapping optionals, but if you use a straight `if/let` in your early return, the unwrapped optional will leave scope almost immediately, and you can't use it. You either re-unwrap it, or you force unwrap now that you know it exists. Both are grim.

---

## Introducing Swift's guard statement

There's a Swift keyword called `guard`, and enables improved early returns in three ways:

- It makes your intent clearer: you tell `guard` what you want to be the case rather than the reverse. `guard` is used specifically for trapping invalid parameters being passed to a method, so everyone will understand what it does when they see it.
- Any optional variables unwrapped by `guard` remain in scope after the `guard` finishes, so you can use them. This means you can check an optional variable is valid by unwrapping it, then use it straight away.
- It gives you shorter code, which in turn means fewer bugs and happier developers.

Any conditions you would have checked using `if` before, you can now check using `guard`. Here are some examples:

```swift
guard name.characters.count > 0 else {
    throw InputError.NameIsEmpty
}

guard age > 18 else {
    return false
}

guard #available(iOS 9, *) else {
    return
}

func printName() {
    guard let unwrappedName = name else {
        print("You need to provide a name.")
        return
    }

    print(unwrappedName)
}
```

That last example shows how unwrapped optionals remain in scope – a key advantage of `guard` compared to regular early returns.

---

<TagLinks />