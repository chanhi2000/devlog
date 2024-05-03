---
lang: ko-KR
title: How to create secure text fields using SecureField
description: Article(s) > How to create secure text fields using SecureField
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
      content: Article(s) > How to create secure text fields using SecureField
    - property: og:description
      content: How to create secure text fields using SecureField
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-secure-text-fields-using-securefield.html
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
  "title": "How to create secure text fields using SecureField | SwiftUI by Example",
  "desc": "How to create secure text fields using SecureField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-secure-text-fields-using-securefield",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `SecureField` works almost identically to a regular `TextField` except the characters are masked out for privacy. Just like `TextField`, you get to provide a placeholder giving the user a suggestion for what to enter, and the underlying value you bind to is still a plain string so you can check it as needed.

Here's an example that creates a `SecureField` bound to a local `@State` property so we can show what they typed:

```swift
struct ContentView: View {
    @State private var password: String = ""

    var body: some View {
        VStack {
            SecureField("Enter a password", text: $password)
            Text("You entered: \(password)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-secure-text-fields-using-securefield-1.zip)

![A text field with a line of 8 dots representing hidden text above the words “You entered: password”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-secure-text-fields-using-securefield-1~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize the submit button for TextField, SecureField, and TextEditor | SwiftUI by Example",
  "desc": "How to customize the submit button for TextField, SecureField, and TextEditor",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format text inside text views | SwiftUI by Example",
  "desc": "How to format text inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create static labels with a Text view | SwiftUI by Example",
  "desc": "How to create static labels with a Text view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-static-labels-with-a-text-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to take action when the user submits a TextField | SwiftUI by Example",
  "desc": "How to take action when the user submits a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-take-action-when-the-user-submits-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-line editable text with TextEditor | SwiftUI by Example",
  "desc": "How to create multi-line editable text with TextEditor",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-line-editable-text-with-texteditor.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />