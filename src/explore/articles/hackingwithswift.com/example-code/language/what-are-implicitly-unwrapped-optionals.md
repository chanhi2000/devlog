---
lang: ko-KR
title: "What are implicitly unwrapped optionals?"
description: "Article(s) > What are implicitly unwrapped optionals?"
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
      content: "Article(s) > What are implicitly unwrapped optionals?"
    - property: og:description
      content: "What are implicitly unwrapped optionals?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-implicitly-unwrapped-optionals.html
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
  "title": "What are implicitly unwrapped optionals? | Language - free Swift example code",
  "desc": "What are implicitly unwrapped optionals?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-implicitly-unwrapped-optionals",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Regular Swift optionals, e.g. `String?`, may contain a value, but may also contain nil – they might have no value at all – so before we can use them we must check to see what they contain. These are a useful way of expressing uncertainty, because a full `String` (not optional) must always contain a string.

An implicitly unwrapped optional – written as `String!` – may also contain a value or be nil, but they don’t need to be checked before they are used. Checking an optionals value is called “unwrapping”, because we’re looking inside the optional box to see what it contains. *Implicitly unwrapping* that optional means that it’s still optional and might be nil, but Swift eliminates the need for unwrapping.

Now, you might read that and think “great! I hate unwrapping optionals with `if let`”, but there’s a problem: if you try to use a value that contains nil your code will crash. You can’t catch the error and you can’t stop it from happening: your code *will* crash. Implicitly unwrapped optionals require you to be absolutely sure there’s a value there before you use them.

And *now* you might be thinking “why would I want to take that risk?” The usual reason is that there are some things we all know will start life as being nil, but will be non-nil by the time we need them and won’t be nil again. For example, when you create outlets using Interface Builder it creates them all as implicitly unwrapped optionals because when your view controller is being created those outlets will all be nil, but shortly after they get set to real views and those won’t be destroyed until the whole view controller is destroyed.

Broadly speaking, you should avoid implicitly unwrapped optionals unless you’re certain they are safe – and even then you should think twice.

-->

::: details Similar solutions…

<!--
/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference? 
/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap">How to check and unwrap optionals in tests using XCTUnwrap() 
/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals? 
/quick-start/concurrency/understanding-how-global-actor-inference-works">Understanding how global actor inference works 
/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a>
-->

:::

---

<TagLinks />