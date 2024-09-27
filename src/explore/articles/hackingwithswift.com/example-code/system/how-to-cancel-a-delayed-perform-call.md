---
lang: ko-KR
title: "How to cancel a delayed perform() call"
description: "Article(s) > How to cancel a delayed perform() call"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to cancel a delayed perform() call"
    - property: og:description
      content: "How to cancel a delayed perform() call"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-cancel-a-delayed-perform-call.html
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
  "title": "How to cancel a delayed perform() call | System - free Swift example code",
  "desc": "How to cancel a delayed perform() call",
  "link": "https://hackingwithswift.com/example-code/system/how-to-cancel-a-delayed-perform-call",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
You can make a method call run after a number of seconds have elapsed using `perform(_:withObject:afterDelay:)`, like this:

```swift
perform(#selector(yourMethodHere), with: nil, afterDelay: 1)
```

However, what if you change your mind, and decide you don't want `yourMethodHere()` to be called? As long as you act before that timer expires, you have two options: cancel that specific delayed call, or cancel all delayed calls.

To cancel that specific method call, you need to use the method `cancelPreviousPerformRequests(withTarget:)` on `NSObject`. Provide it with a target (where the method was going to be called), as well as the same selector and object you used when calling `perform()`, and it will cancel that delayed call.

For example:

```swift
// set up a delayed call…
perform(#selector(yourMethodHere), with: nil, afterDelay: 1)

// …then immediately cancel it
NSObject.cancelPreviousPerformRequests(withTarget: self, selector: #selector(yourMethodHere), object: nil)
```

Being able to filter the cancellation by both selector and object means you can be very specific: "cancel the printing call for this filename."

If you've made a number of delayed calls and want to cancel them all – very helpful if you're about to leave a view controller, for example, and want to abandon any queued work – you can use this method call instead:

```swift
NSObject.cancelPreviousPerformRequests(withTarget: self)
```

That will cancel every call that was queued up on `self`, regardless of which selectors and objects were used.

If you're making delayed calls on a specific object, just use that object in place of `self`. For example:

```swift
myObj.perform(#selector(yourMethodHere), with: nil, afterDelay: 1)
NSObject.cancelPreviousPerformRequests(withTarget: myObj, selector: #selector(yourMethodHere), object: nil)
```

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-cancel-a-task">How to cancel a Task 
/quick-start/concurrency/how-to-cancel-a-task-group">How to cancel a task group 
/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform">How to run code after a delay using asyncAfter() and perform() 
/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger">How to perform sentiment analysis on a string using NLTagger 
/example-code/uikit/how-to-perform-a-segue-programmatically-using-performsegue">How to perform a segue programmatically using performSegue()</a>
-->

:::

---

<TagLinks />