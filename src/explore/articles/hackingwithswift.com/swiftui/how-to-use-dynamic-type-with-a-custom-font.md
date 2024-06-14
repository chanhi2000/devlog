---
lang: ko-KR
title: How to use Dynamic Type with a custom font
description: Article(s) > How to use Dynamic Type with a custom font
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
      content: Article(s) > How to use Dynamic Type with a custom font
    - property: og:description
      content: How to use Dynamic Type with a custom font
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-use-dynamic-type-with-a-custom-font.html
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
  "title": "How to use Dynamic Type with a custom font | SwiftUI by Example",
  "desc": "How to use Dynamic Type with a custom font",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’re using iOS 14 or later you’ll find your custom fonts scale automatically with no further work from you. However, if you want your fonts to scale relative to a specific Dynamic Type font, you should use the `relativeTo` parameter like this:

```swift
Text("Scaling")
    .font(.custom("Georgia", size: 24, relativeTo: .headline))
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font-1~dark.mp4" />

That will start the font at 24pt, but it will scale up and down relative to the Headline Dynamic Type font.

If you want to disable Dynamic Type for your font – if you want to fix the font size so it never changes regardless of the Dynamic Type setting – then you should replace `size` with `fixedSize` when creating your custom font, like this:

```swift
VStack {
    Text("This Scales")
        .font(.custom("Georgia", size: 24))

    Text("This is Fixed")
        .font(.custom("Georgia", fixedSize: 24))
}
```

If you need to target iOS 13 then continue reading below…

SwiftUI comes with support for all of Dynamic Type’s font sizes, all set using the `.font()` modifier. However, if you ask for a specific font and size, you’ll find your text no longer scales up or down automatically according to the user’s Dynamic Type settings – it remains fixed.

To work around this we need to create a custom `ViewModifier` that can scale up our font size based on the current accessibility setting, and also detect when that setting changes. 

I’m going to give you the code first, then walk through how it works and why:

```swift
@available(iOS 13, macCatalyst 13, tvOS 13, watchOS 6, *)
struct ScaledFont: ViewModifier {
    @Environment(\.sizeCategory) var sizeCategory
    var name: String
    var size: Double

    func body(content: Content) -> some View {
       let scaledSize = UIFontMetrics.default.scaledValue(for: size)
        return content.font(.custom(name, size: scaledSize))
    }
}

@available(iOS 13, macCatalyst 13, tvOS 13, watchOS 6, *)
extension View {
    func scaledFont(name: String, size: Double) -> some View {
        return self.modifier(ScaledFont(name: name, size: size))
    }
}
```

That’s all the code required to get custom fonts working with Dynamic Type. As an example of using it, here’s a list with two text views, one using the built-in font and one with a scalable Georgia font:

```swift
struct ContentView: View {
    var body: some View {
        List {
            Text("Hello World")
            Text("Hello World")
                .scaledFont(name: "Georgia", size: 12)
        }
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font-2~dark.mp4" />

Now you’ve seen *how* it works, let’s look at *why* it works.

First, we have this custom view modifier:

```swift
struct ScaledFont: ViewModifier {
    @Environment(\.sizeCategory) var sizeCategory
    var name: String
    var size: Double

    func body(content: Content) -> some View {
       let scaledSize = UIFontMetrics.default.scaledValue(for: size)
        return content.font(.custom(name, size: scaledSize))
    }
}
```

That accepts a name and size for our font, then uses `UIFontMetrics` to scale up the requested font to whatever matches the user’s current device setting, and send it back.

We then wrap that inside an extension on `View` to make it easier to use:

```swift
@available(iOS 13, macCatalyst 13, tvOS 13, watchOS 6, *)
extension View {
    func scaledFont(name: String, size: Double) -> some View {
        return self.modifier(ScaledFont(name: name, size: size))
    }
}
```

All that does is wrap up the call to our custom font modifier so that it looks nicer in our views – it means we write `.scaledFont(name: "Georgia", size: 12)` to use it, rather than `.modifier(ScaledFont(name: "Georgia", size: 12))`.

Now, you might wonder why we need the custom view modifier if all we do is pass on the data. Well, the clue lies in this line in our view modifier:

```swift
@Environment(\.sizeCategory) var sizeCategory
```

That asks the system to provide the current size category from the environment, which determines what level Dynamic Type is set to. The trick is that we *don’t actually use it* – we don’t care what the Dynamic Type setting is, but by asking the system to update us when it changes our `UIFontMetrics` code will be run at the same time, causing our font to scale correctly.

::: tip

The `UIFontMetrics` class is not available on macOS, which is why I’ve added the `@available` markers.

:::

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to specify the Dynamic Type sizes a view supports | SwiftUI by Example",
  "desc": "How to specify the Dynamic Type sizes a view supports",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a list of dynamic items | SwiftUI by Example",
  "desc": "How to create a list of dynamic items",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-dynamic-items.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type 'String' to expected argument type 'Text'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'” | SwiftUI by Example",
  "desc": "How to fix “Cannot convert value of type '() -> ()' to expected argument type '() -> _'”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />