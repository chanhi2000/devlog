---
lang: ko-KR
title: How to change the background color of List, TextEditor, and more
description: Article(s) > How to change the background color of List, TextEditor, and more
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
      content: Article(s) > How to change the background color of List, TextEditor, and more
    - property: og:description
      content: How to change the background color of List, TextEditor, and more
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-background-color-of-list-texteditor-and-more.html
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
  "title": "How to change the background color of List, TextEditor, and more | SwiftUI by Example",
  "desc": "How to change the background color of List, TextEditor, and more",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-change-the-background-color-of-list-texteditor-and-more",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Some SwiftUI views have a default background color that overrides whatever you try to apply yourself, but if you use the `scrollContentBackground()` modifier you can *hide* that default background and replace it with something else. At the time of writing, this works for `List`, `TextEditor`, and `Form`, so you can remove or change their background colors.

For example, this removes the default background for a list and replaces with an indigo color:

```swift
List(0..<100) { i in
    Text("Example \(i)")
}
.scrollContentBackground(.hidden)
.background(.indigo)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-change-the-background-color-of-list-texteditor-and-more-1.zip)

And this hides the default background for a `TextEditor` and replaces it with a gradient:

```swift
struct ContentView: View {
    @State private var bio = "Describe yourself"

    var body: some View {
        TextEditor(text: $bio)
            .scrollContentBackground(.hidden)
            .background(.linearGradient(colors: [.white, .gray], startPoint: .top, endPoint: .bottom))
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-change-the-background-color-of-list-texteditor-and-more-2.zip)

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
  "title": "How to change the tint color for individual list rows | SwiftUI by Example",
  "desc": "How to change the tint color for individual list rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-tint-color-for-individual-list-rows.md",
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

```component VPCard
{
  "title": "How to set the background color of list rows using listRowBackground() | SwiftUI by Example",
  "desc": "How to set the background color of list rows using listRowBackground()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-set-the-background-color-of-list-rows-using-listrowbackground.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />