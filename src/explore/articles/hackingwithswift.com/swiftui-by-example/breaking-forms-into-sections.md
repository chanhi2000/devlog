---
lang: ko-KR
title: Breaking forms into sections
description: Article(s) > Breaking forms into sections
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
      content: Article(s) > Breaking forms into sections
    - property: og:description
      content: Breaking forms into sections
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/breaking-forms-into-sections.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Breaking forms into sections | SwiftUI by Example",
  "desc": "Breaking forms into sections",
  "link": "https://hackingwithswift.com/quick-start/swiftui/breaking-forms-into-sections",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's forms often work best when broken into sections, just like regular lists of content. How you break them up is down to you, but usually it works best when you group things according to their purpose – if it were an order page you might put items in one group, customization in another, and delivery in a third.

Helpfully, form sections are *identical* to list sections, which means you can re-use the same code in both places. So, you can add a header and/or footer to your sections, or use neither and just get some on-screen spacing between your sections.

As an example, this creates a form with two sections – the first with a segmented control and toggle, and the second with a save button:

```swift
struct ContentView: View {
    @State private var enableLogging = false
    @State private var selectedColor = "Red"
    @State private var colors = ["Red", "Green", "Blue"]

    var body: some View {
        Form {
            Section(footer: Text("Note: Enabling logging may slow down the app")) {
                Picker("Select a color", selection: $selectedColor) {
                    ForEach(colors, id: \.self) {
                        Text($0)
                    }
                }
                .pickerStyle(.segmented)

                Toggle("Enable Logging", isOn: $enableLogging)
            }

            Section {
                Button("Save changes") {
                    // activate theme!
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/breaking-forms-into-sections-1.zip)

![An inset-list style form with two sections. The first section has a segmented picker, a toggle, and footer text. The second section has a blue-text button.](https://hackingwithswift.com/img/books/quick-start/swiftui/breaking-forms-into-sections-1~dark@2x.png)

::: important

In Xcode 12 you need to use `SegmentedPickerStyle()` rather than `.segmented`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to add sections to a list | SwiftUI by Example",
  "desc": "How to add sections to a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-sections-to-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Bindings and forms | SwiftUI by Example",
  "desc": "Bindings and forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/bindings-and-forms.html",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with forms | SwiftUI by Example",
  "desc": "Working with forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Enabling and disabling elements in forms | SwiftUI by Example",
  "desc": "Enabling and disabling elements in forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/enabling-and-disabling-elements-in-forms.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Pickers in forms | SwiftUI by Example",
  "desc": "Pickers in forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/pickers-in-forms.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />