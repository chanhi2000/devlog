---
lang: ko-KR
title: How to create a list of dynamic items
description: Article(s) > How to create a list of dynamic items
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
      content: Article(s) > How to create a list of dynamic items
    - property: og:description
      content: How to create a list of dynamic items
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-dynamic-items.html
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
  "title": "How to create a list of dynamic items | SwiftUI by Example",
  "desc": "How to create a list of dynamic items",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-list-of-dynamic-items",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

In order to handle dynamic items, you must first tell SwiftUI how it can identify which item is which. This is can either be done by specifying the identifying property by hand, or by using the `Identifiable` protocol. This protocol has only one requirement, which is that the type must have some sort of `id` value SwiftUI can use to see which item is which.

To demonstrate this, we can create three things then put them together:

1. A `Restaurant` struct that says restaurants have an ID and name, with the ID being a random identifier just so that SwiftUI knows which is which.
2. A small view that determines what each row in our list looks like. In our case we're going to define a `RestaurantRow` view that stores one restaurant and prints its name in a text view.
3. A list view that shows several restaurants. This means creating some example data, putting it into an array, then passing that into a list to be rendered.

Here's all that in code:

```swift
// A struct to store exactly one restaurant's data.
struct Restaurant: Identifiable {
    let id = UUID()
    let name: String
}

// A view that shows the data for one Restaurant.
struct RestaurantRow: View {
    var restaurant: Restaurant

    var body: some View {
        Text("Come and eat at \(restaurant.name)")
    }
}

// Create three restaurants, then show them in a list.
struct ContentView: View {
    let restaurants = [
        Restaurant(name: "Joe's Original"),
        Restaurant(name: "The Real Joe's Original"),
        Restaurant(name: "Original Joe's")
    ]

    var body: some View {
        List(restaurants) { restaurant in
            RestaurantRow(restaurant: restaurant)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-list-of-dynamic-items-1.zip)

![A list containing “Come and eat at Joe's Original”, “Come and eat at The Real Joe's Original”, and “Come and eat at Original Joe's”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-list-of-dynamic-items-1~dark@2x.png)

Most of that is just creating data – the last part is where the real action is: using `List(restaurants)` creates a list from the `restaurants` array, executing the following closure once for every item in the array. Each time the closure goes around the `restaurant` input will be filled with one item from the array, so we use that to create a `RestaurantRow`.

In fact, in trivial cases like this one we can make the code even shorter: `List(restaurants, rowContent: RestaurantRow.init)` does exactly the same thing.

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to use Dynamic Type with a custom font | SwiftUI by Example",
  "desc": "How to use Dynamic Type with a custom font",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-dynamic-type-with-a-custom-font.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to specify the Dynamic Type sizes a view supports | SwiftUI by Example",
  "desc": "How to specify the Dynamic Type sizes a view supports",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a list of static items | SwiftUI by Example",
  "desc": "How to create a list of static items",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-static-items.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
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

:::

---

<TagLinks />