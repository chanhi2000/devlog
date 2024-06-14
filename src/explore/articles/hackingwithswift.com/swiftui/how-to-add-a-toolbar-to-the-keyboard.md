---
lang: ko-KR
title: How to add a toolbar to the keyboard
description: Article(s) > How to add a toolbar to the keyboard
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
      content: Article(s) > How to add a toolbar to the keyboard
    - property: og:description
      content: How to add a toolbar to the keyboard
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.html
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
  "title": "How to add a toolbar to the keyboard | SwiftUI by Example",
  "desc": "How to add a toolbar to the keyboard",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI lets us add input accessory views to keyboards, which means that when the user activates some text entry we can present custom buttons there.

This is all done using by attaching the `toolbar()` modifier to whatever view should own the input accessory. When creating your toolbar item group, use a placement of `.keyboard` to attach this toolbar to the keyboard, like this:

```swift
struct ContentView: View {
    @State private var name = "Taylor"

    var body: some View {
        TextField("Enter your name", text: $name)
            .textFieldStyle(.roundedBorder)
            .toolbar {
                ToolbarItemGroup(placement: .keyboard) {
                    Button("Click me!") {
                        print("Clicked")
                    }
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-toolbar-to-the-keyboard-1.zip)

![A text field, below which is iOS's software keyboard. Above the keyboard is a grey row containing the words “Click me!” in blue.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-1~dark.png)

In practice this is a great place to use something like `@FocusState` to move between input fields in your UI, or to hide the keyboard altogether, like this:

```swift
struct ContentView: View {
    @State private var name = "Taylor Swift"
    @FocusState var isInputActive: Bool

    var body: some View {
        NavigationStack {
            TextField("Enter your name", text: $name)
                .textFieldStyle(.roundedBorder)
                .focused($isInputActive)
                .toolbar {
                    ToolbarItemGroup(placement: .keyboard) {
                        Spacer()

                        Button("Done") {
                            isInputActive = false
                        }
                    }
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-toolbar-to-the-keyboard-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a toolbar and add buttons to it | SwiftUI by Example",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users customize toolbar buttons | SwiftUI by Example",
  "desc": "How to let users customize toolbar buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-customize-toolbar-buttons.md",
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

:::

---

<TagLinks />