---
lang: ko-KR
title: "How to test localization by setting a debug locale and double length pseudolanguage"
description: "Article(s) > How to test localization by setting a debug locale and double length pseudolanguage"
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
      content: "Article(s) > How to test localization by setting a debug locale and double length pseudolanguage"
    - property: og:description
      content: "How to test localization by setting a debug locale and double length pseudolanguage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-test-localization-by-setting-a-debug-locale-and-double-length-pseudolanguage.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to test localization by setting a debug locale and double length pseudolanguage | Strings - free Swift example code",
  "desc": "How to test localization by setting a debug locale and double length pseudolanguage",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-test-localization-by-setting-a-debug-locale-and-double-length-pseudolanguage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you want to check how your app works when running on devices with other languages, you have two options: you can either instruct the simulator to use a specific language where you have a localization in place, or you can have it use a special "Double length pseudolanguage" that basically acts as a stress test.

Both of these options live under the the scheme settings for your app, which you can get to by holding down Alt then going to the Product menu and clicking "Run…" – holding down Alt makes it say "Run…" rather than "Run", which is what triggers the scheme settings window.

In the scheme settings window, click the dropdown next to Application Language. You can either choose a language that you have localized to, or choose Double Length Pseudolanguage. This option effectively makes all your strings take up twice as much space on the screen, which shows you at a glance if your interface will cope with languages that have longer words than your own.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/strings/how-to-get-the-length-of-a-string">How to get the length of a string</a>
-->

:::

---

<TagLinks />