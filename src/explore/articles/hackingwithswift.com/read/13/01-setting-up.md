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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/13/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/13/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/_h4fv_6vjYg" />

In project 10 you learned how to use `UIImagePickerController` to select and import a picture from your user's photo library. In this project, we're going to add the reverse: writing images back to the photo library. But because you're here to learn as much as possible, I'm also going to introduce you to another UIKit component, `UISlider`, and also a little bit of Core Image, which is Apple's high-speed image manipulation toolkit.

The project we're going to make will let users choose a picture from their photos, then manipulate it with a series of Core Image filters. Once they are happy, they can save the processed image back to their photo library.

To get started, create a new Single View App project in Xcode and name it Project13.

---

<TagLinks />