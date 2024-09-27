---
lang: ko-KR
title: "How to calculate the distance between two CGPoints"
description: "Article(s) > How to calculate the distance between two CGPoints"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to calculate the distance between two CGPoints"
    - property: og:description
      content: "How to calculate the distance between two CGPoints"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to calculate the distance between two CGPoints | Core Graphics - free Swift example code",
  "desc": "How to calculate the distance between two CGPoints",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
You can calculate the distance between two `CGPoints` by using Pythagoras's theorem, but be warned: calculating square roots is not fast, so if possible you want to avoid it. More on that in a moment, but first here's the code you need:

```swift
func CGPointDistanceSquared(from: CGPoint, to: CGPoint) -> CGFloat {
    return (from.x - to.x) * (from.x - to.x) + (from.y - to.y) * (from.y - to.y)
}

func CGPointDistance(from: CGPoint, to: CGPoint) -> CGFloat {
    return sqrt(CGPointDistanceSquared(from: from, to: to))
}
```

Note that there are two functions: one for returning the distance between two points, and one for returning the distance squared between two points. The latter one doesn't use a square root, which makes it substantially faster. This means if you want to check "did the user tap within a 10-point radius of this position?" it's faster to square that 10 (to make 100) then use `CGPointDistanceSquared()` instead.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints 
/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect 
/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance">How to calculate the SHA hash of a String or Data instance 
/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string 
/example-code/language/how-to-calculate-division-remainder-using-modulo">How to calculate division remainder using modulo</a>  
-->

:::

---

<TagLinks />