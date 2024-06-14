---
lang: ko-KR
title: How to save and load NavigationStack paths using Codable
description: Article(s) > How to save and load NavigationStack paths using Codable
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
      content: Article(s) > How to save and load NavigationStack paths using Codable
    - property: og:description
      content: How to save and load NavigationStack paths using Codable
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-save-and-load-navigationstack-paths-using-codable.html
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
  "title": "How to save and load NavigationStack paths using Codable | SwiftUI by Example",
  "desc": "How to save and load NavigationStack paths using Codable",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

When managing SwiftUI's `NavigationStack` path using a `NavigationPath` object, we can save and load our whole path using `Codable` – we can store the complete navigation stack and restore it later, so the user comes back to the app exactly where they left it.

This is best handled by wrapping up your storage in a separate `ObservableObject` class, which can take the responsibility of loading and saving path data away from your views. For example, this class loads a saved when it's created, and saves the path whenever its `NavigationPath` property gets changed:

```swift
class PathStore: ObservableObject {
    @Published var path = NavigationPath() {
        didSet {
            save()
        }
    }

    private let savePath = URL.documentsDirectory.appending(path: "SavedPathStore")

    init() {
        if let data = try? Data(contentsOf: savePath) {
            if let decoded = try? JSONDecoder().decode(NavigationPath.CodableRepresentation.self, from: data) {
                path = NavigationPath(decoded)
                return
            }
        }
    }

    func save() {
        guard let representation = path.codable else { return }

        do {
            let data = try JSONEncoder().encode(representation)
            try data.write(to: savePath)
        } catch {
            print("Failed to save navigation data")
        }
    }
}
```

That's a neatly reusable class that you can put to work immediately – as long as the data you write into `NavigationPath` conforms to `Codable`, it will work.

For example, we could create a simple detail view capable of showing a number the user selected while also allowing them to navigate deeper by selecting another number, then use that with our `PathStore` class so that navigation is automatically loaded and saved:

```swift
struct DetailView: View {
    var id: Int

    var body: some View {
        VStack {
            Text("View \(id)")
                .font(.largeTitle)
            NavigationLink("Jump to random", value: Int.random(in: 1...100))
        }
    }
}

struct ContentView: View {
    @StateObject private var pathStore = PathStore()

    var body: some View {
        NavigationStack(path: $pathStore.path) {
            DetailView(id: 0)
                .navigationDestination(for: Int.self, destination: DetailView.init)
                .navigationTitle("Navigation")
        }
    }
}
```

If you run that code, you'll see you can navigate through as many levels of `DetailView` as you want, and your data will automatically be stored – you can quit the app and return just fine, and your navigation history will remain intact.

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view onto a NavigationStack | SwiftUI by Example",
  "desc": "How to push a new view onto a NavigationStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-onto-a-navigationstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />