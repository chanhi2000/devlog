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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/10/07-wrap-up.html
next: /explore/articles/hackingwithswift.com/read/11/overview.md
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
  "link": "https://hackingwithswift.com/read/10/7/wrap-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/kKpP62SCxo0" />

`UICollectionView` and `UITableView` are the most common ways of showing lots of information in iOS, and you now know how to use both. You should be able to go back to project 1 and recognize a lot of very similar code, and that's by intention – Apple has made it easy to learn both view types by learning either one.

You've also learned another batch of iOS development, this time `UIImagePickerController`, `UUID`, custom classes and more. You might not realize it yet, but you have enough knowledge now to make a huge range of apps!

Before we finish, you may have spotted one problem with this app: if you quit the app and relaunch, it hasn't remembered the people you added. Worse, the JPEGs are still stored on the disk, so your app takes up more and more room without having anything to show for it!

This is quite intentional, and something we'll return to fix in project 12. Before then, let's take a look at another game…

---

## Review what you learned

Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.

```component VPCard
{
  "title": "Review – Project 10: Names to Faces – Hacking with Swift",
  "desc": "Interactive tests that help gauge your progress learning Swift",
  "link": "https://hackingwithswift.com/review/hws/project-10-names-to-faces",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

---

## Challenge

One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:

1. Add a second `UIAlertController` that gets shown when the user taps a picture, asking them whether they want to rename the person or delete them.
2. Try using `picker.sourceType = .camera` when creating your image picker, which will tell it to create a new image by taking a photo. This is only available on devices (*not on the simulator*) so you might want to check the return value of `UIImagePickerController.isSourceTypeAvailable()` before trying to use it!
3. Modify project 1 so that it uses a collection view controller rather than a table view controller. I recommend you keep a copy of your original table view controller code so you can refer back to it later on.

---

<TagLinks />