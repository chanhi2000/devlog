---
lang: ko-KR
title: "How to store NSCoding data using Codable"
description: "Article(s) > How to store NSCoding data using Codable"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to store NSCoding data using Codable"
    - property: og:description
      content: "How to store NSCoding data using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-store-nscoding-data-using-codable.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to store NSCoding data using Codable | Language - free Swift example code",
  "desc": "How to store NSCoding data using Codable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-store-nscoding-data-using-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Broadly speaking, `NSCoding` is the Objective-C way of archiving data and `Codable` is the Swift way. However, that doesn’t mean the two can’t work together – with a little work you can save any `NSCoding` data right inside `Codable`, which is helpful because many Apple types such as `UIColor` and `UIImage` conform to `NSCoding` but not `Codable`.

Here’s a simple struct as an example:

```swift
struct Person {
    var name: String
    var favoriteColor: UIColor
}
```

That stores one `Codable` type (the string) and one `NSCoding` type (the color), and we’re going to make them all work through `Codable` using `JSONEncoder`.

This takes four steps:

1. Creating an extension on `Person` where we’ll put our `Codable` functionality.
<li>Creating custom coding keys to describe what data is saved.
<li>Creating an `init(from:)` method that converts raw data back into a `UIColor`.
<li>Creating an `encode(to:)` method that converts a `UIColor` into raw data, which `Codable` can then base-64 encode.

Start by adding the extension to `Person`:

```swift
extension Person: Codable {

}
```

That will stop your code from compiling because Swift knows `UIColor` isn’t compatible with `Codable`. So, let’s move on to step two: adding custom coding keys. Put this inside the extension:

```swift
enum CodingKeys: String, CodingKey {
    case name
    case favoriteColor
}
```

Those are just the same coding keys we’d get by default, but because we’re going to be encoding and decoding things by hand we need to declare them explicitly.

Step three is to create an `init(from:)` method that can read raw data and convert it to a `UIColor`. This will used `NSKeyedUnarchiver` just like regular `NSCoding` code. Add this to the extension:

```swift
init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)

    name = try container.decode(String.self, forKey: .name)

    let colorData = try container.decode(Data.self, forKey: .favoriteColor)
    favoriteColor = try NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(colorData) as? UIColor ?? UIColor.black
}
```

The last step is to create an `encode(to:)` method that does the opposite – it takes a `UIColor` and converts it to data using `NSKeyedArchiver`. Put this inside the extension:

```swift
func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    try container.encode(name, forKey: .name)

    let colorData = try NSKeyedArchiver.archivedData(withRootObject: favoriteColor, requiringSecureCoding: false)
    try container.encode(colorData, forKey: .favoriteColor)
}
```

That’s all the work done – by converting our `UIColor` into a `Data`, `Codable` can take care of the rest.

If you want to try it out, here’s some sample code:

```swift
let taylor = Person(name: "Taylor Swift", favoriteColor: .blue)
let encoder = JSONEncoder()

do {
    let encoded = try encoder.encode(taylor)
    let str = String(decoding: encoded, as: UTF8.self)
    print(str)
} catch {
    print(error.localizedDescription)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/concurrency/how-to-store-continuations-to-be-resumed-later">How to store continuations to be resumed later 
/example-code/system/how-to-store-userdefaults-options-in-icloud">How to store UserDefaults options in iCloud 
/quick-start/swiftui/how-to-store-views-as-properties">How to store views as properties 
/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types">How to use Codable to load and save custom data types</a>
-->

:::

---

<TagLinks />