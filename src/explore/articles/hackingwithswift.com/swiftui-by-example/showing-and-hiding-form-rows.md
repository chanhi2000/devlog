---
lang: ko-KR
title: Showing and hiding form rows
description: Article(s) > Showing and hiding form rows
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
      content: Article(s) > Showing and hiding form rows
    - property: og:description
      content: Showing and hiding form rows
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/showing-and-hiding-form-rows.html
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
  "title": "Showing and hiding form rows | SwiftUI by Example",
  "desc": "Showing and hiding form rows",
  "link": "https://hackingwithswift.com/quick-start/swiftui/showing-and-hiding-form-rows",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us add and remove items from a form as needed, which is particularly helpful when you want to adjust the list of options that are visible based on previous choices.

For example, this shows a single toggle that prompts the user whether they want to show more advanced options. When that toggle is enabled, a second toggle appears allowing them to enable logging:

```swift
struct ContentView: View {
    @State private var showingAdvancedOptions = false
    @State private var enableLogging = false

    var body: some View {
        Form {
            Section {
                Toggle("Show advanced options", isOn: $showingAdvancedOptions.animation())

                if showingAdvancedOptions {
                    Toggle("Enable logging", isOn: $enableLogging)
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/showing-and-hiding-form-rows-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/showing-and-hiding-form-rows-1~dark.mp4" />

Notice how I attached `animation()` to the `$showingAdvancedOptions` binding, to enable implicit animations for view changes made as a result of any binding change.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-move-rows-in-a-list.md",
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