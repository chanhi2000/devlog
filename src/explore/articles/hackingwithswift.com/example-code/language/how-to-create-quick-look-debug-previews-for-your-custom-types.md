---
lang: ko-KR
title: "How to create Quick Look debug previews for your custom types"
description: "Article(s) > How to create Quick Look debug previews for your custom types"
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
      content: "Article(s) > How to create Quick Look debug previews for your custom types"
    - property: og:description
      content: "How to create Quick Look debug previews for your custom types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create Quick Look debug previews for your custom types | Language - free Swift example code",
  "desc": "How to create Quick Look debug previews for your custom types",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Xcode’s Quick Look debugging allows us to visually preview the value of our types, and is capable of showing numbers, strings, attributed strings, colors, images, PDFs, Bezier paths, and more.

By default your custom types don’t have a Quick Look preview, so you won’t see anything useful. But if you add the `debugQuickLookObject()` method to your type then you can return something you want from there to have it show up in Xcode:

```swift
class User {
    var name = "Duane Dibbley"
    var age = 28

    @objc func debugQuickLookObject() -> Any? {
        return "My name is \(name) and I'm \(age)."
    }
}
```

That will show a string inside Xcode, but you could also format the string with attributes, create an image of your game board, and so on.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-use-state-inside-swiftui-previews-using-previewable">How to use @State inside SwiftUI previews using @Previewable 
/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet 
/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request</a>
-->

:::

---

<TagLinks />