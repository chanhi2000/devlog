---
lang: ko-KR
title: How to animate the size of text
description: Article(s) > How to animate the size of text
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
      content: Article(s) > How to animate the size of text
    - property: og:description
      content: How to animate the size of text
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-the-size-of-text.html
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
  "title": "How to animate the size of text | SwiftUI by Example",
  "desc": "How to animate the size of text",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-animate-the-size-of-text",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

From iOS 16 and onwards, SwiftUI can animate text beautifully right out of the box – it takes no extra work from us. So, code like this smoothly animate some text between two different sizes, re-rendering the text automatically so it’s always crisp:

```swift
struct ContentView: View {
    @State private var fontSize = 32.0

    var body: some View {
        Text("Hello, World!")
            .font(.custom("Georgia", size: fontSize))
            .onTapGesture {
                withAnimation(.spring(response: 0.5, dampingFraction: 0.5, blendDuration: 1).repeatForever()) {
                    fontSize = 72
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-animate-the-size-of-text-1.zip)

If you need to target iOS 15 and below then SwiftUI doesn’t have a built-in way to animate text size, but we can create an animatable view modifier that makes the effect possible. This is *not* the same as using a simple `scaleEffect()` modifier – that will cause your text to become blurry when scaled up, whereas this custom animation will re-render your text correctly so it looks great at all sizes.

This takes several steps:

1, Creating an animatable view modifier that accepts a name and size, and uses the size property for its animatable data.
2, Wrapping that in a `View` extension to make it easier to use.
3, Trying it out in a SwiftUI `View`.

Here’s a complete example in code:

```swift
// A modifier that animates a font through various sizes.
struct AnimatableCustomFontModifier: ViewModifier, Animatable {
    var name: String
    var size: Double

    var animatableData: Double {
        get { size }
        set { size = newValue }
    }

    func body(content: Content) -> some View {
        content
            .font(.custom(name, size: size))
    }
}

// To make that easier to use, I recommend wrapping
// it in a `View` extension, like this:
extension View {
    func animatableFont(name: String, size: Double) -> some View {
        self.modifier(AnimatableCustomFontModifier(name: name, size: size))
    }
}

// An example View trying it out
struct ContentView: View {
    @State private var fontSize = 32.0

    var body: some View {
        Text("Hello, World!")
            .animatableFont(name: "Georgia", size: fontSize)
            .onTapGesture {
                withAnimation(.spring(response: 0.5, dampingFraction: 0.5, blendDuration: 1).repeatForever()) {
                    fontSize = 72
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-animate-the-size-of-text-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-the-size-of-text-1~dark.mp4" />

That’s it! To try it out, make an `@State` property to store your font size, then pass that into `animatableFont()`.

If you wanted to use Apple’s system fonts, the best way to do that is with a separate modifier. This way you can be sure your UI stays updated if the font ever changes.

Here’s how that looks:

```swift
struct AnimatableSystemFontModifier: ViewModifier, Animatable {
    var size: Double
    var weight: Font.Weight
    var design: Font.Design

    var animatableData: Double {
        get { size }
        set { size = newValue }
    }

    func body(content: Content) -> some View {
        content
            .font(.system(size: size, weight: weight, design: design))
    }
}

extension View {
    func animatableSystemFont(size: Double, weight: Font.Weight = .regular, design: Font.Design = .default) -> some View {
        self.modifier(AnimatableSystemFontModifier(size: size, weight: weight, design: design))
    }
}

struct ContentView: View {
    @State private var fontSize = 32.0

    var body: some View {
        Text("Hello, World!")
            .animatableSystemFont(size: fontSize)
            .onTapGesture {
                withAnimation(.spring(response: 0.5, dampingFraction: 0.5, blendDuration: 1).repeatForever()) {
                    fontSize = 72
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-animate-the-size-of-text-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-the-size-of-text-2~dark.mp4" />

I first saw this technique applied in [<FontIcon icon="fa-brands fa-apple"/>Apple sample code](https://developer.apple.com/documentation/swiftui/fruta_building_a_feature-rich_app_with_swiftui).

::: details Similar solutions…

```component VPCard
{
  "title": "How to animate changes in binding values | SwiftUI by Example",
  "desc": "How to animate changes in binding values",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-changes-in-binding-values.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to animate SF Symbols | SwiftUI by Example",
  "desc": "How to animate SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a fixed size Spacer | SwiftUI by Example",
  "desc": "How to make a fixed size Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-fixed-size-spacer.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to automatically switch between HStack and VStack based on size class | SwiftUI by Example",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create different layouts using size classes | SwiftUI by Example",
  "desc": "How to create different layouts using size classes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-different-layouts-using-size-classes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />