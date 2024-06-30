---
lang: ko-KR
title: How to activate different button behaviors when a modifier key is pressed
description: Article(s) > How to activate different button behaviors when a modifier key is pressed
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
      content: Article(s) > How to activate different button behaviors when a modifier key is pressed
    - property: og:description
      content: How to activate different button behaviors when a modifier key is pressed
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.html
next: /explore/articles/hackingwithswift.com/swiftui/introduction-to-using-core-data-with-swiftui.md
date: 2024-06-21
isOriginal: false
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
  "title": "How to activate different button behaviors when a modifier key is pressed | SwiftUI by Example",
  "desc": "How to activate different button behaviors when a modifier key is pressed",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in macOS 15**

macOS often shows different button actions when the user holds down modifiers such as Command or Option, and we can get this in our own apps using the `modifierKeyAlternate()` modifier.

Attach this modifier to a button, specifying which modifiers to watch for, and also what to show when those keys are pressed.

For example, we might make a button that shows a regular amount of detail normally, but when Option is held down it shows some extra detail:

```swift
Button("Show Details") {
    print("Regular button action")
}
.modifierKeyAlternate(.option) {
    Button("Show Verbose Details") {
        print("Hold down Option to see this")
    }
}
```

For extra power, you can use multiple `modifierKeyAlternate()` modifiers to add different behaviors to different keys, or specify an array of keys to watch for several at once:

```swift
Button("Show Details") {
    print("Regular button action")
}
.modifierKeyAlternate([.option]) {
    Button("Show Verbose Details") {
        print("Hold down option to see this")
    }
}
.modifierKeyAlternate([.command, .option]) {
    Button("Show Maximum Details") {
        print("Hold down Command and Option to see this")
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-a-menu-when-a-button-is-pressed.md",
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
  "title": "Customizing Button with ButtonStyle | SwiftUI by Example",
  "desc": "Customizing Button with ButtonStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui/customizing-button-with-buttonstyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a tappable button | SwiftUI by Example",
  "desc": "How to create a tappable button",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-tappable-button.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position and style subviews that come from a different view | SwiftUI by Example",
  "desc": "How to position and style subviews that come from a different view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />
