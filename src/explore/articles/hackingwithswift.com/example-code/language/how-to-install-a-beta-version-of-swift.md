---
lang: ko-KR
title: "How to install a beta version of Swift"
description: "Article(s) > How to install a beta version of Swift"
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
      content: "Article(s) > How to install a beta version of Swift"
    - property: og:description
      content: "How to install a beta version of Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-ignore-return-values-using-discardableresult.html
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
  "title": "How to install a beta version of Swift | Language - free Swift example code",
  "desc": "How to install a beta version of Swift",
  "link": "https://hackingwithswift.com/example-code/language/how-to-ignore-return-values-using-discardableresult",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Xcode ships with a fixed version of Swift, but that doesn't mean you need to *use* that version. In fact, it's possible to install multiple versions of the Swift toolchain, and switch between them as often as you need. At the time of writing, that means you can use Swift 5.0 with Xcode 10, and try out Swift development releases alongside.

All set? Start by going to <a href="https://swift.org/download/#snapshots">https://swift.org/download/#snapshots</a> and looking for the latest Swift snapshot. If you're on macOS you'll see a link for "Xcode", but there are also Linux downloads available. Don't click "Debugging Symbols" or "Signature" – either click Xcode or an Ubuntu version.

<img class="hws" src="/img/hws/example-code-288-1.png" alt="">

This downloads a file named something like swift-DEVELOPMENT-SNAPSHOT-2016-05-09-a-osx.pkg, which contains the most recently snapshot of Swift created from the mainline development branch. Double-click to launch the installer, then follow the on-screen instructions. Expect a full install to take up about 900MB.

<img class="hws" src="/img/hws/example-code-288-2.png" alt="">

Once the installer has finished, launch Xcode as normal. When it loads, go to the Xcode menu in the top-left corner, and choose Toolchains > Swift Development Snapshot YOUR-DATE-HERE (a).

<img class="hws" src="/img/hws/example-code-288-3.png" alt="">

You'll be prompted to restart Xcode, but when it relaunches it should say “Xcode 10.0 (10A255)” then beneath that "Swift Development Snapshot YOUR-DATE-HERE (a) Toolchain", signaling that you have installed and activated the snapshot.

<img class="hws" src="/img/hws/example-code-288-4.png" alt="">

That's it, now brace yourself: open any of your Swift projects, and press <kbd>Cmd</kbd>+B to build. You *might* get one or two (or fifty) compile errors. 

When you're done admiring the latest and greatest Swift snapshot, you can switch back to your previous Swift version returning to the Toolchains menu item. When you revert back to the default Swift version, you can delete any snapshot you don't want by going to Xcode > Settings > Components, then hovering over it and clicking the small settings icon.

<img class="hws" src="/img/hws/example-code-288-5.png" alt="">

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-check-the-swift-version-at-compile-time">How to check the Swift version at compile time 
/example-code/system/how-to-read-your-apps-version-from-your-infoplist-file">How to read your app’s version from your Info.plist file 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup 
/example-code/xcode/how-to-create-a-project-using-swift-package-manager">How to create a project using Swift Package Manager</a>
-->

:::

---

<TagLinks />