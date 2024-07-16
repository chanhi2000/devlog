---
lang: ko-KR
title: How to create a complex migration using VersionedSchema
description: Article(s) > How to create a complex migration using VersionedSchema
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
      content: Article(s) > How to create a complex migration using VersionedSchema
    - property: og:description
      content: How to create a complex migration using VersionedSchema
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-complex-migration-using-versionedschema.html
next: /explore/articles/hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.md
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
  "title": "How to create a complex migration using VersionedSchema | SwiftData by Example",
  "desc": "How to create a complex migration using VersionedSchema",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-a-complex-migration-using-versionedschema", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData's migrations allow us to update our data models over time, and *complex* migrations allow us to control how that migration happens by providing custom code.

As an example, if you want to change a model to make a property unique where it previously wasn't, that can be a lightweight migration only if there are no existing duplicate values for that property. However, if there *are* duplicates you must perform a complex migration by hand, telling SwiftData what the old and new version of the model look like, and providing custom logic to de-dupe your data.

Doing this requires four steps:

1. You need to define multiple versions of our data model.
2. You wrap each of those versions inside an enum that conforms to the `VersionedSchema` protocol. (It’s an enum only because we won’t actually be instantiating these directly.)
3. You create another enum that conforms to the `SchemaMigrationPlan` protocol, which is where you'll handle the migrations between each model version.
4. You then create a custom `ModelContainer` configuration that knows to use the migration plan as needed.

Let's put all this into practice with some sample code. First, we're going to create a simple `User` model that tracks a user's name and age, but we'll place it inside a `VersionedSchema` enum so that SwiftData is able to track future versions of this model:

```swift
enum UsersSchemaV1: VersionedSchema {
    static var versionIdentifier = Schema.Version(1, 0, 0)

    static var models: [any PersistentModel.Type] {
        [User.self]
    }

    @Model
    class User {
        var name: String
        var age: Int

        init(name: String, age: Int) {
            self.name = name
            self.age = age
        }
    }
}
```

Notice how that places the `User` class inside the schema, which means it’s neatly namespaced. There are also two important static properties there:

- The exact version of this schema, which for this simple version is 1.0.0. Treating this as semver is a good idea, which means the first number should change when something backward-incompatible is introduced, the second number should change when adding functionality that is backwards compatible, and the third should change when you make bug fixes.
- The array of model types included in this migration, which for us is just a single value: `User.self`.

We’d then make a second versioned schema for v2, with the uniqueness constraint applied:

```swift
enum UsersSchemaV2: VersionedSchema {
    static var versionIdentifier = Schema.Version(2, 0, 0)

    static var models: [any PersistentModel.Type] {
        [User.self]
    }

    @Model
    class User {
        @Attribute(.unique) var name: String
        var age: Int

        init(name: String, age: Int) {
            self.name = name
            self.age = age
        }
    }
}
```

That’s basically identical, with the only changes being the 2.0.0 version and `@Attribute(.unique)`.

Obviously we don’t want to have to constantly change our code to refer to `UsersSchemaV2.User` and so on, so it's a good idea to add a type alias so that `User` always points to whatever is your latest version:

```swift
typealias User = UsersSchemaV2.User
```

That completes the first two steps of our process, so the third step is to create a migration plan. This is defined as at least three properties:

1. An array of all the versioned schemas you want to use.
2. One or more `MigrationStage` instances, defining how to move from one specific version to another.
3. A `stages` array that lists all the migration stages you have defined.

Once you’ve done that, SwiftData will take care of all possible migrations for you – if your user has v4 installed and needs to migrate straight to v5, or if they have v1 installed and need to migrate through v2, v3, v4, and then onto v5.

In our case, we’d start out with an enum like this:

```swift
enum UsersMigrationPlan: SchemaMigrationPlan {
}
```

We’d add to it an array of the two versioned schema we defined earlier:

```swift
static var schemas: [any VersionedSchema.Type] {
    [UsersSchemaV1.self, UsersSchemaV2.self]
}
```

::: tip

Place these in their version order, so SwiftData can migrate between versions in order.

:::

Then we’d add one migration stage. This can sometimes be lightweight, but here we're going to use a complex migration – sometimes called a heavyweight, or manual migration.

That means adding a property such as this one to the enum:

```swift
static let migrateV1toV2 = MigrationStage.custom(
    fromVersion: UsersSchemaV1.self,
    toVersion: UsersSchemaV2.self,
    willMigrate: { context in
        // remove duplicates then save
    }, didMigrate: nil
)
```

We’ll replace that comment in a moment, but first we need to finish the enum by listing all the migration stages we’ve defined. That’s just one here, but in a real app you’re likely to have several, probably mixing lightweight and custom stages as needed.

Add this to the enum now:

```swift
static var stages: [MigrationStage] {
    [migrateV1toV2]
}
```

What remains is filling in the `// remove duplicates then save` comment with some actual code. In this situation we’ll be given the current model context filled with data, and it’s our job to clean it up somehow before triggering a save manually.

In this instance, our goal is to make sure that the `name` property of our users is unique, which means deleting keeping one instance of each name and deleting the rest, like this:

```swift
let users = try context.fetch(FetchDescriptor<UsersSchemaV1.User>())

var usedNames = Set<String>()

for user in users {
    if usedNames.contains(user.name) {
        context.delete(user)
    }

    usedNames.insert(user.name)
}

try context.save()
```

Now that we have a migration plan in place, the final step is to create a custom `ModelContainer` configuration that knows to use the migration plan as needed.

This means going to your main `App` struct and giving it a new property to store a custom-configured model container:

```swift
let container: ModelContainer
```

We need to create this by hand, telling it to load the latest version of our `User` model (thanks to our type alias!), and also specifying the migration plan so it knows how to upgrade data. So, we need to give our `App` struct an initializer such as this one:

```swift
init() {
    do {
        container = try ModelContainer(
            for: User.self,
            migrationPlan: UsersMigrationPlan.self
        )
    } catch {
        fatalError("Failed to initialize model container.")
    }
}
```

Last but not least, we need to adjust the `modelContainer()` modifier so that we pass in the `container` property we just configured rather than asking it to set up all the data from scratch:

```swift
.modelContainer(container)
```

It’s a lot of work, but I hope you can see the importance of getting migration right – we’re being very clear on exactly how SwiftData should move between various versions of our data, thus hopefully ensuring user data never gets lost.

---

<TagLinks />