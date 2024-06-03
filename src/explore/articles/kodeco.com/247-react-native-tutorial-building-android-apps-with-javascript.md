---
lang: ko-KR
title: React Native Tutorial - Building Android Apps with JavaScript
description: Article(s) > React Native Tutorial - Building Android Apps with JavaScript
icon: fa-brands fa-react
category:
  - Java
  - Kotlin
  - Android
  - Gradle
  - Article(s)
tag: 
  - blog
  - kodeco.com
  - java
  - kotiln
  - android
  - gradle
  - react
  - react-native
head:
  - - meta:
    - property: og:title
      content: Article(s) > React Native Tutorial - Building Android Apps with JavaScript
    - property: og:description
      content: React Native Tutorial - Building Android Apps with JavaScript
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/explore/articles/kodeco.com/247-react-native-tutorial-building-android-apps-with-javascript.html
prev: /programming/js-react/articles/README.md
date: 2018-01-03
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2018/01/React-twitter-4.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="React Native Tutorial - Building Android Apps with JavaScript"
  desc="In this React Native tutorial you’ll learn how to build native apps based on the hugely popular React JavaScript library, with a focus on Android."
  url="https://kodeco.com/247-react-native-tutorial-building-android-apps-with-javascript"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-android-ac31fd227119039e3e4b8fe5b5ca86abdf928764640b62fe05286565f238b802.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2018/01/React-twitter-4.png"/>

In this React Native tutorial you’ll learn how to build native apps based on the hugely popular [React](https://facebook.github.io/react/) JavaScript library.

What makes React Native different from other frameworks such as [PhoneGap (Apache Cordova)](http://phonegap.com/) or [Appcelerator Titanium](http://www.appcelerator.com/mobile-app-development-products/), that use JavaScript to create iOS apps?

1. (Unlike PhoneGap) with React Native your code may be written in JavaScript but the app’s UI is fully native. It doesn’t have the drawbacks typically associated with a hybrid HTML5 app.
2. Additionally (unlike Titanium), React introduces a novel, radical and highly functional approach to constructing user interfaces. Your UI is simply a function of the current app state.

React Native brings the [React](http://facebook.github.io/react/) paradigm to mobile app development. It’s goal isn’t to write the code once and run it on any platform. The goal is to learn-once (the React way) and write-anywhere. An important distinction to make.

The community has even added tools such as [Expo](https://expo.io/) and [Create React Native App](https://github.com/react-community/create-react-native-app) to help you quickly build React Native apps without having to touch Xcode or Android Studio!

While you can write React Native apps for iOS and Android, this tutorial only covers Android. You can also check out our tutorial focused on [React Native for iOS](https://www.kodeco.com/485-react-native-tutorial-building-ios-apps-with-javascript).

![The tutorial takes you through the process of building an Android app for searching UK property listings](https://koenig-media.raywenderlich.com/uploads/2017/11/app_overview.png =240x)

Don’t worry if you’ve never written any JavaScript or used the CSS-like properties you’ll see. This tutorial will guide you through every step and provide resources where you can learn more.

Ready to get going? Read on!

::: tip Note

We also have an [iOS version of this tutorial](https://www.raywenderlich.com/165140/react-native-tutorial-building-ios-android-apps-javascript) that you may be interested in.

:::

---

## Getting Started

### Node and Java Development Kit

React Native uses [Node.js](https://nodejs.org/), a JavaScript runtime, to build your JavaScript code. React Native also requires a recent version of the Java SE Development Kit (JDK) to run on Android. Follow the instructions for your system to make sure you install the required versions.

#### <FontIcon icon="iconfont icon-macos"/>MacOS

First install Homebrew using the instructions on the [Homebrew website](http://brew.sh/). Then install Node.js by executing the following in Terminal:

```sh
brew install node
```

Next, use `homebrew` to install [watchman](https://facebook.github.io/watchman/), a file watcher from Facebook:

```sh
brew install watchman
```

This is used by React Native to figure out when your code changes and rebuild accordingly. It’s like having Android Studio do a build each time you save your file.

Finally, [download and install JDK 8 or newer](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if needed.

#### Windows

First install Chocolatey using the instructions on the Chocolatey website.

Install Node.js if you don’t have it or have a version older than 4. Run the following command as Administrator (Right-click on Command Prompt and select `[“Run as Administrator”]`):

```sh
choco install -y nodejs.install
```

Python is needed to run the React Native build scripts. Run the following command as Administrator if you don’t have Python 2:

```sh
choco install -y python2
```

Run the following command as Administrator if you don’t have a JDK or have a version older than 8:

```sh
choco install -y jdk8
```

#### Linux

Install Node.js by following the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/). You will want to install Node.js version 6 or newer.

Finally, [download and install JDK 8 or newer](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if needed.

### React Native CLI

### Android Development Environment

### Create the Starter App

---

## React Native Basics

---

## Using JSX

---

## Adding Navigation

---

## Building out the Search Page

---

## Styling with Flexbox

---

## Handling Assets

---

## Adding Component State

---

## Initiating a Search

---

## Performing an API Request

---

## Displaying the Results

---

## A Touch of Style

---

## Where To Go From Here?

Congratulations on completing this React Native tutorial! You can [<FontIcon icon="iconfont icon-select"/>find the complete project][download-material-final] here if you want to compare notes.

As a challenge, try showing a property’s details when the user selects one from the search list. You can check out [the challenge solution](https://koenig-media.raywenderlich.com/uploads/2018/01/PropertyFinder-challenge-v2.zip) if you get stuck.

::: tip Note

Before opening the finished project or the challenge solution, first run `yarn` in terminal in the root folder of the project.

:::

Check out the [React Native’s source code](http://facebook.github.io/react-native/) if you’re curious. I suggest taking a look at this [ES6 resource](https://babeljs.io/learn-es2015/) to continue brushing up on modern JavaScript.

You may also want to check out the equivalent tutorial for building [React Native apps on iOS](https://www.kodeco.com/485-react-native-tutorial-building-ios-apps-with-javascript).

If you’re a web developer, you’ve seen how to use JavaScript to easily create a native app. If you’re a native app developer, you’ve gained some appreciation for React Native’s fast iteration cycle. Whether you decide to use React Native in a future app or simply stick with native Android, I hope you’ve learned some interesting principles to apply to your next project.

If you have any questions or comments on this React Native tutorial, feel free to join the discussion in the forums below!

---

<TagLinks />

[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2018/01/PropertyFinder-final-v2.zip