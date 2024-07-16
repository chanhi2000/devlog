---
lang: ko-KR
title: "Deprecate @UIApplicationMain and @NSApplicationMain"
description: "Article(s) > Deprecate @UIApplicationMain and @NSApplicationMain"
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
      content: "Article(s) > Deprecate @UIApplicationMain and @NSApplicationMain"
    - property: og:description
      content: "Deprecate @UIApplicationMain and @NSApplicationMain"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.10/deprecate-uiapplicationmain.html
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
  "title": "Deprecate @UIApplicationMain and @NSApplicationMain | Changes in Swift 5.10",
  "desc": "Deprecate @UIApplicationMain and @NSApplicationMain",
  "link": "https://hackingwithswift.com/swift/5.10/deprecate-uiapplicationmain", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.10

[SE-0383 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0383-deprecate-uiapplicationmain-and-nsapplicationmain.md) formally deprecates the `@UIApplicationMain` and `@NSApplicationMain` attributes, encouraging folks to switch across to the general-purpose `@main` attribute that was introduced back in Swift 5.3.

Adopting this change is trivial. You should be able to change this code:

```swift
import SwiftUI 

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    // your code here
}
```

To this:

```swift
@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    // your code here        
}
```

Or if you're using SwiftUI, just this:

```swift
@main
struct SandboxApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

::: details Other Changes in Swift 5.10

```component VPCard
{
  "title": "Data races are now clearly diagnosed | Changes in Swift 5.10",
  "desc": "Data races are now clearly diagnosed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/complete-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Allow Protocols to be Nested in Non-Generic Contexts | Changes in Swift 5.10",
  "desc": "Allow Protocols to be Nested in Non-Generic Contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/nested-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Deprecate @UIApplicationMain and @NSApplicationMain | Changes in Swift 5.10",
  "desc": "Deprecate @UIApplicationMain and @NSApplicationMain",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/deprecate-uiapplicationmain.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
 -->
```component VPCard
{
  "title": "Refined actor initialization and deinitialization | Changes in Swift 5.10",
  "desc": "Refined actor initialization and deinitialization",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/actor-initialization.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.10 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-9-to-5-10.playground.zip)

:::

---

<TagLinks />