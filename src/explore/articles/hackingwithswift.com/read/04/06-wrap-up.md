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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/04/06-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/05/overview.md
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
  "link": "https://hackingwithswift.com/read/4/6/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/V0srN0ym4mA" />

That’s another project done, and another huge collection of things learned. You should be starting to get into the swing of things by now, but don't let yourself become immune to your achievements.

In this tutorial alone you've learned about `loadView()`, `WKWebView`, delegation, `URL`, `URLRequest`, `UIToolbar`, `UIProgressView`, KVO and more, so you should be proud of your fantastic accomplishments!

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 4: Easy Browser – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-4-easy-browser",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try extending this app to make sure you fully understand what’s going on:

1. If users try to visit a URL that isn’t allowed, show an alert saying it’s blocked.
2. Try making two new toolbar items with the titles Back and Forward. You should make them use `webView.goBack` and `webView.goForward`.
3. For more of a challenge, try changing the initial view controller to a table view like in project 1, where users can choose their website from a list rather than just having the first in the array loaded up front.

::: tip

Once you have completed project 5, you might like to return here to add in the option to load the list of websites from a file, rather than having them hard-coded in an array.

:::

---

<TagLinks />