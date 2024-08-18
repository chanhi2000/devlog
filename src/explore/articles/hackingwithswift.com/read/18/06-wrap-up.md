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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/18/06-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/19/overview.md
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
  "link": "https://hackingwithswift.com/read/18/6/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/-aVkhSa9QWY" />

Debugging is a unique and essential skill that’s similar but different to regular coding. As you’ve just seen, there are lots of options to choose from, and you will – I promise! – use all of them at some point. Yes, even `print()`.

There's more to learn about debugging, such as the Step Into and Step Out commands, but realistically you need to start with what you have before you venture any further. I would much rather you mastered three of the debugging tools available to you rather than having a weak grasp of all of them.

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 18: Debugging – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-18-debugging",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Temporarily try adding an exception breakpoint to project 1, then changing the call to `instantiateViewController()` so that it uses the storyboard identifier “Bad” – this will fail, but your exception breakpoint should catch it.
2. In project 1, add a call to `assert()` in the `viewDidLoad()` method of <FontIcon icon="fa-brands fa-swift"/>`DetailViewController.swift`, checking that `selectedImage` always has a value.
3. Go back to project 5, and try adding a conditional breakpoint to the start of the `submit()` method that pauses only if the user submits a word with six or more letters.

---

<TagLinks />