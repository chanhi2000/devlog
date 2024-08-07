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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/15/05-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/16/overview.md
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
  "link": "https://hackingwithswift.com/read/15/5/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/zqbWsKHkg74" />

Core Animation is an extraordinary toolkit, and UIKit wraps it in a simple and flexible set of methods. And because it's so simple to use, you really have no excuse for not using it.

In this project you learned about the `animate(withDuration:)` method of `UIView`, spring animations, as well as alpha values and `CGAffineTransform`. 

Remember, animation isn’t just there to make our apps look pretty – it also helps guide the users eyes. So, if you're moving something around conceptually (e.g., moving an email to a folder, showing a palette of paint brushes, rolling a dice, etc) then move it around *visually* too. Your users will thank you for it!

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 15: Animation – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-15-animation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Go back to project 8 and make the letter group buttons fade out when they are tapped. We were using the `isHidden` property, but you'll need to switch to `alpha` because `isHidden` is either true or false, it has no animatable values between.
2. Go back to project 13 and make the image view fade in when a new picture is chosen. To make this work, set the `alpha` to 0 first.
3. Go back to project 2 and make the flags scale down with a little bounce when pressed.

---

<TagLinks />