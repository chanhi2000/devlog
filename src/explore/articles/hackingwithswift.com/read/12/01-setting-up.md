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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/12/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/12/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/Lf_FCb3nMWU" />

This is our fourth technique project, and we're going to go back to project 10 and fix its glaring bug: all the names and faces you add to the app don't get saved, which makes the app rather pointless!

We're going to fix this using a new class called `UserDefaults` and a new protocol `NSCoding` – it’s similar in intent to the `Codable` protocol we used when working with JSON, but the former is available only to Swift developers whereas the latter is also available to Objective-C developers.

Along the way you’ll also use the classes `NSKeyedArchiver` and `NSKeyedUnarchiver` (for use with `NSCoding`), and `JSONEncoder` and `JSONDecoder` (for use with `Codable`), all of which are there to convert custom objects into data that can be written to disk.

Putting all that together, we're going to update project 10 so that it saves its `people` array whenever anything is changed, then loads when the app runs.

We're going to be modifying project 10 twice over, once for each method of solving the problem, so I suggest you take a copy of the project 10 folder twice – call the copies project12a and project12b.

---

<TagLinks />