---
lang: ko-KR
title: "SwiftData tutorial: Building a complete project"
description: "Article(s) > SwiftData tutorial: Building a complete project"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > SwiftData tutorial: Building a complete project"
    - property: og:description
      content: "SwiftData tutorial: Building a complete project"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-follow-this-quick-start-guide.html
prev: /explore/articles/hackingwithswift.com/swiftdata/dedication.md
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "SwiftData tutorial: Building a complete project | SwiftData by Example",
  "desc": "SwiftData tutorial: Building a complete project",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-follow-this-quick-start-guide", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/FEKCAzPAtpg" />

This is a complete, free SwiftData tutorial designed to take you through all its core functionality in a single project. It’s aimed at people who have existing programming experience with SwiftUI, but all the SwiftData APIs and techniques are explained in detail so newcomers can to follow along.

::: important

This was written for iOS 17.0, so you’ll need at least Xcode 15.0 to follow along. This is available as a free download from the Mac App Store if you don’t already have it.

:::

The project we’ll be making is called iTour, and is a travel app that helps sightseers plan their vacation sightseeing. Users will be able to add a list of places they want to visit on their vacation, sort and search those destinations, then also add individual sights inside each place.

I’ve designed the project specifically so that it covers a variety of core SwiftData techniques to give you a good grounding in how things work. You'll learn how to define Swift data models, how to link models together using relationships, how to query and display data in SwiftUI, how to add sorting and filtering, and more.

Of course, we’re also building a real project at the same time – it’s going to be busy!

Note: If you’d like to see my completed version of this project, you can find it here on GitHub: [<FontIcon icon="iconfont icon-github"/>`twostraws/iTour`](https://github.com/twostraws/iTour).

To get started, please create a new iOS project in Xcode called “iTour”, choosing the App template. You should also select SwiftUI for the Interface, but please leave all the checkboxes unchecked and make sure the Storage option is set to None.

---

<TagLinks />