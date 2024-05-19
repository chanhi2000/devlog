---
lang: ko-KR
title: How to create a segmented control and read values from it
description: Article(s) > How to create a segmented control and read values from it
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
      content: Article(s) > How to create a segmented control and read values from it
    - property: og:description
      content: How to create a segmented control and read values from it
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-segmented-control-and-read-values-from-it.html
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
  "title": "How to create a segmented control and read values from it | SwiftUI by Example",
  "desc": "How to create a segmented control and read values from it",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-segmented-control-and-read-values-from-it",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 15**

SwiftUI's `Picker` can also be used to create segmented controls equivalent to `UISegmentedControl` from UIKit, although it needs to be bound to some state and you must ensure to give each segment a tag so it can be identified. Segments can be text or pictures; anything else will silently fail.

As an example, this creates a segmented control that works with a `favoriteColor` state property, and adds a text view below that shows whichever value was selected:

```swift
struct ContentView: View {
    @State private var favoriteColor = 0

    var body: some View {
        VStack {
            Picker("What is your favorite color?", selection: $favoriteColor) {
                Text("Red").tag(0)
                Text("Green").tag(1)
                Text("Blue").tag(2)
            }
            .pickerStyle(.segmented)

            Text("Value: \(favoriteColor)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-segmented-control-and-read-values-from-it-1.zip)

![A grey capsule containing the choices Red, Green, and Blue, with Red selected. Below are the words “Value: 0”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-segmented-control-and-read-values-from-it-1~dark.png)

::: important

If you're using Xcode 12 you need to use `SegmentedPickerStyle()` rather than `.segmented`.

:::

In this instance, though, it's better to create an array to store the various colors, then use `ForEach` to create the text view inside using a loop:

```swift
struct ContentView: View {
    @State private var favoriteColor = "Red"
    var colors = ["Red", "Green", "Blue"]

    var body: some View {
        VStack {
            Picker("What is your favorite color?", selection: $favoriteColor) {
                ForEach(colors, id: \.self) {
                    Text($0)
                }
            }
            .pickerStyle(.segmented)

            Text("Value: \(favoriteColor)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-segmented-control-and-read-values-from-it-2.zip)

![A grey capsule containing the choices Red, Green, and Blue, with Blue selected. Below are the words “Value: Blue”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-segmented-control-and-read-values-from-it-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a date picker and read values from it | SwiftUI by Example",
  "desc": "How to create a date picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-date-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a picker and read values from it | SwiftUI by Example",
  "desc": "How to create a picker and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-picker-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a slider and read values from it | SwiftUI by Example",
  "desc": "How to create a slider and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-slider-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the red, green, and blue values from a Color | SwiftUI by Example",
  "desc": "How to read the red, green, and blue values from a Color",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-red-green-and-blue-values-from-a-color.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a stepper and read values from it | SwiftUI by Example",
  "desc": "How to create a stepper and read values from it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-stepper-and-read-values-from-it.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />