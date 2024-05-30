---
lang: ko-KR
title: How to load a remote image from a URL
description: Article(s) > How to load a remote image from a URL
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
      content: Article(s) > How to load a remote image from a URL
    - property: og:description
      content: How to load a remote image from a URL
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-a-remote-image-from-a-url.html
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
  "title": "How to load a remote image from a URL | SwiftUI by Example",
  "desc": "How to load a remote image from a URL",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-load-a-remote-image-from-a-url",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has a dedicated `AsyncImage` for downloading and displaying remote images from the internet. In its simplest form you can just pass a URL, like this:

```swift
AsyncImage(url: URL(string: "https://hws.dev/paul.jpg"))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-load-a-remote-image-from-a-url-1.zip)

![A phone showing an image of Paul Hudson.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-load-a-remote-image-from-a-url-1~dark.png)

Note how the URL is optional – the `AsyncImage` will simply show a default gray placeholder if the URL string is invalid. And if the image can't be loaded for some reason – if the user is offline, or if the image doesn't exist – then the system will continue showing the same placeholder image.

![A phone showing a large gray placeholder rectangle.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-load-a-remote-image-from-a-url-2~dark.png)

Because SwiftUI has no idea how big the downloaded image is going to be, by default `AsyncImage` has a flexible width and height while it's loading. As a result, unless you specify otherwise it will take up a lot of space in your UI while the image loads, then jump to the correct size as soon as the image is loaded.

Although you _can_ attach a frame to your image, it will only affect the placeholder by default – if your finished image arrives at a different size, your UI will have to adapt to fit it.

A better solution is to add functions to control how the resulting image is shown and what kind of placeholder you want. For example, this fetches our image and makes it resizable, but while it's loading uses a red placeholder color:

```swift
AsyncImage(url: URL(string: "https://hws.dev/paul.jpg")) { image in 
  image.resizable() 
} placeholder: { 
  Color.red 
}.frame(width: 128, height: 128)
.clipShape(RoundedRectangle(cornerRadius: 25))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-load-a-remote-image-from-a-url-2.zip)

![A rounded red rectangle as a placeholder.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-load-a-remote-image-from-a-url-3~dark.png)

![An image with rounded corners of Paul Hudson smiling.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-load-a-remote-image-from-a-url-4~dark.png)

Because both the resulting image and the placeholder color are now resizable, the `frame()` modifier is able to make sure our `AsyncImage` stays at the correct size the entire time. Before you ask: no, there is no `resizable()` modifier available directly on `AsyncImage`.

::: note

By default the image is assumed to have a scale of 1, meaning designed for non-retina screens. However, you can also control the scale with a second parameter if you already know the correct scale:

:::

```swift
AsyncImage(url: URL(string: "https://hws.dev/paul.jpg"), scale: 2)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-load-a-remote-image-from-a-url-3.zip)

![An image of Paul Hudson.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-load-a-remote-image-from-a-url-5~dark.png)

For full control over your `AsyncImage`, you should use a single-closure variant of `AsyncImage` that handles the loading phase. This approach gives you complete control over the image loading process, allowing you to show one thing when the image is loaded, another thing if the load failed, and of course the image itself when it succeeded.

This can be `.empty` because loading hasn't completed yet, `.failure` if the image load failed, `success` with the image ready if it worked, and an unknown default case in case Apple add more options in the future.

For example, this shows a spinner, a placeholder error picture, or the actually loaded picture depending on how things went:

```swift
struct ContentView: View {
  var body: some View {
    AsyncImage(url: URL(string: "https://hws.dev/paul.jpg")) { phase in 
      switch phase { 
        case .failure: 
          Image(systemName: "photo")
            .font(.largeTitle) 
        case .success(let image): 
          image.resizable() 
        default: ProgressView() 
      }
    }
    .frame(width: 256, height: 256)
    .clipShape(RoundedRectangle(cornerRadius: 25))
  }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-load-a-remote-image-from-a-url-4.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to save and load NavigationStack paths using Codable | SwiftUI by Example",
  "desc": "How to save and load NavigationStack paths using Codable",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-save-and-load-navigationstack-paths-using-codable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to lazy load views using LazyVStack and LazyHStack | SwiftUI by Example",
  "desc": "How to lazy load views using LazyVStack and LazyHStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to load custom colors from an asset catalog | SwiftUI by Example",
  "desc": "How to load custom colors from an asset catalog",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-custom-colors-from-an-asset-catalog.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw images using Image views | SwiftUI by Example",
  "desc": "How to draw images using Image views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-images-using-image-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />