---
lang: ko-KR
title: How to let users customize toolbar buttons
description: Article(s) > How to let users customize toolbar buttons
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
      content: Article(s) > How to let users customize toolbar buttons
    - property: og:description
      content: How to let users customize toolbar buttons
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-customize-toolbar-buttons.html
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
  "title": "How to let users customize toolbar buttons | SwiftUI by Example",
  "desc": "How to let users customize toolbar buttons",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's toolbar allows the user to customize any toolbar items we allow, and it takes five small steps:

1. Give your toolbar a unique, stable identifier string.
2. Give each customizable toolbar item a unique, stable identifier string.
3. Place customizable buttons in the `.secondaryAction` category.
4. Decide which buttons should be visible by default.
5. Enable Editor mode for your toolbar, so that all the secondary actions become toolbar buttons.

The “unique, stable” identifier requirement matters, because this is what SwiftUI uses to remember the user's settings – “toolbar X has button A, then C, then F.”

::: note

Only some platforms support toolbar customization. This API will work best on iPadOS and macOS, where complicated toolbars are more common.

:::

Here's a code sample showing all those steps:

```swift
NavigationStack {
    Text("SwiftUI")
        .navigationTitle("Welcome")
        .toolbar(id: "options") {
            // this is a primary action, so will always be visible
            ToolbarItem(id: "settings", placement: .primaryAction) {
                Button("Settings") { }
            }

            // this is a standard secondary action, so will be customizable
            ToolbarItem(id: "help", placement: .secondaryAction) {
                Button("Help") { }
            }

            // another customizable button
            ToolbarItem(id: "email", placement: .secondaryAction) {
                Button("Email Me") { }
            }

            // a third customizable button, but this one won't be in the toolbar by default
            ToolbarItem(id: "credits", placement: .secondaryAction, showsByDefault: false) {
                Button("Credits") { }
            }
        }
        .toolbarRole(.editor)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-customize-toolbar-buttons-1.zip)

When you run that code, you'll see a details button on the trailing edge of your toolbar – tapping that will show a Customize Toolbar menu that enables customization.

By default this will make all the secondary action buttons individually customizable, but if you wrap two or more buttons in a `ControlGroup` they become attached for customization purposes – the user must add both or neither. `ControlGroup` is great for things like font adjustments, like this:

```swift
NavigationStack {
    Text("SwiftUI")
        .navigationTitle("Welcome")
        .toolbar(id: "font") {
            ToolbarItem(id: "font", placement: .secondaryAction) {
                ControlGroup {
                    Button {
                        // decrease font
                    } label: {
                        Label("Decrease font size", systemImage: "textformat.size.smaller")
                    }

                    Button {
                        // increase font
                    } label: {
                        Label("Increase font size", systemImage: "textformat.size.larger")
                    }
                } label: {
                    Label("Font Size", systemImage: "textformat.size")
                }
            }
        }
        .toolbarRole(.editor)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-users-customize-toolbar-buttons-2.zip)

::: tip

If you don't add a label for your `ControlGroup`, SwiftUI will use the labels for the buttons it contains.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a toolbar and add buttons to it | SwiftUI by Example",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toolbar-and-add-buttons-to-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a toolbar to the keyboard | SwiftUI by Example",
  "desc": "How to add a toolbar to the keyboard",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-toolbar-to-the-keyboard.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users import videos using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users share content using the system share sheet | SwiftUI by Example",
  "desc": "How to let users share content using the system share sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-share-content-using-the-system-share-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users delete rows from a list | SwiftUI by Example",
  "desc": "How to let users delete rows from a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-delete-rows-from-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />