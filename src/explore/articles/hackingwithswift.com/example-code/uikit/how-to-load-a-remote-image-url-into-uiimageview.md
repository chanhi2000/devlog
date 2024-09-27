---
lang: ko-KR
title: "How to load a remote image URL into UIImageView"
description: "Article(s) > How to load a remote image URL into UIImageView"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to load a remote image URL into UIImageView"
    - property: og:description
      content: "How to load a remote image URL into UIImageView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-load-a-remote-image-url-into-uiimageview.html
date: 2019-06-01
isOriginal: false
author: Paul Hudson
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to load a remote image URL into UIImageView | UIKit - free Swift example code",
  "desc": "How to load a remote image URL into UIImageView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-load-a-remote-image-url-into-uiimageview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<VidStack src="youtube/8mBexDIqkI4" />

<!-- TODO: 작성 -->

<!--
`UIImageView` is designed to load only local images, but with a little work you can make it load remote images too. To get a basic solution, add an extension to `UIImageView` that downloads image data using a GCD background thread, then converts that to a `UIImage`, and loads it back into the image view on the main thread:

```swift
extension UIImageView {
    func load(url: URL) {
        DispatchQueue.global().async { [weak self] in
            if let data = try? Data(contentsOf: url) {
                if let image = UIImage(data: data) {
                    DispatchQueue.main.async {
                        self?.image = image
                    }
                }
            }
        }
    }
}
```

Keep in mind that if you try to call that method several times on the same image view - e.g. if you’re scrolling through a table – then you’re going to hit problems, because multiple images will start downloading.

If you want *that* to work then you should subclass `UIImageView` so you can store the URL that was requested, and compare that URL inside the `load()` function to make sure it hasn’t been changed in the time between starting the fetch and loading the image. But if you’re that serious, I would suggest using something like SDWebImage instead: <a href="https://github.com/rs/SDWebImage">https://github.com/rs/SDWebImage</a>.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-load-a-remote-image-from-a-url">How to load a remote image from a URL 
/example-code/strings/how-to-load-a-string-from-a-website-url">How to load a string from a website URL 
/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames">How to convert a string to a safe format for URL slugs and filenames 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/system/how-to-make-your-app-open-with-a-custom-url-scheme">How to make your app open with a custom URL scheme</a>
-->

:::

---

<TagLinks />