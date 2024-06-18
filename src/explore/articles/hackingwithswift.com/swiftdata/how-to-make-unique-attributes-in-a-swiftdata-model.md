---
lang: ko-KR
title: How to make unique attributes in a SwiftData mode
description: Article(s) > How to make unique attributes in a SwiftData mode
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to make unique attributes in a SwiftData mode
    - property: og:description
      content: How to make unique attributes in a SwiftData mode
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-make-unique-attributes-in-a-swiftdata-model.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make unique attributes in a SwiftData mode | SwiftData by Example",
  "desc": "How to make unique attributes in a SwiftData mode",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-make-unique-attributes-in-a-swiftdata-model", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Use the `@Attribute(.unique)` macro to mark properties as being unique in your model, meaning that SwiftData will not allow more than one object with that value.

For example, we could create a model that ensures all credit card numbers must be unique:

```swift
@Model
class CreditCard {
    @Attribute(.unique) var number: Int
    var balance: Decimal

    init(number: Int, balance: Decimal) {
        self.number = number
        self.balance = balance
    }
```

This attribute has two important side effects that are not apparent from the code:

1. Unique attributes are not supported by CloudKit, and if you attempt to use them your model container will simply refuse to load.
2. If you create an object using a unique value, then attempt to create a *second* object using the same unique value, SwiftData will detect this and perform an upsert rather than an insert.

Upserts are SwiftData’s way of trying to honor your request for uniqueness, but also to ensure no data is lost: rather than trying to insert a duplicate value for the unique property, SwiftData instead locates the existing object with that unique property, and updates its other properties to match the values you attempted to insert.

So, using our credit card example the following might happen:

1. We create a new credit card using the number 1234.
2. We set the balance that to be $1000.
3. We create a second credit card using the number 1234.
4. We set the balance of that to be $0.

SwiftData will not allow us to have two credit cards with the same number, because we marked that attribute as unique, so instead when that code finishes we’ll have just one card with a balance of $0 – the most recent value.

---

<TagLinks />