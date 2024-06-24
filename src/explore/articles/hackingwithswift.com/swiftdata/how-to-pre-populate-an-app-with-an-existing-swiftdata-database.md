---
lang: ko-KR
title: How to pre-populate an app with an existing SwiftData database
description: Article(s) > How to pre-populate an app with an existing SwiftData database
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
      content: Article(s) > How to pre-populate an app with an existing SwiftData database
    - property: og:description
      content: How to pre-populate an app with an existing SwiftData database
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-pre-populate-an-app-with-an-existing-swiftdata-database.html
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
  "title": "How to pre-populate an app with an existing SwiftData database | SwiftData by Example",
  "desc": "How to pre-populate an app with an existing SwiftData database",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-pre-populate-an-app-with-an-existing-swiftdata-database", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Preload an app with a SwiftData database means create all the data beforehand, then shipping the pre-made SwiftData store in your project. This is Apple's preferred approach to seeding an app with default data, but it does take a fair amount of work to set up.

If you want to ship a fully formed SwiftData store, the only approach you have is to create it yourself separately ahead of time. This might be hidden away in your app using a `#DEBUG` check so it's available only when running from Xcode, or it might be a wholly separate application.

As an example, you might create an app specifically to let you customize then build the database you want to ship. This might be on macOS or iOS; either work.

That might sound straightforward, but there's a significant speed bump in the plan: SwiftData uses a high-performance database mode called "write-ahead logging", which means it may or may not write all your data into a single database you can copy into another app. 

The good news is that we can disable write-ahead logging. The *bad* news is that we can't do it from SwiftData – we need to use Core Data. So, this means you need to recreate your SwiftData models in the Core Data model editor, then write a small amount of Core Data code to write and export your data.

If that hasn't put you off, let's begin. First you'd define your model in both your App Store app and your data creation app – the former using SwiftData, and the latter using Core Data.

As an example, in SwiftData we might use something like this:

```swift
class User {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

In the separate database creation app, that would mean adding a new Data Model called "Model", creating a "User" entity inside there, then giving it a single "name" property with the type String.

Once that's done, replace your default `ContentView` code with this – I've added comments throughout explaining each step:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Button("Create Data") { create() }
        }
    }

    func create() {
        // Load our data model
        let container = NSPersistentContainer(name: "Model")

        // Write to a specific store filename, for easier deletion and copying.
        let storeURL = URL.documentsDirectory.appending(path: "users.store")

        if let description = container.persistentStoreDescriptions.first {
            // Delete all existing data.
            try? FileManager.default.removeItem(at: storeURL)

            // Make Core Data write to our new store URL.
            description.url = storeURL

            // Force WAL mode off.
            description.setValue("DELETE" as NSObject, forPragmaNamed: "journal_mode")
        }

        container.loadPersistentStores { description, error in
            do {
                // Add all your pre-fill data here.
                for i in 1...10_000 {
                    let user = User(context: container.viewContext)
                    user.name = "User \(i)"
                    container.viewContext.insert(user)
                }

                // Ensure all our changes are fully saved.
                try container.viewContext.save()

                // Adjust this to the actual location where you want the file to be saved.
                let destination = URL(filePath: "/Users/twostraws/Desktop/users.store")
                try FileManager.default.copyItem(at: storeURL, to: destination)
            } catch {
                print("Failed to create data: \(error.localizedDescription)")
            }
        }
    }
}
```

That does a number of things:

1. It sets our store name to be users.store, so we can find it easily.
2. It deletes that file if it exists already.
3. It then forces write-ahead logging to be disabled, meaning that all data is written straight to the SQLite file.
4. It inserts 10,000 example `User` objects – obviously that's where you'd insert your own custom data.
5. It triggers a full save, to make sure all our data is written to disk.
6. It then copies users.store to a URL of your choosing, ready to be placed into your finished, App Store app. (Note: If you're using an iOS app, using `URL.desktopDirectory` won't work, which is why I've used the full path in the code.)

Make sure you change the URL to your actual desktop, then run that project and try it out. Yyou should end up with the file "users.store" on your desktop.

That completes the work from your data creation app – now it's over to the actual app you want to ship to the App Store.

The first step is to copy users.store into your actual app project. 

::: important

Make sure you add the file to your app's target, so it's included in the build.

:::

Next, we need to modify your `App` struct so that you load a model container from that custom file, and use that with SwiftUI:

```swift
struct ProductionApp: App {
    let container: ModelContainer

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(container)
    }

    init() {
        do {
            guard let storeURL = Bundle.main.url(forResource: "users", withExtension: "store") else {
                fatalError("Failed to find users.store")
            }

            let config = ModelConfiguration(url: storeURL)
            container = try ModelContainer(for: User.self, configurations: config)
        } catch {
            fatalError("Failed to create model container: \(error)")
        }
    }
}
```

And now you can go ahead and query your data freely, like this:

```swift
struct ContentView: View {
    @Query var users: [User]

    var body: some View {
        NavigationStack {
            List(users) { user in
                Text(user.name)
            }
            .navigationTitle("Users")
        }
    }
}
```

As you can see, we can treat the data just like a regular SwiftData store – just don't try to make changes to it, because we're reading from our app's bundle, rather than something directly modifiable.

---

<TagLinks />