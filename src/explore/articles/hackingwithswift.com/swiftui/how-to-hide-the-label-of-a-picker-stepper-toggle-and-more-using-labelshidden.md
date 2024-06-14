---
lang: ko-KR
title: How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()
description: Article(s) > How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()
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
      content: Article(s) > How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()
    - property: og:description
      content: How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.html
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
  "title": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden() | SwiftUI by Example",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI requires that we add labels to its controls, and it's common to want to hide those labels so you can get a more precise UI layout. However, there's a *bad* way of hiding labels and a *good* way, and it's already common to see folks choosing the bad choice despite it actively hurting users.

First, let's look at the *  * way to hide labels. As an example, here's a Picker that lets users select a number:

```swift
struct ContentView: View {
    @State private var selectedNumber = 0

    var body: some View {
        Picker("Select a number", selection: $selectedNumber) {
            ForEach(0..<10) {
                Text("\($0)")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden-1.zip)

On some platforms, that will show “Select a number” alongside the picker. This can look poor, because the label is sometimes crammed into a small space – a better idea would be to have a `VStack` with a custom text label, then hide the label in the `Picker`.

To hide the label for a `Picker` – or indeed for a `DatePicker`, a `Stepper`, a `Toggle`, or any other view that requires a label – you should add the `labelsHidden()` modifier to the view, like this:

```swift
struct ContentView: View {
    @State private var selectedNumber = 0

    var body: some View {
        Picker("Select a number", selection: $selectedNumber) {
            ForEach(0..<10) {
                Text("\($0)")
            }
        }
        .labelsHidden()        
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden-2.zip)

![A wheel-style picker offering the numbers 0, 1, 2, etc. 0 is selected.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden-1~dark.png)

That still creates the label, but now it doesn't get shown no matter what platform is used. As a result, you can put the `Picker` inside a `VStack` and add a label of your own choosing.

::: tip

If you want *all* your labels hidden you can apply the `labelsHidden()` modifier to a `VStack` or whatever you're using as your outermost container.

:::

In case you were curious, the *wrong* way to hide labels is using `EmptyView`, like this:

```swift
struct ContentView: View {
    @State private var selectedNumber = 0

    var body: some View {
        Picker(selection: $selectedNumber, label: EmptyView()) {
            ForEach(0..<10) {
                Text("\($0)")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden-3.zip)

Yes, the end result might *look* the same, but there's an important reason why using `labelsHidden()` is much better: the hidden label is still accessible by the screen reader, so even though the text isn't visible it's still there to help VoiceOver understand how your UI is structured.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a stepper and read values from it | SwiftUI by Example",
  "desc": "How to create a stepper and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-stepper-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show text and an icon side by side using Label | SwiftUI by Example",
  "desc": "How to show text and an icon side by side using Label",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a toggle switch | SwiftUI by Example",
  "desc": "How to create a toggle switch",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-toggle-switch.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing Toggle with ToggleStyle | SwiftUI by Example",
  "desc": "Customizing Toggle with ToggleStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui/customizing-toggle-with-togglestyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a date picker and read values from it | SwiftUI by Example",
  "desc": "How to create a date picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />