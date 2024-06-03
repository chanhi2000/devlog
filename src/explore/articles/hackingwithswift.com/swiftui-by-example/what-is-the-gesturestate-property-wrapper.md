---
lang: ko-KR
title: What is the @GestureState property wrapper?
description: Article(s) > What is the @GestureState property wrapper?
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
      content: Article(s) > What is the @GestureState property wrapper?
    - property: og:description
      content: What is the @GestureState property wrapper?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-gesturestate-property-wrapper.html
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
  "title": "What is the @GestureState property wrapper? | SwiftUI by Example",
  "desc": "What is the @GestureState property wrapper?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/what-is-the-gesturestate-property-wrapper",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us a specific property wrapper for tracking the state of gestures, helpfully called `@GestureState`. Although you can accomplish the same using a simple `@State` property wrapper, `@GestureState` comes with the added ability that it automatically sets your property back to its initial value when the gesture ends, and it’s usually significantly *faster* than using a simple `@State` as well.

For example, we might want to create a gesture that can drag views around. To do that, we’d first need to create an `@GestureState` property to store how much the view has been moved, like this:

```swift
@GestureState var dragAmount = CGSize.zero
```

That has the default value of `CGSize.zero`, which means when the gesture ends it will return to that value automatically.

Next, we would attach an `offset()` modifier so that our view gets moved around by whatever value is in `dragAmount`:

```swift
Image("niagara-falls")
    .offset(dragAmount)
```

Finally, we would attach a gesture that is bound to our `dragAmount` property, like this:

```swift
Image("niagara-falls")
    .offset(dragAmount)
    .gesture(
        DragGesture().updating($dragAmount) { value, state, transaction in
            state = value.translation
        }
    )
```

There’s quite a lot of code in there, so let’s unpack it:

1. The `DragGesture().updating()` code creates a new drag gesture, asking it to modify the value stored in `dragAmount` – that’s our `CGSize`.
2. It takes a closure with three parameters: `value`, `state`, and `transaction`.
3. The `value` parameter is the current data for the drag – where it started, how far it’s moved, where it’s predicted to end, and so on.
4. The `state` parameter is an `inout` value that is our property. So, rather than reading or writing `dragAmount` directly, inside this closure we should modify `state`.
5. The `transaction` parameter is an `inout` value that stores the whole animation context, giving us a little information about what’s going on such as whether this is a continuous or transient animation. Continuous animations might be produced by dragging a slider, whereas transient animations might be produced by tapping a button.
6. To make our view draggable, all we do is assign the current translation the drag straight to `state` (which is really `dragAmount` in this case), which in turn is used in the `offset()` modifier to move the view.

Remember, one of the advantages of `@GestureState` is that it automatically sets the value of your property back to its initial value when the gesture ends. In this case, it means we can drag a view around all we want, and as soon as we let go it will snap back to its original position.

::: details Similar solutions…

```component VPCard
{
  "title": "What is the @Published property wrapper? | SwiftUI by Example",
  "desc": "What is the @Published property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-published-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ScaledMetric property wrapper? | SwiftUI by Example",
  "desc": "What is the @ScaledMetric property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-scaledmetric-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @ObservedObject property wrapper? | SwiftUI by Example",
  "desc": "What is the @ObservedObject property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-observedobject-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @AppStorage property wrapper? | SwiftUI by Example",
  "desc": "What is the @AppStorage property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-appstorage-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is the @Binding property wrapper? | SwiftUI by Example",
  "desc": "What is the @Binding property wrapper?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-binding-property-wrapper.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />