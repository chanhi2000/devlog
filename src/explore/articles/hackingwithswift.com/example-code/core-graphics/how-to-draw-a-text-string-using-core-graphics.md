---
lang: ko-KR
title: "How to draw a text string using Core Graphics"
description: "Article(s) > How to draw a text string using Core Graphics"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw a text string using Core Graphics"
    - property: og:description
      content: "How to draw a text string using Core Graphics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.html
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
  "title": "How to draw a text string using Core Graphics | Core Graphics - free Swift example code",
  "desc": "How to draw a text string using Core Graphics",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
To draw text in Core Graphics is trivial because every Swift string has a built-in `draw(with:)` method that takes an array of attributes and a position and size. There is, like always, some Core Graphics set up work to do, but this next code snippet is a complete example you can re-use easily:

```swift
let renderer = UIGraphicsImageRenderer(size: CGSize(width: 512, height: 512))
let img = renderer.image { ctx in
    let paragraphStyle = NSMutableParagraphStyle()
    paragraphStyle.alignment = .center

    let attrs = [NSAttributedString.Key.font: UIFont(name: "HelveticaNeue-Thin", size: 36)!, NSAttributedString.Key.paragraphStyle: paragraphStyle]

    let string = "How much wood would a woodchuck\nchuck if a woodchuck would chuck wood?"
    string.draw(with: CGRect(x: 32, y: 32, width: 448, height: 448), options: .usesLineFragmentOrigin, attributes: attrs, context: nil)
}
```

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect() 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:) 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />