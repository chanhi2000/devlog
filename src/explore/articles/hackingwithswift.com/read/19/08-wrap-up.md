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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/19/08-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/20/overview.md
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
  "link": "https://hackingwithswift.com/read/19/8/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/e64-Qj2Tu_Y" />

I'll tell you what: *I'm* feeling tired and I didn't even have to learn anything to write this project – I can't imagine how tired you are! But please don't be too disheartened: this project builds the the bridge between JavaScript and Swift, and now that bridge is built you can add your own Swift functionality on top.

Some of the code isn't pleasant to work with, and certainly I wish iOS would just figure out text view insets automatically for keyboards, but you're through it now so your project is done. Even though this was a hard project, I did cut quite a few corners to make the code as easy as possible, so again I want to encourage you to try creating another extension and see how Apple's example code is different from mine.

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 19: JavaScript Injection – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-19-javascript-injection",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Add a bar button item that lets users select from a handful of prewritten example scripts, shown using a `UIAlertController` – at the very least your list should include the example we used in this project.
2. You're already receiving the URL of the site the user is on, so use `UserDefaults` to save the user's JavaScript for each site. You should convert the URL to a `URL` object in order to use its `host` property.
3. For something bigger, let users name their scripts, then select one to load using a `UITableView`.

---

<TagLinks />