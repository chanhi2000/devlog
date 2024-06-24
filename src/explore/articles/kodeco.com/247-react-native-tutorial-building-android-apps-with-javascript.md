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

In this React Native tutorial you’ll learn how to build native apps based on the hugely popular [<FontIcon icon="fa-brands fa-react"/>React](https://facebook.github.io/react/) JavaScript library.

What makes React Native different from other frameworks such as [PhoneGap (Apache Cordova)](http://phonegap.com/) or [Appcelerator Titanium](http://www.appcelerator.com/mobile-app-development-products/), that use JavaScript to create iOS apps?

1. (Unlike PhoneGap) with React Native your code may be written in JavaScript but the app’s UI is fully native. It doesn’t have the drawbacks typically associated with a hybrid HTML5 app.
2. Additionally (unlike Titanium), React introduces a novel, radical and highly functional approach to constructing user interfaces. Your UI is simply a function of the current app state.

React Native brings the [<FontIcon icon="fa-brands fa-react"/>React](http://facebook.github.io/react/) paradigm to mobile app development. It’s goal isn’t to write the code once and run it on any platform. The goal is to learn-once (the React way) and write-anywhere. An important distinction to make.

The community has even added tools such as [Expo](https://expo.io/) and [Create React Native App](https://github.com/react-community/create-react-native-app) to help you quickly build React Native apps without having to touch Xcode or Android Studio!

While you can write React Native apps for iOS and Android, this tutorial only covers Android. You can also check out our tutorial focused on [React Native for iOS](https://kodeco.com/485-react-native-tutorial-building-ios-apps-with-javascript).

![The tutorial takes you through the process of building an Android app for searching UK property listings](https://koenig-media.raywenderlich.com/uploads/2017/11/app_overview.png =240x)

Don’t worry if you’ve never written any JavaScript or used the CSS-like properties you’ll see. This tutorial will guide you through every step and provide resources where you can learn more.

Ready to get going? Read on!

::: tip Note

We also have an [iOS version of this tutorial](https://www.raywenderlich.com/165140/react-native-tutorial-building-ios-android-apps-javascript) that you may be interested in.

:::

---

## Getting Started

### Node and Java Development Kit

React Native uses [<FontIcon icon="fa-brands fa-node"/>Node.js](https://nodejs.org/), a JavaScript runtime, to build your JavaScript code. React Native also requires a recent version of the Java SE Development Kit (JDK) to run on Android. Follow the instructions for your system to make sure you install the required versions.

::: tabs

@tab <FontIcon icon="iconfont icon-macos"/>MacOS

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

@tab <FontIcon icon="fa-brands fa-windows"/>Windows

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

@tab <FontIcon icon="fa-brands fa-linux"/>Linux

Install <FontIcon icon="fa-brands fa-node"/>Node.js by following the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/). You will want to install Node.js version 6 or newer.

Finally, [download and install JDK 8 or newer](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) if needed.

:::

### React Native CLI

Use [<FontIcon icon="fa-brands fa-npm"/>Node Package Manager](https://www.npmjs.com/) (or npm) to install the React Native Command Line Interface (CLI) tool. In your terminal (Terminal or Command Prompt or shell) type:

```sh
npm install -g react-native-cli
```

npm fetches the CLI tool and installs it globally; npm is similar in function to [<FontIcon icon="fas fa-globe"/>JCenter](https://bintray.com/bintray/jcenter) and is packaged with Node.js.

Next, install Yarn using the instructions on the [Yarn website](https://yarnpkg.com/en/docs/install). Yarn is a fast npm client.  <!-- TODO: find yarn iconfont -->

### Android Development Environment

Set up your [Android development environment](https://kodeco.com/478209-beginning-android-development-with-kotlin-part-one-installing-android-studio), if haven’t done so. Make sure you can successfully run an Android app on an emulator. <!-- TODO: 작성 (/explore/articles/kodeco.com/478209-beginning-android-development-with-kotlin-part-one-installing-android-studi.md) -->

React Native requires `Android 6.0 (Marshmallow)`. In Android Studio, go to *Tools\Android\SDK Manager*. Select *SDK Platforms* and check *Show Package Details*. Make sure that the following items are checked.

- Google APIs, Android 23
- Android SDK Platform 23
- Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom_64 System Image

![](https://koenig-media.raywenderlich.com/uploads/2017/11/as_sdk_platforms.png)

Next, select *SDK Tools* and check *Show Package Details*. Expand *Android SDK Build-Tools* and make sure `23.0.1` is selected.

Finally, tap *Apply* to install your selections.

When the Android components are finished installing, create a new emulator running SDK Platform 23.

### Create the Starter App

Navigate to the folder where you would like to develop your app and run the following in your terminal:

```sh
react-native init PropertyFinder
```

This uses the CLI tool to create a starter project containing everything you need to build and run a React Native app.

In a terminal, run:

```sh
cd PropertyFinder
```

In the created folders and files you will find a few items of note:

- **node_modules** is a folder which contains the React Native framework
- **index.js** is the entry point created by the CLI tool
- **App.js** is the skeletal app created by the CLI tool
- **android** is a folder containing an Android project and the code required to *bootstrap* your application
- **ios** is a folder containing iOS-related code, which you won’t be touching in this tutorial.

Start your Android emulator running SDK 23 if it isn’t running.

Run the following command in a terminal:

```sh
react-native run-android
```

![The emulator will display the following](https://koenig-media.raywenderlich.com/uploads/2017/11/emulator_starter.png)

If you receive an error related to “SDK location not found”, then perform the following steps:

- Go to the <FontIcon icon="fas fa-folder-open"/>`android/` directory of your react-native project
- Create a file called <FontIcon icon="fas fa-file-lines"/>`local.properties` with this line:

```properties
sdk.dir = {PATH TO ANDROID SDK}
```

For example, on macOS, the SDK path will look something like <FontIcon icon="fas fa-folder-open"/>`/Users/USERNAME/Library/Android/sdk`.

You might also have noticed that a terminal window has popped up, displaying something like this:

![](https://koenig-media.raywenderlich.com/uploads/2017/11/terminal_metro.png)

This is [Metro Bundler (<FontIcon icon="iconfont icon-github"/>`facebook/metro-bundler`)](https://github.com/facebook/metro-bundler), the React Native JavaScript bundler running under Node.js. You’ll find out what it does shortly.

Don’t close the terminal window; just keep it running in the background. If you do close it by mistake, simply run the following in terminal:

```sh
react-native start
```

::: note

You’ll be mostly writing JavaScript code for this React Native tutorial so no need to use Android Studio as your editor. I use [<FontIcon icon="iconfont icon-subl"/>Sublime Text](http://www.sublimetext.com), which is a cheap and versatile editor, but [Atom](https://atom.io), [Brackets](http://brackets.io) or any other lightweight editor will do the job.

:::

---

## React Native Basics
  
In this section, you’ll learn React Native basics as you begin working on PropertyFinder.
  
Open <FontIcon icon="fa-brands fa-js"/>`App.js` in your text editor of choice and take a look at the structure of the code in the file:

```js
import React, { Component } from 'react'; // 1
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({ ... }); // 2

type Props = {};
export default class App extends Component<Props> { ... } // 3

const styles = StyleSheet.create({ ... }); // 4
```

Let’s go through the code step-by-step:
  
1. Imports the required modules.
2. Sets up a platform-specific display message.
3. Defines the component that represents the UI.
4. Creates a style object that controls the component’s layout and appearance.

Take a closer look at this import statement:
  
```js
import React, { Component } from 'react';
```

This uses the ECMAScript 6 (ES6) import syntax to load the `react` module and assign it to a variable called `React`. This is roughly equivalent to importing libraries in Android. It also uses what’s called a **destructuring assignment** to bring in the `Component` object. Destructuring lets you extract multiple object properties and assign them to variables using a single statement.

::: note

For more information about ES6 modules I’d recommend reading [<FontIcon icon="fas fa-globe"/>this blog post by Dr. Axel Rauschmayer](http://2ality.com/2014/09/es6-modules-final.html).

:::

ES6 is a much nicer way to write JavaScript, supporting features like default parameters, classes, arrow functions, and destructuring assignments. Not all browsers support ES6. React Native uses a tool called [<FontIcon icon="fas fa-globe"/>Babel](https://babeljs.io) to automatically translate modern JavaScript into compatible legacy JavaScript where necessary.

Back to <FontIcon icon="fa-brands fa-js"/>`App.js`, check out the class definition:

```js
export default class App extends Component<Props>
```

This defines a class which extends a React `Component`. The `export default` class modifier makes the class “public”, allowing it to be used in other files.

Open **index.js** and take a look at the entry point file:

```js
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

This registers the imported component that serves as the app’s entry point.
  
It’s time to start building your app.
  
In <FontIcon icon="fa-brands fa-js"/>`App.js`, add the following at the top of the file, just before the import statements:
  
```js
'use strict';
```

This enables **Strict Mode**, which adds improved error handling and disables some less-than-ideal JavaScript language features. In simple terms, it makes JavaScript better!

Inside the `App` class replace `render()` with the following:

```js
render() {
  return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
}
```

`App` extends `React.Component`, the basic building block of the React UI. Components contain immutable properties, mutable state variables and expose a method for rendering. Your current application is quite simple and only requires a render method.

React Native components are not Android view classes; instead they are a lightweight equivalent. The framework takes care of transforming the tree of React components into the required native UI.
  
Next, replace the `const styles` statement with the following:

```js
const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
```

This defines a single style that you’ve applied to the description text. If you’ve done any web development before, you’ll probably recognize those property names. The React Native StyleSheet class used to style the application UI is similar to the [<FontIcon icon="fa-brands fa-firefox"/>Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS) used on the Web.
  
Then, get rid of the `instructions` assignment code block as you no longer need it.

Save your changes to <FontIcon icon="fa-brands fa-js"/>`App.js` and return to the emulator.

![Double tap <kbd>R</kbd> on your keyboard, and you’ll see your fledgling property search app starting to take shape](https://koenig-media.raywenderlich.com/uploads/2017/11/emulator_search_text.png)

That’s a JavaScript application running in the emulator, rendering a native UI, without a browser in sight!
  
Still don’t trust me? Verify it for yourself: within Android Studio, select <FontIcon icon="iconfont icon-select"/>`[Tools\Android\Layout Inspector]`. Then check <FontIcon icon="iconfont icon-select"/>`[Show All Proceses]`, select **com.propertyfinder** and tap <FontIcon icon="iconfont icon-select"/>`[OK]` to inspect the view hierarchy:
  
![](https://koenig-media.raywenderlich.com/uploads/2017/11/as_select_process.png)

You will see no `WebView` instances anywhere!

![Your text is being displayed in a view called `ReactTextView`](https://koenig-media.raywenderlich.com/uploads/2017/11/as_layout_inspector.png)

But what is that? Go to the [project file finder (<FontIcon icon="iconfont icon-github"/> `facebook/react-native`)](https://github.com/facebook/react-native/find/master) and enter <FontIcon icon="fa-brands fa-java"/>`ReactTextView.java` in the prompt. Select the result matching this file to view the source code. Notice `ReactTextView` inherits directly from `TextView`. Neat!

Curious as to how it all works? Take a quick look at <FontIcon icon="fa-brands fa-java"/>`[MainActivity.java]` and <FontIcon icon="fa-brands fa-java"/>`[MainApplication.java]` which you can find in <FontIcon icon="fas fa-folder-open"/>`android/app/src/main/java/com/propertyfinder`.

`MainApplication` sets up a `ReactNativeHost` which in turn creates a `ReactInstanceManager`. The instance manager handles the communication between JavaScript and native Android.

`MainActivity` extends `ReactActivity` which creates a `ReactRootView` when launched. `ReactRootView` uses the instance manager to start the JavaScript application. It also renders the `App` component to set the Activity’s content view.

The terminal window that was opened when you ran this application started a packager and server that allows your JavaScript code to be fetched, by default on port 8081. For example:
  
```sh
http://localhost:8081/index.bundle?platform=android
```

Open this URL in your browser; you’ll see the JavaScript code for your app. You can find your “Search for houses to buy!” description code embedded among the React Native framework.
  
When your app starts, this code is loaded and executed by the JavaScriptCore library. In the case of your application, it loads the `App` component, then constructs the native Android view.

---

## Using JSX
  
Your current application uses `React.createElement` to construct the simple UI for your application, which React turns into the native equivalent. While your JavaScript code is perfectly readable in its present form, a more complex UI with nested elements would rapidly become quite a mess.

Make sure the app is still running, then return to your text editor to edit <FontIcon icon="fa-brands fa-js"/>`App.js`. Modify the body of `render` to be the following:
  
```jsx
return <Text style={styles.description}>Search for houses to buy! (Again)</Text>;
```

This is [<FontIcon icon="fa-brands fa-react"/>JSX](http://facebook.github.io/react/docs/jsx-in-depth.html), or JavaScript syntax extension, which mixes HTML-like syntax directly in your JavaScript code; if you’re already a web developer, this should feel rather familiar. You’ll use JSX throughout this article.

Save your changes to <FontIcon icon="fa-brands fa-js"/>`App.js` and return to the emulator.

![Tap <kbd>R</kbd> twice, and you’ll see your application refresh to display the updated message](https://koenig-media.raywenderlich.com/uploads/2017/11/emulator_jsx.png)

Re-running a React Native application is really as simple as refreshing a web browser! Note that this will only reflect changes made to your JavaScript files – native code or resource changes will require you to restart the packager.
  
You can even skip having to refresh the app by enabling live reload.

![Press <kbd>Cmd</kbd>+<kbd>m</kbd> for Mac or <kbd>Ctrl</kbd>+<kbd>m</kbd> for <FontIcon icon="fa-brands fa-windows"/>Windows/<FontIcon icon="fa-brands fa-linux"/>Linux in the emulator then select **Enable Live Reload**](https://koenig-media.raywenderlich.com/uploads/2017/11/emulator_enable_live_reload.png)

In <FontIcon icon="fa-brands fa-js"/>`App.js`, modify the `render` method’s body to the following:
  
```jsx
return <Text style={styles.description}>Search for houses to buy!</Text>;
```

Save your changes.

![Note that the emulator automatically refreshes to reflect your changes](https://koenig-media.raywenderlich.com/uploads/2017/11/emulator_live_reload_test.png)

---

## Adding Navigation

<!-- TODO: 작성 -->

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

You may also want to check out the equivalent tutorial for building [React Native apps on iOS](https://kodeco.com/485-react-native-tutorial-building-ios-apps-with-javascript).

If you’re a web developer, you’ve seen how to use JavaScript to easily create a native app. If you’re a native app developer, you’ve gained some appreciation for React Native’s fast iteration cycle. Whether you decide to use React Native in a future app or simply stick with native Android, I hope you’ve learned some interesting principles to apply to your next project.

If you have any questions or comments on this React Native tutorial, feel free to join the discussion in the forums below!

---

<TagLinks />

[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2018/01/PropertyFinder-final-v2.zip