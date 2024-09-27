---
lang: ko-KR
title: "How to share content with the Social framework and SLComposeViewController"
description: "Article(s) > How to share content with the Social framework and SLComposeViewController"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to share content with the Social framework and SLComposeViewController"
    - property: og:description
      content: "How to share content with the Social framework and SLComposeViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-share-content-with-the-social-framework-and-slcomposeviewcontroller.html
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
  "title": "How to share content with the Social framework and SLComposeViewController | UIKit - free Swift example code",
  "desc": "How to share content with the Social framework and SLComposeViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-share-content-with-the-social-framework-and-slcomposeviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
The `UIActivityViewController` class is the iOS way of sharing almost anything to almost anywhere, but what if you don't want to let users choose? Well, iOS has a tool for that too, although it’s part of the Social framework that get deprecated in iOS 11. That doesn’t mean you can’t use it, but it does mean at some point in the distant future Apple may withdraw it.

Start by importing the Social framework now now:

```swift
import Social
```

You can now create and present a `SLComposeViewController` that allows the user to share to Facebook like this:

```swift
if let vc = SLComposeViewController(forServiceType: SLServiceTypeFacebook) {
    vc.setInitialText("Look at this great picture!")
    vc.add(UIImage(named: "myImage.jpg")!)
    vc.add(URL(string: "https://www.hackingwithswift.com"))
    present(vc, animated: true)
}
```

That attaches initial text, an image and a URL all to that share sheet, although the user can customize the text before posting. If you want to use Twitter instead, try using `SLServiceTypeTwitter` instead.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-let-users-share-content-using-the-system-share-sheet">How to let users share content using the system share sheet 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework">How to create a peer-to-peer network using the multipeer connectivity framework 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />