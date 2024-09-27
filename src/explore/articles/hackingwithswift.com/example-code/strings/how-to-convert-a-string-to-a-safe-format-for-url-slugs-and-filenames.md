---
lang: ko-KR
title: "How to convert a string to a safe format for URL slugs and filenames"
description: "Article(s) > How to convert a string to a safe format for URL slugs and filenames"
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
      content: "Article(s) > How to convert a string to a safe format for URL slugs and filenames"
    - property: og:description
      content: "How to convert a string to a safe format for URL slugs and filenames"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames.html
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
  "title": "How to convert a string to a safe format for URL slugs and filenames | Strings - free Swift example code",
  "desc": "How to convert a string to a safe format for URL slugs and filenames",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift strings are extraordinarily complex beasts, allowing you to mix in characters from any language – including emoji – freely. While this is really important to display text, it can also cause havoc while trying to create URLs and filenames, so if you need to refer to a string in those places you should first convert it to a *slug*.

If you look at a URL like <a href="https://www.hackingwithswift.com/whats-new-in-ios-11">https://www.hackingwithswift.com/whats-new-in-ios-11</a>, the *slug* is the last part – “whats-new-in-ios-11”. The conversion process stripped out punctuation (the apostrophe in “What’s”, lowercased it all, removed any non-Latin characters, then used dashed for word separators rather than spaces.

This takes a little more work to do than you might think, particularly because of the way you need to convert non-Latin and accented characters. For example, “ä” needs to be converted to “a”, and languages such as German convert “ß” into “ss” when they are rendered as Latin characters.

If you want to get the best conversion possible, you need to use Foundation’s `StringTransform` type then call `applyingTransform()` on your string. You can then split by any characters that can’t be used in slugs, and re-join on “-” to get your finished URL.

Rather than try to write all that yourself, here’s an easy extension you can drop in:

```swift
extension String {
    private static let slugSafeCharacters = CharacterSet(charactersIn: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-")

    public func convertedToSlug() -> String? {
        if let latin = self.applyingTransform(StringTransform("Any-Latin; Latin-ASCII; Lower;"), reverse: false) {
            let urlComponents = latin.components(separatedBy: String.slugSafeCharacters.inverted)
            let result = urlComponents.filter { $0 != "" }.joined(separator: "-")

            if result.count > 0 {
                return result
            }
        }

        return nil
    }
}
```

If you use Swift’s package manager, you can find that wrapped up in a cross-platform library in my SwiftSlug project. It’s available on GitHub at <a href="http://github.com/twostraws/SwiftSlug">http://github.com/twostraws/SwiftSlug</a>.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />