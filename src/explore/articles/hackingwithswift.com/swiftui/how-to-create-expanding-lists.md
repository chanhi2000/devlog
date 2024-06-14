---
lang: ko-KR
title: How to create expanding lists
description: Article(s) > How to create expanding lists
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
      content: Article(s) > How to create expanding lists
    - property: og:description
      content: How to create expanding lists
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-expanding-lists.html
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
  "title": "How to create expanding lists | SwiftUI by Example",
  "desc": "How to create expanding lists",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-expanding-lists",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `List` view has an enhanced initializer that lets us create expanding sections with child elements – they will be rendered with tappable arrows that open out to reveal children when tapped.

To use this form of `List` you need to have data in a precise form: your data model should have an optional array of children that are of the same type, so you can create a tree. Normally you're likely to load this kind of stuff from JSON or similar, but to keep things simple here I'll just paste in some hard-coded data so you can see what it ought to look like.

Once you have your data in place, you can load it into a list by passing in your array of data plus a keypath to where the children are, which in our case will be `\.items`. You'll then get a regular closure where you can provide your row data, just like normal.

Here's the code:

```swift
struct Bookmark: Identifiable {
    let id = UUID()
    let name: String
    let icon: String
    var items: [Bookmark]?

    // some example websites
    static let apple = Bookmark(name: "Apple", icon: "1.circle")
    static let bbc = Bookmark(name: "BBC", icon: "square.and.pencil")
    static let swift = Bookmark(name: "Swift", icon: "bolt.fill")
    static let twitter = Bookmark(name: "Twitter", icon: "mic")

    // some example groups
    static let example1 = Bookmark(name: "Favorites", icon: "star", items: [Bookmark.apple, Bookmark.bbc, Bookmark.swift, Bookmark.twitter])
    static let example2 = Bookmark(name: "Recent", icon: "timer", items: [Bookmark.apple, Bookmark.bbc, Bookmark.swift, Bookmark.twitter])
    static let example3 = Bookmark(name: "Recommended", icon: "hand.thumbsup", items: [Bookmark.apple, Bookmark.bbc, Bookmark.swift, Bookmark.twitter])
}

struct ContentView: View {
    let items: [Bookmark] = [.example1, .example2, .example3]

    var body: some View {
        List(items, children: \.items) { row in
            HStack {
                Image(systemName: row.icon)
                Text(row.name)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-expanding-lists-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-expanding-lists-1~dark.mp4" />

::: tip

That's just placeholder data so I've repeated the same bookmarks several times, but hopefully you get the point.

:::

When that code runs you'll see three rows for our groups, plus disclosure indicators that fold out to reveal their children.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create grouped and inset grouped lists | SwiftUI by Example",
  "desc": "How to create grouped and inset grouped lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-grouped-and-inset-grouped-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui/working-with-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get translucent lists on macOS | SwiftUI by Example",
  "desc": "How to get translucent lists on macOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-get-translucent-lists-on-macos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make carousel lists on watchOS | SwiftUI by Example",
  "desc": "How to make carousel lists on watchOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-carousel-lists-on-watchos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />