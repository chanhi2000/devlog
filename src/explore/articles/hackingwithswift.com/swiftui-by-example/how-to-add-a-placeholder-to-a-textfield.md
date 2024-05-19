---
lang: ko-KR
title: How to add a placeholder to a TextField
description: Article(s) > How to add a placeholder to a TextField
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
      content: Article(s) > How to add a placeholder to a TextField
    - property: og:description
      content: How to add a placeholder to a TextField
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-placeholder-to-a-textfield.html
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
  "title": "How to add a placeholder to a TextField | SwiftUI by Example",
  "desc": "How to add a placeholder to a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-placeholder-to-a-textfield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `TextField` supports placeholder text just like `UITextField` did – gray text that is shown in the text field when it's empty, either giving users a prompt (“Enter your password”) or showing some example data.

To set your placeholder text, pass it in as part of the initializer for your text field, like this:

```swift
struct ContentView: View {
    @State private var emailAddress = ""

    var body: some View {
        TextField("johnnyappleseed@apple.com", text: $emailAddress)
            .textFieldStyle(.roundedBorder)
            .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-placeholder-to-a-textfield-1.zip)

![A text field with a thin grey outline containing the placeholder text “johnnyappleseed@apple.com”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-placeholder-to-a-textfield-1~dark.png)

::: important

If you're using Xcode 12 you need to use `RoundedBorderTextFieldStyle()` rather than `.roundedBorder`.

:::

That will show “johnnyappleseed@apple.com” in the text field while it's empty, but as soon as the user types something in there it disappears.

::: details Similar solutions…

```component VPCard
{
  "title": "How to mark content as a placeholder using redacted() | SwiftUI by Example",
  "desc": "How to mark content as a placeholder using redacted()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-a-placeholder-using-redacted.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a TextField to an alert | SwiftUI by Example",
  "desc": "How to add a TextField to an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-textfield-to-an-alert.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a border to a TextField | SwiftUI by Example",
  "desc": "How to add a border to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-border-to-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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