---
lang: ko-KR
title: How to create a document-based app with SwiftData
description: Article(s) > How to create a document-based app with SwiftData
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
      content: Article(s) > How to create a document-based app with SwiftData
    - property: og:description
      content: How to create a document-based app with SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-document-based-app-with-swiftdata.html
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
  "title": "How to create a document-based app with SwiftData | SwiftData by Example",
  "desc": "How to create a document-based app with SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-a-document-based-app-with-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData and SwiftUI combine to make document-based apps work with almost no extra work from us. Behind the scenes, SwiftData silently creates separate storage for each new document along with any associated files used in your data models, and SwiftUI takes care of presenting the document browser then opening files the user selects.

::: important

Unlike regular SwiftUI document-based apps, SwiftData-backed apps don't use the concept of a single document object. Instead, you use `@Query` and similar to read collections of data, so 

:::

unless you write some code to load a document singleton manually you'll need to use collection-based data.

A simple example of this might be an app to track feedback reports for iOS apps you've built in the past. Each app would be its own document, and inside there would be a collection of bugs, suggestions, ideas, and more for that app.

To create this in SwiftData we'd start by defining a model such as this:

```swift
@Model
class FeedbackReport {
    var title: String
    var content: String
    var priority: Int

    init(title: String, content: String, priority: Int) {
        self.title = title
        self.content = content
        self.priority = priority
    }
}
```

Next you'd build one SwiftUI view to edit your data, and another to show your data.

To follow our `FeedbackReport` example, an editing view might look like this:

```swift
struct EditReportView: View {
    @Bindable var report: FeedbackReport

    var body: some View {
        Form {
            TextField("Issue title", text: $report.title)
            TextField("Issue description", text: $report.content, axis: .vertical)

            Picker("Priority", selection: $report.priority) {
                Text("Low").tag(3)
                Text("Medium").tag(2)
                Text("High").tag(1)
            }
        }
        .navigationTitle("Edit Report")
    }
}
```

And a view to list all reports might look like this:

```swift
struct ContentView: View {
    @Query(sort: \FeedbackReport.priority, order: .reverse) var reports: [FeedbackReport]
    @Environment(\.modelContext) var modelContext
    @State private var navigationPath = [FeedbackReport]()

    var body: some View {
        NavigationStack(path: $navigationPath) {
            List(reports) { report in
                NavigationLink(value: report) {
                    VStack(alignment: .leading) {
                        Text(report.title)
                            .font(.headline)

                        Text(report.content)
                            .lineLimit(2)
                    }
                }
            }
            .navigationTitle("Feedback Assistant")
            .navigationDestination(for: FeedbackReport.self, destination: EditReportView.init)
            .toolbar {
                Button("New report", systemImage: "plus", action: createNew)
            }
        }
    }

    func createNew() {
        let report = FeedbackReport(title: "", content: "", priority: 1)
        modelContext.insert(report)
        navigationPath = [report]
    }
}
```

So far this is a regular SwiftData app, and if you only wanted to have a single store for all your feedback reports then you'd be done.

However, with a few small changes we can make this into a document-based app.

First, you need to go to the Info tab for your target and add an entry under Exported Type Identifiers. For this project I would use the following values:

- **Description**: Feedback report
- **Identifier**: `com.yoursite.feedbackreport`
- **Conforms To**: `com.apple.package`
- **Extension**: feedback

::: important

All of those are customizable to fit your app's needs, apart from the "Conforms To" value, which must always be "com.apple.package".

:::

Second, you need to add an entry to the list of custom target properties. This means right-clicking on an existing row and selecting Add Row, then using that new row to see Supports Document Browser to YES.

Third, you need to create a custom `UTType` object using the same identifier you just declared for your target. Something like this is enough:

```swift
import UniformTypeIdentifiers

extension UTType {
    static var feedbackReport = UTType(exportedAs: "com.yoursite.feedbackreport")
}
```

And finally, you need to edit your `App` struct to replace this line of code:

```swift
WindowGroup {
```

With a `DocumentGroup` like this one:

```swift
DocumentGroup(editing: FeedbackReport.self, contentType: .feedbackReport) {
```

::: important

You must *not* use the `modelContainer()` modifier when working with a SwiftData document-based app.

:::

With those four changes done the app is fully upgraded to work with documents. Next time you run it you'll see the app launches straight to the standard document browser interface, where you can press <FontIcon icon="iconfont icon-select"/>`[+]` to create a new document, then create reports inside there.

As I said earlier, SwiftData silently creates separate storage for each new document along with any associated files used in your data models, meaning that if you use `@Attribute(.externalStorage)` on any of your model properties those external files will be stored in your document. This is why it's so important to conform to "com.apple.package" – your "document" is really a directory of data containing the underlying SQLite database and all its external files.

---

<TagLinks />