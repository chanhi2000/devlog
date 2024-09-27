---
lang: ko-KR
title: "What are Swift error breakpoints?"
description: "Article(s) > What are Swift error breakpoints?"
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
      content: "Article(s) > What are Swift error breakpoints?"
    - property: og:description
      content: "What are Swift error breakpoints?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/what-are-swift-error-breakpoints.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What are Swift error breakpoints? | Xcode - free Swift example code",
  "desc": "What are Swift error breakpoints?",
  "link": "https://hackingwithswift.com/example-code/xcode/what-are-swift-error-breakpoints",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Xcode has a few special breakpoint types, accessed by going to the breakpoint navigator (<kbd>Cmd</kbd>+8) then clicking + in the bottom-left corner. One of the options in that menu is Swift Error Breakpoint, and it allows Xcode to pause when Swift errors are thrown.

Swift error breakpoints are different from catching errors normally – in fact, the two complement each other nicely. If you’re calling someone else’s code (e.g. Apple’s) and that code throws an error, a Swift error breakpoint won’t halt on that. Instead, it will halt on errors thrown by your own code, i.e. wherever you use a `throw` statement. 

Swift error breakpoints are helpful because of the way Swift errors propagate – sometimes an error might be throw five methods deep in your code, then bubble upwards and upwards until they get handled. Once you enable the error breakpoint, Swift will pause where the error is thrown, so you don’t need to dig through your code.

-->

::: details Similar solutions…

<!--
/example-code/xcode/how-to-create-exception-breakpoints-in-xcode">How to create exception breakpoints in Xcode 
/example-code/xcode/what-are-breakpoints">What are breakpoints? 
/example-code/language/how-to-fix-the-error-expression-was-too-complex-to-be-solved-in-reasonable-time">How to fix the error “Expression was too complex to be solved in reasonable time” 
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error">How to add warnings and errors to your code using #warning and #error</a>
-->

:::

---

<TagLinks />