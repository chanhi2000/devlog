---
lang: ko-KR
title: How to sync SwiftData with iCloud
description: Article(s) > How to sync SwiftData with iCloud
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to sync SwiftData with iCloud
    - property: og:description
      content: How to sync SwiftData with iCloud
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-sync-swiftdata-with-icloud.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to sync SwiftData with iCloud | SwiftData by Example",
  "desc": "How to sync SwiftData with iCloud",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-sync-swiftdata-with-icloud", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData comes with built-in support for iCloud syncing using CloudKit. It's absurdly easy to use – literally zero code required in some situations – but it does *not* support the public or shared database.

::: important

If you need to use the public or shared database, you need to use `NSPersistentCloudKitContainer` either by itself or with SwiftData coexistence.

:::

If you want to sync your app's data to iCloud, go to the Signing & Capabilities settings for your app's target, then:

- Add the iCloud capability.
- Select CloudKit from its options.
- Press <FontIcon icon="iconfont icon-select"/>`[+]` to add a new CloudKit container, or select one of your existing ones.
- Add the Background Modes capability.
- Check the box "Remote Notifications" checkbox from its options.

…and that's it: your app is now configured to sync all its data with iCloud.

::: tip

Although you can attempt to test iCloud support in the simulator, I've found it rarely works well – it's much better to test on a real device.

:::

Although the configuration is complete, you *might* need to make some changes to your SwiftData models because CloudKit has a few very specific requirements. Annoyingly, if you don't follow these requirements your iCloud sync will silently fail, so here they are:

1. You cannot use `@Attribute(.unique)` on any property you want to sync to CloudKit.
2. All properties must either have default values or be marked as optional, alongside their initializer.
3. All relationships must be marked optional. This is Particularly Annoying™, but it's a requirement so there's not much we can do.

As long as you make those changes for all your models, they will sync to CloudKit automatically. If your user later deletes your app from their device then reinstalls it, SwiftData will automatically fetch their old data from iCloud and sync it locally too.

When working with CloudKit, you're likely to find Apple's CloudKit Dashboard a useful resource for seeing how CloudKit stores your data. You can find it [<FontIcon icon="fa-brands fa-apple"/>here](https://icloud.developer.apple.com/dashboard).


---

<TagLinks />