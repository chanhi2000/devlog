---
lang: ko-KR
title: "How to monitor WKWebView page load progress using key-value observing"
description: "Article(s) > How to monitor WKWebView page load progress using key-value observing"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to monitor WKWebView page load progress using key-value observing"
    - property: og:description
      content: "How to monitor WKWebView page load progress using key-value observing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "WKWebView - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/wkwebview/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to monitor WKWebView page load progress using key-value observing | WKWebView - free Swift example code",
  "desc": "How to monitor WKWebView page load progress using key-value observing",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
iOS often uses a delegate system to report important changes, such as when a table view cell has been tapped or when a web page has finished loading. But the delegate system only goes so far, and if you want fine-grained detailed information sometimes you need to turn to KVO, or "key-value observing."

In the case of seeing how much of a page has loaded in `WKWebView`, KVO is exactly what you need: each web view has a property called `estimatedProgress`, and you can be asked to be notified when that value has changed.

First, create a progress view that will be used to show the loading progress:

```swift
progressView = UIProgressView(progressViewStyle: .default)
progressView.sizeToFit()
```

You can place that anywhere you like. Now add the current view controller as an observer of the `estimatedProgress` property of your `WKWebView`, like this:

```swift
webView.addObserver(self, forKeyPath: #keyPath(WKWebView.estimatedProgress), options: .new, context: nil)
```

The `.new` in that line of code means "when the value changes, tell me the new value."

Finally, implement the `observeValue(forKeyPath:)` method in your view controller, updating the progress view with the estimated progress from the web view, like this:

```swift
override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
    if keyPath == "estimatedProgress" {
        progressView.progress = Float(webView.estimatedProgress)
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects 
/quick-start/swiftui/how-to-show-indeterminate-progress-using-progressview">How to show indeterminate progress using ProgressView 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView 
/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController</a>
-->

:::

---

<TagLinks />