---
lang: ko-KR
title: How to position and style subviews that come from a different view
description: Article(s) > How to position and style subviews that come from a different view
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
      content: Article(s) > How to position and style subviews that come from a different view
    - property: og:description
      content: How to position and style subviews that come from a different view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.html
next: /explore/articles/hackingwithswift.com/swiftui/introduction-to-navigation.md
date: 2024-06-21
isOriginal: false
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
  "title": "How to position and style subviews that come from a different view | SwiftUI by Example",
  "desc": "How to position and style subviews that come from a different view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI’s `Group` and `ForEach` views have initializers that let us read one view or view builder, then place the resulting subviews by hand. This is perfect when you want to position views manually without having to create a completely custom layout.

Let's start with `Group` first. As an example, here's a view with five pieces of news headlines:

```swift
struct HeadlinesView: View {
    var body: some View {
        Text("Coming soon: Xcode on Apple Watch")
        Text("Apple announces Swift-compatible toaster")
        Text("Xcode predicts errors before you make them")
        Text("Apple Intelligence gains sentience, demands a vacation")
        Text("Swift concurrency made simple")
    }
}
```

They don't have any layout attached to them – they aren't wrapped in a `VStack`, for example. As a result, we can use `Group(subviewsOf:)` to read all the text views inside `HeadlinesView`, adjusting each one by hand.

For example, we might make the first headline bigger than the others:

```swift
struct ContentView: View {
    var body: some View {
        Group(subviewsOf: HeadlinesView()) { collection in
            if let firstView = collection.first {
                firstView
                    .font(.title)
            }

            ForEach(collection.dropFirst()) { item in
                item
            }
        }
    }
}
```

That handles the first subview specifically, then loops over the remainder to place them unmodified.

You can add whatever positioning or styling information you want. For example, we could show all headline views at the same size, and instead cycle through background colors:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Latest News")
                .font(.largeTitle.bold())

            Group(subviewsOf: HeadlinesView()) { collection in
                ForEach(collection.indices, id: \.self) { index in
                    collection[index]
                        .frame(maxWidth: .infinity)
                        .padding(.vertical)
                        .background(Color(hue: Double(index) / Double(collection.count), saturation: 1, brightness: 1))
                }
            }
        }
    }
}
```

So, `Group(subviewsOf:)` take a view or a view builder – we don't really care which, or how either are created – and it hands it to us as a collection we can manipulate.

In comparison, `ForEach(subviewOf:)` takes a view or a view builder, and hands each element to us one by one. It's not quite as powerful because you can't access randomly elements in the collection freely, but it's still useful for simpler things.

If you need more complex layouts, you can use SwiftUI's existing `Section` view to break things up. These can be read using `Group(sectionsOf:)` or `ForEach(sectionOf:)`, allowing you to style section headers and section contents differently as needed.

::: important

In Xcode 16 beta 1, this API is a little broken – you'll find it works great in Xcode previews, but doesn't work at all in the simulator. If you find that it's fixed by the time you read this, please let me know and I'll remove this warning!

:::

For example, this shows section headers in a big, bold font, with each section's contents below:

```swift
struct SectionedHeadlinesView: View {
    var body: some View {
        Section("Possible") {
            Text("Coming soon: Xcode on Apple Watch")
            Text("Apple announces Swift-compatible toaster")
        }

        Section("Probable") {
            Text("Xcode predicts errors before you make them")
            Text("Apple Intelligence gains sentience, demands a vacation")
        }

        Section("Preposterous") {
            Text("Swift concurrency made simple")
            Text("Debugging Swift code works first time")
        }
    }
}

struct ContentView: View {
    var body: some View {
        ForEach(sectionOf: SectionedHeadlinesView()) { section in
            section.header
                .font(.title)
                .fontWeight(.black)

            ForEach(section.content) { item in
                item
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view-3.zip)

For complete customization, it's possible to attach custom values for your contained views, having them flow upward to their container. This is similar to SwiftUI's preferences system, except the value doesn't contain flowing upwards past their direct container.

To do this, first we need to create a new `ContainerValue` value that will hold the name we're trying to adjust and a default value. We'll make our headlines show icons next to them, by adding a new entry for the icon then adjusting our headlines so that each piece of text provides a container value for its icon:

```swift
extension ContainerValues {
    @Entry var icon: String = "photo"
}

struct IconHeadlinesView: View {
    var body: some View {
        Text("Coming soon: Xcode on Apple Watch")
            .containerValue(\.icon, "applewatch")
        Text("Apple announces Swift-compatible toaster")
            .containerValue(\.icon, "swift")
        Text("Xcode predicts errors before you make them")
            .containerValue(\.icon, "exclamationmark.triangle")
        Text("Apple Intelligence gains sentience, demands a vacation")
            .containerValue(\.icon, "apple.logo")
        Text("Swift concurrency made simple")
            .containerValue(\.icon, "sparkles")
    }
}
```

::: tip

You could make that `.containerValue(\.icon, "xyz")` call into a little `View` extension for easier calling.

:::

Finally, we can display those headlines with their icons next to them like this:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Latest News")
                .font(.largeTitle.bold())

            Group(subviewsOf: IconHeadlinesView()) { collection in
                ForEach(collection) { item in
                    HStack {
                        Image(systemName: item.containerValues.icon)
                        item
                    }
                }
            }
        }
    }
}
```

The real flexibility here is that `IconContentView` gets to decide how to use the data it's provided – maybe it wants to place the icons to the side like a `Label`, maybe it wants to use them as buttons that reveal the main subview when pressed, or something else entirely.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a grid using LazyVGrid and LazyHGrid | SwiftUI by Example",
  "desc": "How to position views in a grid using LazyVGrid and LazyHGrid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect when the size or position of a view changes | SwiftUI by Example",
  "desc": "How to detect when the size or position of a view changes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a fixed grid | SwiftUI by Example",
  "desc": "How to position views in a fixed grid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-fixed-grid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />