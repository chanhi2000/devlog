---
lang: ko-KR
title: "How to convert HTML to an NSAttributedString"
description: "Article(s) > How to convert HTML to an NSAttributedString"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to convert HTML to an NSAttributedString"
    - property: og:description
      content: "How to convert HTML to an NSAttributedString"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to convert HTML to an NSAttributedString | System - free Swift example code",
  "desc": "How to convert HTML to an NSAttributedString",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
You can create an `NSAttributedString` directly from HTML, including support for a wide range of formatting, using a special initializer and passing in `NSAttributedString.DocumentType.html` for your document type.

For example, given the following HTML:

```swift
let html = """
<html>
<body>
<h1>Hello, world!</h1>
</body>
</html>
"""
```

You first need to convert that string into a `Data` instance, like this:

```swift
let data = Data(html.utf8)
```

You can now create an `NSAttributedString` from that. This is a *throwing* call because you might try to convert something that isn’t valid, so we’re going to use `try?` and wrap it in `if let`:

```swift
if let attributedString = try? NSAttributedString(data: data, options: [.documentType: NSAttributedString.DocumentType.html], documentAttributes: nil) {
    yourLabel.attributedText = attributedString
}
```

-->

::: details Similar solutions…

<!--
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/system/how-to-create-rich-formatted-text-strings-using-nsattributedstring">How to create rich formatted text strings using NSAttributedString 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/example-code/system/how-to-make-tappable-links-in-nsattributedstring">How to make tappable links in NSAttributedString</a>
-->

:::

---

<TagLinks />