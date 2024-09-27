---
lang: ko-KR
title: "How to identify your Auto Layout constraints"
description: "Article(s) > How to identify your Auto Layout constraints"
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
      content: "Article(s) > How to identify your Auto Layout constraints"
    - property: og:description
      content: "How to identify your Auto Layout constraints"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-identify-your-auto-layout-constraints.html
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
  "title": "How to identify your Auto Layout constraints | UIKit - free Swift example code",
  "desc": "How to identify your Auto Layout constraints",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-identify-your-auto-layout-constraints",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Auto Layout constraints a powerful way of expressing your layouts, but when they go wrong they can be hard to debug. Fortunately, all constraints have a built-in `identifier` property that you can use to identify them uniquely.

It’s an optional string so you don’t have to provide anything, but if you *do* set an identifier you’ll find it much easier to see where your constraints are going wrong because Xcode will use those identifiers in its debug logs.

If you create your constraints in code, just set the `identifier` property to a string as you go – “Main Title Horizontal Center” for example. If you use Interface Builder, you can select any constraint and you’ll see a dedicated “Identifier” text property you can fill in.

There is literally no reason not to add identifiers to your constraints – they don’t affect your layouts at all, but they do make layout debugging significantly easier!

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat">How to create Auto Layout constraints in code: constraints(withVisualFormat:) 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/example-code/uikit/how-to-activate-multiple-auto-layout-constraints-using-activate">How to activate multiple Auto Layout constraints using activate() 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/system/how-to-identify-an-ios-device-uniquely-with-identifierforvendor">How to identify an iOS device uniquely with identifierForVendor</a>
-->

:::

---

<TagLinks />