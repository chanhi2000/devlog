---
lang: ko-KR
title: "How to use IBInspectable to adjust values in Interface Builder"
description: "Article(s) > How to use IBInspectable to adjust values in Interface Builder"
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
      content: "Article(s) > How to use IBInspectable to adjust values in Interface Builder"
    - property: og:description
      content: "How to use IBInspectable to adjust values in Interface Builder"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder.html
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
  "title": "How to use IBInspectable to adjust values in Interface Builder | UIKit - free Swift example code",
  "desc": "How to use IBInspectable to adjust values in Interface Builder",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
The `@IBInspectable` keyword lets you specify that some parts of a custom `UIView` subclass should be configurable inside Interface Builder. Only some kinds of values are supported (booleans, numbers, strings, points, rects, colors and images) but that ought to be enough for most purposes.

When your app is run, the values that were set in Interface Builder are automatically set, just like any other IB value. Neat, huh?

Here's an example that creates a `GradientView` class. This wraps the `CAGradientLayer` class up in a `UIView` that you can place anywhere in your app. Even better, thanks to `@IBInspectable` you can customize the colors in your gradient right inside IB. Add this class to your project now:

```swift
@IBDesignable class GradientView: UIView {
    @IBInspectable var startColor: UIColor = UIColor.white
    @IBInspectable var endColor: UIColor = UIColor.white

    override class var layerClass: AnyClass {
        return CAGradientLayer.self
    }

    override func layoutSubviews() {
        (layer as! CAGradientLayer).colors = [startColor.cgColor, endColor.cgColor]
    }
}
```

Now go to IB, drop a `UIView` on to your storyboard, then change its class to be `GradientView`. Once that's done, Xcode will compile your project automatically, and then inside the attributes inspector you'll see two color selectors for the start and end color.

::: note 

`@IBInspectable` frequently does not play nicely with type inference, which is why I've explicitly declared both the type (`UIColor`) and default value (`UIColor.white`).

:::

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-draw-custom-views-in-interface-builder-using-ibdesignable">How to draw custom views in Interface Builder using IBDesignable 
/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder">How to used a named UIColor in code and Interface Builder 
/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards 
/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes">How to lock Interface Builder controls to stop accidental changes 
/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset">How to adjust the position of a view using its offset</a>
-->

:::

---

<TagLinks />