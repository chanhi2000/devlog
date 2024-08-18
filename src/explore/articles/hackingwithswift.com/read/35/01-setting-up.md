---
lang: ko-KR
title: "Setting up"
description: "Article(s) > Setting up"
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
      content: "Article(s) > Setting up"
    - property: og:description
      content: "Setting up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/35/01-setting-up.html
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
  "title": "Setting up | Hacking with iOS",
  "desc": "Setting up",
  "link": "https://hackingwithswift.com/read/35/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

If you already read [project 34](/explore/articles/hackingwithswift.com/read/34/overview.md) you'll know how much I love GameplayKit. In that project we used a new class called `GKMinmaxStrategist` to produce an AI that can win at Four in a Row games by looking ahead many moves in advance, but the truth is that we only scratched the surface of what GameplayKit can do.

In this technique project we're going to look at another aspect of GameplayKit that is hugely exciting: randomization. This will, I'm certain, strike you as a strange topic to choose: surely randomization is a solved problem – what makes it interesting enough to warrant discussion, never mind to dedicate a whole technique project?

It's true that generating random data – or at least the pseudo-random that most of us consider good enough – is old news, but the GameplayKit implementation goes a step further: Apple thought specifically about random needs for games, and has built a randomization system that I promise you're going to love, and going to use even when you're not making games.

Don't believe me? Fire up Xcode, create a new playground, and let's begin!

---

<TagLinks />