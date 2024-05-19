---
lang: ko-KR
title: How to use UIBezierPath and CGPath in SwiftUI
description: Article(s) > How to use UIBezierPath and CGPath in SwiftUI
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to use UIBezierPath and CGPath in SwiftUI
    - property: og:description
      content: How to use UIBezierPath and CGPath in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-uibezierpath-and-cgpath-in-swiftui.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use UIBezierPath and CGPath in SwiftUI | SwiftUI by Example",
  "desc": "How to use UIBezierPath and CGPath in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you have existing paths made using `UIBezierPath` or `CGPath` it’s trivial to convert them for use in SwiftUI because the `Path` struct has an initializer directly from `CGPath`.

::: note

`UIBezierPath` is not available in macOS, so if you’re trying to keep your SwiftUI code cross platform you should migrate to `CGPath` instead.

:::

As an example, here’s a `UIBezierPath` extension I made to store the logo for an app I built, called Unwrap:

```swift
extension UIBezierPath {
    /// The Unwrap logo as a Bezier path.
    static var logo: UIBezierPath {
        let path = UIBezierPath()
        path.move(to: CGPoint(x: 0.534, y: 0.5816))
        path.addCurve(to: CGPoint(x: 0.1877, y: 0.088), controlPoint1: CGPoint(x: 0.534, y: 0.5816), controlPoint2: CGPoint(x: 0.2529, y: 0.4205))
        path.addCurve(to: CGPoint(x: 0.9728, y: 0.8259), controlPoint1: CGPoint(x: 0.4922, y: 0.4949), controlPoint2: CGPoint(x: 1.0968, y: 0.4148))
        path.addCurve(to: CGPoint(x: 0.0397, y: 0.5431), controlPoint1: CGPoint(x: 0.7118, y: 0.5248), controlPoint2: CGPoint(x: 0.3329, y: 0.7442))
        path.addCurve(to: CGPoint(x: 0.6211, y: 0.0279), controlPoint1: CGPoint(x: 0.508, y: 1.1956), controlPoint2: CGPoint(x: 1.3042, y: 0.5345))
        path.addCurve(to: CGPoint(x: 0.6904, y: 0.3615), controlPoint1: CGPoint(x: 0.7282, y: 0.2481), controlPoint2: CGPoint(x: 0.6904, y: 0.3615))
        return path
    }
}
```

That uses control points that are normalized to the range of 0 through 1, so that I can render it inside any kind of container and just scale it up to fit the available space.

In SwiftUI that would mean creating a transform that scales the Bezier path up by the minimum of either the width or the height, then applying that to a path, like this:

```swift
struct ScaledBezier: Shape {
    let bezierPath: UIBezierPath

    func path(in rect: CGRect) -> Path {
        let path = Path(bezierPath.cgPath)

        // Figure out how much bigger we need to make our path in order for it to fill the available space without clipping.
        let multiplier = min(rect.width, rect.height)

        // Create an affine transform that uses the multiplier for both dimensions equally.
        let transform = CGAffineTransform(scaleX: multiplier, y: multiplier)

        // Apply that scale and send back the result.
        return path.applying(transform)
    }
}

// Show our ScaledBezier shape in a view
struct ContentView: View {
    var body: some View {
        ScaledBezier(bezierPath: .logo)
            .stroke(lineWidth: 2)
            .frame(width: 200, height: 200)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui-1.zip)

![An abstract Swift logo drawn using a single line.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui-1~dark@2x.png)

If you’re starting with a `CGPath` rather than a `UIBezierPath`, things are even easier because you can write `let path = Path(yourCGPath)` to convert the path directly.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />