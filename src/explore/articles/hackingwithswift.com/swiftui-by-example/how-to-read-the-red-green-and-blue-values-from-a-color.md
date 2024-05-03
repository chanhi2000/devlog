---
lang: ko-KR
title: How to read the red, green, and blue values from a Color
description: Article(s) > How to read the red, green, and blue values from a Color
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
      content: Article(s) > How to read the red, green, and blue values from a Color
    - property: og:description
      content: How to read the red, green, and blue values from a Color
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-red-green-and-blue-values-from-a-color.html
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
  "title": "How to read the red, green, and blue values from a Color | SwiftUI by Example",
  "desc": "How to read the red, green, and blue values from a Color",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `Color` view doesn't always hold one specific color, and instead is only resolved to a specific value when it's being drawn on the screen. This allows the system to use slight variations between light and dark mode to ensure the optimal experience, but it also means the only way to get actual red, green, and blue (RGB) components out is to ask for the resolved color – ask the system “given this environment, what actual color values are being used?”

Resolving takes two steps: gaining access to the current environment, and pass that into a call to `resolve(in:)` on your color. You can then save the resulting data using `Codable` or whatever other data form you want.

For example, this lets the user choose any color they want, and displays its red, green, and blue components:

```swift
struct ContentView: View {
    @Environment(\.self) var environment
    @State private var color = Color.red
    @State private var resolvedColor: Color.Resolved?

    var body: some View {
        VStack {
            ColorPicker("Select your favorite color", selection: $color)

            if let resolvedColor {
                Text("Red: \(resolvedColor.red)")
                Text("Green: \(resolvedColor.green)")
                Text("Blue: \(resolvedColor.blue)")
                Text("Opacity: \(resolvedColor.opacity)")
            }
        }
        .padding()
        .onChange(of: color, initial: true, getColor)
    }

    func getColor() {
        resolvedColor = color.resolve(in: environment)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color-1.zip)

![A color picker that displays its red, green, and blue components every time the color is changed.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color-1~dark.png)

::: important

The data is provided as `Float` rather than `Double`.

:::

In that code, `resolved` gets set to a `Color.Resolved` type, which can be converted back into a new `Color` object or be converted to JSON or similar using `Codable`.

For example, we could convert our resolved color to JSON like this:

```swift
struct ContentView: View {
    @Environment(\.self) var environment
    @State private var color = Color.red

    @State private var resolvedColor: Color.Resolved?
    @State private var colorJSON = ""

    var body: some View {
        VStack {
            ColorPicker("Select your favorite color", selection: $color)

            if let resolvedColor {
                Text("Red: \(resolvedColor.red)")
                Text("Green: \(resolvedColor.green)")
                Text("Blue: \(resolvedColor.blue)")
                Text("Opacity: \(resolvedColor.opacity)")
            }

            Text("Color JSON: \(colorJSON)")
        }
        .padding()
        .onChange(of: color, initial: true, getColor)
    }

    func getColor() {
        resolvedColor = color.resolve(in: environment)

        if let colorData = try? JSONEncoder().encode(resolvedColor) {
            colorJSON = String(decoding: colorData, as: UTF8.self)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color-2.zip)

![A view that shows red, green, and blue values for a user color, and also the matching JSON data.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color-2~dark.png)

::: note

We're dealing with floating-point numbers, so you can expect some microscopic variations.

:::

If you've loaded a resolved color and want to convert it back to a Color instance, just pass it into the initializer like this:

```swift
let resolvedColor = Color.Resolved(red: 0, green: 0.6, blue: 0.9, opacity: 1)

Rectangle()
    .fill(Color(resolvedColor).gradient)
    .ignoresSafeArea()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color-3.zip)

A gentle blue gradient created from a resolved color.

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to create a date picker and read values from it",
  "desc": "How to create a date picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create a picker and read values from it",
  "desc": "How to create a picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create a segmented control and read values from it",
  "desc": "How to create a segmented control and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-segmented-control-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "Article(s) > All SwiftUI property wrappers explained and compared",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />