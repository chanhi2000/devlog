---
lang: ko-KR
title: "Android Accessibility Tutorial: Getting Started"
description: "Article(s) > Android Accessibility Tutorial: Getting Started"
icon: fa-brands fa-android
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
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Android Accessibility Tutorial: Getting Started"
    - property: og:description
      content: "Android Accessibility Tutorial: Getting Started"
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/explore/articles/kodeco.com/240-android-accessibility-tutorial-getting-started.html
prev: /programming/java-android/articles/README.md
date: 2018-01-10
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2018/01/Accessibility-twitter.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Android > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-android/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Android Accessibility Tutorial: Getting Started"
  desc="In this Android accessibility tutorial, learn how to make apps that everyone can use, including people with vision, motor, or hearing disabilities."
  url="https://kodeco.com/240-android-accessibility-tutorial-getting-started"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-core-concepts-android-77962866f13954987c7faf212535d8d6e3147669e3b2ba559cf1672f12bbeffe.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2018/01/Accessibility-twitter.png"/>

Most people will have at least a short term disability at some time that makes it difficult to use their mobile device. This includes someone who was born blind, or lost fine motor skills in an accident. This also includes someone who can’t use their hands because they are carrying a wiggly child. You may have experienced difficulties using your phone while wearing gloves when it’s cold outside. Maybe you’ve had a hard time distinguishing items on the screen when it’s bright outside.

With so much of the population experiencing decreased vision, hearing, mobility, and cognitive function, you should do your best to give everyone the best experience in your apps that you can. It’s a small way you can make people’s lives better.

In this tutorial, you are going to learn ways you can make your Android app more accessible by updating a coffee tracking app. There are many things that help, and by the end of this tutorial you will know the most basic ways you can improve your app for accessibility. You will learn:

- What accessibility tools people are using to navigate your app
- How to discover existing accessibility issues, and prevent accessibility regression
- Android attributes you can use to make your app more accessible
- Design guidelines to allow your user to use your app with ease

This tutorial assumes you have basic knowledge of Kotlin and Android. If you’re new to Android, check out our [<FontIcon icon="fas fa-globe"/>Android tutorials](https://kodeco.com/android). If you know Android, but are unfamiliar with Kotlin, take a look at [Kotlin For Android: An Introduction](/explore/articles/kodeco.com/1144981-kotlin-for-android-an-introduction.md).

---

## Getting Started

The app you will be improving allows you to set the number of cups of coffee you want to limit yourself to, and keeps track of where you are within that limit. There is an `EditText` field to enter the number of cups you want to limit consumption to. There is also a button to add cups of coffee that have been consumed. To show how much of the limit has been consumed, there is a coffee cup that fills up as more cups are consumed, reaching full when the limit is reached.

Start by downloading the [<FontIcon icon="fas fa-file-zipper"/>starter project][download-material]. Then open the project in Android Studio 3.0.1 or greater by going to <FontIcon icon="iconfont icon-select"/>`[File]` > `[New]` > `[Import Project]`, and selecting the <FontIcon icon="iconfont icon-gradle"/>`build.gradle` file in the root of the project.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screen-Shot-2018-01-05-at-3.46.13-PM-480x97.png)

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screen-Shot-2018-01-05-at-3.53.18-PM-322x320.png)

Once it finishes loading and building, you will be able to run the application on a device or emulator. Try setting a new limit, and adding cups of coffee to see how the app works.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/giphy-1.gif =240x)

The two main files you will be working with for this tutorial are <FontIcon icon="iconfont icon-kotlin"/>`MainActivity.kt` and <FontIcon icon="iconfont icon-code"/>`activty_main.xml`. Here’s a quick summary of all the files you’ll see in this tutorial.

- .<FontIcon icon="iconfont icon-kotlin"/>`MainActivity.kt` contains the view code for the main screen. It listens for events from the user updating the limit and how many cups of coffee have been consumed, and updates the view accordingly.
- .<FontIcon icon="iconfont icon-code"/>`activty_main.xml` is the layout for the main screen. In it you’ll see all the components that make up the view.
- .<FontIcon icon="iconfont icon-code"/>`strings.xml` holds all the strings you define that are user visible or audible.
- .<FontIcon icon="iconfont icon-code"/>`styles.xml` contains the app wide styles of the app.
- .<FontIcon icon="iconfont icon-kotlin"/>`CoffeeRepository.kt` keeps track of how much coffee has been consumed. You won’t need to change anything in it, just know this is what it is used for.

Now that you have the app up and running, and have a basic understanding of how it works, you can look for accessibility shortcomings, and make changes to fix them.

---

## Enabling accessibility tools

There are many tools that people use to interact with their Android devices. This includes **TalkBack**, **Magnification**, and **Switch Access**, to name a few.

TalkBack allows you to explore the view using gestures, while also audibly describing what’s on the screen. Magnification allows you to zoom in on parts of the screen. Both TalkBack and Magnification are helpful for people with limited visibility. People with limited mobility can use Switch Access to allow them to navigate without using the touch screen. You can find [<FontIcon icon="fa-brands fa-android"/>all the accessibility features](https://support.google.com/accessibility/android/answer/6006564?hl=en) in **Settings/Accessibility** on your device.

![](https://koenig-media.raywenderlich.com/uploads/2017/12/food-drink-coffee-cup-768x768.png)

This tutorial is going to look mainly at TalkBack, as it incorporates both screen traversal for navigation and screen reading to understand what is in focus. You can enable all the accessibility tools the same way as you will turn on TalkBack in this tutorial.

By using TalkBack, a user can use gestures, such as swiping left to right, on the screen to traverse the items shown on the screen. As each item is in focus, there is an audible description given. This is useful for people with vision impairments that cannot see the screen well enough to understand what is there, or select what they need to.

::: note

TalkBack is only available on physical devices running Lollipop or higher, and cannot be accessed on an emulator.

:::

To turn on TalkBack, go to Settings on your Android device. Then find **Accessibility/TalkBack**, and toggle the tool on.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/giphy-1-1.gif =240x)

With the default settings, in a left to right language, swipe right to advance to the next item on the screen, left to go to the previous, and double tap to select. In a right to left language, the swipe directions are reversed.

With these gestures you can start exploring the application using TalkBack. Try closing your eyes while using it to see if you can understand what you’re “looking” at. Don’t be shy to try out the other accessibility tools too. By trying these out you are able to spot things that are hard to access or understand by those that are impaired.

---

## Testing Tools

While using TalkBack and other accessibility tools is helpful for finding accessibility shortcomings, there are a couple other testing tools provided for developers to help identify accessibility issues.

### Lint

The simplest of these is the [<FontIcon icon="fa-brands fa-android"/>linter](https://developer.android.com/training/accessibility/testing.html#lint) that Google provides. This is enabled by default in Android Studio, and will warn you of accessibility issues such as missing `contentDescription` (Later in this tutorial you’ll learn why using `contentDescription` in important).

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screen-Shot-2018-01-05-at-4.23.31-PM-480x96.png)

### Espresso tests

For more in depth checks, you can turn on checks in your Espresso tests. Do this by adding the following line to your test or test runner.

```kotlin
AccessibilityChecks.enable()
```

Check the [<FontIcon icon="fa-brands fa-android"/>Google docs](https://developer.android.com/training/accessibility/testing.html#automated) for how you can further configure these tests.

### Accessibility Scanner

Google also gives us an Accessibility Scanner that you can [<FontIcon icon="fa-brands fa-google-play"/>download](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) from the Play Store. Download it now so you can use it with this tutorial. After downloading, the scanner can be turned on in the same Accessibility settings menu you were in before to turn on TalkBack. Navigate to **Settings/Accessibility/Accessibility Scanner**, and toggle it on.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/giphy-2.gif =240x)

Once turned on, navigate to the screen you want to scan, tap the check mark in the blue circle. Wait a moment for the results of the scan to show.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-165446.png =240x)

The results will show the scanned screen with orange boxes around any issues it found. By clicking on any of these boxes, you’ll get the description of what was found to be wrong, and a suggestion for how to fix it.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-170153.png =240x)

Now that you know how to find accessibility issues, you can get to work on fixing them, and making the world a better place!

---

## Accessibility Attributes

One of the things that are highlighted by the Accessibility Scanner is the “add coffee” `FloatingActionButton`. It gives you the message “This item may not have a label readable by screen readers.”

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-162959.png =240x)

You can better understand the implications of this while using TalkBack. Try navigating to it using TalkBack. When the button comes into focus you hear the audio “unlabeled button”. This is not very descriptive for a person who cannot see the screen well enough to infer the meaning.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-171420.png =240x)

### Content description

You can easily improve this user experience by adding a `android:contentDescription` attribute to the “add coffee” `FloatingActionButton`. [<FontIcon icon="fa-brands fa-android"/>`contentDescription`](https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription) is a small bit of text that describes the view. You don’t need to include that it is a button in your description. This is already inferred by the screen reader, and it will announce it on its own. Add the content description “Add Coffee” to the button. This is done directly on that element in <FontIcon icon="iconfont icon-code"/>`activty_main.xml`. You will also need to add the string resource in the <FontIcon icon="iconfont icon-code"/>`strings.xml`.

> .<FontIcon icon="iconfont icon-code"/>`activty_main.xml`

```xml
<android.support.design.widget.FloatingActionButton
   android:id="@+id/addCoffee"
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:clickable="true"
   android:contentDescription="@string/add_coffee"
   android:focusable="true"
   android:src="@drawable/ic_add_24px"
   app:fabSize="normal"
   app:layout_anchor="@id/mainContent"
   app:layout_anchorGravity="bottom|right|end"
   tools:targetApi="lollipop_mr1"/>
```

> .<FontIcon icon="iconfont icon-code"/>`strings.xml`

```xml
<resources>
  <string name="app_name">CoffeeOverflow</string>
  <string name="coffee_limit_label">Coffee Limit</string>
  <string name="default_coffee_limit">5</string>
  <string name="coffee_limit_input_hint">Limit</string>
  <string name="amount_consumed">Amount Consumed</string>
  <string name="consumed_format">%1$d of %2$s</string>
  <string name="add_coffee">Add Coffee</string>
</resources>
```

Once this change is made, build and run the app again. By running the Accessibility Scanner, you will no longer see this warning.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-174007.png =240x)

Then, when you test it out with TalkBack, you will hear the audio “add coffee button” when the `FloatingActionButton` is selected. Yay! Already making improvements.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-171420-2.png =240x)

See how the reader includes “button” in the audio without us including that into the description, along with instructions on how to use: “double tap to activate.” When a user can further interact with an element they have in focus, the screen reader will give clues on how to do that automatically.

![](https://koenig-media.raywenderlich.com/uploads/2017/12/basic-happy-2.png)

Adding a content description is something you should do for every image or button that does not otherwise have text for the screen reader to read. If the element is not important to understand what is on the screen, the `contentDescription` can be set to `@null`. If you do this, TalkBack, and other screen readers will skip the element entirely, and move onto the next thing in the view.

Another attribute you can use to tell the screen reader to skip the view element is [<FontIcon icon="fa-brands fa-android"/>`android:isImportantForAccessibility`](https://developer.android.com/reference/android/view/View.html#isImportantForAccessibility()). When set to `”no”`, the screen reader will skip this element while traversing the view.

### Grouping

While using the TalkBack tool, you may have noticed how hard it was to get to the “add coffee” `FloatingActionButton`.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/giphy-3.gif =240x)

TalkBack traverses through everything on the screen, in order of the file. This can make some core actions, like incrementing the cups of coffee, harder to reach. There are other things, like label/value pairs, that require extra steps to get all the information when they should be grouped together. You should make sure everything on the screen is reached in a logical order, and grouped in a way that makes sense.

There are attributes you can use to improve these issues. Start with the “Amount Consumed” label, and the associated value. These are both parts of the same piece of information, and should be grouped together instead of requiring you to traverse each one separately.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-185158.png)

To specify that both the elements should be in focus at the same time, add the `android:focusable` attribute with the value `”true”` the parent element of the two, the `LinearLayout` with the id `consumedContainer`. Also add the attribute `android:focusableInTouchMode` with the value `”false”`, as you only want this to be focusable for the screen reader.

> .<FontIcon icon="iconfont icon-code"/>`activty_main.xml`

```xml
<LinearLayout
   android:id="@+id/consumedContainer"
   android:layout_width="match_parent"
   android:layout_height="wrap_content"
   android:focusable="true"
   android:focusableInTouchMode="false"
   android:orientation="horizontal">
```

Run the app with these changes, and try out TalkBack. Observe that “Amount Consumed” and the value are read at the same time. Now that the information is grouped together, it is clear that they are part of the same bit of information, and is it quicker to understand and consume.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-185328.png)

### Labels

That solved the grouping for the consumption, but you have a similar issue for “Coffee Limit”. The label is read separately from the editable value, with nothing linking the two. This will use a different solution than you used for the amount consumed. The `EditText` still needs to be individually focusable to change the value. Add the `android:labelFor` attribute to the “Coffee Limit” `TextView`, with a value of the id of the `EditText` value, `coffeeLimitValue`.

> .<FontIcon icon="iconfont icon-code"/>`activty_main.xml`

```xml
<TextView
   android:id="@+id/coffeeLimitLabel"
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:layout_gravity="start|center_vertical"
   android:layout_weight="1"
   android:labelFor="@id/coffeeLimitValue"
   android:text="@string/coffee_limit_label"
   android:textAppearance="@style/TextAppearance.AppCompat.Title"/>
```

Now run the app to observe the changes. When the `EditText` with the value for the limit is selected, it includes the text of the label in the audio: ‘limit for “Coffee Limit”’. This provides the user context about what the editable value is for, relating it to the previous element. Use `labelFor` whenever you have a situation where you have a label and a value that should be individually focusable, but are referring to the same thing.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-191132.png =240x)

### Traversal order

Now to handle the `FloatingActionButton`. You can use [<FontIcon icon="fa-brands fa-android"/>`android:accessibilityTraversalBefore`](https://developer.android.com/reference/android/view/View.html#attr_android:accessibilityTraversalBefore) on a view to specify what item this should come before. Add this to the `FloatingActionButton` using the id of the container holding the consumed amount as the value.

> .<FontIcon icon="iconfont icon-code"/>`activty_main.xml`

```xml
<android.support.design.widget.FloatingActionButton
   android:id="@+id/addCoffee"
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:accessibilityTraversalBefore="@+id/consumedContainer"
   android:clickable="true"
   android:contentDescription="@string/add_coffee"
   android:focusable="true"
   android:src="@drawable/ic_add_24px"
   app:fabSize="normal"
   app:layout_anchor="@id/mainContent"
   app:layout_anchorGravity="bottom|right|end"
   tools:targetApi="lollipop_mr1"/>
```

Now when you rebuild and run the app with TalkBack, you will reach the “add coffee” button before the container holding the consumption, and therefore, the rest of the view. This will also be helpful for navigating the app using Switch Access.

::: note

`accessibilityTraversalBefore` is only available on Lollipop and higher, and will only work if the element whose id you provided is focusable. Because the `LinearLayout` with the id `consumedContainer` is focusable, this works here if you’re running on a device with version 5.0 or higher.

:::

![](https://koenig-media.raywenderlich.com/uploads/2018/01/giphy-4.gif =240x)

### Announce for accessibility

Have you tried adding a cup of coffee with TalkBack on? Did you notice anything missing for those with visual impairments? When the cup is added the value of the amount consumed is changed along with the ratio of coffee in the coffee cup. These are great visual cues, but it is lacking for those who can’t see them. How can you make this audible?

![](https://koenig-media.raywenderlich.com/uploads/2018/01/android-happy-1.png)

For this you can use the method `announceForAccessibility()` on a view. When [<FontIcon icon="fa-brands fa-android"/>`announceForAccessibility()`](https://developer.android.com/reference/android/view/View.html#announceForAccessibility(java.lang.CharSequence)) is called, Android will give an audible announcement for those using a screen reader, and do nothing if an accessibility tool is not in use. You can use this to inform the user that the value has been incremented.

In the `onCreate()` method in `MainActivity`, there is a click listener on the “add coffee” button that increments the number of cups of coffee, and shows the result. Add a call to `announceForAccessibility()` on the updated view to announce the change was made. Put the string you’re using for the message in the strings file. There is already a helper method, `consumedString()`, you can use to get the resulting value.

> .<FontIcon icon="iconfont icon-kotlin"/>`MainActivity.kt`

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
  // … 
 
  addCoffee.setOnClickListener {
    coffeeRepo.increment()
    showCount()
 
    amountConsumed.announceForAccessibility(getString(R.string.count_updated, consumedString()))
  }
}
```

> .<FontIcon icon="iconfont icon-code"/>`strings.xml`

```xml
<resources>
  <string name="app_name">CoffeeOverflow</string>
  <string name="coffee_limit_label">Coffee Limit</string>
  <string name="default_coffee_limit">5</string>
  <string name="coffee_limit_input_hint">Limit</string>
  <string name="amount_consumed">Amount Consumed</string>
  <string name="consumed_format">%1$d of %2$s</string>
  <string name="add_coffee">Add Coffee</string>
  <string name="count_updated">Count updated %s</string>
</resources>
```

Try using TalkBack to increment the cups of coffee consumed with this update. Now there is an audible cue in addition to the visual when the amount consumed is incremented.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-171420-3.png =240x)

If you don’t want the experience to change for sighted users, `announceForAccessibility()` is a great thing to use. Use it whenever you have a place where there is a meaningful change that was previously only indicated visually.

Another option for updating the user about a change is with [<FontIcon icon="fa-brands fa-android"/>Toasts](https://developer.android.com/guide/topics/ui/notifiers/toasts.html). When Toasts are shown on screen, they are announced when accessibility tools such as TalkBack are enabled.

---

## Designing for accessibility

There are things you can build into the design of your apps to make it easier for all your users to use. Size, colors, and layouts are all things you can be considerate of.

### Touch targets

Take a look at your Accessibility Scanner results again. You can open the app to see the history of any scans you have taken, or perform a new scan. There is a warning on the limit `EditText`. It says, “Consider making this clickable item larger. This item’s height is 44dp. Consider making the height of this touch target 48dp or larger.”

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-193246.png)

It’s [<FontIcon icon="fa-brands fa-android"/>recommended by Google](https://developer.android.com/guide/topics/ui/accessibility/apps.html#touch-targets) to make any clickable items at least 48dp in size. That is because anything smaller is difficult for people with vision and motor impairments to tap accurately. In addition, you’ll help out all your users that might be in a bumpy vehicle, wearing gloves, or in bright light that makes it hard to see the screen. Everyone benefits from making this improvement.

To solve this, add the `android:minHeight` attribute to that `EditText`. Make sure the value is at least 48dp. Alternatively, you could set `android:height` to 48dp or higher. This example uses `minHeight`.

> .<FontIcon icon="iconfont icon-code"/>`activty_main.xml`

```xml
<EditText
   android:id="@+id/coffeeLimitValue"
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:layout_gravity="end"
   android:layout_weight="1"
   android:hint="@string/coffee_limit_input_hint"
   android:inputType="number"
   android:minHeight="48dp"
   android:text="@string/default_coffee_limit"
   android:textAlignment="textEnd"/>
```

Run the Accessibility Scanner again to make sure this works. There should no longer be a warning for the height of this item.

### Color contrast

There are two warnings remaining. There is still one on the `EditText` that says “Multiple items have the same description.” Because you put the `labelFor` on the label for this field, the description for the label is part of the description for the limit field. You can leave this one be.

The other is on the text in the toolbar. The message says “Consider increasing this item’s text foreground to background contrast ratio.” Having low vision, color blindness, or a dimmed screen can make it difficult to read text with a low color contrast.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-193740.png)

The [<FontIcon icon="fa-brands fa-android"/>recommended contrast ratio](https://developer.android.com/guide/topics/ui/accessibility/apps.html#color-contrast) for text this size is at least 3.0 to 1.

Depending on where this is in your app, there are multiple possible actions you can take. You can change the font color. You can also change the background color. These are usually done in the layout xml file, <FontIcon icon="iconfont icon-code"/>`activty_main.xml` in this case. Because this is in the the action bar, you are going to change it in the styles in <FontIcon icon="iconfont icon-code"/>`styles.xml`.

Open the file and observe the parent style. The app is currently using a parent dark action bar theme, `Theme.AppCompat.Light.DarkActionBar`. The action bar is yellow, a light color, so this should be a light theme. Replace the parent style with `Theme.AppCompat.Light`.

> .<FontIcon icon="iconfont icon-code"/>`styles.xml`

```xml
<style name="AppTheme" parent="Theme.AppCompat.Light">
  <item name="colorPrimary">@color/colorPrimary</item>
  <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
  <item name="colorAccent">@color/colorAccent</item>
</style>
```

This will change the text of the action bar from white to black. Run the Scanner again to see that this warning is gone.

![](https://koenig-media.raywenderlich.com/uploads/2018/01/Screenshot_20180105-193834.png)

---

## Where to go from here

By completing this tutorial, you’ve learned many ways to make your apps more accessible. You can download the finished project [<FontIcon icon="fas fa-file-zipper"/>Here][download-material-final].

Now you know how to use TalkBack and the Accessibility Scanner to identify accessibility issues in your app. You also know that you can use Espresso and Lint to catch and make sure issues don’t creep in.

Through using the Accessibility Scanner and TalkBack, you identified areas of the app that could use accessibility improvements, then learned and completed the steps to fix them. You can use `contentDescription`, `isImportantForAccessibility`, `focusable`, `accessibilityTraversalBefore`, and `announceForAccessibility` to give the user the right information at the right time when using a screen reader.

You also know some tips for creating accessible designs. Making sure touch targets are big enough, and you have a high enough color contrast will benefit all your users.

These are some of the main things you can do to make your app accessible, but there are also many more things. Make sure to go through Google’s [<FontIcon icon="fa-brands fa-android"/>accessibility checklist](https://developer.android.com/guide/topics/ui/accessibility/checklist.html) when creating your app. You’ll find things you learned here, as well ways to get started making even more improvements.

Write your app with *everyone* in mind!

Here are some more resources on accessibility for you:

- [<FontIcon icon="fa-brands fa-android"/>Google’s overview about Android accessibility](https://developer.android.com/guide/topics/ui/accessibility/index.html) <!-- TODO: add VPCard -->
- [<FontIcon icon="fa-brands fa-android"/>Google’s “Implementing Accessibility”](https://developer.android.com/training/accessibility/index.html) <!-- TODO: add VPCard -->
- [‘How to Earn an “A” for Android Accessibility’ by Nick Bonatsakis](https://www.raizlabs.com/dev/2017/05/android-accessibility/)
- [<FontIcon icon="fa-brands fa-youtube"/>“Android is for Everyone” by Kelly Shuster](https://youtu.be/fBz5M3CbhYw)

<VidStack src="youtube/fBz5M3CbhYw" />

Please join the comments below with any questions or thoughts!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2018/01/CoffeeOverflow-1.0.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2018/01/CoffeeOverflow-1.0-finished-1.zip