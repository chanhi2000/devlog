---
lang: ko-KR
title: "How to use view controller containment"
description: "Article(s) > How to use view controller containment"
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
      content: "Article(s) > How to use view controller containment"
    - property: og:description
      content: "How to use view controller containment"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-view-controller-containment.html
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
  "title": "How to use view controller containment | UIKit - free Swift example code",
  "desc": "How to use view controller containment",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-view-controller-containment",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
View controller containment allows you to embed one view controller inside another, which can simplify and organize your code. It takes four steps:

1. Call `addChild()` on your parent view controller, passing in your child.
2. Set the child’s frame to whatever you need, if you’re using frames.
3. Add the child’s view to your main view, along with any Auto Layout constraints.
4. Call `didMove(toParent:)` on the child, passing in your main view controller.

In Swift code it looks like this:

```swift
addChild(child)
child.view.frame = frame
view.addSubview(child.view)
child.didMove(toParent: self)
```

When you’re finished with it, the steps are conceptually similar but in reverse:

1. Call `willMove(toParent:)`, passing in `nil`.
2. Remove the child view from its parent.
3. Call `removeFromParent()` on the child.

In code, it’s just three lines:

```swift
willMove(toParent: nil)
view.removeFromSuperview()
removeFromParent()
```

Just for convenience you might want to consider adding a small, private extension to `UIViewController` to do these tasks for you – they do need to be run in a precise order, which is easily done incorrectly.

Something like this ought to do it:

```swift
@nonobjc extension UIViewController {
    func add(_ child: UIViewController, frame: CGRect? = nil) {
        addChild(child)

        if let frame = frame {
            child.view.frame = frame
        }

        view.addSubview(child.view)
        child.didMove(toParent: self)
    }

    func remove() {
        willMove(toParent: nil)
        view.removeFromSuperview()
        removeFromParent()
    }
}
```

That’s marked `@nonobjc` so it won’t conflict with any of Apple’s own code, now or in the future.
-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view">How to find the view controller responsible for a view 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access” 
/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”</a>
-->

:::

---

<TagLinks />