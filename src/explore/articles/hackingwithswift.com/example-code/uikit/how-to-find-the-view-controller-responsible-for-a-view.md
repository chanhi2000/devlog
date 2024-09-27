---
lang: ko-KR
title: "How to find the view controller responsible for a view"
description: "Article(s) > How to find the view controller responsible for a view"
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
      content: "Article(s) > How to find the view controller responsible for a view"
    - property: og:description
      content: "How to find the view controller responsible for a view"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view.html
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
  "title": "How to find the view controller responsible for a view | UIKit - free Swift example code",
  "desc": "How to find the view controller responsible for a view",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If you need to find the view controller that is responsible for a particular view, the easiest thing to do is walk the responder chain. This chain is built into all iOS apps, and lets you walk from one view up to its parent view, its grandparent view, and so on, until it reaches a view controller. You can even carry on going if you want, up through parent view controllers and ultimately to the app delegate.

To try it out, add this extension to `UIView` to your code:

```swift
extension UIView {
    func findViewController() -> UIViewController? {
        if let nextResponder = self.next as? UIViewController {
            return nextResponder
        } else if let nextResponder = self.next as? UIView {
            return nextResponder.findViewController()
        } else {
            return nil
        }
    }
}
```

You can now call `findViewController()` on any view, and you’ll get back nil or its view controller.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/uikit/how-to-use-view-controller-containment">How to use view controller containment 
/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image 
/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”</a>
-->

:::

---

<TagLinks />