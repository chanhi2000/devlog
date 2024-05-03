---
lang: ko-KR
title: How to detect device rotation
description: Article(s) > How to detect device rotation
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
      content: Article(s) > How to detect device rotation
    - property: og:description
      content: How to detect device rotation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-device-rotation.html
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
  "title": "How to detect device rotation | SwiftUI by Example",
  "desc": "How to detect device rotation",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-device-rotation",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Updated for Xcode 15

SwiftUI doesn't have a built-in way to detect the user rotating their device between portrait and landscape orientation, but we can make one using a custom modifier by responding to the `UIDevice.orientationDidChangeNotification` notification.

This takes three steps:

1. Creating a custom view modifier that watches for orientation changes and runs a callback function when it happens. It's not required, but we're going to make the callback accept a `UIDeviceOrientation` as its only parameter, just in case you need to know the current orientation.
2. Wrapping that view modifier up in a `View` extension so that it's easier to call.
3. Using your custom modifier in a view of your choosing.

::: important

At the time of writing view modifiers do *not* work with `onReceive()` unless you first add `onAppear()`, which is why it appears above. Yes, it's empty, but it acts as a workaround for the problem.

:::

Here's a complete code sample:

```swift
// Our custom view modifier to track rotation and
// call our action
struct DeviceRotationViewModifier: ViewModifier {
    let action: (UIDeviceOrientation) -> Void

    func body(content: Content) -> some View {
        content
            .onAppear()
            .onReceive(NotificationCenter.default.publisher(for: UIDevice.orientationDidChangeNotification)) { _ in
                action(UIDevice.current.orientation)
            }
    }
}

// A View wrapper to make the modifier easier to use
extension View {
    func onRotate(perform action: @escaping (UIDeviceOrientation) -> Void) -> some View {
        self.modifier(DeviceRotationViewModifier(action: action))
    }
}

// An example view to demonstrate the solution
struct ContentView: View {
    @State private var orientation = UIDeviceOrientation.unknown

    var body: some View {
        Group {
            if orientation.isPortrait {
                Text("Portrait")
            } else if orientation.isLandscape {
                Text("Landscape")
            } else if orientation.isFlat {
                Text("Flat")
            } else {
                Text("Unknown")
            }
        }
        .onRotate { newOrientation in
            orientation = newOrientation
        }
    }
}
```

![An iPhone in portait orientation showing the word “Portrait” beside another iPhone in landscape orientation showing the word “Landscape”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-device-rotation-1~dark.png)

::: tip

This may not work while your app is connected to Xcode's debugger – try pushing your app to a real device, then running it manually rather than via Xcode.

:::

Please remember that device orientation isn't quite as useful as you might expect. Yes, on iPhone a landscape orientation means you have more horizontal space than vertical, but on iPad it's possible for your app to be running in landscape while in split-screen mode – technically the whole screen still has a larger width than height, but the actual space allocated to our app is only a small slice of that width.

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
  "title": "How to detect shake gestures | SwiftUI by Example",
  "desc": "How to detect shake gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-shake-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect the user hovering over a view | SwiftUI by Example",
  "desc": "How to detect the user hovering over a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-user-hovering-over-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to detect dark mode | SwiftUI by Example",
  "desc": "How to detect dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-dark-mode.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect and respond to key press events | SwiftUI by Example",
  "desc": "How to detect and respond to key press events",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-and-respond-to-key-press-events.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />