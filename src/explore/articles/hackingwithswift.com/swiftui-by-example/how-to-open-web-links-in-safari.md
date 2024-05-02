---
lang: ko-KR
title: How to open web links in Safari
description: Article(s) > How to open web links in Safari
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
      content: Article(s) > How to open web links in Safari
    - property: og:description
      content: How to open web links in Safari
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-open-web-links-in-safari.html
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
  "title": "How to open web links in Safari | SwiftUI by Example",
  "desc": "How to open web links in Safari",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-open-web-links-in-safari",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us a dedicated `Link` view that looks like a button but opens a URL in Safari when pressed. It's easy enough to use – just give it a title for the button, plus a destination URL to show, like this:

```swift
Link("Learn SwiftUI", destination: URL(string: "https://www.hackingwithswift.com/quick-start/swiftui")!)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-open-web-links-in-safari-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-open-web-links-in-safari-1~dark.mp4" />

As it's just a text link, you can customize it with a font, color, and more:

```swift
Link("Visit Apple", destination: URL(string: "https://www.apple.com")!)
    .font(.title)
    .foregroundStyle(.red)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-open-web-links-in-safari-2.zip)

![The words “Visit Apple” in red.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-open-web-links-in-safari-2~dark.png)

And if you'd rather create your own view rather than just use text, you can do that too:

```swift
Link(destination: URL(string: "https://www.apple.com")!) {
    Image(systemName: "link.circle.fill")
        .font(.largeTitle)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-open-web-links-in-safari-3.zip)

![A link icon on a blue circle.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-open-web-links-in-safari-3~dark.png)

Alternatively, you can open a URL from code by using the `openURL` environment key, like this:

```swift
struct ContentView: View {
    @Environment(\.openURL) var openURL

    var body: some View {
        Button("Visit Apple") {
            openURL(URL(string: "https://www.apple.com")!)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-open-web-links-in-safari-4.zip)

![A “Visit Apple” link in blue.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-open-web-links-in-safari-4~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize the way links are opened | SwiftUI by Example",
  "desc": "How to customize the way links are opened",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-way-links-are-opened.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to open a new window | SwiftUI by Example",
  "desc": "How to open a new window",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-open-a-new-window.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render Markdown content in text | SwiftUI by Example",
  "desc": "How to render Markdown content in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.md",
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