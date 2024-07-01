---
lang: ko-KR
title: Swifty importing of C functions
description: Article(s) > Swifty importing of C functions
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-3.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Swifty importing of C functions
    - property: og:description
      content: Swifty importing of C functions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.0/c-functions.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Swifty importing of C functions | Changes in Swift 3.0",
  "desc": "Swifty importing of C functions",
  "link": "https://hackingwithswift.com/swift/3.0/c-functions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.0

Swift 3 introduced attributes for C functions that allow library authors to specify new and beautiful ways their code should be imported into Swift. For example, all those functions that start with "CGContext" now get mapped to properties methods on a CGContext object, which makes for much more idiomatic Swift. Yes, this means the hideous wart that is `CGContextSetFillColorWithColor()` has finally been excised.

To demonstrate this, here's an example in Swift 2.2:

```swift
let ctx = UIGraphicsGetCurrentContext()

let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
CGContextSetFillColorWithColor(ctx, UIColor.redColor().CGColor)
CGContextSetStrokeColorWithColor(ctx, UIColor.blackColor().CGColor)
CGContextSetLineWidth(ctx, 10)
CGContextAddRect(ctx, rectangle)
CGContextDrawPath(ctx, .FillStroke)

UIGraphicsEndImageContext()
```

In Swift 3 the `CGContext` can be treated as an object that you can call methods on rather than repeating `CGContext` again and again. So, we can rewrite that code like this:

```swift
if let ctx = UIGraphicsGetCurrentContext() {
    let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
    ctx.setFillColor(UIColor.red.cgColor)
    ctx.setStrokeColor(UIColor.black.cgColor)
    ctx.setLineWidth(10)
    ctx.addRect(rectangle)
    ctx.drawPath(using: .fillStroke)

    UIGraphicsEndImageContext()
}
```

::: note

In both Swift 2.2 and Swift 3.0 `UIGraphicsGetCurrentContext()` returns an optional `CGContext`, but because Swift 3 uses method calls we need to safely unwrap before it's used.

:::

This mapping of C functions exists elsewhere, for example you can now read the `numberOfPages` property of a `CGPDFDocument`, and `CGAffineTransform` has been souped up quite dramatically. Here are some examples showing old and new:

```swift
CGAffineTransformIdentity
CGAffineTransform.identity

CGAffineTransformMakeScale(2, 2)
CGAffineTransform(scaleX: 2, y: 2)

CGAffineTransformMakeTranslation(128, 128)
CGAffineTransform(translationX: 128, y: 128)

CGAffineTransformMakeRotation(CGFloat(M_PI))
```

::: details Changes in Swift 3.0

```component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift 3.0",
  "desc": "All function parameters have labels unless you request otherwise",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Omit needless words | Changes in Swift 3.0",
  "desc": "Omit needless words",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties | Changes in Swift 3.0",
  "desc": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Swifty importing of C functions | Changes in Swift 3.0",
  "desc": "Swifty importing of C functions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/c-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Verbs and nouns | Changes in Swift 3.0",
  "desc": "Verbs and nouns",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-2-to-3-0.playground.zip)

:::

---

<TagLinks />