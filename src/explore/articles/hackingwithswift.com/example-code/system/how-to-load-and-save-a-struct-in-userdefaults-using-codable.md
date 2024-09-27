---
lang: ko-KR
title: "How to load and save a struct in UserDefaults using Codable"
description: "Article(s) > How to load and save a struct in UserDefaults using Codable"
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
      content: "Article(s) > How to load and save a struct in UserDefaults using Codable"
    - property: og:description
      content: "How to load and save a struct in UserDefaults using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-load-and-save-a-struct-in-userdefaults-using-codable.html
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
  "title": "How to load and save a struct in UserDefaults using Codable | System - free Swift example code",
  "desc": "How to load and save a struct in UserDefaults using Codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-load-and-save-a-struct-in-userdefaults-using-codable",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
The `Codable` protocol makes it easy to load and save native Swift types to JSON, and with a little typecasting you can get that data into `UserDefaults` so it’s safe.

Here’s some trivial `Codable` data we can work with:

```swift
struct Person: Codable {
    var name: String
}

let taylor = Person(name: "Taylor Swift")
```

To save that to `UserDefaults` you must first encode it as JSON using `JSONEncoder`, which will send back a `Data` instance you can send straight to `UserDefaults`. For example:

```swift
let encoder = JSONEncoder()
if let encoded = try? encoder.encode(taylor) {
    let defaults = UserDefaults.standard
    defaults.set(encoded, forKey: "SavedPerson")
}
```

Reading saved data back into a `Person` instance is a matter of converting from `Data` using a `JSONDecoder`, like this:

```swift
if let savedPerson = defaults.object(forKey: "SavedPerson") as? Data {
    let decoder = JSONDecoder()
    if let loadedPerson = try? decoder.decode(Person.self, from: savedPerson) {
        print(loadedPerson.name)
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable">How to save and load NavigationStack paths using Codable 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/system/how-to-save-user-settings-using-userdefaults">How to save user settings using UserDefaults</a>
-->

:::

---

<TagLinks />