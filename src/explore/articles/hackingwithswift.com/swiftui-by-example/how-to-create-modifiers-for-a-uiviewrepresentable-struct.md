---
lang: ko-KR
title: How to create modifiers for a UIViewRepresentable struct
description: Article(s) > How to create modifiers for a UIViewRepresentable struct
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
      content: Article(s) > How to create modifiers for a UIViewRepresentable struct
    - property: og:description
      content: How to create modifiers for a UIViewRepresentable struct
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-modifiers-for-a-uiviewrepresentable-struct.html
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
  "title": "How to create modifiers for a UIViewRepresentable struct | SwiftUI by Example",
  "desc": "How to create modifiers for a UIViewRepresentable struct",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Wrapping a `UIView` in a `UIViewRepresentable` struct is a great way to bring existing UIKit into your SwiftUI app, and you can even add your own custom modifiers to adjust the way the view works at runtime.

To make this work, you should create private properties for all the values you want to adjust on the underlying `UIView`, then create methods to adjust them. Each of these methods should take a copy of your SwiftUI representable – *not* the underlying `UIView` – then adjust the private properties you created earlier to reflect the new state.

Once that’s done, SwiftUI will ensure your `updateUIView()` method is triggered, at which point you copy your private properties into the `UIView` to make sure it’s updated.

As an example, you could create a `UIViewRepresentable` to bridge `UISearchBar` into SwiftUI, but you might want some aspect of it to be customizable, such as its placeholder text. First you create the representable with an extra private property for its placeholder:

```swift
struct SearchField: UIViewRepresentable {
    @Binding var text: String

    private var placeholder = ""

    init(text: Binding<String>) {
        _text = text
    }

    func makeUIView(context: Context) -> UISearchBar {
        let searchBar = UISearchBar()
        searchBar.placeholder = placeholder
        return searchBar
    }

    // Always copy the placeholder text across on update
    func updateUIView(_ uiView: UISearchBar, context: Context) {
        uiView.text = text
        uiView.placeholder = placeholder
    }
}
```

Second, create a modifier on that representable to adjust the private property:

```swift
// Any modifiers to adjust your search field – copy self, adjust, then return.
extension SearchField {
    func placeholder(_ string: String) -> SearchField {
        var view = self
        view.placeholder = string
        return view
    }
}
```

And now you’re all set to use it. For example, this creates a `SearchField` view with our `placeholder()` modifier, but every time the button is clicked we randomize the placeholder so you can see everything in action:

```swift
struct ContentView: View {
    @State private var text = ""
    @State private var placeHolder = "Hello, world!"

    var body: some View {
        VStack {
            SearchField(text: $text)
                .placeholder(placeHolder)

            Button("Tap me") {
                // randomize the placeholder every press, to
                // prove this works
                placeHolder = UUID().uuidString
            }
        }
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create custom modifiers | SwiftUI by Example",
  "desc": "How to create custom modifiers",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-modifiers.md",
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
  "title": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access | SwiftUI by Example",
  "desc": "How to make SwiftUI modifiers safer to use with @warn_unqualified_access",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to wrap a custom UIView for SwiftUI | SwiftUI by Example",
  "desc": "How to wrap a custom UIView for SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-wrap-a-custom-uiview-for-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />