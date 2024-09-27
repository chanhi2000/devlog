---
lang: ko-KR
title: "How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()"
description: "Article(s) > How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()"
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
      content: "Article(s) > How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()"
    - property: og:description
      content: "How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring.html
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
  "title": "How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() | UIKit - free Swift example code",
  "desc": "How to load a HTML string into a WKWebView or UIWebView: loadHTMLString()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If you want to generate HTML locally and show it inside your app, it's easy to do in both `UIWebView` and `WKWebView`. First, here's the code for `UIWebView`:

```swift
let webView1 = UIWebView()
webView1.loadHTMLString("<html><body><p>Hello!</p></body></html>", baseURL: nil)
```

And now here's the code for `WKWebView`:

```swift
let webView2 = WKWebView()
webView2.loadHTMLString("<html><body><p>Hello!</p></body></html>", baseURL: nil)
```

If you want to load resources from a particular place, such as JavaScript and CSS files, you can set the `baseURL` parameter to any `URL`. This could, for example, be the resource path for your app bundle, which would allow you to use local images and other assets alongside your generated HTML.

-->

::: details Similar solutions…

<!--
/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView 
/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview">What's the difference between UIWebView and WKWebView? 
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor 
/example-code/uikit/how-to-stop-users-selecting-text-in-a-uiwebview-or-wkwebview">How to stop users selecting text in a UIWebView or WKWebView 
/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString</a>
-->

:::

---

<TagLinks />