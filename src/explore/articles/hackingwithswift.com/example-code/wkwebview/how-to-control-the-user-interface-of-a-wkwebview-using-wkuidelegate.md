---
lang: ko-KR
title: "How to control the user interface of a WKWebView using WKUIDelegate"
description: "Article(s) > How to control the user interface of a WKWebView using WKUIDelegate"
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
      content: "Article(s) > How to control the user interface of a WKWebView using WKUIDelegate"
    - property: og:description
      content: "How to control the user interface of a WKWebView using WKUIDelegate"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate.html
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
  "title": "How to control the user interface of a WKWebView using WKUIDelegate | WKWebView - free Swift example code",
  "desc": "How to control the user interface of a WKWebView using WKUIDelegate",
  "link": "https://hackingwithswift.com/example-code/wkwebview/how-to-control-the-user-interface-of-a-wkwebview-using-wkuidelegate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
By default `WKWebView` works sort of like Safari, albeit in a single view rather than having tabs. If you want something more advanced – being able to monitor opening and closing windows, override behavior for JavaScript user interface, and so on – then the `WKUIDelegate` protocol is for you.

First, make your view controller conform to it by adding `WKUIDelegate` to its list of protocols. Second, assign your view controller to the `uiDelegate` property of your web view:

```swift
yourWebView.uiDelegate = self
```

Finally, implement whichever of the optional methods of `WKUIDelegate` takes your interest. For example, you can make `WKWebView` show a custom alert controller when any web page uses the `alert()` JavaScript function:

```swift
func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
    let ac = UIAlertController(title: "Hey, listen!", message: message, preferredStyle: .alert)
    ac.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
    present(ac, animated: true)
    completionHandler()
}
```

There’s also `runJavaScriptConfirmPanelWithMessage` for showing confirm and deny UI, `runJavaScriptTextInputPanelWithPrompt` for requesting user text input, and so on. 

**Note:** You *must* call the completion handler. JavaScript’s alerts are blocking, which means JavaScript execution will not continue until the alert finishes. As a result, WebKit will complain if you don’t let it know when you’re done.

-->

::: details Similar solutions…

<!--
/example-code/wkwebview/how-to-control-the-sites-a-wkwebview-can-visit-using-wknavigationdelegate">How to control the sites a WKWebView can visit using WKNavigationDelegate 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView? 
/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing">How to monitor WKWebView page load progress using key-value observing 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()</a>
-->

:::

---

<TagLinks />