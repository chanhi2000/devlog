---
lang: ko-KR
title: "How to sort the keys of your JSON using Codable"
description: "Article(s) > How to sort the keys of your JSON using Codable"
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
      content: "Article(s) > How to sort the keys of your JSON using Codable"
    - property: og:description
      content: "How to sort the keys of your JSON using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-sort-the-keys-of-your-json-using-codable.html
date: 2022-03-12
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
  "title": "How to sort the keys of your JSON using Codable | Language - free Swift example code",
  "desc": "How to sort the keys of your JSON using Codable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-sort-the-keys-of-your-json-using-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When you use `JSONEncoder` and `Codable` to create JSON from your Swift data, your properties are not guaranteed to be written out in any particular order. This is usually fine, because relying on key ordering in your JSON is almost certainly a bad idea. However, if you’re debugging a large type and it’s hard to dig through keys to find what you want, `JSONEncoder` has the perfect option for you: you can sort your JSON keys alphabetically.

To make it happen, change the `outputFormatting` property of your `JSONEncoder` object to be `.sortedKeys`, like this:

```swift
let encoder = JSONEncoder()
encoder.outputFormatting = .sortedKeys
```

Now any JSON you produce will use alphabetical order for your keys, based on the names of each of your properties.

-->

::: details Similar solutions…

<!--
/example-code/arrays/how-to-sort-an-array-using-sort">How to sort an array using sort() 
/example-code/language/how-to-specify-default-values-for-dictionary-keys">How to specify default values for dictionary keys 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way 
/example-code/language/how-to-reverse-sort-an-array">How to reverse sort an array</a>
-->

:::

---

<TagLinks />