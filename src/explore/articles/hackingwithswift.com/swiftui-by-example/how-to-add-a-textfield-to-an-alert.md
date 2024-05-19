---
lang: ko-KR
title: How to add a TextField to an alert
description: Article(s) > How to add a TextField to an alert
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
      content: Article(s) > How to add a TextField to an alert
    - property: og:description
      content: How to add a TextField to an alert
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-textfield-to-an-alert.html
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
  "title": "How to add a TextField to an alert | SwiftUI by Example",
  "desc": "How to add a TextField to an alert",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-textfield-to-an-alert",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI’s alerts can have one or more `TextField` or `SecureField` fields alongside their buttons, allowing you to prompt the user for input directly.

For example, we could add a `TextField` to let the user enter their name into an alert:

```swift
struct ContentView: View {
    @State private var showingAlert = false
    @State private var name = ""

    var body: some View {
        Button("Enter name") {
            showingAlert.toggle()
        }
        .alert("Enter your name", isPresented: $showingAlert) {
            TextField("Enter your name", text: $name)
            Button("OK", action: submit)
        } message: {
            Text("Xcode will print whatever you type.")
        }
    }

    func submit() {
        print("You entered \(name)")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-textfield-to-an-alert-1.zip)

You can add as many fields as you want, mixing `TextField` and `SecureText` depending on your goal. For example, this shows a login prompt asking the user to enter their username and password into an alert:

```swift
struct ContentView: View {
    @State private var isAuthenticating = false
    @State private var username = ""
    @State private var password = ""

    var body: some View {
        Button("Log in") {
            isAuthenticating.toggle()
        }
        .alert("Log in", isPresented: $isAuthenticating) {
            TextField("Username", text: $username)
                .textInputAutocapitalization(.never)
            SecureField("Password", text: $password)
            Button("OK", action: authenticate)
            Button("Cancel", role: .cancel) { }
        } message: {
            Text("Please enter your username and password.")
        }
    }

    func authenticate() {
        if username == "twostraws" && password == "sekrit" {
            print("You're in!")
        } else {
            print("Who are you?")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-textfield-to-an-alert-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "Presenting an alert | SwiftUI by Example",
  "desc": "Presenting an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/presenting-an-alert.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add actions to alert buttons | SwiftUI by Example",
  "desc": "How to add actions to alert buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-actions-to-alert-buttons.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show an alert | SwiftUI by Example",
  "desc": "How to show an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-alert.md",
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
  "title": "How to add a placeholder to a TextField | SwiftUI by Example",
  "desc": "How to add a placeholder to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-placeholder-to-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />