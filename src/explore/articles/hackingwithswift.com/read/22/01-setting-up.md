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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/22/01-setting-up.html
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
  "link": "https://hackingwithswift.com/read/22/1/setting-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/y9GGNzc-T-4" />

Apple introduced iBeacon technology with iOS 7, and it helped make the Internet of Things hypefest even more stratospheric. In this project you're going to learn to detect and range beacons, which in turn means learning how to ask your user for their location. With this, you'll have all the tools required to make your own location-aware apps – just scatter a few beacons around your house!

If you don't have any iBeacons at home, that's OK because most people don't. Instead, I recommend you install the app "Locate Beacon" on your iPad or iPhone, because that comes with an iBeacon transmitter built in, making it perfect for testing. You also need an iOS device that's compatible with iBeacons, which means iPhone 5 or later, 3rd generation iPad or later, iPad Mini or later, or 5th generation iPod Touch or later. I'm afraid the iOS Simulator won't work, but you can at least follow along with the code. Please ensure you have Bluetooth enabled on your device.

If you've never pushed an app to a real device before, you need to make sure you select the device from the list of destinations. You can do this by clicking where it says "Project22" to the right of the play and stop buttons, or by going to the Product menu and choosing Destination then selecting your device. If it comes up with "ineligible" it means your device is running an older version of iOS than your project is designed for, so you may need to go to your project settings (where you configure orientation) and change Deployment Target to match.

Create a new Single View App project in Xcode then name it Project22. Let’s go!

---

<TagLinks />