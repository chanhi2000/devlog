---
lang: ko-KR
title: "How to load a string from a website URL"
description: "Article(s) > How to load a string from a website URL"
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
      content: "Article(s) > How to load a string from a website URL"
    - property: og:description
      content: "How to load a string from a website URL"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-load-a-string-from-a-website-url.html
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
  "title": "How to load a string from a website URL | Strings - free Swift example code",
  "desc": "How to load a string from a website URL",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-load-a-string-from-a-website-url",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
It takes just a few lines of Swift code to load the contents of a website URL, but there are three things you need to be careful with:

- Creating a `URL` might fail if you pass a bad site, so you need to unwrap its optional return value.
<li>Loading a URL's contents might fail because the site might be down (for example), so it might throw an error. This means you need to wrap the call into a `do/catch` block.
<li>Accessing network data is slow, so you really want to do this on a background thread.

Here's the code:

```swift
if let url = URL(string: "https://www.hackingwithswift.com") {
    do {
        let contents = try String(contentsOf: url)
        print(contents)
    } catch {
        // contents could not be loaded
    }
} else {
    // the URL was bad!
}
```

If you want to run that on a background thread (and you really ought to!) you should either use GCD's `async()` or `performSelector(inBackground:)`.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-load-a-remote-image-from-a-url">How to load a remote image from a URL 
/example-code/uikit/how-to-load-a-remote-image-url-into-uiimageview">How to load a remote image URL into UIImageView 
/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames">How to convert a string to a safe format for URL slugs and filenames 
/example-code/strings/how-to-detect-a-url-in-a-string-using-nsdatadetector">How to detect a URL in a String using NSDataDetector 
/example-code/system/how-to-open-a-url-in-safari">How to open a URL in Safari</a>
-->

:::

---

<TagLinks />