---
lang: ko-KR
title: How to read text from a TextField
description: Article(s) > How to read text from a TextField
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
      content: Article(s) > How to read text from a TextField
    - property: og:description
      content: How to read text from a TextField
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-read-text-from-a-textfield.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to read text from a TextField | SwiftUI by Example",
  "desc": "How to read text from a TextField",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-text-from-a-textfield",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `TextField` view is similar to `UITextField` in UIKit, although it looks a little different by default and relies very heavily on binding to state.

To create one, you should pass in a placeholder to use inside the text field, plus the state value it should bind to. For example, this creates a `TextField` bound to a local string, then places a text view below it that shows the text field's output as you type:

```swift
struct ContentView: View {
    @State private var name: String = "Tim"

    var body: some View {
        VStack(alignment: .leading) {
            TextField("Enter your name", text: $name)
            Text("Hello, \(name)!")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-read-text-from-a-textfield-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-text-from-a-textfield-1~dark.mp4" />

When that's run, you should be able to type into the text field and see a greeting appear directly below.

There are two important provisos when working with text fields. First, they don't have a border by default, so you probably won't see anything – you'll need to tap inside roughly where it is in order to activate the keyboard.

Second, you might find you can't type into the canvas preview of your layout. If you hit that problem, press <kbd>Cmd</kbd>+<kbd>R</kbd> to build and run your code in the simulator.

::: details Similar solutions…

```component VPCard
{
  "title": "How to make a TextField expand vertically as the user types | SwiftUI by Example",
  "desc": "How to make a TextField expand vertically as the user types",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-textfield-expand-vertically-as-the-user-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dismiss the keyboard for a TextField | SwiftUI by Example",
  "desc": "How to dismiss the keyboard for a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-for-a-textfield.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a TextField to an alert | SwiftUI by Example",
  "desc": "How to add a TextField to an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-textfield-to-an-alert.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a TextField or TextEditor have default focus | SwiftUI by Example",
  "desc": "How to make a TextField or TextEditor have default focus",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-textfield-or-texteditor-have-default-focus.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format a TextField for numbers | SwiftUI by Example",
  "desc": "How to format a TextField for numbers",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-format-a-textfield-for-numbers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />