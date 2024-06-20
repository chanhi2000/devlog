---
lang: ko-KR
title: How to save a SwiftData object
description: Article(s) > How to save a SwiftData object
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
      content: Article(s) > How to save a SwiftData object
    - property: og:description
      content: How to save a SwiftData object
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-save-a-swiftdata-object.html
date: 2023-10-31
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
  "title": "How to save a SwiftData object | SwiftData by Example",
  "desc": "How to save a SwiftData object",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-save-a-swiftdata-object", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

At its simplest form, saving a SwiftData object takes three steps: creating it, inserting into your model context, then calling `save()` on that context. The latter task is usually automatic because autosave is enabled by default on the main model context, but there are a couple of extra things to be aware of to make sure your data stays safe.

First, all SwiftData objects have an `id` property that unique identifies them, however before the object has been saved for the first time that identifier will be *temporary*. So, if we had a `House` model with an `address` property, this would print two completely different values:

```swift
let house = House(address: "10 Downing Street, London")
modelContext.insert(house)

print(house.id)
try? modelContext.save()
print(house.id)
```

This means if you want to use the ID for something specific – e.g. if you’re indexing the identifier with Spotlight so you can open your app straight to the object – you should always make sure it’s saved before reading the `id` property. You can identify a temporary identifier because its a UUID that starts with a lowercase “t”, like this: **x-coredata:///House/t532017E6-0165-4434-ABE4-EFC0797B99F48**.

Second, if you have autosave turned off you need to trigger the save manually. This has advantages and disadvantages, so you should use it carefully.

Handling saves manually makes discardable editing significantly easier because you can call `rollback()` rather than `save()` if the user wants to discard changes, rather than storing all their changes in local variables.

However, it makes life more *difficult* because of the way SwiftData resolves explicit relationship data:

- If you use an array on one side of your relationship and an optional on the other, SwiftData will correctly infer the relationship and keep both sides in sync even without calling `save()` on the context.
- If you use a non-optional on the other side, you must specify the delete rule manually *and call `save()` when inserting the data*, otherwise SwiftData won’t refresh the relationship until application is relaunched – even if you call `save()` at a later date, and even if you create and run a new `FetchDescriptor` from scratch.

It’s my view that this is a bug with SwiftData, so hopefully it will go away. You can check it yourself by creating models like these:

```swift
@Model
class School {
    var name: String
    @Relationship(deleteRule: .cascade, inverse: \Student.school) var students: [Student]

    init(name: String, students: [Student]) {
        self.name = name
        self.students = students
    }
}

@Model
class Student {
    var name: String
    var school: School

    init(name: String, school: School) {
        self.name = name
        self.school = school
    }
}
```

Now create your SwiftData container with autosave disabled, and try it out with a SwiftUI view such as this one:

```swift
struct ContentView: View {
    @Environment(\.modelContext) var modelContext
    @Query var schools: [School]
    @Query var students: [Student]

    var body: some View {
        NavigationStack {
            VStack {
                List(schools) { school in
                    VStack(alignment: .leading) {
                        Text(school.name)
                        Text(school.students.map(\.name).joined(separator: ", "))
                    }
                }

                List(students) { student in
                    VStack(alignment: .leading) {
                        Text(student.name)
                        Text(student.school.name)
                    }
                }
            }
            .toolbar {
                Button("Create", action: create)
                Button("Save") {
                    try? modelContext.save()
                }
            }
        }
    }

    func create() {
        let hogwarts = School(name: "Hogwarts", students: [])
        let harry = Student(name: "Harry", school: hogwarts)

        modelContext.insert(hogwarts)
        modelContext.insert(harry)

//        try? modelContext.save()
    }
}
```

That has a commented-out call to `save()` inside the `create()` method, and instead saves the context from a separate Save button. Right now (as of iOS 17.0) this fails – you’ll see Harry listed as going to Hogwarts in the second list and Hogwarts showing no students in the first list, but if you press Save then relaunch the app you’ll see it’s displayed correctly. If you then try uncommenting the `save()` call inside `create()`, everything is displayed correctly without a relaunch.

---

<TagLinks />