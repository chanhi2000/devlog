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

Now that the database is initialized, you should verify it is working properly. This is a perfect job for the __Database Listener__, which is a component that provides an HTTP entry point to the database. This component is optional and is often used for the following reasons:

- __Debugging__: In development, it’s much faster to use the HTTP API to inspect the database than to set breakpoints and examine query results.
- __Peer-to-peer__: Other databases (often running on different devices) can persist data to the listener directly without the need for a server to act as the intermediary. This aspect of Couchbase Mobile isn’t covered in this Couchbase tutorial.
- __Hybrid development__: Used to access the database from JavaScript frameworks within a WebView.
The image below illustrates the Couchbase system architecture. Notice that a database can communicate directly with another database with a listener, instead of having to use the server as a middle-man.

![diagrams.002](https://koenig-media.raywenderlich.com/uploads/2016/07/diagrams.002.png)

Back in <FontIcon icon="iconfont icon-file"/> `DataManager.java`, add the following below the existing code in the constructor method:

```java
View.setCompiler(new JavaScriptViewCompiler());
Database.setFilterCompiler(new JavaScriptReplicationFilterCompiler());

Credentials credentials = new Credentials(null, null);
LiteListener liteListener = new LiteListener(manager, 5984, credentials);

Thread thread = new Thread(liteListener);
thread.start();
```

Be sure to import the `Credentials` from the `com.couchbase.lite.listener` namespace.

![couchbase tutorial image02](https://koenig-media.raywenderlich.com/uploads/2016/07/image02.png)

This code creates a database listener on port 5984 and starts it on a background thread.

Build and run your app; you should see the same blank screen as before.

To access the database from a browser or a command-line utility such as `curl`, you must enable port forwarding for that port using ADB. From the command line, run the following:

```sh
adb forward tcp:5984 tcp:5984
```

Your database is now accessible on __http://localhost:5984/quizzdroid__.

You can also access the database using the following `curl` command:

```sh
curl -X GET 'http://localhost:5984/quizzdroid'
# 
# {
#   "disk_size":147960,
#   "db_uuid":"53b66d23-8803-43f3-a4db-a49d51b09efe",
#   "db_name":"quizzdroid",
#   "update_seq":6,
#   "instance_start_time":1468585759670000,
#   "doc_count":6
# }
```

Notice the `doc_count` is `6`, which confirms the prebuilt database was successfully loaded.

Your next task is to display the six questions on the Home Screen.

---

## The Home Screen

Couchbase Mobile is a schemaless database, which means there are no restrictions on the database schema. This lets you be quite flexible during development because you don’t need to run database migrations every time the schema changes. Nonetheless, the application code must know about the data structures underneath.

### Data Modeling

Below is the data model for this application:

![diagrams.003](https://koenig-media.raywenderlich.com/uploads/2016/07/diagrams.003.png)

Data records are called documents, and there are two document types: `question` and `answer`. The underlying data format is JSON. You can think of a document as a set of key-value pairs. There is a one-to-many relationship between the question and answer documents.

### POJO Classes

In order to manage the Couchbase documents, you will create POJO (Plain Old Java Object) classes to map the Couchbase documents to Java objects.

Open <FontIcon icon="iconfont icon-folder"/>`model`/<FontIcon icon="iconfont icon-file"/>`Question.java` and add the following instance variables:

```java
private String _id;
private String _rev;
private String text;
private String tag;
private String type;
private List<String> options;

@JsonIgnore
private String _attachments;
```

Notice the instance variables are the same as the ones listed in the data model table. These variables represent the keys in the `question` document type. You will use the Jackson library to convert between POJOs and JSON.

All the properties reserved for Couchbase Lite are prepended with `_`, such as `_id`, `_rev`, and `_attachments`. The `_attachments` property is only present if the document contains attachments. You will load attachments through another API method, so it’s marked with the `@JsonIgnore` annotation, telling Jackson to ignore the variable.

Use the Android Studio <kbd>CTRL</kbd>+<kbd>Enter</kbd> shortcut to add getter and setter methods for each instance variable.

![getter-setters](https://koenig-media.raywenderlich.com/uploads/2016/07/getter-setters-1.gif)

With the __Question__ model in the application, you can now write a view to index question documents.

### Indexing Data

The way to query data in Couchbase Lite is by registering a View and then running a __Query__ on it with __QueryOptions__. The first thing to know about Couchbase Views is that they have nothing to do with the user interface views.

A View in Couchbase is a persistent index of documents in a database, which can be queried to find data. The main component of a View is its `map` function. It takes a document’s JSON as input, and emits any number of key-value pairs to be indexed.

First, you will define the view to index the documents of type __question__. The diagram below shows the result of that map function.

![diagrams.005](https://koenig-media.raywenderlich.com/uploads/2016/07/diagrams.005.png)

Remember that a view index is a list of key-value pairs, sorted by key. The view’s logic is written in the native language of the platform you’re developing on.

Add the following static method to <FontIcon icon="iconfont icon-folder"/>`model`/<FontIcon icon="iconfont icon-file"/>`Question.java`:

```java
public static Query getQuestions(Database database) {
  // 1
  View view = database.getView("app/questions");
  if (view.getMap() == null) {
    // 2
    view.setMap(new Mapper() {
      @Override
      // 3
      public void map(Map<String, Object> document, Emitter emitter) {
        // 4
        if (document.get("type").equals("question")) {
          emitter.emit(document.get("_id"), null);
        }
      }
    }, "1");
  }
  Query query = view.createQuery();
  return query;
}
```

This method returns a query from a database View. Walking through the code:

1. Request a database view named questions. This will create the view if it doesn’t exist.
2. If the view does not already have a mapping, create one with a new `Mapper` object. The second parameter to `setMap` is a version number. If your code for the map changes in the future, the version number should be incremented as well.
3. The `Mapper` object calls `map` for each document in the database.
4. If the document type equals `question`, then emit the key-value pair for the view.


### Querying and Displaying Data

With the view now defined, you are ready to run a `Query` on it. The result of a query is an instance of `QueryEnumerator`, which provides a list of `QueryRow` objects, each one describing a single row from the view’s index.

Add the following code to the end of the `onCreate` method in <FontIcon icon="iconfont icon-file"/>`HomeActivity.java`:

```java
// 1
QueryEnumerator questions = null;
try {
  questions = Question.getQuestions(manager.database).run();
} catch (CouchbaseLiteException e) {
  e.printStackTrace();
}

// 2
List<Question> data = new ArrayList<>();
for (QueryRow question : questions) {
  Document document = question.getDocument();
  Question model = ModelHelper.modelForDocument(document, Question.class);
  data.add(model);
}

// 3
final HomeAdapter adapter = new HomeAdapter(data);
mRecyclerView.setAdapter(adapter);
```

This code does the following:

1. Runs the query and saves the result in a `questions` variable.
2. Loops over the query rows and deserializes the `Question` model objects.
3. Connects the questions to the RecyclerView

Notice the call to `ModelHelper.modelForDocument`. Open <FontIcon icon="iconfont icon-file"/> `ModelHelper.java`, and take a look at `modelForDocument`. It uses the Jackson library to convert the properties in the question `QueryRow` object to the `Question` object.

If you run the app, the screen will still be blank because the Recycler View isn’t drawing the rows. In <FontIcon icon="iconfont icon-folder"/>`adapter`/<FontIcon icon="iconfont icon-file"/>`HomeAdapter.java`, add the following code to `onBindViewHolder`:

```java
// 1
Question question = mQuestions.get(position);

// 2
switch (question.getTag()) {
  case "science":
    holder.itemView.setBackgroundColor(Color.parseColor("#EC5766"));
    break;
  case "geography":
    holder.itemView.setBackgroundColor(Color.parseColor("#FFC857"));
    break;
  case "android":
    holder.itemView.setBackgroundColor(Color.parseColor("#63ADF2"));
    break;
  case "logic":
    holder.itemView.setBackgroundColor(Color.parseColor("#86CD82"));
}

// 3
holder.mQuestion.setText(question.getText());
holder.mTag.setText(question.getTag());

// 4
holder.itemView.setOnClickListener(new View.OnClickListener() {
  @Override
  public void onClick(View v) {
    if (mOnItemClickListener != null) {
      mOnItemClickListener.OnClick(v, position);
    }
  }
});
```

This code does the following:

1. Retrieves the `question` object for the requested row position.
2. Uses the category returned by `getTag` to set the background colors.
3. Sets the content to display in the TextViews for the question text and category.
4. Assigns an `onClick` listener to respond when the user taps a question.

::: note Note

Check out the [Recycler View](https://www.raywenderlich.com/126528/android-recyclerview-tutorial) tutorial if you need a refresher on using Recycler Views.

:::

Build and run your app; you should now see six questions on the home screen.

![image03](https://koenig-media.raywenderlich.com/uploads/2016/07/image03.png)

Well done! In the next section, you’ll add a row click handler to open the Question activity.

::: note Note

Run the same query using the Listener. The result has the same questions you see in the app. This lets you examine the details of each question document. The query link is __http://localhost:5984/quizzdroid/_design/app/_view/questions?include_docs=true__

:::

---

## Home Activity → Question Activity

---

## The Question Screen

---

<TagLinks/>