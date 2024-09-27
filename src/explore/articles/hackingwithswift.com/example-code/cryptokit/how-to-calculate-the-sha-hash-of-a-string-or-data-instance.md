---
lang: ko-KR
title: "How to calculate the SHA hash of a String or Data instance"
description: "Article(s) > How to calculate the SHA hash of a String or Data instance"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to calculate the SHA hash of a String or Data instance"
    - property: og:description
      content: "How to calculate the SHA hash of a String or Data instance"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance.html
date: 2019-10-09
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CryptoKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/cryptokit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to calculate the SHA hash of a String or Data instance | CryptoKit - free Swift example code",
  "desc": "How to calculate the SHA hash of a String or Data instance",
  "link": "https://hackingwithswift.com/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
iOS 13 introduced a new framework called CryptoKit, which adds important cryptographic functionality such as encryption and hashing.

If you want to calculate the hash value of a string you need to convert it to an instance of `Data` like this:

```swift
let inputString = "Hello, world!"
let inputData = Data(inputString.utf8)
```

You then call the `hash(data:)` method of whichever kind of hash you want: SHA-256, SHA-384, or SHA-512. For example, if you wanted to calculate the SHA-256 hash of your data you’d use this:

```swift
let hashed = SHA256.hash(data: inputData)
```

Finally, you can print out the textual representation of the hash – what we’d considered the user-facing hash string itself – like this:

```swift
print(hashed.description)
```

Obviously if you have an instance of `Data` you want to hash, you can put that directly into `SHA256.hash(data:)`.

If you want to get the *string* of your hash, you should convert using the `String(format:)` initializer, like this:

```swift
let hashString = hashed.compactMap { String(format: "%02x", $0) }.joined()
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-create-hash-values-from-objects-using-hasher">How to create hash values from objects using Hasher 
/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect 
/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a>
-->

:::

---

<TagLinks />