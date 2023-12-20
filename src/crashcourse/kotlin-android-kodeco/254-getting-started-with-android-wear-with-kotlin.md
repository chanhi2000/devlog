---
lang: ko-KR
title: Getting Started with Android Wear with Kotlin
description: 🅺Kodeco - Android & Kotlin > Getting Started with Android Wear with Kotlin
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Getting Started with Android Wear with Kotlin
    content: Getting Started with Android Wear with Kotlin
  - property: og:title
    content: Getting Started with Android Wear with Kotlin
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Getting Started with Android Wear with Kotlin
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kotlin-android-kodeco/254-getting-started-with-android-wear-with-kotlin.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Getting Started with Android Wear with Kotlin
desc: In this Android Wear tutorial, you’ll learn how to build an Android app for the Android Wear platform using the Kotlin language.
link: https://www.kodeco.com/254-getting-started-with-android-wear-with-kotlin
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-how-tos-android-55975187ac5a00b562ac524384d38defcd70c18864bc981c935584f2ff6a5767.svg
color: rgba(0, 184, 126, 0.2)
```

---

It __even lets you check the time__. Mind blowing, right?

In this Android Wear tutorial we’ll cover the basics of developing for Android Wear by creating a simple recipe app. In the process, you’ll learn:

- How to send messages from your watch to your phone and vice versa
- How to share code between your app module and your Wear module
- About the wearable support library
- How to package and ship your new Wear app

---

## A Brief History of Android Wear

Google officially announced Android Wear in the spring of 2014. Quickly after that, LG and Samsung released the first two Wear watches – the LG G watch and the Samsung Gear Live. Lots of updates ensued, and in the summer of 2015 Google decided to spread the love and released the Android Wear app on iOS. This allowed iPhone users to pair Android Wear watches with their phones. This gives you, our soon-to-be expert Wear app maker, twice the potential audience!

The latest update in our Wear saga came in February of 2017, when Google announced Wear 2.0. This update, among other things, has paved the way for __standalone__ Wear apps. _Standalone_ Wear apps are watch apps without a companion app on the phone. It also introduced a dedicated Wear app store on the watch to find new apps. Nice!

---

## Connecting to a Wear Device

Before you get started, you’ll need to connect your Wear device to your computer so you can debug the app.

::: note Note

If you don’t own an Android Wear device, don’t worry! You can still follow this tutorial with a watch AVD. If you choose this option, you can simply follow the very detailed [step-by-step tutorial on the official documentation](https://developer.android.com/training/wearables/apps/creating.html#creating) and skip directly to the next section.

:::

The first thing you’ll want to do is enable developer options on your watch. To do this, navigate to <FontIcon icon="iconfont icon-select"/>`Settings -> System -> About` on your watch or emulator and scroll down until you see the build number.

![Android Wear settings](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-11-01-at-12.25.57-PM-1-250x250.png)

![Android Wear settings](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-11-01-at-12.26.21-PM-250x250.png)

![Android Wear settings](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-11-01-at-12.26.49-PM-250x250.png)

Now tap the build number 7 times.

Wait What?

Yep. Just like on a normal Android Phone, you unlock developer options by tapping the build number 7 times.

Next, go back to the settings screen and tap the <FontIcon icon="iconfont icon-select"/>`[Developer options]` menu item. Make sure <FontIcon icon="iconfont icon-select"/>`[ADB debugging]` is turned on. If you see an option for usb-debugging, turn that on as well. Otherwise, turn on <FontIcon icon="iconfont icon-select"/>`[Debug over Bluetooth]`.

![ADB Debugging](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-11-01-at-12.42.50-PM-322x320.png)

Now that you’ve got ADB debugging all setup, you need to actually connect your Wear device to your computer. If you saw the debug over usb option in the developers option list, congratulations! You should be able to just plug your watch into your computer (via the charging cord) and be ready to go. Otherwise you need to connect over bluetooth.

### Debugging over Bluetooth

To debug over bluetooth, you’ll need an Android Wear watch paired with an Android phone. Make sure both the watch and the phone have adb debugging enabled. Next, open the Android Wear app on your phone and navigate to settings.

![Android Wear App Settings](https://koenig-media.raywenderlich.com/uploads/2017/11/device-2017-11-01-130252-480x189.png)

Scroll down to the <FontIcon icon="iconfont icon-select"/>`[Debugging over Bluetooth]` section and make sure the <FontIcon icon="iconfont icon-select"/>`[Device to Debug]` is set to your paired watch. Next, enable the <FontIcon icon="iconfont icon-select"/>`[Debugging over Bluetooth toggle]`. At this point, there should be a subtitle under the toggle that says<FontIcon icon="iconfont icon-select"/>` [Host: Disconnected]` and <FontIcon icon="iconfont icon-select"/>`[Target: Disconnected]`.

![Android Wear companion app settings](https://koenig-media.raywenderlich.com/uploads/2017/11/device-2017-11-01-130642-480x256.png)

But don’t you worry – they won’t stay disconnected for long! Open a terminal and enter the command

```sh
adb forward tcp:4444 localabstract:/adb-hub
```

followed by

```sh
adb connect 127.0.0.1:4444
```

Accept the adb-debugging prompt on your phone and you’re good to go! At this point the Android Wear app on your phone should have changed to connected for both host and target.

This process can be a bit thorny – if you run into any problems, you can [check out the official documentation](https://developer.android.com/training/wearables/apps/debugging.html#enable-dev-options).

---

## Getting Started

Start by downloading the `WEARsmyrecipe` starter project [<FontIcon icon="iconfont icon-select"/>here][download-material].

![Unzip then import the project in Android Studio 3.0.1 or later.](https://koenig-media.raywenderlich.com/uploads/2017/11/Capture-d%E2%80%99e%CC%81cran-2017-11-24-a%CC%80-14.16.06-267x320.png)

If you see a message to update the project’s Gradle plugin since you’re using a later version of Android Studio, then go ahead and choose “Update”.

Wait for the Gradle sync to complete.

On the top left hand side of Android Studio, make sure the Android dropdown is selected – this will give you a nice view of the project structure.

![Project structure](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-11-01-at-4.43.39-PM-258x320.png)

You can see two modules now:

- The `mobile` module, which is where the phone app code lives.
- A new `wear` module which is where the Wear app code lives.

The code is pretty basic right now – there’s a few helper files in place to show a list of recipes on the phone app, but that’s about it. Don’t worry, you’ll change that soon.

Run the mobile app. You may need to make sure the `mobile` configuration is set in the configuration dropdown. You should see a screen similar to this on your phone:

![Mobile app](https://koenig-media.raywenderlich.com/uploads/2017/11/device-2017-11-01-165658-180x320.png)

Nothing too crazy going on here – just a simple list of Recipes. (You can tell by the list that I’m an expert chef! Just kidding, I recently burned a can of soup. Turns out you need to take the soup out of the can. Who knew!)

Next you’ll run the Wear app. To point Android Studio towards the Wear module, you need to change the <FontIcon icon="iconfont icon-select"/>`[run configuration]` from mobile to Wear. Click the <FontIcon icon="iconfont icon-select"/>`[run configuration]` dropdown next to the run button. It should say “mobile” right now. Click the Wear option to change to the Wear configuration:

![Configurations](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-11-01-at-5.10.41-PM.png)

Now that we’re using the Wear run configuration, click the run button and and select your Wear device – you should see a screen similar to this:

![Hello world app](https://koenig-media.raywenderlich.com/uploads/2017/11/device-2017-11-01-171441.png)

If you have a round watch (like the Moto360) you may see something closer to this:

![Hello world app round](https://koenig-media.raywenderlich.com/uploads/2017/11/device-2017-11-01-171739.png)

And that cutoff text is just a darn shame. But you’re going to fix it!

---

## Building a Simple Recipe Layout

### Using the `BoxInsetLayout` Widget

### Fleshing out the Recipe Layout

---

## Sharing Code Between the Watch and the Phone

### Importing the Shared Library

### Adding the Meal Class

---

## Sending Messages Between Devices

### Using the Message API

### Listening for Messages

### Testing the App

### Using the Data Api

### Listening for Data Items

---

## Adding a Confirmation View

---

## Uploading your Wear App to the Play Store

---

## Where To Go From Here?

[<FontIcon icon="iconfont icon-select"/>Here][download-material-final] is the download for the final project.

In this Android Wear tutorial, you learned:

- how to design for both round and square watches
- how to communicate between the mobile and the Wear device, using both the Message and Data API
- and how to show some snazzy animations right out of the box!

There is a lot more to learn and do with Android Wear! If you’re interested in learning more about Android Wear development, [check out the official documentation](https://developer.android.com/wear/index.html).

- You can build __standalone__ apps with Wear-specific UI, new interactions and gestures.
- Also, you can create new __Watch Faces__
- Or you can add __Voice Capabilities__ to control your app with your voice!
- And many more cool features!

If you have any questions, or just want to share your favorite food puns, join the discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2017/11/WEARSmyrecipe-Starter-1.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2017/12/WEARSmyrecipe-Finish.zip