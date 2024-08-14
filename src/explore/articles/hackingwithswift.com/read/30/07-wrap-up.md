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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/30/07-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/31/overview.md
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
  "link": "https://hackingwithswift.com/read/30/7/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/Cy8NswcPZAE" />

Hold up your right hand and repeat after me: “I will never ship an app without running it through Instruments first.” It doesn't take long, it's not difficult, and I promise it will pay off – your user interfaces will be smoother, your code will run faster, and you'll avoid wasting memory, all using a tool that's completely free and you already have installed.

I have, predictably, only touched briefly on the many features of Instruments, Xcode, and the Simulator here, but I hope I've inspired you to learn more. Instruments can tell you exactly what each CPU core is doing at any given time, it can tell you when every object was created and when it was destroyed along with what code triggered it, and it can even simulate user interface interactions to help you stress test your apps!

At the same time, I also snuck in a few more techniques for you to try in your own apps – layer shadows, Core Graphics clipping, and how `UIImage` has an automatic cache for when you need it.

So: all in all another great technique project, and you’ve learned some important skills that will be useful in every iOS project you make from now on.

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 30: Instruments – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-30-instruments",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Go through project 30 and remove all the force unwraps. Note: implicitly unwrapped optionals are not the same thing as force unwraps – you’re welcome to fix the implicitly unwrapped optionals too, but that’s a bonus task.
2. Pick any of the previous 29 projects that interests you, and try exploring it using the Allocations instrument. Can you find any objects that are persistent when they should have been destroyed?
3. For a tougher challenge, take the image generation code out of `cellForRowAt`: generate all images when the app first launches, and use those smaller versions instead. For bonus points, combine the `getDocumentsDirectory()` method I introduced in project 10 so that you save the resulting cache to make sure it never happens again.

As a reminder, here’s the code for `getDocumentsDirectory()`:

```swift
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}
```

---

<TagLinks />