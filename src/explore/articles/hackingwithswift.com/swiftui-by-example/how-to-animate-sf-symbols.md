---
lang: ko-KR
title: How to animate SF Symbols
description: Article(s) > How to animate SF Symbols
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
      content: Article(s) > How to animate SF Symbols
    - property: og:description
      content: How to animate SF Symbols
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-sf-symbols.html
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
  "title": "How to animate SF Symbols | SwiftUI by Example",
  "desc": "How to animate SF Symbols",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-animate-sf-symbols",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI provides the `symbolEffect()` modifier to add built-in animation effects for SF Symbols and produce a real touch of delight with almost no effort.

For example, we could animate a dog icon up and down with a gentle bounce whenever a button is pressed:

```swift
struct ContentView: View {
    @State private var petCount = 0

    var body: some View {
        Button {
            petCount += 1
        } label: {
            Label("Pet the Dog", systemImage: "dog")
        }
        .symbolEffect(.bounce, value: petCount)
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-animate-sf-symbols-1.zip)

![A button saying Pet the Dog, where the dog icon bounces up then down as the button is pressed.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-sf-symbols-1~dark.gif)

You could also try `.pulse` to animate the opacity, but where things get *really* clever is when you use SF Symbols that have multiple layers because these can be animated individually or together.

By default, layers are animated individually, so code like this produces a wave-like effect on the “mail.stack” icon:

```swift
struct ContentView: View {
    @State private var isFavorite = false

    var body: some View {
        Button {
            isFavorite.toggle()
        } label: {
            Label("Activate Inbox Zero", systemImage: "mail.stack")
        }
        .symbolEffect(.bounce.down, value: isFavorite)
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-animate-sf-symbols-2.zip)

![A button saying Activate Inbox Zero, where an inbox icon has a tiered animation effect when pressed.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-sf-symbols-2~dark.gif)

Honestly, there are so many variations available, and you can even add extra options to get customize speed and repeat count.

For example, this animates the symbol three times at 3x speed:

```swift
struct ContentView: View {
    @State private var isFavorite = false

    var body: some View {
        Button {
            isFavorite.toggle()
        } label: {
            Label("Activate Inbox Zero", systemImage: "mail.stack")
        }
        .symbolEffect(.bounce, options: .speed(3).repeat(3), value: isFavorite)
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-animate-sf-symbols-3.zip)

![A button saying Activate Inbox Zero, which has a fluttering animation when pressed](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-sf-symbols-3~dark.gif)

The variable color animation is particularly powerful, because SF Symbols lets you control how the animation displays each layer – `.variableColor.iterative` colors one layer at a time, `.variableColor.cumulative` adds each new layer to the previously colored layers, and you can add `reversing` to either of those to make the animation play forward then backward.

Here’s one larger example that shows off a range of possibilities:

```swift
struct ContentView: View {
    @State private var animationsRunning = false

    var body: some View {

        Button("Start Animations") {
            withAnimation {
                animationsRunning.toggle()
            }
        }

        VStack {
            HStack {
                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.iterative, value: animationsRunning)

                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.cumulative, value: animationsRunning)

                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.reversing.iterative, value: animationsRunning)

                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.reversing.cumulative, value: animationsRunning)
            }

            HStack {
                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.iterative, options: .repeating, value: animationsRunning)

                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.cumulative, options: .repeat(3), value: animationsRunning)

                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.reversing.iterative, options: .speed(3), value: animationsRunning)

                Image(systemName: "square.stack.3d.up")
                    .symbolEffect(.variableColor.reversing.cumulative, options: .repeat(3).speed(3), value: animationsRunning)
            }
        }
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-animate-sf-symbols-4.zip)

![A grid of icons that animate in various ways when activated. Some animate their layers individually, some animate their layers cumulatively, and some repeat.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-sf-symbols-4~dark.gif)

And finally, if you’re keeping your views the same and are merely changing their content – if you’re switching the icon for a fixed label based on user interaction, for example – then you should use the `contentTransition()` modifier along with one of the options for switching icons.

For example, this uses the `.replace` transition to make one icon fade out and another arrive:

```swift
struct ContentView: View {
    @State private var isFavorite = false

    var body: some View {
        VStack {
            Button {
                withAnimation {
                    isFavorite.toggle()
                }
            } label: {
                Label("Toggle Favorite", systemImage: isFavorite ? "checkmark": "heart")
            }
            .contentTransition(.symbolEffect(.replace))
        }
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-animate-sf-symbols-5.zip)

![A button saying Toggle Favorite, which animates smoothly between a checkmark and a heart when pressed](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-animate-sf-symbols-5~dark.gif)

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to get custom colors and transparency with SF Symbols",
  "desc": "How to get custom colors and transparency with SF Symbols",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-get-custom-colors-and-transparency-with-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to render images using SF Symbols",
  "desc": "How to render images using SF Symbols",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-images-using-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to animate the size of text",
  "desc": "How to animate the size of text",
  "link": "/swift/swiftui-by-example/18-animation/how-to-animate-the-size-of-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to animate changes in binding values",
  "desc": "How to animate changes in binding values",
  "link": "/swift/swiftui-by-example/18-animation/how-to-animate-changes-in-binding-values.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />