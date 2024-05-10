---
lang: ko-KR
title: Customizing Button with ButtonStyle
description: Article(s) > Customizing Button with ButtonStyle
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
      content: Article(s) > Customizing Button with ButtonStyle
    - property: og:description
      content: Customizing Button with ButtonStyle
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-button-with-buttonstyle.html
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
  "title": "Customizing Button with ButtonStyle | SwiftUI by Example",
  "desc": "Customizing Button with ButtonStyle",
  "link": "https://hackingwithswift.com/quick-start/swiftui/customizing-button-with-buttonstyle",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a number of styling protocols that allow us to define common styling for views such as  `Button`, `ProgressView`, `Toggle`, and more. They all work by allowing us to centralize any number of modifiers that get a view looking the way we want it, and provide modifiers that let us apply the full set of customizations in a single line.

For example, here’s a button that has its styling declared inline:

```swift
Button("Press Me") {
    print("Button pressed!")
}
.padding()
.background(Color(red: 0, green: 0, blue: 0.5))
.clipShape(Capsule())
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/customizing-button-with-buttonstyle-1.zip)

![A dark blue capsule shaped button with “Press Me” printed on it in blue.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/customizing-button-with-buttonstyle-1~dark@2x.png)

That works fine for a single button, but if that’s the standard button design across your entire app you should consider using a custom button style instead. This means creating a new struct that conforms to the 
`ButtonStyle` protocol, which will pass us the button’s configuration to act on however we want.

So, we could centralize those three modifiers into a single 
`BlueButton` style, then apply it to our button like this:

```swift
struct BlueButton: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding()
            .background(Color(red: 0, green: 0, blue: 0.5))
            .foregroundStyle(.white)
            .clipShape(Capsule())
    }
}

struct ContentView: View {
    var body: some View {
        Button("Press Me") {
            print("Button pressed!")
        }
        .buttonStyle(BlueButton())
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/customizing-button-with-buttonstyle-2.zip)

![A dark blue capsule shaped button with “Press Me” printed on it in white.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/customizing-button-with-buttonstyle-2~dark@2x.png)

The button configuration we’re passed includes whether the button is currently being pressed or not, so we can us that to adjust our button.

For example, we could create a second style that makes the button grow when it’s being pressed down:

```swift
struct GrowingButton: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding()
            .background(.blue)
            .foregroundStyle(.white)
            .clipShape(Capsule())
            .scaleEffect(configuration.isPressed ? 1.2 : 1)
            .animation(.easeOut(duration: 0.2), value: configuration.isPressed)
    }
}

struct ContentView: View {
    var body: some View {
        Button("Press Me") {
            print("Button pressed!")
        }
        .buttonStyle(GrowingButton())
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/customizing-button-with-buttonstyle-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/customizing-button-with-buttonstyle-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "Customizing Toggle with ToggleStyle | SwiftUI by Example",
  "desc": "Customizing Toggle with ToggleStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-toggle-with-togglestyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing ProgressView with ProgressViewStyle | SwiftUI by Example",
  "desc": "Customizing ProgressView with ProgressViewStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-progressview-with-progressviewstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a tappable button | SwiftUI by Example",
  "desc": "How to create a tappable button",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-tappable-button.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />