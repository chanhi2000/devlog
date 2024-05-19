---
lang: ko-KR
title: How to override animations with transactions
description: Article(s) > How to override animations with transactions
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
      content: Article(s) > How to override animations with transactions
    - property: og:description
      content: How to override animations with transactions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-override-animations-with-transactions.html
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
  "title": "How to override animations with transactions | SwiftUI by Example",
  "desc": "How to override animations with transactions",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-override-animations-with-transactions",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides a `withTransaction()` function that allows us to override animations at runtime, for example to remove an implicit animation and replace it with something custom.

For example, this code toggles some text between small and large sizes, animating all the way because it has an implicit animation attached:

```swift
struct ContentView: View {
    @State private var isZoomed = false

    var body: some View {
        VStack {
            Button("Toggle Zoom") {
                isZoomed.toggle()
            }

            Spacer()
                .frame(height: 100)

            Text("Zoom Text")
                .font(.title)
                .scaleEffect(isZoomed ? 3 : 1)
                .animation(.easeInOut(duration: 2), value: isZoomed)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-override-animations-with-transactions-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-override-animations-with-transactions-1~dark.mp4" />

Transactions allow us to override existing animations on a case by case basis. For example, you might decide that in one particular circumstance you want the text’s animation to happen in a fast, linear way rather than it’s existing animation.

To do that, first create a new `Transaction` instance using whatever animation you want, then set its `disablesAnimations` value to true so you override any existing animations that would apply. When you’re ready, call `withTransaction()` using your transaction object, then go ahead and adjust all the state you want to change – it will all be animated using your transaction.

To demonstrate this in action, here’s our same text scaling example code except using a transaction to insert a custom animation that overrides the implicit one:

```swift
struct ContentView: View {
    @State private var isZoomed = false

    var body: some View {
        VStack {
            Button("Toggle Zoom") {
                var transaction = Transaction(animation: .linear)
                transaction.disablesAnimations = true

                withTransaction(transaction) {
                    isZoomed.toggle()
                }
            }

            Spacer()
                .frame(height: 100)

            Text("Zoom Text")
                .font(.title)
                .scaleEffect(isZoomed ? 3 : 1)
                .animation(.easeInOut(duration: 2), value: isZoomed)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-override-animations-with-transactions-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-override-animations-with-transactions-2~dark.mp4" />

For even *more* control you can attach a `transaction()` modifier to any view you want, allowing you to override any transactions that apply to the view.

For example, we could add a second zooming text view to our example, still using a transaction to trigger the zoom animation, but this time we’re going to use the `transaction()` modifier on the second text view so we disable any transactions on that one view – we’re overriding the override, in effect:

```swift
struct ContentView: View {
    @State private var isZoomed = false

    var body: some View {
        VStack {
            Button("Toggle Zoom") {
                var transaction = Transaction(animation: .linear)
                transaction.disablesAnimations = true

                withTransaction(transaction) {
                    isZoomed.toggle()
                }
            }

            Spacer()
                .frame(height: 100)

            Text("Zoom Text 1")
                .font(.title)
                .scaleEffect(isZoomed ? 3 : 1)

            Spacer()
                .frame(height: 100)

            Text("Zoom Text 2")
                .font(.title)
                .scaleEffect(isZoomed ? 3 : 1)
                .transaction { t in
                    t.animation = .none
                }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-override-animations-with-transactions-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-override-animations-with-transactions-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create basic animations | SwiftUI by Example",
  "desc": "How to create basic animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-basic-animations.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-step-animations-using-phase-animators.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to apply multiple animations to a view | SwiftUI by Example",
  "desc": "How to apply multiple animations to a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-apply-multiple-animations-to-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to reduce animations when requested | SwiftUI by Example",
  "desc": "How to reduce animations when requested",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-reduce-animations-when-requested.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to synchronize animations from one view to another with matchedGeometryEffect() | SwiftUI by Example",
  "desc": "How to synchronize animations from one view to another with matchedGeometryEffect()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::



---

<TagLinks />