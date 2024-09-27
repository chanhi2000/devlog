---
lang: ko-KR
title: "How to save a string to a file on disk with write(to:)"
description: "Article(s) > How to save a string to a file on disk with write(to:)"
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
      content: "Article(s) > How to save a string to a file on disk with write(to:)"
    - property: og:description
      content: "How to save a string to a file on disk with write(to:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto.html
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
  "title": "How to save a string to a file on disk with write(to:) | Strings - free Swift example code",
  "desc": "How to save a string to a file on disk with write(to:)",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
All strings have a `write(to:)` method that lets you save the contents of the string to disk. You need to provide a filename to write to, plus two more parameters: whether the write should be atomic, and what string encoding to use. The second parameter should nearly always be `true` because it avoids concurrency problems. The third parameter should nearly always be `String.Encoding.utf8`, which is pretty much the standard for reading and writing text.

Be warned: writing a string to disk can throw an exception, so you need to catch any errors and warn the user.

Here's the code:

```swift
let str = "Super long string here"
let filename = getDocumentsDirectory().appendingPathComponent("output.txt")

do {
    try str.write(to: filename, atomically: true, encoding: String.Encoding.utf8)
} catch {
    // failed to write file – bad permissions, bad filename, missing permissions, or more likely it can't be converted to the encoding
}
```

That code uses a helper function called `getDocumentsDirectory()`, which finds the path to where you can save your app's files. Here it is:

```swift
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData() 
/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle">How to load a string from a file in your bundle 
/example-code/system/how-to-read-your-apps-version-from-your-infoplist-file">How to read your app’s version from your Info.plist file 
/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle">How to find the path to a file in your bundle 
/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a>
-->

:::

---

<TagLinks />