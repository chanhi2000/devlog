---
lang: ko-KR
title: "How to add warnings and errors to your code using #warning and #error"
description: "Article(s) > How to add warnings and errors to your code using #warning and #error"
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
      content: "Article(s) > How to add warnings and errors to your code using #warning and #error"
    - property: og:description
      content: "How to add warnings and errors to your code using #warning and #error"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error.html
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
  "title": "How to add warnings and errors to your code using #warning and #error | Language - free Swift example code",
  "desc": "How to add warnings and errors to your code using #warning and #error",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Sometimes it’s important to add warnings and even errors to your code. For example, you might want to mark code as needing to be fixed, or mark placeholder values that must be filled in by whoever is using your code.

Swift has compiler directives that help us mark such issues in our code: `#warning` and `#error`. The former will force Xcode to issue a warning when building your code, and the latter will issue a compile error so your code won’t build at all. 

Both of these work in the same way: `#warning("Some message")` and `#error("Some message")`. For example:

```swift
func encrypt(_ string: String, with password: String) -> String {
    #warning("This is bad method of encryption")
    return password + String(string.reversed()) + password
}

struct Configuration {
    var apiKey: String {
        // if you uncomment the below it will stop your code from building
        // #error("Please add your API key below then delete this line.")
        return "Enter your API key here"
    }
}    
```

Both `#warning` and `#error` work alongside the existing `#if` compiler directive, only being triggered if the condition being evaluated is true. For example:

```swift
#if os(macOS)
#error("MyLibrary is not supported on macOS.")
#endif
```

Both `#warning` and `#error` are useful for different reasons:

- `#warning` is mainly useful as a reminder to yourself or others that some work is incomplete. Xcode templates often use `#warning` to mark method stubs that you should replace with your own code. Think of `#warning` as being like a `FIXME` comment that automatically shows up in your build output.
<li>`#error` is mainly useful if you ship a library that requires other developers to provide some data. For example, an authentication key for a web API – you want users to include their own key, so using `#error` will force them to change that code before continuing.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />