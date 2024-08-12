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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/27/07-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/28/overview.md
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
  "link": "https://hackingwithswift.com/read/27/7/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/Q2-mywgrF7I" />

I could easily have written twice as much about Core Graphics, because it's capable of some extraordinary effects. Clipping paths, gradients, blend modes and more are just a few lines of code away, so there really is no excuse not to give them a try! And if you don't give it a try yourself, don't worry: we'll be drawing with Core Graphics in project 29, so you can't avoid it.

This project has given you a sandbox where you can play around with various Core Graphics techniques easily, so I would highly encourage you to spend more time tinkering with the code in your project. There are some suggested challenges below, but you can also use code completion to try new functions, change my values to others to see what happens, and so on. Playing with code like this can help you to discover new functionality, and will also help you remember more later. Have fun!

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 27: Core Graphics – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-27-core-graphics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Pick any emoji and try creating it using Core Graphics. You should find some easy enough, but for a harder challenge you could also try something like the star emoji.
2. Use a combination of `move(to:)` and `addLine(to:)` to create and stroke a path that spells “TWIN” on the canvas.
3. Go back to project 3 and change the way the selected image is shared so that it has some rendered text on top saying “From Storm Viewer”. This means reading the `size` property of the original image, creating a new canvas at that size, drawing the image in, then adding your text on top.

---

<TagLinks />