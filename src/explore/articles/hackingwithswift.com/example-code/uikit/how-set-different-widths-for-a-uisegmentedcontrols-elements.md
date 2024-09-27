---
lang: ko-KR
title: "How set different widths for a UISegmentedControl's elements"
description: "Article(s) > How set different widths for a UISegmentedControl's elements"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How set different widths for a UISegmentedControl's elements"
    - property: og:description
      content: "How set different widths for a UISegmentedControl's elements"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-set-different-widths-for-a-uisegmentedcontrols-elements.html
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
  "title": "How set different widths for a UISegmentedControl's elements | UIKit - free Swift example code",
  "desc": "How set different widths for a UISegmentedControl's elements",
  "link": "https://hackingwithswift.com/example-code/uikit/how-set-different-widths-for-a-uisegmentedcontrols-elements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
Segmented controls give each segment equal width by default, which is aesthetically pleasing when you have space to spare but technically irritating when space is tight. Rather than try to squash too much into a small space, you have two options: set custom segment widths, or ask iOS to size them individually for you.

The first option looks like this:

```swift
segmentedControl.setWidth(100, forSegmentAt: 0)
segmentedControl.setWidth(50, forSegmentAt: 1)
```

That gives you individually sized segments while sticking to a value you define, which means you get to tweak the aesthetics as you want. The second option looks like this:

```swift
segmentedControl.apportionsSegmentWidthsByContent = true
```

That hands full control over to iOS, which is probably the best thing to do most of the time.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/enabling-and-disabling-elements-in-forms">Enabling and disabling elements in forms 
/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy() 
/example-code/language/removing-matching-elements-from-a-collection-removeallwhere">Removing matching elements from a collection: removeAll(where:) 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet 
/example-code/language/when-to-use-a-set-rather-than-an-array">When to use a set rather than an array</a>
-->

:::

---

<TagLinks />