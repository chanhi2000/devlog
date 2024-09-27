---
lang: ko-KR
title: "Showing dictionary definitions using UIReferenceLibraryViewController"
description: "Article(s) > Showing dictionary definitions using UIReferenceLibraryViewController"
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
      content: "Article(s) > Showing dictionary definitions using UIReferenceLibraryViewController"
    - property: og:description
      content: "Showing dictionary definitions using UIReferenceLibraryViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/showing-dictionary-definitions-using-uireferencelibraryviewcontroller.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Showing dictionary definitions using UIReferenceLibraryViewController | UIKit - free Swift example code",
  "desc": "Showing dictionary definitions using UIReferenceLibraryViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/showing-dictionary-definitions-using-uireferencelibraryviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
UIKit has a built-in dictionary and a built-in way of showing definitions for that dictionary, all done using `UIReferenceLibraryViewController`. Before you try using it, you should call its `dictionaryHasDefinition()` method to make sure a definition exists, like this:

```swift
if UIReferenceLibraryViewController.dictionaryHasDefinition(forTerm: "Swift") {
    // code
}
```

If a definition exists, you create an instance of the view controller using the word you want to show, then present is as normal:

```swift
let referenceVC = UIReferenceLibraryViewController(term: "Swift")
present(referenceVC, animated: true)
```

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-a-dictionary">What is a dictionary? 
/example-code/language/how-to-transform-a-dictionary-using-mapvalues">How to transform a dictionary using mapValues() 
/example-code/language/how-to-specify-default-values-for-dictionary-keys">How to specify default values for dictionary keys 
/quick-start/swiftui/showing-and-hiding-form-rows">Showing and hiding form rows 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

:::

---

<TagLinks />