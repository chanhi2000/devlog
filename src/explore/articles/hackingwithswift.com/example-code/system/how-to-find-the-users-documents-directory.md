---
lang: ko-KR
title: "How to find the user's documents directory"
description: "Article(s) > How to find the user's documents directory"
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
      content: "Article(s) > How to find the user's documents directory"
    - property: og:description
      content: "How to find the user's documents directory"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-find-the-users-documents-directory.html
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
  "title": "How to find the user's documents directory | System - free Swift example code",
  "desc": "How to find the user's documents directory",
  "link": "https://hackingwithswift.com/example-code/how-to-find-the-users-documents-directory",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Every iOS app gets a slice of storage just for itself, meaning that you can read and write your app's files there without worrying about colliding with other apps. This is called the user's documents directory, and it's exposed both in code (as you'll see in a moment) and also through iTunes file sharing.

Unfortunately, the code to find the user's documents directory isn't very memorable, so I nearly always use this helpful function – and now you can too!

```swift
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    let documentsDirectory = paths[0]
    return documentsDirectory
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-read-the-contents-of-a-directory-using-filemanager">How to read the contents of a directory using FileManager 
/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller">How to detect documents using VNDocumentCameraViewController 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton">How to read user contacts with ContactAccessButton</a>
-->

:::

---

<TagLinks />