---
lang: ko-KR
title: How to take action when the user submits a TextField
description: Article(s) > How to take action when the user submits a TextField
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
      content: Article(s) > How to take action when the user submits a TextField
    - property: og:description
      content: How to take action when the user submits a TextField
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-take-action-when-the-user-submits-a-textfield.html
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
  "title": "How to take action when the user submits a TextField | SwiftUI by Example",
  "desc": "How to take action when the user submits a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has an `onSubmit()` modifier that can be attached to any view in your hierarchy, and will run a function of your choice when the user has finished entering text into a `TextField` or `SecureField`.

For example, we could ask the user to enter their password, then run some code when they press return:

```swift
struct ContentView: View {
    @State private var password = ""

    var body: some View {
        SecureField("Password", text: $password)
            .onSubmit {
                print("Authenticating…")
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-take-action-when-the-user-submits-a-textfield-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield-1~dark.mp4" />

For simple examples like that, both `TextField` and `SecureField` accept a dedicated `onCommit` parameter where we can attach our function directly to them. However, the advantage to using `onSubmit()` is that it captures all text values submitted in its context, which makes completing forms easier:

```swift
struct ContentView: View {
    @State private var username = ""
    @State private var password = ""

    var body: some View {
        Form {
            TextField("Username", text: $username)
            SecureField("Password", text: $password)
        }
        .onSubmit {
            guard username.isEmpty == false && password.isEmpty == false else { return }
            print("Authenticating…")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-take-action-when-the-user-submits-a-textfield-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-take-action-when-the-user-submits-a-textfield-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to make a TextField expand vertically as the user types | SwiftUI by Example",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-textfield-expand-vertically-as-the-user-types.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show an action sheet | SwiftUI by Example",
  "desc": "How to show an action sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dismiss the keyboard for a TextField | SwiftUI by Example",
  "desc": "How to dismiss the keyboard for a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dismiss-the-keyboard-for-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />