---
lang: ko-KR
title: "How to unwrap an optional in Swift"
description: "Article(s) > How to unwrap an optional in Swift"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to unwrap an optional in Swift"
    - property: og:description
      content: "How to unwrap an optional in Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-unwrap-an-optional-in-swift.html
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
  "title": "How to unwrap an optional in Swift | Language - free Swift example code",
  "desc": "How to unwrap an optional in Swift",
  "link": "https://hackingwithswift.com/example-code/language/how-to-unwrap-an-optional-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Optional values are a central concept in Swift, although admittedly they can be a little hard to understand at first. Put simply, an optional value is one that may or may not exist, which means Swift won't let you use it by accident – you need to either check whether it has a value and unwrap it, or force unwrap. Of the two options the first is definitely preferable, because it's significantly safer.

To check whether an optional has a value then unwrap it all in one, you should use `if let` syntax, like this:

```swift
// fetch an example optional string
let optionalString = fetchOptionalString()

// now unwrap it
if let unwrapped = optionalString {
    print(unwrapped)
}
```

In that example, the `print(unwrapped)` line will only be executed if `optionalString` has a value. If that line is reached, you can know for sure that `unwrapped` has a value that you can use, which makes that code safe.

-->

::: details Similar solutions…

<!--
/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference? 
/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals? 
/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap">How to check and unwrap optionals in tests using XCTUnwrap() 
/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift? 
/example-code/language/what-is-optional-chaining">What is optional chaining?</a>
-->

:::

---

<TagLinks />