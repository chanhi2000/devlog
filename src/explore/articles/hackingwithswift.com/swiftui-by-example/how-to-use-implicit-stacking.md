---
lang: ko-KR
title: How to use implicit stacking
description: Article(s) > How to use implicit stacking
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
      content: Article(s) > How to use implicit stacking
    - property: og:description
      content: How to use implicit stacking
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-implicit-stacking.html
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
  "title": "How to use implicit stacking | SwiftUI by Example",
  "desc": "How to use implicit stacking",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-implicit-stacking",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

What happens if you create a dynamic list and put more than one thing in each row? SwiftUI's solution is simple, flexible, and gives us great behavior by default: it creates an implicit `HStack` to hold your items, so they automatically get laid out horizontally.

As an example, we could create a row where we had a small picture on the left and the remaining space be allocated to a text field, then create an array of three users and show them in a dynamic list.

Here's how that looks in code:

```swift
// An example struct to hold some data
struct User: Identifiable {
    let id = UUID()
    let username = "Anonymous"
}

// A view to create and show that data in a list
struct ContentView: View {
    let users = [User(), User(), User()]

    var body: some View {
        List(users) { user in
            Image("paul-hudson")
                .resizable()
                .frame(width: 40, height: 40)
            Text(user.username)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-use-implicit-stacking-1.zip)

![A list of three rows with an image of Paul Hudson beside the word “Anonymous”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-implicit-stacking-1@2x.png)

Notice how we don't need to place the image and text views into a `HStack` to have them rendered side by side – SwiftUI figures it out for us.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Displaying a detail screen with NavigationLink | SwiftUI by Example",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/displaying-a-detail-screen-with-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @ObservedObject to manage state from external objects | SwiftUI by Example",
  "desc": "How to use @ObservedObject to manage state from external objects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-observedobject-to-manage-state-from-external-objects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />