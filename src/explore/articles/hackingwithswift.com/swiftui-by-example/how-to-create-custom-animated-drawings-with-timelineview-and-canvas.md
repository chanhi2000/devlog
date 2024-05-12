---
lang: ko-KR
title: How to create custom animated drawings with TimelineView and Canvas
description: Article(s) > How to create custom animated drawings with TimelineView and Canvas
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
      content: Article(s) > How to create custom animated drawings with TimelineView and Canvas
    - property: og:description
      content: How to create custom animated drawings with TimelineView and Canvas
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-animated-drawings-with-timelineview-and-canvas.html
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
  "title": "How to create custom animated drawings with TimelineView and Canvas | SwiftUI by Example",
  "desc": "How to create custom animated drawings with TimelineView and Canvas",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-animated-drawings-with-timelineview-and-canvas",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI’s `Canvas` view lets us have free control over drawing in our app, and its `TimelineView` lets us redraw views as often as we need. If we combine these two views together we can create much more advanced effects, including particle systems to simulate rain, snow, fog, fire, and more.

To demonstrate this we can produce some code that creates a simple rain effect.

This starts by defining the data a single drop of rain needs to know in order to work: where it is located horizontally, and when it should be removed from the screen, and how the speed it should fall. That speed property is important, because it means our raindrops won’t all fall at a uniform speed – it makes the whole effect look a lot more realistic.

Alongside a single raindrop, we’re also going to create a class to manage the whole rainstorm. This will have a set of `Raindrop` instances, and a method that removes any old raindrops, and creates a new one with a random location and speed.

Start with this:

```swift
struct Raindrop: Hashable, Equatable {
    var x: Double
    var removalDate: Date
    var speed: Double
}

class Storm: ObservableObject {
    var drops = Set<Raindrop>()

    func update(to date: Date) {
        drops = drops.filter { $0.removalDate > date }
        drops.insert(Raindrop(x: Double.random(in: 0...1), removalDate: date + 1, speed: Double.random(in: 1...2)))
    }
}
```

There are two important things about that code:

1. Each rain drop’s X position is a value between 0 and 1, meaning somewhere between the left edge (0) and the right (1).
2. The `removalDate` property is set to the current time plus 1 second, so all our raindrops live for 1 second.

Finally, we can create a `TimelineView` and `Canvas`. This will:

1. Use the `.animation` schedule for the timeline so that it draws as fast as possible.
2. Call `update()` on our storm, passing in the current date.
3. For each rain drop, figure out how much time we have until it is removed.
4. The drop’s X position is calculated as its `x` value multiplied by the width of our drawing context. Remember, `x` will be between 0 and 1, so this will produce a value between 0 and the width of our drawing context.
5. The drop’s Y position will be its age multiplied by its speed, multiplied by the height of the canvas. If we left it there our drops would “fall” upwards, but we subtract that from the canvas height they will fall downwards.
6. We can now fill a thin and long capsule at that X and Y coordinate, with a suitably rainy color.

Here’s that in code:

```swift
struct ContentView: View {
    @StateObject private var storm = Storm()
    let rainColor = Color(red: 0.25, green: 0.5, blue: 0.75)

    var body: some View {
        TimelineView(.animation) { timeline in
            Canvas { context, size in
                storm.update(to: timeline.date)

                for drop in storm.drops {
                    let age = timeline.date.distance(to: drop.removalDate)
                    let rect = CGRect(x: drop.x * size.width, y: size.height - (size.height * age * drop.speed), width: 2, height: 10)
                    let shape = Capsule().path(in: rect)
                    context.fill(shape, with: .color(rainColor))
                }
            }
        }
        .background(.black)
        .ignoresSafeArea()
    }
}
```

That’s not a huge amount of code, but it already creates a pretty compelling effect. From here you can start to consider things like having different opacities for raindrops, placing them at a slight angle, and more.

Over on Hacking with Swift+ I have a whole series of tutorials teaching you how to recreate the particle effects in Apple’s Weather app using `Canvas` and `TimelineView`: [<FontIcon icon="fas fa-globe"/>](https://www.hackingwithswift.com/plus/remaking-apps).

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
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
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
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />