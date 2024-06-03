---
lang: ko-KR
title: Couchbase Tutorial for Android - Getting Started
description: Article(s) > Couchbase Tutorial for Android - Getting Started
icon: fa-brands fa-android
category:
  - Java
  - Android
  - Gradle
  - Article(s)
tag: 
  - blog
  - kodeco.com
  - java
  - android
  - gradle
  - couchbase
head:
  - - meta:
    - property: og:title
      content: Couchbase Tutorial for Android - Getting Started
    - property: og:description
      content: Article(s) > Couchbase Tutorial for Android - Getting Started
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/kotlin-android-kodeco/853-couchbase-tutorial-for-android-getting-started.html
prev: /programming/java-android/articles/README.md
date: 2017-11-16
isOriginal: false
cover: https://koenig-media.raywenderlich.com/uploads/2016/08/CouchbaseAndroid-twitter.png
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
  name="Couchbase Tutorial for Android - Getting Started"
  desc="In this couchbase tutorial, you will learn how to use prebuilt Couchbase Lite databases, model, query, upload and sync data including attachments."
  url="https://kodeco.com/853-couchbase-tutorial-for-android-getting-started"
  logo="https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-networking-android-56e153082b082a0e4dde87ceadfa482ce6812758e8d896a3f0b37732c718bd96.svg"
  preview="https://koenig-media.raywenderlich.com/uploads/2016/08/CouchbaseAndroid-twitter.png"/>

[Couchbase Mobile](http://developer.couchbase.com/mobile) is a distributed database that runs on mobile devices and on app servers. Having a mobile database under your app results in speedy interactions with your application — even without network connectivity. When connectivity is restored, the full master-master replication automatically synchronizes the data.

Why would you choose Couchbase over the built-in SQLite support or a cloud-based data service?

- __Easy migration__: Since Couchbase is built on NoSQL, you can seamlessly change data as your application grows — without requiring elaborate upgrade scripts.
- __Simple data mapping__: Couchbase lets you store data in a format that closely resembles how your app uses the data.
- __Built-in synchronization__: If you have ever needed to build your own syncing solution, you know how complicated it can be. Couchbase’s Sync Gateway does all of the hard work for you.
- __Offline support__: Couchbase lets you develop your app without thinking about a network connection. You simply write to the local database and let Couchbase handle the rest.

In this Couchbase tutorial, you’ll develop a crowd-sourcing quiz application called __QuizzDroid__. Your answers will be shared (via Sync Gateway) with all other users. So there is no right or wrong answer — only what other users have answered.

![couchbase tutorial demo](https://koenig-media.raywenderlich.com/uploads/2016/07/demo.gif =240x)

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

![couchbase tutorial image01](https://koenig-media.raywenderlich.com/uploads/2016/07/image01.png =240x)

You’re now ready to start bringing the activities to life.

Couchbase Mobile is divided into three components:

- __Couchbase Lite__: An embedded NoSQL database that runs on the device, within your application.
- __Sync Gateway__: An Internet-facing synchronization server that securely syncs data between device and cloud.
- __Couchbase Server__: A highly scalable cloud-based NoSQL server used as a storage engine by Sync Gateway.

You’ll use the Couchbase Lite database and the Sync Gateway in this tutorial in a simulated multi-user environment and briefly touch on the Couchbase server component.

---

## Using the Prebuilt Database

Since Couchbase Lite runs right on the device, you can bundle a prebuilt database in your application. This is optional; most apps start with an empty database and add data entered by the user or synchronized through Sync Gateway.

In this Couchbase tutorial, you will use a database containing a list of questions. [Download the database](https://koenig-media.raywenderlich.com/uploads/2016/07/quizzdroid.cblite2.zip) and move the zip file to <FontIcon icon="fas fa-folder-open"/> __app/src/main/assets/__ in the starter project:

![couchbase tutorial drag-db-finder](https://koenig-media.raywenderlich.com/uploads/2016/07/drag-db-finder-1.png)

The database starts in the <FontIcon icon="fas fa-folder-open"/> __assets__ folder, but Couchbase Lite reads from and persists to the <FontIcon icon="fas fa-folder-open"/> `data/data/com.raywenderlich.quizzdroid/files` folder. In the next section you’ll add code to move the database to its final location.

---

## Initializing the Database

Open <FontIcon icon="fa-brands fa-java"/>`DataManager.java`. This is a singleton class providing access to the database instance throughout the application. Add the following to the constructor:

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
3. If the database doesn’t exist, the `ZipUtils.unzip` method unzips the zip database file into the <FontIcon icon="fas fa-folder-open"/> __files__ directory; otherwise, nothing further needs to be done.
4. The database is instantiated using the `getDatabase` method.

---

## Database Listener

Now that the database is initialized, you should verify it is working properly. This is a perfect job for the __Database Listener__, which is a component that provides an HTTP entry point to the database. This component is optional and is often used for the following reasons:

- __Debugging__: In development, it’s much faster to use the HTTP API to inspect the database than to set breakpoints and examine query results.
- __Peer-to-peer__: Other databases (often running on different devices) can persist data to the listener directly without the need for a server to act as the intermediary. This aspect of Couchbase Mobile isn’t covered in this Couchbase tutorial.
- __Hybrid development__: Used to access the database from JavaScript frameworks within a WebView.
The image below illustrates the Couchbase system architecture. Notice that a database can communicate directly with another database with a listener, instead of having to use the server as a middle-man.

![diagrams.002](https://koenig-media.raywenderlich.com/uploads/2016/07/diagrams.002.png)

Back in <FontIcon icon="fa-brands fa-java"/>`DataManager.java`, add the following below the existing code in the constructor method:

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

Open <FontIcon icon="fas fa-folder-open"/>`model`/<FontIcon icon="fa-brands fa-java"/>`Question.java` and add the following instance variables:

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

Add the following static method to <FontIcon icon="fas fa-folder-open"/>`model`/<FontIcon icon="fa-brands fa-java"/>`Question.java`:

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

Add the following code to the end of the `onCreate` method in <FontIcon icon="fa-brands fa-java"/>`HomeActivity.java`:

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

Notice the call to `ModelHelper.modelForDocument`. Open <FontIcon icon="fa-brands fa-java"/>`ModelHelper.java`, and take a look at `modelForDocument`. It uses the Jackson library to convert the properties in the question `QueryRow` object to the `Question` object.

If you run the app, the screen will still be blank because the Recycler View isn’t drawing the rows. In <FontIcon icon="fas fa-folder-open"/>`adapter`/<FontIcon icon="fa-brands fa-java"/>`HomeAdapter.java`, add the following code to `onBindViewHolder`:

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

::: tip Note

Check out the [Recycler View](https://www.raywenderlich.com/126528/android-recyclerview-tutorial) tutorial if you need a refresher on using Recycler Views.

:::

Build and run your app; you should now see six questions on the home screen.

![image03](https://koenig-media.raywenderlich.com/uploads/2016/07/image03.png =240x)

Well done! In the next section, you’ll add a row click handler to open the Question activity.

::: tip Note

Run the same query using the Listener. The result has the same questions you see in the app. This lets you examine the details of each question document. The query link is **http://localhost:5984/quizzdroid/_design/app/_view/questions?include_docs=true**

:::

---

## Home Activity → Question Activity

Head back to <FontIcon icon="fa-brands fa-java"/>`HomeActivity.java` and add the following code to the end of `onCreate`:

```java
adapter.setOnItemClickListener(new HomeAdapter.OnItemClickListener() {
  @Override
  public void OnClick(View view, int position) {
    Intent intent = new Intent(getApplicationContext(), QuestionActivity.class);
    Question selected = adapter.getQuestions().get(position);
    intent.putExtra(EXTRA_INTENT_ID, selected.get_id());
    startActivity(intent);
  }
});
```

This code assigns an item click listener to the adapter. When you click an item, an Android intent is created containing the document ID of the selected question as an extra, which is then passed along to start the `QuestionActivity`.

Build and run. Click on any row to open the question activity. The Question activity is blank, but the next section will take care of that.

![image04](https://koenig-media.raywenderlich.com/uploads/2016/07/image04.gif =240x)

---

## The Question Screen

Your first task is to load the full question document from the database and use it to populate the Question activity.

### Loading the Question Data

Open <FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java` and paste the following at the end of `onCreate`:

```java
// 1 
Intent intent = getIntent();
String questionId = intent.getStringExtra(HomeActivity.EXTRA_INTENT_ID);

// 2
DataManager manager = DataManager.getSharedInstance(getApplicationContext());
Document document = manager.database.getDocument(questionId);

// 3
mQuestion = ModelHelper.modelForDocument(document, Question.class);
mTextView.setText(mQuestion.getText());
```

Here’s what this code does:

1. Retrieves the `questionId` of the selected question from the intent extra.
2. Uses the `manager` singleton database to load the document with the `questionId`.
3. Deserializes the document into `question` and sets the text property on the `textView`

Build and run your app, and click on a question to display each question detail:

![image05](https://koenig-media.raywenderlich.com/uploads/2016/07/image05.png =240x)

### Multiple Choice in a GridView

The data modeling diagram lists the `options` property as an array of strings. Those are the possible choices shown to the user.

Add the following method to<FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java:`

To display the choices, add the following to the end of onCreate in <FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java`:

```java
mQuestionOptions = (GridView) findViewById(R.id.question_options);
mQuestionOptions.setChoiceMode(AbsListView.CHOICE_MODE_SINGLE);
mQuestionOptions.setNumColumns(2);
mQuestionOptions.setSelector(R.drawable.selector_button);

mQuestionOptions.setAdapter(new QuestionOptionsAdapter(mQuestion.getOptions(), null));

mQuestionOptions.setOnItemClickListener(new AdapterView.OnItemClickListener() {
  @Override
  public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
    mSelectedOption = position;
  }
});
```

Here’s what’s happening in this code segment:

In the above code segment, you create a GridView, assign it an adapter populated with `mQuestionOptions` and then set up a click listener to store the user’s choice in `mSelectedOption`.

Build and run. Open any question and click on the possible options:

![image06](https://koenig-media.raywenderlich.com/uploads/2016/07/image06.png =240x)

In the next section you’ll add a Submit button to save your answer to a new document.

### Writing Data

User answers will be stored in the database as Answer documents. First, you’ll create an Answer model class.

Create a new file <FontIcon icon="fas fa-folder-open"/>`model/`<FontIcon icon="fa-brands fa-java"/>`Answer.java` and add to it the following instance variables:

```java
private String _id;
private String _rev;
private String question_id;
private String type;
private String user_answer;
```

These property names match the ones on the data modeling diagram. Next, add a getter and setter for each instance variable using the <kbd>CTRL</kbd>+<kbd>Enter</kbd> shortcut in Android Studio.

![image06](https://koenig-media.raywenderlich.com/uploads/2016/07/image06-1.gif)

To create Answer instances, add the following constructor in <FontIcon icon="fas fa-folder-open"/>`mode/`<FontIcon icon="fa-brands fa-java"/>`Answer.java`:

```java
public Answer(String question_id, String type, String user_answer) {
  this.question_id = question_id;
  this.type = type;
  this.user_answer = user_answer;
}
```

To save an answer, you’ll add a button with a click handler. Open <FontIcon icon="iconfont icon-code"/>`activity_question.xml` and add the following Button element below the GridView:

```xml
<Button
    android:id="@+id/submit_button"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:onClick="onButtonClicked"
    android:text="Submit" />
```

Within <FontIcon icon="iconfont icon-code"/>`activity_question.xml`, create a click handler with the <kbd>Alt</kbd>+<kbd>Enter</kbd> shortcut:

![onclick](https://koenig-media.raywenderlich.com/uploads/2016/07/onclick.gif)

Add the following to the body of `onButtonClicked`.

```java
  Answer answer = new Answer(mQuestion.get_id(), "answer", 
      mQuestion.getOptions().get(mSelectedOption));
  ModelHelper.save(DataManager.getSharedInstance(getApplicationContext()).database, answer);
```

This instantiates a new answer object and saves it using `ModelHelper.save`.

Build and run, select an answer and tap Submit.

![image07](https://koenig-media.raywenderlich.com/uploads/2016/07/image07.png =240x)

Well done! You can now save answers to the database.

::: tip Note

There’s no visual cue to indicate the answer was saved, but you should see the `doc_count` value increase at http://localhost:5984/quizzdroid

:::

One more feature to add before you dive into synchronization is to display the image. The generic term in Couchbase is Attachment.

### Using Attachments

Add the following code to the end of `onCreate` in <FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java`:

```java
Revision revision = document.getCurrentRevision();
Attachment attachment = revision.getAttachment("image");
if (attachment != null) {
  InputStream is = null;
  try {
    is = attachment.getContent();
  } catch (CouchbaseLiteException e) {
    e.printStackTrace();
  }
  Drawable drawable = Drawable.createFromStream(is, "image");
  mImageQuestion.setImageDrawable(drawable);
}
```

This uses the current document revision to load the attachment named image as an `InputStream`. It then converts the stream into a Drawable and assigns it to the `mImageQuestion` ImageView shown above the question.

![image08](https://koenig-media.raywenderlich.com/uploads/2016/07/image08.png)

::: tip Note

Make sure to import `java.io.InputStream` for the InputStream class, not the `com.couchbase` version.

:::

Build and run your app; select a question and the image will appear:

![image09](https://koenig-media.raywenderlich.com/uploads/2016/07/image09.png =240x)

::: tip Note

This Couchbase tutorial only covers how to read attachments. [Refer to the Couchbase documentation](http://developer.couchbase.com/documentation/mobile/1.2/develop/guides/couchbase-lite/native-api/attachment/index.html) to learn how to save attachments with a write operation.

:::

---

## Adding Synchronization

You will use Sync Gateway in what’s known as _walrus_ mode, which is an in-memory, development-only mode. In production, you would install both Couchbase Server and Sync Gateway.

### Installing Sync Gateway

[Download Sync Gateway community edition](http://www.couchbase.com/nosql-databases/downloads#couchbase-mobile) and unzip the file. The executable is located in the <FontIcon icon="fas fa-folder-open"/> `bin` folder. If you unzipped the file to the Downloads folder, start it with this command:

```sh
$ ~/Downloads/couchbase-sync-gateway/bin/sync_gateway -dbname="quizzdroid"
```

You should see `Starting server on localhost:4984` ... in your terminal window.

You can now head to http://localhost:4984 to check that it’s up and running:

![browser](https://koenig-media.raywenderlich.com/uploads/2016/05/browser.png)

Now that the Sync Gateway is running, you’ll add some code to replicate the database to the server.

### Synchronization

Set up the push and pull replications by adding the following code to the end of the constructor in <FontIcon icon="fa-brands fa-java"/>`DataManager.java`.

```java
// 1
URL syncGatewayURL = null;
try {
  String SYNC_GATEWAY_URL = "http://localhost:4984/quizzdroid";
  syncGatewayURL = new URL(SYNC_GATEWAY_URL);
} catch (MalformedURLException e) {
  e.printStackTrace();
}

// 2
mPush = database.createPushReplication(syncGatewayURL);
mPush.setContinuous(true);
mPush.start();

// 3
mPull = database.createPullReplication(syncGatewayURL);
mPull.setContinuous(true);
mPull.start();
```

This code segment does the following:

1. Instantiates a URL pointing to http://localhost:4984/quizzdroid, which is your local Sync Gateway instance.
2. Starts a [push replication](https://github.com/couchbase/couchbase-lite-ios/wiki/Replication#replication) in continuous mode, which is the operation that will send data from the local database to the server.
3. Starts a [pull replication](https://github.com/couchbase/couchbase-lite-ios/wiki/Replication#replication) in continuous mode, which is the operation that will retrieve data from the server and save it to the local database.

Before you can build and run, you’ll need to use an ADB command to ensure that QuizzDroid, running on a plugged-in device or emulator, can reach the server over localhost.

With the emulator running, run the following from the command line:

```sh
adb reverse tcp:4984 tcp:4984
```

::: tip Note

This command only works on devices running Android 5.0+ (API 21). Instead of setting up the reverse proxy, you can replace localhost in the previous code block with 10.0.2.2 for Android stock emulators, 10.0.3.2 for Genymotion emulators or, if you’re deploying to a device, the local IP address of your development machine.

:::

Build and run your app; you should see a new document appear on the Sync Gateway admin UI (http://localhost:4985/_admin/db/quizzdroid, note the different port number) every time you answer a question.

![Sync Gateway UI](https://koenig-media.raywenderlich.com/uploads/2016/07/Sync-Gateway-UI-480x230.png)

::: tip Note

Using Android Studio’s Instant Run sometimes doesn’t set up the sync correctly; if you don’t see the documents in the Sync Gateway admin, try quitting the app and then build and run again.

:::

So far so good, but what about displaying answers from other users? You’ll do exactly that in the next section.

---

## Aggregating Data

Data aggregation is a problem across many applications. Couchbase Lite lets you run those data queries using the full capabilities of map and reduce. To run aggregation queries on the rows emitted by the map function, you can use a reduce function to take several rows and aggregate them together in a single object.

You’ll write a view to query the number of answers for each possible choice. You’ll define a map function which returns the number of answers for each question, group them by their value and count the number of rows in each group.

The requirements for this query are:

- Get all answers that belong to a given question
- Count the number of answers for each possible choice

With that in mind, you can emit the `question_id` and `user_answer` fields as a compound key with a null value, while using a reduce function to count the number of emitted rows.

Add the following class method to <FontIcon icon="fa-brands fa-java"/>`Answer.java`:

```java
public static Query getAnswersForQuestion(Database database, String questionId) {
  View view = database.getView("app/answers");
  if (view.getMap() == null) {
    view.setMapReduce(new Mapper() {
      @Override
      public void map(Map<String, Object> document, Emitter emitter) {
        if (document.get("type").equals("answer")) {
          List<Object> keys = new ArrayList<>();
          keys.add((String) document.get("question_id"));
          keys.add((String) document.get("user_answer"));
          emitter.emit(keys, null);
        }
      }
    }, new Reducer() {
      @Override
      public Object reduce(List<Object> keys, List<Object> values, boolean rereduce) {
        return values.size();
      }
    }, "1");
  }
  Query query = view.createQuery();
  query.setGroupLevel(2);
  query.setStartKey(Arrays.asList(questionId));
  query.setEndKey(Arrays.asList(questionId, new HashMap<String, Object>()));
  return query;
}
```

Grouping is a powerful feature of Couchbase. It’s available on a Query using the numeric `groupLevel` property, which defaults to 0. It takes the entire range of rows from the query and coalesces together adjacent rows with the same key.

Notice that `groupingLevel = 2` coalesces the rows by key. Keys that are arrays are called __compound keys__; a group level of 2 means the query will coalesce rows with the same `question_id` and `user_answer`.

You can read more about `setStartKey()` and `setEndKey()` in the Couchbase [documentation for configuring queries](http://developer.couchbase.com/documentation/mobile/current/develop/guides/couchbase-lite/native-api/query/index.html).

---

## Run the Query

Time to run the query and use the results. Add the following method to <FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java`:

```java
private Map<String,Integer> getAnswerCounts(QueryEnumerator answers) {

  Map<String,Integer> answerCounts = new HashMap<String, Integer>();

  for (String option: mQuestion.getOptions()) {
    answerCounts.put(option, 0);
  }

  for (QueryRow row : answers) {
    LazyJsonArray<Object> key = (LazyJsonArray<Object>) row.getKey();
    String answer = (String) key.get(1);
    answerCounts.put(answer, (Integer)row.getValue());
  }

  return answerCounts;
}
```

The above method takes a `QueryEnumerator` returned from `getAnswersForQuestion()` and returns a `Map` that stores an answer count for each option. The map object makes it quick and easy to access answer counts for each option.

Add the following code to `onCreate()`, just before the line `mQuestionOptions = (GridView) findViewById(R.id.question_options)`:

```java
Query answers = Answer.getAnswersForQuestion(manager.database, mQuestion.get_id());
QueryEnumerator answersQuery = null;
try {
  answersQuery = answers.run();
} catch (CouchbaseLiteException e) {
  e.printStackTrace();
}
```

This code stores a `QueryEnumerator` to be used when calling `getAnswerCounts()` below.

Next, find the call to `mQuestionOptions.setAdapter(new QuestionOptionsAdapter(mQuestion.getOptions(), null));` and replace it with this line:

```java
mQuestionOptions.setAdapter(new QuestionOptionsAdapter(mQuestion.getOptions(),
    getAnswerCounts(answersQuery)));
```

This passes the `Map` returned from `getAnswerCounts()` into the GridView adapter, allowing it to display answer counts.

### Add a LiveQuery

Next, you’ll add the method to set up a LiveQuery to keep the answer counts updated. A LiveQuery is a great way to keep your interface updated with database changes. It automatically refreshes any time Database changes affect your query.

In <FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java`, add the following method:

```java
private void showAnswers() {
  DataManager manager = DataManager.getSharedInstance(getApplicationContext());
  Query answersQuery = Answer.getAnswersForQuestion(manager.database, mQuestion.get_id());
  LiveQuery liveQuery = answersQuery.toLiveQuery();

  liveQuery.addChangeListener(new LiveQuery.ChangeListener() {
    @Override
    public void changed(LiveQuery.ChangeEvent event) {
      QueryEnumerator result = event.getRows();

      Map<String,Integer> counts = getAnswerCounts(result);

      final QuestionOptionsAdapter adapter =
          (QuestionOptionsAdapter)mQuestionOptions.getAdapter();

      adapter.setAnswerCounts(counts);

      runOnUiThread(new Runnable() {
        @Override
        public void run() {
          adapter.notifyDataSetChanged();
        }
      });
    }
  });
  liveQuery.start();
}
```

This code starts by creating a `LiveQuery` from `Answer.getAnswersForQuestion`.

You then add a `ChangeListener` to the `liveQuery` object. The `liveQuery` object calls the `changed` method when required, and passes to it a `ChangeEvent` object.

Next, you use the previously created `getAnswerCounts` to return the map of answer counts, which is passed to the GridView adapter to refresh the counts in the UI.

`Activity.runOnUiThread` updates the GridView on the UI thread.

Add the following line to the end of `onCreate` in <FontIcon icon="fa-brands fa-java"/>`QuestionActivity.java`.

```java
showAnswers();
```

Build and run your app; open a question and answer it (note that you can answer it more than once).

![image10](https://koenig-media.raywenderlich.com/uploads/2016/07/image10.png =240x)

Great job! You can now see your own answers, but what about those from other users?

By running two instances of the app at the same time, both accessing the same Sync Gateway, you will have real-time visibility into other user’s answers!

---

## Simulating Multiple Users

In order to simulate other users answering the questions, you can run the app on a second emulator.

From Android Studio, you can deploy the app on multiple devices simultaneously using the `[Run]` button and <kbd>Shift</kbd> key :

![deploy-multiple-devices](https://koenig-media.raywenderlich.com/uploads/2016/07/deploy-multiple-devices.png)

::: tip Note

The above won’t work in Debug mode, so if you’re having difficulty, be sure to use the `[Run]` command in Android Studio, not `[Debug]`.

:::

If your using the reverse proxy method, you will need to make sure it is enabled for both devices. List the running emulators with the following:

```sh
adb devices
# 
# List of devices attached
# emulator-5556	device
# emulator-5554	device
```

With more than one emulator device, you must specify the device in ADB commands. Enable the reverse proxy for access to Sync Gateway on both devices:

```sh
adb -s emulator-5554 reverse tcp:4984 tcp:4984
adb -s emulator-5556 reverse tcp:4984 tcp:4984
```

Now you can start answering questions on both devices. Notice the answers are updated automatically across emulators due to the live query.

![image11](https://koenig-media.raywenderlich.com/uploads/2016/07/image11-3.gif)

Well done! You’ve built a shareable quiz application that works equally well when it’s offline.

---

## Where to Go From Here?

You can get the full source code for this project as a [downloadable zip](https://koenig-media.raywenderlich.com/uploads/2016/09/quizzdroid-final.zip) or as a [<FontIcon icon="iconfont icon-github"/> repo](https://github.com/jamiltz/quizzdroid) on GitHub.

The [Couchbase Lite Guides](http://developer.couchbase.com/documentation/mobile/1.2/develop/guides/couchbase-lite/native-api/index.html) have detailed explanation for every concept covered in this Couchbase tutorial. Also check out [<FontIcon icon="iconfont icon-github"/> `couchbaselabs/photo-drop`](https://github.com/couchbaselabs/photo-drop), a peer-to-peer photo sharing application and [<FontIcon icon="iconfont icon-github"/> `couchbaselabs/todolite-android`](https://github.com/couchbaselabs/todolite-android), a multi-user todo list application, both built on Couchbase.

If you found this tutorial interesting, you might want to try adding peer-to-peer sync capabilities. Start by replacing the remote URL pointing to a Sync Gateway instance with one from another device on the same local network. The challenge in this case is discovering the IP addresses of peer devices. One solution that works well is to use [NsdManager](https://developer.android.com/reference/android/net/nsd/NsdManager.html), the Android implementation of mDNS.

Feel free to share your feedback, findings and ask any questions in the comments below or in the forums!

---

<TagLinks/>