---
lang: ko-KR
title: Improved keypaths for key-value coding
description: Article(s) > Improved keypaths for key-value coding
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Improved keypaths for key-value coding
    - property: og:description
      content: Improved keypaths for key-value coding
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.0/keypaths.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Improved keypaths for key-value coding | Changes in Swift 4.0",
  "desc": "Improved keypaths for key-value coding",
  "link": "https://hackingwithswift.com/swift/4.0/keypaths", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.0

One of the most loved features of Objective-C is its ability to reference a property dynamically rather than directly – that is, to be able to say "given object X, here is the property I'd like to read" without actually reading it. These references, called *keypaths*, are distinct from direct property accesses because they don't actually read or write the value, they just stash it away for use later on.

If you've never used keypaths before, let me show you an analogy of how they work using regular Swift methods. We're going to define a struct called `Starship` and a struct called `Crew`, then create one instance of each:

```swift
// an example struct
struct Crew {
    var name: String
    var rank: String
}

// another example struct, this time with a method
struct Starship {
    var name: String
    var maxWarp: Double
    var captain: Crew

    func goToMaximumWarp() {
        print("\(name) is now travelling at warp \(maxWarp)")
    }
}

// create instances of those two structs
let janeway = Crew(name: "Kathryn Janeway", rank: "Captain")
let voyager = Starship(name: "Voyager", maxWarp: 9.975, captain: janeway)

// grab a reference to the `goToMaximumWarp()` method
let enterWarp = voyager.goToMaximumWarp

// call that reference
enterWarp()
```

Because functions are first-class types in Swift, the last two lines are able to create a reference to the `goToMaximumWarp()` method called `enterWarp`, then call that later on whenever we want to. The problem is, you can't do the same thing for properties – you can't say "create a reference to the captain's name property that I can check when the inevitable mutiny happens," because Swift will just read the property directly and you'll just get its original value.

This is fixed with keypaths: they are *uninvoked references to properties* just like our `enterWarp()` code. If you invoke the reference now you get the current value, but if you invoke the reference later you get the latest value. You can dig through any number of properties, and Swift uses its type inference to ensure you get the correct type back.

The Swift Evolution community spent quite a while discussing the correct syntax for keypaths because it needed to be something visually different from other Swift code, and the syntax they ended up with uses backslashes: `\Starship.name`, `\Starship.maxWarp`, and `\Starship.captain.name`. You can assign those two to a variable then use them whenever you want, on any `Starship` instance. For example:

```swift
let nameKeyPath = \Starship.name
let maxWarpKeyPath = \Starship.maxWarp
let captainName = \Starship.captain.name

let starshipName = voyager[keyPath: nameKeyPath]
let starshipMaxWarp = voyager[keyPath: maxWarpKeyPath]
let starshipCaptain = voyager[keyPath: captainName]
```

That will make `starshipName` a string and `starshipMaxWarp` a double, because Swift is able to infer the types correctly. The third example there even goes into the property of a property, and Swift still figures it out correctly.

Future plans for this include being able to access array indexes and to create keypaths from strings at runtime – for more information see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0161-key-paths.md).

::: details Other Changes in Swift 4.0

```component VPCard
{
  "title": "Encoding and decoding data using Codable | Changes in Swift 4.0",
  "desc": "Encoding and decoding data using Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/codable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Multi-line string literals | Changes in Swift 4.0",
  "desc": "Multi-line string literals",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/multiline-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Improved keypaths for key-value coding | Changes in Swift 4.0",
  "desc": "Improved keypaths for key-value coding",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/keypaths.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Improved dictionary functionality | Changes in Swift 4.0",
  "desc": "Improved dictionary functionality",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/dictionaries.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Strings are collections again | Changes in Swift 4.0",
  "desc": "Strings are collections again",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "One-sided ranges | Changes in Swift 4.0",
  "desc": "One-sided ranges",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-3-1-to-4-0.playground.zip)

:::

---

<TagLinks />