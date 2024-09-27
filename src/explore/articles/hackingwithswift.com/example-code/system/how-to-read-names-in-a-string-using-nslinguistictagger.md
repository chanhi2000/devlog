---
lang: ko-KR
title: "How to read names in a string using NSLinguisticTagger"
description: "Article(s) > How to read names in a string using NSLinguisticTagger"
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
      content: "Article(s) > How to read names in a string using NSLinguisticTagger"
    - property: og:description
      content: "How to read names in a string using NSLinguisticTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-read-names-in-a-string-using-nslinguistictagger.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to read names in a string using NSLinguisticTagger | System - free Swift example code",
  "desc": "How to read names in a string using NSLinguisticTagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-read-names-in-a-string-using-nslinguistictagger",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
Foundation has a built-in class to parse strings of text, and it includes some useful options to extra names of people, places, organizations, and more. 

To try it out, consider this string:

```swift
let text = "Apple Computer was established in Cupertino by Steve Jobs, Steve Wozniak, and Ronald Wayne."
```

That contains a company name, a place name, and three names of people all in one, and we can use `NSLinguisticTagger` to pull them all out. 

First you create a linguistic tagger and tell it to look for the names of things inside that text string:

```swift
let tagger = NSLinguisticTagger(tagSchemes: [.nameType], options: 0)
tagger.string = text
```

Next you create the range to scan. This is done using the older `NSRange` type, like this:

```swift
let range = NSRange(location: 0, length: text.utf16.count)
```

Third, you tell `NSLinguisticTagger` what it should look for and how it should scan. One useful option here is `.joinNames`, which means it will return “Steve Jobs” as a single name rather than as two individual names:

```swift
let options: NSLinguisticTagger.Options = [.omitPunctuation, .omitWhitespace, .joinNames]
let tags: [NSLinguisticTag] = [.personalName, .placeName, .organizationName]
```

Finally, you tell `NSLinguisticTagger` to enumerate the tags in the input string, filter out any that aren’t in the `tags` array we’re looking for, convert the `NSRange` back to a Swift range, then print out each match:

```swift
tagger.enumerateTags(in: range, unit: .word, scheme: .nameType, options: options) { tag, tokenRange, stop in
    if let tag = tag, tags.contains(tag) {
        if let range = Range(tokenRange, in: text) {
            let name = text[range]
            print("\(name): \(tag)")
        }
    }
}
```

That will find the company, organization, and three people names in our string – nice!

-->

::: details Similar solutions…

<!--
/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger">How to parse a sentence using NSLinguisticTagger 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/example-code/strings/how-to-read-a-single-character-from-a-string">How to read a single character from a string 
/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton">How to read user contacts with ContactAccessButton</a>
-->

:::

---

<TagLinks />