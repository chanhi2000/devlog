---
lang: ko-KR
title: "How to detect when the system is under pressure and you should reduce your work"
description: "Article(s) > How to detect when the system is under pressure and you should reduce your work"
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
      content: "Article(s) > How to detect when the system is under pressure and you should reduce your work"
    - property: og:description
      content: "How to detect when the system is under pressure and you should reduce your work"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-detect-when-the-system-is-under-pressure-and-you-should-reduce-your-work.html
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
  "title": "How to detect when the system is under pressure and you should reduce your work | Language - free Swift example code",
  "desc": "How to detect when the system is under pressure and you should reduce your work",
  "link": "https://hackingwithswift.com/example-code/language/how-to-detect-when-the-system-is-under-pressure-and-you-should-reduce-your-work",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
You can – and should – read the thermal state of your device before doing any intensive work, because if the system is already under pressure you might find your app becomes unresponsive, even with basic things like animations.

You can read the current thermal state using `ProcessInfo.processInfo.thermalState`, which has four values:

- When it’s `.nominal` you can proceed as normal and do all the work you want.
<li>When it’s `.fair` you should consider delaying any work that isn’t visible to users.
<li>When it’s `.serious` the system is working at high capacity and you should scale back the CPU, GPU, and I/O work you do.
<li>When it’s `.critical` the system is unable to keep up with all the work that is being done, so your user interface is likely to stutter – now is a bad time to do any sort of animation.

The latter two of those are important to monitor, because users *will* notice – at `.critical` level you can expect their device to be hot to the touch, so hopefully your app isn’t the cause of that!

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />