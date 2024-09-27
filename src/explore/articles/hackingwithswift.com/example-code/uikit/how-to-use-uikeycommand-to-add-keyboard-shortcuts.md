---
lang: ko-KR
title: "How to use UIKeyCommand to add keyboard shortcuts"
description: "Article(s) > How to use UIKeyCommand to add keyboard shortcuts"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use UIKeyCommand to add keyboard shortcuts"
    - property: og:description
      content: "How to use UIKeyCommand to add keyboard shortcuts"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-uikeycommand-to-add-keyboard-shortcuts.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use UIKeyCommand to add keyboard shortcuts | UIKit - free Swift example code",
  "desc": "How to use UIKeyCommand to add keyboard shortcuts",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-uikeycommand-to-add-keyboard-shortcuts",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Anyone who connects a keyboard to their iOS device is immediately able to take advantage of keyboard shortcuts – both at the system level and inside apps.

If you want your own apps to respond to shortcuts, as well as advertise those shortcuts to users, you need just one class: `UIKeyCommand`. You attach an array of these to each view controller that should respond to keyboard shortcuts, and iOS will take care of advertising and responding to them.

The basic use of `UIKeyCommand` is this:

```swift
let search = UIKeyCommand(input: "f", modifierFlags: .command, action: #selector(findFriends), discoverabilityTitle: "Find Friends")
```

That takes four parameters in total: the input string to read, modifier flags, a selector, and a discoverability title. Let’s break them down…

First, the input string is the actual alphanumeric key that must be pressed in order to trigger your shortcut. You can specify literals here such as “f”, “t”, or “3”, or use constants such as `UIKeyInputUpArrow`, `UIKeyInputLeftArrow`, or `UIKeyInputEscape`.

Second, the modifier flags parameter accepts an option set of key modifiers. We’re using `.command` above to make <kbd>Cmd</kbd>+F a shortcut, but we could easily have used `[.command, .shift]` to make <kbd>Cmd</kbd>+<kbd>Shift</kbd>+F a shortcut.

Third, the selector parameter determines what code is run when the shortcut is triggered – the code above will call a `findFriends()` method on your view controller when <kbd>Cmd</kbd>+F is pressed. Because this is called from the Objective-C runtime you’ll need to mark it `@objc`, like this:

```swift
@objc func findFriends() {
    // your code here
}
```

Finally, the discoverability title is there to control what is shown to users. Because there’s no natural on-screen place to discover keyboard shortcuts, iOS has a simple shortcut: users holding down the Cmd key will see an on-screen popup with your shortcuts and discoverability titles.

Once you’ve decided on your list of keyboard shortcuts, return them all from the `keyCommands` property of your view controller, like this:

```swift
override var keyCommands: [UIKeyCommand]? {
    return [
        UIKeyCommand(input: "f", modifierFlags: .command, action: #selector(findFriends), discoverabilityTitle: "Find Friends")
    ]
}
```

iOS will automatically call that whenever the user holds down the Cmd key to show the shortcut list, or whenever they attempt to activate a shortcut. This means you can update it as often as you need, based on your app state:

```swift
override var keyCommands: [UIKeyCommand]? {
    if isAuthenticated {
        return [
            UIKeyCommand(input: "f", modifierFlags: .command, action: #selector(findFriends), discoverabilityTitle: "Find Friends")
        ]
    } else {
        return nil
    }
}
```

Note: don’t try to override any built-in shortcuts, because iOS is always given the first opportunity to handle key commands – before they are routed to your app. So, built-in system events such as copy and paste will happen automatically even if you try to replace them.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut">How to add keyboard shortcuts using keyboardShortcut() 
/quick-start/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls">How to dismiss the keyboard when the user scrolls 
/quick-start/swiftui/how-to-dismiss-the-keyboard-for-a-textfield">How to dismiss the keyboard for a TextField 
/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard">How to add a toolbar to the keyboard 
/example-code/uikit/how-to-add-a-toolbar-above-the-keyboard-using-inputaccessoryview">How to add a toolbar above the keyboard using inputAccessoryView</a>
-->

:::

---

<TagLinks />