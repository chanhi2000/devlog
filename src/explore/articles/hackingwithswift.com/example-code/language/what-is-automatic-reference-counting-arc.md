---
lang: ko-KR
title: "What is Automatic Reference Counting (ARC)?"
description: "Article(s) > What is Automatic Reference Counting (ARC)?"
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
      content: "Article(s) > What is Automatic Reference Counting (ARC)?"
    - property: og:description
      content: "What is Automatic Reference Counting (ARC)?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-automatic-reference-counting-arc.html
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
  "title": "What is Automatic Reference Counting (ARC)? | Language - free Swift example code",
  "desc": "What is Automatic Reference Counting (ARC)?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-automatic-reference-counting-arc",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Automatic Reference Counting (ARC) is Swift’s system of tracking memory you’re using. When you create an object from a class, Swift remembers that instance is being referenced precisely once. If you then point another variable at that object, Swift will increment the reference count to 2, because two variables are pointing at the same object. If you now destroy the first variable (perhaps it was inside a function and that function ended), Swift takes the reference count back down to 1.</p>
<p>All this matters because as long as the reference count is greater than 1 the object stays alive. But when the final variable referencing that object goes away, Swift will take the reference count down to zero. As no existing variables point at the object, its RAM can be released. So, ARC is a way of tracking an object’s lifetime efficiently, and for the most part you don’t even notice it happens – Swift does all the work for you.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced()</a></li><li><a href="/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock">How to fix “Ambiguous reference to member 'buildBlock()’”</a></li><li><a href="/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a></li><li><a href="/example-code/language/how-to-count-matching-items-in-an-array">How to count matching items in an array</a></li><li><a href="/example-code/language/how-to-use-iso-8601-dates-with-jsondecoder-and-codable">How to use ISO-8601 dates with JSONDecoder and Codable</a></li></ul>
-->

:::

---

<TagLinks />