---
lang: ko-KR
title: How to read the Digital Crown on watchOS using digitalCrownRotation()
description: Article(s) > How to read the Digital Crown on watchOS using digitalCrownRotation()
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
      content: Article(s) > How to read the Digital Crown on watchOS using digitalCrownRotation()
    - property: og:description
      content: How to read the Digital Crown on watchOS using digitalCrownRotation()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation.html
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
  "title": "How to read the Digital Crown on watchOS using digitalCrownRotation() | SwiftUI by Example",
  "desc": "How to read the Digital Crown on watchOS using digitalCrownRotation()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI exposes the Digital Crown to our app with two modifiers, both of which must be used in order to use the crown as input for our app. The first is `focusable()`, which should be true when you want the view in question to be able to receive Digital Crown updates, and `digitalCrownRotation()`, which creates a binding between the Digital Crown and a property of your choosing.

Here’s a trivial example to get you started:

```swift
struct ContentView: View {
    @State var scrollAmount = 0.0

    var body: some View {
        Text("Scroll: \(scrollAmount)")
            .focusable(true)
            .digitalCrownRotation($scrollAmount)
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation-1~dark.mp4" />

That will scroll from negative infinity to plus infinity, showing the current scroll value in a text view.

::: tip

If you put `focusable()` after `digitalCrownRotation()` you’ll find it no longer works.

:::

The `digitalCrownRotation()` modifier has a couple of other forms to give you more control over how it behaves. For example, the longest variety lets us:

1. `from` and `through` set a range for the scroll.
2. `by` sets a step amount, controlling how much to change each time the crown turns
3. `sensitivity` determines how much the crown needs to be moved to trigger a change
4. `isContinuous` determines whether the value wraps around when it reaches the minimum or maximum, or whether it just stops at those bounds.
5. `isHapticFeedbackEnabled` determines whether haptic feedback is triggered on turns.

For example, this modifier steps through from 1 through 5 by 0.1 increments, with a low sensitivity, wrapping around from start to finish, with haptic feedback:

```swift
.digitalCrownRotation($scrollAmount, from: 1, through: 5, by: 0.1, sensitivity: .low, isContinuous: true, isHapticFeedbackEnabled: true)
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to make carousel lists on watchOS | SwiftUI by Example",
  "desc": "How to make carousel lists on watchOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-carousel-lists-on-watchos.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a date picker and read values from it | SwiftUI by Example",
  "desc": "How to create a date picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to make VoiceOver read characters individually | SwiftUI by Example",
  "desc": "How to make VoiceOver read characters individually",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-voiceover-read-characters-individually.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a segmented control and read values from it | SwiftUI by Example",
  "desc": "How to create a segmented control and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the red, green, and blue values from a Color | SwiftUI by Example",
  "desc": "How to read the red, green, and blue values from a Color",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-red-green-and-blue-values-from-a-color.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />