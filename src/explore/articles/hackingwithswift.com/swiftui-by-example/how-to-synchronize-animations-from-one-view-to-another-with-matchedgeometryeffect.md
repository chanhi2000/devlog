---
lang: ko-KR
title: How to synchronize animations from one view to another with matchedGeometryEffect()
description: Article(s) > How to synchronize animations from one view to another with matchedGeometryEffect()
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
      content: Article(s) > How to synchronize animations from one view to another with matchedGeometryEffect()
    - property: og:description
      content: How to synchronize animations from one view to another with matchedGeometryEffect()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.html
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
  "title": "How to synchronize animations from one view to another with matchedGeometryEffect() | SwiftUI by Example",
  "desc": "How to synchronize animations from one view to another with matchedGeometryEffect()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you have the same view appearing in two different parts of your view hierarchy and want to animate between them – for example, going from a list view to a zoomed detail view – then you should use SwiftUI’s `matchedGeometryEffect()` modifier, which is a bit like Magic Move in Keynote.

To use the modifier, attach it to a pair of views that are the same, in different parts of your hierarchy. With that done, when you switch between your two view states you’ll find SwiftUI smoothly animates your synchronized view.

To try it out, first create some sort of layout where your views appear in two locations. In this example, I have a red circle then some text in one view state, but in the other view state the circle comes after the text and changes color:

```swift
struct ContentView: View {
    @State private var isFlipped = false

    var body: some View {
        VStack {
            if isFlipped {
                Circle()
                    .fill(.red)
                    .frame(width: 44, height: 44)
                Text("Taylor Swift – 1989")
                    .font(.headline)
            } else {
                Text("Taylor Swift – 1989")
                    .font(.headline)
                Circle()
                    .fill(.blue)
                    .frame(width: 44, height: 44)
            }
        }
        .onTapGesture {
            withAnimation {
                isFlipped.toggle()
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect-1~dark.mp4" />

If you run that, you’ll see SwiftUI fades the views in and out to create a transition – it’s okay, but we can do better.

First, you need to use the `@Namespace` property wrapper to create a global namespace for your views. In practice this isn’t anything other than a property on your view, but behind the scenes this lets us attach views together. 

So, you might add a property like this one: `@Namespace private var animation`.

Next you need to add `.matchedGeometryEffect(id: YourIdentifierHere, in: animation)` to all the views you want to animate with a synchronized effect. The `YourIdentifierHere` part should be replaced with some unique number that is shared by each part of your pair.

In our example, we might use this for the circles:

```swift
.matchedGeometryEffect(id: "Shape", in: animation)
```

And use this for the text:

```swift
.matchedGeometryEffect(id: "AlbumTitle", in: animation)
```

And that’s it – when you run the example again you’ll see the two views move smoothly.

Here’s how the final code looks:

```swift
struct ContentView: View {
    @Namespace private var animation
    @State private var isFlipped = false

    var body: some View {
        VStack {
            if isFlipped {
                Circle()
                    .fill(.red)
                    .frame(width: 44, height: 44)
                    .matchedGeometryEffect(id: "Shape", in: animation)
                Text("Taylor Swift – 1989")
                    .matchedGeometryEffect(id: "AlbumTitle", in: animation)
                    .font(.headline)
            } else {
                Text("Taylor Swift – 1989")
                    .matchedGeometryEffect(id: "AlbumTitle", in: animation)
                    .font(.headline)
                Circle()
                    .fill(.blue)
                    .frame(width: 44, height: 44)
                    .matchedGeometryEffect(id: "Shape", in: animation)
            }
        }
        .onTapGesture {
            withAnimation {
                isFlipped.toggle()
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect-2~dark.mp4" />

For a more advanced example, try this – it borrows the album display style from Apple Music, expanding a small view up to something larger when tapped. In this example only the text is animated because it’s changing location:

```swift
struct ContentView: View {
    @Namespace private var animation
    @State private var isZoomed = false

    var frame: Double {
        isZoomed ? 300 : 44
    }

    var body: some View {
        VStack {
            Spacer()

            VStack {
                HStack {
                    RoundedRectangle(cornerRadius: 10)
                        .fill(.blue)
                        .frame(width: frame, height: frame)
                        .padding(.top, isZoomed ? 20 : 0)

                    if isZoomed == false {
                        Text("Taylor Swift – 1989")
                            .matchedGeometryEffect(id: "AlbumTitle", in: animation)
                            .font(.headline)
                        Spacer()
                    }
                }

                if isZoomed == true {
                    Text("Taylor Swift – 1989")
                        .matchedGeometryEffect(id: "AlbumTitle", in: animation)
                        .font(.headline)
                        .padding(.bottom, 60)
                    Spacer()
                }
            }
            .onTapGesture {
                withAnimation(.spring()) {
                    isZoomed.toggle()
                }
            }
            .padding()
            .frame(maxWidth: .infinity)
            .frame(height: 400)
            .background(Color(white: 0.9))
            .foregroundStyle(.black)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to mask one view with another | SwiftUI by Example",
  "desc": "How to mask one view with another",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mask-one-view-with-another.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force one gesture to recognize before another using highPriorityGesture() | SwiftUI by Example",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-step-animations-using-phase-animators.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to override animations with transactions | SwiftUI by Example",
  "desc": "How to override animations with transactions",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-override-animations-with-transactions.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />