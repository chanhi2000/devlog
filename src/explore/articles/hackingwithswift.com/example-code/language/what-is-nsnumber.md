---
lang: ko-KR
title: "What is NSNumber?"
description: "Article(s) > What is NSNumber?"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is NSNumber?"
    - property: og:description
      content: "What is NSNumber?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-nsnumber.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is NSNumber? | Language - free Swift example code",
  "desc": "What is NSNumber?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-nsnumber",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
`NSNumber` is an Objective-C class designed to store a variety of types of numbers. It was important in Objective-C because its primitive number types – integers, doubles, etc – could not be used in most of Apple’s APIs without wrapping them in an object such as `NSNumber`, but mostly Swift does a good job of automatically converting its numbers to `NSNumber` when you need it.

That being said, there are a few times when Swift won’t help you out, and you need to convert to `NSNumber` by hand. For example, this code is designed to convert numerical numbers like 50 into textual numbers like “fifty”, but it won’t compile:

```swift
let number = 50
let formatter = NumberFormatter()
formatter.numberStyle = .spellOut

// this line won't work
// let string1 = formatter.string(from: number) ?? ""
```

The problem is that the `string(from:)` method expects an `NSNumber` and Swift isn’t able to automatically bridge the integer we created in `number`. The fix here is nice and easy – just add `as NSNumber` to help Swift bridge the two worlds:

```swift
let string2 = formatter.string(from: number as NSNumber) ?? ""
```

-->

::: details Similar solutions…

<!--
/example-code/language/what-are-static-methods-and-variables">What are static methods and variables? 
/example-code/language/how-to-create-a-custom-optionset">How to create a custom OptionSet 
/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence? 
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct?</a>
-->

:::

---

<TagLinks />