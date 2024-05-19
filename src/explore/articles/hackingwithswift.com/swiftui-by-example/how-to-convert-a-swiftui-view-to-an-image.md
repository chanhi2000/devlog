---
lang: ko-KR
title: How to convert a SwiftUI view to an image
description: Article(s) > How to convert a SwiftUI view to an image
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
      content: Article(s) > How to convert a SwiftUI view to an image
    - property: og:description
      content: How to convert a SwiftUI view to an image
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.html
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
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 16**

SwiftUI’s `ImageRenderer` class is able to render any SwiftUI view hierarchy into an image, which can then be saved, shared, or reused somehow else. At its simplest, the code needed is this:

```swift
let renderer = ImageRenderer(content: Text("Hello, world!"))

if let uiImage = renderer.uiImage {
    // use the rendered image somehow
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-convert-a-swiftui-view-to-an-image-1.zip)

However, there are four key points to be aware of:

1. If you don’t specify otherwise, your image will be rendered at 1x scale – that will look fuzzy on 2x or 3x resolution screens.
2. You must not attempt to use `ImageRenderer` off the main actor, which might mean marking your rendering code with `@MainActor`.
3. You can put the SwiftUI views you want to render right into the `ImageRenderer(content:)` initializer if you want, but I nearly always find separating them out into a dedicated view results in much cleaner code.
4. Unlike the older `UIGraphicsImageRenderer` there is no easy way to read PNG or JPEG data directly from `ImageRenderer`, so as you can see in the code we need to read its resulting `UIImage` then call the `pngData()` method of *that*. This makes the code more complex for cross-platform users, but when I suggested to Apple that they could make it better they told me to use the (ancient) ImageI/O framework. (Spoiler: don’t use it, it will just lead to pain.)

Let’s look at a second example that is more realistic – this automatically uses the correct image scale for the device, uses `@MainActor` to ensure the rendering code is safe to call, carves out the view to render into its own struct, and then lets users share the result using `ShareLink`:

```swift
// An example view to render
struct RenderView: View {
    let text: String

    var body: some View {
        Text(text)
            .font(.largeTitle)
            .foregroundStyle(.white)
            .padding()
            .background(.blue)
            .clipShape(Capsule())
    }
}

struct ContentView: View {
    @State private var text = "Your text here"
    @State private var renderedImage = Image(systemName: "photo")
    @Environment(\.displayScale) var displayScale

    var body: some View {
        VStack {
            renderedImage

            ShareLink("Export", item: renderedImage, preview: SharePreview(Text("Shared image"), image: renderedImage))

            TextField("Enter some text", text: $text)
                .textFieldStyle(.roundedBorder)
                .padding()
        }
        .onChange(of: text) { _ in render() }
        .onAppear { render() }
    }

    @MainActor func render() {
        let renderer = ImageRenderer(content: RenderView(text: text))

        // make sure and use the correct display scale for this device
        renderer.scale = displayScale

        if let uiImage = renderer.uiImage {
            renderedImage = Image(uiImage: uiImage)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-convert-a-swiftui-view-to-an-image-2.zip)

As you can see, that calls `render()` when the view is shown and also whenever `text` changes.

If you need to target iOS 15 and below, then SwiftUI’s views don’t have a built-in function to render a view as an image – we need to write one ourselves. The key here is to wrap the view using `UIHostingController`, then render its view hierarchy into a `UIGraphicsImageRenderer`.

This is best done using an extension on `View`, so you can call it naturally. This should wrap the view in a hosting controller, adjust the size of the hosting controller’s view to be the intrinsic content size of the SwiftUI view, clear any background color to keep the rendered image clean, then render the view into an image and send it back.

Here’s how that looks in code:

```swift
extension View {
    func snapshot() -> UIImage {
        let controller = UIHostingController(rootView: self)
        let view = controller.view

        let targetSize = controller.view.intrinsicContentSize
        view?.bounds = CGRect(origin: .zero, size: targetSize)
        view?.backgroundColor = .clear

        let renderer = UIGraphicsImageRenderer(size: targetSize)

        return renderer.image { _ in
            view?.drawHierarchy(in: controller.view.bounds, afterScreenUpdates: true)
        }
    }
}
```

To use that extension in SwiftUI, you should create your view as a property so you can reference it on demand – for example, in response to a button action. 

For example, this renders a styled text view to an image, then saves it to the user’s photo album:

```swift
struct ContentView: View {
    var textView: some View {
        Text("Hello, SwiftUI")
            .padding()
            .background(.blue)
            .foregroundStyle(.white)
            .clipShape(Capsule())
    }

    var body: some View {
        VStack {
            textView

            Button("Save to image") {
                let image = textView.snapshot()

                UIImageWriteToSavedPhotosAlbum(image, nil, nil, nil)
            }
        }
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image-1~dark.mp4" />

::: important

In order to call `UIImageWriteToSavedPhotosAlbum()` you *must* add the `NSPhotoLibraryAddUsageDescription` key to your Info.plist and explain to the user why you want to write images. If you fail to do this your app will crash when you attempt to write out the image.

:::

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
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to load a remote image from a URL | SwiftUI by Example",
  "desc": "How to load a remote image from a URL",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-a-remote-image-from-a-url.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw images using Image views | SwiftUI by Example",
  "desc": "How to draw images using Image views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-images-using-image-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a view dismiss itself | SwiftUI by Example",
  "desc": "How to make a view dismiss itself",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-view-dismiss-itself.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::



---

<TagLinks />