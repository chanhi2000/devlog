---
lang: ko-KR
title: Creating uninitialized arrays
description: Article(s) > Creating uninitialized arrays
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
      content: Article(s) > Creating uninitialized arrays
    - property: og:description
      content: Creating uninitialized arrays
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.html
next: /explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md
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
  "title": "Creating uninitialized arrays | Changes in Swift 5.1",
  "desc": "Creating uninitialized arrays",
  "link": "https://hackingwithswift.com/swift/5.1/creating-uninitialized-arrays", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.1

[SE-0245 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0245-array-uninitialized-initializer.md) introduced a new initializer for arrays that doesn’t pre-fill values with a default. This was previously available as a private API, which meant Xcode wouldn’t list it in its code completion but you could still use it if you wanted – and if you were happy to take the risk that it wouldn’t be withdrawn in the future!

To use the initializer, tell it the capacity you want, then provide a closure to fill in the values however you need. Your closure will be given an unsafe mutable buffer pointer where you can write your values, as well as an `inout` second parameter that lets you report back how many values you actually used.

For example, we could make an array of 10 random integers like this:

```swift
let randomNumbers = Array<Int>(unsafeUninitializedCapacity: 10) { buffer, initializedCount in
    for x in 0..<10 {
        buffer[x] = Int.random(in: 0...10)
    }

    initializedCount = 10
}
```

There are some rules here:

1. You don’t need to use all the capacity you ask for, but you can’t go *over* capacity. So, if you ask for a capacity of 10 you can set `initializedCount` to 0 through 10, but not 11.
2. If you don’t initialize elements that end up being in your array – for example if you set `initializedCount` to 5 but don’t actually provide values for elements 0 through 4 – then they are likely to be filled with random data. This is A Bad Idea.
3. If you don’t set `initializedCount` it will be 0, so any data you assigned will be lost.

Now, we *could* have rewritten the above code using `map()`, like this:

```swift
let randomNumbers2 = (0...9).map { _ in Int.random(in: 0...10) }
```

That’s certainly easier to read, but it’s less efficient: it creates a range, creates a new empty array, sizes it up to the correct amount, loops over the range, and calls the closure once for each range item.

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

```component VPCard
{
  "title": "Warnings for ambiguous none cases | Changes in Swift 5.1",
  "desc": "Warnings for ambiguous none cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
<!-- 
```component VPCard
{
  "title": "Creating uninitialized arrays | Changes in Swift 5.1",
  "desc": "Creating uninitialized arrays",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip)

:::

---

<TagLinks />