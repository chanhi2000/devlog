---
lang: ko-KR
title: "What is destructuring?"
description: "Article(s) > What is destructuring?"
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
      content: "Article(s) > What is destructuring?"
    - property: og:description
      content: "What is destructuring?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-destructuring.html
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
  "title": "What is destructuring? | Language - free Swift example code",
  "desc": "What is destructuring?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-destructuring",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Destructuring is the practice of pulling a tuple apart into multiple values in a single assignment. For example, consider a trivial function that accepts names in the format “FirstName LastName” and returns a tuple containing the first and last names separated:

```swift
func splitName(_ name: String) -> (String, String) {
    let parts = name.components(separatedBy: " ")
    return (parts[0], parts[1])
}
```

If you want to call that using destructuring, just use two values for your assignment when calling it, like this:

```swift
let (first, last) = splitName("Taylor Swift")
```

That creates `first` and `last` constants out of the two returned items in the tuple, and you can then use them as normal:

```swift
print(first)
print(last)
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-find-the-highest-value-in-an-array">How to find the highest value in an array 
/example-code/language/what-is-mvc">What is MVC? 
/example-code/language/how-to-restrict-a-protocol-to-classes">How to restrict a protocol to classes 
/example-code/language/how-to-find-the-difference-between-two-arrays">How to find the difference between two arrays 
/example-code/language/what-is-a-selector">What is a selector?</a>
-->

:::

---

<TagLinks />