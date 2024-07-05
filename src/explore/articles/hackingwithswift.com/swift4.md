---
lang: ko-KR
title: "What's new in Swift 4.0"
description: "Hands-on code examples to help you learn what's new in Swift 4: new encoding and decoding, smarter keypaths, multi-line strings, and more!"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-4.0
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  What's new in Swift 4.0
    - property: og:description
      content: "Hands-on code examples to help you learn what's new in Swift 4: new encoding and decoding, smarter keypaths, multi-line strings, and more!"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift4.html
prev: /programming/swift/articles/README.md
date: 2017-06-05
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What's new in Swift 4.0 – Hacking with Swift",
  "desc": "Hands-on code examples to help you learn what's new in Swift 4: new encoding and decoding, smarter keypaths, multi-line strings, and more!",
  "link": "https://hackingwithswift.com/swift4",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Swift 4.0 is a major new release for everyone's favorite app development language, and introduces a variety of features that let us write simpler, safer code. You'll be pleased to know it's nothing as dramatic as the epic changes introduced with Swift 3.0, and indeed most changes are fully backwards-compatible with your existing Swift code. So, while you might need to make a handful of changes it shouldn't take long.

If you liked this article, you might also enjoy these:

```component VPCard
{
  "title": "What's new in iOS 11 for developers – Hacking with Swift",
  "desc": "What's new in iOS 11 for developers",
  "link": "https://hackingwithswift.com/whats-new-in-ios-11",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 3.1 – Hacking with Swift",
  "desc": "What's new in Swift 3.1",
  "link": "https://hackingwithswift.com/swift3-1",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 3.0 – Hacking with Swift",
  "desc": "What's new in Swift 3.0",
  "link": "https://hackingwithswift.com/swift3",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> [Read my free Swift tutorial series](https://hackingwithswift.com/read)

<!-- TODO: w -->

---

## Swifty encoding and decoding

We know value types are great, but we also know they interact terribly with Objective-C APIs such as `NSCoding` – you either need to write a shim layer or give in and use classes, both of which are unpleasant. Worse, even if you give in and switch to classes, you still need to write your encoding and decoding methods by hand, which is painful and error-prone.

Swift 4 introduces a new `Codable` protocol that lets you serialize and deserialize custom data types without writing any special code – and without having to worry about losing your value types. Even better, you can choose how you want the data to be serialized: you can use classic property list format or even JSON.

**Yes, you read all that correctly: Swift 4 lets you serialize your custom data types to JSON without writing any special code.**

Let's take a look at how beautiful this is. First, here's a custom data type and some instances of it:

```swift
struct Language: Codable {
    var name: String
    var version: Int
}

let swift = Language(name: "Swift", version: 4)
let php = Language(name: "PHP", version: 7)
let perl = Language(name: "Perl", version: 6)
```

You can see I've marked the `Language` struct as conforming to the `Codable` protocol. With that one tiny addition, we can convert it to a `Data` representation of JSON like this:

```swift
let encoder = JSONEncoder()
if let encoded = try? encoder.encode(swift) {
    // save `encoded` somewhere
}
```

Swift will automatically encode all properties inside your data type – you don't need to do anything.

Now, if you're like me and have a long history of using `NSCoding`, you're probably somewhat doubtful: is that really all it takes, and how can we be sure it's working? Well, let's add some more code to try converting the `Data` object into a string so we can print it out, then decode it back into a new `Language` instance that we can read from:

```swift
if let encoded = try? encoder.encode(swift) {
    if let json = String(data: encoded, encoding: .utf8) {
        print(json)
    }

    let decoder = JSONDecoder()
    if let decoded = try? decoder.decode(Language.self, from: encoded) {
        print(decoded.name)
    }
}
```

Notice how decoding doesn't require a typecast – you provide the data type name as its first parameter, so Swift infers the return type from there.

Both `JSONEncoder` and its property list counterpart `PropertyListEncoder` have lots of options for customizing how they work: do you want compact JSON or pretty-printed JSON? Do you want to use ISO8601 dates or Unix epoch dates? Do you want to use binary property lists or XML? For more information on these and other options, see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0167-swift-encoders.md).

---

## Multi-line string literals

Writing multi-line strings in Swift has always meant adding `\n` inside your strings to add line breaks wherever you want them. This doesn't look good in code, but at least it displays correctly for users. Fortunately, Swift 4 introduces new multi-line string literal syntax that lets you add line breaks freely and use quote marks without escaping, while still benefiting from functionality like string interpolation.

To start a string literal, you need to write three double quotation marks: `"""` then press return. You can then go ahead and write a string as long as you want, including variables and line breaks, before ending your string by pressing return then writing three more double quotation marks.

I've been specific about pressing return because string literals have two important rules: when you open a string using `"""` the content of your string must begin on a new line, and when you end a multi-line string using `"""` that must also begin on a new line.

Here it is in action:

```swift
let longString = """
When you write a string that spans multiple
lines make sure you start its content on a
line all of its own, and end it with three
quotes also on a line of their own.
Multi-line strings also let you write "quote marks"
freely inside your strings, which is great!
"""
```

That creates a new string with several line breaks right there in the definition – much easier to read *and* write.

For more information see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0168-multi-line-string-literals.md).

---

## Improved keypaths for key-value coding

One of the most loved features of Objective-C is its ability to reference a property dynamically rather than directly – that is, to be able to say "given object X, here is the property I'd like to read" without actually reading it. These references, called *keypaths*, are distinct from direct property accesses because they don't actually read or write the value, they just stash it away for use later on.

If you've never used keypaths before, let me show you an analogy of how they work using regular Swift methods. We're going to define a struct called `Starship` and a struct called `Crew`, then create one instance of each:

```swift
// an example struct
struct Crew {
    var name: String
    var rank: String
}

// another example struct, this time with a method
struct Starship {
    var name: String
    var maxWarp: Double
    var captain: Crew

    func goToMaximumWarp() {
        print("\(name) is now travelling at warp \(maxWarp)")
    }
}

// create instances of those two structs
let janeway = Crew(name: "Kathryn Janeway", rank: "Captain")
let voyager = Starship(name: "Voyager", maxWarp: 9.975, captain: janeway)

// grab a reference to the `goToMaximumWarp()` method
let enterWarp = voyager.goToMaximumWarp

// call that reference
enterWarp()
```

Because functions are first-class types in Swift, the last two lines are able to create a reference to the `goToMaximumWarp()` method called `enterWarp`, then call that later on whenever we want to. The problem is, you can't do the same thing for properties – you can't say "create a reference to the captain's name property that I can check when the inevitable mutiny happens," because Swift will just read the property directly and you'll just get its original value.

This is fixed with keypaths: they are *uninvoked references to properties* just like our `enterWarp()` code. If you invoke the reference now you get the current value, but if you invoke the reference later you get the latest value. You can dig through any number of properties, and Swift uses its type inference to ensure you get the correct type back.

The Swift Evolution community spent quite a while discussing the correct syntax for keypaths because it needed to be something visually different from other Swift code, and the syntax they ended up with uses backslashes: `\Starship.name`, `\Starship.maxWarp`, and `\Starship.captain.name`. You can assign those two to a variable then use them whenever you want, on any `Starship` instance. For example:

```swift
let nameKeyPath = \Starship.name
let maxWarpKeyPath = \Starship.maxWarp
let captainName = \Starship.captain.name

let starshipName = voyager[keyPath: nameKeyPath]
let starshipMaxWarp = voyager[keyPath: maxWarpKeyPath]
let starshipCaptain = voyager[keyPath: captainName]
```

That will make `starshipName` a string and `starshipMaxWarp` a double, because Swift is able to infer the types correctly. The third example there even goes into the property of a property, and Swift still figures it out correctly.

Future plans for this include being able to access array indexes and to create keypaths from strings at runtime – for more information see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0161-key-paths.md).

---

## Intermission

If you're enjoying this article, you might like my free Natural Swift video. It gives you 75 minutes of hands-on coding that teaches functional programming, protocol-oriented programming, and value types, and **you can download it for free with no obligation or catches** – [<FontIcon icon="fas fa-globe"/>just click here](https://gumroad.com/l/natural-swift).

And now back to your regularly scheduled broadcast…

---

## Improved dictionary functionality

One of the most intriguing proposals for Swift 4 was to add some new functionality to dictionaries to make them more powerful, and also to make them behave more like you would expect in certain situations.

Let's start with a simple example: filtering dictionaries in Swift 3 does *not* return a new dictionary. Instead, it returns an array of tuples with key/value labels. For example:

```swift
let cities = ["Shanghai": 24_256_800, "Karachi": 23_500_000, "Beijing": 21_516_000, "Seoul": 9_995_000];
let massiveCities = cities.filter { $0.value &gt; 10_000_000 }
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

---

## Strings are collections again!

This is a small change, but one guaranteed to make a lot of people happy: strings are collections again. This means you can reverse them, loop over them character-by-character, `map()` and `flatMap()` them, and more. For example:

```swift
let quote = "It is a truth universally acknowledged that new Swift versions bring new features."
let reversed = quote.reversed()

for letter in quote {
    print(letter)
}
```

This change was introduced as part of a broad set of amendments called the [String Manifesto (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/master/docs/StringManifesto.md).

---

## One-sided ranges

Last but not least, Swift 4 introduces Python-like one-sided collection slicing, where the missing side is automatically inferred to be the start or end of the collection. This has no effect on existing code because it's a new use for the existing operator, so you don't need to worry about potential breakage.

Here's an example:

```swift
let characters = ["Dr Horrible", "Captain Hammer", "Penny", "Bad Horse", "Moist"]
let bigParts = characters[..&lt;3]
let smallParts = characters[3...]
print(bigParts)
print(smallParts)
```

That code will print out `["Dr Horrible", "Captain Hammer", "Penny"]` then `["Bad Horse", "Moist"]`.

For more information see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0172-one-sided-ranges.md).

---

## There's more still to come…

The first release of Xcode that ships with Swift 4 is likely to arrive in June, presumably along with iOS 11, tvOS 11, watchOS 4, and macOS Somewhere Else In California. What we've seen so far is already promising, particularly because it's clear the team is working hard to make Swift 4 as additive as possible. Primarily adding new features rather than breaking or modifying existing ones should make it easier to upgrade to, and hopefully signals the start of a new stability for the language.

Although the Swift Evolution can be chaotic sometimes (access levels, anyone?), Swift 4 validates Apple's community approach once again. I've linked to several Swift Evolution proposals above, each of which were discussed extensively by the community to help reach consensus – this isn't just Apple engineers forcing through changes because they can, but instead is a sensible, considered approach to refining what is already a smart and elegant language.

One feature that was postponed was [ABI compatibility (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/master/docs/ABIStabilityManifesto.md), which would allow developers to distribute compiled libraries – one of the few key missing features that remain in Swift today. Hopefully we'll get it before Swift 5…

---

<TagLinks />