---
lang: ko-KR
title: Dependency Injection in Android with Dagger 2 and Kotlin
description: 🅺Kodeco - Android & Kotlin > Dependency Injection in Android with Dagger 2 and Kotlin
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Dependency Injection in Android with Dagger 2 and Kotlin
    content: Dependency Injection in Android with Dagger 2 and Kotlin
  - property: og:title
    content: Dependency Injection in Android with Dagger 2 and Kotlin
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Dependency Injection in Android with Dagger 2 and Kotlin
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kotlin-android-kodeco/262-dependency-injection-in-android-with-dagger-2-and-kotlin.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Dependency Injection in Android with Dagger 2 and Kotlin
desc: In this Android with Kotlin tutorial, you’ll learn about dependency injection and how to make use of the Dagger 2 Java/Android framework for this purpose.
link: https://www.kodeco.com/262-dependency-injection-in-android-with-dagger-2-and-kotlin
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-android-ac31fd227119039e3e4b8fe5b5ca86abdf928764640b62fe05286565f238b802.svg
color: rgba(0, 184, 126, 0.2)
```

---

::: note Update

This Dagger 2 tutorial is now up to date with the latest version of Android Studio, version 3.0.1, and uses Kotlin for app development. Update by Dario Coletto. Original tutorial by Joe Howard.

:::

It turns out that Dependency Injection is nowhere near as complex as its name implies. And it is a key tool for building software systems that are maintainable and testable. In the end, relying on dependency injection will simplify your code quite a bit and also allow for a clearer path to writing testable code.

In this tutorial, you’ll update an existing app named DroidWiki to use DI. The __DroidWiki__ app is a simple wikipedia client for android, based on __Dagger 2__ and __OkHttp 3__. The Wikipedia API is based on MediaWiki, and you can find the documentation [here](https://www.mediawiki.org/wiki/API:Main_page). These API are public and there is no need to get API keys or other stuff. But you should definitely check out [MediaWiki Etiquette](https://www.mediawiki.org/wiki/API:Etiquette).

Here’s a quick peek at the search result screen in DroidWiki:

![DroidWiki app](https://koenig-media.raywenderlich.com/uploads/2017/09/DroidWiki-SearchActivity-333x500.png)

---

## Introduction

Before we begin, if you don’t know what Dependency Injection is, here’s some great news: you’re probably already using it without knowing it!

### What is Dependency Injection?

### Practical example of Dependency Injection

### The Dependency Inversion Principle

### How can Dagger 2 help with DI

---

## Getting Started

### MVP

### Dependencies in DroidWiki

---

## Configure the Project With Dagger 2

---

## Dagger 2 public APIs

### Module

### `@Provides` and `@Singleton`

### Component

---

## Your first (dependency) injection

### Update HomepageActivity

### The General Pattern

---

## Injecting the Network Graph

### NetworkModule

### Simplifying API builder

### WikiModule

### Update PresenterModule

### Update WikiApi

---

## Where to Go From Here?

You can download the final project [<FontIcon icon="iconfont icon-select"/>Here][download-material-final].

A lot of developers asks themselves if all the changes you’ve applied to the DroidWiki app are useful or not. Especially since everything was already working before implementing dependency injection. The utility of dependency injection and a framework like Dagger 2 become most evident in real-world production apps, where the dependency graph can get very complex.

Dagger 2 and dependency injection become especially useful when implementing proper testing into your app, allowing mock implementations of back-end APIs and data repositories to be used in testing.

There’s much more to learn about in Dagger 2 and its usage, including:

- Scopes
- Subcomponents
- Testing with Mockito

There are many great resources out there on the interwebs to dive into these topics and one I must suggest is a __talk by Jake Wharton at DevOxx__, where you can get some more information about the history of DI on Android, some theory and some nice examples. As you do, happy injecting!

<YouTube id="plK0zyRLIP8"/>

If you have any questions or comments, please join the discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2017/12/droidwiki-starter.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2017/12/droidwiki-final.zip