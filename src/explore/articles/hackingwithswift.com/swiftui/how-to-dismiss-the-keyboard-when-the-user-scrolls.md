---
lang: ko-KR
title: How to dismiss the keyboard when the user scrolls
description: Article(s) > How to dismiss the keyboard when the user scrolls
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
      content: Article(s) > How to dismiss the keyboard when the user scrolls
    - property: og:description
      content: How to dismiss the keyboard when the user scrolls
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls.html
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
  "title": "How to dismiss the keyboard when the user scrolls | SwiftUI by Example",
  "desc": "How to dismiss the keyboard when the user scrolls",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `scrollDismissesKeyboard()` modifier gives us precise control over how the keyboard should dismiss when the user scrolls around.

For example, we could place a `TextField` and `TextEditor` into a scroll view, and have them both dismiss the keyboard interactively like this:

```swift
struct ContentView: View {
    @State private var username = "Anonymous"
    @State private var bio = ""

    var body: some View {
        ScrollView {
            VStack {
                TextField("Name", text: $username)
                    .textFieldStyle(.roundedBorder)
                TextEditor(text: $bio)
                    .frame(height: 400)
                    .border(.quaternary, width: 1)
            }
            .padding(.horizontal)
        }
        .scrollDismissesKeyboard(.interactively)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls-1.zip)

The `scrollDismissesKeyboard()` modifier can be given one of four values, all of which are useful in their own way:

- Use `.automatic` to let SwiftUI judge what's the best thing to do based on the context of the scroll.
- Use `.immediately` to make the keyboard dismiss fully as soon as any scroll happens.
- Use `.interactively` to make the keyboard dismiss inline with the user's gesture – they need to scroll further to make it dismiss fully.
- Use `.never` if you want the keyboard to remain present during scrolling.

According to Apple's documentation, text editors should use interactive dismissal by default, whereas other views should use immediate, but that certainly doesn't seem to be the case right now.

::: details Similar solutions…

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
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-view-dismiss-itself.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to add keyboard shortcuts using keyboardShortcut() | SwiftUI by Example",
  "desc": "How to add keyboard shortcuts using keyboardShortcut()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a TextField expand vertically as the user types | SwiftUI by Example",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />