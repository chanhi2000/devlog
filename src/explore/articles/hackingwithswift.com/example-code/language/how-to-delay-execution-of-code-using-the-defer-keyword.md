---
lang: ko-KR
title: "How to delay execution of code using the defer keyword"
description: "Article(s) > How to delay execution of code using the defer keyword"
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
      content: "Article(s) > How to delay execution of code using the defer keyword"
    - property: og:description
      content: "How to delay execution of code using the defer keyword"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword.html
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
  "title": "How to delay execution of code using the defer keyword | Language - free Swift example code",
  "desc": "How to delay execution of code using the defer keyword",
  "link": "https://hackingwithswift.com/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
The `defer` keyword is new in Swift 2 and lets you schedule some code to be run at a later date. That later date is when your code exits its current scope, which might be when a function returns or at the end of a loop, for example.

If you've used other programming languages, `defer` will seem similar to `try/finally`. Any code you defer will run no matter what, even if you throw an exception.

In the example code below, the `closeFile()` function will get called no matter how the `writeLog()` function ends:

```swift
func writeLog() {
    let file = openFile()
    defer { closeFile(file) }

    let hardwareStatus = fetchHardwareStatus()
    guard hardwareStatus != "disaster" else { return }
    file.write(hardwareStatus)

    let softwareStatus = fetchSoftwareStatus()
    guard softwareStatus != "disaster" else { return }
    file.write(softwareStatus)

    let networkStatus = fetchNetworkStatus()
    guard networkStatus != "disaster" else { return }
    file.write(networkStatus)
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/measuring-execution-speed-using-cfabsolutetimegetcurrent">Measuring execution speed using CFAbsoluteTimeGetCurrent() 
/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform">How to run code after a delay using asyncAfter() and perform() 
/quick-start/swiftui/how-to-delay-an-animation">How to delay an animation 
/example-code/language/how-to-use-the-rethrows-keyword">How to use the rethrows keyword 
/example-code/language/what-does-the-open-keyword-do">What does the open keyword do?</a>
-->

:::

---

<TagLinks />