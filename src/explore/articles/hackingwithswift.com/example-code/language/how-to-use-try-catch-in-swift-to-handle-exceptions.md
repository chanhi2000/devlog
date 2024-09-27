---
lang: ko-KR
title: "How to use try/catch in Swift to handle exceptions"
description: "Article(s) > How to use try/catch in Swift to handle exceptions"
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
      content: "Article(s) > How to use try/catch in Swift to handle exceptions"
    - property: og:description
      content: "How to use try/catch in Swift to handle exceptions"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions.html
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
  "title": "How to use try/catch in Swift to handle exceptions | Language - free Swift example code",
  "desc": "How to use try/catch in Swift to handle exceptions",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
The try/catch syntax was added in Swift 2.0 to make exception handling clearer and safer. It's made up of three parts: `do` starts a block of code that might fail, `catch` is where execution gets transferred if any errors occur, and any function calls that might fail need to be called using `try`.

Here's a working example that loads an input.txt file from the app bundle into a string:

```swift
if let filename = Bundle.main.path(forResource: "input", ofType: "txt") {
    do {
        let str = try String(contentsOfFile: filename)
        print(str)
    } catch {
        print("The file could not be loaded")
    }
}
```

There are two other ways of using `try`, but neither are really recommended. The first is like this:

```swift
let filename = "somefile.txt"
let str = try! String(contentsOfFile: filename)
```

Note the exclamation mark: `try!`. This means "I realize this call might throw an exception, but trust me: it never, ever will." This is useful only if you're 100% sure the call is safe. In our example we're loading a file from the app bundle, and if that file isn't there it means our app is corrupted, so it's OK to use here. You don't need do/catch when you use `try!`.

The second option is `try?` which means "if this call throws an exception, just return nil instead." This is closer to the Objective-C way of handling errors, which was a bit scruffy. If this is your preferred way of handling errors, then go for it! You don't need do/catch when use `try?`, but you should check and unwrap the result carefully.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-handle-the-https-requirements-in-ios-with-app-transport-security">How to handle the HTTPS requirements in iOS with App Transport Security 
/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup 
/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group 
/quick-start/swiftui/how-to-handle-pinch-to-zoom-for-views">How to handle pinch to zoom for views 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a>
-->

:::

---

<TagLinks />