---
lang: ko-KR
title: How to read the size and position of a scrollview
description: Article(s) > How to read the size and position of a scrollview
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
      content: Article(s) > How to read the size and position of a scrollview
    - property: og:description
      content: How to read the size and position of a scrollview
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.html
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
  "title": "How to read the size and position of a scrollview | SwiftUI by Example",
  "desc": "How to read the size and position of a scrollview",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-the-size-and-position-of-a-scrollview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Improved in iOS 18**

SwiftUI’s `onScrollGeometryChange()` modifier lets us be notified when a scroll view changes its content size (how much content it has), content offset (how far the user has scrolled), and more. The API is a little tricky to understand, so I'll show you an example then explain.

This code shows a scrolling list of rows. There is only 1 row at first, but another row is added every time you press a button:

```swift
struct ContentView: View {
    @State private var counter = 1

    var body: some View {
        VStack {
            ScrollView {
                ForEach(0..<counter, id: \.self) { i in
                    Text("Row \(i)")
                }
            }
            .onScrollGeometryChange(for: Double.self) { geo in
                geo.contentSize.height
            } action: { oldValue, newValue in
                print("Height is now \(newValue)")
            }

            Button("Add a row") {
                counter += 1
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-read-the-size-and-position-of-a-scrollview-1.zip)

The important part is at the end: `onScrollGeometryChange()`. The parameters I've provided are:

- `Double.self`. This means we intend to focus on some kind of `Double` value. It doesn't say what it means, only that it will be a `Double`.
- A trailing closure that accepts a `geo` parameter. This is a `ScrollGeometry` object, which is what lets us read the content size, offset, insets, and more. This must return a `Double`, because that's what we said would happen in the first parameter, and you should send back the value you want to watch.
- A second trailing closure called `action`, which is called when the watched value from the previous closure changes.

So, we're saying we want to watch the height of our content size, and whenever it changes print out the new value.

`ScrollGeometry` has a variety of different values we can read, but be careful: if you watch a value that changes extremely frequently, you're generating a *lot* of work for SwiftUI and it's going to be pretty CPU-intensive.

For example, you could track the exact scroll offset of your scroll view like this:

```swift
struct ContentView: View {
    @State private var yOffset = 0.0

    var body: some View {
        VStack {
            ScrollView {
                ForEach(0..<100, id: \.self) { i in
                    Text("Row \(i)")
                }
            }
            .onScrollGeometryChange(for: Double.self) { geo in
                geo.contentOffset.y
            } action: { oldValue, newValue in
                yOffset = newValue
            }

            Text("Offset: \(yOffset)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-read-the-size-and-position-of-a-scrollview-2.zip)

::: important

To be absolutely clear, that `action` closure will fire a *lot* when the user scrolls, and updating the UI 120 times a second will really burn through the user's battery. I would strongly recommend against using the above code in a shipping project, but hopefully at least it shows you how this modifier works!

:::

Here are some tips to help you make the most of this API without overloading SwiftUI:

- Your transform closure will be called extremely frequently, so make it as fast as you can and make its return value change as *infrequently* as you can – you want to reduce how often your action closure is called.
- Boiling your transformation down to a Boolean (e.g. "are we at least past Y100" or "has the user moved to a negative scroll position?") is very efficient, because it flips states rarely and therefore calls your action closure rarely too.
- If your action closure needs to update views, do so very carefully – if you're changing multiple views every time the user scrolls down a single point, you'll easily find your scroll performance is poor.
- If possible, consider using `visualEffect()` or `scrollTransition()` instead.

::: details Similar solutions…

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
  "title": "How to position views in a grid using LazyVGrid and LazyHGrid | SwiftUI by Example",
  "desc": "How to position views in a grid using LazyVGrid and LazyHGrid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to position and style subviews that come from a different view | SwiftUI by Example",
  "desc": "How to position and style subviews that come from a different view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md",
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

:::

---

<TagLinks />