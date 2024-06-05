---
lang: ko-KR
title: How to tell the user that no content is available
description: Article(s) > How to tell the user that no content is available
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
      content: Article(s) > How to tell the user that no content is available
    - property: og:description
      content: How to tell the user that no content is available
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-tell-the-user-that-no-content-is-available.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md
date: 2023-06-16
isOriginal: false
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
  "title": "How to tell the user that no content is available | SwiftUI by Example",
  "desc": "How to tell the user that no content is available",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI has a dedicated `ContentUnavailableView` type designed to show users when nothing is available to see. For example, if they perform a search that yields no results, using `ContentUnavailableView` is much nicer than showing a blank screen.

In its simplest form, you just need to use this code to show a failed search results screen:

```swift
struct ContentView: View {
    var body: some View {
        ContentUnavailableView.search
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-tell-the-user-that-no-content-is-available-1.zip)

![The default ContentUnavailableView, showing No Results and a prompt for the user to try again.](https://hackingwithswift.com//img/books/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available-1~dark@2x.png)

You’ll see a magnifying glass icon, backed up by title and subtitle text explaining that the user’s search yielded no results.

You can customize it if you want, to add what the user was searching for:

```swift
ContentUnavailableView.search(text: "Life, the Universe, and Everything")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-tell-the-user-that-no-content-is-available-2.zip)

![A slightly customized ContentUnavailableView, showing the user’s search string and asking them to try again.](https://hackingwithswift.com//img/books/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available-2~dark@2x.png)

But you can also customize the icon and description too, giving a completely bespoke result:

```swift
ContentUnavailableView("No favorites", systemImage: "star", description: Text("You don't have any favorites yet."))
    .symbolVariant(.slash)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-tell-the-user-that-no-content-is-available-3.zip)

![A customize ContentUnavailableView, showing No Favorites and a message telling the user they have no favorites.](https://hackingwithswift.com//img/books/quick-start/swiftui/how-to-tell-the-user-that-no-content-is-available-3~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to mark content as private using privacySensitive() | SwiftUI by Example",
  "desc": "How to mark content as private using privacySensitive()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-private-using-privacysensitive.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide and reveal content using DisclosureGroup | SwiftUI by Example",
  "desc": "How to hide and reveal content using DisclosureGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-reveal-content-using-disclosuregroup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to place content outside the safe area | SwiftUI by Example",
  "desc": "How to place content outside the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-place-content-outside-the-safe-area.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

<TagLinks />