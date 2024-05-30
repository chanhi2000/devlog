---
lang: ko-KR
title: How to change the tint color for individual list rows
description: Article(s) > How to change the tint color for individual list rows
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
      content: Article(s) > How to change the tint color for individual list rows
    - property: og:description
      content: How to change the tint color for individual list rows
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-tint-color-for-individual-list-rows.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md
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
  "title": "How to change the tint color for individual list rows | SwiftUI by Example",
  "desc": "How to change the tint color for individual list rows",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-change-the-tint-color-for-individual-list-rows",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a dedicated `listItemTint()` modifier that controls how the list colors its rows. The exact behavior depends on which platform your app is running on, but the code is the same. For example, this will tint even rows red and odd rows green:

```swift
List(1..<51) { i in
    Label("Row \(i)", systemImage: "\(i).circle")
        .listItemTint(i.isMultiple(of: 2) ? .red : .green)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-change-the-tint-color-for-individual-list-rows-1.zip)

Like I said, exactly what that does depends on the platform:

- On iOS that will change the icons to be red and green, but leave the text in its primary color.
- On macOS that will also change the icons to be red and green, overriding the user's preferred accent color.
- On watchOS that will change the row background color (known as its “background platter”) to be red or green.
- On tvOS it will do nothing at all.

On macOS, you can respect the user's accent color while also adding your own *preferred* list row tint like this:

```swift
List(1..<51) { i in
    Label("Row \(i)", systemImage: "\(i).circle")
        .listItemTint(.preferred(i.isMultiple(of: 2) ? .red : .green))
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-change-the-tint-color-for-individual-list-rows-2.zip)

That will now apply the user's selected accent color if they have one, but if they have the Multicolor accent set then the rows will be tinted red or green as before.

::: details Similar solutions…

```component VPCard
{
  "title": "How to set the background color of list rows using listRowBackground() | SwiftUI by Example",
  "desc": "How to set the background color of list rows using listRowBackground()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-set-the-background-color-of-list-rows-using-listrowbackground.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-spacing-around-individual-views-using-padding.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the background color of List, TextEditor, and more | SwiftUI by Example",
  "desc": "How to change the background color of List, TextEditor, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-background-color-of-list-texteditor-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users delete rows from a list | SwiftUI by Example",
  "desc": "How to let users delete rows from a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-delete-rows-from-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a badge to TabView items and List rows | SwiftUI by Example",
  "desc": "How to add a badge to TabView items and List rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-badge-to-tabview-items-and-list-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />