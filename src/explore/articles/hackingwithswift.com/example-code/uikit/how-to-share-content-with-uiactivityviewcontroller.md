---
lang: ko-KR
title: "How to share content with UIActivityViewController"
description: "Article(s) > How to share content with UIActivityViewController"
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
      content: "Article(s) > How to share content with UIActivityViewController"
    - property: og:description
      content: "How to share content with UIActivityViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-share-content-with-uiactivityviewcontroller.html
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
  "title": "How to share content with UIActivityViewController | UIKit - free Swift example code",
  "desc": "How to share content with UIActivityViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-share-content-with-uiactivityviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
Before iOS 6.0 was released there were a number of third-party libraries that tried to simplify the sharing of content, but even with those libraries in place it was still far too hard. Fortunately, Apple added `UIActivityViewController`, a class that makes sharing to any service as simple as telling it what kind of content you have.

The nice thing about `UIActivityViewController` is that it automatically takes advantage of the apps the user has installed. If they have configured Twitter, they can post tweets; if they have configured Facebook, they can post to their timeline; if they have a printer configured, they can print your images; and more. It takes no extra work from you: you just tell iOS what kind of content you want to share, and it does the rest.

Here's how you share an image:

```swift
if let image = UIImage(named: "myImage") {
    let vc = UIActivityViewController(activityItems: [image], applicationActivities: [])
    present(vc, animated: true)
}
```

And here's an example of sharing a text and an image:

```swift
let shareText = "Hello, world!"

if let image = UIImage(named: "myImage") {
    let vc = UIActivityViewController(activityItems: [shareText, image], applicationActivities: [])
    present(vc, animated: true)
}
```

If you want to share a URL to a website, make sure you wrap it up in a `URL` first.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-let-users-share-content-using-the-system-share-sheet">How to let users share content using the system share sheet 
/example-code/uikit/how-to-print-using-uiactivityviewcontroller">How to print using UIActivityViewController 
/example-code/uikit/how-to-share-content-with-the-social-framework-and-slcomposeviewcontroller">How to share content with the Social framework and SLComposeViewController 
/quick-start/swiftui/how-to-use-environmentobject-to-share-data-between-views">How to use @EnvironmentObject to share data between views 
/example-code/uikit/what-is-a-views-intrinsic-content-size">What is a view’s intrinsic content size?</a>
-->

:::

---

<TagLinks />