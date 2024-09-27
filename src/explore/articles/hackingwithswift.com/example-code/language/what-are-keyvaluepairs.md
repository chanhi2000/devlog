---
lang: ko-KR
title: "What are KeyValuePairs?"
description: "Article(s) > What are KeyValuePairs?"
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
      content: "Article(s) > What are KeyValuePairs?"
    - property: og:description
      content: "What are KeyValuePairs?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-keyvaluepairs.html
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
  "title": "What are KeyValuePairs? | Language - free Swift example code",
  "desc": "What are KeyValuePairs?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-keyvaluepairs",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
`KeyValuePairs`, somewhat confusingly known as `DictionaryLiteral` before Swift 5.0, is a useful data type that provides dictionary-like functionality with a handful of benefits:

- Your keys don’t need to conform to `Hashable`.
<li>You can add items with duplicate keys.
<li>The order in which you add items is preserved.

However, because `KeyValuePairs` doesn’t require its keys to be hashable, you don’t get the fast key look up of a regular dictionary – it’s O(*n*) rather than O(1) if you like Big O notation. Instead, you access them like an array, using numerical indexes.

As an example, here’s a `KeyValuePairs` instance holding the name of a singer:

```swift
let singer: KeyValuePairs = ["firstName": "Taylor", "lastName": "Swift"]
```

If we wanted to access the key name and value for the first item, we’d write something like this:

```swift
print("\(singer[0].key) is set to \(singer[0].value)")
```

Even better, because `KeyValuePairs` inherits from the `Sequence` protocol we can loop over all keys and values, like this:

```swift
for value in singer {
    print("\(value.key) is set to \(value.value)")
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-a-tuple">What is a tuple? 
/example-code/language/what-are-sets">What are sets? 
/example-code/language/what-are-static-methods-and-variables">What are static methods and variables? 
/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence? 
/example-code/language/how-to-make-optional-protocol-methods">How to make optional protocol methods</a>
-->

:::

---

<TagLinks />