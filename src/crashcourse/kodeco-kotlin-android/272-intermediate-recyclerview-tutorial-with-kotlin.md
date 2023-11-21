---
lang: ko-KR
title: Intermediate RecyclerView Tutorial with Kotlin
description: 🅺Kodeco - Android & Kotlin > Intermediate RecyclerView Tutorial with Kotlin
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Intermediate RecyclerView Tutorial with Kotlin
    content: Intermediate RecyclerView Tutorial with Kotlin
  - property: og:title
    content: Intermediate RecyclerView Tutorial with Kotlin
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Intermediate RecyclerView Tutorial with Kotlin
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kodeco-kotlin-android/272-intermediate-recyclerview-tutorial-with-kotlin.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Intermediate RecyclerView Tutorial with Kotlin
desc: In this RecyclerView tutorial you will learn how to build out intermediate techniques like swiping, animation and filtering in Kotlin.
link: https://www.kodeco.com/272-intermediate-recyclerview-tutorial-with-kotlin
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-user-interface-android-d049bddfca80caac9854127a21a7287890d0ad1cd10fc7d7cb6538dc0d8d76a0.svg
color: rgba(0, 184, 126, 0.2)
```

Have you ever wanted to go to Mars or just look out over Mars’ horizon? We can’t send you there but we can give you the next best thing: an app with images from all the Mars rovers.

To show those images, we’ll use one of Android’s most popular views: the `RecyclerView`.

The `RecyclerView` layout was introduced in the Lollipop support library and Android developers have been using it for awhile. It is one of the most useful layouts and gives you more flexibility compared to a `ListView` in a much more performant package.

However, you may not know all that you can do with it. In this tutorial, you’ll see how to add sections, animations, dividers, and swipe gestures.

You should be familiar with the basics of using `ReyclerView`. If not, you can read an introduction to using `RecyclerView` [here](https://www.raywenderlich.com/126528/android-recyclerview-tutorial).

Here is a screenshot from the final version of our app:

![mars rover screenshot](https://koenig-media.raywenderlich.com/uploads/2017/10/Screenshot_1507091574-281x500.png =240x)

Checkout those amazing Mars landscapes! :]

You’re going to continue with the NASA site used in the previous `RecyclerView` tutorial, but do things a bit differently. You’ll be using an API that will return a list of Mars rover photos. Along with the `RecyclerView` of photos, there are two spinners to change the list of photos: one for rovers and the other for cameras.

--- 

## Getting Started

Download the starter project [<FontIcon icon="iconfont icon-select"/>here][download-material]. Open it up in Android Studio 3.0.1 or later.

Next, head to the NASA site ([https://api.nasa.gov/index.html#apply-for-an-api-key](https://api.nasa.gov/index.html#apply-for-an-api-key)) and get an API key to use for the rover photos.

Build and run your app on an emulator or phone. You should see a default “Hello World!” TextView in the center.

![](https://koenig-media.raywenderlich.com/uploads/2017/09/Screenshot_20170925-222953-281x500.png =240x)

### Manifest

### String Data

--- 

## Main Layout

--- 

## ViewHolder

--- 

## Adapter Layouts

--- 

## Data

--- 

## Adapter

--- 

## Section Headers

--- 

## DiffUtil

### Additional Methods

--- 

## Retrofit

--- 

## Updating the main UI

--- 

## Filtering

--- 

## ItemDecorators

--- 

## Animations

--- 

## Swiping

--- 

## Where to go from here

You’ve done a lot of work and now you know how to add animations, provide a swipe handler, add section headers, and use the `DiffUtil` class. Well done!

A great next step would be to eliminate the `PhotoRow` model class and `DefaultViewHolder` and get the project working with separate Header and Photo model objects and a dedicated `ViewHolder` for each.

The final project for this tutorial is available [<FontIcon icon="iconfont icon-select"/>here][download-material-final]. In the final project, be sure to remember to set the API key in <FontIcon icon="iconfont icon-java"/>`NasaApi.kt`.

If you need more information on `RecyclerView`s, you can check out the following Android developer documentation:

- [<FontIcon icon="iconfont icon-android"/>Recyclerview Layouts](https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=ko)
- [<FontIcon icon="iconfont icon-android"/>RecyclerView Class](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html)
- [<FontIcon icon="iconfont icon-android"/>DiffUtil Class](https://developer.android.com/reference/android/support/v7/util/DiffUtil.html)

I hope you enjoyed this Intermediate RecyclerView tutorial, and if you have any questions or comments, please join the forum discussion below!

Go forward and make great animated `RecyclerViews`!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2017/12/marsrovers-starter-1.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2017/12/marsrovers-final-1.zip