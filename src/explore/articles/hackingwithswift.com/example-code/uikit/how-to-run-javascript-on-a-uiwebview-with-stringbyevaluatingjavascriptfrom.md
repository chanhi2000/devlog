---
lang: ko-KR
title: "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
description: "Article(s) > How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
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
      content: "Article(s) > How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
    - property: og:description
      content: "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-run-javascript-on-a-uiwebview-with-stringbyevaluatingjavascriptfrom.html
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
  "title": "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:) | UIKit - free Swift example code",
  "desc": "How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-run-javascript-on-a-uiwebview-with-stringbyevaluatingjavascriptfrom",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If you’re still using the deprecated `UIWebView`, you can run custom JavaScript on it using the method `stringByEvaluatingJavaScript(from:)`. The method returns an optional string, which means if the code returns a value you'll get it back otherwise you'll get back `nil`.

Here's an example that pulls out the current page's title:

```swift
let pageTitle = yourUIWebView.stringByEvaluatingJavaScript(from: "document.title")
```

Note: if you're using a `WKWebView` you can use its `title` property directly to get the same thing.

-->

::: details Similar solutions…

<!--
/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript">How to run JavaScript on a WKWebView with evaluateJavaScript() 
/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView? 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView 
/example-code/uikit/how-to-stop-users-selecting-text-in-a-uiwebview-or-wkwebview">How to stop users selecting text in a UIWebView or WKWebView</a>
-->

:::

---

<TagLinks />