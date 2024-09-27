---
lang: ko-KR
title: "How to decode JSON from your app bundle the easy way"
description: "Article(s) > How to decode JSON from your app bundle the easy way"
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
      content: "Article(s) > How to decode JSON from your app bundle the easy way"
    - property: og:description
      content: "How to decode JSON from your app bundle the easy way"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-decode-json-from-your-app-bundle-the-easy-way.html
date: 2019-10-06
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
  "title": "How to decode JSON from your app bundle the easy way | System - free Swift example code",
  "desc": "How to decode JSON from your app bundle the easy way",
  "link": "https://hackingwithswift.com/example-code/how-to-decode-json-from-your-app-bundle-the-easy-way",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you want to load some JSON from your app bundle when your app runs, it takes quite a few lines of code: you need to get the URL from your bundle, load it into a `Data` instance, try decoding it, then catch any errors.

It’s such a common thing to do that I have an extension to make the process easier. I’ll show you the code first, then explain how it works.

Here’s the code:

```swift
extension Bundle {
    func decode<T: Decodable>(_ type: T.Type, from file: String, dateDecodingStrategy: JSONDecoder.DateDecodingStrategy = .deferredToDate, keyDecodingStrategy: JSONDecoder.KeyDecodingStrategy = .useDefaultKeys) -> T {
        guard let url = self.url(forResource: file, withExtension: nil) else {
            fatalError("Failed to locate \(file) in bundle.")
        }

        guard let data = try? Data(contentsOf: url) else {
            fatalError("Failed to load \(file) from bundle.")
        }

        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = dateDecodingStrategy
        decoder.keyDecodingStrategy = keyDecodingStrategy

        do {
            return try decoder.decode(T.self, from: data)
        } catch DecodingError.keyNotFound(let key, let context) {
            fatalError("Failed to decode \(file) from bundle due to missing key '\(key.stringValue)' not found – \(context.debugDescription)")
        } catch DecodingError.typeMismatch(_, let context) {
            fatalError("Failed to decode \(file) from bundle due to type mismatch – \(context.debugDescription)")
        } catch DecodingError.valueNotFound(let type, let context) {
            fatalError("Failed to decode \(file) from bundle due to missing \(type) value – \(context.debugDescription)")
        } catch DecodingError.dataCorrupted(_) {
            fatalError("Failed to decode \(file) from bundle because it appears to be invalid JSON")
        } catch {
            fatalError("Failed to decode \(file) from bundle: \(error.localizedDescription)")
        }
    }
}
```

To use the extension, you need some sort of codable struct, such as this one:

```swift
struct User: Codable {
    var name: String
}
```

You also need some sort of JSON in your app bundle. For example, a file called data.json containing contents like this:

```swift
{
    "name": "Taylor Swift"
}
```

And now you can load your JSON into your struct in just a single line of code:

```swift
let user = Bundle.main.decode(User.self, from: "data.json")
```

The extension is capable of loading any kind of decodable data – your structs, arrays of your structs, and so on. Even better, you can use it to make properties in your types immutable and available as soon as your types are created, like this:

```swift
class ViewController: UIViewController {
    let menuItems = Bundle.main.decode([MenuItem].self, from: "menu.json")
    // the rest of your code…
}
```

Now, let me briefly explain what the code actually does.

First, it creates an extension on `Bundle` to add a `decode()` method:

```swift
func decode<T: Decodable>(_ type: T.Type, from file: String, dateDecodingStrategy: JSONDecoder.DateDecodingStrategy = .deferredToDate, keyDecodingStrategy: JSONDecoder.KeyDecodingStrategy = .useDefaultKeys) -> T {
```

As you can see, that method is generic over any kind of `Decodable` data type, and takes two required parameters: what you want to decode and the name of the JSON file in your bundle. There are two more parameters that have sensible default values, but allow you to customize dates and keys if you need to.

Next it attempts to find the path to the JSON in the app bundle, and load it into a `Data` instance. If either of those fail, the code uses `fatalError()` to force a crash in your app, which might seem bad but remember: this is a JSON file that you made by hand and added directly into your app bundle – if you forgot the JSON or it couldn’t be loaded, that’s a fundamental logic failure on your behalf and should be corrected.

Once the file is loaded the code creates a `JSONDecoder` and attempts to decode the file’s contents to the type you asked for. It then has a series of `catch` blocks to handle all possible errors, each of which trigger a crash telling you what was wrong.

Again, triggering a crash is perfectly fine here: this is all static, hard-coded JSON you have added directly to your app, so if it somehow changes format by surprise then your program shouldn’t run. In fact, I usually add tests that specifically attempt to load all the JSON I include in my app bundles, to make sure they don’t change by accident.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/system/how-to-find-the-path-to-a-file-in-your-bundle">How to find the path to a file in your bundle 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/example-code/strings/how-to-load-a-string-from-a-file-in-your-bundle">How to load a string from a file in your bundle</a>
-->

:::

---

<TagLinks />