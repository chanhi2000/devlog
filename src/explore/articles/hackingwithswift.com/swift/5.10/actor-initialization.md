---
lang: ko-KR
title: "Refined actor initialization and deinitialization"
description: "Article(s) > Refined actor initialization and deinitialization"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.10
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Refined actor initialization and deinitialization"
    - property: og:description
      content: "Refined actor initialization and deinitialization"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.10/actor-initialization.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Refined actor initialization and deinitialization | Changes in Swift 5.10",
  "desc": "Refined actor initialization and deinitialization",
  "link": "https://hackingwithswift.com/swift/5.10/actor-initialization", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.10

[SE-0327 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0327-actor-initializers.md) adds some clarifications about how state inside actors is created and destroyed, and also relaxes some rules that were overly restrictive.

This proposal contains a number of small, specific changes to actors. For example, Swift will now automatically make actors with an async initializer move to the actor's executor when all its properties are initialized.

In code, it means the two `print()` calls shown below might execute on entirely different threads:

```swift
actor Actor {
    var name: String

    init(name: String) async {
        print(name)
        self.name = name
        print(name)
    }
}

let actor = await Actor(name: "Margot")
```

This means the code has a potential suspension directly after the `name` property is set.

::: details Other Changes in Swift 5.10

```component VPCard
{
  "title": "Data races are now clearly diagnosed | Changes in Swift 5.10",
  "desc": "Data races are now clearly diagnosed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/complete-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Allow Protocols to be Nested in Non-Generic Contexts | Changes in Swift 5.10",
  "desc": "Allow Protocols to be Nested in Non-Generic Contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/nested-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Deprecate @UIApplicationMain and @NSApplicationMain | Changes in Swift 5.10",
  "desc": "Deprecate @UIApplicationMain and @NSApplicationMain",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/deprecate-uiapplicationmain.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Refined actor initialization and deinitialization | Changes in Swift 5.10",
  "desc": "Refined actor initialization and deinitialization",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/actor-initialization.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.10 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-9-to-5-10.playground.zip)

:::

---

<TagLinks />