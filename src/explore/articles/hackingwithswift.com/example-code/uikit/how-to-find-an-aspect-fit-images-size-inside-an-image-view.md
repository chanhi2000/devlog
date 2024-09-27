---
lang: ko-KR
title: "How to find an aspect fit image’s size inside an image view"
description: "Article(s) > How to find an aspect fit image’s size inside an image view"
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
      content: "Article(s) > How to find an aspect fit image’s size inside an image view"
    - property: og:description
      content: "How to find an aspect fit image’s size inside an image view"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view.html
date: 2019-10-24
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
  "title": "How to find an aspect fit image’s size inside an image view | UIKit - free Swift example code",
  "desc": "How to find an aspect fit image’s size inside an image view",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
All images have a natural size, which is the number of pixels they are wide and high. All image views also have a size, which is whatever width and height they have once their Auto Layout constraints have been resolved. 

Things get a little more complex when you place an image inside an image view and make it use *aspect fit* content mode – the image gets scaled down to fit inside the image view, so that all parts of the image are visible.

If you need to find the size of an aspect fit image inside its image view, I have just the extension for you:

```swift
extension UIImageView {
    var contentClippingRect: CGRect {
        guard let image = image else { return bounds }
        guard contentMode == .scaleAspectFit else { return bounds }
        guard image.size.width > 0 && image.size.height > 0 else { return bounds }

        let scale: CGFloat
        if image.size.width > image.size.height {
            scale = bounds.width / image.size.width
        } else {
            scale = bounds.height / image.size.height
        }

        let size = CGSize(width: image.size.width * scale, height: image.size.height * scale)
        let x = (bounds.width - size.width) / 2.0
        let y = (bounds.height - size.height) / 2.0

        return CGRect(x: x, y: y, width: size.width, height: size.height)
    }
}
```

You can now use `imageView.contentClippingRect` to read the position and size of the image inside.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard">How to adjust a UIScrollView to fit the keyboard 
/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image 
/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text</a>
-->

:::

---

<TagLinks />