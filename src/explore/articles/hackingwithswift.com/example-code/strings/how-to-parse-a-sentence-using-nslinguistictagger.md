---
lang: ko-KR
title: "How to parse a sentence using NSLinguisticTagger"
description: "Article(s) > How to parse a sentence using NSLinguisticTagger"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to parse a sentence using NSLinguisticTagger"
    - property: og:description
      content: "How to parse a sentence using NSLinguisticTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to parse a sentence using NSLinguisticTagger | Strings - free Swift example code",
  "desc": "How to parse a sentence using NSLinguisticTagger",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
If you're looking to parse natural language entered by a user, you're looking for `NSLinguisticTagger`: it automatically recognizes English words (and words in other languages too, if you ask) and tells you what kind of word it is. That is, this magic little class distinguishes between verbs, nouns, adjectives and so on, so you can focus on the important stuff: how do I (verb) this (noun)?

Here's an example to get you started:

```swift
let options = NSLinguisticTagger.Options.omitWhitespace.rawValue | NSLinguisticTagger.Options.joinNames.rawValue
let tagger = NSLinguisticTagger(tagSchemes: NSLinguisticTagger.availableTagSchemes(forLanguage: "en"), options: Int(options))

let inputString = "This is a very long test for you to try"
tagger.string = inputString

let range = NSRange(location: 0, length: inputString.utf16.count)
tagger.enumerateTags(in: range, scheme: .nameTypeOrLexicalClass, options: NSLinguisticTagger.Options(rawValue: options)) { tag, tokenRange, sentenceRange, stop in
    guard let range = Range(tokenRange, in: inputString) else { return }
    let token = inputString[range]
    print("\(tag): \(token)")
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-read-names-in-a-string-using-nslinguistictagger">How to read names in a string using NSLinguisticTagger 
/example-code/libraries/how-to-parse-json-using-swiftyjson">How to parse JSON using SwiftyJSON 
/example-code/system/how-to-parse-json-using-jsonserialization">How to parse JSON using JSONSerialization 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a>
-->

:::

---

<TagLinks />