---
lang: ko-KR
title: How to detect the Reduce Motion accessibility setting
description: Article(s) > How to detect the Reduce Motion accessibility setting
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
      content: Article(s) > How to detect the Reduce Motion accessibility setting
    - property: og:description
      content: How to detect the Reduce Motion accessibility setting
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-reduce-motion-accessibility-setting.html
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
  "title": "How to detect the Reduce Motion accessibility setting | SwiftUI by Example",
  "desc": "How to detect the Reduce Motion accessibility setting",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-the-reduce-motion-accessibility-setting",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Many users are sensitive to animations, particularly those are large or complex. As a result, iOS has a built-in accessibility setting called Reduce Motion, which apps can read and respond to as appropriate.

In SwiftUI, this setting is exposed to us as an environment Boolean, so you should start by adding a property for it to your views:

```swift
@Environment(\.accessibilityReduceMotion) var reduceMotion
```

Now it’s down to you to decide what “reduce motion” means – should you remove your animations, or just change them to be less strong? Should you keep some important animations and just remove the ones that are for visual appeal?

For example, if you wanted a bouncy spring animation for most users, but no animation at all for users who want reduced motion, you might use an animation modifier like this one:

```swift
.animation(reduceMotion ? nil : .spring(response: 1, dampingFraction: 0.1), value: someValue) 
```

Here’s a complete example you can try:

```swift
struct ContentView: View {
    @Environment(\.accessibilityReduceMotion) var reduceMotion
    @State private var scale = 1.0

    var body: some View {
        VStack {
            Spacer()

            Circle()
                .frame(width: 20, height: 20)
                .scaleEffect(scale)
                .animation(reduceMotion ? nil : .spring(response: 1, dampingFraction: 0.1), value: scale)

            Spacer()

            Button("Increase Scale") {
                scale *= 1.5
            }
        }
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-the-reduce-motion-accessibility-setting-1~dark.mp4" />

That creates a small circle, scaling it up with a spring animation every time the button is pressed. But if the user enables Reduce Motion, the animation is removed entirely – it uses `nil` for the `animation()` modifier.

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to reduce animations when requested | SwiftUI by Example",
  "desc": "How to reduce animations when requested",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-reduce-animations-when-requested.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to use decorative images to reduce screen reader clutter | SwiftUI by Example",
  "desc": "How to use decorative images to reduce screen reader clutter",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "Introduction to accessibility with SwiftUI | SwiftUI by Example",
  "desc": "Introduction to accessibility with SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-accessibility-with-swiftui.md",
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

```component VPCard
{
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />