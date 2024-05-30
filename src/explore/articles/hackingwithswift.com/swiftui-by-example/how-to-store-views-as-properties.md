---
lang: ko-KR
title: How to store views as properties
description: Article(s) > How to store views as properties
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
      content: Article(s) > How to store views as properties
    - property: og:description
      content: How to store views as properties
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-store-views-as-properties.html
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
  "title": "How to store views as properties | SwiftUI by Example",
  "desc": "How to store views as properties",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-store-views-as-properties",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you have several views nested inside another view, you might find it useful to create properties for some or all of them to make your layout code easier. You can then reference those properties inline inside your view code, helping to keep it clear.

For example, this creates two text views as properties, then places them inside a `VStack`:

```swift
struct ContentView: View {
    let title = Text("Paul Hudson")
                    .bold()
    let subtitle = Text("Author")
                    .foregroundStyle(.secondary)

    var body: some View {
        VStack {
            title
            subtitle
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-store-views-as-properties-1.zip)

![The text “Paul Hudson” in bold above the text “Author” in gray](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-store-views-as-properties-1~dark@2x.png)

As you can see, just writing the property names in the stack is enough to place them.

However, even better is that you can attach modifiers to those property names, like this:

```swift
struct ContentView: View {
    let title = Text("Paul Hudson")
                    .bold()
    let subtitle = Text("Author")
                    .foregroundStyle(.secondary)

    var body: some View {
        VStack {
            title
                .foregroundStyle(.red)
            subtitle
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-store-views-as-properties-2.zip)

![The text “Paul Hudson” in bold red above the text “Author” in gray](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-store-views-as-properties-2~dark@2x.png)

That doesn’t change the underlying style of `title`, only that one specific usage of it.

::: details Similar solutions…

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @EnvironmentObject to share data between views | SwiftUI by Example",
  "desc": "How to use @EnvironmentObject to share data between views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-environmentobject-to-share-data-between-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make two views the same width or height | SwiftUI by Example",
  "desc": "How to make two views the same width or height",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-views-the-same-width-or-height.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make views scroll with a custom transition | SwiftUI by Example",
  "desc": "How to make views scroll with a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-views-scroll-with-a-custom-transition.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />