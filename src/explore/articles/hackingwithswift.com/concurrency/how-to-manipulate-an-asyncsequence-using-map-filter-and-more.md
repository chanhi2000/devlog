---
lang: ko-KR
title: How to manipulate an AsyncSequence using map(), filter(), and more
description: Article(s) > How to manipulate an AsyncSequence using map(), filter(), and more
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to manipulate an AsyncSequence using map(), filter(), and more
    - property: og:description
      content: How to manipulate an AsyncSequence using map(), filter(), and more
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more.html
date: 2021-11-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to manipulate an AsyncSequence using map(), filter(), and more | Swift Concurrency by Example",
  "desc": "How to manipulate an AsyncSequence using map(), filter(), and more",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

`AsyncSequence` has implementations of many of the same methods that come with `Sequence`, but *how* they operate varies: some return a single value that fulfills your request, such as requesting the first value from the async sequence, and others return a new kind of async sequence, such as filtering values as they arrive.

This distinction in turn affects how they are called: returning a single value requires you to await at the call site, whereas returning a new async sequence requires you to await later on when you’re reading values from the new sequence.

To demonstrate this difference, let’s try out a few common operations, starting with a call to `map()`. Mapping an async sequence creates a new async sequence with the type `AsyncMapSequence`, which stores both your original async sequence and also the transformation function you want to use. So, instead of waiting for all elements to be returned and transforming them at once, you’ve effectively put the transformation into a chain of work: rather than fetching an item and sending it back, the sequence now fetches an item, transforms it, *then* sends it back.

So, we could map over the lines from a `URL` to make each line uppercase, like this:

```swift
func shoutQuotes() async throws {
    let url = URL(string: "https://hws.dev/quotes.txt")!
    let uppercaseLines = url.lines.map(\.localizedUppercase)

    for try await line in uppercaseLines {
        print(line)
    }
}

try? await shoutQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-1.zip)

This also works for converting between types using `map()`, like this:

```swift
struct Quote {
    let text: String
}

func printQuotes() async throws {
    let url = URL(string: "https://hws.dev/quotes.txt")!

    let quotes = url.lines.map(Quote.init)

    for try await quote in quotes {
        print(quote.text)
    }
}

try? await printQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-2.zip)

Alternatively, we could use `filter()` to check every line with a predicate, and process only those that pass. Using our quotes, we could print only anonymous quotes like this:

```swift
func printAnonymousQuotes() async throws {
    let url = URL(string: "https://hws.dev/quotes.txt")!
    let anonymousQuotes = url.lines.filter { $0.contains("Anonymous") }

    for try await line in anonymousQuotes {
        print(line)
    }
}

try? await printAnonymousQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-3.zip)

Or we could use `prefix()` to read just the first five values from an async sequence:

```swift
func printTopQuotes() async throws {
    let url = URL(string: "https://hws.dev/quotes.txt")!
    let topQuotes = url.lines.prefix(5)

    for try await line in topQuotes {
        print(line)
    }
}

try? await printTopQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-4.zip)

And of course you can also combine these together in varying ways depending on what result you want. For example, this will filter for anonymous quotes, pick out the first five, then make them uppercase:

```swift
func printQuotes() async throws {
    let url = URL(string: "https://hws.dev/quotes.txt")!

    let anonymousQuotes = url.lines.filter { $0.contains("Anonymous") }
    let topAnonymousQuotes = anonymousQuotes.prefix(5)
    let shoutingTopAnonymousQuotes = topAnonymousQuotes.map(\.localizedUppercase)

    for try await line in shoutingTopAnonymousQuotes {
        print(line)
    }
}

try? await printQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-5.zip)

Just like using a regular `Sequence`, the order you apply these transformations matters –&nbsp;putting `prefix()` before `filter()` will pick out the first five quotes *then* select only the ones that are anonymous, which might produce fewer results.

Each of these transformation methods returns a new type specific to what the method does, so calling `map()` returns an `AsyncMapSequence`, calling `filter()` returns an `AsyncFilterSequence`, and calling `prefix()` returns an `AsyncPrefixSequence`.

When you stack multiple transformations together – for example, a filter, then a prefix, then a map, as in our previous example –&nbsp;this will inevitably produce a fairly complex return type, so if you intend to send back one of the complex async sequences you should consider an opaque return type like this:

```swift
func getQuotes() async -> some AsyncSequence {
    let url = URL(string: "https://hws.dev/quotes.txt")!
    let anonymousQuotes = url.lines.filter { $0.contains("Anonymous") }
    let topAnonymousQuotes = anonymousQuotes.prefix(5)
    let shoutingTopAnonymousQuotes = topAnonymousQuotes.map(\.localizedUppercase)
    return shoutingTopAnonymousQuotes
}

let result = await getQuotes()

do {
    for try await quote in result {
        print(quote)
    }
} catch {
    print("Error fetching quotes")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-6.zip)

All the transformations so far have created new async sequences and so we haven’t needed to use them with `await`, but many also produce a single value. These *must* use `await` in order to suspend until all parts of the sequence have been returned, and may also need to use `try` if the sequence is throwing.

For example, `allSatisfy()` will check whether all elements in an async sequence pass a predicate of your choosing:

```swift
func checkQuotes() async throws {
    let url = URL(string: "https://hws.dev/quotes.txt")!
    let noShortQuotes = try await url.lines.allSatisfy { $0.count > 30 }
    print(noShortQuotes)
}

try? await checkQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-7.zip)

::: important

As with regular sequences, in order to return a correct value `allSatisfy()` must have fetched every value in the sequence first, and therefore using it with an infinite sequence will never return a value. The same is true of other similar functions, such as `min()`, `max()`, and `reduce()`, so be careful.

:::

You can of course combine methods that create new async sequences and return a single value, for example to fetch lots of random numbers, convert them to integers, then find the largest:

```swift
func printHighestNumber() async throws {
    let url = URL(string: "https://hws.dev/random-numbers.txt")!

    if let highest = try await url.lines.compactMap(Int.init).max() {
        print("Highest number: \(highest)")
    } else {
        print("No number was the highest.")
    }
}

try? await printHighestNumber()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-8.zip)

Or to sum all the numbers:

```swift
func sumRandomNumbers() async throws {
    let url = URL(string: "https://hws.dev/random-numbers.txt")!
    let sum = try await url.lines.compactMap(Int.init).reduce(0, +)
    print("Sum of numbers: \(sum)")
}

try? await sumRandomNumbers()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more-9.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a custom AsyncSequence | Swift Concurrency by Example",
  "desc": "How to create a custom AsyncSequence",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-custom-asyncsequence.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the difference between Sequence, AsyncSequence, and AsyncStream? | Swift Concurrency by Example",
  "desc": "What’s the difference between Sequence, AsyncSequence, and AsyncStream?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to loop over an AsyncSequence using for await | Swift Concurrency by Example",
  "desc": "How to loop over an AsyncSequence using for await",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-loop-over-an-asyncsequence-using-for-await.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert an AsyncSequence into a Sequence | Swift Concurrency by Example",
  "desc": "How to convert an AsyncSequence into a Sequence",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-convert-an-asyncsequence-into-a-sequence.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Understanding threads and queues | Swift Concurrency by Example",
  "desc": "Understanding threads and queues",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-threads-and-queues.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />