---
lang: ko-KR
title: How to detect the location of a tap inside a view
description: Article(s) > How to detect the location of a tap inside a view
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
      content: Article(s) > How to detect the location of a tap inside a view
    - property: og:description
      content: How to detect the location of a tap inside a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md
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
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 16**

SwiftUI has an `onTapGesture()` variant that lets us detect the exact location of a tap, either relative to a view's bounds or globally on the whole screen.

As an example, this displays a red circle, and prints the relative location of any taps it receives:

```swift
Circle()
    .fill(.red)
    .frame(width: 100, height: 100)
    .onTapGesture { location in
        print("Tapped at \(location)")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view-1.zip)

“Relative location” means relative to the circle's bounds – as the circle is 100x100 in size, if you tap the exact center it would print 50x50 regardless of where the circle was placed on the screen.

If you want the *global* location – i.e., where your tap took place relative to the top-left corner of the entire screen – you should add the `coordinateSpace` parameter like this:

```swift
Circle()
    .fill(.red)
    .frame(width: 100, height: 100)
    .onTapGesture(coordinateSpace: .global) { location in
        print("Tapped at \(location)")
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view-2.zip)

This `onTapGesture()` variant is available from iOS 16 and later. If you're looking to do something similar on earlier versions of iOS, we can build something similar by wrapping UIKit and sprinkling some SwiftUI sugar on top to make it easy to use.

This takes quite a bit of code, so I want to list the exact steps we'll be following first, then provide all the code with extra comments afterwards. The end result is a reusable view modifier you can attach to any view – text, image, etc – that can detect touches starting, ending, and moving, depending on what you want.

First, the steps:

1. We need to create a `UIViewRepresentable` that can wrap a custom `UIView` subclass.
2. This `UIView` subclass will implement `touchesBegan()`, `touchesMoved()`, `touchesEnded()`, and `touchesCancelled()`, so we can track the user's touches as they happen.
3. Each of those `UIView` methods will find the touch's location in the view, then send it upwards as a `CGPoint` if appropriate.
4. We'll decide the “if appropriate” part based on two things: which touch events the user has asked us to track (perhaps they just want `touchesBegan()` for example), and whether they want us to carry on tracking events after their finger has left the view.
5. We'll create a new struct that conforms to `ViewModifier`, using the `overlay()` modifier to place our `UIViewRepresentable` over any other view. Overlays automatically resize themselves to be the same as their parent view, which is perfect here.
6. Create a `View` extension to add an `onTouch()` modifier, which makes the finished API pleasant to use.
It's a lot, I know, but it does work really well as you'll see. Here's the code:

```swift
// Our UIKit to SwiftUI wrapper view
struct TouchLocatingView: UIViewRepresentable {
    // The types of touches users want to be notified about
    struct TouchType: OptionSet {
        let rawValue: Int

        static let started = TouchType(rawValue: 1 << 0)
        static let moved = TouchType(rawValue: 1 << 1)
        static let ended = TouchType(rawValue: 1 << 2)
        static let all: TouchType = [.started, .moved, .ended]
    }

    // A closure to call when touch data has arrived
    var onUpdate: (CGPoint) -> Void

    // The list of touch types to be notified of
    var types = TouchType.all

    // Whether touch information should continue after the user's finger has left the view
    var limitToBounds = true

    func makeUIView(context: Context) -> TouchLocatingUIView {
        // Create the underlying UIView, passing in our configuration
        let view = TouchLocatingUIView()
        view.onUpdate = onUpdate
        view.touchTypes = types
        view.limitToBounds = limitToBounds
        return view
    }

    func updateUIView(_ uiView: TouchLocatingUIView, context: Context) {
    }

    // The internal UIView responsible for catching taps
    class TouchLocatingUIView: UIView {
        // Internal copies of our settings
        var onUpdate: ((CGPoint) -> Void)?
        var touchTypes: TouchLocatingView.TouchType = .all
        var limitToBounds = true

        // Our main initializer, making sure interaction is enabled.
        override init(frame: CGRect) {
            super.init(frame: frame)
            isUserInteractionEnabled = true
        }

        // Just in case you're using storyboards!
        required init?(coder: NSCoder) {
            super.init(coder: coder)
            isUserInteractionEnabled = true
        }

        // Triggered when a touch starts.
        override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
            guard let touch = touches.first else { return }
            let location = touch.location(in: self)
            send(location, forEvent: .started)
        }

        // Triggered when an existing touch moves.
        override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
            guard let touch = touches.first else { return }
            let location = touch.location(in: self)
            send(location, forEvent: .moved)
        }

        // Triggered when the user lifts a finger.
        override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
            guard let touch = touches.first else { return }
            let location = touch.location(in: self)
            send(location, forEvent: .ended)
        }

        // Triggered when the user's touch is interrupted, e.g. by a low battery alert.
        override func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent?) {
            guard let touch = touches.first else { return }
            let location = touch.location(in: self)
            send(location, forEvent: .ended)
        }

        // Send a touch location only if the user asked for it
        func send(_ location: CGPoint, forEvent event: TouchLocatingView.TouchType) {
            guard touchTypes.contains(event) else {
                return
            }

            if limitToBounds == false || bounds.contains(location) {
                onUpdate?(CGPoint(x: round(location.x), y: round(location.y)))
            }
        }
    }
}

// A custom SwiftUI view modifier that overlays a view with our UIView subclass.
struct TouchLocater: ViewModifier {
    var type: TouchLocatingView.TouchType = .all
    var limitToBounds = true
    let perform: (CGPoint) -> Void

    func body(content: Content) -> some View {
        content
            .overlay(
                TouchLocatingView(onUpdate: perform, types: type, limitToBounds: limitToBounds)
            )
    }
}

// A new method on View that makes it easier to apply our touch locater view.
extension View {
    func onTouch(type: TouchLocatingView.TouchType = .all, limitToBounds: Bool = true, perform: @escaping (CGPoint) -> Void) -> some View {
        self.modifier(TouchLocater(type: type, limitToBounds: limitToBounds, perform: perform))
    }
}

// Finally, here's some example code you can try out.
struct ContentView: View {
    var body: some View {
        VStack {
            Text("This will track all touches, inside bounds only.")
                .padding()
                .background(.red)
                .onTouch(perform: updateLocation)

            Text("This will track all touches, ignoring bounds – you can start a touch inside, then carry on moving it outside.")
                .padding()
                .background(.blue)
                .onTouch(limitToBounds: false, perform: updateLocation)

            Text("This will track only starting touches, inside bounds only.")
                .padding()
                .background(.green)
                .onTouch(type: .started, perform: updateLocation)
        }
    }

    func updateLocation(_ location: CGPoint) {
        print(location)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to read tap and double-tap gestures | SwiftUI by Example",
  "desc": "How to read tap and double-tap gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-tap-and-double-tap-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a scroll view move to a location using ScrollViewReader | SwiftUI by Example",
  "desc": "How to make a scroll view move to a location using ScrollViewReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the user's location using LocationButton | SwiftUI by Example",
  "desc": "How to read the user's location using LocationButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-users-location-using-locationbutton.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />