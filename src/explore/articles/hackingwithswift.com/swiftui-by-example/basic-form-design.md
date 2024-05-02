---
lang: ko-KR
title: Basic form design
description: Article(s) > Basic form design
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
      content: Article(s) > Basic form design
    - property: og:description
      content: Basic form design
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/basic-form-design.html
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
  "title": "Basic form design | SwiftUI by Example",
  "desc": "Basic form design",
  "link": "https://hackingwithswift.com/quick-start/swiftui/basic-form-design",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 15**

SwiftUI's forms work as containers, just like `HStack` and `VStack`, which means you can add other views inside them as needed. However, they automatically adapt the behavior and styling of some controls so they fit better in the form environment.

For example, this creates a form with a toggle, a segmented control, and a button:

```swift
struct ContentView: View {
    @State private var enableLogging = false
    @State private var selectedColor = "Red"
    @State private var colors = ["Red", "Green", "Blue"]

    var body: some View {
        Form {
            Picker("Select a color", selection: $selectedColor) {
                ForEach(colors, id: \.self) {
                    Text($0)
                }
            }
            .pickerStyle(.segmented)

            Toggle("Enable Logging", isOn: $enableLogging)

            Button("Save changes") {
                // activate theme!
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/basic-form-design-1.zip)

![An inset-list style form with a segmented picker offering Red, Green, and Blue, an “Enable Logging” toggle, as well as a blue-text “Save Changes” button.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/basic-form-design-1~dark@2x.png)

::: important

If you're using Xcode 12 you need to use `SegmentedPickerStyle()` rather than `.segmented`.

:::

When that code is run you'll see two things that are fundamental to the behavior of forms:

- On iOS the form automatically adopts the style of a grouped list, so users see a scrolling selection of options.
- The button has adapted itself to look like an actionable list row – it's left-aligned and in blue.

You can have as many rows in your form as you need, but remember to use `Group` if you need more than 10.

::: details Similar solutions…

```component VPCard
{
  "title": "How to align form text and controls neatly with LabeledContent | SwiftUI by Example",
  "desc": "How to align form text and controls neatly with LabeledContent",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-align-form-text-and-controls-neatly-with-labeledcontent.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Showing and hiding form rows | SwiftUI by Example",
  "desc": "Showing and hiding form rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/showing-and-hiding-form-rows.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix a Form Picker or a NavigationLink that isn't tappable | SwiftUI by Example",
  "desc": "How to fix a Form Picker or a NavigationLink that isn't tappable",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI by Example - What's in the basic template?",
  "desc": "What's in the basic template?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-in-the-basic-template.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create basic animations | SwiftUI by Example",
  "desc": "How to create basic animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-basic-animations.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />