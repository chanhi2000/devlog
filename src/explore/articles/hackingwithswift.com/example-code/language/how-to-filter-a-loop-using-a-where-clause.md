---
lang: ko-KR
title: "How to filter a loop using a where clause"
description: "Article(s) > How to filter a loop using a where clause"
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
      content: "Article(s) > How to filter a loop using a where clause"
    - property: og:description
      content: "How to filter a loop using a where clause"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-filter-a-loop-using-a-where-clause.html
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
  "title": "How to filter a loop using a where clause | Language - free Swift example code",
  "desc": "How to filter a loop using a where clause",
  "link": "https://hackingwithswift.com/example-code/language/how-to-filter-a-loop-using-a-where-clause",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
A regular `for-in` loop goes over all the items in an array, allowing you to manipulate them as you need. However, sometimes you don’t need *all* items and instead only want a subset, and in those circumstances the `where` keyword is useful.

For example, consider this array:

```swift
let names = ["Michael Jackson", "Taylor Swift", "Michael Caine", "Adele Adkins", "Michael Jordan"]
```

A regular `for-in` loop could print out all those names, but by adding a `where` clause we could restrict the loop so it operates only on people named Michael:

```swift
for name in names where name.hasPrefix("Michael") {
    print(name)
}
```

If you need multiple conditions in your `where` clause, join them using `&&`.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more 
/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter() 
/quick-start/swiftui/how-to-filter-core-data-fetch-requests-using-a-predicate">How to filter Core Data fetch requests using a predicate 
/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data 
/example-code/media/how-to-filter-images-using-core-image-and-cifilter">How to filter images using Core Image and CIFilter</a>
-->

:::

---

<TagLinks />