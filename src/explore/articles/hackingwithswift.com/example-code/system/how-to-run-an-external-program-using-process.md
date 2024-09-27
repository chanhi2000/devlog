---
lang: ko-KR
title: "How to run an external program using Process"
description: "Article(s) > How to run an external program using Process"
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
      content: "Article(s) > How to run an external program using Process"
    - property: og:description
      content: "How to run an external program using Process"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-an-external-program-using-process.html
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
  "title": "How to run an external program using Process | System - free Swift example code",
  "desc": "How to run an external program using Process",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-an-external-program-using-process",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you’re building an app for macOS or any other platform where you can run external programs, you can draw on Foundation’s `Process` class to do almost all the work for you.

First, create an instance of `Process`:

```swift
let task = Process()
```

Next, tell it which command to run. I’ll make it run the Swift compiler:

```swift
task.executableURL = URL(fileURLWithPath: "/usr/bin/swift")
```

Finally, pass in an array of arguments you want to give to the program. For example, if you have some Swift code you wanted to run you could pass the filename to that code:

```swift
let filename = "input.swift"
task.arguments = [filename]
```

When you’re ready, use the `run()` method to run the full command, being prepared to catch any errors that are thrown:

```swift
try task.run()
```

If you want to read the output or error from your program, you need to create an instance of `Pipe` and attach it either to `standardOutput` or `standardError` depending on your needs:

```swift
let outputPipe = Pipe()
let errorPipe = Pipe()

task.standardOutput = outputPipe
task.standardError = errorPipe
```

Make sure you do that *before* you call `run()`. 

To read the output or error data once your program completes, you need to get a file handle from the pipe then read it out as an instance of `Data`, like this:

```swift
let outputData = outputPipe.fileHandleForReading.readDataToEndOfFile()
let errorData = errorPipe.fileHandleForReading.readDataToEndOfFile()
```

Finally, convert that data into strings if you need to, like this:

```swift
let output = String(decoding: outputData, as: UTF8.self)        
let error = String(decoding: errorData, as: UTF8.self)
```

And that’s it – you’ve run a program with custom arguments, and read its output back.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects">How to use @ObservedObject to manage state from external objects 
/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects 
/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert() 
/example-code/language/how-to-check-your-program-state-using-precondition">How to check your program state using precondition() 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a>
-->

:::

---

<TagLinks />