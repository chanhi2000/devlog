---
lang: ko-KR
title: How to read the contents of a SwiftData database store
description: Article(s) > How to read the contents of a SwiftData database store
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
      content: Article(s) > How to read the contents of a SwiftData database store
    - property: og:description
      content: How to read the contents of a SwiftData database store
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-read-the-contents-of-a-swiftdata-database-store.html
next: /explore/articles/hackingwithswift.com/swiftdata/README.md
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
  "title": "How to read the contents of a SwiftData database store | SwiftData by Example",
  "desc": "How to read the contents of a SwiftData database store",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-read-the-contents-of-a-swiftdata-database-store", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

There are a great many ways to screw up your SwiftData code, and sometimes the error messages are less than helpful. In this article I'm going to walk through the most common errors you'll face, and also provide suggestions for solutions.

---

## Circular reference resolving attached macro 'Relationship'

This error happens when you have a relationship between two model types, but have used the `@Relationship` macro on both sides of the relationship. 

Code like this triggers the issue:

```swift
@Model
class Student {
    var name: String
    @Relationship(inverse: \TestResult.student) var testResults: [TestResult]

    init(name: String, testResults: [TestResult]) {
        self.name = name
        self.testResults = testResults
    }
}

@Model
class TestResult {
    var subject: String
    var score: Int
    @Relationship(inverse: \Student.testResults) var student: Student?

    init(subject: String, score: Int, student: Student? = nil) {
        self.subject = subject
        self.score = score
        self.student = student
    }
}
```

Swift is unable to resolve this relationship because both sides depend on each other.

To solve the problem, remove one of the `@Relationship` macros. For example, I'd edit the `student` property of `TestResult` to this:

```swift
var student: Student?
```

---

## `NSFetchRequest` could not locate an `NSEntityDescription` for entity name YourModelName

This usually happens because you've written code to read a model but haven't added it to your model container.

To solve this, look for your `modelContainer()` modifier and make sure it includes all the model types you're using in your app.

For example, if the error says it can't find the entity name Painting, you'd need something like this:

```swift
.modelContainer(for: Painting.self)
```

---

## Set a `.modelContext` in view's environment to use Query

This error appears at runtime when you've forgotten to provide any model context to a view. This normally happens because you've missed off the `modelContainer()` modifier entirely, or perhaps used it on one part of your view hierarchy rather than applying it to all views.

To solve this check that you have the correct `modelContainer()` modifier in place for your views, which usually means attaching it to your `WindowGroup`.

---

## A stored property cannot be named 'description'

This error appears when you attempt to use the reserved property name `description` in any SwiftData model. This is used internally by Core Data, so SwiftData simply doesn't allow you to use it.

The solution is just to find another word for that string – content, details, text, message, etc.

---

## "Illegal attempt to establish a relationship between objects in different contexts

This error appears when you're linking two model objects that exist across different model contexts, which includes (and arguably is more commonly found in) situations where one object has been inserted into your model context and the other has not.

Xcode's crash backtrace will point you to where the actual problem happened, where you'll probably find code similar to this:

```swift
let mi2 = Movie(name: "Mission: Impossible 2", releaseYear: 2000, cast: [])
modelContext.insert(mi2)

let cruise = Actor(name: "Tom Cruise", movies: [mi2])
modelContext.insert(cruise)
```

As you can see, that inserts `mi2` into the model context, then creates a new actor linked to that movie. This is creating a relationship where one object is in the model context and the other is not, which will trigger a crash.

The correct approach is to remove `modelContext.insert(mi2)` entirely: create the `Movie` object, then create the `Actor` model linking to it, and finally insert the actor into the context.

---

## `EXC_BAD_ACCESS (code=1, address=0x0)`

If this occurs you're in trouble, because it could mean a whole range of things. In my experience, I've found this occurs the most when I've accidentally used a predicate that isn't supported by SwiftData – one that compiles cleanly, but crashes at runtime. If Xcode resolves the error to somewhere next to a `#Predicate` usage, well done: this is your error!

For example, if we have an `Author` model like this:

```swift
@Model
class Author {
    var name: String
    var books: [String]

    init(name: String, books: [String]) {
        self.name = name
        self.books = books
    }
}
```

Then you might reasonably assume you could write a query like this one:

```swift
@Query(filter: #Predicate<Author> {
    $0.books.contains("The Hobbit")
}) var authors: [Author]
```

Certainly it compiles cleanly. However, it also triggers the dreaded `EXC_BAD_ACCESS`, because we're trying to search a string array in a predicate – something that isn't allowed in SwiftData.

To fix this you need to create a relationship rather than a simple array. Internally SwiftData sees something like `[String]` and uses `Codable` to convert it to a data blob that can be saved alongside its parent model. This makes it impossible to search by SQLite, the underlying data store.

So, you should create a second model and make a relationship with it, even if that model only has a single string property.

---

## `@Model` requires an initializer be provided for 'YourModelName'

All SwiftData models ned an initializer, even if they have default values for all their properties.

To solve this problem, create an initializer of any kind inside your model. This can be completely empty if you have default values already assigned, but I tend to use the initializer that's autocompleted by Xcode.

---

## Fatal error: Duplicate registration attempt for object with id

This error occurs when you're inserting the same object twice, and usually then because of a relationship.

Let's say you have a `School` model that has an array of `Student` objects. If you create a school then add some students to it, there's a problem: do you need to insert the school and all the students, just the school, or just the students?

SwiftData works hard to ensure your data remains consistent, so it automatically inserts related data for you. In this case, it's enough to insert the school object, because SwiftData will insert all the students that belong to it automatically.

However if you try to do both – if you try to insert the school and also the students – you'll get the error above: "Fatal error: Duplicate registration attempt for object with id…"

To solve it, look at the line that threw the error, because that will tell you the second place the object is being inserted. Now work backwards: was that object related to something else that you already inserted? Remove one of the two insertions, and the problem should go away.

---

## CoreData: warning: validation recovery attempt FAILED with Error Domain=NSCocoaErrorDomain Code=1570 "%{PROPERTY}@ is a required value."

This runtime error will trigger a crash in your app, and it's the result of your data being in an inconsistent state. SwiftData generally avoids creating rules that can lead to this error, which usually means it's the result of your specific setup.

As an example, here are `School` and `Student` models that can trigger the error:

```swift
@Model
class School {
    var name: String
    @Relationship(inverse: \Student.school) var students: [Student]

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

That sets each school has an array of students, and each student belongs to a school. That sounds sensible, but notice how I've used the `@Relationship` macro there – I've explicitly specified the inverse relationship, because without that SwiftData won't infer it for us.

The reason it won't infer is an important one: this is a dangerous relationship. The default delete rule for relationships is `.nullify`, which means "set to nil any value that referred to me." 

In our case, if we deleted a school from our data store, all the students would have their `school` property set to nil – something that isn't allowed, because we used `School` rather than `School?` for that property.

There are two ways to fix this problem, depending on what you want to happen:

1. Set a `.cascade` delete rule for your relationship, ensuring that all students get deleted alongside their school.
2. Make the property in question optional, so that the default `.nullify` delete rule works.

---

## Too few items in `%{PROPERTY}@` / Too many items in `%{PROPERTY}@`.

These messages appear when you've used the `@Relationship` macro and provided too few or too many items in your relationship.

Annoyingly this problem is handled silently by SwiftData by default: when its autosave system detects the validation failure it simply doesn't save the invalid change. This can make it a little hard to find exactly what's causing the problem at first, but you should definitely start by searching your project for either `minimumModelCount` or `maximumModelCount` depending on which error you're receiving.

Once you've found the offending data, you either need to avoid adding it to your relationship, or adjust the rules – one of the two has to change.

---

## Type `Array<YourModelType>.Element` (aka 'YourModelType') does not conform to protocol 'PersistentModel'

This error occurs when you're using something as a SwiftData model that has not been marked with the `@Model` macro.

For example, this class is not a valid SwiftData model because it's missing the macro:

```swift
class Author {
    var name: String
    var books: [String]

    init(name: String, books: [String]) {
        self.name = name
        self.books = books
    }
}
```

To fix the error, place `@Model` before the class, like this:

```swift
@Model
class Author {
```

---

## Predicate body may only contain one expression

SwiftData's `#Predicate` macro does wonders to try to support complex expressions, but it does have limits. If you're seeing this error it means you've gone outside of those limits and need to adjust your predicate to be compatible.

The usual suspects are trying to create local variables or constants inside your predicate, or not providing clear return statements for each branch of your condition.

---

## I'm confused, how am I not moored but I don't have an unmoored backing data?

This error message appears if you have tried to subclass a model. While that was acceptable in Core Data, it's a very bad idea in SwiftData.

The solution is simple, but dull: don't subclass your SwiftData models. If it helps, try marking your model classes as `final` to avoid temptation.

---

<TagLinks />