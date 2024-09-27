---
lang: ko-KR
title: "How to resize a custom font using UIFontMetrics"
description: "Article(s) > How to resize a custom font using UIFontMetrics"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to resize a custom font using UIFontMetrics"
    - property: og:description
      content: "How to resize a custom font using UIFontMetrics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics.html
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
  "title": "How to resize a custom font using UIFontMetrics | UIKit - free Swift example code",
  "desc": "How to resize a custom font using UIFontMetrics",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
Dynamic Type allows developers to adjust the size of in-app text based on user accessibility preferences, but if you use custom fonts it’s easy to forget to add support.

To combine custom fonts with Dynamic Type, you need to use `UIFontMetrics`. You create instances of this class by specifying what type of content you want to measure – e.g. headline text or body text – and once that’s done you can pass it a font and ask it to provide a scaled font back. This converts your custom font and size into a scaled font suitable for the user’s preferences.

Here’s an example in code:

```swift
if let font = UIFont(name: "Helvetica", size: 72) {
    let fontMetrics = UIFontMetrics(forTextStyle: .headline)
    label.font = fontMetrics.scaledFont(for: font)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font 
/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content 
/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text">How to use Dynamic Type to resize your app's text 
/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller">How to let users choose a font with UIFontPickerViewController 
/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a>
-->

:::

---

<TagLinks />