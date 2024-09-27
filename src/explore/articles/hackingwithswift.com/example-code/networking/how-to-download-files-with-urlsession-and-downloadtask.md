---
lang: ko-KR
title: "How to download files with URLSession and downloadTask()"
description: "Article(s) > How to download files with URLSession and downloadTask()"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to download files with URLSession and downloadTask()"
    - property: og:description
      content: "How to download files with URLSession and downloadTask()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-download-files-with-urlsession-and-downloadtask.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Networking - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/networking/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to download files with URLSession and downloadTask() | Networking - free Swift example code",
  "desc": "How to download files with URLSession and downloadTask()",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-download-files-with-urlsession-and-downloadtask",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
`URLSession` is designed to make network transfers as easy as possible, and a great example of that is its `downloadTask`()` method. This fetches the contents of a URL you specify, saves it to a local file, then calls a completion handler so you can manipulate the file – all in one.

To demonstrate this, here’s some code to download the source code to the apple.com homepage:

```swift
let url = URL(string: "https://www.apple.com")!

let task = URLSession.shared.downloadTask(with: url) { localURL, urlResponse, error in
    if let localURL = localURL {
        if let string = try? String(contentsOf: localURL) {
            print(string)
        }
    }
}

task.resume()
```

There are a few important things to note in there:

1. Your completion handler gets called with a local URL, which is where the data was saved locally. This is optional, so you need to unwrap it carefully.
<li>If something went wrong – e.g. if the network was down – then you’ll get an error passed to you explaining what happened.
<li>When you have created your download task you should call `resume()` on it to make it happen.
<li>You don’t need to worry about storing the download task somewhere while it happens – it’s being tracked by the shared `URLSession` on your behalf.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />