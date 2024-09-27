---
lang: ko-KR
title: "How to create rich formatted text strings using NSAttributedString"
description: "Article(s) > How to create rich formatted text strings using NSAttributedString"
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
      content: "Article(s) > How to create rich formatted text strings using NSAttributedString"
    - property: og:description
      content: "How to create rich formatted text strings using NSAttributedString"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-create-rich-formatted-text-strings-using-nsattributedstring.html
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
  "title": "How to create rich formatted text strings using NSAttributedString | System - free Swift example code",
  "desc": "How to create rich formatted text strings using NSAttributedString",
  "link": "https://hackingwithswift.com/example-code/how-to-create-rich-formatted-text-strings-using-nsattributedstring",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
Attributed strings are strings with formatting attached, which means fonts, colors, alignment, line spacing and more. They are supported in many places around iOS, which means you can assign a fully formatted string to a `UILabel` and have it look great with no further work.

Please keep in mind, when working with fonts it's preferable to use Dynamic Type where possible so that a user's font size settings are honored. The example code below creates an attributed string using the "Headline" Dynamic Type size, then colors it purple. That is then placed into a `UILabel` by setting its `attributedText` property:

```swift
let titleAttributes = [NSAttributedString.Key.font: UIFont.preferredFont(forTextStyle: .headline), NSAttributedString.Key.foregroundColor: UIColor.purple]

let titleString = NSAttributedString(string: "Read all about it!", attributes: titleAttributes)
yourLabel.attributedText = titleString
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/example-code/system/how-to-make-tappable-links-in-nsattributedstring">How to make tappable links in NSAttributedString 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a>
-->

:::

---

<TagLinks />