---
lang: ko-KR
title: "How to use Dynamic Type to resize your app's text"
description: "Article(s) > How to use Dynamic Type to resize your app's text"
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
      content: "Article(s) > How to use Dynamic Type to resize your app's text"
    - property: og:description
      content: "How to use Dynamic Type to resize your app's text"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text.html
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
  "title": "How to use Dynamic Type to resize your app's text | UIKit - free Swift example code",
  "desc": "How to use Dynamic Type to resize your app's text",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Ever since iOS 7.0 users can set a system-wide preferred font size for all apps, but many programmers ignore this setting much to user's annoyance. You're not one of *those* developers, are you? Of course not! So here's how to honor a user's font settings using `UIFont`:

```swift
let headlineFont = UIFont.preferredFont(forTextStyle: .headline)
let subheadFont = UIFont.preferredFont(forTextStyle: .subheadline)
```

And that's it! This technology is called Dynamic Type, and it's powerful because that code will return correctly sized fonts for the user's preference, which means your app's text will shrink or grow as needed.

Note that it is technically possible for users to change their Dynamic Type setting while your app is running. If you want to cover this corner case, use `NotificationCenter` to subscribe to the `UIContentSizeCategoryDidChange` notification then refresh your user interface if you receive it.
-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content 
/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics 
/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a>
-->

:::

---

<TagLinks />