---
lang: ko-KR
title: "How to parse JSON using JSONSerialization"
description: "Article(s) > How to parse JSON using JSONSerialization"
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
      content: "Article(s) > How to parse JSON using JSONSerialization"
    - property: og:description
      content: "How to parse JSON using JSONSerialization"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-parse-json-using-jsonserialization.html
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
  "title": "How to parse JSON using JSONSerialization | System - free Swift example code",
  "desc": "How to parse JSON using JSONSerialization",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-parse-json-using-jsonserialization",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
If you want to parse JSON by hand rather than using `Codable`, iOS has a built-in alternative called `JSONSerialization` and it can convert a JSON string into a collection of dictionaries, arrays, strings and numbers in just a few lines of code.

In the example below, I create a dummy piece of JSON that contains three names in an array cunningly called “names”. This then gets sent to `JSONSerialization` (by converting it into a `Data` object, which is how `JSONSerialization` likes to receive its content), and I conditionally pull out and print the `names` array:

```swift
let str = "{\"names\": [\"Bob\", \"Tim\", \"Tina\"]}"
let data = Data(str.utf8)

do {
    // make sure this JSON is in the format we expect
    if let json = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] {
        // try to read out a string array
        if let names = json["names"] as? [String] {
            print(names)
        }
    }
} catch let error as NSError {
    print("Failed to load: \(error.localizedDescription)")
}
```

There are a couple of things that might confuse you there. First, because parsing JSON will fail if the JSON isn't valid, you need to use try/catch and have some sort of error handling. Second, you need to typecast my example JSON to be a dictionary of type `[String: Any]` so that you can start working with your JSON values. Third, you don't know for sure that any values exist inside the JSON, so you need to conditionally check for and unwrap the `names` value.

-->

::: details Similar solutions…

<!--
/example-code/libraries/how-to-parse-json-using-swiftyjson">How to parse JSON using SwiftyJSON 
/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger">How to parse a sentence using NSLinguisticTagger 
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/example-code/language/how-to-format-json-using-codable-and-pretty-printing">How to format JSON using Codable and pretty printing 
/example-code/language/how-to-convert-json-into-swift-objects-using-codable">How to convert JSON into Swift objects using Codable</a>
-->

:::

---

<TagLinks />