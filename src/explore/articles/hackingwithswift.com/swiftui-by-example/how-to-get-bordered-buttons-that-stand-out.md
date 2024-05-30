---
lang: ko-KR
title: How to get bordered buttons that stand out
description: Article(s) > How to get bordered buttons that stand out
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
      content: Article(s) > How to get bordered buttons that stand out
    - property: og:description
      content: How to get bordered buttons that stand out
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-bordered-buttons-that-stand-out.html
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
  "title": "How to get bordered buttons that stand out | SwiftUI by Example",
  "desc": "How to get bordered buttons that stand out",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has a dedicated `.bordered` button style that mimics a common look and feel used across many of Apple's apps. In its most basic form it looks like this:

```swift
Button("Buy: $0.99") {
    print("Buying…")
}
.buttonStyle(.bordered)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-1.zip)

![A grey capsule-shaped button containing the text “Buy: $0.99” in blue.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-1~dark.png)

However, for buttons that should really stand out on the screen, you are likely to want to use the `borderedProminent` option to make their color much stronger:

```swift
Button("Buy: $0.99") {
    print("Buying for $0.99")
}
.buttonStyle(.borderedProminent)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-1.zip)

![A bright blue capsule containing the text “Buy: $0.99”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-2~dark.png)

::: important

Having lots of prominent buttons is not good UI practice.

:::

You can customize the color of these buttons either by using `tint()`:

```swift
Button("Submit") {
    print("Submitting…")
}
.tint(.indigo)
.buttonStyle(.borderedProminent)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-3.zip)

![A deep blue capsule containing the text “Submit”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-3~dark.png)

Or by attaching a role to the button:

```swift
Button("Delete", role: .destructive) {
    print("Deleting…")
}
.buttonStyle(.borderedProminent)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-4.zip)

![A red capsule containing the text “Delete”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-4~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users customize toolbar buttons | SwiftUI by Example",
  "desc": "How to let users customize toolbar buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-customize-toolbar-buttons.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a toolbar and add buttons to it | SwiftUI by Example",
  "desc": "How to create a toolbar and add buttons to it",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toolbar-and-add-buttons-to-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add actions to alert buttons | SwiftUI by Example",
  "desc": "How to add actions to alert buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-actions-to-alert-buttons.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make buttons that repeat their action when pressed | SwiftUI by Example",
  "desc": "How to make buttons that repeat their action when pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-buttons-that-repeat-their-action-when-pressed.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />