---
lang: ko-KR
title: "How to subclass UIApplication using UIApplicationMain"
description: "Article(s) > How to subclass UIApplication using UIApplicationMain"
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
      content: "Article(s) > How to subclass UIApplication using UIApplicationMain"
    - property: og:description
      content: "How to subclass UIApplication using UIApplicationMain"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-subclass-uiapplication-using-uiapplicationmain.html
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
  "title": "How to subclass UIApplication using UIApplicationMain | UIKit - free Swift example code",
  "desc": "How to subclass UIApplication using UIApplicationMain",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-subclass-uiapplication-using-uiapplicationmain",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
Subclassing `UIApplication` allows you to override functionality such as opening URLs or changing your icon, but it’s a non-trivial task in Swift because of the `@UIApplicationMain` attribute.

If you look in your <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift` file you’ll see `@UIApplicationMain` appears directly before `class AppDelegate` – this is a special attribute that tells the Swift compiler to generate code to launch your application using default settings.

**You need to delete `@UIApplicationMain` from that file.** We’re going to replace it with custom code.

With that line deleted, create a new Cocoa Touch Class called “MyApplication”, making it subclass from `UIApplication`. We’re going to make our class override the `open()` method so that no part of our application can open URLs outside of <a href="https://www.hackingwithswift.com">https://www.hackingwithswift.com</a>:

```swift
import UIKit

class MyApplication: UIApplication {
    override func open(_ url: URL, options: [UIApplication.OpenExternalURLOptionsKey : Any] = [:], completionHandler completion: ((Bool) -> Void)? = nil) {
        if let host = url.host, host.contains("hackingwithswift.com") {
            super.open(url, options: options, completionHandler: completion)
        } else {
            completion?(false)
        }
    }
}
```

The third and final step is to create a file called <FontIcon icon="fa-brands fa-swift"/>`main.swift` that is responsible for launching our application. The name is important: it must be exactly <FontIcon icon="fa-brands fa-swift"/>`main.swift`, because that’s the only file that can contain top-level code – i.e., code that isn’t wrapped inside a function, class, struct, or enum.

So, create a new Swift file called <FontIcon icon="fa-brands fa-swift"/>`main.swift`, and give it this code:

```swift
import UIKit

UIApplicationMain(
    CommandLine.argc,
    CommandLine.unsafeArgv, 
    NSStringFromClass(MyApplication.self),
    NSStringFromClass(AppDelegate.self)
)
```

You have now subclassed `UIApplication` and can add any more customizations you need. It should go without saying that dumping code into a `UIApplication` subclass is no better than dumping code into `AppDelegate`.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />