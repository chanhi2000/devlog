---
lang: ko-KR
title: How to use MVVM to separate SwiftData from your views
description: Article(s) > How to use MVVM to separate SwiftData from your views
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to use MVVM to separate SwiftData from your views
    - property: og:description
      content: How to use MVVM to separate SwiftData from your views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-access-a-swiftdata-container-from-widgets.md
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use MVVM to separate SwiftData from your views | SwiftData by Example",
  "desc": "How to use MVVM to separate SwiftData from your views",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData and SwiftUI perform best when tightly integrated, and when you separate them – when you want to introduce view models into your code  you lose a fair amount of their power. However, with some extra work MVVM can be used just fine with SwiftUI and SwiftData, as long as you're careful to keep your data synchronized.

::: tip

If you used Core Data previously you'll know that `NSFetchedResultsController` allowed us to execute a query and monitor it for changes. We don't have an equivalent in SwiftData, so you need to keep your data model updated by hand.

:::

Regardless of whether you use MVVM or not, your underlying SwiftData models are the same. For this example, we'll use this simple `Movie` model:

```swift
@Model
class Movie {
    var title: String
    var cast: [String]

    init(title: String, cast: [String]) {
        self.title = title
        self.cast = cast
    }
}
```

To demonstrate MVVM, let's first look at the non-MVVM approach where SwiftUI and SwiftData are tied closely using `@Query` and the environment. This means our layout and data are both handled directly in the SwiftUI view, like this:

```swift
struct ContentView: View {
    @Query(sort: \Movie.title) var movies: [Movie]
    @Environment(\.modelContext) var modelContext

    var body: some View {
        NavigationStack {
            List(movies) { movie in
                VStack(alignment: .leading) {
                    Text(movie.title)
                        .font(.headline)

                    Text(movie.cast.formatted(.list(type: .and)))
                }
            }
            .navigationTitle("MovieDB")
            .toolbar {
                Button("Add Sample", action: addSample)
            }
        }
    }

    func addSample() {
        let movie = Movie(title: "Avatar", cast: ["Sam Worthington", "Zoe Saldaña", "Stephen Lang", "Michelle Rodriguez"])
        modelContext.insert(movie)
    }
}
```

This suffers from the same problem you'll have seen outside of SwiftData – it's hard to write unit tests for this, because the query requires SwiftUI to be actively involved.

To move this over to MVVM we need to create a new view model class using the `@Observable` macro. This needs to be able to perform a SwiftData fetch when it loads, but also to repeat that fetch in the future when the data changes.

::: important

The `@Query` macro works only when it can access the SwiftUI environment, which makes it incompatible with MVVM.

:::

So, we might make something like this:

```swift
extension ContentView {
    @Observable
    class ViewModel {
        var modelContext: ModelContext
        var movies = [Movie]()

        init(modelContext: ModelContext) {
            self.modelContext = modelContext
            fetchData()
        }

        func addSample() {
            let movie = Movie(title: "Avatar", cast: ["Sam Worthington", "Zoe Saldaña", "Stephen Lang", "Michelle Rodriguez"])
            modelContext.insert(movie)
            fetchData()
        }

        func fetchData() {
            do {
                let descriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.title)])
                movies = try modelContext.fetch(descriptor)
            } catch {
                print("Fetch failed")
            }
        }
    }
}
```

::: tip

I place view models into an extension on their view, to help keep names simple – I'd much rather refer to `ViewModel` than something like `ContentViewViewModel`.

:::

Your view model doesn't need to perform a complete fetch for every change you make, but you do need *some* way to make sure its data stays up to date over time.

When it comes to creating the view model, you need to be able to pass in the active model context directly rather than trying to read it from the environment – your view model can't access the environment at all, and it won't be available during your SwiftUI view's initializer.

So, you'd need something like this:

```swift
struct ContentView: View {
    @State private var viewModel: ViewModel

    var body: some View {
        NavigationStack {
            List(viewModel.movies) { movie in
                VStack(alignment: .leading) {
                    Text(movie.title)
                        .font(.headline)

                    Text(movie.cast.formatted(.list(type: .and)))
                }
            }
            .navigationTitle("MovieDB")
            .toolbar {
                Button("Add Sample", action: viewModel.addSample)
            }
        }
    }

    init(modelContext: ModelContext) {
        let viewModel = ViewModel(modelContext: modelContext)
        _viewModel = State(initialValue: viewModel)
    }
}
```

Finally, adjust your `App` struct so that you create your model container by hand, then inject its `mainContext` into your SwiftUI view, like this:

```swift
@main
struct MovieDBApp: App {
    let container: ModelContainer

    var body: some Scene {
        WindowGroup {
            ContentView(modelContext: container.mainContext)
        }
        .modelContainer(container)
    }

    init() {
        do {
            container = try ModelContainer(for: Movie.self)
        } catch {
            fatalError("Failed to create ModelContainer for Movie.")
        }
    }
}
```

It takes only a little more work, but the result is definitely more friendly for unit testing  you can create a standalone instance of the view model rather than running it through UI tests.

However, this is only the first step to getting MVVM working well, because you'd also need to track updates for individual objects  if a `Movie` has its cast list adjusted, for example, that needs to be reflected in your data.

This is obviously quite a lot of work right now, which is why a number of people have said outright that they think MVVM is dead with SwiftData. I wouldn't go quite that far, but I am certainly counting down the days until we get an `NSFetchedResultsController` equivalent for SwiftData…

---

<TagLinks />