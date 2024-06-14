---
lang: ko-KR
title: How to set the background color of list rows using listRowBackground()
description: Article(s) > How to set the background color of list rows using listRowBackground()
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
      content: Article(s) > How to set the background color of list rows using listRowBackground()
    - property: og:description
      content: How to set the background color of list rows using listRowBackground()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to set the background color of list rows using listRowBackground() | SwiftUI by Example",
  "desc": "How to set the background color of list rows using listRowBackground()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a dedicated modifier for setting background views behind list rows, called `listRowBackground()`. This accepts any kind of view – including colors, images, and shapes – and uses it behind rows.

For example, this creates a list using 10 rows, each with a red background color:

```swift
List {
    ForEach(0..<10) {
        Text("Row \($0)")
    }
    .listRowBackground(Color.red)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground-1.zip)

![A list of rows with a red background.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground-1@2x.png)

::: tip

`listRowBackground()` won't affect any parts of the list that don't contain data.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to change the tint color for individual list rows | SwiftUI by Example",
  "desc": "How to change the tint color for individual list rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-tint-color-for-individual-list-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users delete rows from a list | SwiftUI by Example",
  "desc": "How to let users delete rows from a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-move-rows-in-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a badge to TabView items and List rows | SwiftUI by Example",
  "desc": "How to add a badge to TabView items and List rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the background color of List, TextEditor, and more | SwiftUI by Example",
  "desc": "How to change the background color of List, TextEditor, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-background-color-of-list-texteditor-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```


:::

---

<TagLinks />