---
lang: ko-KR
title: "How to break out of multiple loop levels using labeled statements"
description: "Article(s) > How to break out of multiple loop levels using labeled statements"
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
      content: "Article(s) > How to break out of multiple loop levels using labeled statements"
    - property: og:description
      content: "How to break out of multiple loop levels using labeled statements"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-break-out-of-multiple-loop-levels-using-labeled-statements.html
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
  "title": "How to break out of multiple loop levels using labeled statements | Language - free Swift example code",
  "desc": "How to break out of multiple loop levels using labeled statements",
  "link": "https://hackingwithswift.com/example-code/language/how-to-break-out-of-multiple-loop-levels-using-labeled-statements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift has a built-in `break` keyword that escapes the current loop you’re in, but what happens if you’re in two loops or more and want to break out of them all?

Swift’s labeled statements are designed to solve this problem: they let you exit any number of loops or conditions, so execution picks up directly after the block you labeled.

For example, consider this pair of loops that will find the first number that, when squared, makes 144:

```swift
let numbers = 1...100

for number1 in numbers {
    for number2 in numbers {
        if number1 == number2 && number1 * number2 == 144 {
            print("Square found: \(number1)")
        }
    }
}
```

As soon as we’ve found that square, we can stop looking. The problem is, a regular `break` won’t work here because it will exit only the inner loop – the outer loop will keep counting 13, 14, 15, and so on up to 100. However, if we add a label to the outer loop we can break out of both loops at once, like this:

```swift
outerLoop: for number1 in numbers {
    for number2 in numbers {
        if number1 == number2 && number1 * number2 == 144 {
            print("Square found: \(number1)")
            break outerLoop
        }
    }
}
```

Notice the `outerLoop:` before the `for number1` loop, and also the matching `break outerLoop` – that will cause both loops to exit as soon as the correct number is found.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type” 
/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out 
/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out">How to get bordered buttons that stand out 
/example-code/system/how-to-spell-out-numbers-using-numberformatters-spellout-style">How to spell out numbers using NumberFormatter's spellOut style 
/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach">How to create views in a loop using ForEach</a>
-->

:::

---

<TagLinks />