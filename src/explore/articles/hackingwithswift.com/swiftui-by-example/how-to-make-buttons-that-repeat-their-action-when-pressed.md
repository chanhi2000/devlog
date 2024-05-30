---
lang: ko-KR
title: How to make buttons that repeat their action when pressed
description: Article(s) > How to make buttons that repeat their action when pressed
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
      content: Article(s) > How to make buttons that repeat their action when pressed
    - property: og:description
      content: How to make buttons that repeat their action when pressed
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/06-user-interface-controlshow-to-make-buttons-that-repeat-their-action-when-pressed.html
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
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI has a dedicated `buttonRepeatBehavior()` modifier that trigger's a button's action repeatedly when the user holds it down. The action is triggered increasingly quickly, so it fires faster the longer the user holds it down.

For example, this adds 1 to a counter when pressed, but if you hold the button down it continues to add 1 increasingly quickly:

```swift
struct ContentView: View {
    @State private var tapCount = 0

    var body: some View {
        Button("Tap Count: \(tapCount)") {
            tapCount += 1
        }
        .buttonRepeatBehavior(.enabled)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed-1.zip)

![A button that counts from 0 through 50 while bring pressed down.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed-1~dark.gif)

This repeating behavior also works with keyboard shortcuts, although there its limited by whatever keyboard repeat rate your user has.

For example, this allows the user to hold down <kbd>Shift</kbd>+<kbd>Return</kbd> to trigger our button repeatedly:

```swift
struct ContentView: View {
    @State private var tapCount = 0

    var body: some View {
        Button("Tap Count: \(tapCount)") {
            tapCount += 1
        }
        .buttonRepeatBehavior(.enabled)
        .keyboardShortcut(.return, modifiers: .shift)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a toolbar and add buttons to it | SwiftUI by Example",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toolbar-and-add-buttons-to-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users customize toolbar buttons | SwiftUI by Example",
  "desc": "How to let users customize toolbar buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-customize-toolbar-buttons.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get bordered buttons that stand out | SwiftUI by Example",
  "desc": "How to get bordered buttons that stand out",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-bordered-buttons-that-stand-out.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />