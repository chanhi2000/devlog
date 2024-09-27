---
lang: ko-KR
title: "When is it safe to force unwrap optionals?"
description: "Article(s) > When is it safe to force unwrap optionals?"
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
      content: "Article(s) > When is it safe to force unwrap optionals?"
    - property: og:description
      content: "When is it safe to force unwrap optionals?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/when-is-it-safe-to-force-unwrap-optionals.html
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
  "title": "When is it safe to force unwrap optionals? | Language - free Swift example code",
  "desc": "When is it safe to force unwrap optionals?",
  "link": "https://hackingwithswift.com/example-code/language/when-is-it-safe-to-force-unwrap-optionals",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Some developers force unwrap optionals regularly, and some never do it, but it won’t surprise you to learn that both of those are pretty extreme and will cause you problems.

Some things are optional in Swift not because they may or may not be present, but because of historical reasons. For example, when you create a new application, your `AppDelegate` class has an optional `UIWindow` property called `window`. Or there’s the `Bundle` class, which has an optional `URL` property called `resourceURL` property that points to where your bundle’s resources are.

Both of those are optional, but if either of them fail something is seriously wrong with your application – should you really be trying to carry on running if your app is in such a corrupt state?

Think about when you try to instantiate a view controller with an identifier. Apple’s API here doesn’t throw errors, and doesn’t return an optional view controller – it just hard crashes, because there’s no sensible way for the app to continue if it’s missing a whole storyboard identifier.

You can apply that same logic to your code: if you’re trying to load a `UIImage` from your asset catalog, force unwrapping is a sensible thing to do because if that image is missing it means you’ve either made a serious mistake or your app is in a damaged state and forcing a crash might help limit corruption of user data.

-->

::: details Similar solutions…

<!--
/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap">How to check and unwrap optionals in tests using XCTUnwrap() 
/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer 
/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert()</a>
-->

:::

---

<TagLinks />