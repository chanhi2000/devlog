---
lang: ko-KR
title: "Fixing ”Ambiguous reference to member when using ceil or round”"
description: "Article(s) > Fixing ”Ambiguous reference to member when using ceil or round”"
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
      content: "Article(s) > Fixing ”Ambiguous reference to member when using ceil or round”"
    - property: og:description
      content: "Fixing ”Ambiguous reference to member when using ceil or round”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round.html
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
  "title": "Fixing ”Ambiguous reference to member when using ceil or round” | Language - free Swift example code",
  "desc": "Fixing ”Ambiguous reference to member when using ceil or round”",
  "link": "https://hackingwithswift.com/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
If you've ever come across the error message "No 'ceil' candidates produce the expected contextual result type 'Int'" – which can happen with calls to `ceil()`, `floor()`, and `round()` – it's usually down to Swift being unable to satisfy type requirements you have asked for.

Put simply, you might think calling `ceil()` rounds a floating-point number up to its nearest integer, but actually it doesn't return an integer at all: if you give it a `Float` it returns a `Float`, and if you give it a `Double` it returns a `Double`.

So, this code works because `c` ends up being a `Double`:

```swift
let a = 0.5
let c = ceil(a)
```

…whereas this code causes your exact issue because it tries to force a `Double` into an `Int` without a typecast:

```swift
let c: Int = ceil(a)
```

If you need `c` to be an integer, the solution is to convert the return value of `ceil()` to be an integer, like this:

```swift
let c = Int(ceil(a))
```

The same is true of the `floor()` and `round()` functions, so you'd need the same solution.

-->

::: details Similar solutions…

<!--
/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource" 
/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier" 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a>
-->

:::

---

<TagLinks />