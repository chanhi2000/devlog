---
lang: ko-KR
title: CocoaPods Tutorial for Swift - Getting Started
description: 🕊️Kodeco - Swift > CocoaPods Tutorial for Swift - Getting Started
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > CocoaPods Tutorial for Swift - Getting Started
    content: CocoaPods Tutorial for Swift - Getting Started
  - property: og:title
    content: CocoaPods Tutorial for Swift - Getting Started
  - property: og:description
    content: 🕊️Kodeco - Swift > CocoaPods Tutorial for Swift - Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/swift-kodeco/6747815-uigesturerecognizer-tutorial-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: CocoaPods Tutorial for Swift - Getting Started
desc: Use this CocoaPods Tutorial for Swift to learn how to install and manage third-party library dependencies in your Swift projects. 
link: https://www.kodeco.com/7076593-cocoapods-tutorial-for-swift-getting-started
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-ios-332bbe814d9611fbedd98b00454084a66e0f64042270ac273c27145f80902377.svg
color: rgba(135, 99, 210, 0.2)
```

::: note Update

Rony Rozen updated this tutorial for Xcode 11 and Swift 5. Joshua Greene wrote the original.

:::

CocoaPods is a popular dependency manager for Swift and Objective-C Cocoa projects. Thousands of libraries and millions of apps use it, according to the [CocoaPods website](http://cocoapods.org). But what is a dependency manager and why do you need one?

A dependency manager makes it easy to add, remove, update and manage the third-party dependencies your app uses.

For example, instead of reinventing your own networking library, you can easily pull in [Alamofire](https://www.kodeco.com/35-alamofire-tutorial-getting-started) using a dependency manager. You can specify either the exact version to use or a range of acceptable versions.

This means that even if Alamofire gets an update with changes that aren’t backward-compatible, your app can continue using the older version until you’re ready to update it.

In this tutorial, you’ll learn how to use CocoaPods with Swift. Specifically, you’ll:

- Install CocoaPods.
- Work with a functional demo app that gets you thinking about ice cream.
- Use CocoaPods to add networking.
- Learn about semantic versioning.
- Add another library using a flexible version.

This tutorial also includes classes that use Core Graphics. While knowledge of Core Graphics is beneficial, it’s not required. If you’d like to learn more, read our [Modern Core Graphics With Swift](https://www.kodeco.com/8003281-core-graphics-tutorial-getting-started) series.

::: note Note

This CocoaPods tutorial requires basic familiarity with iOS and Swift development. If you’re completely new to iOS and/or Swift, then please check out some of the other [written](https://www.kodeco.com/ios/articles) and/or [video](https://www.kodeco.com/ios/videos) tutorials on this site before doing this tutorial. Or, dive into our book, [iOS Apprentice](http://www.kodeco.com/store/ios-apprentice).

:::

---

## Getting Started

Download the starter project by clicking the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of the tutorial.

Throughout this tutorial, you’ll work with an app called __Ice Cream Shop, Inc__. You’ll use CocoaPods to add dependencies to the app the easy way, instead of writing your own.

Before you can proceed with this tutorial, you need to install CocoaPods. Fortunately, CocoaPods uses Ruby, which ships with all versions of macOS X since version 10.7.

Open __Terminal__ and enter the following command:

```sh
sudo gem install cocoapods
```

Enter your password when requested. The Terminal output will show various fetching, installing and documentation-related outputs, concluding with “XX gems installed”.

::: note Note

You must use `sudo` to install CocoaPods, but once it’s installed, you won’t need to use it again in this tutorial.

:::

Finally, enter this command in Terminal to complete the setup:

```sh
pod setup --verbose
```

This process takes a few minutes because it clones the [<FontIcon icon="iconfont icon-github"/>CocoaPods Master Specs repository](https://github.com/CocoaPods/Specs) into <FontIcon icon="iconfont icon-folder"/>`~/.cocoapods/` on your computer.

The `verbose` option logs progress as the process runs, allowing you to watch the process instead of seeing a seemingly “frozen” screen.

Awesome, you’re now set up to use CocoaPods!

---

## Ice Cream Shop, Inc.

---

## Installing Your First Dependency

### A Word About Libraries

### Back to Installing Your First Dependency

---

## Using Installed Pods

---

## Now for a Tasty Topping

### Semantic Versioning

### Challenge Time

### Showing Progress

---

## Where to Go From Here?

You can download the completed project using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this page.

Congratulations! You now know the basics of using CocoaPods, including creating and modifying dependencies and understanding semantic versioning. You're now ready to start using them in your own projects!

There's lots more that you can do with CocoaPods. You can search for existing pods on the official [CocoaPods website](http://cocoapods.org). Also, refer to the [CocoaPods Guides](http://guides.cocoapods.org) to learn the finer details of this excellent tool. But be warned, once you begin using it, you'll wonder how you ever managed without it!

I hope you enjoyed reading this CocoaPods tutorial as much I did writing it. What are some of your favorite CocoaPods? Which ones do you rely on the most for everyday projects? Feel free to share, or to ask any questions, in the comments below!

---


---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/01/IceCreamShop-Materials-1.zip
