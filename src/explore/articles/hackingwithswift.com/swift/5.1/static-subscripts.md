---
lang: ko-KR
title: Static and class subscripts
description: Article(s) > Static and class subscripts
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > Static and class subscripts
    - property: og:description
      content: Static and class subscripts
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.1/static-subscripts.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Static and class subscripts | Changes in Swift 5.1",
  "desc": "Static and class subscripts",
  "link": "https://hackingwithswift.com/swift/5.1/static-subscripts", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.1

[SE-0254 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0254-static-subscripts.md) adds the ability to mark subscripts as being *static*, which means they apply to types rather than instances of a type.

Static properties and methods are used when one set of values is shared between all instances of that type. For example, if you had one centralized type to store your app settings, you might write code like this:

```swift
public enum OldSettings {
    private static var values = [String: String]()

    static func get(_ name: String) -> String? {
        return values[name]
    }

    static func set(_ name: String, to newValue: String?) {
        print("Adjusting \(name) to \(newValue ?? "nil")")
        values[name] = newValue
    }
}

OldSettings.set("Captain", to: "Gary")
OldSettings.set("Friend", to: "Mooncake")
print(OldSettings.get("Captain") ?? "Unknown")
```

Wrapping the dictionary inside a type means that we can control access more carefully, and using an enum with no cases means we can’t try to instantiate the type – we can’t make various instances of `Settings`.

With Swift 5.1 we can now use a static subscript instead, allowing us to rewrite our code to this:

```swift
public enum NewSettings {
    private static var values = [String: String]()

    public static subscript(_ name: String) -> String? {
        get {
            return values[name]
        }
        set {
            print("Adjusting \(name) to \(newValue ?? "nil")")
            values[name] = newValue
        }
    }
}

NewSettings["Captain"] = "Gary"
NewSettings["Friend"] = "Mooncake"
print(NewSettings["Captain"] ?? "Unknown")
```

Custom subscripts like this have always been possible for instances of types; this improvement makes static or class subscripts possible too.

::: details Other Changes in Swift 5.1

```component VPCard
{
  "title": "Improvements to synthesized memberwise initializers | Changes in Swift 5.1",
  "desc": "Improvements to synthesized memberwise initializers",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Implicit returns from single-expression functions | Changes in Swift 5.1",
  "desc": "Implicit returns from single-expression functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/implicit-returns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Universal Self | Changes in Swift 5.1",
  "desc": "Universal Self",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/universal-self.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opaque return types | Changes in Swift 5.1",
  "desc": "Opaque return types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/opaque-return-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Static and class subscripts | Changes in Swift 5.1",
  "desc": "Static and class subscripts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/static-subscripts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
 -->
```component VPCard
{
  "title": "Warnings for ambiguous none cases | Changes in Swift 5.1",
  "desc": "Warnings for ambiguous none cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Matching optional enums against non-optionals | Changes in Swift 5.1",
  "desc": "Matching optional enums against non-optionals",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/matching-optional-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Ordered collection diffing | Changes in Swift 5.1",
  "desc": "Ordered collection diffing",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Creating uninitialized arrays | Changes in Swift 5.1",
  "desc": "Creating uninitialized arrays",
  "link": "/explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip)

:::

---

<TagLinks />