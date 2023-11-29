---
lang: ko-KR
title: ViewPager Tutorial - Getting Started in Kotlin
description: 🅺Kodeco - Android & Kotlin > ViewPager Tutorial - Getting Started in Kotlin
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > ViewPager Tutorial - Getting Started in Kotlin
    content: ViewPager Tutorial - Getting Started in Kotlin
  - property: og:title
    content: ViewPager Tutorial - Getting Started in Kotlin
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > ViewPager Tutorial - Getting Started in Kotlin
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kotlin-android-kodeco/324-viewpager-tutorial-getting-started-in-kotlin.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: ViewPager Tutorial - Getting Started in Kotlin
desc: In this ViewPager tutorial for Android, you’ll learn how to use a ViewPager to navigate between content pages in Kotlin.
link: https://www.kodeco.com/324-viewpager-tutorial-getting-started-in-kotlin
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-user-interface-android-d049bddfca80caac9854127a21a7287890d0ad1cd10fc7d7cb6538dc0d8d76a0.svg
color: rgba(0, 184, 126, 0.2)
```

In this tutorial, you’ll become familiar with the `ViewPager` by modifying an existing app to make the UI more enjoyable. Along the way, you’ll also learn:

- How the `ViewPager` works
- How to keep it memory-efficient
- How to add some nice features to your `ViewPager`

::: note Note

This tutorial assumes you have previous experience with developing for Android in Kotlin. If you are unfamiliar with the language have a look at this tutorial. If you’re beginning with Android, check out some of our Getting Started and other Android tutorials.

:::

---

## Getting Started

Download the [starter project](https://koenig-media.raywenderlich.com/uploads/2017/11/FavoriteMovies-starter.zip) and open it by starting Android Studio and selecting <FontIcon icon="iconfont icon-select"/>`[Open an existing Android Studio project]`:

![Open an existing Android Studio project](https://koenig-media.raywenderlich.com/uploads/2017/11/Screen-Shot-2017-10-30-at-1.54.21-PM-410x320.png)

Navigate to the sample project directory and click <FontIcon icon="iconfont icon-select"/>`[Open]`.

![select the project](https://koenig-media.raywenderlich.com/uploads/2017/08/select-project.png)

Take a look at the existing code before going on with the tutorial. Inside the <FontIcon icon="iconfont icon-folder"/>`assets` directory, there is a JSON file containing some information about the top 5 most popular Android related movies ever made. :]

You can find the helper methods used to read the JSON data inside <FontIcon icon="iconfont icon-java"/>`MovieHelper.kt`. [The Picasso library](http://square.github.io/picasso) helps to easily download and display the images on the screen.

This tutorial uses fragments. If you are not familiar with fragments have a look at [this tutorial](https://www.raywenderlich.com/149112/android-fragments-tutorial-introduction). 

Build and Run the project.

![Running Starter Project](https://koenig-media.raywenderlich.com/uploads/2017/11/favoritemovies-starter.gif =240x)

The app consists of a few pages, each displaying some information about a movie. I bet the first thing you tried to do was swipe left to check out next movie! Or was it just me? For now, you can not-so-gracefully navigate between pages using the Previous and Next buttons at the bottom of the screen.

---

## Introducing the `ViewPager`

Adding a `ViewPager` to the UI will allow the users to move forward or backward through the movies by swiping across the screen. You don’t have to deal with the slide animation and the swipe gesture detection, so the implementation is easier than you might think.

You’ll divide the `ViewPager` implementation into three parts:

- Adding the `ViewPager`
- Creating an `Adapter` for the `ViewPager`
- Wiring up the `ViewPager` and the `Adapter`

### Preparing the `ViewPager`

For step one, open <FontIcon icon="iconfont icon-java"/>`MainActivity.kt` and remove everything inside `onCreate()`, below this line:

```kotlin
val movies = MovieHelper.getMoviesFromJson("movies.json", this)
```

Remove the `replaceFragment()` method from the bottom of the class as well.

Now open <FontIcon icon="iconfont icon-code"/>`activity_main.xml` and replace everything inside the `RelativeLayout` with the following:

```xml
<android.support.v4.view.ViewPager
    android:id="@+id/viewPager"
    android:layout_height="match_parent"
    android:layout_width="match_parent" />
```

Here you created the `ViewPager` view, which is now the only child of the `RelativeLayout`. Here’s how the xml file should look:

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
                xmlns:tools="http://schemas.android.com/tools"
                android:layout_height="match_parent"
                android:layout_width="match_parent"
                tools:context="com.raywenderlich.favoritemovies.MainActivity">

  <android.support.v4.view.ViewPager
      android:id="@+id/viewPager"
      android:layout_height="match_parent"
      android:layout_width="match_parent" />

</RelativeLayout>
```

`ViewPager` is only available through the Android Support Library. The Android Support Library is actually a set of libraries that provide backward compatible implementations of widgets and other standard Android functionality. These libraries provide a common API that often allow the use of newer Android SDK features on devices that only support lower API levels. You should familiarize yourself with the [Support Library](https://developer.android.com/topic/libraries/support-library/index.html) and [Support Library Packages](https://developer.android.com/topic/libraries/support-library/packages.html).

Go back to <FontIcon icon="iconfont icon-java"/>`MainActivity.kt` and first import the `ViewPager` to be able to use it with this line:

```kotlin
import android.support.v4.view.ViewPager
```

Now you can add the following line at the top of the class to declare the ViewPager:

```kotlin
private lateinit var viewPager: ViewPager
```

::: note Note

Use the keyword `lateinit` to avoid making the view nullable if you want to initialize it later. Read more about `lateinit` and other Kotlin modifiers [here](https://kotlinlang.org/docs/reference/properties.html#late-initialized-properties).

:::

Add this line at the bottom of the `onCreate()` method to link your `ViewPager` reference to the xml view you created previously:

```kotlin
viewPager = findViewById(R.id.viewPager)
```

### Implementing the `PagerAdapter`

Step one completed! You now have a `ViewPager` that doesn’t do anything particularly interesting without an `Adapter` that tells it what to display. If you run the app now you won’t be able to see any movies:

![Empty Screen](https://koenig-media.raywenderlich.com/uploads/2017/11/Screenshot_1509386896.png =240x)

The `ViewPager` usually displays the “pages” using fragment instances, but it can also work with simple views such as `ImageView` if you want to display static content. In this project, you will display multiple things on each page. `Fragments` are here to help you.

You will connect your `Fragment` instances with the `ViewPager` using a `PagerAdapter`, which is an object that sits between the `ViewPager` and the data set containing the information you want the `ViewPager` to display (in this case the movies array). The `PagerAdapter` will create each `Fragment`, add the corresponding movie data to it and return it to the `ViewPager`.

`PagerAdapter` is an abstract class, so you will have an instance of one of its subclasses (`FragmentPagerAdapter` and `FragmentStatePagerAdapter`) rather than an instance of the `PagerAdapter` itself.

### `FragmentPagerAdapter` or `FragmentStatePagerAdapter`?

There are two types of standard `PagerAdapters` that manage the lifecycle of each fragment: `FragmentPagerAdapter` and `FragmentStatePagerAdapter`. Both of them work well with fragments, but they are better suited for different scenarios:

- The `FragmentPagerAdapter` stores the fragments in memory as long as the user can navigate between them. When a fragment is not visible, the `PagerAdapter` will detach it, but not destroy it, so the fragment instance remains alive in the `FragmentManager`. It will release it from memory only when the `Activity` shuts down. This can make the transition between pages fast and smooth, but it could cause memory issues in your app if you need many fragments.
- The `FragmentStatePagerAdapter` makes sure to destroy all the fragments the user does not see and only keep their saved states in the `FragmentManager`, hence the name. When the user navigates back to a fragment, it will restore it using the saved state. This `PagerAdapter` requires much less memory, but the process of switching between pages can be slower.

It’s time to decide. Your list of movies has only five items, so the `FragmentPagerAdapter` might work after all. But what if you get bored after this tutorial and watch all Harry Potter movies? You’ll have to add 8 more items to the JSON file. What if you then decide to add your favorite TV series as well? That array can become pretty large. In this case, the `FragmentStatePagerAdapter` works better.

### Creating a Custom `FragmentStatePagerAdapter`

In the project navigator pane, right-click on `com.raywenderlich.favoritemovies` and select <FontIcon icon="iconfont icon-select"/>`[New -> Kotlin File/Class]`. Name it `MoviesPagerAdapter` and select <FontIcon icon="iconfont icon-select"/>`[Class]` for Kind. Hit <FontIcon icon="iconfont icon-select"/>`[OK]`.

![new Kotlin file](https://koenig-media.raywenderlich.com/uploads/2017/08/new-kotlin-file.png)

Replace the contents of this file with the following:

```kotlin
package com.raywenderlich.favoritemovies

import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentStatePagerAdapter

// 1
class MoviesPagerAdapter(fragmentManager: FragmentManager, private val movies: ArrayList<Movie>) : 
    FragmentStatePagerAdapter(fragmentManager) {

  // 2   
  override fun getItem(position: Int): Fragment {
    return MovieFragment.newInstance(movies[position])
  }

  // 3  
  override fun getCount(): Int {
    return movies.size
  }
}
```

Let’s go over this step-by-step.

1. Your new class extends `FragmentStatePagerAdapter`. The constructor of the superclass requires a `FragmentManager`, thus your custom `PagerAdapter` needs it as well. You also need to provide the list of movies as a parameter.
2. Return the fragment associated with the object located at the specified position.
3. Return the number of objects in the array.

When the `ViewPager` needs to display a fragment, it initiates a chat with the `PagerAdapter`. First, the `ViewPager` asks the `PagerAdapter` how many movies are in the array by calling `getCount()`. Then it will call `getItem(int position)` whenever a new page is about to be visible. Within this method, the `PagerAdapter` creates a new fragment that displays the information about the movie at the correct position in the array. 

### Connecting the `PagerAdapter` and the `ViewPager`

Open <FontIcon icon="iconfont icon-java"/>`MainActivity.kt` and add the following line at the top to declare your `MoviesPagerAdapter`:

```kotlin
private lateinit var pagerAdapter: MoviesPagerAdapter
```

Next add the following inside `onCreate()`, beneath the existing code:

```kotlin
pagerAdapter = MoviesPagerAdapter(supportFragmentManager, movies)
viewPager.adapter = pagerAdapter
```

This initializes your `MoviesPagerAdapter` and connects it to the `ViewPager`. 

::: note Note

`supportFragmentManager` is equivalent to the `getSupportFragmentManager()` method you would use in Java and `viewPager.adapter = pagerAdapter` is the same as `viewPager.setAdapter(pagerAdapter)`. Read more about getters and setters in Kotlin [here](https://kotlinlang.org/docs/reference/properties.html#getters-and-setters).

:::

Build and run. The app should behave like the original version, but you can now navigate between movies by swiping rather than pressing buttons :].

![Swiping ViewPager](https://koenig-media.raywenderlich.com/uploads/2017/11/swipe.gif =240x)

::: note Note

Using the `FragmentStatePagerAdapter` saves you from having to deal with saving the current page across a runtime configuration change, like rotating the device. The state of the `Activity` is usually lost in those situations and you would have to save it in the `Bundle` object passed as a parameter in `onCreate(savedInstanceState: Bundle?)`. Luckily, the `PagerAdapter` you used does all the work for you. You can read more about the `savedInstanceState` object and the `Activity` lifecycle [here](https://developer.android.com/guide/components/activities/activity-lifecycle.html).

:::

### Endless Scrolling

A nice feature you often see is being able to swipe continuously between pages in a circular manner. That is going to the last page when swiping right on the first one and going to the first one when swiping left on the last. For example, swiping between 3 pages would look like this: 

Page1 -> Page2 -> Page3 -> Page1 -> Page2

Page2

The `FragmentStatePagerAdapter` will stop creating new fragments when the current index reaches the number of objects returned by `getCount()`, so you need to change the method to return a fairly large number that the users are not very likely to reach by continuously swiping in the same direction. That way the `PagerAdapter` will keep creating pages until the page index reaches the value returned by `getCount()`.

Open <FontIcon icon="iconfont icon-java"/>`MoviesPagerAdapter.kt` and create a new constant representing the large number by adding this line at the top of the file above the class definition:

```kotlin
private const val MAX_VALUE = 200
```

Now replace the `return movies.size` line inside `getCount()` with this:

```kotlin
return movies.size * MAX_VALUE
```

By multiplying the length of the array with `MAX_VALUE`, the swipe limit will grow proportionally to the number of movies in your list. This way you don’t have to worry about `getCount()` returning a number that is less than the number of movies as your movie list grows.

The only problem you now have is inside the Adapter’s `getItem(position: Int)` method. Since `getCount()` now returns a number larger than the size of the list, the `ViewPager` will try to access the movie at an index greater than the array size when the user swipes past the last movie.

Replace the code inside `getItem(position: Int)` with this line:

```kotlin
return MovieFragment.newInstance(movies[position % movies.size])
```

This will ensure that the `ViewPager` doesn’t request the element at an index larger than `movies.size` because the remainder after you divide the position by `movies.size` will always be greater than or equal to 0 and less than `movies.size`.

Right now the infinite scrolling works only when the user navigates forward through the array (swipes left). That is because, when your app starts, the `ViewPager` displays the movie at index 0. To fix this issue, open <FontIcon icon="iconfont icon-java"/>`MainActivity.kt` and add the following line inside `onCreate()` below the line where you connect the `PageAdapter` to the `ViewPager`: 

```kotlin
viewPager.currentItem = pagerAdapter.count / 2
```

This tells the `ViewPager` to display the movie found in the middle of the array. The user has now plenty of swiping to do in either direction before they reach an end. To ensure that the movie displayed at the beginning will still be the first one in your list, set `MAX_VALUE` to be an even number (in this case 200 works fine). This way, after you divide `pagerAdapter.count` by 2, `pagerAdapter.count % movies.size = 0` (which is the first index that the `ViewPager` asks for when the app starts).

Build and run. You should now be able to swipe left and right a decent amount of times and the movies will start again from the beginning after you reach the last one and from the end when you reach the first one.

![Endless scroll](https://koenig-media.raywenderlich.com/uploads/2017/11/endless.gif =240x)

### Adding Tabs

A [`TabLayout`](https://developer.android.com/reference/android/support/design/widget/TabLayout.html) is a nice feature that makes it easy to explore and switch between pages. The `TabLayout` contains a tab for each page, which usually displays the page title. The user can tap on a tab to navigate directly to the desired page or can use a swipe gesture over the `TabLayout` to switch between pages.

If you try to add a `TabLayout` to your `ViewPager` you won’t be able to see any tabs because the layout will be automatically populated with as many tabs as the `FragmentStatePagerAdapter` tells it by calling the `getCount()` method, which now returns a pretty large number. Trying to fit that many tabs on your screen will make them really narrow.

Luckily, there is a third party library called [<FontIcon icon="iconfont icon-github"/>`nshmura/RecyclerTabLayout`](https://github.com/nshmura/RecyclerTabLayout) that solves this problem. The library uses the `RecyclerView` in its implementation. You can learn more about the mysterious `RecyclerView` from [this tutorial](https://www.raywenderlich.com/126528/android-recyclerview-tutorial). To install the library, open up <FontIcon icon="iconfont icon-folder"/>`/app/`<FontIcon icon="iconfont icon-engine"/>`build.grade` and add the following line inside `dependencies`:

```gradle
implementation 'com.nshmura:recyclertablayout:1.5.0'
```

The recyclertablayout library uses an old version of the Android Support Libraries, so you’ll need to add the following to make the Gradle sync happy:

```gradle
implementation 'com.android.support:recyclerview-v7:26.1.0'
```

Tap <FontIcon icon="iconfont icon-select"/>`[Sync Now]` on the yellow pop-up and wait until Android Studio installs the library.

Open <FontIcon icon="iconfont icon-code"/>`activity_main.xml` and paste the following snippet above the `ViewPager`:

```xml
<com.nshmura.recyclertablayout.RecyclerTabLayout
    android:id="@+id/recyclerTabLayout"
    android:layout_height="@dimen/tabs_height"
    android:layout_width="match_parent" />
```

Now add the following property to your `ViewPager` to align it below the `RecyclerTabLayout`:

```xml
android:layout_below="@id/recyclerTabLayout"
```
Your whole layout file should now look like this:

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
                xmlns:tools="http://schemas.android.com/tools"
                android:layout_height="match_parent"
                android:layout_width="match_parent"
                tools:context="com.raywenderlich.favoritemovies.MainActivity">

  <com.nshmura.recyclertablayout.RecyclerTabLayout
      android:id="@+id/recyclerTabLayout"
      android:layout_height="@dimen/tabs_height"
      android:layout_width="match_parent" />

  <android.support.v4.view.ViewPager
      android:id="@+id/viewPager"
      android:layout_below="@id/recyclerTabLayout"
      android:layout_height="match_parent"
      android:layout_width="match_parent" />

</RelativeLayout>
```

Open <FontIcon icon="iconfont icon-java"/>`MainActivity.kt` and import `RecyclerTabLayout` at the top of the file, like this:

```kotlin
import com.nshmura.recyclertablayout.RecyclerTabLayout
```

Now add the following at the top of the class to declare a `RecyclerTabLayout` instance:

```kotlin
private lateinit var recyclerTabLayout: RecyclerTabLayout
```

Add this block of code inside `onCreate()`, above the line where you set `viewPager.currentItem`:

```kotlin
recyclerTabLayout = findViewById(R.id.recyclerTabLayout)
recyclerTabLayout.setUpWithViewPager(viewPager)
```

The first line connects your `RecyclerTabLayout` instance to the xml view and the second one links the `RecyclerTabLayout` to your `ViewPager`.

The last thing you have to do is let the `RecyclerTabLayout` know what titles to display on the Tabs. Open <FontIcon icon="iconfont icon-java"/>`MoviesPagerAdapter.kt` and add the following method inside the class:

```kotlin
override fun getPageTitle(position: Int): CharSequence {
  return movies[position % movies.size].title
}
```

This method tells the `TabLayout` what to write on the tab placed at a particular position. It returns the title of the movie that corresponds with the fragment created inside `getItem(position: Int)`.

Run the app. You should be able to see the tabs changing as you swipe through the pages. Try tapping on a tab and see how the `ViewPager` will scroll automatically to the corresponding movie :].

![Tabs](https://koenig-media.raywenderlich.com/uploads/2017/11/tabs.gif =240x)

---

## Where to Go From Here?

You can download the final project for this tutorial here.

Nice job! You’ve modified an app and gave it a nicer UI with the help of `ViewPager`. You’ve also added a pretty cool `TabLayout` and implemented the endless scroll. In addition, you learned about the `PagerAdapter` and had to choose which of the `FragmentPagerAdapter` and `FragmentStatePagerAdapter` is best for you application. 

If you want to read more about the `ViewPager` have a look at the [documentation](https://developer.android.com/reference/android/support/v4/view/ViewPager.html). You can try and customize the transition animation with the help of `PageTransformer`. Check out [this tutorial](https://developer.android.com/training/animation/screen-slide.html#pagetransformer) for that.

::: info Bonus challenge

You can implement dot indicators for your pages as seen in many onboarding flows. [Here](https://stackoverflow.com/questions/38459309/how-do-you-create-an-android-view-pager-with-a-dots-indicator) you can find a nice way of creating dot indicators. Note that this solution won’t work with your final ViewPager from this tutorial as it needs `PagerAdapter`‘s `getCount()` method to return the exact number of pages. You can try implementing the indicators instead of the endless scroll. This time try using the default [TabLayout](https://developer.android.com/reference/android/support/design/widget/TabLayout.html) instead of the third party library. You can download the solution [here](https://koenig-media.raywenderlich.com/uploads/2017/11/FavoriteMovies-challenge.zip).

:::

Feel free to join the forum discussion below if you have any comments or questions!

---

<TagLinks />