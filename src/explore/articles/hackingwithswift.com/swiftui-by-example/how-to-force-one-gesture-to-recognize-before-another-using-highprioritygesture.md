---
lang: ko-KR
title: How to force one gesture to recognize before another using highPriorityGesture()
description: Article(s) > How to force one gesture to recognize before another using highPriorityGesture()
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
      content: Article(s) > How to force one gesture to recognize before another using highPriorityGesture()
    - property: og:description
      content: How to force one gesture to recognize before another using highPriorityGesture()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.html
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
  "title": "How to force one gesture to recognize before another using highPriorityGesture() | SwiftUI by Example",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you have one SwiftUI view inside another, and both have the same gesture recognizer, the system will always trigger the recognizer on the child before the parent. You can change this behavior by using `highPriorityGesture()`, which will force the system to prioritize one gesture over another.

For example, we could write some code to place a circle inside a `VStack`, giving both a simple tap gesture action. In this situation the circle's gesture action will always be triggered:

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

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture-1~dark.mp4" />

If you want the `VStack` gesture to be triggered in place of the circle's, you need to replace the `onTapGesture()` modifier with `highPriorityGesture()` like this:

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
        .highPriorityGesture(
            TapGesture()
                .onEnded { _ in
                    print("VStack tapped")
                }
        )
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture-2~dark.mp4" />

Using this alternative, “VStack tapped” will always be printed because the `VStack` recognizer will always take priority over the circle's.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create gesture chains using sequenced(before:) | SwiftUI by Example",
  "desc": "How to create gesture chains using sequenced(before:)",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-gesture-chains-using-sequencedbefore.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make two gestures recognize at the same time using simultaneousGesture() | SwiftUI by Example",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a gesture recognizer to a view | SwiftUI by Example",
  "desc": "How to add a gesture recognizer to a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-gesture-recognizer-to-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force views to one side inside a stack using Spacer | SwiftUI by Example",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to mask one view with another | SwiftUI by Example",
  "desc": "How to mask one view with another",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mask-one-view-with-another.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />