---
lang: ko-KR
title: How to support drag and drop in SwiftUI
description: Article(s) > How to support drag and drop in SwiftUI
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
      content: Article(s) > How to support drag and drop in SwiftUI
    - property: og:description
      content: How to support drag and drop in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-support-drag-and-drop-in-swiftui.html
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
  "title": "How to support drag and drop in SwiftUI | SwiftUI by Example",
  "desc": "How to support drag and drop in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 16**

SwiftUI's `Transferable` protocol allows us to add drag and drop support to our apps without a great deal of code, using the `dropDestination()` and `draggable()` modifiers.

For example, this will accept text dragged into our app, and render it onto a `Canvas`:

```swift
struct ContentView: View {
    @State private var message = ""

    var body: some View {
        Canvas { context, size in
            let formattedText = Text(message).font(.largeTitle).foregroundStyle(.red)
            context.draw(formattedText, in: CGRect(origin: .zero, size: size))
        }
        .dropDestination(for: String.self) { items, location in
            message = items.first ?? ""
            return true
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-support-drag-and-drop-in-swiftui-1.zip)

The key part there is the `dropDestination()` modifier, which tells SwiftUI four things:

1. We accept only strings.
2. We expect to receive an array of items that were dropped on the app. This will automatically be an array of `String`.
3. We want to be told where they were dropped. This will be a `CGPoint` in the canvas's coordinate space.
4. We consider the drop operation to be successful, so we return <FontIcon icon="iconfont icon-boolean"/>`true`.

Handling images is a little trickier because we'll be given a `Data` instance representing the contents of the image. We need to convert that to a `UIImage`, and put the result into an image to render.

Fortunately, if we support `Data` then both will work, so code like this lets the user drag an image from Photos right into our app:

```swift
struct ContentView: View {
    @State private var image = Image(systemName: "photo")

    var body: some View {
        image
            .resizable()
            .scaledToFit()
            .frame(width: 300, height: 300)
            .dropDestination(for: Data.self) { items, location in
                guard let item = items.first else { return false }
                guard let uiImage = UIImage(data: item) else { return false }
                image = Image(uiImage: uiImage)
                return true
            }

    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-run-code-when-your-app-launches-2.zip)

Accepting arrays of data – for example letting the user drag multiple images into our – follows the same procedure: using `dropDestination(for: Data.self)`, but now rather than just reading the first item you should use them all.

For example, this shows several pictures in a `ScrollView` by converting each `Data` instance into a `UIImage`, and then into a SwiftUI `Image`:

```swift
struct ContentView: View {
    @State private var images = [Image]()

    var body: some View {
        ScrollView {
            VStack {
                ForEach(0..<images.count, id: \.self) { i in
                    images[i]
                        .resizable()
                        .scaledToFit()
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
        .dropDestination(for: Data.self) { items, location in
            images = items.compactMap {
                UIImage(data: $0).map(Image.init)
            }

            return true
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-run-code-when-your-app-launches-3.zip)

When you want to add dragging to your views, add the `draggable()` modifier using whatever `Transferable` content you want. By default SwiftUI will use the view itself for the drag preview, and if you're dragging an image from within your app you'll find you can use the drop type of `Image.self` rather than having to convert `Data` to `UIImage` first.

For example, this shows three different SF Symbols and lets the user drag any of them into the box below:

```swift
struct ContentView: View {
    let sports = ["figure.badminton", "figure.cricket", "figure.fencing"]
    @State private var dropImage = Image(systemName: "photo")

    var body: some View {
        VStack {
            HStack {
                ForEach(sports, id: \.self) { sport in
                    Image(systemName: sport)
                        .frame(minWidth: 50, minHeight: 50)
                        .background(.red)
                        .foregroundStyle(.white)
                        .draggable(Image(systemName: sport))
                }
            }
            .frame(minWidth: 300, minHeight: 70)
            .background(.gray)

            dropImage
                .frame(width: 150, height: 150)
                .background(.green)
                .foregroundStyle(.white)
                .dropDestination(for: Image.self) { items, location in
                    dropImage = items.first ?? Image(systemName: "photo")
                    return true
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-run-code-when-your-app-launches-4.zip)

::: important

When you're dragging an SF Symbol image, SwiftUI will send the image pixel data and not the neatly scalable vector we're used to. This means dropped `Image` data won't respond to things like `font()` or `foregroundStyle()` like you might expect.

:::

If you want to show a custom drag preview, add a trailing closure with some SwiftUI views. For example, this makes a draggable golf image and adds the text “Figure playing golf” next to it:

```swift
Image(systemName: "figure.golf")
    .frame(minWidth: 50, minHeight: 50)
    .background(.red)
    .foregroundStyle(.white)
    .draggable(Image(systemName: "figure.golf")) {
        Label("Figure playing golf", systemImage: "figure.golf")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-support-drag-and-drop-in-swiftui-5.zip)

::: details Similar solutions…

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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/frequently-asked-questions-about-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />