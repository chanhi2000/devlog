---
lang: ko-KR
title: Verbs and nouns
description: Article(s) > Verbs and nouns
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
      content: Article(s) > Verbs and nouns
    - property: og:description
      content: Verbs and nouns
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.html
next: /explore/articles/hackingwithswift.com/swift/2.2/increment-decrement.md
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
  "title": "Verbs and nouns | Changes in Swift 3.0",
  "desc": "Verbs and nouns",
  "link": "https://hackingwithswift.com/swift/3.0/verbs-and-nouns", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.0

This is the part where some people will start to drift off in confusion, which is a shame because it's important.

Here's are some quotes from the Swift API guidelines:

- "When the operation is naturally described by a verb, use the verb’s imperative for the mutating method and apply the “ed” or “ing” suffix to name its nonmutating counterpart"
- "Prefer to name the nonmutating variant using the verb’s past participle"
- "When adding “ed” is not grammatical because the verb has a direct object, name the nonmutating variant using the verb’s present participle"
- "When the operation is naturally described by a noun, use the noun for the nonmutating method and apply the “form” prefix to name its mutating counterpart"

Got that? It's no surprise that Swift's rules are expressed using lingustic terminology – it is after all a language! – but this at least gives me a chance to feel smug that I did a second degree in English. What it means is that many methods are changing names in subtle and sometimes confusing ways.

Let's start with a couple of simple examples:

```swift
myArray.enumerate()
myArray.enumerated()

myArray.reverse()
myArray.reversed()
```

Each time Swift 3 modifies the method by adding a "d" to the end: this is a value that's being returned.

These rules are mostly innocent enough, but it causes confusion when it comes to array sorting. Swift 2.2 used `sort()` to return a sorted array, and `sortInPlace()` to sort an array in place. In Swift 3.0, `sort()` is renamed to `sorted()` (following the examples above), and `sortInPlace()` is renamed to `sort()`.

::: info TL;DR

This means you need to be careful because in Swift 2.2 `sort()` returned a sorted array, but in Swift 3.0 `sort()` sorts the array in place.

:::

::: details Other Changes in Swift 3.0

```component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift ",
  "desc": "All function parameters have labels unless you request otherwise",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Omit needless words | Changes in Swift ",
  "desc": "Omit needless words",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties | Changes in Swift ",
  "desc": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Swifty importing of C functions | Changes in Swift ",
  "desc": "Swifty importing of C functions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/c-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Verbs and nouns | Changes in Swift ",
  "desc": "Verbs and nouns",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-2-to-3-0.playground.zip)

:::

---

<TagLinks />