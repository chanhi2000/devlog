---
lang: ko-KR
title: How to detect shake gestures
description: Article(s) > How to detect shake gestures
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
      content: Article(s) > How to detect shake gestures
    - property: og:description
      content: How to detect shake gestures
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-shake-gestures.html
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
  "title": "How to detect shake gestures | SwiftUI by Example",
  "desc": "How to detect shake gestures",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-shake-gestures",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI doesn't have a built-in way to detect the user shaking their device, but it doesn't take much work to create one yourself by overriding `motionEnded()` in `UIWindow` and creating a custom view modifier.

This takes five steps:

1. Adding an extension to `UIDevice` to track a new notification that will be sent when a shake gesture happens.
2. Create an extension on `UIWindow` to override the default `motionEnded()` method. This is where UIKit sends shake gestures, so you should look for that happening and translate it into your new notification.
3. Create a custom view modifier to watch for the shake notification being posted, and call a function of your choosing when it happens.
4. Create a `View` extension that wraps up your new modifier neatly.
5. Try it out in a view.

::: important

At the time of writing view modifiers do *not* work with `onReceive()` unless you first add `onAppear()`, which is why it appears above. Yes, it's empty, but it acts as a workaround for the problem.

:::

Here's a complete code sample walking through all five steps with comments:

```swift
// The notification we'll send when a shake gesture happens.
extension UIDevice {
    static let deviceDidShakeNotification = Notification.Name(rawValue: "deviceDidShakeNotification")
}

//  Override the default behavior of shake gestures to send our notification instead.
extension UIWindow {
     open override func motionEnded(_ motion: UIEvent.EventSubtype, with event: UIEvent?) {
        if motion == .motionShake {
            NotificationCenter.default.post(name: UIDevice.deviceDidShakeNotification, object: nil)
        }
     }
}

// A view modifier that detects shaking and calls a function of our choosing.
struct DeviceShakeViewModifier: ViewModifier {
    let action: () -> Void

    func body(content: Content) -> some View {
        content
            .onAppear()
            .onReceive(NotificationCenter.default.publisher(for: UIDevice.deviceDidShakeNotification)) { _ in
                action()
            }
    }
}

// A View extension to make the modifier easier to use.
extension View {
    func onShake(perform action: @escaping () -> Void) -> some View {
        self.modifier(DeviceShakeViewModifier(action: action))
    }
}

// An example view that responds to being shaken
struct ContentView: View {
    var body: some View {
        Text("Shake me!")
            .onShake {
                print("Device shaken!")
            }
    }
}
```

As you can see, once you have the first four steps in place you can go ahead and add an `onShake()` modifier to any view you want, providing some custom code to run when the shake gesture happens – it's not straightforward to set up, but once you're done it all works neatly.

::: details Similar solutions…

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
  "title": "How to stop system gestures from interfering with your own | SwiftUI by Example",
  "desc": "How to stop system gestures from interfering with your own",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stop-system-gestures-from-interfering-with-your-own.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read tap and double-tap gestures | SwiftUI by Example",
  "desc": "How to read tap and double-tap gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-tap-and-double-tap-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to detect the user hovering over a view | SwiftUI by Example",
  "desc": "How to detect the user hovering over a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-user-hovering-over-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />