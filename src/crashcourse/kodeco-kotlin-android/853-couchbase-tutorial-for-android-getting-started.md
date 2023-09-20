---
lang: ko-KR
title: Couchbase Tutorial for Android - Getting Started
description: 🅺Kodeco - Android & Kotlin > Couchbase Tutorial for Android - Getting Started
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🅺Kodeco - Android & Kotlin > Couchbase Tutorial for Android - Getting Started
    content: Couchbase Tutorial for Android - Getting Started
  - property: og:title
    content: Couchbase Tutorial for Android - Getting Started
  - property: og:description
    content: 🅺Kodeco - Android & Kotlin > Couchbase Tutorial for Android - Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kodeco-kotlin-android/853-couchbase-tutorial-for-android-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Couchbase Tutorial for Android - Getting Started
desc: In this couchbase tutorial, you will learn how to use prebuilt Couchbase Lite databases, model, query, upload and sync data including attachments.
link: https://www.kodeco.com/853-couchbase-tutorial-for-android-getting-started
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-networking-android-56e153082b082a0e4dde87ceadfa482ce6812758e8d896a3f0b37732c718bd96.svg
color: rgba(0, 184, 126, 0.2)
```

[Couchbase Mobile](http://developer.couchbase.com/mobile) is a distributed database that runs on mobile devices and on app servers. Having a mobile database under your app results in speedy interactions with your application — even without network connectivity. When connectivity is restored, the full master-master replication automatically synchronizes the data.

Why would you choose Couchbase over the built-in SQLite support or a cloud-based data service?

- __Easy migration__: Since Couchbase is built on NoSQL, you can seamlessly change data as your application grows — without requiring elaborate upgrade scripts.
- __Simple data mapping__: Couchbase lets you store data in a format that closely resembles how your app uses the data.
- __Built-in synchronization__: If you have ever needed to build your own syncing solution, you know how complicated it can be. Couchbase’s Sync Gateway does all of the hard work for you.
- __Offline support__: Couchbase lets you develop your app without thinking about a network connection. You simply write to the local database and let Couchbase handle the rest.

In this Couchbase tutorial, you’ll develop a crowd-sourcing quiz application called __QuizzDroid__. Your answers will be shared (via Sync Gateway) with all other users. So there is no right or wrong answer — only what other users have answered. :]

![couchbase tutorial demo](https://koenig-media.raywenderlich.com/uploads/2016/07/demo.gif)

When you’re done, you’ll have learned the following:

- How to use prebuilt Couchbase Lite databases.
- How to model and query data including attachments.
- How to craft data.
- How to sync data and manage network availability.
- How to deploy your app to multiple emulators.

Are you excited? Let’s go!

::: tip Note

You should have a working knowledge of Android development before working through this Couchbase tutorial. If you need a refresher, take a look at some of our [introductory Android tutorials](http://www.raywenderlich.com/category/android)!

:::

---

## Getting Started

Download the [QuizzDroid starter project](https://koenig-media.raywenderlich.com/uploads/2016/09/quizzdroid-starter.zip) and open it in Android Studio. It already contains the Couchbase Lite Android SDK as a dependency and has two activities:

- __HomeActivity__ will display the list of questions.
- __QuestionActivity__ will contain the image, possible choices to select from and all answers from other users.

Build and run your app (some configurations of Android Studio may report build errors on the first attempt; in this case, simply build and run again, and you’ll be error-free). As you can see, the screen is empty:

![couchbase tutorial image01](https://koenig-media.raywenderlich.com/uploads/2016/07/image01.png)

You’re now ready to start bringing the activities to life.

Couchbase Mobile is divided into three components:

- __Couchbase Lite__: An embedded NoSQL database that runs on the device, within your application.
- __Sync Gateway__: An Internet-facing synchronization server that securely syncs data between device and cloud.
- __Couchbase Server__: A highly scalable cloud-based NoSQL server used as a storage engine by Sync Gateway.

You’ll use the Couchbase Lite database and the Sync Gateway in this tutorial in a simulated multi-user environment and briefly touch on the Couchbase server component.

---

## Using the Prebuilt Database

Since Couchbase Lite runs right on the device, you can bundle a prebuilt database in your application. This is optional; most apps start with an empty database and add data entered by the user or synchronized through Sync Gateway.

In this Couchbase tutorial, you will use a database containing a list of questions. [Download the database](https://koenig-media.raywenderlich.com/uploads/2016/07/quizzdroid.cblite2.zip) and move the zip file to <FontIcon icon="iconfont icon-folder"/> __app/src/main/assets/__ in the starter project:

![couchbase tutorial drag-db-finder](https://koenig-media.raywenderlich.com/uploads/2016/07/drag-db-finder-1.png)

The database starts in the <FontIcon icon="iconfont icon-folder"/> __assets__ folder, but Couchbase Lite reads from and persists to the <FontIcon icon="iconfont icon-folder"/> `data/data/com.raywenderlich.quizzdroid/files` folder. In the next section you’ll add code to move the database to its final location.

---

## Initializing the Database

Open `DataManager.java`. This is a singleton class providing access to the database instance throughout the application. Add the following to the constructor:

```java
Manager manager = null;
try {
  // 1
  manager = new Manager(new AndroidContext(context), Manager.DEFAULT_OPTIONS);
  // 2
  database = manager.getExistingDatabase("quizzdroid");
} catch (IOException e) {
  e.printStackTrace();
} catch (CouchbaseLiteException e) {
  e.printStackTrace();
}

// 3
if (database == null) {
  try {
    ZipUtils.unzip(context.getAssets().open("quizzdroid.cblite2.zip"), manager.getContext().getFilesDir());
    // 4
    database = manager.getDatabase("quizzdroid");
  } catch (IOException e) {
    e.printStackTrace();
  } catch (CouchbaseLiteException e) {
    e.printStackTrace();
  }
}
```

Here’s what this code does:

1. Instantiates the Couchbase Lite `Manager`. A Manager is the top-level object managing a collection of Couchbase Lite Database instances. You must create a Manager instance before working with Couchbase Lite objects. The `Manager.DEFAULT_OPTIONS` parameter indicates default options, including read/write support.
2. Checks for an existing `Database` named “quizzdroid”. This line returns `null` if the database doesn’t exist, as would be the case on first launch.
3. If the database doesn’t exist, the `ZipUtils.unzip` method unzips the zip database file into the <FontIcon icon="iconfont icon-folder"/> __files__ directory; otherwise, nothing further needs to be done.
4. The database is instantiated using the `getDatabase` method.



---

## Database Listener

---

## The Home Screen

---

## Data Modeling

---

## POJO Classes

---

## Indexing Data

---

## Querying and Displaying Data

---

## Home Activity → Question Activity

---

## The Question Screen

---

<TagLinks/>