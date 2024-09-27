---
lang: ko-KR
title: "How to check for internet connectivity using NWPathMonitor"
description: "Article(s) > How to check for internet connectivity using NWPathMonitor"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check for internet connectivity using NWPathMonitor"
    - property: og:description
      content: "How to check for internet connectivity using NWPathMonitor"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-benchmark-app-launch-time-using-xctossignpostmetricapplicationlaunch.html
date: 2019-10-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Testing - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/testing/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check for internet connectivity using NWPathMonitor | Testing - free Swift example code",
  "desc": "How to check for internet connectivity using NWPathMonitor",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-benchmark-app-launch-time-using-xctossignpostmetricapplicationlaunch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Optimizing your application’s launch time helps ensure users spend more time using your app and less time staring at your launch screen, and helpfully Xcode comes with a built-in way to help us measure and monitor that time: `XCTOSSignpostMetric.applicationLaunch`.

To use this, start a new `measure()` block, asking for that value as one of the metrics you want to track. Given that is focusing specifically on launch time, it’s probably a good idea to ask for that single metric. When you’re ready, call `XCUIApplication().launch()` to launch your app, like this:

```swift
func testLaunchPerformance() {
    measure(metrics: [XCTOSSignpostMetric.applicationLaunch]) {
        XCUIApplication().launch()
    }
}
```

Like a regular `measure()` block, this causes your test to be run multiple times to ensure a fair spread of readings. When it finishes, you’ll be able to set the baseline for your launch time, to make sure changes made in the future don’t dramatically affect it.

Although Apple doesn’t specify a precise number of seconds that we should aim for with app open times, they *do* say “a low number of seconds”. Based on my experience, anything more than three seconds on the newest device will feel slow, particularly because it’s likely to be five or more seconds on older devices.

**Tip:** If you create a new UI Test target you’ll get an application launch test included in the template.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time 
/example-code/system/how-to-run-code-at-a-specific-time">How to run code at a specific time 
/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture">How to make two gestures recognize at the same time using simultaneousGesture() 
/example-code/system/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter">How to show a relative date and time using RelativeDateTimeFormatter</a>
-->

:::

---

<TagLinks />