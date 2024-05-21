---
lang: ko-KR
title: How to wrap a custom UIView for SwiftUI
description: Article(s) > How to wrap a custom UIView for SwiftUI
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
      content: Article(s) > How to wrap a custom UIView for SwiftUI
    - property: og:description
      content: How to wrap a custom UIView for SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-wrap-a-custom-uiview-for-swiftui.html
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
  "title": "How to wrap a custom UIView for SwiftUI | SwiftUI by Example",
  "desc": "How to wrap a custom UIView for SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although SwiftUI does a good job of providing many of UIKit’s `UIView` subclasses, it doesn’t have them all yet at this time. Fortunately, it’s not hard to create custom wrappers for a `UIView` that you want.

As an example, let’s create a simple SwiftUI wrapper for `UITextView` as the basis of a rich text editor. This takes four steps:

1. Creating a struct that conforms to `UIViewRepresentable`.
2. Defining one property that stores the text string we are working with.
3. Giving it a `makeUIView()` method that will return our text view.
4. Adding a `updateUIView()` method that will be called whenever the data for the text view has changed.

In code we end up with this:

```swift
struct TextView: UIViewRepresentable {
    @Binding var text: NSMutableAttributedString

    func makeUIView(context: Context) -> UITextView {
        UITextView()
    }

    func updateUIView(_ uiView: UITextView, context: Context) {
        uiView.attributedText = text
    }
}
```

And that’s it! You can now immediately use the `TextView` component in SwiftUI views, such as this one:

```swift
struct ContentView: View {
    @State var text = NSMutableAttributedString(string: "")

    var body: some View {
        TextView(text: $text)
            .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity)
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui-1~dark.mp4" />

Because that uses attributed text, you could add some buttons to enable formatting such as bold, italics, and more.

::: details Similar solutions…

```component VPCard
{
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Frequently asked questions about SwiftUI | SwiftUI by Example",
  "desc": "Frequently asked questions about SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/frequently-asked-questions-about-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Wrap up: our SwiftUI project is complete | SwiftUI by Example",
  "desc": "Wrap up: our SwiftUI project is complete",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/wrap-up-our-swiftui-project-is-complete.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a custom path | SwiftUI by Example",
  "desc": "How to draw a custom path",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-custom-path.md",
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

:::

---

<TagLinks />