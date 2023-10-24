---
lang: ko-KR
title: SQLite With Swift Tutorial - Getting Started
description: 🕊️Kodeco - Swift > SQLite With Swift Tutorial - Getting Started
tags: ["crashcourse", "kotiln", "android"]
meta:
  - name: 🕊️Kodeco - Swift > SQLite With Swift Tutorial - Getting Started
    content: SQLite With Swift Tutorial - Getting Started
  - property: og:title
    content: SQLite With Swift Tutorial - Getting Started
  - property: og:description
    content: 🕊️Kodeco - Swift > SQLite With Swift Tutorial - Getting Started
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/kodeco-swift/6620276-sqlite-with-swift-tutorial-getting-started.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: SQLite With Swift Tutorial - Getting Started
desc: In this SQLite with Swift tutorial, you’ll learn to use a SQLite database with Swift projects by creating tables and inserting, updating and deleting rows.
link: https://www.kodeco.com/6620276-sqlite-with-swift-tutorial-getting-started
logo: https://assets.carolus.kodeco.com/assets/murakami/category-icons/category-saving-data-persistence-ios-09771a6a821ae79fa6653f51395c14d66cb117d87648bb17bd04f20f9ff48576.svg
color: rgba(135, 99, 210, 0.2)
```

In software development, it doesn’t take long before you need to persist app data. Often, this comes in the form of data structures. But how do you store those structures efficiently?

Fortunately, some great minds have developed solutions for storing structured data in databases and writing language features to access that data. __SQLite__ is available by default on iOS.

In fact, if you’ve used [Core Data](https://www.raywenderlich.com/145809/getting-started-core-data-tutorial) before, you’ve already used SQLite. Core Data is just a layer on top of SQLite that provides a more convenient API.

In this SQLite with Swift tutorial, you’ll learn how to perform the following database operations:

- Create and connect to a database.
- Create a table.
- Insert, update, and delete rows.
- Query the database.
- Handle SQLite errors.

After learning how to perform these fundamental operations, you’ll see how to wrap them in a Swift-like manner. This will let you write abstraction APIs for your apps and avoid working with the more complicated SQLite C APIs. :]

Finally, you’ll briefly learn about the popular open-source Swift wrapper [<FontIcon icon="iconfont icon-github"/>stephencelis/SQLite](https://github.com/stephencelis/SQLite.swift). This will give you a basic understanding of how underlying frameworks work within a wrapper.

::: note Note

Databases like SQLite are massive topics to cover, and covering how to use them is out of scope for this tutorial. This tutorial assumes that you have a basic understanding of relational databases and that you’re primarily here to learn to use SQLite with Swift.

:::

---

## Getting Started

Start by using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial, then open <FontIcon icon="iconfont icon-file"/>`SQLiteTutorial.xcworkspace` from the starter folder. Next, open the <FontIcon icon="iconfont icon-select"/>`[Tutorial]` playground from the <FontIcon icon="iconfont icon-select"/>`[Project navigator]`.

::: note Note

The project is in an Xcode workspace because it uses the __SQLite3__ dependency as an embedded binary. This binary contains all the functionality for the SQLite code you’ll write in this tutorial.

:::

Long-click the Play button at the bottom and notice that your playground runs manually instead of automatically:

![Manual Run drop-down menu](https://koenig-media.raywenderlich.com/uploads/2019/11/sqliteswift_manually_run_playground_highlighted.png)

This means it will only execute when you explicitly invoke the execution by clicking the Play button.

You might also see a `destroyPart1Database()` call at the top of the page. You can safely ignore this since the database file self-destructs each time the playground runs. This ensures all statements execute successfully as you move through this SQLite with Swift tutorial.

---

## Why Should You Choose SQLite?

SQLite isn’t the only way to persist data on iOS. Besides [Core Data](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/CoreData/index.html), there are many other alternatives for data persistence including [Realm](https://realm.io), [Couchbase Lite](http://developer.couchbase.com/mobile/#couchbase-lite), [Firebase](https://firebase.google.com/docs) and [NSCoding](http://nshipster.com/nscoding).

Each of these has its own pros and cons — including SQLite itself. There’s no silver bullet for data persistence. As the developer, it’s up to you to determine which option surpasses the others based on your app’s requirements.

SQLite has some advantages:

- Shipped with iOS, it adds no overhead to your app’s bundle.
- SQLite released version 1.0 in August 2000, so it’s tried and tested.
- It’s well-maintained with frequent releases.
- Open-source.
- It uses a query language that’s familiar to database developers and administrators.
- Cross-platform.

The cons of SQLite are subjective and opinionated, so that research is up to you! :]

Now that you’ve committed to finding out how SQLite works with Swift, it’s time to get to know some of the most basic SQLite APIs.

---

## The C API

This part of the SQLite with Swift tutorial walks you through the most common SQLite APIs. Wrapping the __C API__ in Swift methods is ideal, but work through the __C code__ first. You’ll wrap your C code in the second part of this tutorial.

### Opening a Connection

Before doing anything, create a __database connection__.

Add the following function in your playground:

```swift
func openDatabase() -> OpaquePointer? {
  var db: OpaquePointer?
  guard let part1DbPath = part1DbPath else {
    print("part1DbPath is nil.")
    return nil
  }
  if sqlite3_open(part1DbPath, &db) == SQLITE_OK {
    print("Successfully opened connection to database at \(part1DbPath)")
    return db
  } else {
    print("Unable to open database.")
    PlaygroundPage.current.finishExecution()
  }
}
```

This function calls `sqlite3_open()`, which opens or creates a new database file. If it’s successful, it returns an `OpaquePointer`, which is a __Swift type__ for __C pointers__. When you call this function, you’ll have to capture the returned pointer to interact with the database.

Many of the SQLite functions return an `Int32` result code, which is usually a constant in the SQLite library. For example, `SQLITE_OK` represents the result code `0`. Find a list of result codes on the [official SQLite site](https://www.sqlite.org/rescode.html).

Add the following to open the database:

```swift
let db = openDatabase()
```

Click the Play button to run the playground and watch the console output. If the console isn’t open, click the <FontIcon icon="iconfont icon-select"/>`[Show the Debug area]` button to the left of the Play button:

![Showing the Debug area](https://koenig-media.raywenderlich.com/uploads/2019/11/sqliteswift_show_debug_area-2.png)

If `openDatabase()` succeeds, you’ll see some output similar to that below:

```
Successfully opened connection to database at /Users/username/Library/Developer/XCPGDevices/A1EF655D-E318-4CDC-A35A-54349AFE1E62/data/Containers/Data/Application/43A00877-DF24-4E86-8682-22876DEEAFE4/Documents/Part1.sqlite
```

### Creating a Table

Now that you have a connection to a database file, you can create a table. You’ll work with a very simple table to store contacts.

The table consists of two columns: `Id`, which is an `INT` and a `PRIMARY KEY`, and `Name`, which is a `CHAR(255)`.

![The table with ID and Name headers and filled-out rows](https://koenig-media.raywenderlich.com/uploads/2019/12/SQLite-table.png)

Add the following statement, which contains an SQL statement to create the table. Note you’re using Swift’s multi-line syntax:

```swift
let createTableString = """
CREATE TABLE Contact(
Id INT PRIMARY KEY NOT NULL,
Name CHAR(255));
"""
```

Next, add this function:

```swift
func createTable() {
  // 1
  var createTableStatement: OpaquePointer?
  // 2
  if sqlite3_prepare_v2(db, createTableString, -1, &createTableStatement, nil) == 
      SQLITE_OK {
    // 3
    if sqlite3_step(createTableStatement) == SQLITE_DONE {
      print("\nContact table created.")
    } else {
      print("\nContact table is not created.")
    }
  } else {
    print("\nCREATE TABLE statement is not prepared.")
  }
  // 4
  sqlite3_finalize(createTableStatement)
}
```

Going over this, step-by-step:

Next, you check the returned status code to ensure the statement compiled successfully. If so, the process moves to step 3. Otherwise, you print a message noting the statement didn’t compile.

1. First, you create a pointer to reference in the next step.
2. `sqlite3_prepare_v2()` compiles the SQL statement into byte code and returns a status code — an important step before executing arbitrary statements against your database.
3. `sqlite3_step()` runs the compiled statement. In this case, you only step once because this statement has a single result. Later in this tutorial, you’ll see when it’s necessary to step multiple times for a single statement.
4. You must always call `sqlite3_finalize()` on your compiled statement to delete it and avoid resource leaks. Once a statement finalizes, you should never use it again.

::: note Note

If you want to learn more about what happened in step 2, check out the SQLite documentation about [compiling an SQL statement](https://www.sqlite.org/c3ref/prepare.html).

:::

Now, add the following function call:

```swift
createTable()
```

Run your playground. You’ll see the following in your console output:

```
Contact table created.
```

Now that you have a table, it’s time to add some data to it. You’re going to add a single row with an `Id` of `1` and `Name` of `Ray`.

### Inserting Data

### Challenge: Multiple Inserts

### Querying Contacts

### Challenge: Printing Every Row

### Updating Contacts

### Deleting Contacts

### Handling Errors

### Closing the Database Connection

---

## SQLite With Swift

### Wrapping Errors

### Wrapping the Database Connection

### Wrapping the Prepare Call

### Creating a Contact Struct

### Wrapping the Table Creation

### Wrapping Insertions

### Wrapping Reads

---

## Introducing <FontIcon icon="fas fa-dove"/>`SQLite.swift`

---

## Where to Go From Here?

Download the completed project by using the [<FontIcon icon="iconfont icon-select"/>`[Download Materials]`][download-material] button at the top or bottom of this tutorial. There, you can see other common tasks that this tutorial didn’t have time to cover, including the implemented updates, deletes and multiple row handling.

Debugging is another important part of using SQLite with Swift. In many cases, you’ll need some kind of database browser to see what’s going on under the hood. There are many different apps that can help with this. A quick internet search will show which ones are best for you.

You can also access your SQLite databases directly from your Terminal by typing <FontIcon icon="iconfont icon-file"/>`sqlite3 file.db`. From there, use the `.help` command to see a list of commands, or simply start executing SQL statements directly at the prompt. Find more information on the command-line SQLite client on the [main SQLite site](https://www.sqlite.org/cli.html).

I hope you enjoyed this whirlwind introduction to working with SQLite and Swift! If you have any questions or comments, please join the discussion below.

---

<TagLinks />

[download-material]: https://koenig-media.raywenderlich.com/uploads/2020/01/SQLite-With-Swift-Getting-Started.zip

