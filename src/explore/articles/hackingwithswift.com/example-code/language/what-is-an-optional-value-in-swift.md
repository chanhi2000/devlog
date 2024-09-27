---
lang: ko-KR
title: "What is an optional value in Swift?"
description: "Article(s) > What is an optional value in Swift?"
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
      content: "Article(s) > What is an optional value in Swift?"
    - property: og:description
      content: "What is an optional value in Swift?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift.html
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
  "title": "What is an optional value in Swift? | Language - free Swift example code",
  "desc": "What is an optional value in Swift?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift optionals are one of the most confusing parts of the language for beginners, but actually are fairly easy to understand. Put simply, if I declare a variable as an integer, that means it must hold a number. That number might be 0, 1, -1, 159, -758119, or whatever, but it's definitely a number. This works great for telling me, for example, where in an array a certain element can be found.

But what happens if I ask for the position of an element that doesn't exist in an array? Clearly returning 0 or any positive number isn't helpful, because you wouldn't be able to tell whether 0 meant "not found" or meant "found at the first position in an array." That's where optional values come in: an optional data type might have a value (0, 1, -1, etc) or might have no value at all.

Being able to say "has no value" for any kind of data is really important, and it's baked right into the core of Swift. You see, by default Swift won't let you work directly with optional values, because trying to work on data that isn't there causes a crash – imagine trying to uppercase someone's name when they haven't entered it yet. So, Swift forces you to check and unwrap optionals safely: if the optional has a value do something with it, otherwise do something else.

-->

::: details Similar solutions…

<!--
/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference? 
/example-code/language/how-to-use-flatmap-with-an-optional-value">How to use flatMap() with an optional value 
/example-code/language/how-to-use-map-with-an-optional-value">How to use map() with an optional value 
/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced() 
/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a>
-->

:::

---

<TagLinks />