---
lang: ko-KR
title: How to write unit tests for your SwiftData code
description: Article(s) > How to write unit tests for your SwiftData code
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
      content: Article(s) > How to write unit tests for your SwiftData code
    - property: og:description
      content: How to write unit tests for your SwiftData code
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-write-unit-tests-for-your-swiftdata-code.html
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
  "title": "How to write unit tests for your SwiftData code | SwiftData by Example",
  "desc": "How to write unit tests for your SwiftData code",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-write-unit-tests-for-your-swiftdata-code", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can write both unit tests and UI tests for SwiftData using XCTest and XCUITest, but unit parts are a little tricky thanks to the tight integration of SwiftData and SwiftUI.

Writing unit tests with SwiftData is tricky because we need to be able to access our data model directly. If you're making queries by hand, perhaps because you're using MVVM or if you have other models being created and inserted outside of SwiftUI, then you'll be able to write unit tests just fine.

Let's demonstrate this with some code.

First, here's a simple SwiftData model we can work with:

```swift
@Model
class Movie {
    var name: String
    var director: String
    var releaseYear: Int

    init(name: String, director: String, releaseYear: Int) {
        self.name = name
        self.director = director
        self.releaseYear = releaseYear
    }
}
```

Rather than querying that directly using `@Query`, we're going to query it using a fetch descriptor inside a view model. This takes a little more work, but it also means we can write unit tests by instantiating the view model directly – we can bypass SwiftUI entirely.

So, here's some code that creates a view model capable of adding and deleting sample data, and also fetching a list of movies on demand:

```swift
extension ContentView {
    @Observable
    final class ViewModel {
        private let modelContext: ModelContext
        private(set) var movies = [Movie]()

        init(modelContext: ModelContext) {
            self.modelContext = modelContext
            fetchData()
        }

        func addSamples() {
            let redOctober = Movie(name: "The Hunt for Red October", director: "John McTiernan", releaseYear: 1990)
            let sneakers = Movie(name: "Sneakers", director: "Phil Alden Robinson", releaseYear: 1992)
            let endLiss = Movie(name: "Endliss Possibilities: The Casey Liss Story", director: "Erin Liss", releaseYear: 2006)

            modelContext.insert(redOctober)
            modelContext.insert(sneakers)
            modelContext.insert(endLiss)
            try? modelContext.save()
            fetchData()
        }

        func clear() {
            try? modelContext.delete(model: Movie.self)
            try? modelContext.save()
            fetchData()
        }

        func fetchData() {
            do {
                let descriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.name)])
                movies = try modelContext.fetch(descriptor)
            } catch {
                print("Fetch failed")
            }
        }
    }
}
```

We can display all that data in a simple SwiftUI view that creates an instance of the view model and displays its results in a list:

```swift
struct ContentView: View {
    @State private var viewModel: ViewModel

    var body: some View {
        NavigationStack {
            List(viewModel.movies) { movie in
                VStack(alignment: .leading) {
                    Text(movie.name)
                        .font(.headline)

                    Text("Directed by: \(movie.director)")
                }
            }
            .navigationTitle("MovieDB")
            .toolbar {
                Button("Add Samples", action: viewModel.addSamples)
                Button("Clear", action: viewModel.clear)
            }
        }
    }

    init(modelContext: ModelContext) {
        let viewModel = ViewModel(modelContext: modelContext)
        _viewModel = State(initialValue: viewModel)
    }
}
```

That's all our setup code complete, so we can now start writing unit tests. Go to the File menu and choose <FontIcon icon="iconfont icon-select"/>`[New]` > `[Target]`. Select Unit Testing Bundle, then press Next and Finish to create a new set of unit tests.

Now open your test file. We're going to write a unit test in a moment, but first we need some small changes:

1. Add `@testable import YourAppTests` to the top of the file, changing `YourAppTests` to be whatever your main module is called. This gives us access to all the data types inside the main project.
2. Add `import SwiftData` below that, so we can make containers and contexts freely.
3. Mark your `XCTestCase` with the `@MainActor` attribute, so we can access the main context freely.

At last we can actually write a real test for our view model. This will simply create the view model and assert that there are 0 movies by default:

```swift
func testAppStartsEmpty() throws {
    let config = ModelConfiguration(isStoredInMemoryOnly: true)
    let container = try ModelContainer(for: Movie.self, configurations: config)

    let sut = ContentView.ViewModel(modelContext: container.mainContext)

    XCTAssertEqual(sut.movies.count, 0, "There should be 0 movies when the app is first launched.")
}
```

::: tip

The name `sut` is common in unit tests, and is short for "system under test."

:::

Yes, I know it's a lot of work for a small test, but now that all the setup is in place we can add more tests easily. For example, we could add a test to make sure the `addSamples()` method creates exactly three samples:

```swift
func testCreatingSamplesWorks() throws {
    let config = ModelConfiguration(isStoredInMemoryOnly: true)
    let container = try ModelContainer(for: Movie.self, configurations: config)

    let sut = ContentView.ViewModel(modelContext: container.mainContext)
    sut.addSamples()

    XCTAssertEqual(sut.movies.count, 3, "There should be 3 movies after adding sample data.")
}
```

Or a test to make sure the `clear()` method removes all the movies that were created:

```swift
func testCreatingAndClearingLeavesAppEmpty() throws {
    let config = ModelConfiguration(isStoredInMemoryOnly: true)
    let container = try ModelContainer(for: Movie.self, configurations: config)

    let sut = ContentView.ViewModel(modelContext: container.mainContext)
    sut.addSamples()
    sut.clear()

    XCTAssertEqual(sut.movies.count, 0, "There should be 0 movies after deleting all data.")
}
```

These work well, although making the configuration, container, and view model each time is a bit repetitive. If that annoys you, consider adding a small protocol and extension to your test file, like this:

```swift
protocol ViewModelTestable {
    init(modelContext: ModelContext)
}

extension ContentView.ViewModel: ViewModelTestable { }
```

::: tip

Our view model can only conform to this protocol if it's declared as a `final` class, which is why this was added earlier.

:::

And now we can add a helper method to our `XCTestCase` class that's able to create and configure the view model for us:

```swift
func make<T: ViewModelTestable>(viewModel: T.Type) throws -> T {
    let config = ModelConfiguration(isStoredInMemoryOnly: true)
    let container = try ModelContainer(for: Movie.self, configurations: config)
    return T(modelContext: container.mainContext)
}
```

This makes our test code much simpler:

```swift
func testCreatingSamplesWorks() throws {
    let sut = try make(viewModel: ContentView.ViewModel.self)

    sut.addSamples()

    XCTAssertEqual(sut.movies.count, 3, "There should be 3 movies after adding sample data.")
}
```

It's particularly nice if you're fond of the "given, when, then" or "arrange, act, assert" model:

```swift
func testCreatingSamplesWorks() throws {
    // Given
    let sut = try make(viewModel: ContentView.ViewModel.self)

    // When
    sut.addSamples()

    // Then
    XCTAssertEqual(sut.movies.count, 3, "There should be 3 movies after adding sample data.")
}
```

Anyway, as you can see unit testing can work great with SwiftData – as long as you're happy to pull your data access out into a separate view model. This does make tracking updates significantly harder, but hopefully we'll get some sort of `NSFetchedResultsController` equivalent soon…

---

<TagLinks />