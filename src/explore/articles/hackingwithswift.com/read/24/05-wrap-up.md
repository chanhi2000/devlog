---
lang: ko-KR
title: "Wrap up"
description: "Article(s) > Wrap up"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Wrap up"
    - property: og:description
      content: "Wrap up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/24/05-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/25/overview.md
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Wrap up | Hacking with iOS",
  "desc": "Wrap up",
  "link": "https://hackingwithswift.com/read/24/5/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/yzq0jaNsutE" />

Coming into this project you might thought strings were trivial, but I hope I’ve shown you that there’s more to them than meets the eye.

We’ve looked at how strings are different from arrays, how we can write useful extensions for strings, how Swift lets us combine functions together beautifully, and how `NSAttributedString` lets us add formatting to strings.

Of course, we’ve only just scratched the surface of strings here, but the challenges below will encourage you to write some extensions of your own so you get a better feel for how it works.

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 24: Swift Strings – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-24-swift-strings",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Create a `String` extension that adds a `withPrefix()` method. If the string already contains the prefix it should return itself; if it doesn’t contain the prefix, it should return itself with the prefix added. For example: `"pet".withPrefix("car")` should return “carpet”.
2. Create a `String` extension that adds an `isNumeric` property that returns true if the string holds any sort of number. Tip: creating a `Double` from a `String` is a failable initializer.
3. Create a `String` extension that adds a `lines` property that returns an array of all the lines in a string. So, “this\nis\na\ntest” should return an array with four elements.

---

<TagLinks />