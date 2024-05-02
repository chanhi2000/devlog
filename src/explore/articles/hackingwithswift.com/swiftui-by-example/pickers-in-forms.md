---
lang: ko-KR
title: Pickers in forms
description: Article(s) > Pickers in forms
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Pickers in forms
    - property: og:description
      content: Pickers in forms
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/pickers-in-forms.html
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
  "title": "Pickers in forms | SwiftUI by Example",
  "desc": "Pickers in forms",
  "link": "https://hackingwithswift.com/quick-start/swiftui/pickers-in-forms",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's picker views take on special behavior when inside forms, automatically adapting based on the platform you're using them with. On iOS, the picker will be collapsed down to a single list row that presents all the available options as a popup menu.

For example, this creates a form with a picker using an array for its items:

```swift
struct ContentView: View {
    @State private var selectedStrength = "Mild"
    let strengths = ["Mild", "Medium", "Mature"]

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    Picker("Strength", selection: $selectedStrength) {
                        ForEach(strengths, id: \.self) {
                            Text($0)
                        }
                    }
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/pickers-in-forms-1.zip)

On iOS, that will appear as a single list row that you can tap to display all possible options – Mild, Medium, and Mature.

If you want to disable this behavior, you can force the picker to adopt its regular style by using the `.pickerStyle(.wheel)` modifier, like this:

```swift
struct ContentView: View {
    @State private var selectedStrength = "Mild"
    let strengths = ["Mild", "Medium", "Mature"]

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    Picker("Strength", selection: $selectedStrength) {
                        ForEach(strengths, id: \.self) {
                            Text($0)
                        }
                    }
                    .pickerStyle(.wheel)
                }
            }
            .navigationTitle("Select your cheese")
        }
    }
}
```

![A wheel style picker offering choices Mild, Medium, and Mature.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/pickers-in-forms-2~dark@2x.png)

::: important

If you're using Xcode 12, you need to use `WheelPickerStyle()` rather than `.wheel`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "Bindings and forms | SwiftUI by Example",
  "desc": "Bindings and forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/bindings-and-forms.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with forms | SwiftUI by Example",
  "desc": "Working with forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md",
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

```component VPCard
{
  "title": "Enabling and disabling elements in forms | SwiftUI by Example",
  "desc": "Enabling and disabling elements in forms",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/enabling-and-disabling-elements-in-forms.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />