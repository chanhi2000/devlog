---
lang: ko-KR
title: How to read tap and double-tap gestures
description: Article(s) > How to read tap and double-tap gestures
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to read tap and double-tap gestures
    - property: og:description
      content: How to read tap and double-tap gestures
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-tap-and-double-tap-gestures.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to read tap and double-tap gestures | SwiftUI by Example",
  "desc": "How to read tap and double-tap gestures",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Any SwiftUI view can have tap actions attached, and you can specify how many taps should be received before the action is triggered.

For example, this creates a text view that will print a message when tapped:

```swift
Text("Tap me!")
    .onTapGesture {
        print("Tapped!")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-read-tap-and-double-tap-gestures-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures-1~dark.mp4" />

And this creates an image view that will print a message when double tapped:

```swift
Image("singapore")
    .onTapGesture(count: 2) {
        print("Double tapped!")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-read-tap-and-double-tap-gestures-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-tap-and-double-tap-gestures-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make two gestures recognize at the same time using simultaneousGesture() | SwiftUI by Example",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect shake gestures | SwiftUI by Example",
  "desc": "How to detect shake gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-shake-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to stop system gestures from interfering with your own | SwiftUI by Example",
  "desc": "How to stop system gestures from interfering with your own",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stop-system-gestures-from-interfering-with-your-own.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />