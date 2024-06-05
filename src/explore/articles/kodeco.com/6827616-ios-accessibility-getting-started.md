---
lang: ko-KR
title: "iOS Accessibility: Getting Started"
description: "Article(s) > iOS Accessibility: Getting Started"
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
      content: "Article(s) > iOS Accessibility: Getting Started"
    - property: og:description
      content: "iOS Accessibility: Getting Started"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kodeco.com/6827616-ios-accessibility-getting-started.html
date: 2020-02-05
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2020/02/iOSAccessibilityUIKit-twitter.png
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
  name="iOS Accessibility: Getting Started"
  desc="In this iOS accessibility tutorial, learn how to make apps more accessible using VoiceOver and the Accessibility inspector."
  url="https://kodeco.com/6827616-ios-accessibility-getting-started"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-user-interface-ios-21d0f43f2b43d30763411dc88f25ae51608b428e8a186f1cd5468dcf58496168.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2020/02/iOSAccessibilityUIKit-twitter.png"/>

::: note Update note

Fayyaz Syed updated this tutorial for iOS 13, Xcode 11 and Swift 5. Vincent Ngo wrote the original.
People of all walks of life, of all ages, and from different backgrounds use smartphone apps, including people with disabilities. Designing your apps with accessibility in mind helps everyone use them, including people with vision, motor, learning or hearing disabilities.

:::

In this iOS accessibility tutorial, you’ll transform an existing app to make it more accessible for people with visual disabilities. In the process, you’ll learn how to:

- Use VoiceOver.
- Check your app with the Accessibility Inspector.
- Implement accessibility elements with UIKit.
- Build a better user experience for people with disabilities.

This tutorial requires Xcode 11.3 and Swift 5.1. It assumes you already know the basics of Swift development. If you’re new to Swift, you should first check out our book, [Swift Apprentice](https://store.raywenderlich.com/products/swift-apprentice).

::: tip Note

You’ll need a physical device to work with VoiceOver. This accessibility feature is not supported in the simulator at this time.

:::

---

## Getting Started

In this tutorial, you’ll work with an already-completed app called __Recipe__, which contains a list of recipes and their difficulty levels. It also allows you to rate the quality of the dishes you make.

Download everything you need to get started by using the [<FontIcon icon="fas fa-download"/>`[Download Materials]`][download-material] button at the top or bottom of the tutorial. Open <FontIcon icon="fas fa-file-lines"/>`Recipe.xcodeproj` in the <FontIcon icon="fas fa-folder-open"/>`begin` folder.

Before you can run the app on a device, you need to configure signing.

To do this, click the __Recipe__ project in the navigator, then select the target with the same name. Select the <FontIcon icon="iconfont icon-select"/>`[Signing & Capabilities]` tab, then make sure you’ve selected <FontIcon icon="iconfont icon-select"/>`[Debug]` at the top. Finally, pick your <FontIcon icon="iconfont icon-select"/>`[Team]` from the drop-down.

![Configuring signing in Xcode](https://koenig-media.raywenderlich.com/uploads/2019/12/signing2-650x267.png)

### Getting to Know the Recipe App

Now, build and run the app to familiarize yourself with its features.

![Recipe app's features](https://koenig-media.raywenderlich.com/uploads/2019/12/recipe-app-demo.gif =240x)

The root controller is a table view of recipes containing an image, description and difficulty rating. Click a recipe for a larger picture with the recipe’s ingredients and instructions.

To make things more exciting, you can also cross off the items on the list to make sure you have all the necessary ingredients. If you love or hate what you made, you can toggle the like/dislike emoji.

### Behind the Scenes of the Recipe App

Spend a few minutes familiarizing yourself with the code in the begin project. Here are some highlights:

- <FontIcon icon="fas fa-file-lines"/>`Main.storyboard` contains all the storyboard scenes for the app. You’ll notice all the UI components are standard UIKit controls and views. They’re already accessible, which makes your job easier.
- .<FontIcon icon="fa-brands fa-swift"/>`RecipeListViewController.swift` manages the root table view, which displays the list of all recipes available. It uses an array of `Recipe` objects as the data source.
- .<FontIcon icon="fa-brands fa-swift"/>`Recipe.swift` is the model object that represents a recipe. It contains utility methods for loading an array of recipes that you’ll use throughout the app.
- .<FontIcon icon="fa-brands fa-swift"/>`RecipeCell.swift` is the cell for the root controller’s recipe list. It displays the recipe’s difficulty level, name and photo based on the passed `Recipe` model object.
- .<FontIcon icon="fa-brands fa-swift"/>`RecipeInstructionViewController.swift` contains the controller code for the detail view, which shows a large image of the dish along with its ingredients and cooking instructions. It features a `UISegmentedControl` to toggle between ingredients and instructions in the table view, which uses `InstructionViewModel`.
- .<FontIcon icon="fa-brands fa-swift"/>`InstructionViewModel.swift` acts as the data source for `RecipeInstructionsViewController`. It includes descriptions for ingredients and instructions as well as state information for the check boxes.
- .<FontIcon icon="fa-brands fa-swift"/>`InstructionCell.swift` defines a cell that contains a label and a checkbox for use in instructions and ingredient lists. When you check the box, it crosses out the text.
Now you understand how the app works, it’s time to consider how to make it more accessible.

---

## Why Accessibility?

Before you get started with the code, it’s important to understand the benefits of accessibility.

- Designing your app for accessibility makes it easier to write functional tests, whether you’re using the `KIF` framework or [UI Testing](https://kodeco.com/21020457-ios-unit-testing-and-ui-testing-tutorial) in Xcode.
- You’ll also broaden your market and user base by making your app usable by a larger group.
- If you work for any government agency, you’re required to implement [508 compliance](https://www.section508.gov/), which states any software or technology must be accessible to all users.
- Implementing accessibility in your app shows you’re willing to go the extra mile for every user, and that’s a good thing.
- It feels good to know you’re making a small but noticeable difference in someone’s life!

Convinced? Then it’s time to get to know VoiceOver, an accessibility tool for people with visual disabilities.

---

## Enabling VoiceOver

iOS comes with the __VoiceOver__ screen-reading tool, which helps users interact with software without needing to see the screen. It’s specifically designed for people with vision problems.

VoiceOver lets users who are visually impaired hear and interact with what’s visible on-screen. VoiceOver responds to gestures and audibly communicates to the user what’s on the screen or what the user selects. In essence, VoiceOver is the link between the UI and the user’s touch input.

The quickest way to use VoiceOver is to open the Settings app on your iOS device, select <FontIcon icon="iconfont icon-select"/>`[Accessibility ▸ Accessibility Shortcut]` then select <FontIcon icon="iconfont icon-select"/>`[VoiceOver]`.

![VoiceOver shortcut](https://koenig-media.raywenderlich.com/uploads/2019/12/IMG_5349-282x500.png)

This creates a shortcut so you can triple-tap the home button — or the side button, for newer phones — on a physical device to toggle VoiceOver on and off.

::: tip Note

There are many other accessibility features besides VoiceOver including Invert Colors, Increase Contrast, Color Filters, Reduce White Point, Zoom, Switch Control and a lot more. In this tutorial, you’ll mostly focus on VoiceOver.

:::

Now you’ve enabled VoiceOver, it’s time to try it out.

---

## How to Use VoiceOver

VoiceOver comes with some handy gesture presets that make it easy to navigate an app. Here are some of the more common in-app gestures to use with VoiceOver:

- __Single-tap__ anywhere on the screen and VoiceOver will read identifying information from the item’s accessibility attributes out loud.
- __Single-swipe left or right__ and VoiceOver will select the next visible accessibility item and read it out loud. Right-swipes move forward and down, while left-swipes do the opposite.
- __Single-swipe down__ to spell the focused item letter-by-letter.
- __Double-tap__ to select the focused item.
- __Three-finger-swipe__ left or right to navigate forward or backward in a page view.

For the complete list of VoiceOver gestures, check out [Apple’s Learn VoiceOver gestures on iPhone](https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios). So now you know how VoiceOver works — but how does your app perform with it? You’ll test it in the next step.

---

## Trying VoiceOver With the Recipe App

---

## Accessibility Attributes

---

## Using the Accessibility Inspector

### Using the Inspection Pointer

### Using Quicklook to Check Audio in Xcode

### Highlighting Problems With the Inspector Audit

### Additional Inspector Settings

---

## Making the Recipe App Accessible

---

## Transforming the Difficulty Labels

### Checking for Warnings

### Making the Text Dynamic

---

## Testing Some Other Options

### Transforming the Recipe Detail Screen

### Improving the Checkboxes

---

## Where to Go From Here?

You can download the completed version of the project using the [<FontIcon icon="fas fa-download"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial.

In this iOS accessibility tutorial, you learned about VoiceOver. You performed manual auditing by scrolling through every accessible element and testing the user experience for yourself. Then you used the Accessibility Inspector to perform audits, look at accessibility element values and perform live dynamic changes to invert colors or change the font size.

Now, you have the necessary tools to make your app more accessible. Knowing you’ll have a positive impact on someone’s life is rewarding.

There are a ton of possibilities with accessibility features. This tutorial only scratches the surface to get you started. Below are more resources to check out:

- [Categories of Accessibility](https://support.apple.com/en-us/HT204390)
- [Accessibility Development Resources](https://developer.apple.com/accessibility/ios/)
- [Applying Accessibility to Custom Views](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html)
- [Deliver an Exceptional Accessibility Experience](https://developer.apple.com/videos/play/wwdc2018/230)
- [Accessibility Inspector](https://developer.apple.com/videos/play/wwdc2019/257/)

If you have any comments or questions, please join the discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/02/Recipe.zip