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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/33/09-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/34/overview.md
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
  "link": "https://hackingwithswift.com/read/33/9/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

This was an epic tutorial: epic in length, epic in breadth, and I hope you'll agree epic in what we've accomplished. You've built another real app, you've learned about `AVAudioRecorder`, `CKQuery`, `CKRecord`, `CKAsset`, `CKQueryOperation`, `CKQuerySubscription`, `NSPredicate`, `NSSortDescriptor` and more, while also having some bonus practice working with `UIStackView`, `UITableView` and `NSAttributedString`.

So yes, the tutorial was long, but even though you're tired I'd like to think you're pleased with the end result. Take a break, perhaps even a couple of days, then come back and have a think about how you could improve this project. It's so big there are lots of possibilities, not least:

- If the iCloud fetch fails, we tell the user. How about adding a "Retry" button to the user interface?
- We made the `Whistle` class inherit from `NSObject`. Can you make it conform to the `NSCoding` protocol? You might find project 12’s [guide to `NSCoding` and `UserDefaults` in Swift](/explore/articles/hackingwithswift.com/read/12/overview.md) useful.
- Fix the `AddCommentsViewController` class so that it correctly adjusts the text view when the keyboard appears. I already showed you how to do this in [project 16](/explore/articles/hackingwithswift.com/read/16/overview.md).
- Stop people from posting too many line breaks in their comments, or at least trim the comments when shown in the main table view.

Of course, the other thing you could do is perhaps the most important of all: go back through all your code and make sure you handle CloudKit errors gracefully. Seriously, put your hand in the air and repeat after me: I promise to show meaningful iCloud errors to my users.

Now, I know you didn't actually do that, but you really ought to at least *mean* it. As Apple has said, handling errors is the difference between working apps and non-working apps, and you don't want a non-working app, do you?

---

<TagLinks />