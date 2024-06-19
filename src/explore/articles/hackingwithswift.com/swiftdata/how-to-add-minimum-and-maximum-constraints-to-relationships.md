---
lang: ko-KR
title: How to add minimum and maximum constraints to relationships
description: Article(s) > How to add minimum and maximum constraints to relationships
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
      content: Article(s) > How to add minimum and maximum constraints to relationships
    - property: og:description
      content: How to add minimum and maximum constraints to relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-add-minimum-and-maximum-constraints-to-relationships.html
next: /explore/articles/hackingwithswift.com/swiftdata/how-to-find-a-swiftdata-object-by-its-identifier.md
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
  "title": "How to add minimum and maximum constraints to relationships | SwiftData by Example",
  "desc": "How to add minimum and maximum constraints to relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-add-minimum-and-maximum-constraints-to-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData’s `@Relationship` macro allows us to specify minimum and maximum number of objects that should exist in a one-to-many or many-to-many connection. 

::: important

If you step outside these limits SwiftData's autosave will silently fail and your data may be lost unless you correct it.

:::

To give you a practical example, we could have one model for dog walkers and another for dogs, and use `@Relationship` to put a rule in place saying that each dog walker can handle no more than five dogs at a time.

Here's how that looks in code:

```swift
@Model
class DogWalker {
    var name: String
    @Relationship(maximumModelCount: 5) var dogs: [Dog]

    init(name: String, dogs: [Dog] = []) {
        self.name = name
        self.dogs = dogs
    }
}

@Model
class Dog {
    var name: String
    var walker: DogWalker?

    init(name: String, walker: DogWalker? = nil) {
        self.name = name
        self.walker = walker
    }
}
```

All the validation work there is done by the `@Relationship(maximumModelCount: 5)` property, which makes it clear that the array must have no more than five items in it.

You can see this validation in action – and also the problems it can cause – with the following code:

```swift
func create() {
    let bobby = DogWalker(name: "Bobby Beagle")

    let dog1 = Dog(name: "Rover")
    let dog2 = Dog(name: "Fido")
    let dog3 = Dog(name: "Toto")
    let dog4 = Dog(name: "Beethoven")
    let dog5 = Dog(name: "Lady")

    modelContext.insert(dog1)
    modelContext.insert(dog2)
    modelContext.insert(dog3)
    modelContext.insert(dog4)
    modelContext.insert(dog5)

    bobby.dogs = [dog1, dog2, dog3, dog4, dog5]

    let dog6 = Dog(name: "Pongo")
    modelContext.insert(dog6)
    bobby.dogs.append(dog6)
    print(bobby.dogs.count)
}
```

That creates a dog walker and gives them five dogs to walk, but then it creates and adds a sixth dog. If you run that code you'll see it prints that Bobby has six dogs, which isn't allowed by our relationship rule – what gives?

Well, the problem with that code – and the danger of the relationship rules generally – is that if you break the rules SwiftData's autosave will just silently fail.

In this case we've made a dog walker with six dogs. If we had create one with five dogs then later added a sixth, SwiftData would at least have been able to save the original, 5-dog walker. However, we're adding them all at once, so it can't save anything safely.

You can see the problem more clearly if you try running a save yourself – add this to the end of the method:

```swift
do {
    try modelContext.save()
} catch {
    print(error.localizedDescription)
}
```

Now you'll see the message **Too many items in %{PROPERTY}@.** printed, which means we've broken a relationship rule.

So, use the minimum and maximum counts if you want, but do so carefully!

---

<TagLinks />