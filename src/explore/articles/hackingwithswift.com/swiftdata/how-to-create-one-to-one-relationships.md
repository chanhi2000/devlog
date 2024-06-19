---
lang: ko-KR
title: How to create one-to-one relationships
description: Article(s) > How to create one-to-one relationships
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
      content: Article(s) > How to create one-to-one relationships
    - property: og:description
      content: How to create one-to-one relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-one-to-one-relationships.html
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
  "title": "How to create one-to-one relationships | SwiftData by Example",
  "desc": "How to create one-to-one relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-one-to-one-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

One-to-one relationships mean that every X object has exactly one Y object attached to it, for example saying that every person has exactly one passport, or each pet has exactly one owner.

Although one-to-one relationships are possible with SwiftData, they are fairly rare, mostly because they are rare in real life – both of the two examples I just gave might seem reasonable at first, but if you think them through they fall apart pretty fast: 

- Many people have more than one passport because they are citizens of more than one country, or have no passport because they don’t travel. 
- While it’s true that most pets have exactly one owner, a true one-to-one relationship means that each owner must have exactly one pet, which is clearly nonsense.

In practice, we mostly use one-to-one relationships in two places:

1. We’re splitting up our data to reduce redundancy or keep or code better organized, because writing `country.capitalCity.name` is simpler and easier than having one giant `Country` model that duplicates all the properties of a separate `City` model.
2. We’re really trying to model an *optional* one-to-one relationship, i.e. zero-to-one: there might be exactly one piece of matching piece of data, but there also might be nothing at all. For example, a Mastodon user might have an `image` property set as their profile page header image, but it’s not required.

From a coding perspective, Swift requires that we declare one-to-one relationships as zero-to-one, even if they will never actually be zero-to-one. This is a simple fact of coding: if we try to make both properties non-optional, then we have a tortoise-and-hare problem where we can’t create one without creating the other first.

For example, if we had `Country` and `City` models with a true one-to-one relationship between them, then to create a `City` we’d need to specify which `Country` it belongs to, but to create a `Country` we’d need to specify its `capitalCity` property.

So, to be able to create your objects and have SwiftData infer the relationship correctly, you should always make both sides of the relationship optional like this:

```swift
@Model
class Country {
    var name: String
    var capitalCity: City?

    init(name: String, capitalCity: City? = nil) {
        self.name = name
        self.capitalCity = capitalCity
    }
}

@Model
class City {
    var name: String
    var latitude: Double
    var longitude: Double
    var country: Country?

    init(name: String, latitude: Double, longitude: Double, country: Country? = nil) {
        self.name = name
        self.latitude = latitude
        self.longitude = longitude
        self.country = country
    }
}
```

With this approach our code becomes possible:

```swift
let country = Country(name: "England")
let city = City(name: "London", latitude: 51.507222, longitude: -0.1275, country: country)

modelContext.insert(city)
```

::: important

Don’t try to insert both the `city` *and* `country` objects – inserting one automatically inserts the other because the two have a relationship, and in fact trying to insert them both is likely to throw up a fatal error with the message, “Duplicate registration attempt for object”.

:::

---

<TagLinks />