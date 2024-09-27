---
lang: ko-KR
title: "How to store UserDefaults options in iCloud"
description: "Article(s) > How to store UserDefaults options in iCloud"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to store UserDefaults options in iCloud"
    - property: og:description
      content: "How to store UserDefaults options in iCloud"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-store-userdefaults-options-in-icloud.html
date: 2020-02-11
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
  "title": "How to store UserDefaults options in iCloud | System - free Swift example code",
  "desc": "How to store UserDefaults options in iCloud",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-store-userdefaults-options-in-icloud",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
iOS has a built-in iCloud sync system called `NSUbiquitousKeyValueStore`, but to be honest it's pretty unpleasant to work with. Fortunately, other developers have written simple wrappers around it so that you can forget about iCloud and focus on the interesting things instead – i.e., the rest of your app.

One such example is called **MKiCloudSync** and it's <a href="https://github.com/MugunthKumar/MKiCloudSync">available from here</a>. It's open source and so easy to use you literally don't notice that it's there once you've added it to your app – it just silently syncs your `UserDefaults` values to and from iCloud.

To use it, <a href="https://github.com/MugunthKumar/MKiCloudSync">go here</a> and click Download Zip. Inside the zip file you'll find **MKiCloudSync.h** and **MKiCloudSync.m**, and you should drag them both into your Xcode project. Xcode will ask you if you want to create an Objective-C bridging header, and you should click "Create Bridging Header" - this is required because MKiCloudSync is written in Objective-C rather than Swift.

To actually use the library, open your new bridging header (it'll be called something like YourProject-Bridging-Header.h) and add this:

```swift
#import "MKiCloudSync.h"
```

Now open your <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift` file, find the `didFinishLaunchingWithOptions` method, and add this line to it:

```swift
MKiCloudSync.start(withPrefix: "sync")
```

The "sync" part is important, because chances are you won't want to sync *everything* to iCloud. With that prefix, MKiCloudSync will copy to iCloud only `UserDefaults` keys that start with `sync` – you can now choose what you want to sync just by naming your keys appropriately.

There is one final, important thing to do: you need to enable iCloud for your app. This is done inside the Capabilities tab of your target's settings – find iCloud, then flick its switch to be On.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-save-user-settings-using-userdefaults">How to save user settings using UserDefaults 
/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable 
/quick-start/swiftui/how-to-let-users-pick-options-from-a-menu">How to let users pick options from a menu 
/example-code/language/how-to-store-nscoding-data-using-codable">How to store NSCoding data using Codable 
/quick-start/swiftui/how-to-store-views-as-properties">How to store views as properties</a>
-->

:::

---

<TagLinks />