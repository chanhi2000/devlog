---
lang: ko-KR
title: "How to create multi-line string literals"
description: "Article(s) > How to create multi-line string literals"
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
      content: "Article(s) > How to create multi-line string literals"
    - property: og:description
      content: "How to create multi-line string literals"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-multi-line-string-literals.html
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
  "title": "How to create multi-line string literals | Language - free Swift example code",
  "desc": "How to create multi-line string literals",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-multi-line-string-literals",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
By default Swift strings can’t span more than one line. One simple way around this is to use the new line character `\n`, but that only works for strings that are displayed – if you’re just trying to format your string nicely, you should use multi-line strings instead.

Multi-line strings work similarly to regular strings in that they support things like string interpolation, but they have the added benefit that they can be spread over as many lines as you need.

To start a string literal, you need to write three double quotation marks, `”””`, then press return. You can then go ahead and write a string as long as you want, including variables and line breaks, before ending your string by pressing return then writing three more double quotation marks.

I've been specific about pressing return because string literals have two important rules: when you open a string using `"""` the content of your string must begin on a new line, and when you end a multi-line string using `”””` that must also begin on a new line.

Here it is in action:

```swift
let longString = """
When you write a string that spans multiple
lines make sure you start its content on a
line all of its own, and end it with three
quotes also on a line of their own.
Multi-line strings also let you write "quote marks"
freely inside your strings, which is great!
"""
```

That creates a new string with several line breaks right there in the definition – much easier to read and write.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators">How to create multi-step animations using phase animators 
/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/quick-start/swiftui/how-to-create-and-compose-custom-views">How to create and compose custom views</a>
-->

:::

---

<TagLinks />