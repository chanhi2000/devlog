---
lang: ko-KR
title: How to write UI tests for your SwiftData code
description: Article(s) > How to write UI tests for your SwiftData code
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
      content: Article(s) > How to write UI tests for your SwiftData code
    - property: og:description
      content: How to write UI tests for your SwiftData code
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-write-ui-tests-for-your-swiftdata-code.html
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
  "title": "How to write UI tests for your SwiftData code | SwiftData by Example",
  "desc": "How to write UI tests for your SwiftData code",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-write-ui-tests-for-your-swiftdata-code", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you're using the `@Query` property wrapper to load your data, the only way to test your app is by writing UI tests. That macro relies on SwiftUI running, so you'll need to display your views and make assertions directly against them.

First, we need a model to test with. This creates a `Movie` model with three properties plus an initializer:

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

Second, we need to inject that into our app's environment using the `modelContainer()` modifier:

```swift
WindowGroup {
    ContentView()
}
.modelContainer(for: Movie.self)
```

And third we need a sample SwiftUI view to test, such as this:

```swift
struct ContentView: View {
    @Query(sort: \Movie.name) var movies: [Movie]
    @Environment(\.modelContext) var modelContext

    var body: some View {
        NavigationStack {
            List(movies) { movie in
                VStack(alignment: .leading) {
                    Text(movie.name)
                        .font(.headline)

                    Text("Directed by: \(movie.director)")
                }
            }
            .navigationTitle("MovieDB")
            .toolbar {
                Button("Add Samples", action: addSamples)
            }
        }
    }

    func addSamples() {    
        let redOctober = Movie(name: "The Hunt for Red October", director: "John McTiernan", releaseYear: 1990)
        let sneakers = Movie(name: "Sneakers", director: "Phil Alden Robinson", releaseYear: 1992)
        let endLiss = Movie(name: "Endliss Possibilities: The Casey Liss Story", director: "Erin Liss", releaseYear: 2006)

        modelContext.insert(redOctober)
        modelContext.insert(sneakers)
        modelContext.insert(endLiss)
    }

    func clear() {
        try? modelContext.delete(model: Movie.self)
    }
}
```

That's our setup complete, so now we can focus on writing some UI tests. Go to the File menu and choose <FontIcon icon="iconfont icon-select"/>`[New]` > `[Target]`, then select UI Testing Bundle and click Next. The default values provided by Xcode are fine, so click Finish to create the test bundle, then open the UI tests file for editing.

The first UI test we'll write is simple enough: when the app is first launched there should be 0 movies in the list.

Add this to your `XCTestCase` subclass:

```swift
func testAppStartsEmpty() {
    let app = XCUIApplication()
    app.launch()

    XCTAssertEqual(app.cells.count, 0, "There should be 0 movies when the app is first launched.")
}
```

That should pass just fine, so next we can write a test to check that there are 3 list rows once all the sample data has been added:

```swift
func testAppCreatingSamplesWorks() {
    let app = XCUIApplication()
    app.launch()

    app.buttons["Add Samples"].tap()

    XCTAssertEqual(app.cells.count, 3, "There should be 3 movies after adding sample data.")
}
```

That should pass too.

However, there's a problem: if you now run the `testAppStartsEmpty()` again you'll see it fails, because now there are three rows when the app launches.

This is where you need to introduce an important UI testing technique for SwiftData: your tests should always run in memory rather than writing to permanent storage, so that each time the tests start you have a clean slate.

We can't access our app's internals directly because this is a UI test rather than a unit test, but we *can* pass a custom launch argument then use that to adjust the way our app loads.

First modify the `testAppStartsEmpty()` method to add this line before the call to `launch()`:

```swift
app.launchArguments = ["enable-testing"]
```

That injects a special "enable-testing" string into the app's launch arguments, which we can check for at runtime. 

::: important

You should check for this launch argument only when the `#DEBUG` compilation condition is present, to avoid others activating test mode in the release version of your app.

:::

We can now adjust our `App` struct so that we check for the "enable-testing" launch argument, and if it exists use an in-memory store:

```swift
struct MovieTestsApp: App {
    let modelContainer: ModelContainer

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(modelContainer)
    }

    init() {
        var inMemory = false

        #if DEBUG
        if CommandLine.arguments.contains("enable-testing") {
            inMemory = true
        }
        #endif

        do {
            let configuration = ModelConfiguration(for: Movie.self, isStoredInMemoryOnly: inMemory)
            modelContainer = try ModelContainer(for: Movie.self, configurations: configuration)
        } catch {
            fatalError("Failed to load model container.")
        }
    }
}
```

That will solve the problem, but it also means we need to set the correct `launchArguments` value for every UI tests.

Honestly, that's exactly the kind of thing you're going to screw up sooner or later, so if I were you I'd centralize creating and configuring your `XCUIApplication` in the `setUpWithError()` method, which automatically gets called before every tests.

So, your code would look like this:

```swift
final class MovieTestsUITests: XCTestCase {
    var app: XCUIApplication!

    override func setUpWithError() throws {
        continueAfterFailure = false
        app = XCUIApplication()
        app.launchArguments =  ["enable-testing"]
        app.launch()
    }

    func testAppStartsEmpty() {
        XCTAssertEqual(app.cells.count, 0, "There should be 0 movies when the app is first launched.")
    }

    func testCreatingSamplesWorks() {
        app.buttons["Add Samples"].tap()

        XCTAssertEqual(app.cells.count, 3, "There should be 3 movies after adding sample data.")
    }
}
```

At this point both our tests will pass repeatedly, and we're no longer stomping over any stored data in our app because it's all in memory.

We can write one more, this time building on a previous test so that we add some sample data, check that it worked, then *clear* the sample data and verify it's gone:

```swift
func testClearingDataWorks() {
    testAppCreatingSamplesWorks()

    app.buttons["Clear"].tap()

    XCTAssertEqual(app.cells.count, 0, "There should be 0 movies after deleting all data.")
}
```

As you can see, we're effectively testing SwiftData indirectly: 

1. We manipulate the UI like a user would
2. SwiftData silently updates our `@Query` property.
3. SwiftUI spots that change and reinvokes its `body` property.
4. We then make assertions against the updated UI state.

---

<TagLinks />