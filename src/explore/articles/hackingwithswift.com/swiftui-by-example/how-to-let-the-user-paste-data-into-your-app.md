---
lang: ko-KR
title: How to let the user paste data into your app
description: Article(s) > How to let the user paste data into your app
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
      content: Article(s) > How to let the user paste data into your app
    - property: og:description
      content: How to let the user paste data into your app
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-paste-data-into-your-app.html
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
  "title": "How to let the user paste data into your app | SwiftUI by Example",
  "desc": "How to let the user paste data into your app",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-the-user-paste-data-into-your-app",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI has a dedicated `PasteButton` view that lets us receive any kind of data that conforms to the `Transferable` protocol, such as `String` and `Data`.

For example, we could let the user type into a text field, or add a `PasteButton` to update the text directly:

```swift
struct ContentView: View {
    @State private var username = "@twostraws"

    var body: some View {
        VStack {
            TextField("Username", text: $username)
                .textFieldStyle(.roundedBorder)

            PasteButton(payloadType: String.self) { strings in
                guard let first = strings.first else { return }
                username = first
            }
            .buttonBorderShape(.capsule)
        }
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-let-the-user-paste-data-into-your-app-1.zip)

Notice how we specify `String.self` as the payload type, but the input into the closure is an array of strings.

Given that `TextField` has its own cut, copy, and paste menu options, I think `PasteButton` will be much more useful in places where you aren't handling text, e.g. when the user wants to paste a picture into your app.

::: details Similar solutions…

```component VPCard
{
  "title": "How to let the user select multiple dates | SwiftUI by Example",
  "desc": "How to let the user select multiple dates",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-select-multiple-dates.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to ask the user to review your app | SwiftUI by Example",
  "desc": "How to ask the user to review your app",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-ask-the-user-to-review-your-app.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users edit your navigation title | SwiftUI by Example",
  "desc": "How to let users edit your navigation title",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-edit-your-navigation-title.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run code when your app launches | SwiftUI by Example",
  "desc": "How to run code when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-code-when-your-app-launches.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Breaking forms into sections | SwiftUI by Example",
  "desc": "Breaking forms into sections",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/breaking-forms-into-sections.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />