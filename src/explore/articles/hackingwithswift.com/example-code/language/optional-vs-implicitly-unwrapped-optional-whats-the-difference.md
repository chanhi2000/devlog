---
lang: ko-KR
title: "Optional vs implicitly unwrapped optional: what’s the difference?"
description: "Article(s) > Optional vs implicitly unwrapped optional: what’s the difference?"
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
      content: "Article(s) > Optional vs implicitly unwrapped optional: what’s the difference?"
    - property: og:description
      content: "Optional vs implicitly unwrapped optional: what’s the difference?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference.html
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
  "title": "Optional vs implicitly unwrapped optional: what’s the difference? | Language - free Swift example code",
  "desc": "Optional vs implicitly unwrapped optional: what’s the difference?",
  "link": "https://hackingwithswift.com/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>When you’re just learning Swift, the difference between an optional (<code>String?</code>), an implicitly unwrapped optional (<code>String!</code>), and a regular type (<code>String</code>) can seem awfully confusing. Here’s a quick summary that should explain the difference:</p>
<p>When you use <code>String</code> you’re saying this will always have a string inside, and can never have nothing inside. It might be an empty string (<code>""</code>), but even an empty string is still a string.</p>
<p>When you use <code>String?</code> you’re saying this might have a string inside, but it might have nothing at all inside –&nbsp;not even an empty string. Swift won’t let you use these without unwrapping them, which is usually done using <code>if let</code>.</p>
<p>When you use <code>String!</code> you’re saying this might have a string inside, but it might have nothing at all inside –&nbsp;not even an empty string. However, Swift lets you use these as if they were a <code>String</code>, as if they always <em>do</em> have a value, but if you try to use a nil value by accident your code will crash. This effectively lets you say “I know this <em>might</em> be nil, but I’m so sure it has a value that I’m willing for my program to crash if I’m wrong.”</p>
<p>So: <code>String</code> is definitely a string, <code>String?</code> might be nil or might be a string, and <code>String!</code> might be nil but when you use it you’re absolutely sure it has a string.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-are-implicitly-unwrapped-optionals">What are implicitly unwrapped optionals?</a></li><li><a href="/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a></li><li><a href="/example-code/language/what-is-optional-chaining">What is optional chaining?</a></li><li><a href="/example-code/language/whats-the-difference-between-init-and-init">What’s the difference between init?() and init()?</a></li><li><a href="/example-code/language/how-to-find-the-difference-between-two-arrays">How to find the difference between two arrays</a></li></ul>
-->

:::

---

<TagLinks />