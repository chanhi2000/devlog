---
lang: ko-KR
title: How to render Markdown content in text
description: Article(s) > How to render Markdown content in text
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
      content: Article(s) > How to render Markdown content in text
    - property: og:description
      content: How to render Markdown content in text
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.html
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
  "title": "How to render Markdown content in text | SwiftUI by Example",
  "desc": "How to render Markdown content in text",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-render-markdown-content-in-text",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has built-in support for rendering Markdown, including bold, italic, links, and more. It's literally built right into SwiftUI's `Text` view, so you can write code like this:

```swift
VStack {
    Text("This is regular text.")
    Text("* This is **bold** text, this is *italic* text, and this is ***bold, italic*** text.")
    Text("~~A strikethrough example~~")
    Text("`Monospaced works too`")
    Text("Visit Apple: [click here](https://apple.com)")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-1.zip)

Several lines of text appropriately formatted with Markdown styling.

And yes, that link is automatically tappable. Markdown links will use your app's accent color by default, but you can change that using the `tint()` modifier:

```swift
Text("Visit Apple: [click here](https://apple.com)")
    .tint(.indigo)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-2.zipp)

::: note

Images aren't supported.

:::

This automatic Markdown conversion happens because SwiftUI interprets those strings as being instances of `LocalizedStringKey` – strings that can be localized by our app. This means if you want to create Markdown text from a property or variable, you should mark it explicitly as being `LocalizedStringKey` to get the Markdown rendering:

```swift
struct ContentView: View {
    let markdownText: LocalizedStringKey = "* This is **bold** text, this is *italic* text, and this is ***bold, italic*** text."

    var body: some View {
        Text(markdownText)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-3.zip)

If you wanted the original text unchanged – i.e., you wanted the raw, unformatted Markdown symbols to be left in place – just remove the `LocalizedStringKey` annotation. Alternatively, you can disable both Markdown and localization entirely using the `Text(verbatim:)` initializer.

::: details Similar solutions…

```component VPCard
{
  "title": "How to render a SwiftUI view to a PDF | SwiftUI by Example",
  "desc": "How to render a SwiftUI view to a PDF",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-a-swiftui-view-to-a-pdf.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render a gradient | SwiftUI by Example",
  "desc": "How to render a gradient",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-a-gradient.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render images using SF Symbols | SwiftUI by Example",
  "desc": "How to render images using SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-images-using-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to format text inside text views | SwiftUI by Example",
  "desc": "How to format text inside text views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-text-inside-text-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create scrolling pages of content using tabViewStyle() | SwiftUI by Example",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />