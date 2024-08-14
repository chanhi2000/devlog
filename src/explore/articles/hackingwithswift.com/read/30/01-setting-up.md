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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/30/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/30/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/RIiyITB0sQM" />

This technique project is different to all the others so far. You see, I've already written all the code for you and I'm giving you a working app. Sure it has a few bugs here and there, but it's not *too* bad. Well, OK: perhaps it's full of bugs, and perhaps this whole project is about showing you how to find and fix those bugs!

We're going to be using a tool called Instruments. It ships as part of Xcode, and is responsible for profiling your app. "Profiling" is the term used when we monitor performance, memory usage and other information of an app, with the aim of improving efficiency.

I'm not going to make you a master of Instruments, but I can at least show you how it helps you find problems with your code. Plus, along the way you'll learn a few extra bits about how iOS works, including shadows, image caching, cell reuse and more.

You should download the source code for this project from [GitHub (<FontIcon icon="iconfont icon-github"/>`twostraws/HackingWithSwift`)](https://github.com/twostraws/HackingWithSwift) then modify it as we go. When you open the project, go ahead and run the project either on a real device or using the simulator. The real device will always be more trustworthy in terms of performance, but some options are only available in the simulator.

---

<TagLinks />