---
lang: ko-KR
title: "How to find similar words for a search term"
description: "Article(s) > How to find similar words for a search term"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to find similar words for a search term"
    - property: og:description
      content: "How to find similar words for a search term"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-find-similar-words-for-a-search-term.html
date: 2019-10-12
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "NaturalLanguage - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/naturallanguage/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to find similar words for a search term | NaturalLanguage - free Swift example code",
  "desc": "How to find similar words for a search term",
  "link": "https://hackingwithswift.com/example-code/naturallanguage/how-to-find-similar-words-for-a-search-term",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
iOS gives us the ability to search for similar words for a term by using *word embeddings*, which are maps of strings created using machine learning that describe how similar various words are in terms of their meaning. This kind of thing is useful when handling user searches: you might have tagged a photo with “hat”, but your user searched for “sombrero” – word embeddings let us find similar words, and we can then use those variations for data searches.

To get started, first add `import NaturalLanguage`, then create a word embedding for the language you want to target:

```swift
let embedding = NLEmbedding.wordEmbedding(for: .english)
```

That returns an optional `NLEmbedding`, because the language you requested might not be supported. For example, right now `.english`, `.french`, and some others work, but `.german` does not.

Once you have your embedding, you can request all similar words for a given string by calling its `neighbors(for:maximumCount:)` method, like this:

```swift
let similarWords = embedding?.neighbors(for: "rain", maximumCount: 10)
```

That will set `similarWords` to be an array of tuples, where each tuple contains two values: a word that is similar, and a distance from your original word. This array is sorted by distance, so closest words come first.

We asked for “rain”, so we’ll get back “downpour” with a distance of 0.614, “rainstorm” with a distance of 0.661, “torrential” with a distance of 0.701, and more – drenching, rainfall, flooding, storm, flood, monsoon, and more.

Here’s a full example so you can try it easily:

```swift
if let embedding = NLEmbedding.wordEmbedding(for: .english) {
    let similarWords = embedding.neighbors(for: "rain", maximumCount: 10)

    for word in similarWords {
        print("\(word.0) has a distance of \(word.1)")
    }
}
```

Before you dive into word embeddings, I want to add an important note of caution: the concept of *distance* isn’t just “words that mean the same thing.” 

Instead, word embeddings also include words that are used in *similar contexts*: if you search for “cat” you’ll get back “feline”, “kitten”, “tabby”, and “kitty”, but you’ll also get back “meow” because that’s the sound cat makes. You’ll *also* get back “pet”, because cats are pets, and even more you’ll get back “dog”, “canine”, and “puppy” because they are also pets.

Apple uses these word embeddings as search suggestions, giving users the chance to change their search. For example, if you search Photos for “meow” you’ll see a suggestion saying “meow -> Feline” as a suggested search.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field">How to add search tokens to a search field 
/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words">How to use UISearchController to let users enter search words 
/example-code/system/how-to-check-whether-one-date-is-similar-to-another">How to check whether one date is similar to another 
/example-code/libraries/how-to-search-your-apps-spotlight-index">How to search your app’s Spotlight index 
/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data</a>
-->

:::

---

<TagLinks />