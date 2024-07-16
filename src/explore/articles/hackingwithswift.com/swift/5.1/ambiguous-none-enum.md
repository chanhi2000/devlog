---
lang: ko-KR
title: Warnings for ambiguous none cases
description: Article(s) > Warnings for ambiguous none cases
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > Warnings for ambiguous none cases
    - property: og:description
      content: Warnings for ambiguous none cases
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.1/ambiguous-none-enum.html
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
  "title": "Warnings for ambiguous none cases | Changes in Swift 5.1",
  "desc": "Warnings for ambiguous none cases",
  "link": "https://hackingwithswift.com/swift/5.1/ambiguous-none-enum", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.1

Swift’s optionals are implemented as an enum of two cases: `some` and `none`. This gave rise to the possibility of confusion if we created our own enums that had a `none` case, then wrapped that inside an optional.

For example:

```swift
enum BorderStyle {
    case none
    case solid(thickness: Int)
}
```

Used as a non-optional this was always clear:

```swift
let border1: BorderStyle = .none
print(border1)
```

That will print “none”. But if we used an optional for that enum – if we didn’t know what border style to use – then we’d hit problems:

```swift
let border2: BorderStyle? = .none
print(border2)
```

That prints “nil”, because Swift assumes `.none` means the optional is empty, rather than an optional with the value `BorderStyle.none`.

In Swift 5.1 this confusion now prints a warning: “Assuming you mean 'Optional.none'; did you mean 'BorderStyle.none' instead?” This avoids the source compatibility breakage of an error, but at least informs developers that their code might not quite mean what they thought.

::: details Other Changes in Swift 5.1

```component VPCard
{
  "title": "Improvements to synthesized memberwise initializers | Changes in Swift 5.1",
  "desc": "Improvements to synthesized memberwise initializers",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Implicit returns from single-expression functions | Changes in Swift 5.1",
  "desc": "Implicit returns from single-expression functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/implicit-returns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Universal Self | Changes in Swift 5.1",
  "desc": "Universal Self",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/universal-self.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opaque return types | Changes in Swift 5.1",
  "desc": "Opaque return types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/opaque-return-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Static and class subscripts | Changes in Swift 5.1",
  "desc": "Static and class subscripts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/static-subscripts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Warnings for ambiguous none cases | Changes in Swift 5.1",
  "desc": "Warnings for ambiguous none cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Matching optional enums against non-optionals | Changes in Swift 5.1",
  "desc": "Matching optional enums against non-optionals",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/matching-optional-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Ordered collection diffing | Changes in Swift 5.1",
  "desc": "Ordered collection diffing",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Creating uninitialized arrays | Changes in Swift 5.1",
  "desc": "Creating uninitialized arrays",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip)

:::

---

<TagLinks />