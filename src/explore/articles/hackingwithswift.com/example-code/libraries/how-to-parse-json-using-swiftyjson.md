---
lang: ko-KR
title: "How to parse JSON using SwiftyJSON"
description: "Article(s) > How to parse JSON using SwiftyJSON"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to parse JSON using SwiftyJSON"
    - property: og:description
      content: "How to parse JSON using SwiftyJSON"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-parse-json-using-swiftyjson.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to parse JSON using SwiftyJSON | Libraries - free Swift example code",
  "desc": "How to parse JSON using SwiftyJSON",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-parse-json-using-swiftyjson",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
SwiftyJSON is a super-simplified JSON parsing library that gives you clearer syntax than the built-in iOS libraries (yes, even more than `JSONEncoder` from `Codable`), and is free.

You can <a href="https://github.com/SwiftyJSON/SwiftyJSON">download it from here</a> – unzip the file you downloaded, then look in its Source directory and drag <FontIcon icon="fa-brands fa-swift"/>`SwiftyJSON.swift` into your Xcode project. To use SwiftyJSON, you need to convert your JSON string into a `Data` object, then send it in for parsing. Once that's done, you simply request data in the format you want, and (here's the awesome bit) *SwiftyJSON is guaranteed to return something.*

That "something" is going to be your data, if all things are in good shape. But if you requested the wrong thing (either with a typo, or because you didn't understand your JSON structure correctly) or if the JSON has changed, SwiftyJSON will just return a default value instead.

To get you started, here is some example JSON:

```swift
let json = "{ \"people\": [{ \"firstName\": \"Paul\", \"lastName\": \"Hudson\", \"isAlive\": true }, { \"firstName\": \"Angela\", \"lastName\": \"Merkel\", \"isAlive\": true }, { \"firstName\": \"George\", \"lastName\": \"Washington\", \"isAlive\": false } ] }"
```

That contains an array of three people, each of which have a first name, a last name, and an "is alive" status. To parse that using SwiftyJSON and print out all the first names, here's the code:

```swift
if let data = json.data(using: .utf8) {
    if let json = try? JSON(data: data) {
        for item in json["people"].arrayValue {
            print(item["firstName"].stringValue)
        }
    }
}
```

It's the `arrayValue` and `stringValue` properties that do all the magic: the first one returns the array of people or an empty array if the "people" element didn't exist, and the second one returns the "firstName" property of a person, or an empty string if it wasn't set. So, no matter what happens, that code will work, which means it's easy to write and safe to run.

Sometimes JSON has quite deeply nested dictionaries, but that's OK: SwiftyJSON can navigate through multiple levels in one call, and if any one level fails you'll still get back your default value. For example, if you have JSON like this:

```swift
{  
   "metadata":{  
      "responseInfo":{  
         "status":200,
         "developerMessage":"OK",
      }
   }
}
```

You might want to check that the status code is 200 before continuing. To do that, just read the "metaData", "responseInfo" and "status" values all at once, and ask SwiftyJSON for its `intValue` – you'll either get the correct number (200) or 0 if any of those values don't exist. Like this:

```swift
if json["metadata"]["responseInfo"]["status"].intValue == 200 {
    // we're OK to parse!
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-parse-json-using-jsonserialization">How to parse JSON using JSONSerialization 
/example-code/strings/how-to-parse-a-sentence-using-nslinguistictagger">How to parse a sentence using NSLinguisticTagger 
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/example-code/language/how-to-format-json-using-codable-and-pretty-printing">How to format JSON using Codable and pretty printing 
/example-code/language/how-to-convert-json-into-swift-objects-using-codable">How to convert JSON into Swift objects using Codable</a>
-->

:::

---

<TagLinks />