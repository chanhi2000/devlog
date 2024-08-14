---
lang: ko-KR
title: "What are we working with?"
description: "Article(s) > What are we working with?"
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
      content: "Article(s) > What are we working with?"
    - property: og:description
      content: "What are we working with?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/30/02-what-are-we-working-with.html
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
  "title": "What are we working with? | Hacking with iOS",
  "desc": "What are we working with?",
  "link": "https://hackingwithswift.com/read/30/2/what-are-we-working-with",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/IzRopsZvywQ" />

This is a really simple app, albeit quite a broken one. Obviously the breakages are deliberate, but they are all things I have seen in real, shipping code. The app shows a table view containing garish images of popular internet acronyms.

When one of the rows is tapped, a detail view controller appears, showing the image at full size. Every time you tap on the big image, it adds one to a count of how many times that image was tapped, and that count is shown in the original view controller.

That’s it – that's all the app does. I haven't even used a storyboard, because I want all the problems to be visible (and fixable!) in Swift code.

And how bad are the problems? Well, if you run the app on a device, you'll probably find that it crashes after you’ve viewed several pictures – on my iPhone I get about two-thirds of the way through before it gives up.

You might also notice that scrolling isn’t smooth in the table view, particularly on older devices. If you scroll around a few times iOS might be able to smooth the scrolling a little, but you’ll certainly struggle to get it a flawless 60 frames per second on iPhone, or 120 frames per second on iPad Pro – the gold standard for iOS drawing.

I hope you’ve never seen an app that manages to have all these problems at the same time, but I can guarantee you’ve seen apps that have one or two at a time. The goal of this project is to help you learn the skills needed to identify, fix, and test solutions to these common problems, so let’s dive in now…

---

<TagLinks />