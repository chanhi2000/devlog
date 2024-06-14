---
lang: ko-KR
title: How to add custom activation commands for Voice Control
description: Article(s) > How to add custom activation commands for Voice Control
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
      content: Article(s) > How to add custom activation commands for Voice Control
    - property: og:description
      content: How to add custom activation commands for Voice Control
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-add-custom-activation-commands-for-voice-control.md.html
next: /explore/articles/hackingwithswift.com/swiftui/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.md
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
  "title": "How to add custom activation commands for Voice Control | SwiftUI by Example",
  "desc": "How to add custom activation commands for Voice Control",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-custom-activation-commands-for-voice-control",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `accessibilityInputLabels()` modifier allows us to provide an array of strings that the system should listen for when the user activates Voice Control or Full Keyboard Access on their device. This is different from `accessibilityLabel()` and `accessibilityHint()`, and it’s important to get the distinction correct.

First, here’s a code sample:

```swift
NavigationStack {
    Text("Your Content Here")
        .toolbar {
            Button {
                // remove this user
            } label: {
                Label("Remove User", systemImage: "trash")
            }
            .accessibilityHint("Removes this user from your account")
            .accessibilityInputLabels(["Remove User", "Remove", "Delete User", "Delete"])
        }
}
```

There are several things in action there:

1. Because the button is placed inside a toolbar, its title won’t be shown by default on iOS – the user has no clear indication what would activate it.
2. The button has a sensible label already, which will be used by the system for VoiceOver by default. There’s no custom accessibility label because this default is fine.
3. The accessibility hint provides some extra description after a short delay, if enabled.
4. There are multiple labels being provided to the system, which will be used in descending order of importance.
5. I’ve used common synonyms and variations for the input labels. Whichever one comes first will be used to display the “Show Names” text.
6. I’ve repeated the button’s label as one of the accessibility input labels, otherwise it won’t be available as a synonym.
7. SwiftUI will automatically internationalize our input labels, so if you have localized versions available for the user’s language they will be used instead.
8. It’s really important to keep your input labels short – even shorter than accessibility labels. Remember, users need to read these out!

You can provide as many alternative input labels as you want – ideally the user should never need to say “Show Names” or “Show Numbers”, because their reasonable guess ought to be enough.

There are times when you want to have label, hint, and input labels all at the same time. One example I heard of was in an app like Stocks, where you might have a button with a title such as “Buy $AAPL at 185.83” – a great button title for sighted users, and containing important information for VoiceOver to read out, but would be frustrating to use as a command with Voice Control.

::: tip

If you’re new to Voice Control and are running at least iOS 17 or macOS Sonoma, you should try Apple’s interactive tutorial to learn how it works – go to <FontIcon icon="iconfont icon-select"/>`[Settings]` > `[Accessibility]` > `[Voice Control]` to find out more.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to control the tappable area of a view using contentShape() | SwiftUI by Example",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-spacing-around-individual-views-using-padding.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a segmented control and read values from it | SwiftUI by Example",
  "desc": "How to create a segmented control and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which view is shown when your app launches | SwiftUI by Example",
  "desc": "How to control which view is shown when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-view-is-shown-when-your-app-launches.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />