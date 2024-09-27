---
lang: ko-KR
title: "How to generate fair random numbers using GKShuffledDistribution"
description: "Article(s) > How to generate fair random numbers using GKShuffledDistribution"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to generate fair random numbers using GKShuffledDistribution"
    - property: og:description
      content: "How to generate fair random numbers using GKShuffledDistribution"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-generate-fair-random-numbers-using-gkshuffleddistribution.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to generate fair random numbers using GKShuffledDistribution | Games - free Swift example code",
  "desc": "How to generate fair random numbers using GKShuffledDistribution",
  "link": "https://hackingwithswift.com/example-code/games/how-to-generate-fair-random-numbers-using-gkshuffleddistribution",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
A so-called “fair” random number generator is one that generates each of its possible values in equal amounts and with an even distribution. For example, if you were generating numbers between 1 and 4, you might get 4, 2, 1, 3, but you would never get 4 4 1 4.

GameplayKit has support for fair random number generation using `GKShuffledDistribution`. First, add an import for the GameplayKit framework:

```swift
import GameplayKit
```

Second, create an instance of `GKShuffledDistribution`, telling it the lowest and highest values it can generate:

```swift
let distribution = GKShuffledDistribution(lowestValue: 1, highestValue: 8)
```

Finally, call `nextInt()` on it as needed to generate numbers. You should get all numbers between 1 and 8 at least once before you see any repeated.

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-generate-shaped-random-numbers-using-gkgaussiandistribution">How to generate shaped random numbers using GKGaussianDistribution 
/example-code/system/how-to-generate-a-random-identifier-using-uuid">How to generate a random identifier using UUID 
/example-code/language/how-to-generate-a-random-number">How to generate a random number 
/example-code/games/how-to-generate-a-random-number-with-gkrandomsource">How to generate a random number with GKRandomSource 
/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator">How to generate haptic feedback with UIFeedbackGenerator</a>
-->

---

<TagLinks />