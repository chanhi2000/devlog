---
lang: ko-KR
title: Improved dictionary functionality
description: Article(s) > Improved dictionary functionality
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Improved dictionary functionality
    - property: og:description
      content: Improved dictionary functionality
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.0/dictionaries.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Improved dictionary functionality | Changes in Swift 4.0",
  "desc": "Improved dictionary functionality",
  "link": "https://hackingwithswift.com/swift/4.0/dictionaries", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.0

One of the most intriguing proposals for Swift 4 was to add some new functionality to dictionaries to make them more powerful, and also to make them behave more like you would expect in certain situations.

Let's start with a simple example: filtering dictionaries in Swift 3 does *not* return a new dictionary. Instead, it returns an array of tuples with key/value labels. For example:

```swift
let cities = ["Shanghai": 24_256_800, "Karachi": 23_500_000, "Beijing": 21_516_000, "Seoul": 9_995_000];
let massiveCities = cities.filter { $0.value > 10_000_000 }
```

After that code runs you can't read `massiveCities["Shanghai"]` because it is no longer a dictionary. Instead, you need to use `massiveCities[0].value`, which isn't great.

As of Swift 4 this behaves more like you would expect: you get back a new dictionary. Obviously this will break any existing code that relies on the tuple-array return type.

Similarly, the `map()` method on dictionaries never quite worked the way many people hoped: you got a key-value tuple passed in, and could return a single value to be added to an array. For example:

```swift
let populations = cities.map { $0.value * 2 }
```

That hasn't changed in Swift 4, but there is a new method called `mapValues()` that is going to be much more useful because it lets you transform the values and place them back into a dictionary using the original keys.

For example, this code will round and stringify all city populations, then put them back into a new dictionary with the same keys of Shanghai, Karachi, and Seoul:

```swift
let roundedCities = cities.mapValues { "\($0 / 1_000_000) million people" }
```

(In case you were wondering, it's not safe to map dictionary keys because you might create duplicates by accident.)

Easily my favorite new dictionary addition is a `grouping` initializer, which converts a sequence into a dictionary of sequences that are grouped by whatever you want. Continuing our `cities` example, we could use `cities.keys` to get back an array of city names, then group them by their first letter, like this:

```swift
let groupedCities = Dictionary(grouping: cities.keys) { $0.characters.first! }
print(groupedCities)
```

That will output the following:

```json
["B": ["Beijing"], "S": ["Shanghai", "Seoul"], "K": ["Karachi"]]
```

Alternatively, we could group the cities based on the length of their names like this:

```swift
let groupedCities = Dictionary(grouping: cities.keys) { $0.count }
print(groupedCities)
```

That will output the following:

```json
[5: ["Seoul"], 7: ["Karachi", "Beijing"], 8: ["Shanghai"]]
```

Finally, it's now possible to access a dictionary key and provide a default value to use if the key is missing:

```swift
let person = ["name": "Taylor", "city": "Nashville"]
let name = person["name", default: "Anonymous"]
```

Now, any experienced developer will probably argue that's better written using nil coalescing, and I agree. You could write this line instead using the current version of Swift:

```swift
let name = person["name"] ?? "Anonymous"
```

However, that doesn't work when you're *modifying* the dictionary value rather than just reading it. You can't modify a dictionary value in place because accessing its key returns an optional – the key might not exist, after all. With Swift 4's default dictionary values you can write much more succinct code, such as this:

```swift
var favoriteTVShows = ["Red Dwarf", "Blackadder", "Fawlty Towers", "Red Dwarf"]
var favoriteCounts = [String: Int]()

for show in favoriteTVShows {
    favoriteCounts[show, default: 0] += 1
}
```

That loops over every string in `favoriteTVShows`, and uses a dictionary called `favoriteCounts` to keep track of how often each item appears. We can modify the dictionary in one line of code because we know it will always have a value: either the default value of 0, or some higher number based on previous counting.

For more information see [the Swift Evolution proposal for these new features (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0165-dict.md).

::: details Other Changes in Swift 4.0

```component VPCard
{
  "title": "Encoding and decoding data using Codable | Changes in Swift 4.0",
  "desc": "Encoding and decoding data using Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/codable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multi-line string literals | Changes in Swift 4.0",
  "desc": "Multi-line string literals",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/multiline-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Improved keypaths for key-value coding | Changes in Swift 4.0",
  "desc": "Improved keypaths for key-value coding",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/keypaths.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Improved dictionary functionality | Changes in Swift 4.0",
  "desc": "Improved dictionary functionality",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/dictionaries.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Strings are collections again | Changes in Swift 4.0",
  "desc": "Strings are collections again",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "One-sided ranges | Changes in Swift 4.0",
  "desc": "One-sided ranges",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-3-1-to-4-0.playground.zip)

:::

---

<TagLinks />