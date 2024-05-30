---
lang: ko-KR
title: How to enable pull to refresh
description: Article(s) > How to enable pull to refresh
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
      content: Article(s) > How to enable pull to refresh
    - property: og:description
      content: How to enable pull to refresh
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-pull-to-refresh.html
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
  "title": "How to enable pull to refresh | SwiftUI by Example",
  "desc": "How to enable pull to refresh",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-enable-pull-to-refresh",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI's `refreshable()` modifier lets you attach functionality to a `List` to be triggered when the user drags down far enough. iOS will automatically show an activity indicator for as long as it takes for your code to finish running.

To get started, simply add a `refreshable()` modifier to your list where you do your work, like this:

```swift
struct ContentView: View {
    var body: some View {
        NavigationStack {
            List(1..<100) { row in
                Text("Row \(row)")
            }
            .refreshable {
                print("Do your refresh work here")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-enable-pull-to-refresh-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-enable-pull-to-refresh-1~dark.mp4" />

The code you place inside `refreshable()` is already running in an async context, so it's the perfect place to put something like networking. For example, here's a complete example that uses pull to refresh to download some news stories into a `List`:

```swift
struct NewsItem: Decodable, Identifiable {
    let id: Int
    let title: String
    let strap: String
}

struct ContentView: View {
    @State private var news = [
        NewsItem(id: 0, title: "Want the latest news?", strap: "Pull to refresh!")
    ]

    var body: some View {
        NavigationStack {
            List(news) { item in
                VStack(alignment: .leading) {
                    Text(item.title)
                        .font(.headline)
                    Text(item.strap)
                        .foregroundStyle(.secondary)
                }
            }
            .refreshable {
                do {
                    // Fetch and decode JSON into news items
                    let url = URL(string: "https://www.hackingwithswift.com/samples/news-1.json")!
                    let url = URL(string: "https://hackingwithswift.com/samples/news-1.json")!
                    let (data, _) = try await URLSession.shared.data(from: url)
                    news = try JSONDecoder().decode([NewsItem].self, from: data)
                } catch {
                    // Something went wrong; clear the news
                    news = []
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-enable-pull-to-refresh-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-enable-pull-to-refresh-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to enable editing on a list using EditButton | SwiftUI by Example",
  "desc": "How to enable editing on a list using EditButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-editing-on-a-list-using-editbutton.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to enable vertical page scrolling | SwiftUI by Example",
  "desc": "How to enable vertical page scrolling",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-vertical-page-scrolling.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to send state updates manually using objectWillChange | SwiftUI by Example",
  "desc": "How to send state updates manually using objectWillChange",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-send-state-updates-manually-using-objectwillchange.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
:::

---

<TagLinks />