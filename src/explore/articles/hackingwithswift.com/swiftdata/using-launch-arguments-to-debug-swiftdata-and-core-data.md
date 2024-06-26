---
lang: ko-KR
title: Using launch arguments to debug SwiftData and Core Data
description: Article(s) > Using launch arguments to debug SwiftData and Core Data
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
      content: Article(s) > Using launch arguments to debug SwiftData and Core Data
    - property: og:description
      content: Using launch arguments to debug SwiftData and Core Data
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/using-launch-arguments-to-debug-swiftdata-and-core-data.html
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
  "title": "Using launch arguments to debug SwiftData and Core Data | SwiftData by Example",
  "desc": "Using launch arguments to debug SwiftData and Core Data",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/using-launch-arguments-to-debug-swiftdata-and-core-data", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

To see the SQL commands being used by SwiftData and Core Data, add the launch argument `-com.apple.CoreData.SQLDebug 1` in Xcode's scheme editor.

To do this, go to the Product menu, hold down the Option key, then click "Run…". Now select the Arguments tab, and click the + button under "Arguments Passed on Launch". This is where you should paste in the option: `-com.apple.CoreData.SQLDebug 1`.

Now when you click run you'll see a whole lot of Core Data debug information fly by in Xcode's console – and it *will* be Core Data logs, because that's what SwiftData is using behind the scenes. This is a great way to see it creating various database tables, running queries, inserting objects, and more.

There are four bonus tips here:

1. When you're finished with the launch argument, don't delete it! Instead, just uncheck its box so it remains present but disabled, which makes it easier to reactivate in the future if you need it again.
2. If you need even more information, you can use `-com.apple.CoreData.SQLDebug 3` to get vast amounts of detail about what's happening under the hood, including faults being triggered, individual model objects being created from data, and more.
3. Don't forget that you can also debug SwiftData using the Data Persistence instrument in Instruments, which reports back faults, fetches, saves, and more.
4. In the older days of Core Data, you would often want to use a second launch argument: `-com.apple.CoreData.ConcurrencyDebug 1`. This is much less relevant with SwiftData because of its support for modern Swift concurrency.

---

<TagLinks />