---
lang: ko-KR
title: Ordered collection diffing
description: Article(s) > Ordered collection diffing
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
      content: Article(s) > Ordered collection diffing
    - property: og:description
      content: Ordered collection diffing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.1/ordered-collection-diffing.html
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
  "title": "Ordered collection diffing | Changes in Swift 5.1",
  "desc": "Ordered collection diffing",
  "link": "https://hackingwithswift.com/swift/5.1/ordered-collection-diffing", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.1

[SE-0240 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0240-ordered-collection-diffing.md) introduced the ability to calculate and apply the differences between ordered collections. This could prove particularly interesting for developers who have complex collections in table views, where they want to add and remove lots of items smoothly using animations.

The basic principle is straightforward: Swift 5.1 gives us a new `difference(from:)` method that calculates the differences between two ordered collections – what items to remove and what items to insert. This can be used with any ordered collection that contains `Equatable` elements.

To demonstrate this, we can create an array of scores, calculate the difference from one to the other, then loop over those differences and apply each one to make our two collections the same.

::: note

Because Swift now ships inside Apple’s operating systems, new features like this one must be used with an `#available` check to make sure the code is being run on an OS that includes the new functionality. For features that will land in an unknown, unannounced operating system shipping at some point in the future, a special version number of “9999” is used to mean “we don’t know what the actual number is just yet.”

:::

Here’s the code:

```swift
var scores1 = [100, 91, 95, 98, 100]
let scores2 = [100, 98, 95, 91, 100]

if #available(iOS 9999, *) {
    let diff = scores2.difference(from: scores1)

    for change in diff {
        switch change {
        case .remove(let offset, _, _):
            scores1.remove(at: offset)
        case .insert(let offset, let element, _):
            scores1.insert(element, at: offset)
        }
    }

    print(scores1)
}
```

For more advanced animations, you can use the third value of the changes: `associatedWith`. So, rather than using `.insert(let offset, let element, _)` above you might write `.insert(let offset, let element, let associatedWith)` instead. This lets you track pairs of changes at the same time: moving an item two places down in your collection is a removal then an insertion, but the `associatedWith` value ties those two changes together so you treat it as a move instead.

Rather than applying changes by hand, you can apply the whole collection using a new `applying()` method, like this:

```swift
if #available(iOS 9999, *) {
    let diff = scores2.difference(from: scores1)
    let result = scores1.applying(diff) ?? []
}
```

::: details Other Changes in Swift 5.1

```component VPCard
{
  "title": "Improvements to synthesized memberwise initializers | Changes in Swift 5.1",
  "desc": "Improvements to synthesized memberwise initializers",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Implicit returns from single-expression functions | Changes in Swift 5.1",
  "desc": "Implicit returns from single-expression functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/implicit-returns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Universal Self | Changes in Swift 5.1",
  "desc": "Universal Self",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/universal-self.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Opaque return types | Changes in Swift 5.1",
  "desc": "Opaque return types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/opaque-return-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Static and class subscripts | Changes in Swift 5.1",
  "desc": "Static and class subscripts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/static-subscripts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Warnings for ambiguous none cases | Changes in Swift 5.1",
  "desc": "Warnings for ambiguous none cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Matching optional enums against non-optionals | Changes in Swift 5.1",
  "desc": "Matching optional enums against non-optionals",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/matching-optional-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Ordered collection diffing | Changes in Swift 5.1",
  "desc": "Ordered collection diffing",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Creating uninitialized arrays | Changes in Swift 5.1",
  "desc": "Creating uninitialized arrays",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip)

:::

---

<TagLinks />