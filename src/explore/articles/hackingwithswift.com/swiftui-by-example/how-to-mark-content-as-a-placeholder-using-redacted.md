---
lang: ko-KR
title: How to mark content as a placeholder using redacted()
description: Article(s) > How to mark content as a placeholder using redacted()
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
      content: Article(s) > How to mark content as a placeholder using redacted()
    - property: og:description
      content: How to mark content as a placeholder using redacted()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-a-placeholder-using-redacted.html
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
  "title": "How to mark content as a placeholder using redacted() | SwiftUI by Example",
  "desc": "How to mark content as a placeholder using redacted()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-mark-content-as-a-placeholder-using-redacted",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us mark text as a placeholder in our view, meaning that it gets rendered but masked out with gray to show it isn't final content. This is provided through the `redacted(reason:)` modifier, along with an `unredacted()` modifier you can use to override redaction as needed.

Here's how it looks in code:

```swift
Text("This is placeholder text")
    .font(.title)
    .redacted(reason: .placeholder)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-mark-content-as-a-placeholder-using-redacted-1.zip)


![A long gray rectangle representing redacted text.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-mark-content-as-a-placeholder-using-redacted-1~dark.png)

You can redact several things in your view at once, just by using `redacted(reason:)` on a container, like this:

```swift
VStack {
    Text("This is placeholder text")
    Text("And so is this")
}
.font(.title)    
.redacted(reason: .placeholder)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-mark-content-as-a-placeholder-using-redacted-2.zip)


Two gray rectangles representing two lines of redacted text.

Apple has said that redaction is an additive process, meaning that if you add redaction reasons to both a parent and a child then they will combine. Right now there's only `.placeholder`, but perhaps we'll see pixellation or similar in the future?

You can also query any redaction reasons passed in from the environment like this:

```swift
struct ContentView: View {
    @Environment(\.redactionReasons) var redactionReasons
    let bio = "The rain in Spain falls mainly on the Spaniards"

    var body: some View {
        if redactionReasons == .placeholder {
            Text("Loading…")
        } else {
            Text(bio)
                .redacted(reason: redactionReasons)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-mark-content-as-a-placeholder-using-redacted-3.zip)


![The unredacted text “The rain in Spain falls mainly on the Spaniards”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-mark-content-as-a-placeholder-using-redacted-3~dark.png)

![Placeholder text “Loading...” standing in for redacted text.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-mark-content-as-a-placeholder-using-redacted-4~dark.png)

::: tip

Redaction also works on images using the same code as shown above.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to mark content as private using privacySensitive()",
  "desc": "How to mark content as private using privacySensitive()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-private-using-privacysensitive.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to add a placeholder to a TextField",
  "desc": "How to add a placeholder to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-placeholder-to-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create modifiers for a UIViewRepresentable struct",
  "desc": "How to create modifiers for a UIViewRepresentable struct",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to render Markdown content in text",
  "desc": "How to render Markdown content in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create scrolling pages of content using tabViewStyle()",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />