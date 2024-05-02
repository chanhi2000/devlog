---
lang: ko-KR
title: How to format a TextField for numbers
description: Article(s) > How to format a TextField for numbers
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
      content: Article(s) > How to format a TextField for numbers
    - property: og:description
      content: How to format a TextField for numbers
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-a-textfield-for-numbers.html
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
  "title": "How to format a TextField for numbers | SwiftUI by Example",
  "desc": "How to format a TextField for numbers",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-format-a-textfield-for-numbers",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can attach a formatter to SwiftUI's `TextField` in order to restrict what kind of data it can contain, but honestly it's a bit limited in what it can do.

To demonstrate the functionality – and also its limitations – we could write some code to let the user enter a score in a game, and show what they entered. Here's the code:

```swift
struct ContentView: View {
    @State private var score = 0

    var body: some View {
        VStack {
            TextField("Enter your score", value: $score, format: .number)
                .textFieldStyle(.roundedBorder)
                .padding()

            Text("Your score was \(score).")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-a-textfield-for-numbers-1.zip)

![A text field showing 123, with a label below saying “Your score was 123.”](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-format-a-textfield-for-numbers-1~dark.png)

::: important

If you're using Xcode 12 you need to use `RoundedBorderTextFieldStyle()` rather than `.roundedBorder`, and also create a custom number formatter, like this:

:::

```swift
struct ContentView: View {
    @State private var score = 0

    let formatter: NumberFormatter = {
        let formatter = NumberFormatter()
        formatter.numberStyle = .decimal
        return formatter
    }()

    var body: some View {
        VStack {
            TextField("Enter your score", value: $score, formatter: formatter)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Text("Your score was \(score).")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-format-a-textfield-for-numbers-2.zip)

Regardless of which code option you choose, if you try using it you'll notice a few things:

1. The “Your score was” text view updates only when the user presses Return.
2. The user is free to enter any kind of text that they want, and it only jumps back to being a number when they press Return.
3. Before validation, they can even enter invalid numbers, such as 12.34.56.

If you're happy with that – if you're happy that the text field allows any input, and only validates its numbers and updates its state when the user presses Return – then you're good to go.

However, if you want to try to fix some those you'll soon hit more problems. For example, you might try to attach the `.keyboardType(.decimalPad)` modifier to your text field in order to restrict it to numbers and decimal point only. However, now:

1. The user can still enter multiple decimal points before validation happens.
2. By default, the decimal pad keyboard has no Return key to hide the keyboard; you'll need to add one yourself.

I wish there were a nice workaround for this, but I'm afraid there is not – not without rolling your own wrapper around `UITextField`, that is. In the meantime, you either accept the shortcomings of the existing functionality, or use an alternative input mechanism such as `Stepper`.

::: details Similar solutions…

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
  "title": "How to format dates inside text views | SwiftUI by Example",
  "desc": "How to format dates inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-dates-inside-text-views.md",
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

```component VPCard
{
  "title": "How to add a TextField to an alert | SwiftUI by Example",
  "desc": "How to add a TextField to an alert",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-textfield-to-an-alert.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />