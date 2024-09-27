---
lang: ko-KR
title: "How to convert units using Unit and Measurement"
description: "Article(s) > How to convert units using Unit and Measurement"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to convert units using Unit and Measurement"
    - property: og:description
      content: "How to convert units using Unit and Measurement"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-units-using-unit-and-measurement.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert units using Unit and Measurement | System - free Swift example code",
  "desc": "How to convert units using Unit and Measurement",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-units-using-unit-and-measurement",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
iOS 10 introduced a new system for calculating distance, length, area, volume, duration, and many more measurements. Let’s start with something simple. If you’re six feet tall, you’d create a `Measurement` instance like this:

```swift
let heightFeet = Measurement(value: 6, unit: UnitLength.feet)
```

Note that Swift can’t infer `.feet` to mean `UnitLength.feet` because there are lots of `Unit` subclasses as you’ll see soon.

Once you have a measurement ready, you can convert it to other units like this:

```swift
let heightInches = heightFeet.converted(to: UnitLength.inches)
let heightSensible = heightFeet.converted(to: UnitLength.meters)
```

You should see “72.0 in” and “1.8288 m” in your output, showing that the conversion process has worked. 

The `UnitLength` class, like all unit subclasses, spans a huge range of units from old to futuristic. For example, you can convert feet to astronomical units, which is equal to the average distance between the Earth and the Sun, or about 150 million kilometers:

```swift
let heightAUs = heightFeet.converted(to: UnitLength.astronomicalUnits)
```

Once you’ve used one unit, the rest work identically. Here are some more examples to get you started:

```swift
// convert degrees to radians
let degrees = Measurement(value: 180, unit: UnitAngle.degrees)
let radians = degrees.converted(to: .radians)

// convert square meters to square centimeters
let squareMeters = Measurement(value: 4, unit: UnitArea.squareMeters)
let squareCentimeters = squareMeters.converted(to: .squareCentimeters)

// convert bushels to imperial teaspoons
let bushels = Measurement(value: 6, unit: UnitVolume.bushels)
let teaspoons = bushels.converted(to: .imperialTeaspoons)
```

Honestly, I have no idea what the bushels to imperial teaspoons ratio is, but it’s nice to be given the option!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />