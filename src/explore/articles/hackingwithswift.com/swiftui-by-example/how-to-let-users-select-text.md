---
lang: ko-KR
title: How to let users select text
description: Article(s) > How to let users select text
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
      content: Article(s) > How to let users select text
    - property: og:description
      content: How to let users select text
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-text.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-images-using-image-views.md
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
  "title": "How to let users select text | SwiftUI by Example",
  "desc": "How to customize the way links are opened",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-select-text",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

Swift's Text views represent static, unselectable text by default, but you can change that using the `.textSelection()` modifier with the `.enabled` value.

For example, this makes some text the user can select, and some the user cannot:

```swift
VStack(spacing: 50) {
    Text("You can't touch this")

    Text("Break it down!")
        .textSelection(.enabled)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-select-text-1.zip)

![The line “You can't touch this” above the line “Break it down!”. A selection menu hovers over the second line.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-let-users-select-text-1~dark.png)

When text is selected, the user automatically gains access to the regular text actions such as Copy and Share. However, right now at least the whole text area is copied – you don't get a text selection loupe, so you can't select just a few words.

Setting `textSelection()` on any kind of group of views will automatically make all text inside that group selectable. For example, we could make both text views in our previous example selectable by moving the modifier up to the stack:

```swift
VStack(spacing: 50) {
    Text("You can't touch this")
    Text("Break it down!")
}
.textSelection(.enabled)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-select-text-2.zip)

![The line “You can't touch this” above the line “Break it down!”. A selection menu hovers over the first line.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-let-users-select-text-2~dark.png)

You can even apply `textSelection()` to a list, in which case the text rows in the list become selectable:

```swift
List(0..<100) { index in
    Text("Row \(index)")
}
.textSelection(.enabled)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-select-text-3.zip)

![A list consisting of rows of text. The first row has a selection menu hovering beneath it.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-let-users-select-text-3~dark.png)

::: tip

You need to press and hold directly on the text in a row rather than anywhere else.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to let users select pictures using PhotosPicker",
  "desc": "How to let users select pictures using PhotosPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-pictures-using-photospicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users select a color with ColorPicker",
  "desc": "How to let users select a color with ColorPicker",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-a-color-with-colorpicker.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let the user select multiple dates | SwiftUI by Example",
  "desc": "How to let the user select multiple dates",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-select-multiple-dates.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to let users find and replace text",
  "desc": "How to let users find and replace text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-find-and-replace-text.md",
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

:::

---

<TagLinks />