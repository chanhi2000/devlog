---
lang: ko-KR
title: "What are size classes?"
description: "Article(s) > What are size classes?"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What are size classes?"
    - property: og:description
      content: "What are size classes?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-are-size-classes.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What are size classes? | UIKit - free Swift example code",
  "desc": "What are size classes?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-are-size-classes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
Size Classes are the iOS method of creating adaptable layouts that look great on all sizes and orientations of iPhone and iPad. For example, you might want to say that your UI looks mostly the same in portrait and landscape, but on landscape some extra information is visible. You could do this in code by checking for a change in the size of your view controller and trying to figure out what it means, but that's a huge waste of time – particularly now that iPad has multiple different sizes thanks to multitasking in iOS 9.

With Size Classes, you don't think about orientation or even device size. You care about whether you are running in a compact size or regular size, and iOS takes care of mapping that to various device sizes and orientations. iOS will also tell you when your size class changes so you can update your UI.

For example, an iPad app running full screen in portrait has regular horizontal and vertical size classes. In landscape, it also has regular horizontal and vertical size classes. If your app is used in iOS 9 multitasking, then its size class can be one of the following:

- If the apps are running with an even split in landscape, both have compact horizontal and regular vertical size classes.
- If the apps are running with an uneven split in landscape, the primary app has a regular horizontal class and the second has a compact horizontal size class. Both apps have regular vertical classes.
- If the apps are running with an uneven split in portrait, both apps have compact horizontal size classes and regular vertical size classes.

Size Classes can be implemented in code if you want, but it's much easier to use Interface Builder. The key is to change only the bits you have to – try to share as much of your user interface as possible!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-different-layouts-using-size-classes">How to create different layouts using size classes 
/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text 
/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view 
/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes">How to detect when the size or position of a view changes 
/quick-start/swiftui/how-to-control-the-size-of-presented-views">How to control the size of presented views</a>
-->

:::

---

<TagLinks />