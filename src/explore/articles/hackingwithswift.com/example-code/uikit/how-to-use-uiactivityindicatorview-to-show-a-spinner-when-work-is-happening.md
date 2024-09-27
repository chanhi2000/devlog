---
lang: ko-KR
title: "How to use UIActivityIndicatorView to show a spinner when work is happening"
description: "Article(s) > How to use UIActivityIndicatorView to show a spinner when work is happening"
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
      content: "Article(s) > How to use UIActivityIndicatorView to show a spinner when work is happening"
    - property: og:description
      content: "How to use UIActivityIndicatorView to show a spinner when work is happening"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-uiactivityindicatorview-to-show-a-spinner-when-work-is-happening.html
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
  "title": "How to use UIActivityIndicatorView to show a spinner when work is happening | UIKit - free Swift example code",
  "desc": "How to use UIActivityIndicatorView to show a spinner when work is happening",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-uiactivityindicatorview-to-show-a-spinner-when-work-is-happening",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
If you need a simple visual way to show users that some activity is happening, `UIActivityIndicatorView` is the easiest approach. In fact, if you create a dedicated activity indicator view controller, you can cause the whole screen to dim without much code.

To try it out, create a new Cocoa Touch Class called SpinnerViewController, then give it this code:

import UIKit

```swift
class SpinnerViewController: UIViewController {
    var spinner = UIActivityIndicatorView(style: .whiteLarge)

    override func loadView() {
        view = UIView()
        view.backgroundColor = UIColor(white: 0, alpha: 0.7)

        spinner.translatesAutoresizingMaskIntoConstraints = false
        spinner.startAnimating()
        view.addSubview(spinner)

        spinner.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        spinner.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true
    }
}
```

You can now use view controller containment to embed that inside your current view controller so that it disables your controls. Something like this ought to be enough to get you started:

```swift
func createSpinnerView() {
    let child = SpinnerViewController()

    // add the spinner view controller
    addChild(child)
    child.view.frame = view.frame
    view.addSubview(child.view)
    child.didMove(toParent: self)

    // wait two seconds to simulate some work happening
    DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
        // then remove the spinner view controller
        child.willMove(toParent: nil)
        child.view.removeFromSuperview()
        child.removeFromParent()
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-configure-core-data-to-work-with-swiftui">How to configure Core Data to work with SwiftUI 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-show-a-map-view">How to show a Map view 
/example-code/language/how-to-detect-when-the-system-is-under-pressure-and-you-should-reduce-your-work">How to detect when the system is under pressure and you should reduce your work 
/quick-start/swiftui/how-to-show-annotations-in-a-map-view">How to show annotations in a Map view</a>
-->

:::

---

<TagLinks />