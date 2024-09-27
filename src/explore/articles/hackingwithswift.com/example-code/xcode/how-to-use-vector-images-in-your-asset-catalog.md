---
lang: ko-KR
title: "How to use vector images in your asset catalog"
description: "Article(s) > How to use vector images in your asset catalog"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use vector images in your asset catalog"
    - property: og:description
      content: "How to use vector images in your asset catalog"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-use-vector-images-in-your-asset-catalog.html
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
  "title": "How to use vector images in your asset catalog | Xcode - free Swift example code",
  "desc": "How to use vector images in your asset catalog",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-use-vector-images-in-your-asset-catalog",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
Xcode lets you use vector images for all your artwork, which saves you having to worry about retina artwork, super retina artwork, and whatever Apple dreams up in the future. Even better, using this vector artwork has no performance cost – iOS and Xcode do all the work for you,

To try it out, drop a PDF file into your asset catalog, then change its Scales property to Single Scale – this has the effect of making Xcode convert it to @2x and @3x at build time.

The natural size of a vector image – its effective @1x resolution – is determined by the size of the vector, which might be confusing at first because vector images are resolution independent. But even then they still have a natural size, and Xcode will display that when you select your vector art.

Xcode has a couple of vector options that are worth exploring. The first is using Individual and Single Scales mode, which lets you override any specific size you want while using the vector for the others. The other is Preserve Vector Data, which copies the PDF into the final build so it can be re-rasterized at runtime to fit any size need – the only hiccup here is that iOS needs to be precisely sure what size the image is going to be, so if you try to rely on an intrinsic content size you’ll hit problems.

To try it out yourself, add an image view to a view controller and assign it a PDF asset from your asset catalog, then give it fixed width and height constraints that are much bigger than the natural size of your PDF. It might look blurry in IB but that’s OK – it will look great on the device.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-load-custom-colors-from-an-asset-catalog">How to load custom colors from an asset catalog 
/example-code/xcode/how-to-load-assets-from-xcode-asset-catalogs">How to load assets from Xcode asset catalogs 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a>
-->

:::

---

<TagLinks />