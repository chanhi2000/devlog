---
lang: ko-KR
title: "How to read the contents of a directory using FileManager"
description: "Article(s) > How to read the contents of a directory using FileManager"
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
      content: "Article(s) > How to read the contents of a directory using FileManager"
    - property: og:description
      content: "How to read the contents of a directory using FileManager"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-read-the-contents-of-a-directory-using-filemanager.html
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
  "title": "How to read the contents of a directory using FileManager | System - free Swift example code",
  "desc": "How to read the contents of a directory using FileManager",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-read-the-contents-of-a-directory-using-filemanager",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you want to work with files `FileManager` almost certainly has the answer, and it's no different in this case: it has a method called `contentsOfDirectory(atPath:)` that lists all the files in a specific directory. For example, we could have it list all the files in our app's resource directory like this:

```swift
let fm = FileManager.default
let path = Bundle.main.resourcePath!

do {
    let items = try fm.contentsOfDirectory(atPath: path)

    for item in items {
        print("Found \(item)")
    }
} catch {
    // failed to read directory – bad permissions, perhaps?
}
```

In this particular case the `try` should never fail, but you should still have the `catch` block in there just in case.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow">How to disable ScrollView clipping so contents overflow 
/example-code/system/how-to-find-the-users-documents-directory">How to find the user's documents directory 
/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background 
/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually 
/example-code/uikit/how-to-read-a-title-from-a-uipickerview-using-titleforrow">How to read a title from a UIPickerView using titleForRow</a>
-->

:::

---

<TagLinks />