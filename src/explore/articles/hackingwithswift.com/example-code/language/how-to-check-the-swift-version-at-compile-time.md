---
lang: ko-KR
title: "How to check the Swift version at compile time"
description: "Article(s) > How to check the Swift version at compile time"
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
      content: "Article(s) > How to check the Swift version at compile time"
    - property: og:description
      content: "How to check the Swift version at compile time"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-the-swift-version-at-compile-time.html
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
  "title": "How to check the Swift version at compile time | Language - free Swift example code",
  "desc": "How to check the Swift version at compile time",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-the-swift-version-at-compile-time",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift gives us the `#if swift` build configuration option, which lets you compile certain code only if a specific version of the Swift compiler is detected. This is particularly useful for libraries that need to support multiple incompatible versions of Swift at the same time, because only one version of their code will ever be compiled.

In the example below, the `print()` code will display one of two messages depending on whether you're using an old version of Swift:

```swift
#if swift(>=5.0)
print("Running Swift 5.0 or later")
#else
print("Running old Swift")
#endif
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-install-a-beta-version-of-swift">How to install a beta version of Swift 
/example-code/system/how-to-read-your-apps-version-from-your-infoplist-file">How to read your app’s version from your Info.plist file 
/example-code/language/how-to-fix-the-error-expression-was-too-complex-to-be-solved-in-reasonable-time">How to fix the error “Expression was too complex to be solved in reasonable time” 
/example-code/testing/how-to-benchmark-app-launch-time-using-xctossignpostmetricapplicationlaunch">How to benchmark app launch time using XCTOSSignpostMetric.applicationLaunch 
/example-code/system/how-to-run-code-at-a-specific-time">How to run code at a specific time</a>
-->

:::

---

<TagLinks />