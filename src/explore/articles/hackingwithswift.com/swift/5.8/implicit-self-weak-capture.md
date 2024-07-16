---
lang: ko-KR
title: Allow implicit self for weak self captures, after self is unwrapped
description: Article(s) > Allow implicit self for weak self captures, after self is unwrapped
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.8
head:
  - - meta:
    - property: og:title
      content: Article(s) > Allow implicit self for weak self captures, after self is unwrapped
    - property: og:description
      content: Allow implicit self for weak self captures, after self is unwrapped
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.html
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
  "title": "Allow implicit self for weak self captures, after self is unwrapped | Changes in Swift 5.8",
  "desc": "Allow implicit self for weak self captures, after self is unwrapped",
  "link": "https://hackingwithswift.com/swift/5.8/implicit-self-weak-capture", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.8

[SE-0365 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0365-implicit-self-weak-capture.md) takes another step towards letting us remove `self` from closures by allowing an implicit `self` in places where a `weak self` capture has been unwrapped.

For example, in the code below we have a closure that captures `self` weakly, but then unwraps `self` immediately:

```swift
import Foundation

class TimerController {
    var timer: Timer?
    var fireCount = 0

    init() {
        timer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] timer in
            guard let self else { return }
            print("Timer has fired \(fireCount) times")
            fireCount += 1
        }
    }
}
```

That code would not have compiled before Swift 5.8, because both instances of `fireCount` in the closure would need to be written `self.fireCount`.

::: details Other Changes in Swift 5.8

```component VPCard
{
  "title": "Lift all limitations on variables in result builders | Changes in Swift 5.8",
  "desc": "Lift all limitations on variables in result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Function back deployment | Changes in Swift 5.8",
  "desc": "Function back deployment",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Allow implicit self for weak self captures, after self is unwrapped | Changes in Swift 5.8",
  "desc": "Allow implicit self for weak self captures, after self is unwrapped",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Concise magic file names | Changes in Swift 5.8",
  "desc": "Concise magic file names",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/concise-magic-file-names.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opening existential arguments to optional parameters | Changes in Swift 5.8",
  "desc": "Opening existential arguments to optional parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Collection downcasts in cast patterns are now supported | Changes in Swift 5.8",
  "desc": "Collection downcasts in cast patterns are now supported",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.8 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-7-to-5-8.playground.zip)

:::

---

<TagLinks />