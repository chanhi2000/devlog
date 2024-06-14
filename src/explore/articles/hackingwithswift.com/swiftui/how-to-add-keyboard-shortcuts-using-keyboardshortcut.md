---
lang: ko-KR
title: How to add keyboard shortcuts using keyboardShortcut()
description: Article(s) > How to add keyboard shortcuts using keyboardShortcut()
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
      content: Article(s) > How to add keyboard shortcuts using keyboardShortcut()
    - property: og:description
      content: How to add keyboard shortcuts using keyboardShortcut()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut.html
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
  "title": "How to add keyboard shortcuts using keyboardShortcut() | SwiftUI by Example",
  "desc": "How to add keyboard shortcuts using keyboardShortcut()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI makes it easy to add keyboard shortcuts for devices that support it, such as iPadOS and macOS, all using the `keyboardShortcut()` modifier.

There are three ways you'll want to use this modifier, so let's start with the most basic: attaching a key to an existing action. For example, if we had a log in button and wanted to trigger its behavior when the user pressed <kbd>Cmd</kbd>+<kbd>L</kbd> we could do this:

```swift
Button("Log in") {
    print("Authenticating…")
}
.keyboardShortcut("l")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-1.zip)

Note that we don't need to specify that we mean <kbd>Cmd</kbd>+<kbd>L</kbd>, because SwiftUI assumes the Command key is used unless we specify otherwise. If you run that code sample on an iPad, you'll see that holding down the <kbd>Cmd</kbd> key brings up the keyboard shortcuts overlay, showing <kbd>“Cmd</kbd>+<kbd>L</kbd> Login” already – SwiftUI automatically figured out what our button did and made it available.

![The words “Log in” in blue, indicating they are tappable. Below that is iPadOS's command palette showing the Log In command has the <kbd>Cmd</kbd>+<kbd>L</kbd> shortcut.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-1~dark.png)

The second way to use `keyboardShortcut()` is to specify which modifier keys you actually want. As an example, this creates two more buttons, one using <kbd>Shift</kbd>+<kbd>R</kbd> to trigger a Run button, and another for <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd> to trigger a Home button:

```swift
VStack {
    Button("Run") {
        print("Running…")
    }
    .keyboardShortcut("r", modifiers: .shift)

    Button("Home") {
        print("Going home")
    }
    .keyboardShortcut("h", modifiers: [.control, .option, .command])
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-2.zip)

![The words “Run” and “Home” in blue, indicating they are tappable. Below that is iPadOS's command palette showing that “Run” has the shortcut <kbd>Shift</kbd>+<kbd>R</kbd>, and “Home” has shortcut <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd>.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-2~dark.png)

That shows you how to select one custom modifier, and how to select several modifiers at the same time.

The third and final way to use `keyboardShortcut()` is with one of its built-in keys, which are useful for hard to type keys such as Escape and arrows, and also for *semantic* keys, such as a cancellation action and a default action. Semantic keys are *really* useful – every time you've pressed Return to accept the default action of an alert, or pressed Escape to cancel an action, you've used semantic keys.

So, this creates a button with a default action shortcut, meaning that pressing Return will trigger it:

```swift
Button("Confirm Launch") {
    print("Launching drone…")
}
.keyboardShortcut(.defaultAction)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-3.zip)

![The words “Confirm Launch” in blue, indicating they are tappable. Below that is iPadOS's command palette showing the Confirm Launch command has the <kbd>Return</kbd> or <kbd>Enter</kbd> shortcut.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut-3~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to add a toolbar to the keyboard | SwiftUI by Example",
  "desc": "How to add a toolbar to the keyboard",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dismiss the keyboard for a TextField | SwiftUI by Example",
  "desc": "How to dismiss the keyboard for a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-for-a-textfield.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dismiss the keyboard when the user scrolls | SwiftUI by Example",
  "desc": "How to dismiss the keyboard when the user scrolls",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-advanced-text-styling-using-attributedstring.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />