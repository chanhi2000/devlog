---
lang: ko-KR
title: How to use decorative images to reduce screen reader clutter
description: Article(s) > How to use decorative images to reduce screen reader clutter
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to use decorative images to reduce screen reader clutter
    - property: og:description
      content: How to use decorative images to reduce screen reader clutter
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use decorative images to reduce screen reader clutter | SwiftUI by Example",
  "desc": "How to use decorative images to reduce screen reader clutter",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI automatically uses the names of your images for screen reader labels, which is helpful if you have image names like “Photo of Paul Hudson” or “Hacking with Swift logo.” However, some images aren’t meant to be read because they are merely *decorative* – they don’t convey information that isn’t already elsewhere on the screen, or are instead just there to make the user interface look more attractive.

If you create these images using something like `Image("star")` the screen reader will read them out as part of its standard UI pass. A better idea is to create them using using the `Image(decorative:)` initializer, which tells SwiftUI the image shouldn’t be exposed to the screen reader:

```swift
Image(decorative: "star")
```

Once you’ve built your user interface it’s worth doing a final check over using VoiceOver to make sure you have marked your images correctly – the last thing you want is the screen reader speaking out weird internal filenames that you thought were only used in your code!

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to reduce animations when requested | SwiftUI by Example",
  "desc": "How to reduce animations when requested",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-reduce-animations-when-requested.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to detect the Reduce Motion accessibility setting | SwiftUI by Example",
  "desc": "How to detect the Reduce Motion accessibility setting",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-reduce-motion-accessibility-setting.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Displaying a detail screen with NavigationLink | SwiftUI by Example",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui/displaying-a-detail-screen-with-navigationlink.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to present a full screen modal view using fullScreenCover() | SwiftUI by Example",
  "desc": "How to present a full screen modal view using fullScreenCover()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-present-a-full-screen-modal-view-using-fullscreencover.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />