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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/12/05-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/13/overview.md
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
  "link": "https://hackingwithswift.com/read/12/5/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/7vQJ35_df9U" />

You *will* use `UserDefaults` in your projects. That isn't some sort of command, just a statement of inevitability. If you want to save any user settings, or if you want to save program settings, it's just the best place for it. And I hope you'll agree it is (continuing a trend!) easy to use and flexible, particularly when your own classes conform to `Codable`.

As you saw, the `NSCoding` protocol is also available. Yes, it takes extra work to use, and can be quite annoying when your data types have lots of properties you need to save, but it does have the added benefit of Objective-C compatibility if you have a mixed codebase.

One proviso you ought to be aware of: please don't consider `UserDefaults` to be safe, because it isn't. If you have user information that is private, you should consider writing to the keychain instead – something we'll look at in project 28.

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 12: UserDefaults – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-12-userdefaults",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Modify project 1 so that it remembers how many times each storm image was shown – you don’t need to show it anywhere, but you’re welcome to try modifying your original copy of project 1 to show the view count as a subtitle below each image name in the table view.
2. Modify project 2 so that it saves the player’s highest score, and shows a special message if their new score beat the previous high score.
3. Modify project 5 so that it saves the current word and all the player’s entries to `UserDefaults`, then loads them back when the app launches.

---

<TagLinks />