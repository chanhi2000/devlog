---
lang: ko-KR
title: "How to repeat code when debugging using the instruction pointer"
description: "Article(s) > How to repeat code when debugging using the instruction pointer"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to repeat code when debugging using the instruction pointer"
    - property: og:description
      content: "How to repeat code when debugging using the instruction pointer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-repeat-code-when-debugging-using-the-instruction-pointer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to repeat code when debugging using the instruction pointer | Xcode - free Swift example code",
  "desc": "How to repeat code when debugging using the instruction pointer",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-repeat-code-when-debugging-using-the-instruction-pointer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Have you ever been debugging a problem in your code and really wished you could repeat a chunk of code without having to start from scratch?

This usually happens because you’ve narrowed the problem down to a small piece of your program, but accidentally stepped over too many lines or didn’t fully understand the problem the first time, and you’ll be pleased to know Xcode has a built-in way to help: you can move the instruction pointer.

When you place a breakpoint in your code, Xcode will pause when that line is reached, and you can step through your code from there. However, what many folks don’t realize is that you can move execution *backwards* too – you can literally ask Xcode to wind back 1, 2, or 20 lines so that it runs them again, giving you a second chance to watch what happens as they execute.

To try it yourself, wait until your breakpoint is hit, and you should see a light green-colored line pointing to where your code was paused – it will say something like “Thread 1: breakpoint 1.1”.

Directly to the left of that message is a box with three horizontal lines – you can click on that and drag it up or down as you need. When you release Xcode will give you a warning: are you sure you want to move the instruction pointer? Keep in mind that if you try to access some memory you just released, you’ll hit problems – use this power wisely!

When you click Move, execution will advance or rewind as needed, so you can continue stepping through your code as you need.

This feature by itself is very clever, but becomes brilliant with one extra feature: the ability for LLDB to inject changes directly into your app.

The command here is called `expr`, or just `e`, and is typed directly into the “(lldb)” prompt inside Xcode. For example, this will change the `username` variable to “twostraws”

```swift
e username = "twostraws"
```

This allows you to wind execution backwards a little, set your app state exactly as you want, then step through until you find your bug – and do this as often as you need until the problem is identified.

-->

::: details Similar solutions…

<!-- 
/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging">How to make Xcode play sounds while debugging 
/example-code/system/how-to-make-an-action-repeat-using-timer">How to make an action repeat using Timer 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/example-code/strings/how-to-repeat-a-string">How to repeat a string</a>
-->

:::

---

<TagLinks />