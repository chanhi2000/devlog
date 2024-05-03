---
lang: ko-KR
title: How to add a search bar to filter your data
description: Article(s) > How to add a search bar to filter your data
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
      content: Article(s) > How to add a search bar to filter your data
    - property: og:description
      content: How to add a search bar to filter your data
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-search-bar-to-filter-your-data.html
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
  "title": "How to add a search bar to filter your data | SwiftUI by Example",
  "desc": "How to add a search bar to filter your data",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 17**

SwiftUI's `searchable()` modifier lets us place a search bar directly into a `NavigationStack`, which will either stay fixed for simple layouts or automatically appear and scroll when used with a list. For more power, you can also use `searchScopes()` to control where the search takes place.

In its simplest form, this is just a matter of adding `searchable()` to some view inside a navigation stack, like this:

```swift
struct ContentView: View {
    @State private var searchText = ""

    var body: some View {
        NavigationStack {
            Text("Searching for \(searchText)")
                .navigationTitle("Searchable Example")
        }
        .searchable(text: $searchText)            
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-search-bar-to-filter-your-data-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data-1~dark.mp4" />

::: tip

By attaching `searchable()` to `NavigationStack` or `NavigationSplitView`, we're leaving it to the system to decide where is most appropriate to display the search box. If you specifically want it attached to one view, you can move it as needed, or try its `placement` parameter.

:::

If you want to track when searching is currently active, in iOS 17 you can bind an `isPresented` Boolean to `searchable()` like this:

```swift
struct ContentView: View {
    @State private var searchText = ""
    @State private var searchIsActive = false

    var body: some View {
        NavigationStack {
            Text("Searching for \(searchText)")
                .navigationTitle("Searching: \(searchIsActive ? "Yes" : "No")")
        }
        .searchable(text: $searchText, isPresented: $searchIsActive)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-search-bar-to-filter-your-data-2.zip)

For further customization, you can provide a string to display as a prompt for the search box like this:

```swift
struct ContentView: View {
    @State private var searchText = ""

    var body: some View {
        NavigationStack {
            Text("Searching for \(searchText)")
                .navigationTitle("Searchable Example")
        }
        .searchable(text: $searchText, prompt: "Look for something")            
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-search-bar-to-filter-your-data-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data-2~dark.mp4" />

In practice, though, you're more likely to use it to filter a `List` of data, something like this:

```swift
struct ContentView: View {
    let names = ["Holly", "Josh", "Rhonda", "Ted"]
    @State private var searchText = ""

    var body: some View {
        NavigationStack {
            List {
                ForEach(searchResults, id: \.self) { name in
                    NavigationLink {
                        Text(name)
                    } label: {
                        Text(name)
                    }
                }
            }
            .navigationTitle("Contacts")
        }
        .searchable(text: $searchText)            
    }

    var searchResults: [String] {
        if searchText.isEmpty {
            return names
        } else {
            return names.filter { $0.contains(searchText) }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-search-bar-to-filter-your-data-4.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data-3~dark.mp4" />

As the search bar now appears inside a list, it will usually start life hidden – users need to tug the list gently downwards at the top to reveal it.

For more advanced uses, `searchable()` allows us to show a list of suggestions to our users, even adding extra completion information to save them typing so much. This is done by passing a function to `searchable()` that returns a view containing your suggestions, and if you want users to be able to tap to complete their search use the `searchCompletion()` modifier for each suggestion.

So, we could modify our previous example to provide tappable suggestions as the user types, rather than just filtering the whole list in-place:

```swift
struct ContentView: View {
    let names = ["Holly", "Josh", "Rhonda", "Ted"]
    @State private var searchText = ""

    var body: some View {
        NavigationStack {
            List {
                ForEach(searchResults, id: \.self) { name in
                    NavigationLink {
                        Text(name)
                    } label: {
                        Text(name)
                    }
                }
            }
            .navigationTitle("Contacts")
        }
        .searchable(text: $searchText) {
            ForEach(searchResults, id: \.self) { result in
                Text("Are you looking for \(result)?").searchCompletion(result)
            }
        }
    }

    var searchResults: [String] {
        if searchText.isEmpty {
            return names
        } else {
            return names.filter { $0.contains(searchText) }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-search-bar-to-filter-your-data-5.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data-4~dark.mp4" />

That uses “Are you looking for Holly?” and similar for each suggestion, so you can see how it looks on screen. It also uses each person's name as the completion, meaning that if you type “Ho” and tap “Holly” the search bar will autocomplete with the full name.

For more advanced searches, you can add *scopes* to your search box to let the user select what kind of search they want by adding the `searchScopes()` modifier. This needs to be bound to some state that tracks the currently active search scope, and you can then provide scopes using a trailing closure.

As an example, we could write some code to let the user choose between searching all their inbox or just their favorite messages, like this:

```swift
struct Message: Identifiable, Codable {
    let id: Int
    var user: String
    var text: String
}

enum SearchScope: String, CaseIterable {
    case inbox, favorites
}

struct ContentView: View {
    @State private var messages = [Message]()

    @State private var searchText = ""
    @State private var searchScope = SearchScope.inbox

    var body: some View {
        NavigationStack {
            List {
                ForEach(filteredMessages) { message in
                    VStack(alignment: .leading) {
                        Text(message.user)
                            .font(.headline)

                        Text(message.text)
                    }
                }
            }
            .navigationTitle("Messages")
        }
        .searchable(text: $searchText)
        .searchScopes($searchScope) {
            ForEach(SearchScope.allCases, id: \.self) { scope in
                Text(scope.rawValue.capitalized)
            }
        }
        .onAppear(perform: runSearch)
        .onSubmit(of: .search, runSearch)
        .onChange(of: searchScope) { _ in runSearch() }
    }

    var filteredMessages: [Message] {
        if searchText.isEmpty {
            return messages
        } else {
            return messages.filter { $0.text.localizedCaseInsensitiveContains(searchText) }
        }
    }

    func runSearch() {
        Task {
            guard let url = URL(string: "https://hws.dev/\(searchScope.rawValue).json") else { return }

            let (data, _) = try await URLSession.shared.data(from: url)
            messages = try JSONDecoder().decode([Message].self, from: data)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-search-bar-to-filter-your-data-6.zip)

::: tip

If you add more scopes than there is space for, your scope titles will be truncated.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to add search tokens to a search field | SwiftUI by Example",
  "desc": "How to add search tokens to a search field",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-search-tokens-to-a-search-field.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to filter Core Data fetch requests using a predicate | SwiftUI by Example",
  "desc": "How to filter Core Data fetch requests using a predicate",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-filter-core-data-fetch-requests-using-a-predicate.md",
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
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add bar items to a navigation view | SwiftUI by Example",
  "desc": "How to add bar items to a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-bar-items-to-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />