---
lang: ko-KR
title: "How to find the path to a file in your bundle"
description: "Article(s) > How to find the path to a file in your bundle"
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
      content: "Article(s) > How to find the path to a file in your bundle"
    - property: og:description
      content: "How to find the path to a file in your bundle"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-find-the-path-to-a-file-in-your-bundle.html
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
  "title": "How to find the path to a file in your bundle | System - free Swift example code",
  "desc": "How to find the path to a file in your bundle",
  "link": "https://hackingwithswift.com/example-code/how-to-find-the-path-to-a-file-in-your-bundle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Being able to provide users with location-specific information immediately makes your app more useful, but asking for a precise location brings up a permission alert and might make them suspicious. Fortunately there's a coarse-grained way you can figure out a user's locate without asking for location permission: `Locale`.

A *locale* is a user's region setting on their device, and you can read it without asking for permission. For example, if the locale is en-US it means they speak English and are in the US; if it's fr-CA it means they speak French are in Canada. This is all wrapped up inside `Locale` and you can query various information from it, but for our simple purpose we're just going to ask what country the user is in:

```swift
let locale = Locale.current
print(locale.regionCode)
```

Now, there is a catch, but this is actually a bonus feature in my eyes: if a user travels abroad, their device will still be configured for their home country, so an American visiting France will still say "US".

Yes, that means you can't use it for location information, but actually it works out better for a lot of apps – for example, why would an American want to see distances in meters rather than miles just because they are traveling?

-->

::: details Similar solutions…

<!--
/example-code/uikit/changing-which-uitabbarcontroller-tabs-can-be-edited">Changing which UITabBarController tabs can be edited 
/quick-start/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts">How to control which NavigationSplitView column is shown in compact layouts 
/quick-start/swiftui/how-to-control-which-view-is-shown-when-your-app-launches">How to control which view is shown when your app launches 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/uikit/how-to-control-which-screen-edges-trigger-system-gestures-using-preferredscreenedgesdeferringsystemgestures">How to control which screen edges trigger system gestures using preferredScreenEdgesDeferringSystemGestures</a>
-->

:::

---

<TagLinks />