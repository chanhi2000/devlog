---
lang: ko-KR
title: "How to create an Objective-C bridging header to use code in Swift"
description: "Article(s) > How to create an Objective-C bridging header to use code in Swift"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create an Objective-C bridging header to use code in Swift"
    - property: og:description
      content: "How to create an Objective-C bridging header to use code in Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-an-objective-c-bridging-header-to-use-code-in-swift.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create an Objective-C bridging header to use code in Swift | Language - free Swift example code",
  "desc": "How to create an Objective-C bridging header to use code in Swift",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-an-objective-c-bridging-header-to-use-code-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
If you want to use Objective-C code in your Swift app – and let's face it, that's going to happen quite a lot! – then you need to create a bridging header that allows your Swift code to work with your Objective-C code.

To create an Objective-C bridging header file, all you need to do is drag some Objective-C code into your Swift project – Xcode should prompt you with the message "Would you like to configure an Objective-C bridging header?" Click "Creating Bridging Header" and you'll see a file called **YourProjectName-Bridging-Header.h** appear in your project.

But that's only half the problem: Xcode has created the bridging header and modified your build settings so that it gets used, but it hasn't actually put anything into it. If you want to start using your Objective-C code in Swift, you need to add import lines to that bridging header file, like this:

```swift
#import "YourFile.h"
```

You can add as many of these as you want, and indeed you'll want to import all the Objective-C code you want to use in Swift.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/uikit/how-to-add-a-section-header-to-a-table-view">How to add a section header to a table view 
/example-code/strings/how-to-measure-a-string-for-objective-c-code">How to measure a string for Objective-C code 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />