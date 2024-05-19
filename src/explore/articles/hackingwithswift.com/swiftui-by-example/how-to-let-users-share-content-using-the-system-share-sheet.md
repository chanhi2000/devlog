---
lang: ko-KR
title: How to let users share content using the system share sheet
description: Article(s) > How to let users share content using the system share sheet
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
      content: Article(s) > How to let users share content using the system share sheet
    - property: og:description
      content: How to let users share content using the system share sheet
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-share-content-using-the-system-share-sheet.html
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
  "title": "How to let users share content using the system share sheet | SwiftUI by Example",
  "desc": "How to let users share content using the system share sheet",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-share-content-using-the-system-share-sheet",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `ShareLink` view makes it easy to share any kind of data from your app, as long as it conforms to the `Transferable` protocol.

By default you get a simple “Share” label with the appropriate icon, but you can also provide your own title text, or an entirely custom label:

```swift
let link = URL(string: "https://www.hackingwithswift.com")!

VStack(spacing: 20) {
    ShareLink(item: link)
    ShareLink("Learn Swift here", item: link)
    ShareLink(item: link) {
        Label("Learn Swift here", systemImage: "swift")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-share-content-using-the-system-share-sheet-1.zip)

If you want to attach some extra text to the content you're sharing, there's a `message` parameter to do just that:

```swift
let link = URL(string: "https://www.hackingwithswift.com")!
ShareLink(item: link, message: Text("Learn Swift here!"))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-share-content-using-the-system-share-sheet-2.zip)

For simple URLs the system is able to generate a preview on our behalf, but you can also provide a custom preview with some text and an image of your choosing, like this:

```swift
let link = URL(string: "https://www.admin.ch")!

VStack {
    ShareLink(
        item: link,
        preview: SharePreview(
            "Switzerland's flag: it's a big plus.",
            image: Image(systemName: "plus")
        )
    )
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-share-content-using-the-system-share-sheet-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to display a bottom sheet | SwiftUI by Example",
  "desc": "How to display a bottom sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-a-bottom-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to prevent a sheet from being dismissed with a swipe | SwiftUI by Example",
  "desc": "How to prevent a sheet from being dismissed with a swipe",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users import videos using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users import videos using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-import-videos-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show an action sheet | SwiftUI by Example",
  "desc": "How to show an action sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users select pictures using PhotosPicker | SwiftUI by Example",
  "desc": "How to let users select pictures using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-pictures-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />