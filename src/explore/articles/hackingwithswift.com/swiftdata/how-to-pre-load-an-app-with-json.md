---
lang: ko-KR
title: How to pre-load an app with JSON
description: Article(s) > How to pre-load an app with JSON
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
      content: Article(s) > How to pre-load an app with JSON
    - property: og:description
      content: How to pre-load an app with JSON
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-pre-load-an-app-with-json.html
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
  "title": "How to pre-load an app with JSON | SwiftData by Example",
  "desc": "How to pre-load an app with JSON",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-pre-load-an-app-with-json", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to make sure your app starts with some default data, one option is to ship some JSON that you convert to SwiftData objects when the app first runs. You could also seed your database using JSON from a remote network call, but if you take this approach your user will have an unhappy experience if they are offline during their first run.

::: tip

In Core Data Apple directly advised against parsing JSON into model objects in order to pre-seed a database, and I think it applies equally to SwiftData: "Parsing a file to create a store incurs unnecessary overhead. It is much better to create a Core Data store yourself offline and use it directly in your application."

:::

If you've read that and still want to continue, here are the steps to follow:

1. Create your JSON file, either by hand or using some sort of tool.
2. Add that to your project, making sure to add it to your target.
3. Design your SwiftData model to match the data in your JSON file.
4. Make your SwiftData model conform to `Codable`.
5. Use the `onSetup` closure of the `modelContainer()` modifier to perform your initial set up.

For this test, we're going to create a simple `User` object with a `name` property. So, my JSON will look like this:

```json
[
    { "name": "Monkey D. Luffy" },
    { "name": "Roronoa Zoro," },
    { "name": "Nami" },
]
```

The SwiftData model for that would normally be trivial:

```swift
@Model
class User {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

However, because we need to load these objects from JSON, we need to add a custom `Codable` conformance like this:

```swift
@Model
class User: Codable {
    enum CodingKeys: CodingKey {
      case name
    }

    var name: String

    init(name: String) {
        self.name = name
    }

    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.name = try container.decode(String.self, forKey: .name)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
    }
}
```

And now we can add a `modelContainer()` modifier that lets us run some work when the container is created.

In our case, that means checking whether we have any users already, so we don't accidentally add our data twice. If the count comes back as 0 then we can load our JSON file from disk, decode it into a `User` array, then insert each object from the array into our model context.

Here's that in code:

```swift
WindowGroup {
    ContentView()
}
.modelContainer(for: User.self) { result in
    do {
        let container = try result.get()

        // Check we haven't already added our users.
        let descriptor = FetchDescriptor<User>()
        let existingUsers = try container.mainContext.fetchCount(descriptor)
        guard existingUsers == 0 else { return }

        // Load and decode the JSON.
        guard let url = Bundle.main.url(forResource: "users", withExtension: "json") else {
            fatalError("Failed to find users.json")
        }

        let data = try Data(contentsOf: url)
        let users = try JSONDecoder().decode([User].self, from: data)

        // Add all our data to the context.
        for user in users {
            container.mainContext.insert(user)
        }
    } catch {
        print("Failed to pre-seed database.")
    }
}
```

Once that process completes we can use the pre-filled `User` object as normal, like this:

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

::: important

If you have lots of data to insert, this is best done after the app has finished launching so you can show some kind of progress to the user.

:::

---

<TagLinks />