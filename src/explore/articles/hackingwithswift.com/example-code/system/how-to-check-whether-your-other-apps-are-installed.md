---
lang: ko-KR
title: "How to check whether your other apps are installed"
description: "Article(s) > How to check whether your other apps are installed"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check whether your other apps are installed"
    - property: og:description
      content: "How to check whether your other apps are installed"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-check-whether-your-other-apps-are-installed.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check whether your other apps are installed | System - free Swift example code",
  "desc": "How to check whether your other apps are installed",
  "link": "https://hackingwithswift.com/example-code/system/how-to-check-whether-your-other-apps-are-installed",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
iOS lets you check for the existence of other apps, but you do need to declare them in your Info.plist file, and you may need to provide an explanation to the App Review team if you try to query too many apps or apps that aren’t yours.

The key here is to give each of your apps a custom URL scheme. So, your first app might use “myapp1://“, your second app might use “myapp2://”, and so on. You don’t actually need to *use* these URLs, and they ought to be unique, so you should make them prefixed with your company name to be sure.

To try it out, right-click on your Info.plist file and choose Open As > Source Code. The file should end like this:

```swift
</dict>
</plist>
```

I’d like you to paste this XML directly before those lines:

```swift
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>myapp1</string>
    <string>myapp2</string>
</array>
```

That registers two URL schemes, “myapp1://” and “myapp2://”, with iOS, which means you can now try to read them.

With that done, you can now add code like this to check whether the system is able to respond to “myapp1://” URLs:

```swift
UIApplication.shared.canOpenURL(URL(string: "myapp1://test")!)
```

If that returns true it means the app responsible for “myapp1://” is installed on the system, which means you know for sure the user has that other app installed.

**Note:** Even though you own both apps and could easily have replicated this finding using server analytics, doing it client-side might seem sketchy to some users. Be sensible and have a clear, complete privacy policy that says exactly what you want do.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport() 
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up 
/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition 
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a>
-->

:::

---

<TagLinks />