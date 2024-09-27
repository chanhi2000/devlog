---
lang: ko-KR
title: "Measuring execution speed using CFAbsoluteTimeGetCurrent()"
description: "Article(s) > Measuring execution speed using CFAbsoluteTimeGetCurrent()"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Measuring execution speed using CFAbsoluteTimeGetCurrent()"
    - property: og:description
      content: "Measuring execution speed using CFAbsoluteTimeGetCurrent()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/measuring-execution-speed-using-cfabsolutetimegetcurrent.html
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
  "title": "Measuring execution speed using CFAbsoluteTimeGetCurrent() | System - free Swift example code",
  "desc": "Measuring execution speed using CFAbsoluteTimeGetCurrent()",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/measuring-execution-speed-using-cfabsolutetimegetcurrent",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
It’s often important to know at runtime how long it took for some code to run. For example, you might want to make sure your game’s AI takes at least two seconds to think before making its move, so that players don’t get confused when there’s no thinking time.

iOS comes with a built-in function called `CFAbsoluteTimeGetCurrent()`, which reads the current system time measured as seconds since January 1st 2001. It’s sent back as a `Double`, so you get sub-second accuracy as best as the system stores it.

To use the function, call it once before your work, then again after, and subtract the after from the before to get the difference, like this:

```swift
let start = CFAbsoluteTimeGetCurrent()
// run your work
let diff = CFAbsoluteTimeGetCurrent() - start
print("Took \(diff) seconds")
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine">How to control the pitch and speed of audio using AVAudioEngine 
/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a>
-->

:::

---

<TagLinks />