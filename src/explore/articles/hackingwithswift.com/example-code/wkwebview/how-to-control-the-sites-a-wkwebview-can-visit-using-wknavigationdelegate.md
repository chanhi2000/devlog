---
lang: ko-KR
title: "How to control the sites a WKWebView can visit using WKNavigationDelegate"
description: "Article(s) > How to control the sites a WKWebView can visit using WKNavigationDelegate"
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
      content: "Article(s) > How to control the sites a WKWebView can visit using WKNavigationDelegate"
    - property: og:description
      content: "How to control the sites a WKWebView can visit using WKNavigationDelegate"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate.html
date: 2019-09-19
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
  "title": "How to control the sites a WKWebView can visit using WKNavigationDelegate | WKWebView - free Swift example code",
  "desc": "How to control the sites a WKWebView can visit using WKNavigationDelegate",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
By default a `WKWebView` can navigate to any links the user selects, but it’s common to want to restrict that. It only takes three steps to accomplish this:

1. Make your view controller conform to `WKNavigationDelegate`.
<li>Assign your view controller to be your web view’s `navigationDelegate`.
<li>Implement the `decidePolicyFor` method to decide whether each URL should be allowed or denied.

Let’s try it out now. First, make your view controller conform to `WKNavigationDelegate`.

Second, set your view controller to be the `navigationDelegate` property of your web view. This might be done in `viewDidLoad()`, but you can also change the delegate dynamically. Either way, you need to use this code:

```swift
yourWebView.navigationDelegate = self
```

Finally, implement the `decidePolicyFor` method. This is the only part that takes any work: you need to pull out the host of the URL that was requested, run any checks you want to make sure it’s OK, then call the `decisionHandler()` closure with either `.allow` to allow the URL or `.cancel` to deny access.

Here’s an example to get you started:

```swift
func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
    if let host = navigationAction.request.url?.host {
        if host.contains("hackingwithswift.com") {
            decisionHandler(.allow)
            return
        }
    }

    decisionHandler(.cancel)
}
```

That code will allow navigation only to URLs that contain “hackingwithswift.com”.

-->

::: details Similar solutions…

<!--
/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate">How to control the user interface of a WKWebView using WKUIDelegate 
/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them? 
/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView? 
/example-code/wkwebview/how-to-run-javascript-on-a-wkwebview-with-evaluatejavascript">How to run JavaScript on a WKWebView with evaluateJavaScript() 
/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing">How to monitor WKWebView page load progress using key-value observing</a>
-->

:::

---

<TagLinks />