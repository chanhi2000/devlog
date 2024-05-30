---
lang: ko-KR
title: How to create views in a loop using ForEach
description: Article(s) > How to create views in a loop using ForEach
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
      content: Article(s) > How to create views in a loop using ForEach
    - property: og:description
      content: How to create views in a loop using ForEach
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-views-in-a-loop-using-foreach.html
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
  "title": "How to create views in a loop using ForEach | SwiftUI by Example",
  "desc": "How to create views in a loop using ForEach",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You will commonly find that you want to loop over a sequence to create views, and in SwiftUI that's done using `ForEach`.

::: important

It's easy to look at `ForEach` and think it's the same as the `forEach()` method on Swift's sequences, but this is _not_ the case as you'll see.

:::

`ForEach` in SwiftUI is a view struct in its own right, which means you can return it directly from your view body if you want. You provide it an array of items, and you may also need to tell SwiftUI how it can identify each of your items uniquely so it knows how to update them when values change. You also pass it a function to run to create a view for each item in the loop.

For simple loops over ranges, you can pass the range directly into `ForEach` and tell Swift to use each number as the unique identifier for the items. For example, this counts from 10 down to 1 then adds a message at the end:

```swift
VStack(alignment: .leading) {
    ForEach((1...10).reversed(), id: \.self) {
        Text("\($0)…")
    }

    Text("Ready or not, here I come!")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-views-in-a-loop-using-foreach-1.zip)

![A countdown from 10 to 1 followed by the text “Ready or not, here I come!”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach-1~dark.png)

The `id: \.self` part is required so that SwiftUI can identify each element in the array uniquely – it means that if you add or remove an item, SwiftUI knows exactly which one.

You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:

```swift
struct ContentView: View {
    let colors: [Color] = [.red, .green, .blue]

    var body: some View {
        VStack {
            ForEach(colors, id: \.self) { color in
                Text(color.description.capitalized)
                    .padding()
                    .background(color)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-views-in-a-loop-using-foreach-2.zip)

[A red, green, and blue rectangle arranged vertically with their respective colors printed on them.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach-2~dark.png)

Using `\.self` tells Swift each item is uniquely identified using its own value. So, if you have the array `[1, 2, 3]` and identify each value by `\.self` it means the first item has the identifier 1, the second 2, and the third 3.

If you have custom types in your array, you should use `id` with whatever property inside your type identifies it uniquely. For example, you could create a struct where the `id` property is a `UUID`, which mean it's guaranteed to be unique – perfect for our purposes. We could create such a struct and then use it like this:

```swift
struct SimpleGameResult {
    let id = UUID()
    let score: Int
}

struct ContentView: View {
    let results = [
        SimpleGameResult(score: 8),
        SimpleGameResult(score: 5),
        SimpleGameResult(score: 10)
    ]

    var body: some View {
        VStack {
            ForEach(results, id: \.id) { result in
                Text("Result: \(result.score)")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-views-in-a-loop-using-foreach-3.zip)

![The lines “Result: 8”, “Result: 5”, and “Result: 10”](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach-3~dark.png)

That tells SwiftUI it can distinguish between views inside the `ForEach` by looking at their `id` property.

As an alternative, if you make a struct that conforms to the `Identifiable` protocol you can just write `ForEach(results)`. Conforming to this protocol means adding an `id` property that uniquely identifies each object, which in our case we already have. So, this code achieves the same result:

```swift
struct IdentifiableGameResult: Identifiable {
    var id = UUID()
    var score: Int
}

struct ContentView: View {
    let results = [
        IdentifiableGameResult(score: 8),
        IdentifiableGameResult(score: 5),
        IdentifiableGameResult(score: 10)
    ]

    var body: some View {
        VStack {
            ForEach(results) { result in
                Text("Result: \(result.score)")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-views-in-a-loop-using-foreach-4.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a List or a ForEach from a binding | SwiftUI by Example",
  "desc": "How to create a List or a ForEach from a binding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-list-or-a-foreach-from-a-binding.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to position views in a grid using LazyVGrid and LazyHGrid | SwiftUI by Example",
  "desc": "How to position views in a grid using LazyVGrid and LazyHGrid",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />