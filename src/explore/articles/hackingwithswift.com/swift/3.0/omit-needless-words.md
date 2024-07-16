---
lang: ko-KR
title: Omit needless words
description: Article(s) > Omit needless words
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-3.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Omit needless words
    - property: og:description
      content: Omit needless words
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.html
isOriginal: false
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
  "title": "Omit needless words | Changes in Swift 3.0",
  "desc": "Omit needless words",
  "link": "https://hackingwithswift.com/swift/3.0/omit-needless-words", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.0

When Swift went open source in December 2015, its shiny new API guideliness contained three fateful words: "omit needless words." This introduced another huge raft of breaking changes in Swift 3, because it means that method names that contain self-evident words now have those words removed.

Let's look at some simple examples first. First, Swift 2.2:

```swift
let blue = UIColor.blueColor()
let min = numbers.minElement()
attributedString.appendAttributedString(anotherString)
names.insert("Jane", atIndex: 0)
UIDevice.currentDevice()
```

Can you identify the needless words? When you're working with `UIColor`, of course blue is going to be a color, so saying `blueColor()` is needless. When you append one attributed string to another, do you really need to specify that it's an attributed string you're appending as opposed to an elephant? And why should it be a method – surely a color should be a property!

Here is that same code in Swift 3:

```swift
let blue = UIColor.blue
let min = numbers.min()
attributedString.append(anotherString)
names.insert("Jane", at: 0)
UIDevice.current
```

As you can see, this makes method names significantly shorter!

This change has particularly affected strings, which had repetition all over the place. The best way to demonstrate this is to show before and after code side-by-side, so in the code below the first line of each pair is Swift 2.2 and the second is Swift 3.0:

```swift
"  Hello  ".stringByTrimmingCharactersInSet(.whitespaceAndNewlineCharacterSet())
"  Hello  ".trimmingCharacters(in: .whitespacesAndNewlines)

"Taylor".containsString("ayl")
"Taylor".contains("ayl")

"1,2,3,4,5".componentsSeparatedByString(",")
"1,2,3,4,5".components(separatedBy: ",")

myPath.stringByAppendingPathComponent("file.txt")
myPath.appendingPathComponent("file.txt")

"Hello, world".stringByReplacingOccurrencesOfString("Hello", withString: "Goodbye")
"Hello, world".replacingOccurrences(of: "Hello", with: "Goodbye")

"Hello, world".substringFromIndex(7)
"Hello, world".substring(from: 7)

"Hello, world".capitalizedString
"Hello, world".capitalized
```

::: warning

`capitalized` is still a property, but `lowercaseString` and `uppercaseString` have been transmogrified into the methods `lowercased()` and `uppercased()`.

:::

I've chosen the examples so far because the jump to Swift 3 isn't vast, but there are quite a few changes that were significant enough to make my brain hit a speedbump – usually when the resulting method is so short that it wasn't immediately obvious what it was.

For example, look at this code:

```swift
dismiss(animated: true, completion: nil)
```

When I first saw that, I blanked: "dismiss what?" That's partly a result of the [<FontIcon icon="fa-brands fa-wikipedia-w"/>Stockholm syndrome](https://en.wikipedia.org/wiki/Stockholm_syndrome) that's inevitable having programmed for iOS for so long, but once you learn to reverse the parameter label change and re-add the needless words, you can see it's equivalent to this code in Swift 2.2:

```swift
dismissViewControllerAnimated(true, completion: nil)
```

In fact, the `completion: nil` part is optional now, so you could even write this:

```swift
dismiss(animated: true)
```

A similar change happened to `prepareForSegue()`, which now looks like this:

```swift
override func prepare(for segue: UIStoryboardSegue, sender: AnyObject?)
```

::: details Changes in Swift 3.0

```component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift 3.0",
  "desc": "All function parameters have labels unless you request otherwise",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Omit needless words | Changes in Swift 3.0",
  "desc": "Omit needless words",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties | Changes in Swift 3.0",
  "desc": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Swifty importing of C functions | Changes in Swift 3.0",
  "desc": "Swifty importing of C functions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/c-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Verbs and nouns | Changes in Swift 3.0",
  "desc": "Verbs and nouns",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-2-to-3-0.playground.zip)

:::

---

<TagLinks />