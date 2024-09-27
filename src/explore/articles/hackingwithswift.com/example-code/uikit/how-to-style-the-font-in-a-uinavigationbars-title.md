---
lang: ko-KR
title: "How to style the font in a UINavigationBar's title"
description: "Article(s) > How to style the font in a UINavigationBar's title"
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
      content: "Article(s) > How to style the font in a UINavigationBar's title"
    - property: og:description
      content: "How to style the font in a UINavigationBar's title"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title.html
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
  "title": "How to style the font in a UINavigationBar's title | UIKit - free Swift example code",
  "desc": "How to style the font in a UINavigationBar's title",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
If you're setting title's in a navigation bar, you can customize the font, size and color of those titles by adjusting the `titleTextAttributes` attribute for your navigation bar.

To do this on a single bar just set it directly whenever you want to; to change all bars, set it inside your app delegate using the appearance proxy for `UINavigationBar` so that it kicks in before the first bar is loaded.

Here's an example that makes title text be 24-point Georgia Bold in red:

```swift
let attrs = [
    NSAttributedString.Key.foregroundColor: UIColor.red,
    NSAttributedString.Key.font: UIFont(name: "Georgia-Bold", size: 24)!
]

UINavigationBar.appearance().titleTextAttributes = attrs
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-set-a-custom-title-view-in-a-uinavigationbar">How to set a custom title view in a UINavigationBar 
/example-code/uikit/how-to-give-a-uinavigationbar-a-background-image-setbackgroundimage">How to give a UINavigationBar a background image: setBackgroundImage() 
/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller">How to let users choose a font with UIFontPickerViewController 
/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font 
/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics</a>
-->

:::

---

<TagLinks />