---
lang: ko-KR
title: Multiple variadic parameters in functions
description: Article(s) > Multiple variadic parameters in functions
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.4
head:
  - - meta:
    - property: og:title
      content: Article(s) > Multiple variadic parameters in functions
    - property: og:description
      content: Multiple variadic parameters in functions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions.html
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
  "title": "Multiple variadic parameters in functions | Changes in Swift 5.4",
  "desc": "Multiple variadic parameters in functions",
  "link": "https://hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.4

[SE-0284 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0284-multiple-variadic-parameters.md) introduced the ability to have functions, subscripts, and initializers use multiple variadic parameters as long as all parameters that follow a variadic parameter have labels. Before Swift 5.4, you could only have one variadic parameter in this situation.

So, with this improvement in place we could write a function that accepts a variadic parameter storing the times goals were scored during a football match, plus a second variadic parameter scoring the names of players who scored:

```swift
import Foundation

func summarizeGoals(times: Int..., players: String...) {
    let joinedNames = ListFormatter.localizedString(byJoining: players)
    let joinedTimes = ListFormatter.localizedString(byJoining: times.map(String.init))

    print("\(times.count) goals where scored by \(joinedNames) at the follow minutes: \(joinedTimes)")
}
```

To call that function, provide both sets of values as variadic parameters, making sure that all parameters after the first variadic are labeled:

```swift
summarizeGoals(times: 18, 33, 55, 90, players: "Dani", "Jamie", "Roy")
```

::: details Other Changes in Swift 5.4

```component VPCard
{
  "title": "Improved implicit member syntax | Changes in Swift 5.4",
  "desc": "Improved implicit member syntax",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Multiple variadic parameters in functions | Changes in Swift 5.4",
  "desc": "Multiple variadic parameters in functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Local functions now support overloading | Changes in Swift 5.4",
  "desc": "Local functions now support overloading",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Creating variables that call a function of the same name | Changes in Swift 5.4",
  "desc": "Creating variables that call a function of the same name",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-variables-same-name.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Result builders | Changes in Swift 5.4",
  "desc": "Result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/result-builders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Property wrappers are now supported for local variables | Changes in Swift 5.4",
  "desc": "Property wrappers are now supported for local variables",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/local-property-wrappers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Packages can now declare executable targets | Changes in Swift 5.4",
  "desc": "Packages can now declare executable targets",
  "link": "/explore/articles/hackingwithswift.com/swift/5.4/spm-executable-targets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.4 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-3-to-5-4.playground.zip)

:::

---

<TagLinks />