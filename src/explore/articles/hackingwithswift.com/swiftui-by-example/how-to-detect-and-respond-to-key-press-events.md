---
lang: ko-KR
title: How to detect and respond to key press events
description: Article(s) > How to detect and respond to key press events
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
      content: Article(s) > How to detect and respond to key press events
    - property: og:description
      content: How to detect and respond to key press events
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-and-respond-to-key-press-events.html
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
  "title": "How to detect and respond to key press events | SwiftUI by Example",
  "desc": "How to detect and respond to key press events",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI has an onKeyPress() modifier that lets us respond to hardware keyboard events being triggered in our app, with the only catch being that the view where you're watching for key presses must currently have input focus.

Watching for key presses takes various forms depending on what you want, but no matter what approach you take your view *must* be focusable in order to respond to a key press. So, this code marks a `Text` view as being focusable and currently focused, then updates its contents whenever a key is pressed:

```swift
struct ContentView: View {
    @FocusState private var focused: Bool
    @State private var key = ""

    var body: some View {
        Text(key)
            .focusable()
            .focused($focused)
            .onKeyPress { press in
                key += press.characters
                return .handled
            }
            .onAppear {
                focused = true
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-and-respond-to-key-press-events-1.zip)

![The message typing is fun being typed out one letter at a time.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events-1~dark.gif)

The `return .handled` part tells SwiftUI the key press has been responded to in full by our action closure. If you send back `.ignored` instead, the key press will be passed on to whatever parent view is able to handle it next.

::: note

The characters we receive do *not* have any modifier keys attached, so it won't give you things like uppercase letters or special symbols.

:::

Other forms of `onKeyPress()` include one to track which phase was triggered, so you could use this code to track only when a key has been released:

```swift
Text(key)
    .onKeyPress(phases: .up) { press in
        print("Received \(press.characters)")
        return .handled
    }
```

There's a variant that responds only to certain kinds of keys being pressed:

```swift
Text(key)
    .onKeyPress(characters: .alphanumerics) { press in
        print("Received \(press.characters)")
        return .handled
    }
```

And there's even a variant that responds to specific characters being pressed, provided either as a list of built-in constants or characters. So, this will listen for people frantically mashing keys to quit Vim:

```swift
Text(key)
    .onKeyPress(keys: [.escape, "w", "q"]) { press in
        print("Received \(press.characters)")
        return .handled
    }
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to respond to view lifecycle events: onAppear() and onDisappear() | SwiftUI by Example",
  "desc": "How to respond to view lifecycle events: onAppear() and onDisappear()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
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
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />