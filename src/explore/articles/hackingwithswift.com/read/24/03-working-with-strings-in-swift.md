---
lang: ko-KR
title: "Working with strings in Swift"
description: "Article(s) > Working with strings in Swift"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Working with strings in Swift"
    - property: og:description
      content: "Working with strings in Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/24/03-working-with-strings-in-swift.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Working with strings in Swift | Hacking with iOS",
  "desc": "Working with strings in Swift",
  "link": "https://hackingwithswift.com/read/24/3/working-with-strings-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/AthqAjYhZLw" />

We’ve used strings in lots of the projects so far, and I’ve tried to introduce you to a handful of important properties and methods as we go. Here, though, I’m going to run through some of those, plus a few more, while also looking at how we can write extensions to make strings a little more useful.

First, there are methods for checking whether a string starts with or ends with a substring: `hasPrefix()` and `hasSuffix()`. They look like this:

```swift
let password = "12345"
password.hasPrefix("123")
password.hasSuffix("345")
```

We can add extension methods to `String` to extend the way prefixing and suffixing works:

```swift
extension String {
    // remove a prefix if it exists
    func deletingPrefix(_ prefix: String) -> String {
        guard self.hasPrefix(prefix) else { return self }
        return String(self.dropFirst(prefix.count))
    }

    // remove a suffix if it exists
    func deletingSuffix(_ suffix: String) -> String {
        guard self.hasSuffix(suffix) else { return self }
        return String(self.dropLast(suffix.count))
    }
}
```

That uses the `dropFirst()` and `dropLast()` method of `String`, which removes a certain number of letters from either end of the string.

We’ve used `lowercased()` and `uppercased()` in previous projects, but there’s also the `capitalized` property that gives the first letter of each word a capital letter. For example:

```swift
let weather = "it's going to rain"
print(weather.capitalized)
```

That will print “It’s Going To Rain”.

We could add our own specialized capitalization that uppercases only the first letter in our string:

```swift
extension String {
    var capitalizedFirst: String {
        guard let firstLetter = self.first else { return "" }
        return firstLetter.uppercased() + self.dropFirst()
    }
}
```

One thing you *can’t* see in that is an interesting subtlety of working with strings: individual letters in strings aren’t instances of `String`, but are instead instances of `Character` – a dedicated type for holding single-letters of a string.

So, that `uppercased()` method is actually a method on *Character* rather than *String*. However, where things get *really* interesting is that `Character.uppercased()` actually returns a string, not an uppercased `Character`. The reason is simple: language is complicated, and although many languages have one-to-one mappings between lowercase and uppercase characters, some do not.

For example, in English “a” maps to “A”, “b” to “B”, and so on, but in German “ß” becomes “SS” when uppercased. “SS” is clearly two separate letters, so `uppercased()` has no choice but to return a string.

One last useful method of strings is `contains()`, which returns true if it contains another string. So, this will return true:

```swift
let input = "Swift is like Objective-C without the C"
input.contains("Swift")
```

So, `contains()` takes a string parameter and returns true or false depending on whether that parameter exists in the string. Keep that in your head for a moment.

Now look at this code:

```swift
let languages = ["Python", "Ruby", "Swift"]
languages.contains("Swift")
```

That will also return true, because arrays have a `contains()` method that returns true or false depending on whether they contain the element you were looking for.

Now for the part that confuses people – brace yourself!

We have an array of strings (`["Python", "Ruby", "Swift"]`) and we have an input string (`"Swift is like Objective-C without the C"`). How can we check whether any string in our array exists in our input string?

Well, we might start writing an extension on `String` like this:

```swift
extension String {
    func containsAny(of array: [String]) -> Bool {
        for item in array {
            if self.contains(item) {
                return true
            }
        }

        return false
    }
}
```

We can now run our check like this:

```swift
input.containsAny(of: languages)
```

That certainly *works*, but it’s not elegant – and Swift has a better solution built right in.

You see, arrays have a *second* `contains()` method called `contains(where:)`. This lets us provide a closure that accepts an element from the array as its only parameter and returns true or false depending on whatever condition we decide we want. This closure gets run on all the items in the array until one returns true, at which point it stops.

Now let’s put together the pieces:

- When used with an array of strings, the `contains(where:)` method wants to call a closure that accepts a string and returns true or false.
- The `contains()` method of `String` accepts a string as its parameter and returns true or false.
- Swift massively blurs the lines between functions, methods, closures, and more.

So, what we can actually do is pass one function directly into the other, like this:

```swift
languages.contains(where: input.contains)
```

Don’t feel bad if you need to read that single line of code several times – it’s not easy! Let’s break it down.

`contains(where:)` will call its closure once for every element in the `languages` array until it finds one that returns true, at which point it stops.

In that code we’re passing `input.contains` as the closure that `contains(where:)` should run. This means Swift will call `input.contains("Python")` and get back false, then it will call `input.contains("Ruby")` and get back false again, and finally call `input.contains("Swift")` and get back true – then stop there.

So, because the `contains()` method of strings has the exact same signature that `contains(where:)` expects (take a string and return a Boolean), this works perfectly – do you see what I mean about how Swift blurs the lines between these things?

---

<TagLinks />