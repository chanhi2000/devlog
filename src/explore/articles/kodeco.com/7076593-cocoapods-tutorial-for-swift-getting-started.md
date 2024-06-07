---
lang: ko-KR
title: "CocoaPods Tutorial for Swift: Getting Started"
description: "Article(s) > CocoaPods Tutorial for Swift: Getting Started"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - kodeco.com
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: "Article(s) > CocoaPods Tutorial for Swift: Getting Started"
    - property: og:description
      content: "CocoaPods Tutorial for Swift: Getting Started"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kodeco.com/6747815-uigesturerecognizer-tutorial-getting-started.html
prev: /programming/swift/articles/README.md
date: 2020-01-27
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2020/01/HowToCreateCocoaPods-twitter.png
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

[[toc]]

---

<SiteInfo
  name="CocoaPods Tutorial for Swift: Getting Started"
  desc="Use this CocoaPods Tutorial for Swift to learn how to install and manage third-party library dependencies in your Swift projects."
  url="https://kodeco.com/7076593-cocoapods-tutorial-for-swift-getting-started"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-ios-332bbe814d9611fbedd98b00454084a66e0f64042270ac273c27145f80902377.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2020/01/HowToCreateCocoaPods-twitter.png"/>

::: note Update

Rony Rozen updated this tutorial for Xcode 11 and Swift 5. Joshua Greene wrote the original.

:::

CocoaPods is a popular dependency manager for Swift and Objective-C Cocoa projects. Thousands of libraries and millions of apps use it, according to the [CocoaPods website](http://cocoapods.org). But what is a dependency manager and why do you need one?

A dependency manager makes it easy to add, remove, update and manage the third-party dependencies your app uses.

For example, instead of reinventing your own networking library, you can easily pull in [Alamofire](https://kodeco.com/35-alamofire-tutorial-getting-started) using a dependency manager. You can specify either the exact version to use or a range of acceptable versions.

This means that even if Alamofire gets an update with changes that aren’t backward-compatible, your app can continue using the older version until you’re ready to update it.

In this tutorial, you’ll learn how to use CocoaPods with Swift. Specifically, you’ll:

- Install CocoaPods.
- Work with a functional demo app that gets you thinking about ice cream.
- Use CocoaPods to add networking.
- Learn about semantic versioning.
- Add another library using a flexible version.

This tutorial also includes classes that use Core Graphics. While knowledge of Core Graphics is beneficial, it’s not required. If you’d like to learn more, read our [Modern Core Graphics With Swift](https://kodeco.com/8003281-core-graphics-tutorial-getting-started) series.

::: tip Note

This CocoaPods tutorial requires basic familiarity with iOS and Swift development. If you’re completely new to iOS and/or Swift, then please check out some of the other [written](https://kodeco.com/ios/articles) and/or [video](https://kodeco.com/ios/videos) tutorials on this site before doing this tutorial. Or, dive into our book, [iOS Apprentice](http://www.kodeco.com/store/ios-apprentice).

:::

---

## Getting Started

Download the starter project by clicking the [<FontIcon icon="fas fa-download"/>`[Download Materials]`][download-material] button at the top or bottom of the tutorial.

Throughout this tutorial, you’ll work with an app called __Ice Cream Shop, Inc__. You’ll use CocoaPods to add dependencies to the app the easy way, instead of writing your own.

Before you can proceed with this tutorial, you need to install CocoaPods. Fortunately, CocoaPods uses Ruby, which ships with all versions of macOS X since version 10.7.

Open __Terminal__ and enter the following command:

```sh
sudo gem install cocoapods
```

Enter your password when requested. The Terminal output will show various fetching, installing and documentation-related outputs, concluding with “XX gems installed”.

::: tip Note

You must use `sudo` to install CocoaPods, but once it’s installed, you won’t need to use it again in this tutorial.

:::

Finally, enter this command in Terminal to complete the setup:

```sh
pod setup --verbose
```

This process takes a few minutes because it clones the [<FontIcon icon="iconfont icon-github"/>CocoaPods Master Specs repository](https://github.com/CocoaPods/Specs) into <FontIcon icon="fas fa-folder-open"/>`~/.cocoapods/` on your computer.

The `verbose` option logs progress as the process runs, allowing you to watch the process instead of seeing a seemingly “frozen” screen.

Awesome, you’re now set up to use CocoaPods!

---

## Ice Cream Shop, Inc.

Your top client is Ice Cream Shop, Inc. Their ice cream is so popular they can’t keep up with customer orders at the counter. They’ve recruited you to create a sleek iOS app that allows customers to order ice cream right from their iPhones.

You’ve started developing the app and it’s coming along well. Take a look at your progress by opening <FontIcon icon="fas fa-file-lines"/>`IceCreamShop.xcodeproj`, then building and running. You’ll see a mouth-watering vanilla ice cream cone:

![Ice Cream Shop, Inc.'s start page](https://koenig-media.raywenderlich.com/uploads/2015/03/icecreamshop_starter.png =240x)

The user should be able to choose an ice cream flavor from this screen, but that’s not possible yet. Your first step is to finish implementing this functionality.

Open <FontIcon icon="fas fa-file-lines"/>`Main.storyboard` from the `Views/Storyboards & Nibs` group to see the app’s layout. Here’s a quick overview of the heart of the app, the <FontIcon icon="iconfont icon-select"/>`[Choose Your Flavor]` scene:

![Components of the <FontIcon icon="iconfont icon-select"/>`[Choose Your Flavor]` scene](https://koenig-media.raywenderlich.com/uploads/2017/04/ChooseYourFlavor-427x500.png)

- `PickFlavorViewController` is the view controller for this scene. It handles user interaction and provides the data for the collection view that displays the different ice cream flavors.
- `IceCreamView` is a custom view that displays an ice cream cone based on the backing mode, `Flavor`.
- `ScoopCell` is a custom collection view cell that contains a `ScoopView`, which gets colors from a `Flavor` model.

While every Ice Cream Shop, Inc. location has signature flavors in common, each carries its own local flavors, too. For this reason, a web service needs to provide the data for the `Flavor`s.

However, this still doesn’t explain why users can’t select their ice cream flavors.

Open <FontIcon icon="fa-brands fa-swift"/>`PickFlavorViewController.swift`, found under the `Controllers` group, and you’ll see a stubbed method:

```swift
private func loadFlavors() {
  // TO-DO: Implement this
}
```

Aha, there are no flavors! You need to implement the function!

While you could use `URLSession` and write your own networking classes, there’s an easier way: Use [<FontIcon icon="iconfont icon-github"/>`Alamofire/Alamofire`](https://github.com/Alamofire/Alamofire)!

You might be tempted to download this library and drag the source files right into your project. However, that’d be doing it the hard way. CocoaPods provides a much more elegant and nimble solution.

---

## Installing Your First Dependency

Your first step is to __close Xcode__. Yeah, you read that right.

It’s time to create the <FontIcon icon="fas fa-file-lines"/>`Podfile`, where you’ll define your project’s dependencies.

Open __Terminal__ and navigate to the directory that contains your __IceCreamShop__ project by using the `cd` command:

```sh
cd ~/Path/To/Folder/Containing/IceCreamShop
```

Next, enter the following command:

```sh
pod init
```

This creates a [Podfile](https://guides.cocoapods.org/using/the-podfile.html) for your project.

Finally, type the following command to open the Podfile using Xcode for editing:

```sh
open -a Xcode Podfile
```

::: tip Note

Don’t use TextEdit to edit the Podfile because it replaces standard quotes with more graphically-appealing typeset quotes. This can cause CocoaPods to become confused and throw errors. Instead, use Xcode or another programming text editor to edit your Podfile.

:::

The default Podfile looks like this:

```rb
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'IceCreamShop' do
  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
  use_frameworks!

  # Pods for IceCreamShop

end
```

Delete the `#` and space before `platform`, then delete the other lines starting with `#`.

Your Podfile should now look like this:

```rb
platform :ios, '9.0'

target 'IceCreamShop' do
  use_frameworks!

end
```

This tells CocoaPods your project targets iOS 9.0 and will use frameworks instead of static libraries. While Swift and CocoaPods both support static linking, not all libraries you include do. One of them that you’ll use in this project does not.

If you’ve only programmed in Swift, this may look a bit strange. That’s because the Podfile is actually written in Ruby. You don’t need to know Ruby to use CocoaPods, but you should be aware that even minor text errors will cause CocoaPods to throw errors.

### A Word About Libraries

You’ll see the term __library__ often used as a general term that actually means a library or framework. This tutorial is guilty of casually intermixing these words, too.

You may be wondering about the differences between a library, a framework and a CocoaPod. It’s OK if you find the terminology a bit confusing!

A __CocoaPod__, or __pod__ for short, is a general term for either a library or framework that’s added to your project using CocoaPods.

iOS 8 introduced __dynamic frameworks__, which allow you to bundle code, images and other assets together. Prior to iOS 8, you created CocoaPods as “fat” __static libraries__. “Fat” means they contained several code instruction sets, like i386 for the simulator, armv7 for devices, etc. However, Swift doesn’t allow static libraries to contain resources such as images or assets.

### Back to Installing Your First Dependency

It’s finally time to add your first dependency using CocoaPods. Add the following to your<FontIcon icon="fas fa-file-lines"/>`Podfile`, right after `use_frameworks!`:

```rb
pod 'Alamofire', '4.9.1'
```

This tells CocoaPods you want to include Alamofire version 4.9.1 as a dependency for your project.

Save and close the <FontIcon icon="fas fa-file-lines"/>`Podfile`.

You now need to tell CocoaPods to install the dependencies for your project.

Enter the following command in __Terminal__, after ensuring you’re still in the directory containing the `IceCreamShop` project and <FontIcon icon="fas fa-file-lines"/>`Podfile`:

```sh
pod install
#
# Analyzing dependencies
# Adding spec repo `trunk` with CDN `https://cdn.cocoapods.org/`
# Downloading dependencies
# Installing Alamofire (4.9.1)
# Generating Pods project
# Integrating client project
#
# [!] Please close any current Xcode sessions and use `IceCreamShop.xcworkspace` for this project from now on.
# Pod installation complete! There is 1 dependency from the Podfile and 1 total pod installed.
```


Open the __project folder__ using __Finder__ and you’ll see CocoaPods created a new <FontIcon icon="fas fa-file-lines"/>`IceCreamShop.xcworkspace` file and a Pods folder to store all the project’s dependencies.

::: tip Note

From now on, as the command line warning mentioned, you must always open the project with the `.xcworkspace` file and not the `.xcodeproj`. Otherwise, you’ll encounter build errors.

:::

Excellent! You’ve just added your first dependency using CocoaPods!

---

## Using Installed Pods

Now, you’ll use your brand new dependency, Alamofire.

If the Xcode project is open, close it now and open <FontIcon icon="fas fa-file-lines"/>`IceCreamShop.xcworkspace`.

Open <FontIcon icon="fa-brands fa-swift"/>`PickFlavorViewController.swift` and add the following just below the existing import:

```swift
import Alamofire
```

Build and run. You’ll see no change yet but rest assured that Alamofire is now available.

![First compilation after integrating Alamofire dependency](https://koenig-media.raywenderlich.com/uploads/2020/01/Simulator-Screen-Shot-iPhone-11-Pro-Max-2020-01-16-at-20.19.34-231x500.png =240x)

Next, replace `loadFlavors()` with the following:

```swift
  private func loadFlavors() {
    // 1    
    Alamofire.request(
      "https://www.raywenderlich.com/downloads/Flavors.plist",
      method: .get,
      encoding: PropertyListEncoding(format: .xml, options: 0))
        .responsePropertyList { [weak self] response in
        // 2
        guard let self = self else { return }
        
        // 3        
        guard 
          response.result.isSuccess,
          let dictionaryArray = response.result.value as? [[String: String]] 
          else {
            return
        }

        // 4
        self.flavors = self.flavorFactory.flavors(from: dictionaryArray)
        
        // 5
        self.collectionView.reloadData()
        self.selectFirstFlavor()
    }
  }
```

Here’s the play-by-play of what’s happening in this code:

1. You use Alamofire to create a __GET__ request and download a plist containing ice cream flavors.
2. To break a strong reference cycle, you use a weak reference to `self` in the response completion block. Once the block executes, you immediately get a strong reference to `self` so you can set properties on it later.
3. Next, you verify the `response.result` shows success and the `response.result.value` is an array of dictionaries.
4. Now, you set `self.flavors` to an array of `Flavor` objects that `FlavorFactory` creates. This is a class a “colleague” wrote for you (you’re welcome!), which takes an array of dictionaries and uses them to create instances of `Flavor`.
5. Finally, you reload the collection view and select the first flavor.

Build and run. You can now choose an ice cream flavor!

![Choose Flavor](https://koenig-media.raywenderlich.com/uploads/2015/03/choose_flavor-282x500.png =240x)

---

## Now for a Tasty Topping

The app looks good, but you can still improve it.

Did you notice the app takes a second to download the flavors file? If you’re on a fast Internet connection, you might not notice the delay, but your customers won’t always be so lucky.

Your next step is to show a loading indicator in your app, to help customers understand it’s loading data and not just twiddling its libraries. [<FontIcon icon="iconfont icon-github"/>`jdg/MBProgressHUD`](https://github.com/jdg/MBProgressHUD) is a really nice indicator that will work well here. And it supports CocoaPods; what a coincidence!

To use this pod, you need to add it to your Podfile. Rather than opening the Podfile from the command line, you can now find it in the Pods target in the workspace:

![Pods in Workspace](https://koenig-media.raywenderlich.com/uploads/2015/03/pods_in_workspace-365x320.png)

Open <FontIcon icon="fas fa-file-lines"/>`Podfile` and add the following, right after the __Alamofire__ line:

```rb
pod 'MBProgressHUD', '~> 1.0'
```

Save the file and install the dependencies via `pod install` in Terminal, just as you did before.

Notice anything different this time? Yep, you specified the version number as `~> 1.0`. But why?

CocoaPods recommends that all pods use [Semantic Versioning](http://semver.org/). Take a moment to understand what that is.

### Semantic Versioning

Many times, you’ll see a version written like this: 1.0.0. Those three numbers are __major__, __minor__ and __patch__ version numbers.

For example, for the version number __1.0.0__, 1 is the major number, the first 0 is the minor number, and the second 0 is the patch number.

![Semantic Versioning Example](https://koenig-media.raywenderlich.com/uploads/2017/04/sem_versioning.png)

If the __major__ number increases, it indicates that the version contains non-backward-compatible changes. When you upgrade a pod to the next major version, you may need to fix build errors or the pod may behave differently than before.

If the __minor__ number increases, it indicates that the version contains new functionality that _is_ backward-compatible. When you decide to upgrade, you may or may not need the new functionality, but it shouldn’t cause any build errors or change existing behavior.

If the __patch__ number increases, it means the new version contains bug fixes but no new functionality or behavior changes. In general, you always want to upgrade patch versions as soon as possible to have the latest, stable version of the pod.

Finally, when you increase the highest-order number — __major__, then __minor__ then __patch__ — per the above rules, you must reset any lower-order numbers to zero.

Here’s an example:

Consider a pod that has a current version number of __1.2.3__.

If you make changes that are _not_ backward-compatible, don’t have new functionality, but fix existing bugs, you’d give it version __2.0.0__.

### Challenge Time

::: tabs

@tab:active Q1

If a pod has a current version of __2.4.6__ and you make changes that fix bugs and add backward-compatible functionality, what should the new version number be?

@tab A1

- Answer: __2.5.0__
- Explanation: If you make changes that include new functionality that’s backward-compatible, you increase the __minor__ number and reset the __patch__ to zero.

:::

::: tabs

@tab:active Q2

If a pod has a current version of __3.5.8__ and you make changes to existing functionality which aren’t backward-compatible, what should the new version number be?

@tab A2

- Answer: __4.0.0__
- Explanation: If changes modify existing behavior and are not backward-compatible, you must increase the __major__ number and reset the __minor__ and __patch__ numbers to zero.

:::


::: tabs

@tab:active Q3

If a pod has a current version of __10.20.30__ and you only fix bugs, what should the new version number be?


@tab A3

- Answer: __10.20.31__
- Explanation: If you only fix bugs, you only increase the __patch__ number.

:::
Having said all this, there’s one exception to these rules:

If a pod’s version number is less than __1.0.0__, it’s considered a beta version. Minor number increases _may_ include changes that aren’t backward-compatible.

So back to `MBProgressHUB`: Using `~> 1.0` means you should install the latest version that’s greater than or equal to `1.0` but less than `2.0`.

This ensures you get the latest bug fixes and features when you install this pod, but you won’t accidentally pull in backward-incompatible changes.

There are several other operators you can use as well. For a complete list, see the [Podfile Syntax Reference](http://guides.cocoapods.org/syntax/podfile.html#pod).

Now that you’ve learned how operators work with your CocoaPods, it’s time to finish your app.

### Showing Progress

If you recall, you were building a progress indicator to show your users when flavors are loading in the app.

To finish this feature, go back to <FontIcon icon="fa-brands fa-swift"/>`PickFlavorViewController.swift` and add the following right after the other imports:

```swift
import MBProgressHUD
```

Next, add the following helper methods after `loadFlavors()`:

```swift
private func showLoadingHUD() {
  let hud = MBProgressHUD.showAdded(to: contentView, animated: true)
  hud.label.text = "Loading..."
}

private func hideLoadingHUD() {
  MBProgressHUD.hide(for: contentView, animated: true)
}
```

Now, in `loadFlavors()`, add the following two lines (as indicated):

```swift
  private func loadFlavors() {
    showLoadingHUD() // <-- Add this line
    
    Alamofire.request(
      "https://www.raywenderlich.com/downloads/Flavors.plist",
      method: .get,
      encoding: PropertyListEncoding(format: .xml, options: 0))
        .responsePropertyList { [weak self] response in
        guard let self = self else { return }
        
        self.hideLoadingHUD() // <-- Add this line
      // ...
```

As the method names imply, `showLoadingHUD()` shows an instance of `MBProgressHUD` while the GET request downloads. `hideLoadingHUD()` hides the HUD when the request finishes. Since `showLoadingHUD()` is outside the closure, it doesn't need the `self` prefix.

Build and run. You'll now see a loading indicator while the flavors are loading. If your internet connection is too fast for this, you can add a `sleep(_:)` statement just before `hideLoadingHUD()` so that you can experience the goodness that is __MBProgressHUD__.

![App with loading symbol](https://koenig-media.raywenderlich.com/uploads/2017/04/HUD_Loading-281x500.png =240x)

Great work! Customers can now select their favorite ice cream flavor and they see a loading indicator while flavors are downloading.

---

## Where to Go From Here?

You can download the completed project using the [<FontIcon icon="fas fa-download"/>`[Download Materials]`][download-material] button at the top or bottom of this page.

Congratulations! You now know the basics of using CocoaPods, including creating and modifying dependencies and understanding semantic versioning. You're now ready to start using them in your own projects!

There's lots more that you can do with CocoaPods. You can search for existing pods on the official [CocoaPods website](http://cocoapods.org). Also, refer to the [CocoaPods Guides](http://guides.cocoapods.org) to learn the finer details of this excellent tool. But be warned, once you begin using it, you'll wonder how you ever managed without it!

I hope you enjoyed reading this CocoaPods tutorial as much I did writing it. What are some of your favorite CocoaPods? Which ones do you rely on the most for everyday projects? Feel free to share, or to ask any questions, in the comments below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/01/IceCreamShop-Materials-1.zip