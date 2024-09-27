---
lang: ko-KR
title: "How to render example content using prepareForInterfaceBuilder()"
description: "Article(s) > How to render example content using prepareForInterfaceBuilder()"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render example content using prepareForInterfaceBuilder()"
    - property: og:description
      content: "How to render example content using prepareForInterfaceBuilder()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-render-example-content-using-prepareforinterfacebuilder.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render example content using prepareForInterfaceBuilder() | Xcode - free Swift example code",
  "desc": "How to render example content using prepareForInterfaceBuilder()",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-render-example-content-using-prepareforinterfacebuilder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Whenever you create a custom `UIView` subclass using `@IBDesignable`, it’s usually a good idea to provide it with some sample content so it can render meaningfully at design time.

For example, here’s a simple `ShapeView` class that renders a `UIBezierPath` inside a view, using `CAShapeLayer`:

```swift
@IBDesignable class ShapeView: UIView {
    @IBInspectable var strokeColor: UIColor = UIColor.black
    @IBInspectable var fillColor: UIColor = UIColor.clear
    var path: UIBezierPath?

    override class var layerClass: AnyClass {
        return CAShapeLayer.self
    }

    override func layoutSubviews() {
        guard let layer = layer as? CAShapeLayer else { return }
        layer.path = path?.cgPath
        layer.strokeColor = strokeColor.cgColor
        layer.fillColor = fillColor.cgColor
    }
}
```

While that might work well enough at runtime, you won’t be able to see anything when used with Interface Builder because it relies on a bezier path being set. So, while you can adjust the stroke and fill colors all you want, you can’t see how those changes look.

To fix this, Xcode lets us add a special method in the view called `prepareForInterfaceBuilder()`. If present, this is called by Interface Builder when your custom view is being drawn, and it’s your chance to provide some example content so others can see how it looks.

In this instance, setting the `path` property to a default shape does the job neatly:

```swift
override func prepareForInterfaceBuilder() {
    let drawRect = CGRect(x: 0, y: 0, width: 128, height: 128)
    path = UIBezierPath(rect: drawRect)
}
```

This method is only called at design time, so you don’t have to worry about it being run in shipping code.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-render-markdown-content-in-text">How to render Markdown content in text 
/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow">How to render shadows using NSShadow and setShadow() 
/quick-start/swiftui/how-to-render-a-gradient">How to render a gradient 
/quick-start/swiftui/how-to-render-images-using-sf-symbols">How to render images using SF Symbols 
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF</a>
-->

:::

---

<TagLinks />