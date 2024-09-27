---
lang: ko-KR
title: "How to add markers to the jump bar"
description: "Article(s) > How to add markers to the jump bar"
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
      content: "Article(s) > How to add markers to the jump bar"
    - property: og:description
      content: "How to add markers to the jump bar"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-add-markers-to-the-jump-bar.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to add markers to the jump bar | Xcode - free Swift example code",
  "desc": "How to add markers to the jump bar",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-add-markers-to-the-jump-bar",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Xcode’s jump bar – the popup menu describing all properties and methods in the current class, activated using Ctrl-6 – is a simple way to navigate around your file, particularly when you know you can just type a few letters to automatically filter the list.

However, if you’re finding the jump bar is getting messy, you should try to break it up by adding markers to your code. These come in a few flavors – `MARK`, `TODO`, and `FIXME` – but all help make your jump bar easier to read.

Try adding this special comment before any method:

```swift
// TODO: This isn’t finished yet
```

In the jump bar that will appear as a blue and white list icon so it sticks out. Now try adding this somewhere:

```swift
// FIXME: This code is awful.
```

That will show up in the jump bar with an orange bandaid – it really stands out! 

The third option is `MARK`, which renders your text in bold – it’s great for splitting up the jump bar, and is commonly used to mark divisions in your file.. Try this:

```swift
// MARK: UITableViewDataSource methods
```

All of these markers can have dashes placed before or after the text to make separators. For example:

```swift
// FIXME: - This code is really broken -
```

That will appear in the jump bar with a dividing line before and after the marker. You can just create the separator if you want, like this:

```swift
// MARK: -
```

That just creates a dividing line with no accompanying text.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars 
/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems">How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems 
/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards">How to add a button to a navigation bar using storyboards 
/quick-start/swiftui/how-to-add-bar-items-to-a-navigation-view">How to add bar items to a navigation view</a>
-->

:::

---

<TagLinks />