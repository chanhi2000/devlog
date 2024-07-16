---
lang: ko-KR
title: Checking API availability
description: Article(s) > Checking API availability
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-2.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Checking API availability
    - property: og:description
      content: Checking API availability
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.0/api-availability.html
isOriginal: false
next: /explore/articles/hackingwithswift.com/swift/1.2/zip.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Checking API availability | Changes in Swift 2.0",
  "desc": "Checking API availability",
  "link": "https://hackingwithswift.com/swift/2.0/api-availability", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.0

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

::: details Other changes in Swift 2.0…

```component VPCard
{
  "title": "Throwing errors | Changes in Swift 2.0",
  "desc": "Throwing errors",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/try.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Measure strings using their character count | Changes in Swift 2.0",
  "desc": "Measure strings using their character count",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",
  "desc": "Use the defer keyword to delay work until your scope exits",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/defer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Mutability warnings | Changes in Swift 2.0",
  "desc": "Mutability warnings",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/mutability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Checking API availability | Changes in Swift 2.0",
  "desc": "Checking API availability",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/api-availability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 2.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-1-2-to-2-0.playground.zip)

:::

---

<TagLinks />