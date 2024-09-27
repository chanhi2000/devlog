---
lang: ko-KR
title: "How to force a crash using fatalError()"
description: "Article(s) > How to force a crash using fatalError()"
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
      content: "Article(s) > How to force a crash using fatalError()"
    - property: og:description
      content: "How to force a crash using fatalError()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror.html
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
  "title": "How to force a crash using fatalError() | Language - free Swift example code",
  "desc": "How to force a crash using fatalError()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Swift has a built-in function called `fatalError()`, which forces your application to crash. This might sound useful, but bear with me – this is an indispensable function for anyone serious about writing good Swift.

The `fatalError()` function has a special return type called `Never`, which Swift understands as meaning execution will never continue after this function has been called. As a result, you can use `fatalError()` in methods that return a value but you have nothing sensible to return.

For example, the `cellForRowAt` method must return a `UITableViewCell`, but what happens if you dequeue a reusable cell and try to conditionally typecast it to your custom cell type, only for that to fail? 

Normally you might try to return an empty, unconfigured cell, but that doesn’t really make much sense – if you got a bad cell back you have a bug, and trying to limp along will just cause issues.

Fortunately, `fatalError()` can fix that: if your typecast fails you can call `fatalError()` with a message explaining what happened, and if the typecast fails your app will terminate.

```swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    guard let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath) as? MyCustomCell else {
        fatalError("Failed to load a MyCustomCell from the table.")
    }

    return cell
}
```

Obviously you never want that code to get hit in production, but using `fatalError()` helps stop that from happening – you will now get a very obvious problem in development if things aren’t going well.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert() 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay">How to force a UIView to redraw: setNeedsDisplay() 
/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer 
/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals?</a>
-->

:::

---

<TagLinks />