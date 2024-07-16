---
lang: ko-KR
title: "How to install an ad blocker in Safari for iOS"
description: "How to install an ad blocker in Safari for iOS"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - safari
head:
  - - meta:
    - property: og:title
      content: "How to install an ad blocker in Safari for iOS"
    - property: og:description
      content: "How to install an ad blocker in Safari for iOS"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/safari-content-blocking-ios9-install.html
prev: /programming/swift/articles/README.md
date: 2015-06-12
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Safari > Article(s)",
  "desc": "Article(s)",
  "link": "/tool/safari/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to install an ad blocker in Safari for iOS – Hacking with Swift",
  "desc": "How to install an ad blocker in Safari for iOS",
  "link": "https://hackingwithswift.com/safari-content-blocking-ios9-install",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

iOS 9 is here, which means you can install a content blocker straight from the App Store

::: note

if you're looking to make your own content blocker, you should read my free tutorial: [Safari Content Blocking in iOS 9: a tutorial by example](/explore/articles/hackingwithswift.com/safari-content-blocking-ios9.md). This page describes how to install an existing content blocker from the App Store.

:::

First things first: you need to pick a content blocker. Note that these are called "content blockers" not "ad blockers" because their job is to block any sort of web content the creator made. For many people mobile ads are the target, but they are able to do more so choose wisely!

Lots of content blockers have been announced as "coming real soon now", but as of this second the only one that is available worldwide is here: [<FontIcon icon="fa-brands fa-app-store-ios"/>Crystal](https://apps.apple.com/us/app/crystal-adblock-block-unwanted-ads/id1022177308). **It is free for a limited time so don't hang around!**

::: important

**Now for the important bit, so please read carefully.** When you install a content blocker app, the app itself doesn't do very much. You'll see an icon on your home screen, yes, but that's not what does the blocking.

:::

Instead, you need to enable the content blocker inside Safari, which is done using the Settings screen. I used the Crystal content blocker in the pictures below, but the process is the same for all content blockers.

::: tabs

@tab:active Step 1

Install an app that has a content blocker

![I chose [<FontIcon icon="fa-brands fa-app-store-ios"/>Crystal](https://apps.apple.com/us/app/crystal-adblock-block-unwanted-ads/id1022177308), but any of them are just as good.](https://hackingwithswift.com/img/articles/content_block1.png)

![Once the app is installed, you'll see its icon on your home screen, but there's not much point launching it unless you're extremely curious. This is because **the content blocker isn't activated inside the app**.](https://hackingwithswift.com/img/articles/content_block2.png)

@tab Step 2

Go to Settings and enable the content blocker

![Tap Settings](https://hackingwithswift.com/img/articles/content_block3.png)

![Scroll down until you find Safari, then tap it](https://hackingwithswift.com/img/articles/content_block4.png)

![Now scroll down until you find Content Blockers, and tap that](https://hackingwithswift.com/img/articles/content_block5.png)

You will see a list of all the content blockers installed on your device.

![Flick the switch next to the ones you want – yes, "ones": it's plural because you can enable as many as you want.](https://hackingwithswift.com/img/articles/content_block6.png)

@tab Step 3

Launch Safari and start browsing

As soon as the content blocker is enabled inside Settings, it becomes active in Safari. You don't need to restart your device or do anything special - it just works!

@tab Step 4

Launch the app you downloaded

Once content blocking is active, you can go ahead and launch the original app to see if there are any interesting settings you can customise. 

![Crystal, for example, lets you report sites that manage to evade its content blocking.](https://hackingwithswift.com/img/articles/content_block7.png)

@tab Step 5

Make your own!

Apple made it **super easy** to make your own content blocker, so why not give it a try? I wrote a [free tutorial on how to make your own content blocker](/explore/articles/hackingwithswift.com/safari-content-blocking-ios9.md) and anyone can follow along.

:::

```component VPCard
{
  "title": "What's new in iOS 9 for developers – Hacking with Swift",
  "desc": "What's new in iOS 9 for developers",
  "link": "/explore/articles/hackingwithswift.com/ios9.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 2.0 – Hacking with Swift",
  "desc": "What's new in Swift 2.0",
  "link": "/explore/articles/hackingwithswift.com/swift2.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Project 32: SwiftSearcher",
  "desc": "Add your app's content to iOS 9's Spotlight search and take advantage of the new Safari integration.",
  "link": "/explore/articles/hackingwithswift.com/read/32/overview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<SiteInfo
  name="Introduction to WebKit Content Blockers | WebKit"
  desc="Describing content blocking rules in a structured format ahead-of-time, rather than running extension-provided code."
  url="https://webkit.org/blog/3476/content-blockers-first-look/"
  logo="https://webkit.org/favicon.ico"
  preview="https://webkit.org/wp-content/themes/webkit/images/twitter-card.png"/>

---

<TagLinks />