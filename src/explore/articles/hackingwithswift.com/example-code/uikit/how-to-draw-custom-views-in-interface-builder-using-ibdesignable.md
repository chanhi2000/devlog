---
lang: ko-KR
title: "How to draw custom views in Interface Builder using IBDesignable"
description: "Article(s) > How to draw custom views in Interface Builder using IBDesignable"
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
      content: "Article(s) > How to draw custom views in Interface Builder using IBDesignable"
    - property: og:description
      content: "How to draw custom views in Interface Builder using IBDesignable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-draw-custom-views-in-interface-builder-using-ibdesignable.html
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
  "title": "How to draw custom views in Interface Builder using IBDesignable | UIKit - free Swift example code",
  "desc": "How to draw custom views in Interface Builder using IBDesignable",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-draw-custom-views-in-interface-builder-using-ibdesignable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
You've always been able to have custom views inside your apps, but if you're having a hard time visualizing how they look at design time then you should try `@IBDesignable`: it lets you see exactly how your custom views look inside IB, and if you combine it with `@IBInspectable` you can even adjust your view's design there too.

This example view draws an ellipse that fills itself. If you add this to your project, create a view, then set that view to have this custom subclass, you'll see an ellipse appear immediately. You can move the view or resize it, and the ellipse will be updated. Plus, because I used `@IBInspectable` you can adjust the colors and stroke width right inside the attributes inspector, helping you make sure your UI looks exactly as you expect.

```swift
@IBDesignable class EllipseView: UIView {
    @IBInspectable var strokeWidth: CGFloat = 0
    @IBInspectable var fillColor: UIColor = UIColor.black
    @IBInspectable var strokeColor: UIColor = UIColor.clear

    override func draw(_ rect: CGRect) {
        guard let context = UIGraphicsGetCurrentContext() else { return }
        let rectangle = bounds.insetBy(dx: strokeWidth / 2, dy: strokeWidth / 2)

        context.setFillColor(fillColor.cgColor)
        context.setStrokeColor(strokeColor.cgColor)
        context.setLineWidth(strokeWidth)

        context.addEllipse(in: rectangle)
        context.drawPath(using: .fillStroke)
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder">How to use IBInspectable to adjust values in Interface Builder 
/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes">How to lock Interface Builder controls to stop accidental changes 
/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards 
/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder">How to used a named UIColor in code and Interface Builder 
/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views</a>
-->

:::

---

<TagLinks />