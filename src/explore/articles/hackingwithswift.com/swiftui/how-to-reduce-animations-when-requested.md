---
lang: ko-KR
title: How to reduce animations when requested
description: Article(s) > How to reduce animations when requested
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
      content: Article(s) > How to reduce animations when requested
    - property: og:description
      content: How to reduce animations when requested
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-reduce-animations-when-requested.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to reduce animations when requested | SwiftUI by Example",
  "desc": "How to reduce animations when requested",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-reduce-animations-when-requested",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `withAnimation()` function makes it easy to perform custom animations on our views, but it doesn’t respect the “Reduce Motion” accessibility setting and so might make your apps hard to use for many people.

If you want to use `withAnimation()` while also honoring that setting, I recommend you add a global function like this one:

```swift
func withOptionalAnimation<Result>(_ animation: Animation? = .default, _ body: () throws -> Result) rethrows -> Result {
    if UIAccessibility.isReduceMotionEnabled {
        return try body()
    } else {
        return try withAnimation(animation, body)
    }
}
```

That automatically checks whether Reduce Motion is enabled every time the animation is triggered, and disables it for users who have specifically requested less animation. 

In case you were wondering, `withAnimation()` is also a global function – a function that sits outside of any other type – so this new withOptionalAnimation()` function will behave the same.

So, you can use it wherever you would use `withAnimation()`, like this:

```swift
struct ContentView: View {
    @State private var scale = 1.0

    var body: some View {
        Text("Hello, World!")
            .scaleEffect(scale)
            .onTapGesture {
                withOptionalAnimation {
                    scale *= 1.5
                }
            }
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-reduce-animations-when-requested-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to detect the Reduce Motion accessibility setting | SwiftUI by Example",
  "desc": "How to detect the Reduce Motion accessibility setting",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-reduce-motion-accessibility-setting.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to use decorative images to reduce screen reader clutter | SwiftUI by Example",
  "desc": "How to use decorative images to reduce screen reader clutter",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create basic animations | SwiftUI by Example",
  "desc": "How to create basic animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-basic-animations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to override animations with transactions | SwiftUI by Example",
  "desc": "How to override animations with transactions",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-override-animations-with-transactions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-step-animations-using-phase-animators.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />