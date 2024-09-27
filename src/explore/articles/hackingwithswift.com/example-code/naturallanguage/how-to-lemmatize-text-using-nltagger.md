---
lang: ko-KR
title: "How to lemmatize text using NLTagger"
description: "Article(s) > How to lemmatize text using NLTagger"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to lemmatize text using NLTagger"
    - property: og:description
      content: "How to lemmatize text using NLTagger"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/naturallanguage/how-to-lemmatize-text-using-nltagger.html
date: 2021-06-17
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
  "title": "How to lemmatize text using NLTagger | NaturalLanguage - free Swift example code",
  "desc": "How to lemmatize text using NLTagger",
  "link": "https://hackingwithswift.com/example-code/naturallanguage/how-to-lemmatize-text-using-nltagger",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!-- 
Apple’s NaturalLanguage framework is able to lemmatize text for us, which is the process of converting words to the forms you would find in a dictionary – making plural nouns singular, finding the root forms of conjugated verbs, and so on, while also taking into account the context in which they are used.

To do this, first create an instance of `NLTagger` enabling its `.lemma` scheme, then call `enumerateTags()` on it to find all the root word forms. This will pass you the tag (the root word) if it exists, plus the range of the original text in the string.

So, you could lemmatize a whole sentence like this:

```swift
import NaturalLanguage

let text = "This is text with plurals such as geese, people, and millennia."
let tagger = NLTagger(tagSchemes: [.lemma])
tagger.string = text

tagger.enumerateTags(in: text.startIndex..<text.endIndex, unit: .word, scheme: .lemma) { tag, range in
    let stemForm = tag?.rawValue ?? String(text[range])
    print(stemForm, terminator: "")
    return true
}
```

Text lemmatized in this way will be lowercase, preserving any punctuation. So, that snippet will output “this be text with plural such as goose, person, and millennium.”

If you intend to lemmatize text frequently, consider making it an extension on `String` like this:

```swift
extension String {
    func lemmatized() -> String {
        let tagger = NLTagger(tagSchemes: [.lemma])
        tagger.string = self

        var result = [String]()

        tagger.enumerateTags(in: self.startIndex..<self.endIndex, unit: .word, scheme: .lemma) { tag, tokenRange in
            let stemForm = tag?.rawValue ?? String(self[tokenRange])
            result.append(stemForm)
            return true
        }

        return result.joined()
    }
}
```

With that in place you can now lemmatize text easily:

```swift
let text = "This is text with plurals such as geese, people, and millennia."
print(text.lemmatized())
```

-->

::: details Similar solutions…

<!--
/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger">How to perform sentiment analysis on a string using NLTagger 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations 
/quick-start/swiftui/building-a-menu-using-list">Building a menu using List</a>
-->

:::

---

<TagLinks />