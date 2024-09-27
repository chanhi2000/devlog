---
lang: ko-KR
title: "How to render shadows using NSShadow and setShadow()"
description: "Article(s) > How to render shadows using NSShadow and setShadow()"
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
      content: "Article(s) > How to render shadows using NSShadow and setShadow()"
    - property: og:description
      content: "How to render shadows using NSShadow and setShadow()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow.html
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
  "title": "How to render shadows using NSShadow and setShadow() | UIKit - free Swift example code",
  "desc": "How to render shadows using NSShadow and setShadow()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
There are two ways to add shadows when rendering images: calling `setShadow()` and providing offset, blur, and color, or by using an `NSShadow` attached to an attributed string. Both have their own advantages, so both are worth trying.

First, here’s some example drawing code without a shadow:

```swift
let rect = CGRect(x: 0, y: 0, width: 512, height: 256)
let renderer = UIGraphicsImageRenderer(bounds: rect)

let img = renderer.image { ctx in
    UIColor.black.set()
    ctx.fill(rect)

    let str = """
    He thrusts his fists
    Against the posts
    And still insists
    He sees the ghosts
    """

    let attrs: [NSAttributedString.Key: Any] = [
        .font: UIFont.systemFont(ofSize: 36),
        .foregroundColor: UIColor.white
    ]

    let attributedString = NSAttributedString(string: str, attributes: attrs)
    attributedString.draw(in: rect.insetBy(dx: 50, dy: 50))
}
```

That draws some white text on a black background.

If we want to add a shadow effect to the text, we can use the `setShadow` method of the Core Graphics context we’re working with. For example, if you place this line before the `draw()` call at the end, you’ll make the text have a 5-point red glow:

```swift
ctx.cgContext.setShadow(offset: .zero, blur: 5, color: UIColor.red.cgColor)
```

The advantage of using `setShadow()` is that once you enable a shadow color, everything you draw has the same color – all text, all images, and all shapes. 

When you’re done with the shadow and want normal rendering to resume, just use nil for the color value like this:

```swift
ctx.cgContext.setShadow(offset: .zero, blur: 0, color: nil)
```

The other way of drawing shadows is using `NSAttributedString` and the `NSShadow` class. This is an object you create and can attach to any attributed strings you want, giving you the flexibility to add shadowing to only certain parts of a string rather than the whole thing – something that `setShadow()` can’t do.

First, create an `NSShadow` instance like this:

```swift
let shadow = NSShadow()
shadow.shadowColor = UIColor.red
shadow.shadowBlurRadius = 5
```

That will create the same 5-point red glow as our earlier call to `setShadow()`.

Now go ahead and put that into your attributed string dictionary using the `.shadow` key, like this:

```swift
let attrs: [NSAttributedString.Key: Any] = [
    .font: UIFont.systemFont(ofSize: 36),
    .foregroundColor: UIColor.white,
    .shadow: shadow
]
```

Here the end result will look identical to `NSShadow`, but as I said you now have the ability to shadow only parts of a string - or even add different shadows across the string.

**Pro-tip:** If you want to make your shadow stronger – to make it darker so that the color shows through more clearly – just draw your object repeatedly. For example, this will draw our attributed string five times to give it a really strong red glow:

```swift
for _ in 1...5 {
    attributedString.draw(in: rect.insetBy(dx: 50, dy: 50))
}
```

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