---
lang: ko-KR
title: "What is a throwing function?"
description: "Article(s) > What is a throwing function?"
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
      content: "Article(s) > What is a throwing function?"
    - property: og:description
      content: "What is a throwing function?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-throwing-function.html
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
  "title": "What is a throwing function? | Language - free Swift example code",
  "desc": "What is a throwing function?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-throwing-function",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Throwing functions are those that will flag up errors if problems happen, and Swift requires you to handle those errors in your code.

To make a throwing function, just write `throws` before your function’s return value. You should define the error types you can throw, so users of this function know what to expect.

As an example, try adding this custom error enum to a playground:

```swift
enum LoginErrors: Error {
    case badUsername
    case badPassword
}
```

We can now use that to create a throwing function called `login()`. If the username is empty we’ll throw `badUsername`, if the password is empty we’ll throw `badPassword`, and if both are non-empty we’ll return true:

```swift
func login(username: String, password: String) throws -> Bool {
    if username.isEmpty { throw LoginErrors.badUsername }
    if password.isEmpty { throw LoginErrors.badPassword }
    return true
}
```

Because that function throws errors, it must be called using either `try`, `try?`, or `try!`.

There’s a subtle difference between throwing functions and functions that return optionals, but it’s usually a better idea to use throwing functions if there might be several different reasons why the function failed.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-call-async-throwing-functions">How to call async throwing functions 
/example-code/testing/how-to-test-throwing-functions">How to test throwing functions 
/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function? 
/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function? 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a>
-->

:::

---

<TagLinks />