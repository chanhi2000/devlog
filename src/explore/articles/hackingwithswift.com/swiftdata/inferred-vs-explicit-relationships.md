---
lang: ko-KR
title: Inferred vs explicit relationships
description: Article(s) > Inferred vs explicit relationships
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
      content: Article(s) > Inferred vs explicit relationships
    - property: og:description
      content: Inferred vs explicit relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/inferred-vs-explicit-relationships.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-index-swiftdata-properties-for-faster-searching.md
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
  "title": "Inferred vs explicit relationships | SwiftData by Example",
  "desc": "Inferred vs explicit relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/inferred-vs-explicit-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData relationships can be either inferred, where SwiftData can figure out the relationship just from your model structure, or made explicit using the `@Relationship` macro. Generally speaking you only need `@Relationship` when you want a non-default configuration; you can ignore it a lot of the time.

As an example, we could define a simple `Student` model, then use that with a `School` model:

```swift
@Model
class School {
    var name: String
    var students: [Student]

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

From that simple definition, SwiftData is able to see that:

1. Each school can have many students.
2. Each student must belong to precisely one school.

However, these two are separate things: if we create a student and set its `school` property, SwiftData doesn’t understand to add that student to the `students` array in that school – it doesn’t automatically infer that the relationship goes two ways.

However, if we make one small change to our `Student` model, we *do* get a property relationship inference:

```swift
@Model
class Student {
    var name: String
    var school: School?

    init(name: String, school: School?) {
        self.name = name
        self.school = school
    }
}
```

The only change is that we’ve marked the school as being optional, meaning that it can be nil. This happens for safety reasons, and to understand why consider this:

1. If we have a relationship between students and schools, then setting the `school` property of a student should add it or remove it from a school’s list of students.
2. Equally, adding or removing a student from a school’s list of students should adjust the student’s `school` property.
3. So what happens if you remove a student from a school without also adding them to another school?

When we defined the `school` property as being non-optional we’re saying that latter case should be impossible – a student must *always* belong to a school. If we attempt to break this rule, SwiftData will trigger a crash in our app because we’ve put it into an invalid state.

So, SwiftData takes the only safe approach by default: it will only infer the relationship when it’s safe to do so – when it won’t inadvertently trigger a crash because we changed an array. If you see an error along the lines of, “warning: validation recovery attempt FAILED with Error Domain=NSCocoaErrorDomain Code=1570 %{PROPERTY}@ is a required value” then this is exactly what you’ve hit: you’re trying to set a non-optional value to nil. Given that Swift refuses to let us do this directly, it’s probably happening through a relationship.

On the flip side, as soon as we made the `school` property optional, that danger went away: removing a student from the `students` array will just set their `school` property to nil, so there’s no crash risk.

The rule here is simple: if a relationship can be inferred safely, SwiftData will do so.

For the many times that isn’t enough, we can create an explicit relationship using the `@Relationship` macro on one of your two models, which spells out the connection explicitly. For example, we could change the `Student` class so its `school` property looks like this:

```swift
@Relationship(inverse: \School.students) var school: School
```

That can be optional or non-optional – there are no safety constraints here, because you’re telling SwiftData exactly what you want.

Alternatively, we can change the `School` class so its `students` property looks like this:

```swift
@Relationship(inverse: \Student.school) var students: [Student]
```

::: important

Regardless of which option you choose, you should only specify the inverse relationship on one side. If you try specifying both, Xcode will throw up an error like “Circular reference resolving attached macro 'Relationship’.”

:::

Using explicit relationships with the `@Relationship` macro is also useful for specifying a custom delete rule to control how linked objects are deleted. For example, if you removed a school from your database, should SwiftData also remove all its students?

::: important

Remember, this is an issue of safety: by using an explicit relationship you’re taking responsibility for ensuring you keep your models in a valid state.

:::

We have four delete rules in SwiftData, with `.nullify` being the default – set the related model’s reference to nil when this object is deleted. If you have non-optional references – if you say that all students must have exactly one school, for example – then you should use a different delete rule instead. 

For example, we might say that schools can have many students, and when we remove a student from our array we automatically delete that student object entirely. This uses the `.cascade` delete rule, like so:

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
```

If you’re still reading and aren’t sure whether to use implicit or explicit relationships, I’ll give you a simple tip that has saved me so much time: I’ve never regretted using an explicit relationship, so I always prefer to spell out what I mean rather than relying on SwiftData’s inference getting it right.

---

<TagLinks />