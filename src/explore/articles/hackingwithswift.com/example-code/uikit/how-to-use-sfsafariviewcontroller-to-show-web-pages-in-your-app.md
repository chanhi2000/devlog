---
lang: ko-KR
title: "How to use SFSafariViewController to show web pages in your app"
description: "Article(s) > How to use SFSafariViewController to show web pages in your app"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use SFSafariViewController to show web pages in your app"
    - property: og:description
      content: "How to use SFSafariViewController to show web pages in your app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app.html
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
  "title": "How to use SFSafariViewController to show web pages in your app | UIKit - free Swift example code",
  "desc": "How to use SFSafariViewController to show web pages in your app",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
If a user clicks a web link in your app, you used to have two options before iOS 9.0 came along: exit your app and launch the web page in Safari, or bring up a new web view controller that you've designed, along with various user interface controls. Exiting your app is rarely what users want, so unsurprisingly lots of app ended up creating mini-Safari experiences to browse inside their app.

As of iOS 9.0, Apple allows you to embed Safari right into your app, which means you get its great user interface, you get its access to stored user data, and you even get Reader Mode right out of the box. To get started, import the SafariServices framework into your view controller, like this:

```swift
import SafariServices
```

Now make your view controller conform to the `SFSafariViewControllerDelegate` protocol, then give it a try:

```swift
let urlString = "https://www.hackingwithswift.com"

if let url = URL(string: urlString) {
    let vc = SFSafariViewController(url: url, entersReaderIfAvailable: true)
    vc.delegate = self

    present(vc, animated: true)
}
```

That's all it takes to launch Safari inside your app now – cool, huh? We need to assign ourselves as the delegate of the Safari view controller because when the user taps "Done" inside Safari we should dismiss it and take any other appropriate action.

To do that, add this method to your view controller:

```swift
func safariViewControllerDidFinish(_ controller: SFSafariViewController) {
    dismiss(animated: true)
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle">How to create scrolling pages of content using tabViewStyle() 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/quick-start/swiftui/how-to-open-web-links-in-safari">How to open web links in Safari 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />