---
lang: ko-KR
title: Dependency Injection in Android with Dagger 2 and Kotlin
description: Article(s) > Dependency Injection in Android with Dagger 2 and Kotlin
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
      content: Article(s) > Dependency Injection in Android with Dagger 2 and Kotlin
    - property: og:description
      content: Dependency Injection in Android with Dagger 2 and Kotlin
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/explore/articles/kodeco.com/262-dependency-injection-in-android-with-dagger-2-and-kotlin.html
prev: /programming/java-android/articles/README.md
date: 2017-12-13
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2017/12/Dagger-twitter2.png
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
  name="Dependency Injection in Android with Dagger 2 and Kotlin"
  desc="In this Android with Kotlin tutorial, you’ll learn about dependency injection and how to make use of the Dagger 2 Java/Android framework for this purpose."
  url="https://kodeco.com/262-dependency-injection-in-android-with-dagger-2-and-kotlin"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-tools-libraries-android-ac31fd227119039e3e4b8fe5b5ca86abdf928764640b62fe05286565f238b802.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2017/12/Dagger-twitter2.png"/>

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

First, what is a dependency? Any non-trivial software program is going to contain components that pass information and send message calls back and forth between one another.

For example, when using an Object Oriented Programming language (such as Java/Kotlin on Android), objects will call methods on other objects that they have references to. A _dependency_ is when one of the objects depends on the concrete implementation of another object.

### Practical example of Dependency Injection

Consider a practical example in Kotlin code. You can identify a dependency in your code whenever you instantiate an object within another. In such a case, you are responsible for creating and configuring the object that is being created. For example, consider the following class `Parent`:

```kotlin
class Parent {
    private val child = Child()
}
```

A `Parent` instance creates its `child` field when it’s instantiated. The `Parent` instance is dependent on the concrete implementation of `Child` and on configuring the `child` field to use it.

This presents a coupling or dependency of the `Parent` class on the `Child` class. If the setup of a `Child` object is complex, all that complexity will be reflected within the `Parent` class as well. You will need to edit `Parent` to configure a `Child` object.

If the `Child` class itself depends on a class `C`, which in turn depends on class `D`, then all that complexity will propagate throughout the code base and hence result in a tight coupling between the components of the application.

__Dependency Injection__ is the term used to describe the technique of loosening the coupling just described. In the simple example above, only one tiny change is needed:

```kotlin
class Parent(private val child: Child)
```

Voilà — that’s dependency injection at its core!

Rather than creating the child object inside the `Parent` class, the `child` object is passed into or _injected_ into `Parent`‘s constructor. The responsibility for configuring `child` is elsewhere, and the `Parent` class is a consumer of the `Child` class.

### The Dependency Inversion Principle

Dependency injection is often discussed in conjunction with one of the five __SOLID principles__ of Object-Oriented Design: the __Dependency Inversion principle__. For a great introduction to the SOLID principles, particularly on Android, check out this [post from Realm on Dependency Inversion](https://realm.io/news/donn-felker-solid-part-5/).

The gist of the Dependency Inversion principle is that it is important to depend on abstractions rather than concrete implementations.

In the simple example above, this means changing `Child` to a Kotlin `interface` rather than a Kotlin `class`. With this change, many different types of concrete `Child` type objects that adhere to the `Child` interface can be passed into the `Parent` constructor. This presents several key benefits:

- Allows for the `Parent` class to be tested with various kinds of `Child` objects.
- Mock `Child` objects can be used as needed in certain test scenarios.
- Testing of `Parent` is independent of the implementation of `Child`.

### How can Dagger 2 help with DI

[Dagger 2](https://google.github.io/dagger/) is the result of a collaboration between the team behind [<FontIcon icon="iconfont icon-github"/>`google/guice`](https://github.com/google/guice) (developed by Google) and Dagger (the predecessor of Dagger 2, created by Square).

They fixed a lot of problems from their previous work, and Dagger 2 is the faster framework for DI (since it works at compile time rather than at runtime with reflection).

::: tip Note

Dagger 2 is written in Java, but it works with Kotlin without any modification. However, the code generated by the annotation processor will be Java code (that is 100% interoperable with Kotlin).

:::

The name “Dagger” is inspired in part by the nature of dependencies in software development. The web of dependencies that occur between objects such as `Parent`, `Child`, `OtherClass`, etc., create a structure called a __Directed Acyclic Graph__. Dagger 2 is used to simplify the creation of such graphs in your Java and Android projects.

Enough theory! Time to start writing some code.

---

## Getting Started

Download the starter project [<FontIcon icon="iconfont icon-select"/>`[here]`][download-material].

Open the starter app in Android Studio 3.0.1 or greater and if it prompts you to update your gradle version, go ahead and do so. 

![Run the starter app in either an emulator or on a device, and you should see a screen like the following](https://koenig-media.raywenderlich.com/uploads/2017/09/DroidWiki-HomepageActivity.png =240x)

The app consists of three screens. The first one is just a splashscreen.

In the second one you’ll see an HTML version of the Wikipedia homepage, obtained through the WikiMedia API. The `Toolbar` at the top of the page contains a magnifier that, when tapped, will lead you to the third screen.

From there, you can type something to search on Wikipedia and press the search button to run a query. Results will be displayed as a list of `CardViews` inside a `RecyclerView`.

Examine the app project structure and existing classes. You’ll see that the app uses the __Model-View-Presenter__ (MVP) pattern to structure the code. Besides Dagger 2, the app uses common Android libraries such as:

- [OkHttp 3](http://square.github.io/okhttp/)
- `RecyclerView`
- [Kotlin synthetic properties](https://kotlinlang.org/docs/tutorials/android-plugin.html)

The subpackages in the main package are `application`, `model`, `network`, `ui` and `utils`. If you explore the `ui` package, you’ll see subpackages for the three screens. 

![Except for the splashscreen, each other package has classes for the view and presenter classes for the screen.](https://koenig-media.raywenderlich.com/uploads/2017/12/Screenshot-from-2017-12-04-14-54-59.png)

By examining the app <FontIcon icon="iconfont icon-engine"/>`build.gradle` file, you’ll also see that the app applies the plugin `kotlin-android-extensions`. It is used to implement view binding and `kotlin-kapt` for annotation processing.

### MVP

In case you’re unfamiliar with the MVP pattern, there are many good online resources for getting started.

MVP is similar to other structural patterns for implementing separation of concerns. Examples are __Model-View-Controller__ and __Model-View-ViewModel__. In MVP on Android, your activities and fragments typically act as the view objects. They do so by implementing a view interface and handling interaction of the app with the user.

The view passes on user actions to the __presenter__, which handles the business logic and interaction with data repositories, such as a server API or database. The __model__ layer consists of the objects that make up the content of the app.

In the case of DroidWiki, the `HomepageActivity` class implements the `HomepageView` interface. `HomepageActivity` has a reference to a `HomepagePresenter` interface. This controls access to model objects of type `Homepage`

The use of OkHttp 3 is found in the `WikiApi` class in the `network` package. This class defines the interface to the WikiMedia API required by the app. There are two calls of type __GET__ defined and the `JSONObject` will let you parse the obtained responses. The parsing will be executed in the `HomepageResult` and the `SearchResult` classes. And you will get a `WikiHomepage` object and a list of `Entry` objects.

::: tip Note

Since Kotlin doesn’t need you to write getters and setters, you can replace POJO classes with a `data class`. For more information, see [the official kotlin data classes documentation](https://kotlinlang.org/docs/reference/data-classes.html).

:::


### Dependencies in DroidWiki

Open the `HomepageActivity` class in the `ui.homepage` package. In its `onCreate()` method, there are several calls to configure a `HomepagePresenter`:

```kotlin
private val presenter: HomepagePresenter = HomepagePresenterImpl()
...
presenter.setView(this)
presenter.loadHomepage()
```

Here, you create a concrete implementation of a `HomepagePresenter` when the activity is instantiated.

Open <FontIcon icon="iconfont icon-java"/>`HomepagePresenterImpl.kt` and take a look at `loadHomepage()`. Both an `OkHttpClient` object and a `WikiApi` object are created and configured in the `loadHomepage()` method. The same happens for the `SearchActivity` with an `EntryPresenter` and a list of `EntryView`.

This creation of dependencies couple the model, view, and presenter layers too tightly. Swapping in a mock presenter for the view is impossible as written without updating the view code. The code for creating the `OkHttpClient` and `WikiApi` objects is repeated between the two presenter implementations in the app: `HomepagePresenterImpl` and `EntryPresenterImpl`.

Finally, it’s time to start writing some code to remove code duplication and some coupling between layers!

---

## Configure the Project With Dagger 2

Configuring Dagger with Kotlin is a little bit different from how you may have done with Java.
Dagger requires an __annotation processor__, and thus the main difference is which one you are going to use. In fact with Java you used the Groovy methods `apt` or the newer `annotationProcessor`, while with Kotlin you need to use `kapt`.

By default kapt is not enabled in Kotlin, and to enable it you must apply its plugin to your app <FontIcon icon="iconfont icon-engine"/>`build.gradle`, so add the line 
`apply plugin: 'kotlin-kapt'`:

```groovy
plugins {
  id("com.android.application")
  id("kotlin-android")
  id("kotlin-kapt")
}
```

Then add these dependencies to actually “install” dagger

```groovy
dependencies {
  // ...
  implementation 'com.google.dagger:dagger:2.11'
  kapt 'com.google.dagger:dagger-compiler:2.11'
  provided 'javax.annotation:jsr250-api:1.0'
  // ...
}
```

Here we’re using Dagger 2.11, you can check the latest version in the [Maven repository](https://mvnrepository.com/artifact/com.google.dagger/dagger).

Android Studio will prompt you to sync your gradle files on this change, so please go ahead and do so to ensure that you’re including Dagger correctly. Notice that you are including an annotation library from `javax`, because many of the features of Dagger are provided by __Java annotations__.

---

## Dagger 2 public APIs

Dagger 2 can seem complex at the beginning, but it’s really not so hard. In fact, the _complete_ public API of Dagger is composed by less than 30 lines of code. And from these lines you can remove a pair of interfaces that are rarely used (Lazy and MapKey), so the most used public APIs are composed of 3 annotations:

```kotlin
public @interface Component {
  Class<?> [] modules() default {};
  Class<?> [] dependencies() default {};
}
public @interface Module {
  Class<?> [] includes() default {};
}
public @interface Provides {}
```

Now let’s see how these annotations are used to bring dependency injection to your projects!

### Module

The first annotation you’ll use is the `@Module` annotation.

![Start by creating a new package named `dagger` under the app main package, by right-clicking the main package and selecting <FontIcon icon="iconfont icon-select"/>`[New/Package]`](https://koenig-media.raywenderlich.com/uploads/2017/12/Screenshot-from-2017-12-04-15-27-13-650x167.png)

Next, create a new file in the `dagger` package. 

![Right-click `dagger` and select <FontIcon icon="iconfont icon-select"/>`[New/Kotlin File/Class]`. Name the class `AppModule`.](https://koenig-media.raywenderlich.com/uploads/2017/09/DroidWiki-NewKotlinClass-480x122.png)

Add the following empty class to the new file:

```kotlin
@Module
class AppModule {
}
```

Here, you’ve created a class named `AppModule` and annotated it with the Dagger `@Module` annotation. Android Studio should automatically create any necessary import statements for you. But if not, hit <kbd>option</kbd>+<kbd>return</kbd> on Mac or <kbd>Alt</kbd>+<kbd>Enter</kbd> on PC to create them as needed.

The `@Module` annotation tells Dagger that the `AppModule` class will provide dependencies for a part of the application. It is normal to have multiple Dagger modules in a project, and it is typical for one of them to provide app-wide dependencies.

Add that capability now by inserting the following code within the body of the `AppModule` class:

```kotlin
@Module
class AppModule(private val app: Application) {
  @Provides
  @Singleton
  fun provideContext(): Context = app
}
```

You’ve added a private field to hold a reference to the `app` object, a constructor to configure `app`, and a `provideContext()` method that returns the `app` object. Notice that there are two more Dagger annotations on that method: `@Provides` and `@Singleton`.

### `@Provides` and `@Singleton`

The `@Provides` annotation tells Dagger that the method provides a certain type of dependency, in this case, a `Context` object. When a part of the app requests that Dagger inject a `Context`, the `@Provides` annotation tells Dagger where to find it.

::: tip Note

The method names for the providers, such as `provideContext()`, are not important and can be named anything you like. Dagger only looks at the return type. Using `provide` as a prefix is a common convention.

:::

The `@Singleton` annotation is not part of the Dagger API. It’s contained inside the javax package you added to your build.gradle at the beginning. It tells Dagger that there should only be a single instance of that dependency. So when generating the code Dagger will handle all the logic for you, and you won’t write all the boilerplate code to check if another instance of the object is already available.

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

You can download the final project [<FontIcon icon="fas fa-file-zipper"/>here][download-material-final].

A lot of developers asks themselves if all the changes you’ve applied to the DroidWiki app are useful or not. Especially since everything was already working before implementing dependency injection. The utility of dependency injection and a framework like Dagger 2 become most evident in real-world production apps, where the dependency graph can get very complex.

Dagger 2 and dependency injection become especially useful when implementing proper testing into your app, allowing mock implementations of back-end APIs and data repositories to be used in testing.

There’s much more to learn about in Dagger 2 and its usage, including:

- Scopes
- Subcomponents
- Testing with Mockito

There are many great resources out there on the interwebs to dive into these topics and one I must suggest is a __talk by Jake Wharton at DevOxx__, where you can get some more information about the history of DI on Android, some theory and some nice examples. As you do, happy injecting!

<VidStack src="youtube/plK0zyRLIP8"/>

If you have any questions or comments, please join the discussion below!

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2017/12/droidwiki-starter.zip
[download-material-final]: https://koenig-media.raywenderlich.com/uploads/2017/12/droidwiki-final.zip