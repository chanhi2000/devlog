---
lang: ko-KR
title: How to create 3D effects like Cover Flow using ScrollView and GeometryReader
description: Article(s) > How to create 3D effects like Cover Flow using ScrollView and GeometryReader
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
      content: Article(s) > How to create 3D effects like Cover Flow using ScrollView and GeometryReader
    - property: og:description
      content: How to create 3D effects like Cover Flow using ScrollView and GeometryReader
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.html
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
  "title": "How to create 3D effects like Cover Flow using ScrollView and GeometryReader | SwiftUI by Example",
  "desc": "How to create 3D effects like Cover Flow using ScrollView and GeometryReader",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If we combine `GeometryReader` with any view that can change position – such as something that has a drag gestures or is inside a `List` – we can create 3D effects that look great on the screen. `GeometryReader` allows us to read the coordinates for a view, and feed those values directly into a `rotation3DEffect()` modifier.

For example, we could create a Cover Flow-style scrolling effect by stacking up many text views horizontally in a scroll view, then applying `rotation3DEffect()` so that as they move in the scroll view they gently spin around, like this:

```swift
ScrollView(.horizontal, showsIndicators: false) {
    HStack(spacing: 0) {
        ForEach(1..<20) { num in
            VStack {
                GeometryReader { geo in
                    Text("Number \(num)")
                        .font(.largeTitle)
                        .padding()
                        .background(.red)
                        .rotation3DEffect(.degrees(-Double(geo.frame(in: .global).minX) / 8), axis: (x: 0, y: 1, z: 0))
                        .frame(width: 200, height: 200)
                }
                .frame(width: 200, height: 200)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader-1~dark.mp4 "/>

You don't always need to use `GeometryReader` to get interesting effects like – you could something similar with a `DragGesture()`, for example. So, this code creates a card-like rectangle that can be dragged around in both X and Y axes, and uses two `rotation3DEffect()` modifiers to apply values from that drag:

```swift
struct ContentView: View {
    @State var dragAmount = CGSize.zero

    var body: some View {
        VStack {
            Rectangle()
                .fill(LinearGradient(gradient: Gradient(colors: [.yellow, .red]), startPoint: .topLeading, endPoint: .bottomTrailing))
                .frame(width: 200, height: 150)
                .clipShape(RoundedRectangle(cornerRadius: 20))
                .rotation3DEffect(.degrees(-Double(dragAmount.width) / 20), axis: (x: 0, y: 1, z: 0))
                .rotation3DEffect(.degrees(Double(dragAmount.height / 20)), axis: (x: 1, y: 0, z: 0))
                .offset(dragAmount)
                .gesture(
                    DragGesture()
                        .onChanged { dragAmount = $0.translation }
                        .onEnded { _ in
                            withAnimation(.spring()) {
                                dragAmount = .zero
                            }
                        }
                )
        }
        .frame(width: 400, height: 400)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader-2.zip.zip)

As you drag the card around you'll see it rotates to give a perspective effect.

::: details Similar solutions…

```component VPCard
{
  "title": "How to provide relative sizes using GeometryReader | SwiftUI by Example",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-relative-sizes-using-geometryreader.md",
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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to stack modifiers to create more advanced effects | SwiftUI by Example",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stack-modifiers-to-create-more-advanced-effects.md",
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

:::

---

<TagLinks />