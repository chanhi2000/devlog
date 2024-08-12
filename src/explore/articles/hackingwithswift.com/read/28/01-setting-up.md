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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/28/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/28/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/E5F5vaoeYU0" />

This project will introduce you to three important iOS technologies together: Touch ID, Face ID and the keychain. The first two are used to identify users biometrically using the fingerprint sensor on iPhones and iPads, or the face scanner on iPhone X or similar; the latter is a secure, encrypted data storage area on every device that you can read and write to.

Of course, there's little point learning about technologies without using them, so this project will have you build a secure text editor. Users can type whatever they want and have it saved, but to read it again they'll need to unlock the app using Touch ID or Face ID.

You might remember in project 12 that I said `UserDefaults` is great for its simplicity but isn't good for private data. Well, the keychain is securely encrypted, so we can be assured that data we put there is safe.

This project is modeled on project 19, where you met `UITextView` for the first time. This means we'll need to use the same keyboard detection and adjustment code – if you already completed project 19, you might find it easiest to copy and paste your code as needed.

To get started, make a new Single View App project in Xcode named Project28.

---

<TagLinks />