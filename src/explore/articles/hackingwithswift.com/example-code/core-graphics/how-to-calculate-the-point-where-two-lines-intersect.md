---
lang: ko-KR
title: "How to calculate the point where two lines intersect"
description: "Article(s) > How to calculate the point where two lines intersect"
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
      content: "Article(s) > How to calculate the point where two lines intersect"
    - property: og:description
      content: "How to calculate the point where two lines intersect"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect.html
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
  "title": "How to calculate the point where two lines intersect | Core Graphics - free Swift example code",
  "desc": "How to calculate the point where two lines intersect",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Finding where two lines cross can be done by calculating their cross product. The code below returns an optional tuple containing the X and Y intersection points, or nil if they don’t cross at all.

**Note:** Core Graphics doesn’t give us a `CGLine` type, so you’ll need pass this four points: where the first line starts and ends, and where the second line starts and ends.

```swift
func linesCross(start1: CGPoint, end1: CGPoint, start2: CGPoint, end2: CGPoint) -> (x: CGFloat, y: CGFloat)? {
    // calculate the differences between the start and end X/Y positions for each of our points
    let delta1x = end1.x - start1.x
    let delta1y = end1.y - start1.y
    let delta2x = end2.x - start2.x
    let delta2y = end2.y - start2.y

    // create a 2D matrix from our vectors and calculate the determinant
    let determinant = delta1x * delta2y - delta2x * delta1y

    if abs(determinant) < 0.0001 {
        // if the determinant is effectively zero then the lines are parallel/colinear
        return nil
    }

    // if the coefficients both lie between 0 and 1 then we have an intersection
    let ab = ((start1.y - start2.y) * delta2x - (start1.x - start2.x) * delta2y) / determinant

    if ab > 0 && ab < 1 {
        let cd = ((start1.y - start2.y) * delta1x - (start1.x - start2.x) * delta1y) / determinant

        if cd > 0 && cd < 1 {
            // lines cross – figure out exactly where and return it
            let intersectX = start1.x + ab * delta1x
            let intersectY = start1.y + ab * delta1y
            return (intersectX, intersectY)
        }
    }

    // lines don't cross
    return nil
}
```

Note: this code is adapted from “Intersection of Two Lines in Three-Space”, which is a one-page chapter by Ronald Goodman in the book Graphics Gems. For more on how cross products work, I can highly recomend the book “Essential Mathematics for Games and Interactive Applications” by James M. Van Verth and Lars M. Bishop.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints 
/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/example-code/strings/how-to-get-the-lines-in-a-string-as-an-array">How to get the lines in a string as an array 
/example-code/strings/how-to-specify-floating-point-precision-in-a-string">How to specify floating-point precision in a string</a>
-->

:::

---

<TagLinks />