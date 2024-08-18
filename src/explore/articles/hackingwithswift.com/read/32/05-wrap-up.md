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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/32/05-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/33/overview.md
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
  "link": "https://hackingwithswift.com/read/32/5/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

This project covered a huge amount, including Core Spotlight, `SFSafariViewController`, `NSAttributedString`, automatically sized table view cells, and also Dynamic Type. Plus, you have another project complete, and you're now able to customize it to fit your needs – as nice as a Hacking with Swift browser is, I'm sure you have better ideas!

If you want to work on this project some more, a great place to start is to convert the `projects` array to contain objects of a custom subclass rather than just an array. Not only is it safer coding, but it's also more extensible – you might want to add images or other data, and our array stops being so simple when you add more to it! You should follow much the same technique as taught in [project 12](/explore/articles/hackingwithswift.com/read/12/overview.md) to handle loading and saving.

I'd also recommend you investigate some of the many other formatting options you can use with `NSAttributedString`. Right-click on `NSAttributedString.Key.font` and choose Jump to Definition to see a list, and just try things out! You'll see that Apple has put comments next to each key so you can see what kind of data to provide.

There's one more thing, which is the user changing their Dynamic Type size. This won't happen very often, but if it happens while your app is running you'll receive the `UIContentSizeCategory.didChangeNotification` notification if you subscribe to it using `NotificationCenter`. This is your chance to refresh your user interface so that it’s drawn at a larger size if needed, but many UIKit components should adapt themselves by default.

---

<TagLinks />