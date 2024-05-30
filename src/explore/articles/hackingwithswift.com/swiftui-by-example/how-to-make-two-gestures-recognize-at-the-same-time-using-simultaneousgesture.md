---
lang: ko-KR
title: How to make two gestures recognize at the same time using simultaneousGesture()
description: Article(s) > How to make two gestures recognize at the same time using simultaneousGesture()
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
      content: Article(s) > How to make two gestures recognize at the same time using simultaneousGesture()
    - property: og:description
      content: How to make two gestures recognize at the same time using simultaneousGesture()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make two gestures recognize at the same time using simultaneousGesture() | SwiftUI by Example",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default SwiftUI will trigger only one gesture recognizer action at a time, which is usually whichever one is the front-most view in your hierarchy – it would prefer a recognizer on a child view rather than its parent, for example. If you want to override this behavior to make two gestures trigger at once, you should use the `simultaneousGesture()` when creating your second and subsequent gestures.

For example, in this code we have two tap gestures, but SwiftUI will execute only the one attached to the circle because it's the child of the `VStack`:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Circle()
                .fill(.red)
                .frame(width: 200, height: 200)
                .onTapGesture {
                    print("Circle tapped")
                }
        }
        .onTapGesture {
            print("VStack tapped")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-1~dark.mp4" />

If you want *both* gestures to trigger – i.e., if you want both “Circle tapped” and “VStack tapped” to be printed – you should use `simultaneousGesture()` on the `VStack` like this:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Circle()
                .fill(.red)
                .frame(width: 200, height: 200)
                .onTapGesture {
                    print("Circle tapped")
                }
        }
        .simultaneousGesture(
            TapGesture()
                .onEnded { _ in
                    print("VStack tapped")
                }
        )
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture-2~dark.mp4" />

::: note

You should use `simultaneousGesture()` with the gesture that would otherwise not be executed otherwise it won't work. So, in our previous example using `simultaneousGesture()` with the circle and a simple `onTapGesture()` with the `VStack` will still print just “Circle tapped” – it won't do what you expect.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to make two views the same width or height | SwiftUI by Example",
  "desc": "How to make two views the same width or height",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-views-the-same-width-or-height.html",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to fill and stroke shapes at the same time | SwiftUI by Example",
  "desc": "How to fill and stroke shapes at the same time",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fill-and-stroke-shapes-at-the-same-time.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force one gesture to recognize before another using highPriorityGesture() | SwiftUI by Example",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to stop system gestures from interfering with your own | SwiftUI by Example",
  "desc": "How to stop system gestures from interfering with your own",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stop-system-gestures-from-interfering-with-your-own.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect shake gestures | SwiftUI by Example",
  "desc": "How to detect shake gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-shake-gestures.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />