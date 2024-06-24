---
lang: ko-KR
title: How to stop SwiftData syncing with CloudKit
description: Article(s) > How to stop SwiftData syncing with CloudKit
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
      content: Article(s) > How to stop SwiftData syncing with CloudKit
    - property: og:description
      content: How to stop SwiftData syncing with CloudKit
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-stop-swiftdata-syncing-with-cloudkit.html
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
  "title": "How to stop SwiftData syncing with CloudKit | SwiftData by Example",
  "desc": "How to stop SwiftData syncing with CloudKit",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-stop-swiftdata-syncing-with-cloudkit", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

As soon as you enable CloudKit support for your app, SwiftData will automatically start syncing your local data with iCloud. If this isn't what you want – if you'd rather handle syncing by hand using `CKSyncEngine` or similar – then in theory you should be able to create a custom model configuration to disable automatic syncing.

**I say "in theory" because in my tests this doesn't actually work.** At the time of writing, there is no way of enabling iCloud support for your project without SwiftData automatically syncing its data there.

If this problem gets resolved, the following should work to disable iCloud syncing:

```swift
do {
    let config = ModelConfiguration(cloudKitDatabase: .none)
    container = try ModelContainer(for: Restaurant.self, configurations: config)
} catch {
    fatalError("Failed to create model container.")
}
```

That sets the CloudKit database to `.none`, which should mean no automatic syncing takes place. Again, this doesn't work at the time of writing, but hopefully that will get fixed soon enough…

---

<TagLinks />