---
lang: ko-KR
title: How to adjust text alignment using multilineTextAlignment()
description: Article(s) > How to adjust text alignment using multilineTextAlignment()
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
      content: Article(s) > How to adjust text alignment using multilineTextAlignment()
    - property: og:description
      content: How to adjust text alignment using multilineTextAlignment()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-text-alignment-using-multilinetextalignment.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to adjust text alignment using multilineTextAlignment() | SwiftUI by Example",
  "desc": "How to adjust text alignment using multilineTextAlignment()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When SwiftUI's `Text` views wrap across multiple lines, they align to their leading edge by default. If you want to change that, use the `multilineTextAlignment()` modifier to specify an alternative, such as `.center`, or `.trailing`.

For example, this will center several lines of text as they wrap across lines:

```swift
Text("This is an extremely long text string that will never fit even the widest of phones without wrapping")
    .font(.largeTitle)
    .multilineTextAlignment(.center)
    .frame(width: 300)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1.zip)

![A center-aligned multiline paragraph of text.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1~dark.png)

You can compare all three text alignments side by side using a picker such as this one:

```swift
struct ContentView: View {
    let alignments: [TextAlignment] = [.leading, .center, .trailing]
    @State private var alignment = TextAlignment.leading

    var body: some View {
        VStack {
            Picker("Text alignment", selection: $alignment) {
                ForEach(alignments, id: \.self) { alignment in
                    Text(String(describing: alignment))
                }
            }

            Text("This is an extremely long text string that will never fit even the widest of phones without wrapping")
                .font(.largeTitle)
                .multilineTextAlignment(alignment)
                .frame(width: 300)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1.zip)

![Three images showing paragraphs with left-aligned, centered, and right-aligned text.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize stack layouts with alignment and spacing | SwiftUI by Example",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-stack-layouts-with-alignment-and-spacing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the opacity of a view | SwiftUI by Example",
  "desc": "How to adjust the opacity of a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-opacity-of-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust views by tinting, desaturating, and more | SwiftUI by Example",
  "desc": "How to adjust views by tinting, desaturating, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-views-by-tinting-desaturating-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust List row separator insets | SwiftUI by Example",
  "desc": "How to adjust List row separator insets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-insets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />