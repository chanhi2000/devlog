---
lang: ko-KR
title: "How to read the red, green, blue, and alpha color components from a UIColor"
description: "Article(s) > How to read the red, green, blue, and alpha color components from a UIColor"
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
      content: "Article(s) > How to read the red, green, blue, and alpha color components from a UIColor"
    - property: og:description
      content: "How to read the red, green, blue, and alpha color components from a UIColor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor.html
date: 2019-10-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIClolr - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uicolor/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to read the red, green, blue, and alpha color components from a UIColor | UIClolr - free Swift example code",
  "desc": "How to read the red, green, blue, and alpha color components from a UIColor",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
Creating a `UIColor` from red, green, blue, and alpha (RGBA) is easy enough:

```swift
let color = UIColor(red: 0.8, green: 0.1, blue: 0.5, alpha: 1)
```

But when you want to read those values back, you need to do a little more work. `UIColor` has a built-in method called `getRed()`, which unpacks the RGBA values into variable floats – you need to create four variables first, then pass them in by reference:

```swift
var red: CGFloat = 0
var green: CGFloat = 0
var blue: CGFloat = 0
var alpha: CGFloat = 0

color.getRed(&red, green: &green, blue: &blue, alpha: &alpha)
```

When that runs, `red` will have 0.8, `green` will have 0.1, and so on.

Because this is a pain to use you might find it best to wrap it up in an extension:

```swift
extension UIColor {
    var rgba: (red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat) {
        var red: CGFloat = 0
        var green: CGFloat = 0
        var blue: CGFloat = 0
        var alpha: CGFloat = 0
        getRed(&red, green: &green, blue: &blue, alpha: &alpha)

        return (red, green, blue, alpha)
    }
}
```

Now you can use `color.rgba` to get back a tuple of all four color values.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color">How to read the red, green, and blue values from a Color 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:) 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />