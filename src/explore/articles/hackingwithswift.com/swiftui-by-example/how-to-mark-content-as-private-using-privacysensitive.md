---
lang: ko-KR
title: How to mark content as private using privacySensitive()
description: Article(s) > How to mark content as private using privacySensitive()
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
      content: Article(s) > How to mark content as private using privacySensitive()
    - property: og:description
      content: How to mark content as private using privacySensitive()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-private-using-privacysensitive.html
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
  "title": "How to mark content as private using privacySensitive() | SwiftUI by Example",
  "desc": "How to mark content as private using privacySensitive()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-mark-content-as-private-using-privacysensitive",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI lets us mark some parts of our view as containing sensitive information, which in practice allows us to hide or show it more easily using redaction. To use this feature in your code, first add the `privacySensitive()` modifier to any views that should be hidden, then apply the `.redacted(reason: .privacy)` modifier at a higher place in your view hierarchy.

For example, this hides the user's credit card number if the view is being displayed in a non-private context:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Text("Card number")
                .font(.headline)

            Text("1234 5678 9012 3456")
                .privacySensitive()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-mark-content-as-private-using-privacysensitive-1.zip)


![The text “Card Number” over a long string of digits.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-mark-content-as-private-using-privacysensitive-1~dark.png)

By default, privacy sensitive context is masked out with a gray box, but you can also provide custom layout by reading the redaction reasons from the environment:

```swift
struct ContentView: View {
    @Environment(\.redactionReasons) var redactionReasons

    var body: some View {
        VStack {
            Text("Card number")
                .font(.headline)

            if redactionReasons.contains(.privacy) {
                Text("[HIDDEN]")
            } else {
                Text("1234 5678 9012 3456")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-mark-content-as-private-using-privacysensitive-2.zip)


![The text “Card Number” over the placeholder text “[HIDDEN]”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-mark-content-as-private-using-privacysensitive-2~dark.png)

Sometimes the system will apply privacy redaction automatically, such as if your widget appears on the Lock Screen (when the user swipes to the left), or if they have their Apple Watch set to always-on and your app is visible – these are both good places where you should mark things as being privacy sensitive.

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to mark content as a placeholder using redacted()",
  "desc": "How to mark content as a placeholder using redacted()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-a-placeholder-using-redacted.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to render Markdown content in text",
  "desc": "How to render Markdown content in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to create scrolling pages of content using tabViewStyle()",
  "desc": "How to create scrolling pages of content using tabViewStyle()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard  
{
  "title": "Article(s) > How to fix “Missing argument for parameter 'content' in call”",
  "desc": "How to fix “Missing argument for parameter 'content' in call”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-missing-argument-for-parameter-content-in-call.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to tell the user that no content is available | SwiftUI by Example",
  "desc": "How to tell the user that no content is available",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-tell-the-user-that-no-content-is-available.md.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />