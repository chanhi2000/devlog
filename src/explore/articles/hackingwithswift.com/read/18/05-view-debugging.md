---
lang: ko-KR
title: "View debugging"
description: "Article(s) > View debugging"
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
      content: "Article(s) > View debugging"
    - property: og:description
      content: "View debugging"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/18/05-view-debugging.html
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
  "title": "View debugging | Hacking with iOS",
  "desc": "View debugging",
  "link": "https://hackingwithswift.com/read/18/5/view-debugging",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/01K6Oy5ktaQ" />

The last debugging technique I want to look at is view debugging, Xcode comes with a marvelous feature called Capture View Hierarchy, and when it's used your see your current view layout inside Xcode with thin gray lines around all the views. 

First, launch a project with some interesting UI. Project 13, for example, has enough in there to be interesting. Now run the program as normal, then in Xcode go to the Debug menu and choose View Debugging > Capture View Hierarchy. After a few seconds of thinking, Xcode will show you a screenshot of your app’s UI.

Here’s the clever part: if you click and drag inside the hierarchy display, you'll see you're actually viewing a 3D representation of your view, which means you can look behind the layers to see what else is there. The hierarchy automatically puts some depth between each of its views, so they appear to pop off the canvas as you rotate them.

This debug mode is perfect for times when you know you've placed your view but for some reason can't see it – often you'll find the view is behind something else by accident.


---

<TagLinks />