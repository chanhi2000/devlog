---
lang: ko-KR
title: "How to load a string from a file in your bundle"
description: "Article(s) > How to load a string from a file in your bundle"
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
      content: "Article(s) > How to load a string from a file in your bundle"
    - property: og:description
      content: "How to load a string from a file in your bundle"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle.html
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
  "title": "How to load a string from a file in your bundle | Strings - free Swift example code",
  "desc": "How to load a string from a file in your bundle",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you have an important text file built into your app bundle that want to load it at runtime fact, `String` has an initializer just for this purpose. It’s called `contentsOfFile`, and here it is in action:

```swift
if let filepath = Bundle.main.path(forResource: "example", ofType: "txt") {
    do {
        let contents = try String(contentsOfFile: filepath)
        print(contents)
    } catch {
        // contents could not be loaded
    }
} else {
    // example.txt not found!
}
```

That code loads a file called **example.txt** into a string called `contents`.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle">How to find the path to a file in your bundle 
/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a>
-->

:::

---

<TagLinks />