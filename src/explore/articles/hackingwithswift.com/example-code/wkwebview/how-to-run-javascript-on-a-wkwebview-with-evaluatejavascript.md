---
lang: ko-KR
title: "How to run JavaScript on a WKWebView with evaluateJavaScript"
description: "Article(s) > How to run JavaScript on a WKWebView with evaluateJavaScript"
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
      content: "Article(s) > How to run JavaScript on a WKWebView with evaluateJavaScript"
    - property: og:description
      content: "How to run JavaScript on a WKWebView with evaluateJavaScript"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript.html
date: 2021-03-11
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
  "title": "How to run JavaScript on a WKWebView with evaluateJavaScript | WKWebView - free Swift example code",
  "desc": "How to run JavaScript on a WKWebView with evaluateJavaScript",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Using `evaluateJavaScript()` you can run any JavaScript in a `WKWebView` and read the result in Swift. This can be any JavaScript you want, which effectively means you can dig right into a page and pull out any kind of information you want.

Here's an example to get you started:

```swift
webView.evaluateJavaScript("document.getElementById('someElement').innerText") { (result, error) in
    if error == nil {
        print(result)
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-run-javascript-on-a-uiwebview-with-stringbyevaluatingjavascriptfrom">How to run JavaScript on a UIWebView with stringByEvaluatingJavaScript(from:) 
/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate">How to control the user interface of a WKWebView using WKUIDelegate 
/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView? 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing">How to monitor WKWebView page load progress using key-value observing</a>
-->

:::

---

<TagLinks />