---
lang: ko-KR
title: "What's the difference between UIWebView and WKWebView"
description: "Article(s) > What's the difference between UIWebView and WKWebView"
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
      content: "Article(s) > What's the difference between UIWebView and WKWebView"
    - property: og:description
      content: "What's the difference between UIWebView and WKWebView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview.html
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
  "title": "What's the difference between UIWebView and WKWebView | WKWebView - free Swift example code",
  "desc": "What's the difference between UIWebView and WKWebView",
  "link": "https://hackingwithswift.com/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
The `UIWebView` class has been around since iOS 2.0 as a way to show HTML content inside your app, but iOS 8.0 introduced `WKWebView` as an alternative - what's the difference?

Well, there are several differences, but two are particularly important. First, `UIWebView` is part of UIKit, and thus is available to your apps as standard. You don't need to import anything – it's just there. This also means it's available inside Interface Builder, so you can drag and drop web view into your designs.

Second, `WKWebView` is run in a separate process to your app so that it can draw on native Safari JavaScript optimizations. This means `WKWebView` loads web pages faster and more efficiently than `UIWebView`, and also doesn't have as much memory overhead for you.

In iOS 8.0 `WKWebView` was unable to load local files, but this got fixed in iOS 9.0. The main reason to use `UIWebView` nowadays is for access to older features such as "Scale pages to fit" - this is not available in `WKWebView`.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView 
/example-code/uikit/how-to-stop-users-selecting-text-in-a-uiwebview-or-wkwebview">How to stop users selecting text in a UIWebView or WKWebView</a>
-->

:::

---

<TagLinks />