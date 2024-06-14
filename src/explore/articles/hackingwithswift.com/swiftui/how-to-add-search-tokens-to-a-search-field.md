---
lang: ko-KR
title: How to add search tokens to a search field
description: Article(s) > How to add search tokens to a search field
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
      content: Article(s) > How to add search tokens to a search field
    - property: og:description
      content: How to add search tokens to a search field
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-add-search-tokens-to-a-search-field.html
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
  "title": "How to add search tokens to a search field | SwiftUI by Example",
  "desc": "How to add search tokens to a search field",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `searchable()` modifier lets us place a search bar directly into a `NavigationStack`, but along with just free-text search we can also allow the user to select search *tokens* – pre-filled chunks of text that represent a specific category or filter in your app.

This isn't *hard* to do, but it does require several steps. You need:

- A regular `searchable()` implementation that filters your results by the user's search text.
- A custom data type to represent one search token. You can't just use strings or similar, because SwiftUI requires tokens to conform to `Identifiable`.
- An array of all the tokens the user can select from. This might be a constant array, or it might be a published array of values that changes our time.
- An array of all the tokens the user has entered. This is a subset of all the tokens, and should be factored into your filtering code.
- Some code to decide how to render a single token in the list. This might be just a `Text` view, but it doesn't need to be.

That might not sound *too* complex, but there's an extra wrinkle: the iOS implementation of `searchable()` will replace your search results with your suggested tokens by default, which makes the default search functionality a lot less useful. So, I prefer to ask users to activate token filtering specifically by starting with a “#” sign, similar to Twitter and Mastodon.

![An iOS search bar showing the Sci-Fi token active, with the search text Incept.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field-1.png)

Anyway, enough talk – here's a sample implementation of `searchable()` with token support:

```swift
// Holds one uniquely identifiable movie.
struct Movie: Identifiable {
    var id = UUID()
    var name: String
    var genre: String
}

// Holds one token that we want the user to filter by. This *must* conform to Identifiable.
struct Token: Identifiable {
    var id: String { name }
    var name: String
}

struct ContentView: View {
    // Whatever text the user has typed so far.
    @State private var searchText = ""

    // All possible tokens we want to show to the user.
    let allTokens = [Token(name: "Action"), Token(name: "Comedy"), Token(name: "Drama"), Token(name: "Family"), Token(name: "Sci-Fi")]

    // The list of tokens the user currently has selected.
    @State private var currentTokens = [Token]()

    // The list of tokens we want to show to the user right now. Activates token selection only when searchText starts with #.
    var suggestedTokens: [Token] {
        if searchText.starts(with: "#") {
            return allTokens
        } else {
            return []
        }
    }

    // Some data to show and filter by.
    let movies = [
        Movie(name: "Avatar", genre: "Sci-Fi"),
        Movie(name: "Inception", genre: "Sci-Fi"),
        Movie(name: "Love Actually", genre: "Comedy"),
        Movie(name: "Paddington", genre: "Family")
    ]

    // The real work: filter all the movies based on search text or tokens.
    var searchResults: [Movie] {
        // trim whitespace
        let trimmedSearchText = searchText.trimmingCharacters(in: .whitespaces)

        return movies.filter { movie in
            if searchText.isEmpty == false {
                // If we have search text, make sure this item matches.
                if movie.name.localizedCaseInsensitiveContains(trimmedSearchText) == false {
                    return false
                }
            }

            if currentTokens.isEmpty == false {
                // If we have search tokens, loop through them all to make sure one of them matches our movie.
                for token in currentTokens {
                    if token.name.localizedCaseInsensitiveContains(movie.genre) {
                        return true
                    }
                }

                // This movie does *not* match any of our tokens, so it shouldn't be sent back.
                return false
            }

            // If we're still here then the movie should be included.
            return true
        }
    }

    var body: some View {
        NavigationStack {
            List(searchResults) { movie in
                Text(movie.name)
            }
            .navigationTitle("Movies+")
            .searchable(text: $searchText, tokens: $currentTokens, suggestedTokens: .constant(suggestedTokens), prompt: Text("Type to filter, or use # for tags")) { token in
                Text(token.name)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-search-tokens-to-a-search-field-1.zip)

There are a few things that are worth pointing out in that code:

- We figure out which tokens to suggest to the user inside a computed property, so we're able to enable or disable token selection dynamically. SwiftUI expects a binding for the resulting array, so I've used `.constant(suggestedTokens)`.
- We *don't* need to filter out the tokens the user has currently selected, because SwiftUI takes care of that automatically.
- The `searchable()` prompt explicitly tells the user to type a “#” for tags.
- The trailing closure for `searchable()` lets us tell SwiftUI to render each tag as some text showing its name.

In practice, I suspect you're more likely to have multiple tags attached to each piece of data you're working with, in which case I'd probably prefer Swift's `isSuperset(of:)` set operation for comparing the user's selected tags against those in your object. If you're working with lots of tokens, I would also suggest you filter your list of suggested tokens based on what the user has typed so far.

One last thing: although the iOS implementation of `searchable()` replaces your search results with the suggested tokens, this does *not* happen on macOS. Instead, your search tokens appear as a popup below the search box, leaving your search results visible at the same time – it's a much nicer experience.

![A macOS search bar showing the Sci-Fi token active, with a popup menu below showing other available tags.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field-2.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to add a search bar to filter your data | SwiftUI by Example",
  "desc": "How to add a search bar to filter your data",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-search-bar-to-filter-your-data.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add in-app purchases in SwiftUI | SwiftUI by Example",
  "desc": "How to add in-app purchases in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-in-app-purchases-in-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/two-way-bindings-in-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a border to a TextField | SwiftUI by Example",
  "desc": "How to add a border to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-border-to-a-textfield.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />