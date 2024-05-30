---
lang: ko-KR
title: Customizing Toggle with ToggleStyle
description: Article(s) > Customizing Toggle with ToggleStyle
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
      content: Article(s) > Customizing Toggle with ToggleStyle
    - property: og:description
      content: Customizing Toggle with ToggleStyle
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-toggle-with-togglestyle.html
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
  "title": "Customizing Toggle with ToggleStyle | SwiftUI by Example",
  "desc": "Customizing Toggle with ToggleStyle",
  "link": "https://hackingwithswift.com/quick-start/swiftui/customizing-toggle-with-togglestyle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us the `ToggleStyle` protocol to customize the way `Toggle` switches look and work. Any struct that conforms to this protocol must implement a `makeBody()` method that renders the `Toggle` however you want it, and you’re giving both the label used for the toggle and an `isOn` binding that you can flip to adjust the toggle.

::: important

When you customize a `Toggle` switch like this, it’s down to you to flip the on state yourself somehow – SwiftUI will *not* do it for you.

:::

To demonstrate custom `Toggle` styles, here’s one that uses a button to flip the on state, then adds a custom label to show that state. Rather than use a moving circle like the standard iOS `Toggle`, I’ve made this show one of two SF Symbols:

```swift
struct CheckToggleStyle: ToggleStyle {
    func makeBody(configuration: Configuration) -> some View {
        Button {
            configuration.isOn.toggle()
        } label: {
            Label {
                configuration.label
            } icon: {
                Image(systemName: configuration.isOn ? "checkmark.circle.fill" : "circle")
                    .foregroundStyle(configuration.isOn ? Color.accentColor : .secondary)
                    .accessibility(label: Text(configuration.isOn ? "Checked" : "Unchecked"))
                    .imageScale(.large)
            }
        }
        .buttonStyle(.plain)
    }
}

// An example view showing the style in action
struct ContentView: View {
    @State private var isOn = false

    var body: some View {
        Toggle("Switch Me", isOn: $isOn)
            .toggleStyle(CheckToggleStyle())
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/customizing-toggle-with-togglestyle-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/customizing-toggle-with-togglestyle-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a toggle switch | SwiftUI by Example",
  "desc": "How to create a toggle switch",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toggle-switch.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden() | SwiftUI by Example",
  "desc": "How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing Button with ButtonStyle | SwiftUI by Example",
  "desc": "Customizing Button with ButtonStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-button-with-buttonstyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing ProgressView with ProgressViewStyle | SwiftUI by Example",
  "desc": "Customizing ProgressView with ProgressViewStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-progressview-with-progressviewstyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />