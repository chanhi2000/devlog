---
lang: ko-KR
title: How to create a tappable button
description: Article(s) > How to create a tappable button
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
      content: Article(s) > How to create a tappable button
    - property: og:description
      content: How to create a tappable button
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-tappable-button.html
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
  "title": "How to create a tappable button | SwiftUI by Example",
  "desc": "How to create a tappable button",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-tappable-button",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's button is similar to `UIButton`, except it's more flexible in terms of what content it shows and it uses a closure for its action rather than the old target/action system.

To create a button with a string title you would start with code like this:

```swift
Button("Button title") {
    print("Button tapped!")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-tappable-button-1.zip)

![The words “Button title” in blue, indicating they are tappable.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-tappable-button-1~dark.png)

For example, you might make a button that shows or hides some detail text when it's tapped:

```swift
struct ContentView: View {
    @State private var showDetails = false

    var body: some View {
        VStack(alignment: .leading) {
            Button("Show details") {
                showDetails.toggle()
            }

            if showDetails {
                Text("You should follow me on Twitter: @twostraws")
                    .font(.largeTitle)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-tappable-button-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-tappable-button-2~dark.mp4" />

The title inside the button can be any kind of view, so you can create an image button like this:

```swift
struct ContentView: View {
    @State private var showDetails = false

    var body: some View {
        Button {
            print("Image tapped!")
        } label: {
            Image("sunset")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-tappable-button-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-tappable-button-3~dark.mp4" />

Using a custom label is really helpful for times you want to increase the tappable area of a button, because you can apply padding to the label then use `contentShape(Rectangle())` or similar to make the whole area tappable.

For example, this adds 20 points of padding to a button's label, to ensure it's tappable in a much larger space than would otherwise be possible:

```swift
Button {
    print("Button pressed")
} label: {
    Text("Press Me")
        .padding(20)
}
.contentShape(Rectangle())
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-tappable-button-4.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-tappable-button-4~dark.mp4" />

If you're targeting iOS 15 or later, you can also attach a *role* to your button that helps SwiftUI know what kind of styling should be attached to the button. For example, if we had a Delete button we might mark it with the `.destructive` role so SwiftUI can highlight it in red when it makes sense:

```swift
Button("Delete", role: .destructive) {
    print("Perform delete")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-a-tappable-button-1.zip)

![The word “Delete” in red.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-tappable-button-5~dark.png)

There's also a `.cancel` role, and again it gives SwiftUI that extra bit of context to present it appropriately.

::: details Similar solutions…

```component VPCard
{
  "title": "How to control the tappable area of a view using contentShape() | SwiftUI by Example",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
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
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
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

```component VPCard
{
  "title": "Customizing Button with ButtonStyle | SwiftUI by Example",
  "desc": "Customizing Button with ButtonStyle",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-button-with-buttonstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />